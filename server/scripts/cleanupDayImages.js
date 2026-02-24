import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import TourPackage from '../models/TourPackage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from server directory
dotenv.config({ path: join(__dirname, '../.env') });

/**
 * Script to clean up invalid dayImage values in existing tour packages
 * Converts objects and empty strings to null
 */
const cleanupDayImages = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ Error: MONGODB_URI is not defined in .env file');
      process.exit(1);
    }
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');
    
    // Find all tour packages
    const packages = await TourPackage.find({});
    console.log(`📦 Found ${packages.length} tour packages\n`);
    
    let updatedCount = 0;
    let issuesFound = 0;
    
    for (const pkg of packages) {
      let hasInvalidData = false;
      let updatedTripSummary = [];
      
      if (pkg.tripSummary && Array.isArray(pkg.tripSummary)) {
        updatedTripSummary = pkg.tripSummary.map(day => {
          const dayImageType = typeof day.dayImage;
          const isInvalid = 
            (dayImageType === 'object' && day.dayImage !== null) ||
            (dayImageType === 'string' && day.dayImage.trim() === '');
          
          if (isInvalid) {
            console.log(`⚠️  Package: ${pkg.name}`);
            console.log(`   Day ${day.day}: Invalid dayImage (type: ${dayImageType})`);
            console.log(`   Value:`, day.dayImage);
            console.log(`   → Converting to null\n`);
            hasInvalidData = true;
            issuesFound++;
            return { ...day.toObject(), dayImage: null };
          }
          
          return day;
        });
      }
      
      if (hasInvalidData) {
        pkg.tripSummary = updatedTripSummary;
        await pkg.save();
        updatedCount++;
        console.log(`✅ Updated package: ${pkg.name}\n`);
      }
    }
    
    console.log('\n═══════════════════════════════════════════');
    console.log('📊 Cleanup Summary:');
    console.log('═══════════════════════════════════════════');
    console.log(`Total packages checked: ${packages.length}`);
    console.log(`Packages with issues: ${updatedCount}`);
    console.log(`Total invalid dayImages fixed: ${issuesFound}`);
    console.log('═══════════════════════════════════════════\n');
    
    if (updatedCount === 0) {
      console.log('✅ No issues found! All dayImage values are valid.\n');
    } else {
      console.log(`✅ Successfully cleaned up ${issuesFound} invalid dayImage values in ${updatedCount} packages!\n`);
    }
    
    await mongoose.connection.close();
    console.log('🔌 Database connection closed\n');
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

// Run the cleanup
cleanupDayImages();
