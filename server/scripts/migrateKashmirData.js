import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const kashmirData = {
  destinationName: 'Kashmir',
  slug: 'kashmir',
  imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Kashmir Tour Packages',
    tagline: 'Paradise on Earth',
    startingPrice: 17999,
    durationRange: '5-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Kashmir, Paradise on Earth, offers breathtaking Dal Lake, snow-capped mountains, lush valleys, Mughal gardens, adventure sports, and warm Kashmiri hospitality.',
    expandedDescription: 'Kashmir, Paradise on Earth, offers breathtaking Dal Lake, snow-capped mountains, lush valleys, Mughal gardens, adventure sports, and warm Kashmiri hospitality.\n\nExplore Srinagar\'s houseboats and Mughal gardens, Gulmarg\'s gondola and skiing, Pahalgam\'s valleys, Sonmarg\'s glaciers, and experience the magical beauty of this Himalayan paradise.\n\nOur packages include comfortable accommodations, shikara rides, garden visits, cable car experiences, and authentic Kashmiri cuisine. From romantic getaways to adventure sports, Kashmir offers unforgettable journeys.'
  },
  
  subDestinations: [
    {
      name: 'Srinagar',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 30
    },
    {
      name: 'Gulmarg',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      packagesCount: 26
    },
    {
      name: 'Pahalgam',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 24
    },
    {
      name: 'Sonmarg',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      packagesCount: 20
    },
    {
      name: 'Yusmarg',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Doodhpathri',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 14
    }
  ],
  
  activities: [
    {
      title: 'Shikara Ride',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      location: 'Dal Lake'
    },
    {
      title: 'Gondola Cable Car',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      location: 'Gulmarg'
    },
    {
      title: 'River Rafting',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      location: 'Lidder River'
    },
    {
      title: 'Snow Activities',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      location: 'Gulmarg & Sonmarg'
    }
  ],
  
  groupTours: [
    {
      name: 'Kashmir Valley Tour',
      date: 'March 20, 2026',
      totalSeats: 20,
      bookedSeats: 16,
      price: '₹17,999',
      duration: '6 Days',
      highlights: ['Srinagar', 'Gulmarg', 'Pahalgam']
    },
    {
      name: 'Kashmir Honeymoon',
      date: 'April 10, 2026',
      totalSeats: 12,
      bookedSeats: 10,
      price: '₹24,999',
      duration: '7 Days',
      highlights: ['Houseboat', 'Romantic', 'Gardens']
    },
    {
      name: 'Adventure Kashmir',
      date: 'May 15, 2026',
      totalSeats: 15,
      bookedSeats: 11,
      price: '₹21,999',
      duration: '7 Days',
      highlights: ['Skiing', 'Rafting', 'Trekking']
    },
    {
      name: 'Complete Kashmir',
      date: 'June 5, 2026',
      totalSeats: 18,
      bookedSeats: 14,
      price: '₹28,999',
      duration: '9 Days',
      highlights: ['All Valleys', 'Full Experience']
    }
  ]
};

