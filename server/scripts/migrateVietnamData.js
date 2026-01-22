import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const vietnamData = {
  destinationName: 'Vietnam',
  slug: 'vietnam',
  imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Vietnam Tour Packages',
    tagline: 'Timeless Charm of Southeast Asia',
    startingPrice: 38999,
    durationRange: '5-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Vietnam offers a captivating blend of natural beauty, rich history, delicious cuisine, and warm hospitality. From bustling Hanoi to serene Ha Long Bay, experience the best of Southeast Asia.',
    expandedDescription: 'Vietnam offers a captivating blend of natural beauty, rich history, delicious cuisine, and warm hospitality. From bustling Hanoi to serene Ha Long Bay, experience the best of Southeast Asia.\n\nExplore the historic streets of Hanoi, cruise through the limestone karsts of Ha Long Bay, wander ancient Hoi An, discover vibrant Ho Chi Minh City, and venture into the Mekong Delta. Enjoy street food adventures, traditional water puppet shows, and stunning landscapes.\n\nOur carefully curated packages include comfortable stays, guided tours, cultural experiences, and authentic Vietnamese hospitality. Whether seeking adventure, culture, or relaxation, Vietnam promises unforgettable memories.'
  },
  
  subDestinations: [
    {
      name: 'Hanoi',
      country: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Ha Long Bay',
      country: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
      packagesCount: 14
    },
    {
      name: 'Ho Chi Minh City',
      country: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      packagesCount: 13
    },
    {
      name: 'Hoi An',
      country: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1555779392-7d7e39e02a9c?w=600&q=80',
      packagesCount: 11
    },
    {
      name: 'Sapa',
      country: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
      packagesCount: 9
    },
    {
      name: 'Da Nang',
      country: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1587898046269-1e9f38e00f4e?w=600&q=80',
      packagesCount: 10
    }
  ],
  
  activities: [
    {
      title: 'Ha Long Bay Cruise',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
      location: 'Ha Long Bay'
    },
    {
      title: 'Old Quarter Walk',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&q=80',
      location: 'Hanoi'
    },
    {
      title: 'Cu Chi Tunnels',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      location: 'Ho Chi Minh City'
    },
    {
      title: 'Mekong Delta Tour',
      image: 'https://images.unsplash.com/photo-1552644727-6260e5e70221?w=600&q=80',
      location: 'Mekong Delta'
    }
  ],
  
  groupTours: [
    {
      name: 'Vietnam Explorer',
      date: 'March 25, 2026',
      totalSeats: 14,
      bookedSeats: 9,
      price: '₹38,999',
      duration: '6 Days',
      highlights: ['Hanoi City', 'Ha Long Bay', 'Hoi An']
    },
    {
      name: 'North to South',
      date: 'May 5, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹52,999',
      duration: '9 Days',
      highlights: ['Hanoi', 'Hoi An', 'Ho Chi Minh', 'Mekong Delta']
    },
    {
      name: 'Heritage Vietnam',
      date: 'July 18, 2026',
      totalSeats: 10,
      bookedSeats: 5,
      price: '₹45,999',
      duration: '7 Days',
      highlights: ['Hanoi', 'Ha Long', 'Hue', 'Hoi An']
    },
    {
      name: 'Complete Vietnam',
      date: 'September 12, 2026',
      totalSeats: 15,
      bookedSeats: 8,
      price: '₹56,999',
      duration: '9 Days',
      highlights: ['All Major Cities', 'Cruise', 'Cultural Tours']
    }
  ]
};

