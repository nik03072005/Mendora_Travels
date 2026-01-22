import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const nagalandData = {
  destinationName: 'Nagaland',
  slug: 'nagaland',
  imageUrl: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Nagaland Tour Packages',
    tagline: 'Land of Festivals',
    startingPrice: 18999,
    durationRange: '6-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Nagaland, the Land of Festivals, offers vibrant tribal culture, Hornbill Festival, scenic valleys, warrior heritage, traditional villages, and warm Naga hospitality.',
    expandedDescription: 'Nagaland, the Land of Festivals, offers vibrant tribal culture, Hornbill Festival, scenic valleys, warrior heritage, traditional villages, and warm Naga hospitality.\n\nExplore Kohima\'s war cemetery, Dzukou Valley\'s beauty, Hornbill Festival celebrations, traditional Naga villages, ancient Morungs, and experience the rich tribal traditions and warrior culture.\n\nOur packages include comfortable accommodations, cultural experiences, village visits, festival participation, and authentic Naga cuisine. From cultural immersion to nature exploration, Nagaland offers unique journeys.'
  },
  
  subDestinations: [
    {
      name: 'Kohima',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      packagesCount: 22
    },
    {
      name: 'Dzukou Valley',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Khonoma',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Dimapur',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 15
    },
    {
      name: 'Mon',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      packagesCount: 14
    },
    {
      name: 'Mokokchung',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 12
    }
  ],
  
  activities: [
    {
      title: 'Hornbill Festival',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      location: 'Kisama Heritage Village'
    },
    {
      title: 'Dzukou Trek',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      location: 'Valley of Flowers'
    },
    {
      title: 'Village Homestay',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      location: 'Khonoma & Longwa'
    },
    {
      title: 'Tribal Culture',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      location: 'Traditional Villages'
    }
  ],
  
  groupTours: [
    {
      name: 'Hornbill Festival Special',
      date: 'December 1, 2026',
      totalSeats: 18,
      bookedSeats: 15,
      price: '₹24,999',
      duration: '7 Days',
      highlights: ['Festival', 'Cultural Shows', 'Villages']
    },
    {
      name: 'Nagaland Cultural Tour',
      date: 'March 15, 2026',
      totalSeats: 15,
      bookedSeats: 11,
      price: '₹18,999',
      duration: '6 Days',
      highlights: ['Kohima', 'Villages', 'Culture']
    },
    {
      name: 'Dzukou Valley Trek',
      date: 'October 20, 2026',
      totalSeats: 12,
      bookedSeats: 8,
      price: '₹21,999',
      duration: '7 Days',
      highlights: ['Trekking', 'Valley', 'Nature']
    },
    {
      name: 'Complete Nagaland',
      date: 'November 10, 2026',
      totalSeats: 16,
      bookedSeats: 12,
      price: '₹26,999',
      duration: '9 Days',
      highlights: ['Full Tour', 'All Tribes', 'Festivals']
    }
  ]
};