const kashmirPackages = [
  {
    name: 'Kashmir Paradise Package',
    slug: 'kashmir-paradise-package',
    originalPrice: 22999,
    discountedPrice: 17999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    rating: 4.8,
    reviewCount: 590,
    highlights: [
      'Dal Lake Shikara Ride',
      'Houseboat Stay 1 Night',
      'Gulmarg Gondola Ride',
      'Pahalgam Valley Tour',
      'Mughal Gardens Visit',
      'Local Market Shopping'
    ],
    hotelsIncluded: [
      { city: 'Srinagar', nights: '2', name: 'Houseboat & Hotel' },
      { city: 'Gulmarg', nights: '1', name: 'Hotel' },
      { city: 'Pahalgam', nights: '2', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel & Houseboat Stay',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Shikara Ride',
        'Sightseeing Tours',
        'Entry Tickets',
        'Local Guide'
      ],
      excluded: [
        'Flight to/from Srinagar',
        'Lunch',
        'Gondola Tickets',
        'Travel Insurance',
        'Personal Expenses',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  },
  {
    name: 'Gulmarg Skiing Adventure',
    slug: 'gulmarg-skiing-adventure',
    originalPrice: 24999,
    discountedPrice: 20999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Srinagar', 'Gulmarg'],
    rating: 4.7,
    reviewCount: 420,
    highlights: [
      'Gulmarg Ski Resort',
      'Skiing Lessons',
      'Gondola Phase 1 & 2',
      'Snow Activities',
      'Mountain Views',
      'Winter Sports'
    ],
    hotelsIncluded: [
      { city: 'Srinagar', nights: '2', name: 'Hotel' },
      { city: 'Gulmarg', nights: '3', name: 'Ski Resort' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast & Dinner',
        'Transfers',
        'Gondola Tickets',
        'Basic Skiing Lessons',
        'Equipment Guidance',
        'Sightseeing'
      ],
      excluded: [
        'Flight to/from Srinagar',
        'Lunch',
        'Ski Equipment Rental',
        'Advanced Lessons',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ]
  },
  {
    name: 'Romantic Kashmir Honeymoon',
    slug: 'romantic-kashmir-honeymoon',
    originalPrice: 28999,
    discountedPrice: 24999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    rating: 4.9,
    reviewCount: 565,
    highlights: [
      '2 Nights Deluxe Houseboat',
      'Private Shikara Rides',
      'Romantic Candlelight Dinner',
      'All Valleys Covered',
      'Honeymoon Special Decor',
      'Photography Session'
    ],
    hotelsIncluded: [
      { city: 'Srinagar', nights: '2', name: 'Deluxe Houseboat' },
      { city: 'Gulmarg', nights: '1', name: 'Resort' },
      { city: 'Pahalgam', nights: '2', name: 'Resort' },
      { city: 'Srinagar', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Deluxe Accommodation',
        'All Meals',
        'Private Transfers',
        'Shikara Rides',
        'Candlelight Dinner',
        'Honeymoon Decor',
        'All Sightseeing'
      ],
      excluded: [
        'Flight to/from Srinagar',
        'Travel Insurance',
        'Professional Photography',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Kashmir Offbeat Exploration',
    slug: 'kashmir-offbeat-exploration',
    originalPrice: 23999,
    discountedPrice: 19999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Srinagar', 'Yusmarg', 'Doodhpathri', 'Aharbal'],
    rating: 4.6,
    reviewCount: 355,
    highlights: [
      'Offbeat Destinations',
      'Yusmarg Meadows',
      'Doodhpathri Valley',
      'Aharbal Waterfall',
      'Less Crowded Places',
      'Authentic Experience'
    ],
    hotelsIncluded: [
      { city: 'Srinagar', nights: '4', name: 'Hotel' },
      { city: 'Yusmarg', nights: '1', name: 'Camp/Lodge' },
      { city: 'Doodhpathri', nights: '1', name: 'Guesthouse' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Offbeat Tours',
        'Entry Fees',
        'Local Guide',
        'Sightseeing'
      ],
      excluded: [
        'Flight to/from Srinagar',
        'Lunch',
        'Travel Insurance',
        'Horse Riding',
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
    name: 'Kashmir Pilgrimage Tour',
    slug: 'kashmir-pilgrimage-tour',
    originalPrice: 21999,
    discountedPrice: 18999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Srinagar', 'Pahalgam', 'Martand', 'Shankaracharya'],
    rating: 4.5,
    reviewCount: 320,
    highlights: [
      'Shankaracharya Temple',
      'Martand Sun Temple',
      'Amarnath Base Pahalgam',
      'Religious Sites',
      'Spiritual Experience',
      'Temple Tours'
    ],
    hotelsIncluded: [
      { city: 'Srinagar', nights: '3', name: 'Hotel' },
      { city: 'Pahalgam', nights: '2', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Temple Visits',
        'Pilgrimage Guide',
        'Entry Donations',
        'Sightseeing'
      ],
      excluded: [
        'Flight to/from Srinagar',
        'Lunch',
        'Travel Insurance',
        'Personal Donations',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Complete Kashmir Experience',
    slug: 'complete-kashmir-experience',
    originalPrice: 32999,
    discountedPrice: 28999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Yusmarg'],
    rating: 4.9,
    reviewCount: 620,
    highlights: [
      'All Major Valleys',
      'Houseboat & Hotels',
      'Complete Sightseeing',
      'All Activities',
      'Comprehensive Tour',
      '8 Nights Full Experience'
    ],
    hotelsIncluded: [
      { city: 'Srinagar', nights: '3', name: 'Houseboat & Hotel' },
      { city: 'Gulmarg', nights: '2', name: 'Hotel' },
      { city: 'Pahalgam', nights: '2', name: 'Resort' },
      { city: 'Sonmarg', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        '8 Nights Accommodation',
        'All Meals',
        'All Transfers',
        'All Sightseeing',
        'Shikara Rides',
        'Entry Tickets',
        'Activities Support'
      ],
      excluded: [
        'Flight to/from Srinagar',
        'Gondola Tickets',
        'Optional Activities',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  }
];

const kashmirFaqs = [
  {
    question: 'What is the best time to visit Kashmir?',
    answer: 'Kashmir is beautiful year-round! March-June: Pleasant weather (15-30°C), flowers bloom. July-August: Monsoon, lush greenery. September-November: Autumn colors, clear skies. December-February: Snow season, skiing. Peak tourist seasons: April-June and December-January. Each season offers unique experiences!'
  },
  {
    question: 'Is it safe to travel to Kashmir now?',
    answer: 'Yes, Kashmir is safe for tourists. Situation has improved significantly. Tourist areas like Srinagar, Gulmarg, Pahalgam are peaceful. Follow travel advisories, book with registered operators, stay in tourist zones. Thousands visit monthly. Local people are warm and welcoming to tourists.'
  },
  {
    question: 'Do I need permits to visit Kashmir?',
    answer: 'Indian citizens don\'t need permits for most Kashmir areas. However, some border areas near LOC require permits. Foreign tourists need Protected Area Permits for certain regions. Always carry photo ID. Check latest requirements before travel. Our packages include permit assistance.'
  },
  {
    question: 'What should I pack for Kashmir trip?',
    answer: 'Pack according to season. Summer: Light clothes, jacket for evenings. Winter: Heavy woolens, thermals, gloves, snow boots. Essentials: Sunscreen, sunglasses, medicines, power bank. Modest dress recommended. Comfortable walking shoes. Emergency contacts. Cash (ATMs can be limited in remote areas).'
  },
  {
    question: 'What are must-visit places in Kashmir?',
    answer: 'Must-visit: Srinagar (Dal Lake, Mughal Gardens, Old City), Gulmarg (Gondola, skiing), Pahalgam (valleys, Betaab Valley), Sonmarg (glaciers, meadows). Also explore Yusmarg, Doodhpathri, Shankaracharya Temple. Each destination offers unique beauty and experiences!'
  },
  {
    question: 'What is special about Kashmir cuisine?',
    answer: 'Kashmiri cuisine is rich and aromatic! Must-try: Rogan Josh, Yakhni, Tabak Maaz, Gushtaba, Dum Aloo. Wazwan is elaborate traditional meal. Kahwa (Kashmiri tea), Noon Chai (salt tea), and local breads. Street food: Samosas, Kebabs. Vegetarian options available. Don\'t miss local dry fruits!'
  }
];

const kashmirReviews = [
  {
    name: 'Priya Mehta',
    rating: 5,
    location: 'Delhi',
    comment: 'Kashmir truly is paradise! Dal Lake houseboat was magical, Gulmarg gondola breathtaking, and Pahalgam serene. Excellent organization, comfortable stays, and helpful guides. Exceeded expectations!',
    date: new Date('2024-01-25')
  },
  {
    name: 'Rajesh Sharma',
    rating: 5,
    location: 'Mumbai',
    comment: 'Perfect honeymoon destination! Romantic houseboat, beautiful valleys, and amazing hospitality. Shikara rides at sunset unforgettable. Well-planned itinerary. Highly recommend for couples!',
    date: new Date('2023-12-18')
  },
  {
    name: 'Ankit Singh',
    rating: 4,
    location: 'Jaipur',
    comment: 'Wonderful Kashmir experience! Snow activities in Gulmarg amazing, Mughal gardens beautiful, and food delicious. Only issue was weather delays. Otherwise perfect trip!',
    date: new Date('2023-11-30')
  }
];

async function migrateKashmirData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'kashmir' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'kashmir' }, kashmirData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(kashmirData);
    }
    console.log('✅ Kashmir destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(kashmirFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(kashmirPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(kashmirReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateKashmirData();