const vietnamPackages = [
  {
    name: 'Hanoi Ha Long Highlights',
    slug: 'hanoi-ha-long-highlights',
    originalPrice: 45999,
    discountedPrice: 38999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Hanoi', 'Ha Long Bay'],
    rating: 4.7,
    reviewCount: 420,
    highlights: [
      'Hanoi Old Quarter Tour',
      'Ha Long Bay Overnight Cruise',
      'Water Puppet Show',
      'Temple of Literature',
      'Vietnamese Cooking Class',
      '3 Nights Hotels + 1 Night Cruise'
    ],
    hotelsIncluded: [
      { city: 'Hanoi', nights: '3', name: 'Hotel or Similar' },
      { city: 'Ha Long Bay', nights: '1', name: 'Cruise or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '3 Nights Hotel + 1 Night Cruise',
        'Daily Breakfast',
        'Airport Transfers',
        'Hanoi City Tour',
        'Ha Long Bay Cruise',
        'Water Puppet Show'
      ],
      excluded: [
        'Lunch & Dinner (Most Days)',
        'Visa Fees',
        'Travel Insurance',
        'Personal Expenses',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1555779392-7d7e39e02a9c?w=800&q=80'
    ]
  },
  {
    name: 'Vietnam Heritage Tour',
    slug: 'vietnam-heritage-tour',
    originalPrice: 54999,
    discountedPrice: 46999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Hanoi', 'Ha Long Bay', 'Hue', 'Hoi An'],
    rating: 4.8,
    reviewCount: 380,
    highlights: [
      'UNESCO World Heritage Sites',
      'Imperial City Hue',
      'Hoi An Ancient Town',
      'Ha Long Bay Cruise',
      'Perfume River Boat Ride',
      '6 Nights Accommodation'
    ],
    hotelsIncluded: [
      { city: 'Hanoi', nights: '2', name: 'Hotel or Similar' },
      { city: 'Hue', nights: '2', name: 'Hotel or Similar' },
      { city: 'Hoi An', nights: '2', name: 'Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Accommodation',
        'Daily Breakfast',
        'Domestic Flights',
        'All City Tours',
        'Ha Long Bay Cruise',
        'Heritage Site Tickets'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Optional Tours',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1555779392-7d7e39e02a9c?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80'
    ]
  },
  {
    name: 'South Vietnam Discovery',
    slug: 'south-vietnam-discovery',
    originalPrice: 49999,
    discountedPrice: 42999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Ho Chi Minh City', 'Mekong Delta', 'Cu Chi'],
    rating: 4.6,
    reviewCount: 350,
    highlights: [
      'Cu Chi Tunnels Exploration',
      'Mekong Delta Boat Trip',
      'Saigon City Tour',
      'War Remnants Museum',
      'Floating Markets',
      'Street Food Tour'
    ],
    hotelsIncluded: [
      { city: 'Ho Chi Minh City', nights: '4', name: 'Hotel or Similar' },
      { city: 'Can Tho', nights: '1', name: 'Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Accommodation',
        'Daily Breakfast',
        'Airport Transfers',
        'Cu Chi Tunnels Tour',
        'Mekong Delta Tour',
        'City Sightseeing'
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
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      'https://images.unsplash.com/photo-1552644727-6260e5e70221?w=800&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80'
    ]
  },
  {
    name: 'Hoi An Beach Escape',
    slug: 'hoi-an-beach-escape',
    originalPrice: 51999,
    discountedPrice: 44999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Da Nang', 'Hoi An', 'Marble Mountains'],
    rating: 4.7,
    reviewCount: 310,
    highlights: [
      'Hoi An Ancient Town',
      'My Khe Beach',
      'Marble Mountains',
      'Lantern Making Workshop',
      'Beach Resorts',
      'Dragon Bridge'
    ],
    hotelsIncluded: [
      { city: 'Da Nang', nights: '2', name: 'Beach Resort or Similar' },
      { city: 'Hoi An', nights: '3', name: 'Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Accommodation',
        'Daily Breakfast',
        'Airport Transfers',
        'Hoi An Tours',
        'Marble Mountains',
        'Lantern Workshop'
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
      'https://images.unsplash.com/photo-1555779392-7d7e39e02a9c?w=800&q=80',
      'https://images.unsplash.com/photo-1587898046269-1e9f38e00f4e?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80'
    ]
  },
  {
    name: 'Sapa Trekking Adventure',
    slug: 'sapa-trekking-adventure',
    originalPrice: 54999,
    discountedPrice: 47999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Hanoi', 'Sapa', 'Fansipan'],
    rating: 4.8,
    reviewCount: 280,
    highlights: [
      'Sapa Rice Terraces Trek',
      'Fansipan Cable Car',
      'Hill Tribe Villages',
      'Scenic Train Journey',
      'Mountain Homestay',
      'Local Markets'
    ],
    hotelsIncluded: [
      { city: 'Hanoi', nights: '2', name: 'Hotel or Similar' },
      { city: 'Sapa', nights: '3', name: 'Mountain Resort or Similar' },
      { city: 'Hanoi', nights: '1', name: 'Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Accommodation',
        'Daily Breakfast & Some Meals',
        'Train Tickets',
        'Trekking Guide',
        'Fansipan Cable Car',
        'Village Tours'
      ],
      excluded: [
        'Some Meals',
        'Visa Fees',
        'Travel Insurance',
        'Trekking Equipment',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80'
    ]
  },
  {
    name: 'Complete Vietnam Journey',
    slug: 'complete-vietnam-journey',
    originalPrice: 69999,
    discountedPrice: 59999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Hanoi', 'Ha Long', 'Hoi An', 'Ho Chi Minh'],
    rating: 4.9,
    reviewCount: 465,
    highlights: [
      'North to South Vietnam',
      'Ha Long Bay Cruise',
      'All UNESCO Sites',
      'Mekong Delta Tour',
      'Cultural Experiences',
      '8 Nights Premium Stay'
    ],
    hotelsIncluded: [
      { city: 'Hanoi', nights: '2', name: 'Hotel or Similar' },
      { city: 'Hoi An', nights: '2', name: 'Resort or Similar' },
      { city: 'Ho Chi Minh City', nights: '3', name: 'Hotel or Similar' },
      { city: 'Ha Long Bay', nights: '1', name: 'Cruise or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '8 Nights Accommodation',
        'Daily Breakfast',
        'Domestic Flights',
        'All Major Tours',
        'Ha Long Cruise',
        'Cultural Shows'
      ],
      excluded: [
        'Lunch & Dinner (Most Days)',
        'Visa Fees',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80'
    ]
  }
];

const vietnamFaqs = [
  {
    question: 'What is the best time to visit Vietnam?',
    answer: 'The best time varies by region. North Vietnam (Hanoi, Ha Long Bay) is best from October to April. Central Vietnam (Hoi An, Da Nang) is ideal from February to May. South Vietnam (Ho Chi Minh City) is pleasant from December to April.'
  },
  {
    question: 'Do Indians need a visa for Vietnam?',
    answer: 'Yes, Indian passport holders need a visa. You can apply for an e-visa online before travel, which is valid for 30 days. Alternatively, you can get a visa on arrival with a pre-approved letter.'
  },
  {
    question: 'What currency is used in Vietnam?',
    answer: 'Vietnamese Dong (VND) is the official currency. USD is also widely accepted in tourist areas. ATMs are readily available, and cards are accepted at most hotels and restaurants.'
  },
  {
    question: 'Is Vietnam safe for tourists?',
    answer: 'Yes, Vietnam is generally very safe for tourists. The crime rate is low, and locals are friendly. Exercise normal precautions, especially in crowded areas, and be aware of traffic when crossing streets.'
  },
  {
    question: 'What should I try in Vietnamese cuisine?',
    answer: 'Must-try dishes include Pho (noodle soup), Banh Mi (sandwich), Bun Cha (grilled pork with noodles), fresh spring rolls, Vietnamese coffee, and various street food. Most dishes can be made vegetarian.'
  },
  {
    question: 'Can I customize my Vietnam tour?',
    answer: 'Absolutely! We offer flexible packages. You can add or remove destinations, extend stays, include specific activities, or adjust the itinerary based on your interests and budget.'
  }
];

const vietnamReviews = [
  {
    name: 'Vikram Singh',
    rating: 5,
    location: 'Delhi',
    comment: 'Incredible Vietnam trip! Ha Long Bay cruise was magical, Hanoi streets fascinating, and the food was amazing. Great value and excellent organization!',
    date: new Date('2024-01-18')
  },
  {
    name: 'Anjali Gupta',
    rating: 4,
    location: 'Pune',
    comment: 'Wonderful experience exploring Vietnam. Hoi An was beautiful, Cu Chi tunnels were eye-opening. Hotels were comfortable and guides knowledgeable!',
    date: new Date('2024-01-05')
  },
  {
    name: 'Karthik Reddy',
    rating: 5,
    location: 'Hyderabad',
    comment: 'Amazing journey from north to south! Loved the cultural diversity, stunning landscapes, and warm hospitality. Highly recommend this tour!',
    date: new Date('2023-12-22')
  }
];

async function migrateVietnamData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'vietnam' });
    
    if (destination) {
      console.log('📝 Updating existing Vietnam destination...');
      destination = await Destination.findOneAndUpdate(
        { slug: 'vietnam' },
        vietnamData,
        { new: true, upsert: true }
      );
    } else {
      console.log('🆕 Creating new Vietnam destination...');
      destination = await Destination.create(vietnamData);
    }
    
    console.log('✅ Vietnam destination migrated successfully');
    console.log(`   Destination ID: ${destination._id}`);

    console.log('\n📝 Migrating FAQs...');
    await Faq.deleteMany({ destinationId: destination._id });
    const faqsWithDestinationId = vietnamFaqs.map(faq => ({
      ...faq,
      destinationId: destination._id
    }));
    await Faq.insertMany(faqsWithDestinationId);
    console.log(`✅ ${vietnamFaqs.length} FAQs migrated successfully`);

    console.log('\n📦 Migrating Tour Packages...');
    await TourPackage.deleteMany({ destination: destination._id });
    const packagesWithDestination = vietnamPackages.map(pkg => ({
      ...pkg,
      destination: destination._id
    }));
    const createdPackages = await TourPackage.insertMany(packagesWithDestination);
    console.log(`✅ ${createdPackages.length} Tour Packages migrated successfully`);

    console.log('\n⭐ Migrating Reviews...');
    await Review.deleteMany({ destinationId: destination._id });
    const reviewsWithDestination = vietnamReviews.map(review => ({
      ...review,
      destinationId: destination._id,
      packageId: createdPackages[0]._id
    }));
    const createdReviews = await Review.insertMany(reviewsWithDestination);
    console.log(`✅ ${createdReviews.length} Reviews migrated successfully`);

    console.log('\n🎉 Migration completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - Destination: ${destination.destinationName}`);
    console.log(`   - Tour Packages: ${createdPackages.length}`);
    console.log(`   - Reviews: ${createdReviews.length}`);
    console.log(`   - FAQs: ${vietnamFaqs.length}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

migrateVietnamData();
