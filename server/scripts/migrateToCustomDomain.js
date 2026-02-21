// Script to migrate all destination image URLs to files.mendoratravels.com
const mongoose = require('mongoose');
const Destination = require('../models/Destination');
require('dotenv').config();

const OLD_DOMAIN = 'pub-0b67f355528a459b82e08d0ec786c68a.r2.dev';
const NEW_DOMAIN = 'files.mendoratravels.com';

async function migrateToCustomDomain() {
  try {
    console.log('🔄 Starting migration to custom domain...\n');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Find all destinations with old domain URLs
    const destinations = await Destination.find({
      $or: [
        { imageUrl: { $regex: OLD_DOMAIN } },
        { 'heroSection.heroImage': { $regex: OLD_DOMAIN } }
      ]
    });

    console.log(`📁 Found ${destinations.length} destinations to update\n`);

    let updatedCount = 0;
    
    for (const dest of destinations) {
      let updated = false;
      const oldMainUrl = dest.imageUrl;
      const oldHeroUrl = dest.heroSection?.heroImage;

      // Update main image URL
      if (dest.imageUrl && dest.imageUrl.includes(OLD_DOMAIN)) {
        dest.imageUrl = dest.imageUrl.replace(OLD_DOMAIN, NEW_DOMAIN);
        updated = true;
      }

      // Update hero image URL
      if (dest.heroSection?.heroImage && dest.heroSection.heroImage.includes(OLD_DOMAIN)) {
        dest.heroSection.heroImage = dest.heroSection.heroImage.replace(OLD_DOMAIN, NEW_DOMAIN);
        updated = true;
      }

      if (updated) {
        await dest.save();
        updatedCount++;
        
        console.log(`✅ Updated: ${dest.name}`);
        if (oldMainUrl !== dest.imageUrl) {
          console.log(`   Main: ${oldMainUrl}`);
          console.log(`      → ${dest.imageUrl}`);
        }
        if (oldHeroUrl !== dest.heroSection?.heroImage) {
          console.log(`   Hero: ${oldHeroUrl}`);
          console.log(`      → ${dest.heroSection?.heroImage}`);
        }
        console.log('');
      }
    }

    console.log(`\n✅ Migration complete!`);
    console.log(`📊 Updated ${updatedCount} destinations to use ${NEW_DOMAIN}`);

    await mongoose.connection.close();
    console.log('✅ Database connection closed');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

migrateToCustomDomain();
