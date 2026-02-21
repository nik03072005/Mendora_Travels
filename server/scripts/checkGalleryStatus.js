import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Gallery from '../models/Gallery.js';
import Destination from '../models/Destination.js';

dotenv.config();

const checkGalleryStatus = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB\n');

    const destinationId = '69995c8af30b8175918042b7';
    
    // Check destination
    const destination = await Destination.findById(destinationId);
    if (destination) {
      console.log('✅ Destination Found:', destination.destinationName);
      console.log('Gallery Reference:', destination.gallery ? `Gallery ID: ${destination.gallery}` : '❌ NO GALLERY LINKED');
    }

    // Check if gallery exists
    const gallery = await Gallery.findOne({ destinationId: destinationId });
    if (gallery) {
      console.log('\n✅ Gallery Exists!');
      console.log('Gallery ID:', gallery._id);
      console.log('Images:', gallery.images.length);
    } else {
      console.log('\n❌ NO GALLERY EXISTS for this destination');
      console.log('\n📋 TO FIX THIS:');
      console.log('1. Go to admin panel');
      console.log('2. Navigate to "Create Gallery"');
      console.log('3. Select destination: "kanpur"');
      console.log('4. Upload images');
      console.log('5. Submit form');
    }

    // List all destinations without galleries
    console.log('\n\n📊 Destinations without galleries:');
    const allDestinations = await Destination.find({}).select('destinationName gallery');
    const withoutGallery = allDestinations.filter(d => !d.gallery);
    
    if (withoutGallery.length > 0) {
      withoutGallery.forEach(d => {
        console.log(`  - ${d.destinationName} (ID: ${d._id})`);
      });
    } else {
      console.log('  All destinations have galleries! ✅');
    }

    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

checkGalleryStatus();
