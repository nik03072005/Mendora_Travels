import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  destinationName: {
    type: String,
    required: [true, 'Destination name is required'],
    unique: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  tourPackages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TourPackage',
  }],
  gallery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gallery', // References a single Gallery document
  },
   reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  slug: {
    type: String,
    unique: true,
    trim: true,
  },
});

destinationSchema.index({ destinationName: 'text' });

export default mongoose.model('Destination', destinationSchema);
