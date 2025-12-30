import mongoose from "mongoose";

const travelInquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  travel_date: {
    type: Date,
    required: true,
  },
  traveller_count: {
    type: Number,
    required: true,
    min: 1,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  referenceModel: {
    type: String,
    required: true,
    enum: ['TourPackage', 'Destination'], // define allowed model names
  },
  referenceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'referenceModel', // dynamic reference
  },
  status: {
    type: String,
    enum: ["pending", "resolved"],
    default: "pending",
  }
}, { timestamps: true });

const TravelInquiry = mongoose.models.TravelInquiry || mongoose.model("TravelInquiry", travelInquirySchema);
export default TravelInquiry;
