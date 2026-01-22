import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const dubaiData = {
  destinationName: 'Dubai',
  slug: 'dubai',
  imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Dubai Tour Packages',
    tagline: 'City of Gold & Luxury',
    startingPrice: 45999,
    durationRange: '4-7 Days',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Dubai, the jewel of UAE, is a perfect blend of modern architecture, luxury shopping, desert adventures, and Arabian hospitality. Experience world-class attractions and unforgettable moments.',
    expandedDescription: 'Dubai, the jewel of UAE, is a perfect blend of modern architecture, luxury shopping, desert adventures, and Arabian hospitality. Experience world-class attractions and unforgettable moments.\n\nVisit the iconic Burj Khalifa, explore traditional souks, enjoy thrilling desert safaris, shop at world-class malls, and relax on pristine beaches. Experience the perfect mix of futuristic cityscape and Arabian heritage.\n\nOur packages include luxury hotels, guided tours, desert safaris, dhow cruises, and exclusive experiences. Whether you seek adventure, luxury, or family fun, Dubai delivers an extraordinary vacation.'
  },
  
  subDestinations: [
    {
      name: 'Downtown Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Dubai Marina',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
      packagesCount: 14
    },
    {
      name: 'Palm Jumeirah',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Old Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Dubai Creek',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=600&q=80',
      packagesCount: 9
    },
    {
      name: 'JBR Beach',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
      packagesCount: 11
    }
  ],
  
  activities: [
    {
      title: 'Burj Khalifa Tour',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
      location: 'Downtown Dubai'
    },
    {
      title: 'Desert Safari',
      image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=600&q=80',
      location: 'Arabian Desert'
    },
    {
      title: 'Dubai Mall Shopping',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80',
      location: 'Downtown Dubai'
    },
    {
      title: 'Dhow Cruise',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80',
      location: 'Dubai Creek'
    }
  ],
  
  groupTours: [
    {
      name: 'Dubai Highlights',
      date: 'February 28, 2026',
      totalSeats: 12,
      bookedSeats: 8,
      price: '₹45,999',
      duration: '5 Days',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall']
    },
    {
      name: 'Luxury Dubai',
      date: 'April 12, 2026',
      totalSeats: 10,
      bookedSeats: 6,
      price: '₹62,999',
      duration: '6 Days',
      highlights: ['5-Star Hotels', 'Premium Tours', 'Fine Dining']
    },
    {
      name: 'Family Fun Dubai',
      date: 'June 8, 2026',
      totalSeats: 15,
      bookedSeats: 10,
      price: '₹49,999',
      duration: '5 Days',
      highlights: ['Theme Parks', 'Aquarium', 'Beach Activities']
    },
    {
      name: 'Dubai Abu Dhabi',
      date: 'August 20, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹54,999',
      duration: '6 Days',
      highlights: ['Two Emirates', 'Sheikh Zayed Mosque', 'Ferrari World']
    }
  ]
};

