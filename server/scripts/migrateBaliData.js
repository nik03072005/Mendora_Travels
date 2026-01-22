import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const baliData = {
  destinationName: 'Bali',
  slug: 'bali',
  imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Bali Tour Packages',
    tagline: 'Island of Gods Paradise',
    startingPrice: 42999,
    durationRange: '5-8 Days',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Bali, the Island of Gods, offers stunning beaches, ancient temples, lush rice terraces, and vibrant culture. Experience the perfect blend of relaxation, adventure, and spirituality.',
    expandedDescription: 'Bali, the Island of Gods, offers stunning beaches, ancient temples, lush rice terraces, and vibrant culture. Experience the perfect blend of relaxation, adventure, and spirituality.\n\nExplore the artistic heart of Ubud, relax on pristine beaches of Seminyak and Nusa Dua, witness breathtaking sunsets at Tanah Lot, and discover hidden waterfalls. Enjoy world-class surfing, traditional Balinese dance performances, rejuvenating spa treatments, and incredible cuisine.\n\nOur carefully crafted packages include comfortable stays, guided tours, cultural experiences, and authentic Balinese hospitality. From adventure seekers to spiritual travelers, Bali has something magical for everyone.'
  },
  
  subDestinations: [
    {
      name: 'Ubud',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
      packagesCount: 15
    },
    {
      name: 'Seminyak',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Nusa Dua',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Uluwatu',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
      packagesCount: 9
    },
    {
      name: 'Canggu',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&q=80',
      packagesCount: 8
    },
    {
      name: 'Sanur',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=600&q=80',
      packagesCount: 7
    }
  ],
  
  activities: [
    {
      title: 'Temple Hopping',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
      location: 'Tanah Lot & Uluwatu'
    },
    {
      title: 'Rice Terrace Walk',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
      location: 'Tegalalang'
    },
    {
      title: 'Surfing Lessons',
      image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80',
      location: 'Canggu Beach'
    },
    {
      title: 'Balinese Spa',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
      location: 'Ubud & Seminyak'
    }
  ],
  
  groupTours: [
    {
      name: 'Bali Explorer',
      date: 'March 20, 2026',
      totalSeats: 12,
      bookedSeats: 8,
      price: '₹42,999',
      duration: '6 Days',
      highlights: ['Ubud Culture', 'Beach Resorts', 'Temple Tours']
    },
    {
      name: 'Spiritual Bali',
      date: 'April 10, 2026',
      totalSeats: 10,
      bookedSeats: 6,
      price: '₹47,999',
      duration: '7 Days',
      highlights: ['Yoga Retreats', 'Temple Visits', 'Rice Terraces']
    },
    {
      name: 'Beach Paradise',
      date: 'June 15, 2026',
      totalSeats: 15,
      bookedSeats: 9,
      price: '₹39,999',
      duration: '5 Days',
      highlights: ['Seminyak Beach', 'Water Sports', 'Sunset Dinners']
    },
    {
      name: 'Complete Bali',
      date: 'August 5, 2026',
      totalSeats: 12,
      bookedSeats: 5,
      price: '₹54,999',
      duration: '8 Days',
      highlights: ['Ubud', 'Nusa Dua', 'Uluwatu', 'Cultural Shows']
    }
  ]
};

