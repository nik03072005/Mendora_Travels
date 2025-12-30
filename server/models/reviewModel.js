import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  date: {
    type: Date,
    default: Date.now
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
  },
  images: [{
    type: String,
  }],
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination',
    required: [true, 'Destination ID is required']
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TourPackage',
    required: [true, 'Package ID is required']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { 
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

export default mongoose.model('Review', reviewSchema);
