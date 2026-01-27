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

const packagesData = {
  'Goa': [
    {
      name: 'Goa Beach Paradise - 4N/5D',
      noOfDays: 5,
      noOfNights: 4,
      originalPrice: 15999,
      discountedPrice: 12999,
      tripSummary: [
        {
          day: 1,
          title: 'Arrival in Goa - North Goa Beaches',
          transfer: 'Airport/Railway Station to Hotel',
          activity: 'Visit Calangute, Baga, and Anjuna Beaches',
          description: 'Arrive in Goa and check into your hotel. Spend the day exploring the famous North Goa beaches.',
          dayImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
        },
        {
          day: 2,
          title: 'Fort Aguada & Sinquerim Beach',
          transfer: 'Hotel to Sightseeing',
          activity: 'Fort Aguada, Sinquerim Beach, Water Sports',
          description: 'Visit the historic Fort Aguada and enjoy water sports at Sinquerim Beach.',
          dayImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80'
        },
        {
          day: 3,
          title: 'South Goa Churches & Beaches',
          transfer: 'Hotel to South Goa',
          activity: 'Basilica of Bom Jesus, Palolem Beach',
          description: 'Explore UNESCO heritage churches and relax at serene South Goa beaches.',
          dayImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80'
        },
        {
          day: 4,
          title: 'Dudhsagar Falls & Spice Plantation',
          transfer: 'Full Day Excursion',
          activity: 'Dudhsagar Waterfalls, Spice Plantation Tour',
          description: 'Visit the majestic Dudhsagar Falls and explore aromatic spice plantations.',
          dayImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'
        },
        {
          day: 5,
          title: 'Departure',
          transfer: 'Hotel to Airport/Railway Station',
          activity: 'Shopping and Departure',
          description: 'Leisure time for shopping and departure from Goa.',
          dayImage: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=800&q=80'
        }
      ],
      highlights: [
        'Stay in 3-star beach resort',
        'Visit North & South Goa beaches',
        'UNESCO World Heritage Churches',
        'Dudhsagar Waterfalls excursion',
        'Water sports activities',
        'Spice plantation tour',
        'Daily breakfast included'
      ],
      hotelsIncluded: [
        { city: 'North Goa', nights: 4, name: 'Beach Resort or similar' }
      ],
      packageDetails: {
        included: [
          'Accommodation in 3-star hotel',
          'Daily breakfast',
          'Airport/Railway transfers',
          'All sightseeing by AC vehicle',
          'Driver allowances and tolls'
        ],
        excluded: [
          'Airfare/Train tickets',
          'Lunch and dinner',
          'Entry fees to monuments',
          'Water sports charges',
          'Personal expenses',
          'GST 5%'
        ]
      },
      imageFiles: [
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80'
      ]
    },
    {
      name: 'Goa Honeymoon Special - 3N/4D',
      noOfDays: 4,
      noOfNights: 3,
      originalPrice: 19999,
      discountedPrice: 16999,
      tripSummary: [
        {
          day: 1,
          title: 'Romantic Arrival',
          transfer: 'Airport to Luxury Resort',
          activity: 'Check-in and Candlelight Dinner',
          description: 'Arrive in Goa and check into a romantic beach resort. Evening candlelight dinner.',
          dayImage: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=800&q=80'
        },
        {
          day: 2,
          title: 'Private Beach & Sunset Cruise',
          transfer: 'Hotel to Beach',
          activity: 'Private Beach Experience, Sunset Cruise',
          description: 'Enjoy a private beach picnic and romantic sunset cruise on Mandovi River.',
          dayImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'
        },
        {
          day: 3,
          title: 'Spa & Leisure',
          transfer: 'At Resort',
          activity: 'Couple Spa, Pool Relaxation',
          description: 'Rejuvenate with a couple spa session and relax by the pool.',
          dayImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80'
        },
        {
          day: 4,
          title: 'Departure with Memories',
          transfer: 'Resort to Airport',
          activity: 'Leisure and Departure',
          description: 'Leisure morning and departure with beautiful memories.',
          dayImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80'
        }
      ],
      highlights: [
        'Luxury beach resort stay',
        'Candlelight dinner on beach',
        'Private sunset cruise',
        'Couple spa session',
        'Room decorated with flowers',
        'Champagne bottle included',
        'All meals included'
      ],
      hotelsIncluded: [
        { city: 'Beach Resort', nights: 3, name: '5-star Beach Resort' }
      ],
      packageDetails: {
        included: [
          '3 nights luxury accommodation',
          'All meals (breakfast, lunch, dinner)',
          'Airport transfers',
          'Candlelight dinner setup',
          'Sunset cruise tickets',
          'Couple spa session',
          'Room decoration'
        ],
        excluded: [
          'Airfare',
          'Additional beverages',
          'Water sports',
          'Personal expenses',
          'GST 5%'
        ]
      },
      imageFiles: [
        'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=1920&q=80',
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80'
      ]
    }
  ],
  'Uttarakhand': [
    {
      name: 'Divine Uttarakhand - 5N/6D',
      noOfDays: 6,
      noOfNights: 5,
      originalPrice: 18999,
      discountedPrice: 15999,
      tripSummary: [
        {
          day: 1,
          title: 'Arrival in Haridwar',
          transfer: 'Dehradun Airport to Haridwar',
          activity: 'Har Ki Pauri, Ganga Aarti',
          description: 'Arrive and witness the divine Ganga Aarti at Har Ki Pauri.',
          dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800&q=80'
        },
        {
          day: 2,
          title: 'Haridwar to Rishikesh',
          transfer: 'Hotel to Rishikesh (30 km)',
          activity: 'Ram Jhula, Laxman Jhula, Beatles Ashram',
          description: 'Visit iconic bridges and the famous Beatles Ashram. Evening Ganga Aarti.',
          dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800&q=80'
        },
        {
          day: 3,
          title: 'Rishikesh to Mussoorie',
          transfer: 'Rishikesh to Mussoorie (80 km)',
          activity: 'Kempty Falls, Mall Road',
          description: 'Travel to the Queen of Hills and enjoy Kempty Falls and Mall Road.',
          dayImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80'
        },
        {
          day: 4,
          title: 'Mussoorie Sightseeing',
          transfer: 'Local Sightseeing',
          activity: 'Gun Hill, Camel Back Road, Lake Mist',
          description: 'Explore Mussoorie attractions and enjoy ropeway ride to Gun Hill.',
          dayImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80'
        },
        {
          day: 5,
          title: 'Mussoorie to Dehradun',
          transfer: 'Mussoorie to Dehradun (35 km)',
          activity: 'Robbers Cave, Sahastradhara',
          description: 'Visit Dehradun attractions and enjoy the therapeutic springs.',
          dayImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80'
        },
        {
          day: 6,
          title: 'Departure',
          transfer: 'Hotel to Airport',
          activity: 'Leisure and Departure',
          description: 'Departure from Dehradun with spiritual and scenic memories.',
          dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800&q=80'
        }
      ],
      highlights: [
        'Ganga Aarti at Haridwar & Rishikesh',
        'Visit to Beatles Ashram',
        'Kempty Falls in Mussoorie',
        'Ropeway ride to Gun Hill',
        'Yoga and meditation sessions',
        'River rafting option in Rishikesh',
        'All meals included'
      ],
      hotelsIncluded: [
        { city: 'Haridwar', nights: 1, name: 'Hotel Ganga Lahari or similar' },
        { city: 'Rishikesh', nights: 1, name: 'Riverside Resort' },
        { city: 'Mussoorie', nights: 2, name: 'Hill View Hotel' },
        { city: 'Dehradun', nights: 1, name: 'Hotel President' }
      ],
      packageDetails: {
        included: [
          '5 nights accommodation',
          'Daily breakfast and dinner',
          'All transfers and sightseeing by AC vehicle',
          'Driver allowances',
          'Toll taxes and parking'
        ],
        excluded: [
          'Airfare/Train tickets',
          'Lunch',
          'Entry fees',
          'River rafting charges',
          'Adventure activities',
          'Personal expenses',
          'GST 5%'
        ]
      },
      imageFiles: [
        'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=1920&q=80',
        'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=1920&q=80'
      ]
    },
    {
      name: 'Adventure Uttarakhand - 4N/5D',
      noOfDays: 5,
      noOfNights: 4,
      originalPrice: 16999,
      discountedPrice: 13999,
      tripSummary: [
        {
          day: 1,
          title: 'Arrival in Rishikesh',
          transfer: 'Airport to Rishikesh',
          activity: 'Check-in and Relaxation',
          description: 'Arrive in Rishikesh, the adventure capital. Check into camp.',
          dayImage: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800&q=80'
        },
        {
          day: 2,
          title: 'White Water Rafting',
          transfer: 'Camp to Rafting Point',
          activity: '16 km River Rafting, Cliff Jumping',
          description: 'Experience thrilling white water rafting and cliff jumping.',
          dayImage: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80'
        },
        {
          day: 3,
          title: 'Bungee Jumping & Flying Fox',
          transfer: 'Camp to Adventure Zone',
          activity: 'Bungee Jumping, Flying Fox, Giant Swing',
          description: 'Adrenaline rush with India highest bungee and flying fox.',
          dayImage: 'https://images.unsplash.com/photo-1509087859087-a384654eca4d?w=800&q=80'
        },
        {
          day: 4,
          title: 'Trekking to Waterfall',
          transfer: 'Camp to Trek Start Point',
          activity: 'Neer Garh Waterfall Trek, Camping',
          description: 'Trek through forests to beautiful Neer Garh Waterfall.',
          dayImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80'
        },
        {
          day: 5,
          title: 'Departure',
          transfer: 'Camp to Airport',
          activity: 'Leisure and Departure',
          description: 'Morning yoga session and departure with adventure memories.',
          dayImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
        }
      ],
      highlights: [
        'White water rafting 16 km',
        'India\'s highest bungee jump',
        'Flying fox experience',
        'Waterfall trekking',
        'Camping under stars',
        'All adventure activities included',
        'Yoga and meditation sessions'
      ],
      hotelsIncluded: [
        { city: 'Rishikesh', nights: 4, name: 'Adventure Camp' }
      ],
      packageDetails: {
        included: [
          '4 nights camping accommodation',
          'All meals (breakfast, lunch, dinner)',
          'River rafting 16 km',
          'Bungee jumping',
          'Flying fox',
          'Trek guide',
          'Safety equipment',
          'All transfers'
        ],
        excluded: [
          'Airfare/Train tickets',
          'Additional adventure activities',
          'Personal expenses',
          'Travel insurance',
          'GST 5%'
        ]
      },
      imageFiles: [
        'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=1920&q=80',
        'https://images.unsplash.com/photo-1509087859087-a384654eca4d?w=1920&q=80'
      ]
    }
  ]
};