const dubaiPackages = [
  {
    name: 'Dubai Essential Experience',
    slug: 'dubai-essential-experience',
    originalPrice: 52999,
    discountedPrice: 45999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Dubai'],
    rating: 4.8,
    reviewCount: 540,
    highlights: [
      'Burj Khalifa At The Top',
      'Dubai Mall & Fountain Show',
      'Desert Safari with BBQ Dinner',
      'Dubai Marina Dhow Cruise',
      'Gold & Spice Souk Visit',
      '4 Nights 4-Star Hotel'
    ],
    hotelsIncluded: [
      { city: 'Dubai', nights: '4', name: '4-Star Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights 4-Star Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'Burj Khalifa Tickets',
        'Desert Safari',
        'Dhow Cruise Dinner'
      ],
      excluded: [
        'Lunch & Dinner (Most Days)',
        'UAE Visa Fees',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80'
    ]
  },
  {
    name: 'Luxury Dubai Getaway',
    slug: 'luxury-dubai-getaway',
    originalPrice: 72999,
    discountedPrice: 62999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Dubai'],
    rating: 4.9,
    reviewCount: 425,
    highlights: [
      '5-Star Luxury Hotel',
      'Burj Khalifa Sky Level',
      'Premium Desert Safari',
      'Atlantis The Palm Visit',
      'Dubai Frame Tickets',
      'Marina Yacht Cruise'
    ],
    hotelsIncluded: [
      { city: 'Dubai', nights: '5', name: '5-Star Luxury Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights 5-Star Hotel',
        'Daily Breakfast & Some Meals',
        'Private Transfers',
        'All Premium Tours',
        'Burj Khalifa Sky',
        'Luxury Yacht Cruise'
      ],
      excluded: [
        'Some Meals',
        'UAE Visa Fees',
        'Travel Insurance',
        'Shopping Expenses',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80'
    ]
  },
  {
    name: 'Dubai Family Adventure',
    slug: 'dubai-family-adventure',
    originalPrice: 58999,
    discountedPrice: 49999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Dubai'],
    rating: 4.7,
    reviewCount: 480,
    highlights: [
      'Dubai Aquarium & Underwater Zoo',
      'IMG Worlds of Adventure',
      'Dubai Garden Glow',
      'Beach Activities at JBR',
      'KidZania Dubai',
      'Family-Friendly Hotel'
    ],
    hotelsIncluded: [
      { city: 'Dubai', nights: '4', name: 'Family Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'Theme Park Tickets',
        'Aquarium Entry',
        'Desert Safari'
      ],
      excluded: [
        'Lunch & Dinner',
        'UAE Visa Fees',
        'Travel Insurance',
        'Additional Park Tickets',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
    ]
  },
  {
    name: 'Dubai Shopping Festival',
    slug: 'dubai-shopping-festival',
    originalPrice: 55999,
    discountedPrice: 47999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Dubai'],
    rating: 4.6,
    reviewCount: 390,
    highlights: [
      'Dubai Mall Shopping Spree',
      'Gold Souk Exploration',
      'Mall of Emirates Visit',
      'Global Village Entry',
      'City Centre Shopping',
      'Shopping Vouchers Included'
    ],
    hotelsIncluded: [
      { city: 'Dubai', nights: '4', name: 'Hotel Near Shopping Areas' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'Shopping Tours',
        'Mall Vouchers',
        'City Tour'
      ],
      excluded: [
        'Lunch & Dinner',
        'UAE Visa Fees',
        'Travel Insurance',
        'Shopping Expenses',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80'
    ]
  },
  {
    name: 'Dubai Abu Dhabi Combo',
    slug: 'dubai-abu-dhabi-combo',
    originalPrice: 62999,
    discountedPrice: 54999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Dubai', 'Abu Dhabi'],
    rating: 4.8,
    reviewCount: 445,
    highlights: [
      'Sheikh Zayed Grand Mosque',
      'Ferrari World Abu Dhabi',
      'Louvre Abu Dhabi',
      'Dubai City Tour',
      'Desert Safari',
      'Two Emirates Experience'
    ],
    hotelsIncluded: [
      { city: 'Dubai', nights: '3', name: '4-Star Hotel or Similar' },
      { city: 'Abu Dhabi', nights: '2', name: '4-Star Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Hotels',
        'Daily Breakfast',
        'All Transfers',
        'Dubai & Abu Dhabi Tours',
        'Ferrari World',
        'Desert Safari'
      ],
      excluded: [
        'Lunch & Dinner',
        'UAE Visa Fees',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80'
    ]
  },
  {
    name: 'Complete Dubai Experience',
    slug: 'complete-dubai-experience',
    originalPrice: 68999,
    discountedPrice: 59999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Dubai'],
    rating: 4.9,
    reviewCount: 510,
    highlights: [
      'All Major Attractions',
      'Multiple Theme Parks',
      'Beach & City Tours',
      'Desert Safari & BBQ',
      'Dhow Cruises',
      '6 Nights Premium Stay'
    ],
    hotelsIncluded: [
      { city: 'Dubai', nights: '6', name: '4-Star Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'All Major Tours',
        'Theme Park Tickets',
        'Multiple Activities'
      ],
      excluded: [
        'Lunch & Dinner (Most Days)',
        'UAE Visa Fees',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80'
    ]
  }
];

const dubaiFaqs = [
  {
    question: 'What is the best time to visit Dubai?',
    answer: 'The best time to visit Dubai is from November to March when the weather is pleasant (20-30°C). Summer months (June-August) are extremely hot but offer great hotel deals and Dubai Summer Surprises shopping festival.'
  },
  {
    question: 'Do Indians need a visa for Dubai?',
    answer: 'Yes, Indian passport holders need a visa for Dubai. Tourist visas can be obtained through airlines, travel agents, or hotels. We assist with visa processing as part of our packages. Processing typically takes 3-5 working days.'
  },
  {
    question: 'What currency is used in Dubai?',
    answer: 'UAE Dirham (AED) is the official currency. 1 AED = approximately ₹22-23. Currency exchange is available at airports, malls, and exchange houses. Credit cards are widely accepted everywhere.'
  },
  {
    question: 'Is Dubai expensive for tourists?',
    answer: 'Dubai can be as expensive or budget-friendly as you choose. While luxury options exist, there are many affordable restaurants, shopping areas, and activities. Our packages offer great value with inclusions to manage your budget.'
  },
  {
    question: 'What dress code should I follow in Dubai?',
    answer: 'Dubai is relatively liberal, but modest dress is appreciated. Cover shoulders and knees when visiting malls and restaurants. Beachwear is fine at beaches and pools. More conservative dress is required at religious sites.'
  },
  {
    question: 'Can vegetarians find food in Dubai?',
    answer: 'Absolutely! Dubai has excellent vegetarian and vegan options. Indian restaurants are abundant, and most international restaurants offer vegetarian dishes. Many malls have Indian food courts.'
  }
];

const dubaiReviews = [
  {
    name: 'Rohan Patel',
    rating: 5,
    location: 'Ahmedabad',
    comment: 'Amazing Dubai trip! Burj Khalifa views were spectacular, desert safari thrilling, and shopping incredible. Perfect blend of luxury and adventure!',
    date: new Date('2024-01-22')
  },
  {
    name: 'Divya Shah',
    rating: 5,
    location: 'Mumbai',
    comment: 'Fantastic family vacation! Kids loved Ferrari World and Dubai Aquarium. Hotels were luxurious and all arrangements were perfect. Highly recommended!',
    date: new Date('2024-01-12')
  },
  {
    name: 'Arun Kumar',
    rating: 4,
    location: 'Bangalore',
    comment: 'Great Dubai experience! All major attractions covered, excellent hotels, and smooth arrangements. Only wish we had more time for shopping!',
    date: new Date('2023-12-30')
  }
];

async function migrateDubaiData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'dubai' });
    
    if (destination) {
      console.log('📝 Updating existing Dubai destination...');
      destination = await Destination.findOneAndUpdate(
        { slug: 'dubai' },
        dubaiData,
        { new: true, upsert: true }
      );
    } else {
      console.log('🆕 Creating new Dubai destination...');
      destination = await Destination.create(dubaiData);
    }
    
    console.log('✅ Dubai destination migrated successfully');
    console.log(`   Destination ID: ${destination._id}`);

    console.log('\n📝 Migrating FAQs...');
    await Faq.deleteMany({ destinationId: destination._id });
    const faqsWithDestinationId = dubaiFaqs.map(faq => ({
      ...faq,
      destinationId: destination._id
    }));
    await Faq.insertMany(faqsWithDestinationId);
    console.log(`✅ ${dubaiFaqs.length} FAQs migrated successfully`);

    console.log('\n📦 Migrating Tour Packages...');
    await TourPackage.deleteMany({ destination: destination._id });
    const packagesWithDestination = dubaiPackages.map(pkg => ({
      ...pkg,
      destination: destination._id
    }));
    const createdPackages = await TourPackage.insertMany(packagesWithDestination);
    console.log(`✅ ${createdPackages.length} Tour Packages migrated successfully`);

    console.log('\n⭐ Migrating Reviews...');
    await Review.deleteMany({ destinationId: destination._id });
    const reviewsWithDestination = dubaiReviews.map(review => ({
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
    console.log(`   - FAQs: ${dubaiFaqs.length}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

migrateDubaiData();
