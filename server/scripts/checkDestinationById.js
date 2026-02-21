import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';

dotenv.config();

const checkDestinationById = async (destinationId) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    if (!destinationId) {
      console.log('❌ Please provide a destination ID');
      console.log('Usage: node scripts/checkDestinationById.js <destination-id>');
      console.log('\nAvailable destinations:');
      
      const allDests = await Destination.find({}).select('_id destinationName category');
      allDests.forEach(dest => {
        console.log(`  ${dest._id} - ${dest.destinationName} (${dest.category})`);
      });
      process.exit(1);
    }

    const destination = await Destination.findById(destinationId);
    
    if (!destination) {
      console.log(`❌ Destination with ID ${destinationId} not found`);
      process.exit(1);
    }

    console.log('='.repeat(70));
    console.log('🗺️  DESTINATION DETAILS');
    console.log('='.repeat(70));
    console.log(`Name: ${destination.destinationName}`);
    console.log(`Category: ${destination.category}`);
    console.log(`Slug: ${destination.slug}`);
    console.log('');
    
    console.log('📸 IMAGES:');
    console.log('─'.repeat(70));
    console.log(`Main Image URL:`);
    console.log(`  ${destination.imageUrl || 'NOT SET'}`);
    
    if (destination.imageUrl) {
      if (destination.imageUrl.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
        console.log(`  ⚠️  WARNING: Using OLD domain - needs migration!`);
      } else if (destination.imageUrl.includes('files.mendoratravels.com')) {
        console.log(`  ✅ OK - Using new domain`);
      } else {
        console.log(`  ℹ️  Using external URL`);
      }
    }
    
    console.log('');
    console.log(`Hero Image URL:`);
    console.log(`  ${destination.heroSection?.heroImage || 'NOT SET'}`);
    
    if (destination.heroSection?.heroImage) {
      if (destination.heroSection.heroImage.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
        console.log(`  ⚠️  WARNING: Using OLD domain - needs migration!`);
      } else if (destination.heroSection.heroImage.includes('files.mendoratravels.com')) {
        console.log(`  ✅ OK - Using new domain`);
      } else {
        console.log(`  ℹ️  Using external URL`);
      }
    }

    console.log('');
    console.log('📊 OTHER INFO:');
    console.log('─'.repeat(70));
    console.log(`Hero Title: ${destination.heroSection?.title || 'NOT SET'}`);
    console.log(`Hero Tagline: ${destination.heroSection?.tagline || 'NOT SET'}`);
    console.log(`Starting Price: ₹${destination.heroSection?.startingPrice || 0}`);
    console.log(`Duration: ${destination.heroSection?.durationRange || 'NOT SET'}`);
    console.log(`Sub-Destinations: ${destination.subDestinations?.length || 0}`);
    console.log(`Activities: ${destination.activities?.length || 0}`);
    console.log(`Group Tours: ${destination.groupTours?.length || 0}`);
    console.log(`Tour Packages: ${destination.tourPackages?.length || 0}`);
    console.log('='.repeat(70));

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

const destinationId = process.argv[2];
checkDestinationById(destinationId);
