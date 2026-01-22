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
  // Page Content Fields for Dynamic Rendering
  heroSection: {
    title: {
      type: String,
      default: '',
    },
    tagline: {
      type: String,
      default: '',
    },
    startingPrice: {
      type: Number,
      default: 0,
    },
    durationRange: {
      type: String,
      default: '',
    },
    heroImage: {
      type: String,
      default: '',
    },
  },
  aboutSection: {
    shortDescription: {
      type: String,
      default: '',
    },
    expandedDescription: {
      type: String,
      default: '',
    },
  },
  subDestinations: [{
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    packagesCount: {
      type: Number,
      default: 0,
    },
  }],
  activities: [{
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
  }],
  groupTours: [{
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: '',
    },
    totalSeats: {
      type: Number,
      default: 0,
    },
    bookedSeats: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
      default: '',
    },
    duration: {
      type: String,
      default: '',
    },
    highlights: [{
      type: String,
    }],
  }],
  category: {
    type: String,
    enum: ['international', 'domestic'],
    default: 'international',
  },
  type: {
    type: String,
    enum: ['country', 'state', 'region', 'city'],
    default: 'country',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

destinationSchema.index({ destinationName: 'text' });

export default mongoose.model('Destination', destinationSchema);
