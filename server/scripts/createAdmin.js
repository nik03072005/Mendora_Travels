import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI;
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Get admin credentials from command line arguments or use defaults
    const email = process.argv[2] || 'admin@mendoratravels.com';
    const password = process.argv[3] || 'Admin@123';

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log(`Admin with email ${email} already exists`);
      
      // Ask if want to update password
      const updatePassword = process.argv[4] === '--update';
      if (updatePassword) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        existingAdmin.password = hashedPassword;
        existingAdmin.role = 'admin';
        await existingAdmin.save();
        console.log('Admin password updated successfully');
      } else {
        console.log('Use --update flag to update the password');
      }
    } else {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create admin user
      const admin = new User({
        email,
        password: hashedPassword,
        role: 'admin'
      });

      await admin.save();
      console.log('Admin user created successfully!');
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('\n⚠️  IMPORTANT: Please change the default password after first login!');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
