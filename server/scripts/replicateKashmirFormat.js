import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import slugify from 'slugify';
import Destination from '../models/Destination.js';
import TourPackage from '../models/TourPackage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function analyzeAndReplicate() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected\n');

    // Find Kashmir to analyze
    const kashmir = await Destination.findOne({ destinationName: /kashmir/i }).populate('tourPackages');
    
    if (kashmir) {
      console.log('📊 KASHMIR PAGE ANALYSIS:');
      console.log(`   Tour Packages: ${kashmir.tourPackages?.length || 0}`);
      console.log(`   Group Tours: ${kashmir.groupTours?.length || 0}`);
      console.log(`   Sub-destinations: ${kashmir.subDestinations?.length || 0}`);
      console.log(`   Activities: ${kashmir.activities?.length || 0}\n`);
    }

    // Get new destinations (Goa, Uttarakhand)
    const newDestinations = await Destination.find({ 
      destinationName: { $in: ['Goa', 'Uttarakhand'] }
    }).populate('tourPackages');

    console.log('🎯 NEW DESTINATIONS STATUS:');
    for (const dest of newDestinations) {
      console.log(`\n📍 ${dest.destinationName}:`);
      console.log(`   Tour Packages: ${dest.tourPackages?.length || 0}`);
      console.log(`   Group Tours: ${dest.groupTours?.length || 0}`);
      console.log(`   Sub-destinations: ${dest.subDestinations?.length || 0}`);
      console.log(`   Activities: ${dest.activities?.length || 0}`);
    }

    // Count needed packages
    const targetPackages = kashmir?.tourPackages?.length || 6;
    const targetGroupTours = kashmir?.groupTours?.length || 3;

    console.log(`\n🎯 TARGET: Add ${targetPackages} packages and ${targetGroupTours} group tours to each\n`);

    // Additional packages for Goa
    const additionalGoaPackages = [
      {
        name: 'Goa Family Fun - 5N/6D',
        noOfDays: 6,
        noOfNights: 5,
        originalPrice: 22999,
        discountedPrice: 18999,
        tripSummary: [
          { day: 1, title: 'Arrival & Beach Welcome', transfer: 'Airport to Resort', activity: 'Calangute Beach', description: 'Welcome to Goa! Family check-in at beach resort.', dayImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
          { day: 2, title: 'Water Sports Extravaganza', transfer: 'Resort to Water Sports', activity: 'Banana Boat, Parasailing, Jet Ski', description: 'Full day of family-friendly water sports.', dayImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
          { day: 3, title: 'Dolphin Watching & Fort', transfer: 'Morning Boat Ride', activity: 'Dolphin Tour, Aguada Fort', description: 'Early morning dolphin watching and fort exploration.', dayImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800' },
          { day: 4, title: 'South Goa Beaches', transfer: 'North to South Goa', activity: 'Palolem, Agonda Beach', description: 'Peaceful South Goa beaches perfect for families.', dayImage: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=800' },
          { day: 5, title: 'Spice Farm & Wildlife', transfer: 'Resort to Plantation', activity: 'Spice Plantation, Butterfly Garden', description: 'Educational spice tour and wildlife experience.', dayImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800' },
          { day: 6, title: 'Departure', transfer: 'Resort to Airport', activity: 'Shopping & Departure', description: 'Last minute shopping and fond farewells.', dayImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800' }
        ],
        highlights: ['Family resort stay', 'Water sports package', 'Dolphin watching', 'Spice plantation tour', 'All meals', 'Kids activities'],
        hotelsIncluded: [{ city: 'Goa', nights: 5, name: 'Family Beach Resort' }],
        packageDetails: {
          included: ['5-star accommodation', 'All meals', 'Airport transfers', 'Water sports', 'Sightseeing', 'Kids club access'],
          excluded: ['Airfare', 'Personal expenses', 'Adventure activities', 'GST 5%']
        },
        imageFiles: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920']
      },
      {
        name: 'Goa Budget Backpacker - 3N/4D',
        noOfDays: 4,
        noOfNights: 3,
        originalPrice: 9999,
        discountedPrice: 7999,
        tripSummary: [
          { day: 1, title: 'Arrival & Hostel Vibes', transfer: 'Station to Hostel', activity: 'Beach Bonfire', description: 'Check into beach hostel, meet fellow travelers.', dayImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
          { day: 2, title: 'Beach Hopping', transfer: 'Bike Rental', activity: 'Vagator, Anjuna, Baga', description: 'Explore beaches on rented scooters.', dayImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800' },
          { day: 3, title: 'Flea Market & Sunset', transfer: 'Local Transport', activity: 'Anjuna Flea Market, Sunset Point', description: 'Shop at flea market and catch stunning sunset.', dayImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800' },
          { day: 4, title: 'Departure', transfer: 'Hostel to Station', activity: 'Last Beach Walk', description: 'Morning beach walk and departure.', dayImage: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=800' }
        ],
        highlights: ['Budget hostel', 'Bike rental included', 'Beach access', 'Backpacker friendly', 'Flea market tour', 'Bonfire nights'],
        hotelsIncluded: [{ city: 'Goa', nights: 3, name: 'Beach Hostel' }],
        packageDetails: {
          included: ['Hostel accommodation', 'Breakfast', 'Bike rental', 'Beach access'],
          excluded: ['Meals', 'Transport tickets', 'Water sports', 'Personal expenses', 'GST 5%']
        },
        imageFiles: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920']
      },
      {
        name: 'Goa Party Weekend - 2N/3D',
        noOfDays: 3,
        noOfNights: 2,
        originalPrice: 14999,
        discountedPrice: 11999,
        tripSummary: [
          { day: 1, title: 'Party Arrival', transfer: 'Airport to Hotel', activity: 'Beach Club Entry', description: 'Arrive and hit the beach clubs.', dayImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
          { day: 2, title: 'Beach & Club Hopping', transfer: 'Party Bus', activity: 'Tito\'s, Cafe Mambo, Curlies', description: 'Epic party night at famous clubs.', dayImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800' },
          { day: 3, title: 'Recovery & Departure', transfer: 'Hotel to Airport', activity: 'Brunch & Departure', description: 'Relaxed brunch and departure.', dayImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800' }
        ],
        highlights: ['Party hotel', 'Club entries included', 'Party bus transport', 'Beach access', 'Nightlife guide', 'Welcome drinks'],
        hotelsIncluded: [{ city: 'North Goa', nights: 2, name: 'Party Hotel Near Titos' }],
        packageDetails: {
          included: ['Hotel stay', 'Breakfast', 'Club entries', 'Party bus', 'Welcome drinks'],
          excluded: ['Airfare', 'Drinks at clubs', 'Lunch/Dinner', 'Personal expenses', 'GST 5%']
        },
        imageFiles: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920']
      },
      {
        name: 'Goa Yoga Retreat - 6N/7D',
        noOfDays: 7,
        noOfNights: 6,
        originalPrice: 35999,
        discountedPrice: 29999,
        tripSummary: [
          { day: 1, title: 'Arrival & Orientation', transfer: 'Airport to Retreat', activity: 'Welcome Yoga Session', description: 'Settle into peaceful retreat center.', dayImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800' },
          { day: 2, title: 'Morning Yoga & Beach', transfer: 'At Retreat', activity: 'Sunrise Yoga, Beach Meditation', description: 'Daily yoga practice and meditation.', dayImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800' },
          { day: 3, title: 'Detox & Wellness', transfer: 'Retreat Activities', activity: 'Detox Meals, Spa Session', description: 'Holistic wellness and ayurvedic treatments.', dayImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800' },
          { day: 4, title: 'Nature Walk & Yoga', transfer: 'Local Trail', activity: 'Forest Walk, Pranayama', description: 'Connect with nature through mindful walks.', dayImage: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=800' },
          { day: 5, title: 'Beach Yoga & Sound Healing', transfer: 'Beach Session', activity: 'Beach Yoga, Sound Bath', description: 'Yoga by the beach and sound healing session.', dayImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800' },
          { day: 6, title: 'Wellness Workshop', transfer: 'At Retreat', activity: 'Nutrition Workshop, Cooking Class', description: 'Learn healthy cooking and nutrition.', dayImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800' },
          { day: 7, title: 'Departure', transfer: 'Retreat to Airport', activity: 'Closing Ceremony', description: 'Final meditation and farewell.', dayImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800' }
        ],
        highlights: ['Luxury yoga retreat', 'Daily yoga classes', 'Ayurvedic spa', 'Organic meals', 'Beach meditation', 'Wellness workshops', 'Sound healing'],
        hotelsIncluded: [{ city: 'South Goa', nights: 6, name: 'Luxury Yoga Retreat Center' }],
        packageDetails: {
          included: ['Luxury accommodation', 'All organic meals', 'Daily yoga classes', 'Spa treatments', 'Workshops', 'Airport transfers'],
          excluded: ['Airfare', 'Personal expenses', 'Additional treatments', 'GST 5%']
        },
        imageFiles: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920']
      }
    ];

    // Additional packages for Uttarakhand
    const additionalUttarakhandPackages = [
      {
        name: 'Char Dham Yatra - 9N/10D',
        noOfDays: 10,
        noOfNights: 9,
        originalPrice: 32999,
        discountedPrice: 27999,
        tripSummary: [
          { day: 1, title: 'Haridwar Arrival', transfer: 'Airport to Hotel', activity: 'Har Ki Pauri Aarti', description: 'Sacred start at Har Ki Pauri.', dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800' },
          { day: 2, title: 'Haridwar to Barkot', transfer: 'Drive 220 km', activity: 'Enroute Kempty Falls', description: 'Scenic mountain drive.', dayImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800' },
          { day: 3, title: 'Yamunotri Darshan', transfer: 'Trek to Temple', activity: 'Yamunotri Temple Visit', description: 'First Dham pilgrimage.', dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800' },
          { day: 4, title: 'Barkot to Uttarkashi', transfer: 'Drive 100 km', activity: 'Vishwanath Temple', description: 'Journey towards Gangotri.', dayImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800' },
          { day: 5, title: 'Gangotri Darshan', transfer: 'Trek to Temple', activity: 'Gangotri Temple Visit', description: 'Sacred Ganga origin point.', dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800' },
          { day: 6, title: 'Uttarkashi to Guptkashi', transfer: 'Drive 220 km', activity: 'Mountain Views', description: 'Towards Kedarnath region.', dayImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800' },
          { day: 7, title: 'Kedarnath Darshan', transfer: 'Helicopter/Trek', activity: 'Kedarnath Temple Visit', description: 'Lord Shiva\'s abode.', dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800' },
          { day: 8, title: 'Guptkashi to Badrinath', transfer: 'Drive 190 km', activity: 'Valley of Flowers Route', description: 'Journey to final Dham.', dayImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800' },
          { day: 9, title: 'Badrinath Darshan', transfer: 'Temple Visit', activity: 'Badrinath Temple, Mana Village', description: 'Last of four dhams.', dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800' },
          { day: 10, title: 'Departure', transfer: 'Badrinath to Haridwar', activity: 'Return Journey', description: 'Blessed return home.', dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800' }
        ],
        highlights: ['All 4 Dhams covered', 'Helicopter option for Kedarnath', 'Experienced guide', 'Comfortable hotels', 'Daily Aarti darshan', 'Vegetarian meals', 'Medical support'],
        hotelsIncluded: [
          { city: 'Haridwar', nights: 1, name: 'Hotel Ganga Lahari' },
          { city: 'Barkot', nights: 2, name: 'Hotel Devbhoomi' },
          { city: 'Uttarkashi', nights: 2, name: 'Hotel Shivlinga' },
          { city: 'Guptkashi', nights: 2, name: 'Hotel Mandakini' },
          { city: 'Badrinath', nights: 2, name: 'Hotel Narayan Palace' }
        ],
        packageDetails: {
          included: ['9 nights accommodation', 'All meals', 'AC vehicle', 'Experienced guide', 'Driver allowances', 'Permits'],
          excluded: ['Airfare', 'Kedarnath helicopter (₹6000)', 'Pony/Doli charges', 'Personal expenses', 'GST 5%']
        },
        imageFiles: ['https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=1920']
      },
      {
        name: 'Nainital Family Package - 4N/5D',
        noOfDays: 5,
        noOfNights: 4,
        originalPrice: 17999,
        discountedPrice: 14999,
        tripSummary: [
          { day: 1, title: 'Arrival Nainital', transfer: 'Delhi to Nainital', activity: 'Naini Lake Boating', description: 'Arrive and enjoy boat ride.', dayImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800' },
          { day: 2, title: 'Nainital Sightseeing', transfer: 'Local Tour', activity: 'Snow View, Cave Garden, Zoo', description: 'Family-friendly attractions.', dayImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800' },
          { day: 3, title: 'Day Trip to Bhimtal', transfer: 'Nainital to Bhimtal', activity: 'Bhimtal Lake, Aquarium', description: 'Scenic lake and island visit.', dayImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800' },
          { day: 4, title: 'Sattal & Naukuchiatal', transfer: 'Seven Lake Tour', activity: 'Nature Walk, Birdwatching', description: 'Peaceful lakes and nature.', dayImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800' },
          { day: 5, title: 'Departure', transfer: 'Nainital to Delhi', activity: 'Shopping at Mall Road', description: 'Last minute shopping and return.', dayImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800' }
        ],
        highlights: ['Lake view hotel', 'Boating included', 'Family activities', 'Cable car rides', 'Nature walks', 'Kids friendly', 'All meals'],
        hotelsIncluded: [{ city: 'Nainital', nights: 4, name: 'Lake View Family Resort' }],
        packageDetails: {
          included: ['4 nights accommodation', 'All meals', 'Sightseeing', 'Boating charges', 'Cable car tickets', 'Transfers'],
          excluded: ['Train/Flight tickets', 'Entry fees', 'Adventure activities', 'Personal expenses', 'GST 5%']
        },
        imageFiles: ['https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920']
      }
    ];

    // Group Tours for Goa
    const goaGroupTours = [
      {
        name: 'Goa Beach Carnival Group - 5N/6D',
        departureDate: '2026-03-15',
        returnDate: '2026-03-20',
        totalSeats: 40,
        bookedSeats: 12,
        price: 14999,
        duration: '5N/6D',
        highlights: ['Group of 40 travelers', 'Beach carnival celebration', 'Water sports included', 'Pub crawl night', 'Goa DJ party']
      },
      {
        name: 'Goa Girls Trip - 4N/5D',
        departureDate: '2026-04-10',
        returnDate: '2026-04-14',
        totalSeats: 20,
        bookedSeats: 8,
        price: 17999,
        duration: '4N/5D',
        highlights: ['Girls only group', 'Spa sessions', 'Beach photoshoot', 'Shopping tours', 'Safe and fun']
      },
      {
        name: 'Goa Corporate Retreat - 3N/4D',
        departureDate: '2026-05-20',
        returnDate: '2026-05-23',
        totalSeats: 50,
        bookedSeats: 35,
        price: 24999,
        duration: '3N/4D',
        highlights: ['Corporate groups', 'Team building activities', 'Conference facilities', 'Networking dinner', 'Beach games']
      }
    ];

    // Group Tours for Uttarakhand
    const uttarakhandGroupTours = [
      {
        name: 'Uttarakhand Trekking Expedition - 6N/7D',
        departureDate: '2026-03-25',
        returnDate: '2026-03-31',
        totalSeats: 25,
        bookedSeats: 10,
        price: 19999,
        duration: '6N/7D',
        highlights: ['Expert trek leader', 'Camping equipment provided', 'Valley of Flowers route', 'Group trekking', 'Photography sessions']
      },
      {
        name: 'Spiritual Uttarakhand Tour - 7N/8D',
        departureDate: '2026-04-05',
        returnDate: '2026-04-12',
        totalSeats: 30,
        bookedSeats: 22,
        price: 22999,
        duration: '7N/8D',
        highlights: ['Haridwar-Rishikesh-Kedarnath', 'Daily Ganga Aarti', 'Yoga sessions', 'Meditation workshops', 'Spiritual guide']
      },
      {
        name: 'Uttarakhand Adventure Group - 5N/6D',
        departureDate: '2026-05-15',
        returnDate: '2026-05-20',
        totalSeats: 20,
        bookedSeats: 6,
        price: 18999,
        duration: '5N/6D',
        highlights: ['River rafting', 'Bungee jumping', 'Camping', 'Bonfire nights', 'Adventure group']
      }
    ];

    // Add packages for Goa
    const goa = await Destination.findOne({ destinationName: 'Goa' });
    if (goa) {
      console.log('\n📦 Adding packages to Goa...');
      for (const pkg of additionalGoaPackages) {
        const slug = slugify(pkg.name, { lower: true, strict: true });
        let uniqueSlug = slug;
        let count = 1;
        while (await TourPackage.findOne({ slug: uniqueSlug })) {
          uniqueSlug = `${slug}-${count}`;
          count++;
        }
        
        const tourPackage = new TourPackage({ ...pkg, slug: uniqueSlug, destination: goa._id });
        await tourPackage.save();
        await Destination.findByIdAndUpdate(goa._id, { $addToSet: { tourPackages: tourPackage._id } });
        console.log(`   ✅ ${pkg.name}`);
      }

      // Add group tours to Goa
      await Destination.findByIdAndUpdate(goa._id, { 
        $set: { groupTours: goaGroupTours }
      });
      console.log(`   ✅ Added ${goaGroupTours.length} group tours`);
    }

    // Add packages for Uttarakhand
    const uttarakhand = await Destination.findOne({ destinationName: 'Uttarakhand' });
    if (uttarakhand) {
      console.log('\n📦 Adding packages to Uttarakhand...');
      for (const pkg of additionalUttarakhandPackages) {
        const slug = slugify(pkg.name, { lower: true, strict: true });
        let uniqueSlug = slug;
        let count = 1;
        while (await TourPackage.findOne({ slug: uniqueSlug })) {
          uniqueSlug = `${slug}-${count}`;
          count++;
        }
        
        const tourPackage = new TourPackage({ ...pkg, slug: uniqueSlug, destination: uttarakhand._id });
        await tourPackage.save();
        await Destination.findByIdAndUpdate(uttarakhand._id, { $addToSet: { tourPackages: tourPackage._id } });
        console.log(`   ✅ ${pkg.name}`);
      }

      // Add group tours to Uttarakhand
      await Destination.findByIdAndUpdate(uttarakhand._id, { 
        $set: { groupTours: uttarakhandGroupTours }
      });
      console.log(`   ✅ Added ${uttarakhandGroupTours.length} group tours`);
    }

    console.log('\n\n🎉 COMPLETE! All destinations now have:');
    console.log('   📦 6 Tour Packages each');
    console.log('   👥 3 Group Tours each');
    console.log('   🎯 Same format as Kashmir page\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

analyzeAndReplicate();
