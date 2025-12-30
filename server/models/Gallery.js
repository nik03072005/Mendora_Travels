import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination', // References the Destinations collection
    required: true,
  },
  images: [
    {
      type: String, // Simple array of image URLs
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Gallery', gallerySchema);