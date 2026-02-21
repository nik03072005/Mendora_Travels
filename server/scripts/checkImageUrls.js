import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import TourPackage from '../models/TourPackage.js';

dotenv.config();

const checkImageUrls = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Check Destinations
    console.log('=' .repeat(70));
    console.log('🗺️  CHECKING DESTINATION IMAGE URLS');
    console.log('='.repeat(70) + '\n');

    const destinations = await Destination.find({});
    console.log(`Found ${destinations.length} destinations\n`);

    destinations.forEach((dest, index) => {
      console.log(`${index + 1}. ${dest.destinationName}`);
      console.log(`   Main Image: ${dest.imageUrl || 'NOT SET'}`);
      console.log(`   Hero Image: ${dest.heroSection?.heroImage || 'NOT SET'}`);
      
      if (dest.imageUrl && dest.imageUrl.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
        console.log(`   ⚠️  NEEDS UPDATE - Using old domain`);
      } else if (dest.imageUrl) {
        console.log(`   ✅ OK - Using correct domain or external URL`);
      }
      console.log('');
    });

    // Check Tour Packages
    console.log('\n' + '='.repeat(70));
    console.log('📦 CHECKING TOUR PACKAGE IMAGE URLS');
    console.log('='.repeat(70) + '\n');

    const packages = await TourPackage.find({}).populate('destination', 'destinationName');
    console.log(`Found ${packages.length} tour packages\n`);

    packages.forEach((pkg, index) => {
      console.log(`${index + 1}. ${pkg.name} (${pkg.destination?.destinationName || 'No destination'})`);
      
      if (pkg.images && pkg.images.length > 0) {
        console.log(`   Package Images: ${pkg.images.length} images`);
        pkg.images.forEach((img, imgIndex) => {
          if (img.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
            console.log(`      ${imgIndex + 1}. ⚠️  OLD DOMAIN: ${img.substring(0, 60)}...`);
          } else {
            console.log(`      ${imgIndex + 1}. ✅ ${img.substring(0, 60)}...`);
          }
        });
      } else {
        console.log(`   Package Images: NONE`);
      }

      if (pkg.tripSummary && pkg.tripSummary.length > 0) {
        const dayImagesWithOldDomain = pkg.tripSummary.filter(day => 
          day.dayImage && day.dayImage.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')
        );
        if (dayImagesWithOldDomain.length > 0) {
          console.log(`   Day Images: ⚠️  ${dayImagesWithOldDomain.length} images need update`);
        }
      }
      console.log('');
    });

    console.log('\n' + '='.repeat(70));
    console.log('✅ Analysis Complete');
    console.log('='.repeat(70));

    process.exit(0);
  } catch (error) {
    console.error('❌ Error checking image URLs:', error);
    process.exit(1);
  }
};

checkImageUrls();
