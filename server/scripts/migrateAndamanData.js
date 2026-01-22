import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const andamanData = {
  destinationName: 'Andaman',
  slug: 'andaman',
  imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Andaman Tour Packages',
    tagline: 'Emerald Islands of India',
    startingPrice: 19999,
    durationRange: '5-8 Days',
    heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Andaman Islands offer pristine beaches, crystal-clear waters, vibrant coral reefs, water sports, historic cellular jail, tropical forests, and stunning marine biodiversity.',
    expandedDescription: 'Andaman Islands offer pristine beaches, crystal-clear waters, vibrant coral reefs, water sports, historic cellular jail, tropical forests, and stunning marine biodiversity.\n\nExplore Radhanagar Beach, Cellular Jail, Havelock Island\'s beaches, Neil Island serenity, Ross Island ruins, scuba diving paradise, and experience untouched natural beauty.\n\nOur packages include comfortable accommodations, inter-island ferries, water activities, historical tours, and fresh seafood experiences. From beach relaxation to underwater adventures, Andaman offers tropical paradise journeys.'
  },
  
  subDestinations: [
    {
      name: 'Port Blair',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      packagesCount: 28
    },
    {
      name: 'Havelock Island',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&q=80',
      packagesCount: 26
    },
    {
      name: 'Neil Island',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      packagesCount: 22
    },
    {
      name: 'Ross Island',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Baratang',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'North Bay',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&q=80',
      packagesCount: 20
    }
  ],
  
  activities: [
    {
      title: 'Scuba Diving',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      location: 'Havelock & Neil'
    },
    {
      title: 'Snorkeling',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&q=80',
      location: 'North Bay & Elephant'
    },
    {
      title: 'Sea Walking',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      location: 'North Bay'
    },
    {
      title: 'Island Hopping',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&q=80',
      location: 'Ferry Tours'
    }
  ],
  
  groupTours: [
    {
      name: 'Andaman Beach Getaway',
      date: 'March 15, 2026',
      totalSeats: 20,
      bookedSeats: 16,
      price: '₹19,999',
      duration: '6 Days',
      highlights: ['Port Blair', 'Havelock', 'Neil']
    },
    {
      name: 'Scuba & Adventure',
      date: 'April 20, 2026',
      totalSeats: 15,
      bookedSeats: 12,
      price: '₹26,999',
      duration: '7 Days',
      highlights: ['Diving', 'Water Sports', 'Beaches']
    },
    {
      name: 'Honeymoon Special',
      date: 'May 10, 2026',
      totalSeats: 10,
      bookedSeats: 8,
      price: '₹29,999',
      duration: '7 Days',
      highlights: ['Romantic', 'Beach Resorts', 'Activities']
    },
    {
      name: 'Complete Andaman',
      date: 'December 5, 2026',
      totalSeats: 18,
      bookedSeats: 14,
      price: '₹32,999',
      duration: '8 Days',
      highlights: ['All Islands', 'Full Experience']
    }
  ]
};

