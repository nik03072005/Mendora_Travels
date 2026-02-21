import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent directory (server folder)
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const checkAdmin = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI;
    console.log('Connecting to:', mongoURI);
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB\n');

    // Get database name
    const dbName = mongoose.connection.db.databaseName;
    console.log('📁 Database Name:', dbName);
    
    // Get collection name
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\n📂 Available Collections:');
    collections.forEach(col => console.log(`   - ${col.name}`));
    
    // Find admin user
    const admin = await User.findOne({ email: 'admin@mendoratravels.com' });
    
    if (admin) {
      console.log('\n✅ Admin user found!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('Collection: users');
      console.log('Email:', admin.email);
      console.log('Role:', admin.role);
      console.log('ID:', admin._id);
      console.log('Created At:', admin.createdAt);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('\n📍 Storage Location:');
      console.log(`   Database: ${dbName}`);
      console.log(`   Collection: users`);
      console.log(`   Document ID: ${admin._id}`);
    } else {
      console.log('\n❌ Admin user not found in database');
    }
    
    // Count total users
    const totalUsers = await User.countDocuments();
    console.log(`\n👥 Total users in collection: ${totalUsers}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

checkAdmin();
