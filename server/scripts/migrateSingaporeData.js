import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const singaporeData = {
  destinationName: 'Singapore',
  slug: 'singapore',
  imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Singapore Tour Packages',
    tagline: 'The Lion City Adventure',
    startingPrice: 41999,
    durationRange: '4-6 Days',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Singapore, a vibrant city-state, offers futuristic architecture, world-class attractions, diverse cuisine, shopping paradise, and perfect blend of cultures. Ideal for families and adventure seekers.',
    expandedDescription: 'Singapore, a vibrant city-state, offers futuristic architecture, world-class attractions, diverse cuisine, shopping paradise, and perfect blend of cultures. Ideal for families and adventure seekers.\n\nExperience Gardens by the Bay, Universal Studios, Marina Bay Sands, Sentosa Island, Clarke Quay nightlife, and authentic hawker centers. Explore Little India, Chinatown, and modern Orchard Road.\n\nOur packages include comfortable hotels, attraction passes, guided tours, and local experiences. From theme parks to cultural sites, Singapore promises an unforgettable urban adventure.'
  },
  
  subDestinations: [
    {
      name: 'Marina Bay',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Sentosa Island',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Orchard Road',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
      packagesCount: 14
    },
    {
      name: 'Chinatown',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Little India',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1590868141308-7f2df1bfcbb8?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Clarke Quay',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1543579596-e34e0b8e0d38?w=600&q=80',
      packagesCount: 11
    }
  ],
  
  activities: [
    {
      title: 'Universal Studios',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80',
      location: 'Sentosa Island'
    },
    {
      title: 'Gardens by the Bay',
      image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80',
      location: 'Marina Bay'
    },
    {
      title: 'Night Safari',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80',
      location: 'Singapore Zoo'
    },
    {
      title: 'Marina Bay Sands',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80',
      location: 'Marina Bay'
    }
  ],
  
  groupTours: [
    {
      name: 'Singapore Highlights',
      date: 'March 18, 2026',
      totalSeats: 12,
      bookedSeats: 8,
      price: '₹41,999',
      duration: '5 Days',
      highlights: ['Universal Studios', 'Gardens by Bay', 'Sentosa']
    },
    {
      name: 'Family Fun Singapore',
      date: 'May 25, 2026',
      totalSeats: 15,
      bookedSeats: 10,
      price: '₹48,999',
      duration: '6 Days',
      highlights: ['Theme Parks', 'Zoo', 'Aquarium', 'Night Safari']
    },
    {
      name: 'Singapore Stopover',
      date: 'July 5, 2026',
      totalSeats: 10,
      bookedSeats: 5,
      price: '₹35,999',
      duration: '4 Days',
      highlights: ['City Tour', 'Marina Bay', 'Shopping']
    },
    {
      name: 'Complete Singapore',
      date: 'September 15, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹52,999',
      duration: '6 Days',
      highlights: ['All Attractions', 'Cultural Tours', 'Shopping']
    }
  ]
};