async function addPackagesToDestinations() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    for (const [destinationName, packages] of Object.entries(packagesData)) {
      // Find destination
      const destination = await Destination.findOne({ destinationName: new RegExp(`^${destinationName}$`, 'i') });
      
      if (!destination) {
        console.log(`⚠️  Destination "${destinationName}" not found, skipping...`);
        continue;
      }

      console.log(`\n📍 Adding packages to ${destinationName}...`);

      for (const packageData of packages) {
        // Check if package already exists
        const existing = await TourPackage.findOne({ 
          name: packageData.name,
          destination: destination._id 
        });

        if (existing) {
          console.log(`   ⚠️  Package "${packageData.name}" already exists, skipping...`);
          continue;
        }

        // Create package with slug
        const baseSlug = slugify(packageData.name, {
          lower: true,
          strict: true,
          remove: /[*+~.()'"!:@]/g
        });
        
        // Ensure slug is unique
        let slug = baseSlug;
        let count = 1;
        while (await TourPackage.findOne({ slug })) {
          slug = `${baseSlug}-${count}`;
          count++;
        }

        const tourPackage = new TourPackage({
          ...packageData,
          slug,
          destination: destination._id
        });

        await tourPackage.save();

        // Add package to destination's tourPackages array
        await Destination.findByIdAndUpdate(
          destination._id,
          { $addToSet: { tourPackages: tourPackage._id } }
        );

        console.log(`   ✅ Added package: ${packageData.name}`);
      }
    }

    console.log('\n🎉 All packages added successfully!');
    console.log('\n📋 Summary:');
    console.log('   - Goa: 2 packages (Beach Paradise, Honeymoon Special)');
    console.log('   - Uttarakhand: 2 packages (Divine, Adventure)');
    console.log('\n✨ Visit the destination pages to see the packages!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding packages:', error);
    process.exit(1);
  }
}

addPackagesToDestinations();
