import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import TourPackage from '../models/TourPackage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });

/**
 * 🧹 PRODUCTION-READY DATABASE CLEANUP
 * Removes all invalid dayImage values (objects, empty strings)
 * Converts them to null for clean database state
 */
const cleanDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ Error: MONGODB_URI not found in .env file');
      process.exit(1);
    }
    
    console.log('🔌 Connecting to MongoDB...\n');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');
    
    // Find all packages
    const packages = await TourPackage.find({});
    console.log(`📦 Found ${packages.length} tour packages\n`);
    
    let updatedCount = 0;
    let totalIssues = 0;
    
    console.log('═══════════════════════════════════════════');
    console.log('🔍 Scanning for invalid dayImage values...');
    console.log('═══════════════════════════════════════════\n');
    
    for (const pkg of packages) {
      let hasIssues = false;
      let packageIssues = 0;
      
      if (pkg.tripSummary && Array.isArray(pkg.tripSummary)) {
        const updatedTripSummary = pkg.tripSummary.map(day => {
          const dayImageType = typeof day.dayImage;
          
          // Check for invalid values
          const isObject = dayImageType === 'object' && day.dayImage !== null;
          const isEmptyString = dayImageType === 'string' && day.dayImage.trim() === '';
          
          if (isObject || isEmptyString) {
            console.log(`📍 Package: "${pkg.name}"`);
            console.log(`   └─ Day ${day.day}: ${day.title}`);
            console.log(`      ├─ Invalid dayImage detected`);
            console.log(`      ├─ Type: ${dayImageType}`);
            console.log(`      ├─ Value: ${JSON.stringify(day.dayImage)}`);
            console.log(`      └─ ✅ Converting to null\n`);
            
            hasIssues = true;
            packageIssues++;
            totalIssues++;
            
            return { ...day.toObject(), dayImage: null };
          }
          
          // Valid values (string URL or null)
          return day;
        });
        
        if (hasIssues) {
          pkg.tripSummary = updatedTripSummary;
          await pkg.save();
          updatedCount++;
          console.log(`   ✅ Fixed ${packageIssues} issue(s) in "${pkg.name}"\n`);
        }
      }
    }
    
    console.log('═══════════════════════════════════════════');
    console.log('📊 CLEANUP SUMMARY');
    console.log('═══════════════════════════════════════════');
    console.log(`Total packages scanned:     ${packages.length}`);
    console.log(`Packages with issues:       ${updatedCount}`);
    console.log(`Total issues fixed:         ${totalIssues}`);
    console.log('═══════════════════════════════════════════\n');
    
    if (totalIssues === 0) {
      console.log('✅ No issues found! Database is clean.');
      console.log('   All dayImage values are valid (string URLs or null)\n');
    } else {
      console.log(`✅ Successfully cleaned ${totalIssues} invalid dayImage value(s)!`);
      console.log('   Database is now production-ready.\n');
    }
    
    // Additional verification
    console.log('🔍 Verification: Checking for remaining invalid values...\n');
    const remainingIssues = await TourPackage.aggregate([
      { $unwind: '$tripSummary' },
      { $match: {
        $or: [
          { 'tripSummary.dayImage': { $type: 'object' } },
          { 'tripSummary.dayImage': '' }
        ]
      }},
      { $count: 'count' }
    ]);
    
    if (remainingIssues.length === 0 || remainingIssues[0].count === 0) {
      console.log('✅ Verification passed! No invalid values remaining.\n');
    } else {
      console.log(`⚠️  Warning: ${remainingIssues[0].count} invalid values still found.`);
      console.log('   Run the script again or check manually.\n');
    }
    
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    console.log('\n🎉 Cleanup complete! Ready for production.\n');
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    process.exit(1);
  }
};

// Run cleanup
cleanDatabase();