const andamanPackages = [
  {
    name: 'Port Blair Havelock Neil',
    slug: 'port-blair-havelock-neil',
    originalPrice: 24999,
    discountedPrice: 19999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Port Blair', 'Havelock Island', 'Neil Island'],
    rating: 4.8,
    reviewCount: 580,
    highlights: [
      'Cellular Jail Light Show',
      'Radhanagar Beach',
      'Elephant Beach Water Sports',
      'Natural Bridge Neil',
      'Ross Island Ruins',
      'Snorkeling Experience'
    ],
    hotelsIncluded: [
      { city: 'Port Blair', nights: '2', name: 'Hotel' },
      { city: 'Havelock', nights: '2', name: 'Beach Resort' },
      { city: 'Neil', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'Inter-Island Ferries',
        'Airport Transfers',
        'Cellular Jail Entry',
        'Basic Sightseeing',
        'Snorkeling at North Bay'
      ],
      excluded: [
        'Flight to/from Port Blair',
        'Lunch & Dinner',
        'Water Sports at Elephant',
        'Scuba Diving',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    ]
  },
  {
    name: 'Scuba Diving Paradise',
    slug: 'scuba-diving-paradise',
    originalPrice: 31999,
    discountedPrice: 26999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Port Blair', 'Havelock', 'Neil Island'],
    rating: 4.9,
    reviewCount: 495,
    highlights: [
      'Professional Scuba Diving',
      'Shore & Boat Dives',
      'PADI Certification Option',
      'Underwater Photography',
      'Multiple Dive Sites',
      'Marine Life Exploration'
    ],
    hotelsIncluded: [
      { city: 'Port Blair', nights: '2', name: 'Hotel' },
      { city: 'Havelock', nights: '3', name: 'Beach Resort' },
      { city: 'Neil', nights: '1', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'All Ferries',
        '2 Scuba Dives',
        'PADI Instructor',
        'Equipment Provided',
        'Underwater Photos'
      ],
      excluded: [
        'Flight to/from Port Blair',
        'Lunch & Dinner',
        'Additional Dives',
        'PADI Certification Fee',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    ]
  },
  {
    name: 'Romantic Andaman Honeymoon',
    slug: 'romantic-andaman-honeymoon',
    originalPrice: 34999,
    discountedPrice: 29999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Port Blair', 'Havelock', 'Neil Island'],
    rating: 4.9,
    reviewCount: 545,
    highlights: [
      'Beach Front Resorts',
      'Candlelight Dinner',
      'Private Beach Time',
      'Sunset Cruise',
      'Romantic Décor',
      'Couple Activities'
    ],
    hotelsIncluded: [
      { city: 'Port Blair', nights: '1', name: 'Hotel' },
      { city: 'Havelock', nights: '3', name: 'Beach Resort' },
      { city: 'Neil', nights: '2', name: 'Beach Resort' }
    ],
    packageDetails: {
      included: [
        'Beachfront Accommodation',
        'All Meals',
        'Private Transfers',
        'All Ferries',
        'Candlelight Dinner',
        'Honeymoon Décor',
        'Couple Activities'
      ],
      excluded: [
        'Flight to/from Port Blair',
        'Adventure Sports',
        'Scuba Diving',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80'
    ]
  },
  {
    name: 'Adventure Water Sports',
    slug: 'adventure-water-sports',
    originalPrice: 27999,
    discountedPrice: 23999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Port Blair', 'Havelock', 'North Bay'],
    rating: 4.7,
    reviewCount: 450,
    highlights: [
      'Sea Walking',
      'Jet Ski',
      'Banana Boat',
      'Parasailing',
      'Snorkeling',
      'Glass Bottom Boat'
    ],
    hotelsIncluded: [
      { city: 'Port Blair', nights: '3', name: 'Hotel' },
      { city: 'Havelock', nights: '2', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Ferries',
        'North Bay Sports',
        'Elephant Beach Access',
        'Equipment Provided'
      ],
      excluded: [
        'Flight to/from Port Blair',
        'Lunch & Dinner',
        'Scuba Diving',
        'Travel Insurance',
        'Additional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    ]
  },
  {
    name: 'Baratang Island Explorer',
    slug: 'baratang-island-explorer',
    originalPrice: 24999,
    discountedPrice: 20999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Port Blair', 'Baratang', 'Havelock'],
    rating: 4.6,
    reviewCount: 385,
    highlights: [
      'Limestone Caves',
      'Mud Volcano',
      'Jarawa Reserve Transit',
      'Mangrove Creeks',
      'Parrot Island',
      'Unique Experience'
    ],
    hotelsIncluded: [
      { city: 'Port Blair', nights: '2', name: 'Hotel' },
      { city: 'Baratang', nights: '1', name: 'Basic Lodge' },
      { city: 'Havelock', nights: '2', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'Baratang Permits',
        'Cave Entry',
        'Boat Rides',
        'All Transfers',
        'Guide'
      ],
      excluded: [
        'Flight to/from Port Blair',
        'Lunch & Dinner',
        'Water Sports',
        'Travel Insurance',
        'Camera Fees',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    ]
  },
  {
    name: 'Complete Andaman Tour',
    slug: 'complete-andaman-tour',
    originalPrice: 36999,
    discountedPrice: 32999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Port Blair', 'Havelock', 'Neil', 'Baratang', 'Ross'],
    rating: 4.8,
    reviewCount: 610,
    highlights: [
      'All Major Islands',
      'Water Sports',
      'Scuba Diving',
      'Historical Sites',
      'Beach Hopping',
      '7 Nights Complete Tour'
    ],
    hotelsIncluded: [
      { city: 'Port Blair', nights: '3', name: 'Hotel' },
      { city: 'Havelock', nights: '3', name: 'Beach Resort' },
      { city: 'Neil', nights: '1', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        '7 Nights Accommodation',
        'Daily Breakfast',
        'All Inter-Island Ferries',
        'Cellular Jail',
        'Ross & North Bay',
        '1 Scuba Dive',
        'All Transfers'
      ],
      excluded: [
        'Flight to/from Port Blair',
        'Lunch & Dinner',
        'Additional Activities',
        'Water Sports at Elephant',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    ]
  }
];

const andamanFaqs = [
  {
    question: 'What is the best time to visit Andaman?',
    answer: 'Best time is October to May with pleasant weather (20-30°C) and calm seas. December-February is peak season - book early! March-May is warm but good for diving. Monsoon (June-September) sees rough seas, ferry cancellations, and many water activities closed. Avoid monsoon season.'
  },
  {
    question: 'How to travel between islands in Andaman?',
    answer: 'Government ferries connect major islands - book in advance (online or at Port Blair jetty). Private cruises available (faster but expensive). Helicopter services between Port Blair and Havelock. Most hotels arrange ferry bookings. Carry seasickness tablets. Check weather before booking.'
  },
  {
    question: 'Do I need permits for Andaman Islands?',
    answer: 'Indian tourists don\'t need permits for Port Blair, Havelock, Neil. However, permits required for tribal areas (Baratang), North Andaman. Foreign tourists need Restricted Area Permit (free, obtained at airport). Some islands completely restricted. Always carry photo ID.'
  },
  {
    question: 'Is scuba diving safe in Andaman for beginners?',
    answer: 'Yes, absolutely! Professional PADI-certified instructors available. Beginners start with shore dives in shallow water. Full training and equipment provided. Health check mandatory. Best sites: Havelock, Neil Island. Minimum age: 10 years. Non-swimmers can do sea walking or snorkeling instead.'
  },
  {
    question: 'What should I pack for Andaman trip?',
    answer: 'Pack light cotton clothes, swimwear, flip-flops, reef-safe sunscreen (important!), sunglasses, hat. Mosquito repellent essential. Waterproof bag for electronics. Basic medicines. Modest dress for Port Blair city. Underwater camera if possible. Cash (ATMs limited in islands).'
  },
  {
    question: 'Are there vegetarian food options in Andaman?',
    answer: 'Yes, vegetarian food available but limited in smaller islands. Port Blair has many veg restaurants. Hotels serve veg meals. Seafood is specialty - inform hotel in advance if vegetarian. North/South Indian food common. Beach shacks offer basic veg options. Carry snacks if strict dietary requirements.'
  }
];

const andamanReviews = [
  {
    name: 'Ritika Jain',
    rating: 5,
    location: 'Delhi',
    comment: 'Paradise found! Radhanagar Beach stunning, scuba diving incredible, and waters crystal clear. Excellent resorts and well-organized tours. Perfect tropical escape. Coming back next year!',
    date: new Date('2024-01-15')
  },
  {
    name: 'Deepak Malhotra',
    rating: 5,
    location: 'Mumbai',
    comment: 'Best honeymoon destination! Beautiful beaches, romantic resorts, and amazing underwater world. Candlelight dinner on beach unforgettable. Highly recommend for couples!',
    date: new Date('2023-12-22')
  },
  {
    name: 'Ananya Reddy',
    rating: 4,
    location: 'Hyderabad',
    comment: 'Amazing Andaman experience! Water was so clear, snorkeling fantastic. Cellular Jail moving. Only issue was ferry delays. Otherwise perfect beach vacation!',
    date: new Date('2023-11-18')
  }
];

async function migrateAndamanData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'andaman' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'andaman' }, andamanData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(andamanData);
    }
    console.log('✅ Andaman destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(andamanFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(andamanPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(andamanReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateAndamanData();
