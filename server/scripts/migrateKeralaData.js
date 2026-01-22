import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const keralaData = {
  destinationName: 'Kerala',
  slug: 'kerala',
  imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Kerala Tour Packages',
    tagline: 'God\'s Own Country',
    startingPrice: 15999,
    durationRange: '5-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Kerala, God\'s Own Country, offers serene backwaters, lush hill stations, exotic wildlife, Ayurvedic treatments, pristine beaches, and rich cultural heritage.',
    expandedDescription: 'Kerala, God\'s Own Country, offers serene backwaters, lush hill stations, exotic wildlife, Ayurvedic treatments, pristine beaches, and rich cultural heritage.\n\nExplore Alleppey\'s houseboats, Munnar\'s tea gardens, Thekkady\'s wildlife, Kochi\'s history, Kovalam beaches, Wayanad\'s forests, and experience Kerala\'s warm hospitality and delicious cuisine.\n\nOur packages include comfortable accommodations, houseboat stays, Ayurvedic massages, wildlife safaris, and authentic Malayali experiences. From backwater cruises to mountain escapes, Kerala offers rejuvenating journeys.'
  },
  
  subDestinations: [
    {
      name: 'Munnar',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
      packagesCount: 32
    },
    {
      name: 'Alleppey',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80',
      packagesCount: 30
    },
    {
      name: 'Kochi',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
      packagesCount: 28
    },
    {
      name: 'Thekkady',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
      packagesCount: 24
    },
    {
      name: 'Kovalam',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80',
      packagesCount: 22
    },
    {
      name: 'Wayanad',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
      packagesCount: 20
    }
  ],
  
  activities: [
    {
      title: 'Houseboat Cruise',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80',
      location: 'Alleppey Backwaters'
    },
    {
      title: 'Tea Plantation Tour',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
      location: 'Munnar Hills'
    },
    {
      title: 'Wildlife Safari',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
      location: 'Thekkady Periyar'
    },
    {
      title: 'Ayurvedic Spa',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80',
      location: 'Throughout Kerala'
    }
  ],
  
  groupTours: [
    {
      name: 'Kerala Highlights',
      date: 'March 20, 2026',
      totalSeats: 22,
      bookedSeats: 18,
      price: '₹15,999',
      duration: '6 Days',
      highlights: ['Kochi', 'Munnar', 'Alleppey']
    },
    {
      name: 'Kerala Honeymoon',
      date: 'April 15, 2026',
      totalSeats: 12,
      bookedSeats: 10,
      price: '₹24,999',
      duration: '7 Days',
      highlights: ['Romantic', 'Houseboat', 'Hill Station']
    },
    {
      name: 'Ayurveda Wellness',
      date: 'May 10, 2026',
      totalSeats: 15,
      bookedSeats: 11,
      price: '₹28,999',
      duration: '8 Days',
      highlights: ['Spa', 'Treatments', 'Rejuvenation']
    },
    {
      name: 'Complete Kerala',
      date: 'December 5, 2026',
      totalSeats: 20,
      bookedSeats: 16,
      price: '₹29,999',
      duration: '9 Days',
      highlights: ['All Major Sites', 'Full Experience']
    }
  ]
};

