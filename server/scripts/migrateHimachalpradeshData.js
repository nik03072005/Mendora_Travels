import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const himachalpradeshData = {
  destinationName: 'Himachal Pradesh',
  slug: 'himachal-pradesh',
  imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Himachal Pradesh Tour Packages',
    tagline: 'Land of Gods & Mountains',
    startingPrice: 12999,
    durationRange: '5-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Himachal Pradesh offers stunning Himalayan landscapes, hill stations, adventure sports, ancient temples, apple orchards, colonial charm, and warm mountain hospitality.',
    expandedDescription: 'Himachal Pradesh offers stunning Himalayan landscapes, hill stations, adventure sports, ancient temples, apple orchards, colonial charm, and warm mountain hospitality.\n\nExplore Shimla\'s colonial heritage, Manali\'s adventure paradise, Dharamshala\'s Tibetan culture, Dalhousie\'s serenity, Kullu valleys, and experience paragliding, trekking, and skiing.\n\nOur packages include comfortable accommodations, mountain activities, temple visits, local experiences, and authentic Himachali cuisine. From adventure seekers to peace lovers, Himachal offers perfect mountain escapes.'
  },
  
  subDestinations: [
    {
      name: 'Shimla',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      packagesCount: 35
    },
    {
      name: 'Manali',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 38
    },
    {
      name: 'Dharamshala',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      packagesCount: 28
    },
    {
      name: 'Dalhousie',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 24
    },
    {
      name: 'Kasauli',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      packagesCount: 20
    },
    {
      name: 'Kullu',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 26
    }
  ],
  
  activities: [
    {
      title: 'Paragliding',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      location: 'Bir Billing & Solang'
    },
    {
      title: 'River Rafting',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      location: 'Kullu & Manali'
    },
    {
      title: 'Skiing',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      location: 'Solang Valley'
    },
    {
      title: 'Trekking',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      location: 'Multiple Trails'
    }
  ],
  
  groupTours: [
    {
      name: 'Shimla Manali Circuit',
      date: 'March 25, 2026',
      totalSeats: 25,
      bookedSeats: 20,
      price: '₹12,999',
      duration: '6 Days',
      highlights: ['Shimla', 'Manali', 'Solang Valley']
    },
    {
      name: 'Adventure Himachal',
      date: 'May 15, 2026',
      totalSeats: 18,
      bookedSeats: 14,
      price: '₹18,999',
      duration: '7 Days',
      highlights: ['Paragliding', 'Rafting', 'Trekking']
    },
    {
      name: 'Dharamshala McLeodganj',
      date: 'April 20, 2026',
      totalSeats: 20,
      bookedSeats: 15,
      price: '₹15,999',
      duration: '6 Days',
      highlights: ['Tibetan Culture', 'Monasteries']
    },
    {
      name: 'Complete Himachal',
      date: 'June 10, 2026',
      totalSeats: 22,
      bookedSeats: 17,
      price: '₹26,999',
      duration: '9 Days',
      highlights: ['All Major Destinations']
    }
  ]
};

