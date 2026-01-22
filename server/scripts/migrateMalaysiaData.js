import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const malaysiaData = {
  destinationName: 'Malaysia',
  slug: 'malaysia',
  imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Malaysia Tour Packages',
    tagline: 'Truly Asia Experience',
    startingPrice: 36999,
    durationRange: '5-8 Days',
    heroImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Malaysia offers vibrant cities, beautiful islands, rainforests, cultural diversity, and modern infrastructure. Experience Kuala Lumpur, Langkawi, Penang, and Cameron Highlands.',
    expandedDescription: 'Malaysia offers vibrant cities, beautiful islands, rainforests, cultural diversity, and modern infrastructure. Experience Kuala Lumpur, Langkawi, Penang, and Cameron Highlands.\n\nDiscover the iconic Petronas Towers, explore bustling street markets, relax on pristine beaches of Langkawi, taste diverse cuisine from Malay, Chinese, and Indian influences, and experience warm hospitality.\n\nOur packages include comfortable stays, guided tours, island hopping, cultural experiences, and adventure activities. From city exploration to beach relaxation, Malaysia offers diverse experiences for all travelers.'
  },
  
  subDestinations: [
    {
      name: 'Kuala Lumpur',
      country: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Langkawi',
      country: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80',
      packagesCount: 15
    },
    {
      name: 'Penang',
      country: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Genting Highlands',
      country: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
      packagesCount: 11
    },
    {
      name: 'Cameron Highlands',
      country: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Malacca',
      country: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600&q=80',
      packagesCount: 9
    }
  ],
  
  activities: [
    {
      title: 'Petronas Towers Visit',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
      location: 'Kuala Lumpur'
    },
    {
      title: 'Island Hopping',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80',
      location: 'Langkawi'
    },
    {
      title: 'Batu Caves',
      image: 'https://images.unsplash.com/photo-1552055568-3a9b4e0d6a25?w=600&q=80',
      location: 'Selangor'
    },
    {
      title: 'Tea Plantation Tour',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
      location: 'Cameron Highlands'
    }
  ],
  
  groupTours: [
    {
      name: 'Malaysia Explorer',
      date: 'April 5, 2026',
      totalSeats: 14,
      bookedSeats: 9,
      price: '₹36,999',
      duration: '6 Days',
      highlights: ['KL City', 'Genting', 'Langkawi']
    },
    {
      name: 'KL Langkawi Combo',
      date: 'June 12, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹44,999',
      duration: '7 Days',
      highlights: ['City Tour', 'Beach Resort', 'Island Tours']
    },
    {
      name: 'Malaysia Heritage',
      date: 'August 8, 2026',
      totalSeats: 10,
      bookedSeats: 5,
      price: '₹39,999',
      duration: '6 Days',
      highlights: ['Penang', 'Malacca', 'KL', 'Cultural Sites']
    },
    {
      name: 'Complete Malaysia',
      date: 'October 20, 2026',
      totalSeats: 15,
      bookedSeats: 8,
      price: '₹49,999',
      duration: '8 Days',
      highlights: ['All Major Cities', 'Islands', 'Highlands']
    }
  ]
};

