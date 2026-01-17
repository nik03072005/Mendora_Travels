import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI,"cfhbhdfhbfhbdfbgf");
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;