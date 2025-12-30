import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [100, 'Job title cannot exceed 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Job description is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Job', jobSchema);