const keralaPackages = [
  {
    name: 'Munnar Alleppey Package',
    slug: 'munnar-alleppey-package',
    originalPrice: 19999,
    discountedPrice: 15999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Kochi', 'Munnar', 'Alleppey'],
    rating: 4.8,
    reviewCount: 620,
    highlights: [
      'Fort Kochi Sightseeing',
      'Munnar Tea Gardens',
      'Mattupetty Dam',
      'Echo Point',
      'Alleppey Houseboat Stay',
      'Backwater Cruise'
    ],
    hotelsIncluded: [
      { city: 'Kochi', nights: '1', name: 'Hotel' },
      { city: 'Munnar', nights: '2', name: 'Hill Resort' },
      { city: 'Alleppey', nights: '1', name: 'Deluxe Houseboat' },
      { city: 'Kochi', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel & Houseboat Stay',
        'Daily Breakfast',
        'Houseboat All Meals',
        'All Transfers',
        'Sightseeing Tours',
        'Entry Tickets',
        'Guide Services'
      ],
      excluded: [
        'Transport to Kochi',
        'Lunch & Dinner (except houseboat)',
        'Kathakali Show',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
    ]
  },
  {
    name: 'Kerala Wildlife & Nature',
    slug: 'kerala-wildlife-nature',
    originalPrice: 23999,
    discountedPrice: 19999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Kochi', 'Thekkady', 'Munnar', 'Alleppey'],
    rating: 4.7,
    reviewCount: 490,
    highlights: [
      'Periyar Wildlife Sanctuary',
      'Jungle Safari',
      'Spice Plantation Tour',
      'Tea Gardens Munnar',
      'Nature Walks',
      'Backwater Cruise'
    ],
    hotelsIncluded: [
      { city: 'Kochi', nights: '1', name: 'Hotel' },
      { city: 'Thekkady', nights: '2', name: 'Jungle Resort' },
      { city: 'Munnar', nights: '2', name: 'Hill Resort' },
      { city: 'Alleppey', nights: '1', name: 'Houseboat' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'Houseboat Meals',
        'Wildlife Safari',
        'Plantation Tours',
        'All Transfers',
        'Guide'
      ],
      excluded: [
        'Transport to Kochi',
        'Lunch & Dinner (hotels)',
        'Bamboo Rafting',
        'Travel Insurance',
        'Camera Fees',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80'
    ]
  },
  {
    name: 'Romantic Kerala Honeymoon',
    slug: 'romantic-kerala-honeymoon',
    originalPrice: 28999,
    discountedPrice: 24999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Munnar', 'Thekkady', 'Alleppey', 'Kovalam'],
    rating: 4.9,
    reviewCount: 575,
    highlights: [
      'Luxury Houseboat',
      'Hill Station Romance',
      'Beach Resort Stay',
      'Candlelight Dinner',
      'Honeymoon Décor',
      'Couple Activities'
    ],
    hotelsIncluded: [
      { city: 'Munnar', nights: '2', name: 'Luxury Resort' },
      { city: 'Thekkady', nights: '1', name: 'Resort' },
      { city: 'Alleppey', nights: '1', name: 'Premium Houseboat' },
      { city: 'Kovalam', nights: '2', name: 'Beach Resort' }
    ],
    packageDetails: {
      included: [
        'Luxury Accommodation',
        'All Meals',
        'Private Transfers',
        'Candlelight Dinner',
        'Honeymoon Décor',
        'Sightseeing',
        'Couple Spa'
      ],
      excluded: [
        'Flight to/from Kerala',
        'Travel Insurance',
        'Adventure Activities',
        'Additional Spa',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
    ]
  },
  {
    name: 'Ayurveda Wellness Retreat',
    slug: 'ayurveda-wellness-retreat',
    originalPrice: 32999,
    discountedPrice: 28999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Kovalam', 'Kanyakumari', 'Alleppey'],
    rating: 4.8,
    reviewCount: 445,
    highlights: [
      'Ayurvedic Treatments',
      'Yoga & Meditation',
      'Herbal Massages',
      'Doctor Consultation',
      'Wellness Diet',
      'Rejuvenation Program'
    ],
    hotelsIncluded: [
      { city: 'Kovalam', nights: '5', name: 'Ayurveda Resort' },
      { city: 'Kanyakumari', nights: '1', name: 'Hotel' },
      { city: 'Alleppey', nights: '1', name: 'Houseboat' }
    ],
    packageDetails: {
      included: [
        'Ayurveda Resort Stay',
        'All Ayurvedic Meals',
        '7 Days Treatments',
        'Doctor Consultation',
        'Yoga Sessions',
        'Wellness Program',
        'Transfers'
      ],
      excluded: [
        'Transport to Kerala',
        'Additional Treatments',
        'Personal Medicines',
        'Travel Insurance',
        'Sightseeing',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
    ]
  },
  {
    name: 'Wayanad Hill Station Escape',
    slug: 'wayanad-hill-station-escape',
    originalPrice: 21999,
    discountedPrice: 17999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Calicut', 'Wayanad', 'Mysore'],
    rating: 4.6,
    reviewCount: 405,
    highlights: [
      'Wayanad Hills',
      'Edakkal Caves',
      'Soochipara Falls',
      'Wildlife Sanctuary',
      'Coffee Plantations',
      'Trekking Trails'
    ],
    hotelsIncluded: [
      { city: 'Calicut', nights: '1', name: 'Hotel' },
      { city: 'Wayanad', nights: '3', name: 'Hill Resort' },
      { city: 'Mysore', nights: '1', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Sightseeing Tours',
        'Cave Entry',
        'Plantation Visit',
        'Guide'
      ],
      excluded: [
        'Transport to Calicut',
        'Lunch & Dinner',
        'Safari Charges',
        'Travel Insurance',
        'Adventure Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80'
    ]
  },
  {
    name: 'Complete Kerala Experience',
    slug: 'complete-kerala-experience',
    originalPrice: 33999,
    discountedPrice: 29999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kovalam'],
    rating: 4.9,
    reviewCount: 650,
    highlights: [
      'All Major Destinations',
      'Houseboat Stay',
      'Hill Stations',
      'Beaches',
      'Wildlife Safari',
      '8 Nights Complete Tour'
    ],
    hotelsIncluded: [
      { city: 'Kochi', nights: '1', name: 'Hotel' },
      { city: 'Munnar', nights: '2', name: 'Hill Resort' },
      { city: 'Thekkady', nights: '2', name: 'Resort' },
      { city: 'Alleppey', nights: '1', name: 'Deluxe Houseboat' },
      { city: 'Kovalam', nights: '2', name: 'Beach Resort' }
    ],
    packageDetails: {
      included: [
        '8 Nights Accommodation',
        'Daily Breakfast',
        'Houseboat All Meals',
        'All Transfers',
        'All Sightseeing',
        'Wildlife Safari',
        'Cultural Shows'
      ],
      excluded: [
        'Transport to Kerala',
        'Lunch & Dinner (hotels)',
        'Ayurvedic Treatments',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
    ]
  }
];

const keralaFaqs = [
  {
    question: 'What is the best time to visit Kerala?',
    answer: 'Best time is October to March with pleasant weather (20-32°C). December-January is peak season - ideal but crowded. Monsoon (June-September) brings lush greenery, perfect for Ayurveda but expect rain. April-May is hot. Houseboat experience great year-round. Each season has unique charm!'
  },
  {
    question: 'What are must-visit places in Kerala?',
    answer: 'Must-visit: Munnar (tea gardens), Alleppey (backwaters & houseboats), Thekkady (wildlife), Kochi (history & culture), Kovalam (beaches), Wayanad (hills & forests). Also explore Kumarakom, Varkala, Vagamon. Each destination offers unique experiences. Minimum 6-7 days needed!'
  },
  {
    question: 'What is special about Kerala houseboats?',
    answer: 'Houseboats (Kettuvallam) are traditional rice barges converted to floating hotels. Cruise through Alleppey/Kumarakom backwaters. Available as luxury AC or budget options. Includes bedrooms, dining, deck. Chef prepares fresh Kerala meals. Options: day cruise or overnight stay. Book in advance, especially peak season!'
  },
  {
    question: 'Is Kerala safe for tourists?',
    answer: 'Yes, Kerala is one of India\'s safest states for tourists. Locals are educated, friendly, and helpful. English widely spoken. Good infrastructure and healthcare. However, respect local culture, dress modestly at religious sites. Avoid isolated beaches at night. Solo female travelers generally safe but take normal precautions.'
  },
  {
    question: 'What should I know about Kerala cuisine?',
    answer: 'Kerala cuisine uses coconut, spices, seafood. Must-try: Appam with stew, Puttu, Fish curry, Prawn fry, Sadya (feast on banana leaf), Payasam dessert. Breakfast: Dosa, Idli, Vada. Syrian Christian and Moplah cuisines unique. Vegetarian options abundant. Street food delicious. Fresh coconut water everywhere!'
  },
  {
    question: 'Are Ayurvedic treatments worth it?',
    answer: 'Absolutely! Kerala is Ayurveda\'s birthplace. Authentic treatments available. Options: 1-hour massage to 2-week wellness programs. Benefits: stress relief, detox, pain management. Choose certified centers. Authentic treatments use herbal oils. Consult doctor before intensive programs. Even single massage highly rejuvenating!'
  }
];

const keralaReviews = [
  {
    name: 'Manish Gupta',
    rating: 5,
    location: 'Delhi',
    comment: 'Kerala is magical! Munnar tea gardens beautiful, Alleppey houseboat unforgettable, and people so warm. Food amazing. Well-planned tour, excellent hotels. God\'s Own Country indeed!',
    date: new Date('2024-01-20')
  },
  {
    name: 'Shruti Iyer',
    rating: 5,
    location: 'Bangalore',
    comment: 'Perfect family vacation! Kids loved backwaters, wildlife safari exciting, and Ayurvedic massage relaxing. Beautiful scenery everywhere. Great value for money. Highly recommend!',
    date: new Date('2023-12-15')
  },
  {
    name: 'Abhishek Nair',
    rating: 4,
    location: 'Mumbai',
    comment: 'Wonderful Kerala experience! Houseboat was highlight, Thekkady wildlife amazing, and beaches pristine. Only wish we had more time in Wayanad. Coming back soon!',
    date: new Date('2023-11-28')
  }
];

async function migrateKeralaData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'kerala' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'kerala' }, keralaData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(keralaData);
    }
    console.log('✅ Kerala destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(keralaFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(keralaPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(keralaReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateKeralaData();