const himachalpradeshPackages = [
  {
    name: 'Shimla Manali Honeymoon',
    slug: 'shimla-manali-honeymoon',
    originalPrice: 16999,
    discountedPrice: 12999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Shimla', 'Kufri', 'Manali', 'Solang Valley'],
    rating: 4.8,
    reviewCount: 640,
    highlights: [
      'Mall Road Shopping',
      'Kufri Adventure',
      'Solang Valley Activities',
      'Hadimba Temple',
      'Vashisht Hot Springs',
      'Apple Orchards'
    ],
    hotelsIncluded: [
      { city: 'Shimla', nights: '2', name: 'Hill Resort' },
      { city: 'Manali', nights: '3', name: 'Valley Resort' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Sightseeing Tours',
        'Kufri Activities',
        'Solang Valley Visit',
        'Guide Services'
      ],
      excluded: [
        'Transport to Shimla',
        'Lunch & Dinner',
        'Adventure Sports',
        'Rohtang Pass Permit',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  },
  {
    name: 'Manali Adventure Package',
    slug: 'manali-adventure-package',
    originalPrice: 22999,
    discountedPrice: 18999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Manali', 'Solang Valley', 'Rohtang Pass', 'Kullu'],
    rating: 4.9,
    reviewCount: 520,
    highlights: [
      'Paragliding Experience',
      'River Rafting',
      'Zorbing',
      'Rohtang Pass Snow',
      'Trekking Trails',
      'Multiple Activities'
    ],
    hotelsIncluded: [
      { city: 'Manali', nights: '5', name: 'Adventure Resort' },
      { city: 'Kullu', nights: '1', name: 'Riverside Camp' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Paragliding Session',
        'River Rafting',
        'Adventure Guide',
        'Safety Equipment'
      ],
      excluded: [
        'Transport to Manali',
        'Lunch',
        'Rohtang Pass Permit',
        'Additional Activities',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Dharamshala McLeodganj Tour',
    slug: 'dharamshala-mcleodganj-tour',
    originalPrice: 19999,
    discountedPrice: 15999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Dharamshala', 'McLeodganj', 'Palampur', 'Kangra'],
    rating: 4.7,
    reviewCount: 480,
    highlights: [
      'Dalai Lama Temple',
      'Tibetan Monasteries',
      'Bhagsu Waterfall',
      'Triund Trek Base',
      'Tea Gardens Palampur',
      'Kangra Fort'
    ],
    hotelsIncluded: [
      { city: 'McLeodganj', nights: '3', name: 'Mountain Hotel' },
      { city: 'Palampur', nights: '2', name: 'Tea Estate Resort' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Monastery Tours',
        'Sightseeing',
        'Cultural Guide',
        'Entry Tickets'
      ],
      excluded: [
        'Transport to Dharamshala',
        'Lunch & Dinner',
        'Triund Trek',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Dalhousie Khajjiar Escape',
    slug: 'dalhousie-khajjiar-escape',
    originalPrice: 18999,
    discountedPrice: 14999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Dalhousie', 'Khajjiar', 'Chamba'],
    rating: 4.6,
    reviewCount: 410,
    highlights: [
      'Khajjiar Mini Switzerland',
      'Colonial Architecture',
      'Kalatop Wildlife',
      'Chamba Temples',
      'Nature Walks',
      'Peaceful Retreat'
    ],
    hotelsIncluded: [
      { city: 'Dalhousie', nights: '3', name: 'Heritage Hotel' },
      { city: 'Khajjiar', nights: '1', name: 'Forest Resort' },
      { city: 'Chamba', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Sightseeing Tours',
        'Wildlife Sanctuary',
        'Entry Fees',
        'Guide'
      ],
      excluded: [
        'Transport to Dalhousie',
        'Lunch & Dinner',
        'Horse Riding',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  },
  {
    name: 'Bir Billing Paragliding Special',
    slug: 'bir-billing-paragliding-special',
    originalPrice: 17999,
    discountedPrice: 14999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Bir', 'Billing', 'Barot'],
    rating: 4.9,
    reviewCount: 440,
    highlights: [
      'World-Class Paragliding',
      'Professional Instructors',
      'Tibetan Colony',
      'Monasteries',
      'Mountain Cafes',
      'Photography Paradise'
    ],
    hotelsIncluded: [
      { city: 'Bir', nights: '4', name: 'Mountain Hostel/Hotel' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'Paragliding Session',
        'Transfers to Billing',
        'Safety Equipment',
        'Certified Pilot',
        'Video Recording'
      ],
      excluded: [
        'Transport to Bir',
        'Lunch & Dinner',
        'Additional Flights',
        'Trekking',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  },
  {
    name: 'Complete Himachal Circuit',
    slug: 'complete-himachal-circuit',
    originalPrice: 30999,
    discountedPrice: 26999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Shimla', 'Manali', 'Dharamshala', 'Dalhousie'],
    rating: 4.8,
    reviewCount: 590,
    highlights: [
      'All Major Hill Stations',
      'Adventure Activities',
      'Cultural Experiences',
      'Colonial Heritage',
      'Monasteries & Temples',
      '8 Nights Complete Tour'
    ],
    hotelsIncluded: [
      { city: 'Shimla', nights: '2', name: 'Hotel' },
      { city: 'Manali', nights: '3', name: 'Resort' },
      { city: 'Dharamshala', nights: '2', name: 'Hotel' },
      { city: 'Dalhousie', nights: '1', name: 'Heritage Hotel' }
    ],
    packageDetails: {
      included: [
        '8 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'All Sightseeing',
        'Adventure Activity',
        'Entry Tickets',
        'Guide Services'
      ],
      excluded: [
        'Transport to Shimla',
        'Lunch & Dinner',
        'Additional Adventures',
        'Rohtang Pass Permit',
        'Travel Insurance',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  }
];

const himachalpradeshFaqs = [
  {
    question: 'What is the best time to visit Himachal Pradesh?',
    answer: 'Best time is March to June (pleasant weather 15-30°C) for sightseeing and adventure sports. September-November offers clear skies and autumn colors. December-February for snow and skiing (very cold, 0-10°C). Monsoon (July-August) brings landslides - avoid. Each season has unique charm!'
  },
  {
    question: 'Which is better - Shimla or Manali?',
    answer: 'Both are unique! Shimla: Colonial charm, Mall Road, families, romantic couples. Manali: Adventure hub, younger crowd, trekking, paragliding, river rafting. Shimla more commercialized. Manali offers raw mountain beauty. Best option: Visit both in one trip! They complement each other perfectly.'
  },
  {
    question: 'Do I need permits for Rohtang Pass?',
    answer: 'Yes, Rohtang Pass requires online permits (NGT permit) to control vehicle pollution. Limited daily permits issued. Book 2-3 days in advance on official website. Cost: ~₹500-1000. Permits checked at checkpoints. Alternative: Visit Solang Valley or Atal Tunnel. Not accessible in winter (Nov-May).'
  },
  {
    question: 'Is Himachal Pradesh safe for tourists?',
    answer: 'Yes, very safe! Locals are friendly and helpful. Low crime rate. However, mountain roads can be challenging - hire experienced drivers. Check weather before travel. Avoid isolated areas at night. Roads may close in heavy snow/rain. Keep emergency contacts. Overall, one of India\'s safest tourist destinations!'
  },
  {
    question: 'What adventure activities are available?',
    answer: 'Plenty! Paragliding (Bir Billing, Solang), River Rafting (Kullu), Skiing (Solang, Kufri), Trekking (multiple trails), Zorbing, Mountain Biking, Rock Climbing, Camping. Summer: Most activities available. Winter: Skiing, snow activities. Bir Billing is world-famous paragliding destination!'
  },
  {
    question: 'What should I pack for Himachal trip?',
    answer: 'Pack layers! Summer: Light clothes + jacket for evenings. Winter: Heavy woolens, thermals, gloves, boots. Essentials: Comfortable shoes, sunscreen (high altitude!), sunglasses, medicines, power bank. Raincoat if monsoon. Valid ID essential. Cash (ATMs limited in remote areas). Camera for stunning views!'
  }
];

const himachalpradeshReviews = [
  {
    name: 'Rohit Sharma',
    rating: 5,
    location: 'Delhi',
    comment: 'Amazing Himachal trip! Shimla was charming, Manali adventurous, and Solang thrilling. Paragliding experience unforgettable. Great hotels, helpful guides, and beautiful mountain views everywhere!',
    date: new Date('2024-01-18')
  },
  {
    name: 'Neha Patel',
    rating: 5,
    location: 'Ahmedabad',
    comment: 'Perfect family vacation! Kids loved snow in Kufri, Mall Road shopping fun, and Hadimba Temple peaceful. Excellent organization and comfortable stay throughout. Highly recommend!',
    date: new Date('2023-12-20')
  },
  {
    name: 'Aditya Kumar',
    rating: 4,
    location: 'Bangalore',
    comment: 'Wonderful Himachal experience! McLeodganj monasteries serene, Dharamshala beautiful, and Bir paragliding epic. Roads challenging but drivers skilled. Wish we had more days!',
    date: new Date('2023-11-25')
  }
];

async function migrateHimachalpradeshData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'himachal-pradesh' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'himachal-pradesh' }, himachalpradeshData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(himachalpradeshData);
    }
    console.log('✅ Himachal Pradesh destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(himachalpradeshFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(himachalpradeshPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(himachalpradeshReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateHimachalpradeshData();
