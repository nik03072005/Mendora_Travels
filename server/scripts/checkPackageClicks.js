import mongoose from 'mongoose';
import TourPackage from '../models/TourPackage.js';
import Destination from '../models/Destination.js';
import connectDB from '../config/db.js';

const checkPackageClicks = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('✅ Connected to MongoDB');

    // Package names to search for
    const packageNames = [
      'Paris Switzerland Dream',
      'Grand Europe Explorer'
    ];

    console.log('\n📊 Checking clicks for packages:\n');

    for (const name of packageNames) {
      // Search for package with partial name match (case-insensitive)
      const packages = await TourPackage.find({
        name: { $regex: name, $options: 'i' }
      }).populate('destination', 'destinationName');

      if (packages.length === 0) {
        console.log(`❌ Package not found: "${name}"`);
        console.log('---');
      } else {
        packages.forEach(pkg => {
          console.log(`✅ Package: "${pkg.name}"`);
          console.log(`   ID: ${pkg._id}`);
          console.log(`   Destination: ${pkg.destination?.destinationName || 'N/A'}`);
          console.log(`   Clicks: ${pkg.clicks || 0}`);
          console.log(`   Created: ${pkg.createdAt}`);
          console.log(`   Updated: ${pkg.updatedAt}`);
          console.log('---');
        });
      }
    }

    // Also show all packages sorted by clicks
    console.log('\n📈 Top 10 Most Clicked Packages:\n');
    const topPackages = await TourPackage.find()
      .populate('destination', 'destinationName')
      .sort({ clicks: -1 })
      .limit(10);

    topPackages.forEach((pkg, index) => {
      console.log(`${index + 1}. "${pkg.name}"`);
      console.log(`   Destination: ${pkg.destination?.destinationName || 'N/A'}`);
      console.log(`   Clicks: ${pkg.clicks || 0}`);
      console.log('');
    });

    mongoose.connection.close();
    console.log('✅ Connection closed');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

checkPackageClicks();
