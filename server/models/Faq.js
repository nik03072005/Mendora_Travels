import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    destinationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
        required: true,
    },
    question: {
        type:String,
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
}, { timestamps: true });
const Faq = mongoose.models.Faq || mongoose.model("Faq", faqSchema);
export default Faq;