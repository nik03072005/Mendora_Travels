import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const bhutanData = {
  destinationName: 'Bhutan',
  slug: 'bhutan',
  imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Bhutan Tour Packages',
    tagline: 'Land of Thunder Dragon',
    startingPrice: 48999,
    durationRange: '5-8 Days',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Bhutan, the Land of Happiness, offers stunning Himalayan landscapes, ancient monasteries, rich Buddhist culture, and pristine nature. Experience peace, spirituality, and natural beauty.',
    expandedDescription: 'Bhutan, the Land of Happiness, offers stunning Himalayan landscapes, ancient monasteries, rich Buddhist culture, and pristine nature. Experience peace, spirituality, and natural beauty.\n\nVisit the iconic Tigers Nest Monastery, explore Punakha Dzong, witness traditional festivals, experience authentic Bhutanese hospitality, and immerse in the only carbon-negative country in the world.\n\nOur packages include comfortable stays, guided tours, cultural experiences, trekking options, and authentic Bhutanese cuisine. From spiritual journeys to adventure treks, Bhutan offers transformative experiences.'
  },
  
  subDestinations: [
    {
      name: 'Paro',
      country: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Thimphu',
      country: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
      packagesCount: 15
    },
    {
      name: 'Punakha',
      country: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Bumthang',
      country: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Phobjikha Valley',
      country: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
      packagesCount: 9
    },
    {
      name: 'Haa Valley',
      country: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 8
    }
  ],
  
  activities: [
    {
      title: 'Tigers Nest Trek',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80',
      location: 'Paro'
    },
    {
      title: 'Dzong Exploration',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
      location: 'Punakha'
    },
    {
      title: 'Cultural Tours',
      image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&q=80',
      location: 'Thimphu'
    },
    {
      title: 'Valley Hikes',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      location: 'Phobjikha'
    }
  ],
  
  groupTours: [
    {
      name: 'Bhutan Explorer',
      date: 'April 10, 2026',
      totalSeats: 10,
      bookedSeats: 6,
      price: '₹48,999',
      duration: '6 Days',
      highlights: ['Tigers Nest', 'Thimphu', 'Punakha']
    },
    {
      name: 'Cultural Bhutan',
      date: 'May 22, 2026',
      totalSeats: 8,
      bookedSeats: 5,
      price: '₹56,999',
      duration: '7 Days',
      highlights: ['Monasteries', 'Festivals', 'Cultural Sites']
    },
    {
      name: 'Bhutan Trekking',
      date: 'September 5, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹62,999',
      duration: '8 Days',
      highlights: ['Mountain Treks', 'Valley Hikes', 'Villages']
    },
    {
      name: 'Complete Bhutan',
      date: 'October 18, 2026',
      totalSeats: 10,
      bookedSeats: 4,
      price: '₹68,999',
      duration: '9 Days',
      highlights: ['All Major Sites', 'Treks', 'Cultural Immersion']
    }
  ]
};

