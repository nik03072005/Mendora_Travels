import mongoose from 'mongoose';

const tourPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour package name is required'],
    trim: true,
  },
  originalPrice: {
    type: Number,
    required: [true, 'Original price is required'],
    min: [0, 'Original price cannot be negative'],
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  discountedPrice: {
    type: Number,
    required: [true, 'Discounted price is required'],
    min: [0, 'Discounted price cannot be negative'],
  },
  noOfDays: {
    type: Number,
    required: [true, 'Number of days is required'],
    min: [1, 'Number of days must be at least 1'],
  },
  noOfNights: {
    type: Number,
    required: [true, 'Number of nights is required'],
    min: [0, 'Number of nights cannot be negative'],
  },
  locations: [{
    type: String,
    trim: true,
  }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviewCount: {
    type: Number,
    min: 0,
    default: 0
  },
  tripSummary: [{
    day: {
      type: Number,
      required: [true, 'Day number is required'],
      min: [1, 'Day number must be at least 1'],
    },
    title: {
      type: String,
      required: [true, 'Day title is required'],
      trim: true,
    },
    transfer: {
      type: String,
      required: [true, 'Transfer details are required'],
      trim: true,
    },
    activity: {
      type: String,
      required: [true, 'Activity description is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Day description is required'],
      trim: true,
    },
    dayImage:{
      type:String,
      required:true
    }
  }],
  highlights: [{
    type: String,
    required: [true, 'Highlight description is required'],
    trim: true,
  }],
  hotelsIncluded: [{
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    nights: {
      type: String,
      required: [true, 'Number of nights is required'],
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Hotel name is required'],
      trim: true,
    },
  }],
  packageDetails: {
    included: [{
      type: String,
      required: [true, 'Included item description is required'],
      trim: true,
    }],
    excluded: [{
      type: String,
      required: [true, 'Excluded item description is required'],
      trim: true,
    }],
  },
  imageUrls: [{
    type: String,
    required: [true, 'At least one image URL is required'],
    // match: [/^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/i, 'Please enter a valid image URL'],
  }],
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination',
    required: [true, 'Destination is required'],
  },
   reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    }],
}, {
  timestamps: true,
});

export default mongoose.model('TourPackage', tourPackageSchema);