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
  clicks: {
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
    dayImage: {
      type: String,
      default: null,
      validate: {
        validator: function(v) {
          // Only allow null or valid string (no objects!)
          return v === null || typeof v === 'string';
        },
        message: 'dayImage must be a string URL or null'
      }
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
  tags: [{
    type: String,
    enum: ['honeymoon', 'corporate', 'group-tour', 'weekend-getaway', 'adventure', 'family', 'luxury', 'budget'],
    trim: true,
  }],
   reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    }],
}, {
  timestamps: true,
});

// 🛡️ Pre-save hook to sanitize dayImage values
tourPackageSchema.pre('save', function(next) {
  if (this.tripSummary && Array.isArray(this.tripSummary)) {
    this.tripSummary = this.tripSummary.map(day => {
      // If dayImage is an object or invalid, convert to null
      if (typeof day.dayImage === 'object' && day.dayImage !== null) {
        console.warn(`⚠️  Schema validation: Invalid dayImage for day ${day.day}, converting to null`);
        day.dayImage = null;
      } else if (typeof day.dayImage === 'string' && day.dayImage.trim() === '') {
        day.dayImage = null;
      }
      return day;
    });
  }
  next();
});

// 🛡️ Pre-update hook to sanitize dayImage values
tourPackageSchema.pre('findOneAndUpdate', function(next) {
  const update = this.getUpdate();
  if (update.tripSummary && Array.isArray(update.tripSummary)) {
    update.tripSummary = update.tripSummary.map(day => {
      if (typeof day.dayImage === 'object' && day.dayImage !== null) {
        console.warn(`⚠️  Schema validation: Invalid dayImage for day ${day.day}, converting to null`);
        day.dayImage = null;
      } else if (typeof day.dayImage === 'string' && day.dayImage.trim() === '') {
        day.dayImage = null;
      }
      return day;
    });
  }
  next();
});

export default mongoose.model('TourPackage', tourPackageSchema);