const baliPackages = [
  {
    name: 'Ubud Seminyak Escape',
    slug: 'ubud-seminyak-escape',
    originalPrice: 49999,
    discountedPrice: 42999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Ubud', 'Seminyak'],
    rating: 4.8,
    reviewCount: 485,
    highlights: [
      'Ubud Rice Terraces & Monkey Forest',
      'Tanah Lot Temple Sunset',
      'Traditional Balinese Dance',
      'Seminyak Beach & Shopping',
      'Tegenungan Waterfall',
      '5 Nights Premium Hotels'
    ],
    hotelsIncluded: [
      { city: 'Ubud', nights: '3', name: 'Resort or Similar' },
      { city: 'Seminyak', nights: '2', name: 'Beach Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Accommodation',
        'Daily Breakfast',
        'Airport Transfers',
        'Ubud Full Day Tour',
        'Tanah Lot Sunset Tour',
        'Cultural Dance Show'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa on Arrival Fee',
        'Travel Insurance',
        'Personal Expenses',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80'
    ]
  },
  {
    name: 'Bali Beach Paradise',
    slug: 'bali-beach-paradise',
    originalPrice: 56999,
    discountedPrice: 48999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Seminyak', 'Nusa Dua', 'Uluwatu'],
    rating: 4.9,
    reviewCount: 520,
    highlights: [
      'Premium Beach Resorts',
      'Uluwatu Temple & Kecak Dance',
      'Water Sports Package',
      'Sunset Beach Dinners',
      'Spa & Wellness',
      '6 Nights Luxury Stay'
    ],
    hotelsIncluded: [
      { city: 'Seminyak', nights: '3', name: 'Beach Resort or Similar' },
      { city: 'Nusa Dua', nights: '3', name: 'Luxury Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Beach Resorts',
        'Daily Breakfast',
        'Airport Transfers',
        'Uluwatu Temple Tour',
        'Water Sports',
        'Spa Treatment'
      ],
      excluded: [
        'Lunch & Dinner (Most Days)',
        'Visa Fees',
        'Travel Insurance',
        'Additional Water Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80'
    ]
  },
  {
    name: 'Cultural Bali Tour',
    slug: 'cultural-bali-tour',
    originalPrice: 52999,
    discountedPrice: 45999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Ubud', 'Bedugul', 'Tanah Lot'],
    rating: 4.7,
    reviewCount: 410,
    highlights: [
      'Sacred Monkey Forest',
      'Tirta Empul Holy Spring',
      'Rice Terrace Walks',
      'Balinese Cooking Class',
      'Traditional Art Villages',
      'Temple Circuit Tour'
    ],
    hotelsIncluded: [
      { city: 'Ubud', nights: '5', name: 'Cultural Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Cultural Tours',
        'Cooking Class',
        'Temple Entrance Fees'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Shopping Expenses',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80'
    ]
  },
  {
    name: 'Bali Adventure Package',
    slug: 'bali-adventure-package',
    originalPrice: 58999,
    discountedPrice: 51999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Ubud', 'Canggu', 'Amed'],
    rating: 4.8,
    reviewCount: 395,
    highlights: [
      'White Water Rafting',
      'Surfing Lessons',
      'Mount Batur Sunrise Trek',
      'Snorkeling at Amed',
      'ATV Ride Adventure',
      'Canyon Tubing'
    ],
    hotelsIncluded: [
      { city: 'Ubud', nights: '3', name: 'Resort or Similar' },
      { city: 'Canggu', nights: '2', name: 'Surf Resort or Similar' },
      { city: 'Amed', nights: '1', name: 'Beach Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'All Adventure Activities',
        'Rafting & Surfing',
        'Trekking Guide'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Equipment Rental',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80'
    ]
  },
  {
    name: 'Bali Honeymoon Special',
    slug: 'bali-honeymoon-special',
    originalPrice: 68999,
    discountedPrice: 59999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Ubud', 'Nusa Dua', 'Jimbaran'],
    rating: 5.0,
    reviewCount: 450,
    highlights: [
      'Private Pool Villa Stay',
      'Romantic Candlelight Dinner',
      'Couple Spa Treatment',
      'Sunset Cruise',
      'Private Tours',
      'Honeymoon Decorations'
    ],
    hotelsIncluded: [
      { city: 'Ubud', nights: '3', name: 'Luxury Villa with Pool' },
      { city: 'Nusa Dua', nights: '3', name: 'Beach Resort with Pool' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Luxury Villa',
        'Daily Breakfast',
        'Private Transfers',
        'Romantic Dinners',
        'Couple Spa',
        'Sunset Cruise'
      ],
      excluded: [
        'Some Meals',
        'Visa Fees',
        'Travel Insurance',
        'Optional Tours',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80'
    ]
  },
  {
    name: 'Complete Bali Explorer',
    slug: 'complete-bali-explorer',
    originalPrice: 72999,
    discountedPrice: 64999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Ubud', 'Seminyak', 'Nusa Dua', 'Uluwatu'],
    rating: 4.9,
    reviewCount: 540,
    highlights: [
      'Comprehensive Bali Tour',
      'All Major Attractions',
      'Beach & Culture Mix',
      'Multiple Hotels',
      'Adventure Activities',
      '8 Nights Premium Stay'
    ],
    hotelsIncluded: [
      { city: 'Ubud', nights: '3', name: 'Resort or Similar' },
      { city: 'Seminyak', nights: '2', name: 'Beach Resort or Similar' },
      { city: 'Nusa Dua', nights: '3', name: 'Luxury Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '8 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'All Major Tours',
        'Cultural Shows',
        'Water Activities'
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
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80'
    ]
  }
];

const baliFaqs = [
  {
    question: 'What is the best time to visit Bali?',
    answer: 'The best time to visit Bali is during the dry season from April to October. The peak season is July-August with pleasant weather, while April-June and September-October offer good weather with fewer crowds.'
  },
  {
    question: 'Do Indians need a visa for Bali?',
    answer: 'Yes, Indian passport holders need a visa. You can get Visa on Arrival (VOA) for 30 days at the airport for approximately $35 USD, or apply for e-Visa online before departure.'
  },
  {
    question: 'What currency is used in Bali?',
    answer: 'Indonesian Rupiah (IDR) is the official currency. Currency exchange is available at airports, banks, and authorized money changers. ATMs are widely available, and cards are accepted at most hotels and restaurants.'
  },
  {
    question: 'Is Bali safe for tourists?',
    answer: 'Yes, Bali is very safe and welcoming for tourists. The locals are friendly and helpful. However, practice normal safety precautions, respect local customs, and be aware of traffic conditions.'
  },
  {
    question: 'What should I pack for Bali?',
    answer: 'Pack light, breathable clothing, swimwear, sunscreen, insect repellent, comfortable walking shoes, and a light jacket for air-conditioned places. Bring modest clothing for temple visits.'
  },
  {
    question: 'Can vegetarians find food in Bali?',
    answer: 'Absolutely! Bali has excellent vegetarian and vegan options. Traditional Indonesian cuisine includes many vegetarian dishes, and Ubud especially has numerous health-focused restaurants and cafes.'
  }
];

const baliReviews = [
  {
    name: 'Priya Sharma',
    rating: 5,
    location: 'Mumbai',
    comment: 'Magical Bali experience! Ubud rice terraces were breathtaking, beaches pristine, and the Balinese hospitality was wonderful. Perfect blend of culture and relaxation!',
    date: new Date('2024-01-20')
  },
  {
    name: 'Rahul Mehta',
    rating: 5,
    location: 'Bangalore',
    comment: 'Amazing honeymoon in Bali! The private villa was stunning, romantic dinners unforgettable, and temple tours fascinating. Highly recommend for couples!',
    date: new Date('2024-01-10')
  },
  {
    name: 'Neha Kapoor',
    rating: 4,
    location: 'Delhi',
    comment: 'Great family vacation! Kids loved the water sports and beach activities. Ubud was culturally enriching. Only wish we had more time to explore!',
    date: new Date('2023-12-28')
  }
];

async function migrateBaliData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'bali' });
    
    if (destination) {
      console.log('📝 Updating existing Bali destination...');
      destination = await Destination.findOneAndUpdate(
        { slug: 'bali' },
        baliData,
        { new: true, upsert: true }
      );
    } else {
      console.log('🆕 Creating new Bali destination...');
      destination = await Destination.create(baliData);
    }
    
    console.log('✅ Bali destination migrated successfully');
    console.log(`   Destination ID: ${destination._id}`);

    console.log('\n📝 Migrating FAQs...');
    await Faq.deleteMany({ destinationId: destination._id });
    const faqsWithDestinationId = baliFaqs.map(faq => ({
      ...faq,
      destinationId: destination._id
    }));
    await Faq.insertMany(faqsWithDestinationId);
    console.log(`✅ ${baliFaqs.length} FAQs migrated successfully`);

    console.log('\n📦 Migrating Tour Packages...');
    await TourPackage.deleteMany({ destination: destination._id });
    const packagesWithDestination = baliPackages.map(pkg => ({
      ...pkg,
      destination: destination._id
    }));
    const createdPackages = await TourPackage.insertMany(packagesWithDestination);
    console.log(`✅ ${createdPackages.length} Tour Packages migrated successfully`);

    console.log('\n⭐ Migrating Reviews...');
    await Review.deleteMany({ destinationId: destination._id });
    const reviewsWithDestination = baliReviews.map(review => ({
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
    console.log(`   - FAQs: ${baliFaqs.length}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

migrateBaliData();
