import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const spitivalleyData = {
  destinationName: 'Spiti Valley',
  slug: 'spiti-valley',
  imageUrl: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
  category: 'domestic',
  type: 'region',
  isActive: true,
  
  heroSection: {
    title: 'Spiti Valley Tour Packages',
    tagline: 'Middle Land - Where Heaven Meets Earth',
    startingPrice: 16999,
    durationRange: '6-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Spiti Valley, the Middle Land, offers dramatic landscapes, ancient monasteries, remote villages, high-altitude deserts, and authentic Tibetan Buddhist culture in the Trans-Himalayas.',
    expandedDescription: 'Spiti Valley, the Middle Land, offers dramatic landscapes, ancient monasteries, remote villages, high-altitude deserts, and authentic Tibetan Buddhist culture in the Trans-Himalayas.\n\nExplore the stunning Key Monastery, Chandratal Lake, Dhankar Monastery, Tabo\'s ancient murals, Kaza town, and remote villages like Komic and Langza. Experience pristine mountain beauty and warm local hospitality.\n\nOur packages include comfortable accommodations, acclimatization support, experienced drivers, permits, and authentic Spitian experiences. From monastery circuits to adventure treks, Spiti offers soul-stirring journeys.'
  },
  
  subDestinations: [
    {
      name: 'Kaza',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      packagesCount: 24
    },
    {
      name: 'Key Monastery',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 22
    },
    {
      name: 'Chandratal Lake',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      packagesCount: 20
    },
    {
      name: 'Tabo Monastery',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Langza & Komic',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Pin Valley',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 14
    }
  ],
  
  activities: [
    {
      title: 'Monastery Circuit',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      location: 'Key, Tabo, Dhankar'
    },
    {
      title: 'Chandratal Trek',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      location: 'Moon Lake'
    },
    {
      title: 'Village Homestay',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      location: 'Langza & Hikkim'
    },
    {
      title: 'Fossil Hunting',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      location: 'Langza Village'
    }
  ],
  
  groupTours: [
    {
      name: 'Spiti Circuit',
      date: 'June 15, 2026',
      totalSeats: 12,
      bookedSeats: 8,
      price: '₹16,999',
      duration: '7 Days',
      highlights: ['Kaza', 'Key', 'Langza', 'Chandratal']
    },
    {
      name: 'Spiti Kinnaur Loop',
      date: 'July 20, 2026',
      totalSeats: 15,
      bookedSeats: 11,
      price: '₹22,999',
      duration: '9 Days',
      highlights: ['Spiti', 'Kinnaur', 'Monasteries']
    },
    {
      name: 'Photography Expedition',
      date: 'September 10, 2026',
      totalSeats: 10,
      bookedSeats: 7,
      price: '₹19,999',
      duration: '8 Days',
      highlights: ['Landscapes', 'Monasteries', 'Villages']
    },
    {
      name: 'Winter Spiti',
      date: 'January 25, 2026',
      totalSeats: 8,
      bookedSeats: 5,
      price: '₹18,999',
      duration: '6 Days',
      highlights: ['Snow Desert', 'Frozen River', 'Culture']
    }
  ]
};