const singaporePackages = [
  {
    name: 'Singapore Essentials',
    slug: 'singapore-essentials',
    originalPrice: 48999,
    discountedPrice: 41999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Singapore'],
    rating: 4.7,
    reviewCount: 520,
    highlights: [
      'Universal Studios Entry',
      'Gardens by the Bay',
      'Night Safari Tour',
      'Marina Bay Sands Visit',
      'Sentosa Island Trip',
      '4 Nights Hotel'
    ],
    hotelsIncluded: [
      { city: 'Singapore', nights: '4', name: '4-Star Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'Universal Studios',
        'Night Safari',
        'City Tour'
      ],
      excluded: [
        'Lunch & Dinner',
        'Travel Insurance',
        'Additional Attractions',
        'Shopping Expenses',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
    ]
  },
  {
    name: 'Singapore Family Package',
    slug: 'singapore-family-package',
    originalPrice: 58999,
    discountedPrice: 49999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Singapore', 'Sentosa'],
    rating: 4.8,
    reviewCount: 445,
    highlights: [
      'Universal Studios',
      'SEA Aquarium',
      'Adventure Cove Waterpark',
      'Singapore Zoo & Night Safari',
      'River Safari',
      'Family-Friendly Hotel'
    ],
    hotelsIncluded: [
      { city: 'Singapore', nights: '5', name: 'Family Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Hotel',
        'Daily Breakfast',
        'All Transfers',
        'All Theme Park Tickets',
        'Zoo Tickets',
        'Sentosa Island Tour'
      ],
      excluded: [
        'Lunch & Dinner',
        'Travel Insurance',
        'Optional Activities',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80'
    ]
  },
  {
    name: 'Singapore Stopover Special',
    slug: 'singapore-stopover-special',
    originalPrice: 42999,
    discountedPrice: 35999,
    noOfDays: 4,
    noOfNights: 3,
    locations: ['Singapore'],
    rating: 4.6,
    reviewCount: 380,
    highlights: [
      'City Highlights Tour',
      'Marina Bay Area',
      'Gardens by the Bay',
      'Orchard Road Shopping',
      'Hawker Center Experience',
      '3 Nights Central Hotel'
    ],
    hotelsIncluded: [
      { city: 'Singapore', nights: '3', name: 'City Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '3 Nights Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'City Tour',
        'Gardens by Bay',
        'Marina Bay Visit'
      ],
      excluded: [
        'Lunch & Dinner',
        'Theme Park Tickets',
        'Travel Insurance',
        'Shopping Expenses',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
    ]
  },
  {
    name: 'Singapore Luxury Experience',
    slug: 'singapore-luxury-experience',
    originalPrice: 72999,
    discountedPrice: 62999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Singapore'],
    rating: 4.9,
    reviewCount: 310,
    highlights: [
      'Marina Bay Sands Hotel',
      'SkyPark Infinity Pool',
      'Michelin Star Dining',
      'Private City Tour',
      'Luxury Shopping',
      '5 Nights 5-Star Hotel'
    ],
    hotelsIncluded: [
      { city: 'Singapore', nights: '5', name: 'Marina Bay Sands or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Business Class',
        '5 Nights Luxury Hotel',
        'Daily Breakfast & Some Meals',
        'Private Transfers',
        'All Major Attractions',
        'Fine Dining Experience',
        'Shopping Vouchers'
      ],
      excluded: [
        'Some Meals',
        'Travel Insurance',
        'Optional Premium Tours',
        'Spa Services',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'
    ]
  },
  {
    name: 'Singapore Cultural Tour',
    slug: 'singapore-cultural-tour',
    originalPrice: 51999,
    discountedPrice: 44999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Singapore'],
    rating: 4.7,
    reviewCount: 350,
    highlights: [
      'Chinatown Heritage',
      'Little India Walk',
      'Arab Street',
      'Temples & Mosques',
      'Hawker Food Tour',
      'Cultural Performances'
    ],
    hotelsIncluded: [
      { city: 'Singapore', nights: '4', name: 'Boutique Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'Cultural Tours',
        'Food Tours',
        'Heritage Walks'
      ],
      excluded: [
        'Lunch & Dinner (Most)',
        'Travel Insurance',
        'Theme Parks',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1555217851-6141535bd771?w=800&q=80',
      'https://images.unsplash.com/photo-1590868141308-7f2df1bfcbb8?w=800&q=80',
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80'
    ]
  },
  {
    name: 'Complete Singapore Adventure',
    slug: 'complete-singapore-adventure',
    originalPrice: 62999,
    discountedPrice: 54999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Singapore'],
    rating: 4.8,
    reviewCount: 475,
    highlights: [
      'All Major Attractions',
      'Universal Studios & SEA Aquarium',
      'Night Safari & Zoo',
      'Gardens by the Bay',
      'City Tours',
      '5 Nights Premium Hotel'
    ],
    hotelsIncluded: [
      { city: 'Singapore', nights: '5', name: '4-Star Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Hotel',
        'Daily Breakfast',
        'All Transfers',
        'All Major Attractions',
        'Theme Parks',
        'Cultural Tours'
      ],
      excluded: [
        'Lunch & Dinner',
        'Travel Insurance',
        'Optional Activities',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
    ]
  }
];

const singaporeFaqs = [
  {
    question: 'What is the best time to visit Singapore?',
    answer: 'Singapore is a year-round destination with tropical weather. The best time is February to April for less rainfall. July to August is peak tourist season. December to January sees higher rainfall but offers shopping festivals.'
  },
  {
    question: 'Do Indians need a visa for Singapore?',
    answer: 'Yes, Indian passport holders need a visa for Singapore. Apply online for e-visa (2-5 days processing). We assist with visa processing as part of our packages. Visa is valid for 30 days with multiple entries allowed.'
  },
  {
    question: 'What currency is used in Singapore?',
    answer: 'Singapore Dollar (SGD) is the official currency. 1 SGD = approximately ₹60-62. Currency exchange available at airports and authorized money changers. Credit cards are widely accepted everywhere.'
  },
  {
    question: 'Is Singapore expensive for tourists?',
    answer: 'Singapore can be expensive for accommodation and dining, but budget options exist. Hawker centers offer affordable local food. Public transport is cheap and efficient. Our packages provide great value with inclusions.'
  },
  {
    question: 'What are must-visit attractions in Singapore?',
    answer: 'Must-visit places include Universal Studios, Gardens by the Bay, Marina Bay Sands, Night Safari, Sentosa Island, Chinatown, Little India, and Orchard Road. We cover all major attractions in our packages.'
  },
  {
    question: 'Is Singapore safe for tourists?',
    answer: 'Singapore is one of the safest cities in the world with very low crime rates. It has strict laws and is very clean and organized. Public transport is safe at all hours. Perfect for solo travelers and families.'
  }
];

const singaporeReviews = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    location: 'Delhi',
    comment: 'Fantastic Singapore trip! Universal Studios was amazing, Gardens by the Bay breathtaking, and food incredible. Very clean and safe city. Loved every moment!',
    date: new Date('2024-01-20')
  },
  {
    name: 'Meera Patel',
    rating: 5,
    location: 'Mumbai',
    comment: 'Perfect family vacation! Kids loved the theme parks and zoo. Hotels were excellent, and everything was well-organized. Singapore is truly a magical city!',
    date: new Date('2024-01-08')
  },
  {
    name: 'Suresh Reddy',
    rating: 4,
    location: 'Hyderabad',
    comment: 'Great Singapore experience! Efficient public transport, excellent attractions, and diverse food options. Bit expensive but worth every penny. Highly recommend!',
    date: new Date('2023-12-25')
  }
];

async function migrateSingaporeData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'singapore' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'singapore' }, singaporeData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(singaporeData);
    }
    console.log('✅ Singapore destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(singaporeFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(singaporePackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(singaporeReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateSingaporeData();
