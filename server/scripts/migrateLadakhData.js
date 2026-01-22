import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const ladakhData = {
  destinationName: 'Ladakh',
  slug: 'ladakh',
  imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Ladakh Tour Packages',
    tagline: 'Land of High Passes',
    startingPrice: 19999,
    durationRange: '5-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Ladakh, the Land of High Passes, offers breathtaking Himalayan landscapes, pristine lakes, ancient monasteries, high-altitude passes, and unique Tibetan Buddhist culture.',
    expandedDescription: 'Ladakh, the Land of High Passes, offers breathtaking Himalayan landscapes, pristine lakes, ancient monasteries, high-altitude passes, and unique Tibetan Buddhist culture.\n\nExplore the stunning Pangong Lake, Nubra Valley\'s sand dunes, Khardung La pass, ancient monasteries like Hemis and Thiksey, and experience the warm Ladakhi hospitality.\n\nOur packages include comfortable accommodations, acclimatization time, oxygen support, experienced drivers, and authentic Ladakhi experiences. From adventure biking to peaceful monastery visits, Ladakh offers unforgettable journeys.'
  },
  
  subDestinations: [
    {
      name: 'Leh',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      packagesCount: 28
    },
    {
      name: 'Pangong Lake',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 24
    },
    {
      name: 'Nubra Valley',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      packagesCount: 22
    },
    {
      name: 'Tso Moriri',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Khardung La',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      packagesCount: 20
    },
    {
      name: 'Diskit Monastery',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 16
    }
  ],
  
  activities: [
    {
      title: 'Khardung La Pass',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      location: 'Highest Motorable Road'
    },
    {
      title: 'Pangong Lake',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      location: 'Scenic Lake Drive'
    },
    {
      title: 'Monastery Visits',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      location: 'Hemis & Thiksey'
    },
    {
      title: 'Camel Safari',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      location: 'Nubra Valley'
    }
  ],
  
  groupTours: [
    {
      name: 'Leh Ladakh Circuit',
      date: 'May 15, 2026',
      totalSeats: 15,
      bookedSeats: 11,
      price: '₹19,999',
      duration: '7 Days',
      highlights: ['Leh', 'Pangong', 'Nubra Valley']
    },
    {
      name: 'Bike Tour Expedition',
      date: 'June 20, 2026',
      totalSeats: 12,
      bookedSeats: 9,
      price: '₹32,999',
      duration: '9 Days',
      highlights: ['Manali-Leh Highway', 'High Passes', 'Lakes']
    },
    {
      name: 'Monastery Circuit',
      date: 'July 10, 2026',
      totalSeats: 18,
      bookedSeats: 14,
      price: '₹24,999',
      duration: '6 Days',
      highlights: ['Ancient Monasteries', 'Cultural Tour']
    },
    {
      name: 'Complete Ladakh',
      date: 'August 5, 2026',
      totalSeats: 16,
      bookedSeats: 12,
      price: '₹34,999',
      duration: '9 Days',
      highlights: ['All Lakes', 'Valleys', 'Passes', 'Monasteries']
    }
  ]
};