const spitivalleyPackages = [
  {
    name: 'Spiti Valley Circuit Package',
    slug: 'spiti-valley-circuit-package',
    originalPrice: 21999,
    discountedPrice: 16999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Shimla', 'Kaza', 'Key Monastery', 'Langza', 'Chandratal'],
    rating: 4.8,
    reviewCount: 485,
    highlights: [
      'Key Monastery & Kaza',
      'Langza Buddha Statue',
      'Komic Highest Village',
      'Chandratal Lake Camping',
      'Pin Valley Exploration',
      'Local Homestays'
    ],
    hotelsIncluded: [
      { city: 'Shimla', nights: '1', name: 'Hotel' },
      { city: 'Kaza', nights: '3', name: 'Hotel/Homestay' },
      { city: 'Chandratal', nights: '1', name: 'Camp' },
      { city: 'Manali', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel & Camp Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Sightseeing Tours',
        'Permits',
        'Experienced Driver',
        'Oxygen Support'
      ],
      excluded: [
        'Transport to Shimla',
        'Return from Manali',
        'Lunch',
        'Travel Insurance',
        'Personal Expenses',
        'Camera Fees'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  },
  {
    name: 'Spiti Kinnaur Heritage Tour',
    slug: 'spiti-kinnaur-heritage-tour',
    originalPrice: 26999,
    discountedPrice: 22999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Shimla', 'Sangla', 'Kalpa', 'Tabo', 'Kaza', 'Manali'],
    rating: 4.9,
    reviewCount: 520,
    highlights: [
      'Kinnaur Valley Beauty',
      'Ancient Tabo Monastery',
      'Spiti Villages',
      'Apple Orchards',
      'Two Valley Experience',
      '8 Nights Complete Tour'
    ],
    hotelsIncluded: [
      { city: 'Shimla', nights: '1', name: 'Hotel' },
      { city: 'Sangla', nights: '2', name: 'Hotel' },
      { city: 'Kalpa', nights: '1', name: 'Hotel' },
      { city: 'Tabo', nights: '1', name: 'Guesthouse' },
      { city: 'Kaza', nights: '2', name: 'Hotel' },
      { city: 'Manali', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        '8 Nights Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Sightseeing',
        'Permits',
        'Guide Services',
        'Driver'
      ],
      excluded: [
        'Transport to Shimla',
        'Return from Manali',
        'Lunch',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  },
  {
    name: 'Chandratal Trekking Expedition',
    slug: 'chandratal-trekking-expedition',
    originalPrice: 19999,
    discountedPrice: 16999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Manali', 'Kunzum Pass', 'Chandratal', 'Kaza'],
    rating: 4.7,
    reviewCount: 380,
    highlights: [
      'Moon Lake Camping',
      'Kunzum Pass',
      'High Altitude Trek',
      'Stargazing',
      'Mountain Views',
      'Camping Experience'
    ],
    hotelsIncluded: [
      { city: 'Manali', nights: '1', name: 'Hotel' },
      { city: 'Chandratal', nights: '2', name: 'Camp' },
      { city: 'Kaza', nights: '1', name: 'Hotel' },
      { city: 'Manali', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'All Meals at Camp',
        'Camping Equipment',
        'All Transfers',
        'Trek Guide',
        'Permits',
        'First Aid'
      ],
      excluded: [
        'Transport to Manali',
        'Personal Trekking Gear',
        'Travel Insurance',
        'Medical Expenses',
        'Personal Porter'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  },
  {
    name: 'Spiti Monasteries & Culture',
    slug: 'spiti-monasteries-culture',
    originalPrice: 18999,
    discountedPrice: 15999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Kaza', 'Key', 'Tabo', 'Dhankar', 'Pin Valley'],
    rating: 4.6,
    reviewCount: 340,
    highlights: [
      '1000 Year Old Tabo',
      'Key Monastery',
      'Dhankar Lake Trek',
      'Pin Valley Wildlife',
      'Buddhist Culture',
      'Village Homestays'
    ],
    hotelsIncluded: [
      { city: 'Kaza', nights: '4', name: 'Hotel/Homestay' },
      { city: 'Manali', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel & Homestay',
        'All Meals',
        'Monastery Tours',
        'Entry Fees',
        'Cultural Guide',
        'All Transfers',
        'Permits'
      ],
      excluded: [
        'Transport to/from Region',
        'Travel Insurance',
        'Personal Expenses',
        'Photography Fees',
        'Donations'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Winter Spiti Expedition',
    slug: 'winter-spiti-expedition',
    originalPrice: 22999,
    discountedPrice: 19999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Shimla', 'Nako', 'Tabo', 'Kaza'],
    rating: 4.9,
    reviewCount: 295,
    highlights: [
      'Snow Desert Landscapes',
      'Frozen Waterfalls',
      'Winter Monasteries',
      'Ice Trekking',
      'Local Culture',
      'Unique Experience'
    ],
    hotelsIncluded: [
      { city: 'Shimla', nights: '1', name: 'Hotel' },
      { city: 'Nako', nights: '1', name: 'Guesthouse' },
      { city: 'Kaza', nights: '3', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Heated Accommodation',
        'All Meals',
        'All Transfers',
        'Winter Gear Support',
        'Sightseeing',
        'Permits',
        'Experienced Driver'
      ],
      excluded: [
        'Transport to Shimla',
        'Travel Insurance',
        'Personal Winter Gear',
        'Medical Expenses',
        'Emergency Evacuation'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ]
  },
  {
    name: 'Complete Spiti Adventure',
    slug: 'complete-spiti-adventure',
    originalPrice: 28999,
    discountedPrice: 24999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Shimla', 'Kinnaur', 'Spiti', 'Chandratal', 'Manali'],
    rating: 4.8,
    reviewCount: 545,
    highlights: [
      'Complete Circuit',
      'All Major Sites',
      'Monasteries & Lakes',
      'Villages & Culture',
      'Camping & Hotels',
      '8 Nights Full Tour'
    ],
    hotelsIncluded: [
      { city: 'Shimla', nights: '1', name: 'Hotel' },
      { city: 'Sangla', nights: '1', name: 'Hotel' },
      { city: 'Tabo', nights: '1', name: 'Guesthouse' },
      { city: 'Kaza', nights: '3', name: 'Hotel/Homestay' },
      { city: 'Chandratal', nights: '1', name: 'Camp' },
      { city: 'Manali', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        '8 Nights Accommodation',
        'All Meals',
        'All Transfers',
        'Sightseeing',
        'Permits',
        'Camping Equipment',
        'Guide & Driver'
      ],
      excluded: [
        'Transport to Shimla',
        'Return from Manali',
        'Travel Insurance',
        'Personal Expenses',
        'Camera Fees'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  }
];

const spitivalleyFaqs = [
  {
    question: 'What is the best time to visit Spiti Valley?',
    answer: 'Best time is June to September when roads are open. June-July offers green landscapes, August-September has clear skies. October brings autumn colors. Winter (Nov-May) is extremely cold with roads closed, but offers unique snow desert experience via Shimla route (Jan-Feb).'
  },
  {
    question: 'How to reach Spiti Valley?',
    answer: 'Two routes: 1) Shimla-Kinnaur route (open year-round, longer but scenic), 2) Manali-Kunzum route (June-Oct, shorter but challenging). No direct flights. Nearest airports: Shimla (245 km) and Bhuntar-Kullu (395 km). Most tours start from Shimla or Manali.'
  },
  {
    question: 'Do I need permits for Spiti Valley?',
    answer: 'Indian citizens don\'t need permits for most Spiti areas. However, permits required for some border villages. Foreign tourists need Protected Area Permits. Always carry photo ID. Permits available online or at SDM offices in Kaza and Rekong Peo.'
  },
  {
    question: 'Is altitude sickness a concern in Spiti?',
    answer: 'Yes, Spiti altitude ranges 3,000-4,500m. Acclimatize gradually - spend time in Kaza. Stay hydrated, avoid alcohol, don\'t rush. Carry Diamox tablets. Symptoms: headache, nausea, breathlessness. Hotels have oxygen. Descend immediately if severe symptoms occur.'
  },
  {
    question: 'What should I pack for Spiti Valley?',
    answer: 'Pack warm clothes (even summer), thermals, jacket, gloves. Sunscreen (high SPF), sunglasses, lip balm essential. Good trekking shoes, medicines, personal toiletries. Power bank, torch. Water bottles. Carry sufficient cash as ATMs limited. Basic first aid kit recommended.'
  },
  {
    question: 'Are there mobile networks in Spiti?',
    answer: 'Limited network availability. BSNL works in Kaza and main villages. Most areas have no network. Nako, Tabo have patchy coverage. Remote villages and Chandratal have zero connectivity. Some hotels offer WiFi. Postpaid BSNL recommended. Enjoy digital detox!'
  }
];

const spitivalleyReviews = [
  {
    name: 'Amit Patel',
    rating: 5,
    location: 'Ahmedabad',
    comment: 'Spiti exceeded all expectations! Chandratal was magical, Key Monastery stunning, and village homestays authentic. Raw beauty everywhere. Well-organized tour with great driver. Life-changing experience!',
    date: new Date('2023-09-18')
  },
  {
    name: 'Neha Malhotra',
    rating: 5,
    location: 'Delhi',
    comment: 'Absolutely loved Spiti! Pristine landscapes, warm locals, and spiritual monasteries. Proper acclimatization given. Comfortable stays despite remote location. Photography paradise. Highly recommend!',
    date: new Date('2023-08-25')
  },
  {
    name: 'Rohan Khanna',
    rating: 4,
    location: 'Mumbai',
    comment: 'Incredible Spiti adventure! Remote villages fascinating, Tabo monastery amazing. Roads challenging but manageable. Excellent guide knowledge. Wish we had one more day. Definitely coming back!',
    date: new Date('2023-07-12')
  }
];

async function migrateSpitivalleyData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'spiti-valley' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'spiti-valley' }, spitivalleyData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(spitivalleyData);
    }
    console.log('✅ Spiti Valley destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(spitivalleyFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(spitivalleyPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(spitivalleyReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateSpitivalleyData();
