import Faq from "../models/Faq.js";


 export const createFaq = async (req, res) => {
    try {
        const { destinationId, question, answer } = req.body;
    
        if (!destinationId || !question || !answer) {
            return res.status(400).json({ message: 'All fields are required' });
        }
    
        const newFaq = new Faq({
            destinationId,
            question,
            answer
        });
    
        await newFaq.save();
    
        res.status(201).json({ success: true, data: newFaq });
    } catch (error) {
        console.error("Error creating FAQ:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    }
export const getAllFaqs = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Destination ID:", id);

    if (!id) {
      return res.status(400).json({ message: 'Destination ID is required' });
    }

    // Match destinationId (not id)
    const faqs = await Faq.find({ destinationId: id }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: faqs });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: 'Question and answer are required' });
    }

    const updatedFaq = await Faq.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true }
    );

    if (!updatedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    res.status(200).json({ success: true, data: updatedFaq });
  } catch (error) {
    console.error("Error updating FAQ:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFaq = await Faq.findByIdAndDelete(id);

    if (!deletedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    res.status(200).json({ success: true, message: 'FAQ deleted successfully' });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};