import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import TourPackage from '../models/TourPackage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from server directory
dotenv.config({ path: join(__dirname, '../.env') });

const deleteAllPackages = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('Error: MONGODB_URI is not defined in .env file');
      process.exit(1);
    }
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');
    
    // Get count before deletion
    const countBefore = await TourPackage.countDocuments();
    console.log(`\nTotal packages before deletion: ${countBefore}`);
    
    if (countBefore === 0) {
      console.log('\nNo packages to delete. Database is already empty.');
      await mongoose.connection.close();
      return;
    }
    
    // Confirm deletion (you need to run this with confirmation)
    console.log('\n⚠️  WARNING: Deleting ALL tour packages from the database!\n');
    
    // Delete all packages
    const result = await TourPackage.deleteMany({});
    console.log(`✅ Successfully deleted ${result.deletedCount} packages`);
    
    // Verify deletion
    const countAfter = await TourPackage.countDocuments();
    console.log(`Remaining packages: ${countAfter}`);
    
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

deleteAllPackages();
