import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Gallery from '../models/Gallery.js';
import Destination from '../models/Destination.js';

dotenv.config();

const debugGallery = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // The destination ID from the error
    const destinationId = '69995c8af30b8175918042b7';
    
    console.log('\n=== Checking Destination ===');
    const destination = await Destination.findById(destinationId);
    if (destination) {
      console.log('Destination found:', destination.destinationName);
      console.log('Has gallery reference:', destination.gallery ? destination.gallery : 'NO');
    } else {
      console.log('Destination NOT found with ID:', destinationId);
    }

    console.log('\n=== Checking Gallery by destinationId ===');
    const gallery = await Gallery.findOne({ destinationId: destinationId });
    if (gallery) {
      console.log('Gallery found!');
      console.log('Gallery ID:', gallery._id);
      console.log('Destination ID in gallery:', gallery.destinationId);
      console.log('Number of images:', gallery.images.length);
      console.log('First image URL:', gallery.images[0] || 'No images');
    } else {
      console.log('Gallery NOT found for destinationId:', destinationId);
    }

    console.log('\n=== Listing ALL Galleries ===');
    const allGalleries = await Gallery.find().limit(10);
    console.log(`Total galleries found: ${allGalleries.length}`);
    allGalleries.forEach((g, index) => {
      console.log(`\nGallery ${index + 1}:`);
      console.log('  Gallery ID:', g._id.toString());
      console.log('  Destination ID:', g.destinationId.toString());
      console.log('  Images count:', g.images.length);
    });

    mongoose.connection.close();
    console.log('\nConnection closed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

debugGallery();