const bhutanPackages = [
  {
    name: 'Bhutan Highlights Tour',
    slug: 'bhutan-highlights-tour',
    originalPrice: 57999,
    discountedPrice: 48999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Paro', 'Thimphu', 'Punakha'],
    rating: 4.9,
    reviewCount: 285,
    highlights: [
      'Tigers Nest Monastery Trek',
      'Punakha Dzong Visit',
      'Buddha Dordenma Statue',
      'Memorial Chorten',
      'Traditional Hot Stone Bath',
      '5 Nights Premium Hotels'
    ],
    hotelsIncluded: [
      { city: 'Paro', nights: '2', name: 'Hotel or Similar' },
      { city: 'Thimphu', nights: '2', name: 'Hotel or Similar' },
      { city: 'Punakha', nights: '1', name: 'Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Accommodation',
        'All Meals (Breakfast, Lunch, Dinner)',
        'Airport Transfers',
        'All Sightseeing Tours',
        'English Speaking Guide',
        'SDF & Visa Fees'
      ],
      excluded: [
        'Travel Insurance',
        'Personal Expenses',
        'Tips & Gratuities',
        'Alcoholic Beverages',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80'
    ]
  },
  {
    name: 'Bhutan Cultural Journey',
    slug: 'bhutan-cultural-journey',
    originalPrice: 66999,
    discountedPrice: 56999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Paro', 'Thimphu', 'Punakha', 'Phobjikha'],
    rating: 4.8,
    reviewCount: 240,
    highlights: [
      'Monastery Tours',
      'Traditional Farmhouse Visit',
      'Archery Experience',
      'Textile Museum',
      'Folk Heritage Museum',
      'Cultural Performances'
    ],
    hotelsIncluded: [
      { city: 'Paro', nights: '2', name: 'Hotel' },
      { city: 'Thimphu', nights: '2', name: 'Hotel' },
      { city: 'Punakha', nights: '1', name: 'Hotel' },
      { city: 'Phobjikha', nights: '1', name: 'Lodge' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Hotels',
        'All Meals',
        'All Transfers',
        'Cultural Tours',
        'Guide Services',
        'SDF & Visa'
      ],
      excluded: [
        'Travel Insurance',
        'Personal Expenses',
        'Tips',
        'Drinks',
        'Optional Tours'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80'
    ]
  },
  {
    name: 'Bhutan Trekking Adventure',
    slug: 'bhutan-trekking-adventure',
    originalPrice: 72999,
    discountedPrice: 62999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Paro', 'Thimphu', 'Punakha', 'Bumthang'],
    rating: 4.7,
    reviewCount: 210,
    highlights: [
      'Tigers Nest Trek',
      'Druk Path Trek',
      'Mountain Passes',
      'Alpine Lakes',
      'Remote Villages',
      'Camping Experience'
    ],
    hotelsIncluded: [
      { city: 'Paro', nights: '2', name: 'Hotel' },
      { city: 'Trek', nights: '3', name: 'Camping' },
      { city: 'Thimphu', nights: '2', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '7 Nights Accommodation',
        'All Meals',
        'Trekking Equipment',
        'Guide & Porter',
        'Camping Gear',
        'SDF & Visa'
      ],
      excluded: [
        'Travel Insurance',
        'Personal Gear',
        'Tips',
        'Extra Meals',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80'
    ]
  },
  {
    name: 'Bhutan Festival Tour',
    slug: 'bhutan-festival-tour',
    originalPrice: 69999,
    discountedPrice: 59999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Paro', 'Thimphu', 'Punakha'],
    rating: 4.9,
    reviewCount: 195,
    highlights: [
      'Paro Tsechu Festival',
      'Traditional Mask Dances',
      'Religious Ceremonies',
      'Local Interactions',
      'Cultural Immersion',
      'Festival Photography'
    ],
    hotelsIncluded: [
      { city: 'Paro', nights: '3', name: 'Hotel' },
      { city: 'Thimphu', nights: '2', name: 'Hotel' },
      { city: 'Punakha', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Hotels',
        'All Meals',
        'Festival Tickets',
        'All Tours',
        'Guide Services',
        'SDF & Visa'
      ],
      excluded: [
        'Travel Insurance',
        'Personal Expenses',
        'Tips',
        'Alcoholic Drinks',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80'
    ]
  },
  {
    name: 'Eastern Bhutan Explorer',
    slug: 'eastern-bhutan-explorer',
    originalPrice: 74999,
    discountedPrice: 64999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Paro', 'Thimphu', 'Bumthang', 'Trashigang'],
    rating: 4.6,
    reviewCount: 175,
    highlights: [
      'Off-Beat Destinations',
      'Bumthang Valleys',
      'Ancient Temples',
      'Traditional Villages',
      'Handicraft Centers',
      'Remote Monasteries'
    ],
    hotelsIncluded: [
      { city: 'Paro', nights: '2', name: 'Hotel' },
      { city: 'Thimphu', nights: '1', name: 'Hotel' },
      { city: 'Bumthang', nights: '2', name: 'Lodge' },
      { city: 'Trashigang', nights: '2', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '7 Nights Accommodation',
        'All Meals',
        'Domestic Flights',
        'All Transfers',
        'Sightseeing Tours',
        'SDF & Visa'
      ],
      excluded: [
        'Travel Insurance',
        'Personal Expenses',
        'Tips & Gratuities',
        'Drinks',
        'Optional Tours'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'
    ]
  },
  {
    name: 'Complete Bhutan Experience',
    slug: 'complete-bhutan-experience',
    originalPrice: 79999,
    discountedPrice: 69999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Paro', 'Thimphu', 'Punakha', 'Phobjikha', 'Bumthang'],
    rating: 4.8,
    reviewCount: 220,
    highlights: [
      'Comprehensive Tour',
      'All Major Valleys',
      'Tigers Nest Trek',
      'Cultural Sites',
      'Nature Experiences',
      '8 Nights Premium Stay'
    ],
    hotelsIncluded: [
      { city: 'Paro', nights: '2', name: 'Hotel' },
      { city: 'Thimphu', nights: '2', name: 'Hotel' },
      { city: 'Punakha', nights: '1', name: 'Hotel' },
      { city: 'Phobjikha', nights: '1', name: 'Lodge' },
      { city: 'Bumthang', nights: '2', name: 'Lodge' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '8 Nights Hotels',
        'All Meals',
        'All Transfers',
        'All Sightseeing',
        'Guide Services',
        'SDF & Visa'
      ],
      excluded: [
        'Travel Insurance',
        'Personal Expenses',
        'Tips',
        'Alcoholic Beverages',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80'
    ]
  }
];

const bhutanFaqs = [
  {
    question: 'What is the best time to visit Bhutan?',
    answer: 'The best time to visit Bhutan is during spring (March-May) and autumn (September-November). Spring offers blooming rhododendrons and clear views. Autumn features festival season and perfect weather for trekking.'
  },
  {
    question: 'Do Indians need a visa for Bhutan?',
    answer: 'Indian passport holders do not need a visa for Bhutan but need an entry permit which can be obtained at the border. We arrange all necessary permits as part of our packages. Valid passport or voter ID is required.'
  },
  {
    question: 'What is the Sustainable Development Fee (SDF)?',
    answer: 'Indian tourists pay a reduced SDF of ₹1,200 per person per night. This fee supports Bhutan\'s sustainable tourism policy. It includes accommodation, meals, guide services, and internal transport. Our packages include this fee.'
  },
  {
    question: 'Is Bhutan expensive to visit?',
    answer: 'Bhutan follows a high-value, low-volume tourism policy. While the daily tariff may seem high, it includes accommodation, meals, guide, and transport. This ensures quality experiences while preserving culture and environment.'
  },
  {
    question: 'What should I pack for Bhutan?',
    answer: 'Pack layered clothing as temperatures vary. Comfortable walking shoes for monastery visits and treks. Bring warm clothes even in summer for higher altitudes. Modest dress is appreciated at religious sites. Don\'t forget sunscreen and camera!'
  },
  {
    question: 'Can vegetarians find food in Bhutan?',
    answer: 'Yes, Bhutanese cuisine includes many vegetarian options. Rice, vegetables, cheese, and lentils are staples. Hotels and restaurants cater to Indian dietary preferences. However, expect simple meals in remote areas.'
  }
];

const bhutanReviews = [
  {
    name: 'Sandeep Sharma',
    rating: 5,
    location: 'Delhi',
    comment: 'Magical Bhutan experience! Tigers Nest trek was challenging but rewarding. Peaceful monasteries, stunning valleys, and warm people. A truly spiritual journey!',
    date: new Date('2024-01-15')
  },
  {
    name: 'Meera Iyer',
    rating: 5,
    location: 'Bangalore',
    comment: 'Perfect Bhutan tour! Everything was well-organized. Beautiful landscapes, rich culture, and excellent guides. The happiness philosophy is truly felt everywhere!',
    date: new Date('2024-01-05')
  },
  {
    name: 'Rahul Khanna',
    rating: 4,
    location: 'Mumbai',
    comment: 'Wonderful Bhutan trip! Punakha Dzong and Paro valley were highlights. Great hotels and authentic Bhutanese food. A refreshing escape from city life!',
    date: new Date('2023-12-20')
  }
];

async function migrateBhutanData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'bhutan' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'bhutan' }, bhutanData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(bhutanData);
    }
    console.log('✅ Bhutan destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(bhutanFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(bhutanPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(bhutanReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateBhutanData();