const ladakhPackages = [
  {
    name: 'Leh Pangong Nubra Package',
    slug: 'leh-pangong-nubra-package',
    originalPrice: 24999,
    discountedPrice: 19999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Leh', 'Pangong Lake', 'Nubra Valley'],
    rating: 4.8,
    reviewCount: 540,
    highlights: [
      'Leh City & Monasteries',
      'Pangong Lake Overnight Stay',
      'Nubra Valley Sand Dunes',
      'Khardung La Pass',
      'Double Hump Camel Ride',
      'Acclimatization Support'
    ],
    hotelsIncluded: [
      { city: 'Leh', nights: '3', name: 'Hotel with Oxygen' },
      { city: 'Pangong', nights: '1', name: 'Camp' },
      { city: 'Nubra', nights: '2', name: 'Camp/Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel & Camp Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Inner Line Permits',
        'Sightseeing Tours',
        'Oxygen Support',
        'Experienced Driver'
      ],
      excluded: [
        'Flight to/from Leh',
        'Lunch',
        'Travel Insurance',
        'Personal Expenses',
        'Camera Fees',
        'Emergency Evacuation'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Ladakh Adventure Trek',
    slug: 'ladakh-adventure-trek',
    originalPrice: 28999,
    discountedPrice: 24999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Leh', 'Markha Valley', 'Stok Kangri Base'],
    rating: 4.7,
    reviewCount: 385,
    highlights: [
      'Markha Valley Trek',
      'High Altitude Camping',
      'Mountain Views',
      'Local Villages',
      'Monastery Visits',
      'Trekking Support'
    ],
    hotelsIncluded: [
      { city: 'Leh', nights: '3', name: 'Hotel' },
      { city: 'Camps', nights: '4', name: 'Trekking Camps' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'All Meals During Trek',
        'Trekking Equipment',
        'Guide & Support Staff',
        'Permits',
        'Camping Gear',
        'First Aid'
      ],
      excluded: [
        'Flight to/from Leh',
        'Personal Trekking Gear',
        'Travel Insurance',
        'Porter for Personal Bags',
        'Medical Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Monastery & Culture Tour',
    slug: 'monastery-culture-tour',
    originalPrice: 21999,
    discountedPrice: 17999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Leh', 'Alchi', 'Likir', 'Thiksey', 'Hemis'],
    rating: 4.6,
    reviewCount: 310,
    highlights: [
      'Ancient Monasteries',
      'Buddhist Culture',
      'Prayer Wheels & Flags',
      'Local Interactions',
      'Himalayan Views',
      'Cultural Experiences'
    ],
    hotelsIncluded: [
      { city: 'Leh', nights: '5', name: 'Heritage Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'All Monastery Tours',
        'Entry Fees',
        'Cultural Guide',
        'All Transfers',
        'Permits'
      ],
      excluded: [
        'Flight to/from Leh',
        'Lunch & Dinner',
        'Travel Insurance',
        'Personal Expenses',
        'Photography Fees'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ]
  },
  {
    name: 'Tso Moriri Lake Expedition',
    slug: 'tso-moriri-lake-expedition',
    originalPrice: 26999,
    discountedPrice: 22999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Leh', 'Tso Kar', 'Tso Moriri', 'Hanle'],
    rating: 4.9,
    reviewCount: 420,
    highlights: [
      'Off-beat Lakes',
      'Wildlife Spotting',
      'Nomadic Culture',
      'Stargazing at Hanle',
      'Remote Villages',
      'Pristine Nature'
    ],
    hotelsIncluded: [
      { city: 'Leh', nights: '2', name: 'Hotel' },
      { city: 'Tso Moriri', nights: '2', name: 'Camp' },
      { city: 'Hanle', nights: '1', name: 'Homestay' },
      { city: 'Leh', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'All Meals',
        'All Transfers',
        'Permits',
        'Sightseeing',
        'Oxygen Support',
        'Guide'
      ],
      excluded: [
        'Flight to/from Leh',
        'Travel Insurance',
        'Personal Expenses',
        'Medical Evacuation',
        'Camera Fees'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ]
  },
  {
    name: 'Manali Leh Bike Expedition',
    slug: 'manali-leh-bike-expedition',
    originalPrice: 38999,
    discountedPrice: 34999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Manali', 'Jispa', 'Sarchu', 'Leh', 'Pangong', 'Nubra'],
    rating: 4.9,
    reviewCount: 580,
    highlights: [
      'Manali-Leh Highway',
      'High Mountain Passes',
      'Rohtang & Tanglang La',
      'Scenic Landscapes',
      'Adventure Biking',
      'Support Vehicle'
    ],
    hotelsIncluded: [
      { city: 'Manali', nights: '1', name: 'Hotel' },
      { city: 'Jispa', nights: '1', name: 'Camp' },
      { city: 'Sarchu', nights: '1', name: 'Camp' },
      { city: 'Leh', nights: '2', name: 'Hotel' },
      { city: 'Nubra', nights: '1', name: 'Camp' },
      { city: 'Pangong', nights: '1', name: 'Camp' },
      { city: 'Leh', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Royal Enfield 350/500',
        'Accommodation',
        'All Meals',
        'Support Vehicle',
        'Permits',
        'Mechanic Support',
        'Fuel',
        'First Aid'
      ],
      excluded: [
        'Transport to Manali',
        'Return from Leh',
        'Travel Insurance',
        'Personal Riding Gear',
        'Bike Damage',
        'Medical Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  },
  {
    name: 'Complete Ladakh Circuit',
    slug: 'complete-ladakh-circuit',
    originalPrice: 32999,
    discountedPrice: 28999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Leh', 'Nubra', 'Pangong', 'Tso Moriri', 'Monasteries'],
    rating: 4.8,
    reviewCount: 600,
    highlights: [
      'All Major Lakes',
      'Nubra Valley',
      'High Passes',
      'Monasteries',
      'Cultural Experiences',
      '8 Nights Complete Tour'
    ],
    hotelsIncluded: [
      { city: 'Leh', nights: '3', name: 'Hotel' },
      { city: 'Nubra', nights: '2', name: 'Camp' },
      { city: 'Pangong', nights: '1', name: 'Camp' },
      { city: 'Tso Moriri', nights: '1', name: 'Camp' },
      { city: 'Leh', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        '8 Nights Accommodation',
        'All Meals',
        'All Transfers',
        'All Permits',
        'Sightseeing',
        'Oxygen Support',
        'Experienced Driver'
      ],
      excluded: [
        'Flight to/from Leh',
        'Travel Insurance',
        'Personal Expenses',
        'Camera Fees',
        'Emergency Medical'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    ]
  }
];

const ladakhFaqs = [
  {
    question: 'What is the best time to visit Ladakh?',
    answer: 'Best time is May to September when roads are open. June-July is peak season with pleasant weather (15-25°C). September offers clear skies and fewer tourists. Manali-Leh highway opens around June. Winter (Oct-April) is extremely cold with many roads closed.'
  },
  {
    question: 'How to deal with altitude sickness in Ladakh?',
    answer: 'Acclimatize properly - spend 2 days in Leh before high-altitude trips. Drink lots of water, avoid alcohol initially, take it easy first few days. Carry Diamox tablets. Hotels provide oxygen cylinders. Consult doctor before traveling if you have heart/lung conditions.'
  },
  {
    question: 'What permits are required for Ladakh?',
    answer: 'Indian citizens need Inner Line Permits for Pangong, Nubra Valley, Tso Moriri, and border areas. Permits can be obtained online or through travel agents. Foreign tourists need Protected Area Permits. Aadhaar card required. Permits are free but mandatory.'
  },
  {
    question: 'What should I pack for Ladakh trip?',
    answer: 'Pack warm clothes even in summer - jackets, thermals, gloves. Sunscreen (high SPF), sunglasses, lip balm essential. Good trekking shoes, medicines (altitude sickness, basic first aid). Power bank, torch. Water bottles. Carry cash as ATMs limited in remote areas.'
  },
  {
    question: 'How to reach Ladakh?',
    answer: 'By Air: Direct flights to Leh from Delhi, Mumbai, Srinagar. By Road: Manali-Leh highway (479 km, 2 days) or Srinagar-Leh (434 km, 2 days). Roads open May-September. Manali route more scenic. We recommend flying to avoid altitude sickness on road.'
  },
  {
    question: 'Is mobile network available in Ladakh?',
    answer: 'BSNL and Jio work in Leh city. Airtel and Vodafone have limited coverage. Most remote areas (Pangong, Nubra, Tso Moriri) have no network. Some hotels/camps offer WiFi. Postpaid connections work better. Get BSNL SIM in Leh for better connectivity.'
  }
];

const ladakhReviews = [
  {
    name: 'Vikram Singh',
    rating: 5,
    location: 'Chandigarh',
    comment: 'Mind-blowing Ladakh experience! Pangong Lake was surreal, Nubra Valley stunning, and Khardung La thrilling. Excellent organization, comfortable stays, and helpful guides. Worth every penny!',
    date: new Date('2024-01-20')
  },
  {
    name: 'Sneha Kapoor',
    rating: 5,
    location: 'Pune',
    comment: 'Best trip ever! Landscapes are out of this world. Proper acclimatization time given. Cozy camps, delicious food, and experienced driver. Safety was priority. Highly recommend!',
    date: new Date('2023-09-15')
  },
  {
    name: 'Rahul Verma',
    rating: 4,
    location: 'Kolkata',
    comment: 'Amazing Ladakh adventure! Bike trip on Manali-Leh highway was epic. Challenging but manageable. Support team excellent. Only wish weather had been clearer. Still unforgettable!',
    date: new Date('2023-08-22')
  }
];

async function migrateLadakhData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'ladakh' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'ladakh' }, ladakhData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(ladakhData);
    }
    console.log('✅ Ladakh destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(ladakhFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(ladakhPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(ladakhReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateLadakhData();
