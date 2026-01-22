import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Destination from '../models/Destination.js';

// Get current directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from parent directory
dotenv.config({ path: join(__dirname, '..', '.env') });

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MongoDB URI not found in environment variables');
    }
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Domestic destinations in India
const domesticKeywords = [
  'kashmir', 'ladakh', 'himachal', 'spiti', 'meghalaya', 'nagaland',
  'andaman', 'kerala', 'rajasthan', 'goa', 'uttarakhand', 'sikkim',
  'india', 'mumbai', 'delhi', 'bangalore', 'chennai', 'kolkata',
  'jaipur', 'udaipur', 'manali', 'shimla', 'ooty', 'darjeeling'
];

// Function to determine if destination is domestic
const isDomestic = (name) => {
  const lowerName = name.toLowerCase();
  return domesticKeywords.some(keyword => lowerName.includes(keyword));
};

// Main function to categorize destinations
const categorizeDestinations = async () => {
  try {
    await connectDB();

    // Get all destinations without a category or with null category
    const destinations = await Destination.find({
      $or: [
        { category: { $exists: false } },
        { category: null }
      ]
    });

    console.log(`\n📊 Found ${destinations.length} destinations to categorize\n`);

    let domesticCount = 0;
    let internationalCount = 0;

    for (const destination of destinations) {
      const category = isDomestic(destination.destinationName) ? 'domestic' : 'international';
      
      destination.category = category;
      await destination.save();

      if (category === 'domestic') {
        domesticCount++;
        console.log(`🏴 ${destination.destinationName} → DOMESTIC`);
      } else {
        internationalCount++;
        console.log(`🌏 ${destination.destinationName} → INTERNATIONAL`);
      }
    }

    console.log(`\n✅ Categorization Complete!`);
    console.log(`   - Domestic: ${domesticCount}`);
    console.log(`   - International: ${internationalCount}`);
    console.log(`   - Total: ${destinations.length}\n`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

// Run the script
categorizeDestinations();
