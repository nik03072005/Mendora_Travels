import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';

dotenv.config();

const checkDestination = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const dest = await Destination.findById('69995c8af30b8175918042b7');
    
    if (!dest) {
      console.log('❌ Destination not found');
      process.exit(1);
    }

    console.log('Destination:', dest.destinationName);
    console.log('Main Image URL:', dest.imageUrl);
    console.log('Hero Image URL:', dest.heroSection?.heroImage);
    console.log('\nContains old domain (r2.dev)?', dest.imageUrl?.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev'));
    
    if (dest.imageUrl?.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev') || dest.heroSection?.heroImage?.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
      console.log('\n🔴 NEEDS UPDATE!');
      
      // Update it - Convert FROM r2.dev TO files.mendoratravels.com
      const updates = {};
      if (dest.imageUrl?.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
        updates.imageUrl = dest.imageUrl.replace('https://pub-0b67f355528a459b82e08d0ec786c68a.r2.dev', 'https://files.mendoratravels.com');
      }
      if (dest.heroSection?.heroImage?.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
        updates['heroSection.heroImage'] = dest.heroSection.heroImage.replace('https://pub-0b67f355528a459b82e08d0ec786c68a.r2.dev', 'https://files.mendoratravels.com');
      }
      
      await Destination.findByIdAndUpdate('69995c8af30b8175918042b7', updates);
      console.log('✅ Updated!');
      console.log('New Main Image URL:', updates.imageUrl);
      console.log('New Hero Image URL:', updates['heroSection.heroImage']);
    } else {
      console.log('✅ Already using correct URLs');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

checkDestination();
