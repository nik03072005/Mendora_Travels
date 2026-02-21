import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';

dotenv.config();

const OLD_DOMAIN = 'https://pub-0b67f355528a459b82e08d0ec786c68a.r2.dev';
const NEW_DOMAIN = 'https://files.mendoratravels.com';

const updateDestinationImageUrls = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const destinations = await Destination.find({});
    console.log(`\n📊 Found ${destinations.length} destinations to check\n`);

    let updatedCount = 0;
    let alreadyCorrect = 0;

    for (const destination of destinations) {
      let needsUpdate = false;
      const updates = {};

      // Check main imageUrl
      if (destination.imageUrl && destination.imageUrl.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
        updates.imageUrl = destination.imageUrl.replace(OLD_DOMAIN, NEW_DOMAIN);
        needsUpdate = true;
        console.log(`📝 ${destination.destinationName} - Main image URL needs update`);
      }

      // Check heroSection.heroImage
      if (destination.heroSection?.heroImage && destination.heroSection.heroImage.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
        updates['heroSection.heroImage'] = destination.heroSection.heroImage.replace(OLD_DOMAIN, NEW_DOMAIN);
        needsUpdate = true;
        console.log(`📝 ${destination.destinationName} - Hero image URL needs update`);
      }

      // Check subDestinations images
      if (destination.subDestinations && destination.subDestinations.length > 0) {
        const updatedSubDestinations = destination.subDestinations.map(subDest => {
          if (subDest.image && subDest.image.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
            needsUpdate = true;
            console.log(`📝 ${destination.destinationName} - SubDestination "${subDest.name}" image needs update`);
            return {
              ...subDest.toObject(),
              image: subDest.image.replace(OLD_DOMAIN, NEW_DOMAIN)
            };
          }
          return subDest;
        });
        if (needsUpdate) {
          updates.subDestinations = updatedSubDestinations;
        }
      }

      // Check activities images
      if (destination.activities && destination.activities.length > 0) {
        const updatedActivities = destination.activities.map(activity => {
          if (activity.image && activity.image.includes('pub-0b67f355528a459b82e08d0ec786c68a.r2.dev')) {
            needsUpdate = true;
            console.log(`📝 ${destination.destinationName} - Activity "${activity.title}" image needs update`);
            return {
              ...activity.toObject(),
              image: activity.image.replace(OLD_DOMAIN, NEW_DOMAIN)
            };
          }
          return activity;
        });
        if (needsUpdate) {
          updates.activities = updatedActivities;
        }
      }

      if (needsUpdate) {
        await Destination.findByIdAndUpdate(destination._id, updates);
        updatedCount++;
        console.log(`✅ Updated: ${destination.destinationName}\n`);
      } else {
        alreadyCorrect++;
        console.log(`✓ Already correct: ${destination.destinationName}`);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 MIGRATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total destinations checked: ${destinations.length}`);
    console.log(`✅ Updated destinations: ${updatedCount}`);
    console.log(`✓ Already correct: ${alreadyCorrect}`);
    console.log('='.repeat(60) + '\n');

    console.log('🎉 Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating destination image URLs:', error);
    process.exit(1);
  }
};

updateDestinationImageUrls();