const malaysiaPackages = [
  {
    name: 'Kuala Lumpur Genting Escape',
    slug: 'kuala-lumpur-genting-escape',
    originalPrice: 43999,
    discountedPrice: 36999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Kuala Lumpur', 'Genting Highlands'],
    rating: 4.6,
    reviewCount: 440,
    highlights: [
      'Petronas Twin Towers',
      'Batu Caves Visit',
      'Genting Highlands',
      'KL City Tour',
      'Shopping at Bukit Bintang',
      '4 Nights Hotel'
    ],
    hotelsIncluded: [
      { city: 'Kuala Lumpur', nights: '3', name: 'City Hotel or Similar' },
      { city: 'Genting', nights: '1', name: 'Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Accommodation',
        'Daily Breakfast',
        'Airport Transfers',
        'KL City Tour',
        'Genting Cable Car',
        'Batu Caves Entry'
      ],
      excluded: [
        'Lunch & Dinner',
        'Malaysia Visa',
        'Travel Insurance',
        'Theme Park Tickets',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1552055568-3a9b4e0d6a25?w=800&q=80'
    ]
  },
  {
    name: 'Langkawi Beach Paradise',
    slug: 'langkawi-beach-paradise',
    originalPrice: 52999,
    discountedPrice: 44999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Kuala Lumpur', 'Langkawi'],
    rating: 4.8,
    reviewCount: 385,
    highlights: [
      'Beach Resort Stay',
      'Island Hopping Tour',
      'Cable Car & Sky Bridge',
      'Underwater World',
      'Mangrove Tour',
      '5 Nights Premium Hotels'
    ],
    hotelsIncluded: [
      { city: 'Kuala Lumpur', nights: '2', name: 'City Hotel' },
      { city: 'Langkawi', nights: '3', name: 'Beach Resort' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Hotels',
        'Daily Breakfast',
        'Domestic Flight KL-Langkawi',
        'Island Hopping',
        'Cable Car Tickets',
        'City & Island Tours'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Water Sports',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80'
    ]
  },
  {
    name: 'Malaysia Heritage Tour',
    slug: 'malaysia-heritage-tour',
    originalPrice: 48999,
    discountedPrice: 41999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Kuala Lumpur', 'Malacca', 'Penang'],
    rating: 4.7,
    reviewCount: 320,
    highlights: [
      'UNESCO Heritage Sites',
      'Penang Street Food',
      'Malacca Dutch Square',
      'Cultural Temples',
      'Historical Sites',
      'Multi-City Tour'
    ],
    hotelsIncluded: [
      { city: 'Kuala Lumpur', nights: '2', name: 'Hotel' },
      { city: 'Malacca', nights: '1', name: 'Heritage Hotel' },
      { city: 'Penang', nights: '2', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Hotels',
        'Daily Breakfast',
        'All Transfers',
        'City Tours',
        'Heritage Site Tickets',
        'Cultural Experiences'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      'https://images.unsplash.com/photo-1555217851-6141535bd771?w=800&q=80',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80'
    ]
  },
  {
    name: 'Cameron Highlands Retreat',
    slug: 'cameron-highlands-retreat',
    originalPrice: 45999,
    discountedPrice: 38999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Kuala Lumpur', 'Cameron Highlands'],
    rating: 4.6,
    reviewCount: 295,
    highlights: [
      'Tea Plantation Visit',
      'Strawberry Farms',
      'Mossy Forest Trek',
      'Butterfly Farm',
      'Rose Garden',
      'Hill Station Experience'
    ],
    hotelsIncluded: [
      { city: 'Kuala Lumpur', nights: '2', name: 'City Hotel' },
      { city: 'Cameron Highlands', nights: '2', name: 'Hill Resort' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Hotels',
        'Daily Breakfast',
        'All Transfers',
        'Plantation Tours',
        'Nature Walks',
        'City Tour KL'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
      'https://images.unsplash.com/photo-1552055568-3a9b4e0d6a25?w=800&q=80'
    ]
  },
  {
    name: 'Malaysia Family Package',
    slug: 'malaysia-family-package',
    originalPrice: 55999,
    discountedPrice: 47999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Kuala Lumpur', 'Genting', 'Langkawi'],
    rating: 4.8,
    reviewCount: 410,
    highlights: [
      'Theme Parks',
      'Beach Activities',
      'Cable Car Rides',
      'Aquarium Visit',
      'City Tours',
      'Family-Friendly Hotels'
    ],
    hotelsIncluded: [
      { city: 'Kuala Lumpur', nights: '2', name: 'Family Hotel' },
      { city: 'Genting', nights: '2', name: 'Resort' },
      { city: 'Langkawi', nights: '2', name: 'Beach Resort' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Hotels',
        'Daily Breakfast',
        'Domestic Flight',
        'All Transfers',
        'Theme Park Tickets',
        'Sightseeing Tours'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Water Sports',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80'
    ]
  },
  {
    name: 'Complete Malaysia Tour',
    slug: 'complete-malaysia-tour',
    originalPrice: 59999,
    discountedPrice: 51999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['KL', 'Genting', 'Cameron', 'Langkawi'],
    rating: 4.7,
    reviewCount: 365,
    highlights: [
      'Multi-City Experience',
      'City & Beach',
      'Highlands & Islands',
      'All Major Attractions',
      'Cultural Sites',
      '7 Nights Various Hotels'
    ],
    hotelsIncluded: [
      { city: 'Kuala Lumpur', nights: '2', name: 'City Hotel' },
      { city: 'Genting', nights: '1', name: 'Resort' },
      { city: 'Cameron', nights: '1', name: 'Hill Resort' },
      { city: 'Langkawi', nights: '3', name: 'Beach Resort' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '7 Nights Hotels',
        'Daily Breakfast',
        'Domestic Flights',
        'All Transfers',
        'All Major Tours',
        'Sightseeing'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80'
    ]
  }
];

const malaysiaFaqs = [
  {
    question: 'What is the best time to visit Malaysia?',
    answer: 'Malaysia is a year-round destination. The best time for West Coast (KL, Langkawi, Penang) is December to February. For East Coast, visit March to September. Avoid monsoon seasons for specific regions.'
  },
  {
    question: 'Do Indians need a visa for Malaysia?',
    answer: 'Indian passport holders can get visa on arrival for tourism purposes for up to 15 days. Alternatively, apply for e-Visa online for 30 days stay. We assist with visa processing in our packages.'
  },
  {
    question: 'What currency is used in Malaysia?',
    answer: 'Malaysian Ringgit (MYR) is the official currency. 1 MYR = approximately ₹18-20. Currency exchange available at airports, banks, and money changers. Cards widely accepted in cities.'
  },
  {
    question: 'Is Malaysia budget-friendly for tourists?',
    answer: 'Yes, Malaysia is relatively affordable compared to Singapore. Accommodation, food, and transport are reasonably priced. Street food and hawker centers offer delicious meals at low prices. Our packages provide excellent value.'
  },
  {
    question: 'Can vegetarians find food in Malaysia?',
    answer: 'Absolutely! Malaysia has excellent vegetarian options due to large Indian and Chinese communities. Indian restaurants are abundant. Most places offer vegetarian versions of local dishes. Penang is especially food-friendly.'
  },
  {
    question: 'What are must-visit places in Malaysia?',
    answer: 'Must-visit places include Petronas Towers (KL), Batu Caves, Langkawi islands, Penang street food, Genting Highlands, Cameron Highlands tea plantations, and Malacca heritage sites. Our packages cover all major destinations.'
  }
];

const malaysiaReviews = [
  {
    name: 'Amit Verma',
    rating: 5,
    location: 'Pune',
    comment: 'Wonderful Malaysia trip! Petronas Towers were stunning, Langkawi beaches beautiful, and food amazing. Great mix of city and beach. Highly recommended!',
    date: new Date('2024-01-18')
  },
  {
    name: 'Pooja Singh',
    rating: 4,
    location: 'Jaipur',
    comment: 'Great family vacation! Kids loved Genting theme parks. KL was modern and clean. Cameron Highlands tea gardens were beautiful. Excellent value for money!',
    date: new Date('2024-01-05')
  },
  {
    name: 'Ravi Kumar',
    rating: 5,
    location: 'Chennai',
    comment: 'Perfect Malaysia experience! Diverse culture, excellent infrastructure, and friendly people. Loved the food variety. Will definitely visit again!',
    date: new Date('2023-12-20')
  }
];

async function migrateMalaysiaData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'malaysia' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'malaysia' }, malaysiaData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(malaysiaData);
    }
    console.log('✅ Malaysia destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(malaysiaFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(malaysiaPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(malaysiaReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateMalaysiaData();