const nagalandPackages = [
  {
    name: 'Hornbill Festival Experience',
    slug: 'hornbill-festival-experience',
    originalPrice: 28999,
    discountedPrice: 24999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Kohima', 'Kisama', 'Khonoma', 'Dimapur'],
    rating: 4.9,
    reviewCount: 485,
    highlights: [
      'Hornbill Festival Days',
      'Tribal Performances',
      'Traditional Games',
      'Naga Cuisine Fest',
      'Cultural Shows',
      'Village Visits'
    ],
    hotelsIncluded: [
      { city: 'Kohima', nights: '5', name: 'Hotel' },
      { city: 'Dimapur', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Festival Entry',
        'Cultural Shows',
        'Village Tours',
        'Local Guide'
      ],
      excluded: [
        'Flight to/from Dimapur',
        'Lunch',
        'Travel Insurance',
        'Shopping at Festival',
        'Personal Expenses',
        'Photography Fees'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  },
  {
    name: 'Dzukou Valley Trekking',
    slug: 'dzukou-valley-trekking',
    originalPrice: 24999,
    discountedPrice: 20999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Kohima', 'Dzukou Valley', 'Viswema'],
    rating: 4.7,
    reviewCount: 395,
    highlights: [
      'Valley of Flowers Trek',
      'Seasonal Blooms',
      'Mountain Camping',
      'Sunrise Views',
      'Photography Paradise',
      'Nature Trails'
    ],
    hotelsIncluded: [
      { city: 'Kohima', nights: '2', name: 'Hotel' },
      { city: 'Dzukou Valley', nights: '2', name: 'Camping' },
      { city: 'Kohima', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'All Meals During Trek',
        'Camping Equipment',
        'Trek Guide',
        'Permits',
        'All Transfers',
        'First Aid'
      ],
      excluded: [
        'Transport to Kohima',
        'Personal Trekking Gear',
        'Travel Insurance',
        'Porter for Personal Bags',
        'Medical Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Nagaland Cultural Immersion',
    slug: 'nagaland-cultural-immersion',
    originalPrice: 22999,
    discountedPrice: 18999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Kohima', 'Khonoma', 'Mokokchung', 'Mon'],
    rating: 4.8,
    reviewCount: 420,
    highlights: [
      'Village Homestays',
      'Tribal Interactions',
      'Traditional Morungs',
      'Local Handicrafts',
      'Warrior Culture',
      'Authentic Naga Life'
    ],
    hotelsIncluded: [
      { city: 'Kohima', nights: '2', name: 'Hotel' },
      { city: 'Khonoma', nights: '1', name: 'Homestay' },
      { city: 'Mon', nights: '2', name: 'Homestay/Guesthouse' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'All Meals',
        'Village Entry',
        'Cultural Guide',
        'All Transfers',
        'Homestay Experience',
        'Permits'
      ],
      excluded: [
        'Transport to Dimapur',
        'Travel Insurance',
        'Personal Expenses',
        'Handicraft Shopping',
        'Tips to Hosts'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Kohima War History Tour',
    slug: 'kohima-war-history-tour',
    originalPrice: 19999,
    discountedPrice: 16999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Kohima', 'Dimapur', 'Khonoma'],
    rating: 4.5,
    reviewCount: 310,
    highlights: [
      'War Cemetery Visit',
      'WW2 History',
      'Battle of Kohima',
      'Museum Tours',
      'Heritage Sites',
      'Historical Insights'
    ],
    hotelsIncluded: [
      { city: 'Kohima', nights: '3', name: 'Hotel' },
      { city: 'Dimapur', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Museum Entries',
        'History Guide',
        'Sightseeing Tours',
        'War Sites'
      ],
      excluded: [
        'Flight to/from Dimapur',
        'Lunch & Dinner',
        'Travel Insurance',
        'Books & Souvenirs',
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
    name: 'Tribal Villages Circuit',
    slug: 'tribal-villages-circuit',
    originalPrice: 23999,
    discountedPrice: 19999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Kohima', 'Khonoma', 'Longwa', 'Tuophema', 'Chizami'],
    rating: 4.6,
    reviewCount: 365,
    highlights: [
      'Multiple Tribes',
      'Headhunter Villages',
      'Traditional Crafts',
      'Village Festivals',
      'Local Traditions',
      'Cultural Exchange'
    ],
    hotelsIncluded: [
      { city: 'Kohima', nights: '2', name: 'Hotel' },
      { city: 'Khonoma', nights: '1', name: 'Homestay' },
      { city: 'Longwa', nights: '1', name: 'Village Hut' },
      { city: 'Tuophema', nights: '2', name: 'Traditional Cottage' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'All Meals',
        'Village Entries',
        'Cultural Guide',
        'All Transfers',
        'Traditional Experiences',
        'Permits'
      ],
      excluded: [
        'Transport to Kohima',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses',
        'Additional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  },
  {
    name: 'Complete Nagaland Explorer',
    slug: 'complete-nagaland-explorer',
    originalPrice: 30999,
    discountedPrice: 26999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Dimapur', 'Kohima', 'Dzukou', 'Khonoma', 'Mon', 'Mokokchung'],
    rating: 4.8,
    reviewCount: 515,
    highlights: [
      'Complete Tour',
      'All Major Sites',
      'Trekking & Culture',
      'Multiple Villages',
      'Tribal Diversity',
      '8 Nights Full Experience'
    ],
    hotelsIncluded: [
      { city: 'Dimapur', nights: '1', name: 'Hotel' },
      { city: 'Kohima', nights: '3', name: 'Hotel' },
      { city: 'Dzukou', nights: '1', name: 'Camp' },
      { city: 'Mon', nights: '2', name: 'Homestay' },
      { city: 'Mokokchung', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        '8 Nights Accommodation',
        'All Meals',
        'All Transfers',
        'All Sightseeing',
        'Trek Support',
        'Village Visits',
        'Cultural Guide'
      ],
      excluded: [
        'Flight to/from Dimapur',
        'Travel Insurance',
        'Personal Expenses',
        'Shopping',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  }
];

const nagalandFaqs = [
  {
    question: 'What is the best time to visit Nagaland?',
    answer: 'Best time is October to May with pleasant weather (10-25°C). December 1-10 is Hornbill Festival - most popular time but book early! October-November: Post-monsoon beauty. March-May: Warm weather. Monsoon (June-Sept) sees heavy rainfall. Winter (Dec-Feb) can be cold in hill areas.'
  },
  {
    question: 'Do I need permits to visit Nagaland?',
    answer: 'Indian citizens don\'t need permits for most areas. However, Inner Line Permit (ILP) required for some border villages. Foreign nationals need Protected Area Permit. ILP available online or at checkpoints. Always carry photo ID. Our packages include permit assistance. Check latest requirements.'
  },
  {
    question: 'What is the Hornbill Festival?',
    answer: 'Hornbill Festival is Nagaland\'s biggest cultural festival, held December 1-10 annually at Kisama Heritage Village. Features all 16 Naga tribes showcasing dances, songs, traditional games, handicrafts, and cuisine. Called "Festival of Festivals". Must experience! Book 3-4 months in advance.'
  },
  {
    question: 'Is Nagaland safe for tourists?',
    answer: 'Yes, Nagaland is safe for tourists. Insurgency issues are largely resolved. Locals are warm and hospitable. However, respect local customs, dress modestly, seek permission before photography (especially in villages). Avoid isolated areas at night. Tourism is encouraged and well-supported.'
  },
  {
    question: 'What should I know about Naga culture?',
    answer: 'Naga people are welcoming but traditional. Respect customs: ask before photos, dress modestly, remove shoes at homes/churches. Most villages are Christian - respect religious places. Try local rice beer (offered as hospitality). Handshakes acceptable. Sunday is sacred - limited activities. Show interest in their culture!'
  },
  {
    question: 'What are must-try Naga foods?',
    answer: 'Must-try: Smoked pork with bamboo shoot, Axone (fermented soybean), Anishi (fermented taro leaves), Galho (porridge), Fish cooked in bamboo. Naga chutney (very spicy!). Rice beer. Snails and local herbs. Food is spicy! Vegetarian options limited - inform hosts in advance.'
  }
];

const nagalandReviews = [
  {
    name: 'Siddharth Menon',
    rating: 5,
    location: 'Kochi',
    comment: 'Hornbill Festival was incredible! Amazing cultural diversity, warm people, and unique experiences. Village homestays authentic. Dzukou Valley breathtaking. Northeastern India\'s best-kept secret!',
    date: new Date('2023-12-15')
  },
  {
    name: 'Kavita Rao',
    rating: 5,
    location: 'Pune',
    comment: 'Unforgettable Nagaland experience! Tribal villages fascinating, people so welcoming, and culture rich. War cemetery moving. Excellent local guides. Exceeded all expectations!',
    date: new Date('2023-11-20')
  },
  {
    name: 'Arun Kumar',
    rating: 4,
    location: 'Chennai',
    comment: 'Great cultural immersion! Villages were amazing, homestay authentic, and trek beautiful. Food very spicy but delicious. Roads challenging but manageable. Worth the journey!',
    date: new Date('2023-10-25')
  }
];

async function migrateNagalandData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'nagaland' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'nagaland' }, nagalandData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(nagalandData);
    }
    console.log('✅ Nagaland destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(nagalandFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(nagalandPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(nagalandReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateNagalandData();
