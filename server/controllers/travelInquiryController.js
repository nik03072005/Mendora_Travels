import TravelInquiry from "../models/TravelInquiry.js";
import sendEmail from "../services/emailService.js";
import getCallbackRequestTemplate from "../utils/CallbackEmailtemp.js";
import Destination from '../models/Destination.js';
import TourPackage from '../models/TourPackage.js';
import getConnectWithUsTemplate from "../utils/connectWithUsTemplate.js";


// POST /api/travel-inquiry
export const submitInquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      travel_date,
      message,
      referenceId,
      referenceModel,
      traveller_count
    } = req.body;
    // console.log("Received inquiry data:", req.body);

    if (!name || !email || !phone || !travel_date || !message || !referenceId || !referenceModel || !traveller_count) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newInquiry = new TravelInquiry({
      name,
      email,
      phone,
      traveller_count,
      travel_date,
      message,
      referenceId,
      referenceModel,
    });
    
    console.log(referenceModel,"f")
    console.log(name,email,phone,travel_date,message)

    let referenceName = '';
    if (referenceModel === 'Destination') {
      const destination = await Destination.findById(referenceId);
      if (!destination) {
        return res.status(404).json({ error: "Destination not found" });
      }
      // console.log(destination,"lop")
      referenceName = destination.destinationName; // Assuming 'name' field exists in Destination model
    } else if (referenceModel === 'TourPackage') {
      const tourpackge = await TourPackage.findById(referenceId);
      if (!tourpackge) {
        return res.status(404).json({ error: "Package not found" });
      }
      referenceName = tourpackge.title || tourpackge.name; // Assuming 'title' or 'name' field exists in Package model
    } else {
      return res.status(400).json({ error: "Invalid reference model" });
    }
    console.log(referenceName,"sw")
   await sendEmail({
      to: process.env.TOEmailId,
      subject: `Inquiry for ${referenceName}`,
      html: referenceModel=='TourPackage'? getCallbackRequestTemplate({name,email,phone,preferred_date:travel_date,tourPackage:referenceName,message}): getConnectWithUsTemplate({name,email,phone,destination:referenceName,message}),
    });
    await newInquiry.save();

    res.status(201).json({ success: true, message: "Inquiry submitted successfully" });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await TravelInquiry.find()
      .populate("referenceId", "name destinationName") // in case it's either TourPackage (name) or Destination (destinationName)
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: inquiries });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const resolveInquiry = async (req, res) => {
  try {
    const { id } = req.params;

   await TravelInquiry.findByIdAndUpdate(
  req.params.id,
  { status: req.body.status },
  { new: true, runValidators: false }  // ← Important part
);
    // await inquiry.save();
    res.status(200).json({ success: true, message: "Inquiry status updated successfully" });
  }
  catch (error) {
    console.error("Error updating inquiry status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;

    const inquiry = await TravelInquiry.findByIdAndDelete(id);
    if (!inquiry) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    res.status(200).json({ success: true, message: "Inquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
