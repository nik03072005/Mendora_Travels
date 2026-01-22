import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const meghalayaData = {
  destinationName: 'Meghalaya',
  slug: 'meghalaya',
  imageUrl: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Meghalaya Tour Packages',
    tagline: 'Abode of Clouds',
    startingPrice: 14999,
    durationRange: '5-8 Days',
    heroImage: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Meghalaya, the Abode of Clouds, offers living root bridges, crystal-clear rivers, stunning waterfalls, mysterious caves, rolling hills, and warm Khasi-Jaintia hospitality.',
    expandedDescription: 'Meghalaya, the Abode of Clouds, offers living root bridges, crystal-clear rivers, stunning waterfalls, mysterious caves, rolling hills, and warm Khasi-Jaintia hospitality.\n\nExplore Cherrapunji, wettest place on earth, Dawki\'s transparent waters, Mawlynnong cleanest village, double-decker living root bridge, Shillong\'s charm, and countless waterfalls.\n\nOur packages include comfortable accommodations, local guides, waterfall visits, cave explorations, and authentic Northeast experiences. From adventure treks to scenic drives, Meghalaya offers magical journeys.'
  },
  
  subDestinations: [
    {
      name: 'Shillong',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=600&q=80',
      packagesCount: 26
    },
    {
      name: 'Cherrapunji',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 24
    },
    {
      name: 'Dawki',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      packagesCount: 20
    },
    {
      name: 'Mawlynnong',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Nongriat',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Mawsynram',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      packagesCount: 14
    }
  ],
  
  activities: [
    {
      title: 'Living Root Bridges',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
      location: 'Nongriat Village'
    },
    {
      title: 'Dawki Boating',
      image: 'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=600&q=80',
      location: 'Crystal Clear River'
    },
    {
      title: 'Waterfall Chasing',
      image: 'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=600&q=80',
      location: 'Nohkalikai & Seven Sisters'
    },
    {
      title: 'Cave Exploration',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      location: 'Mawsmai & Arwah'
    }
  ],
  
  groupTours: [
    {
      name: 'Meghalaya Highlights',
      date: 'April 15, 2026',
      totalSeats: 18,
      bookedSeats: 14,
      price: '₹14,999',
      duration: '6 Days',
      highlights: ['Shillong', 'Cherrapunji', 'Dawki']
    },
    {
      name: 'Living Bridges Trek',
      date: 'May 20, 2026',
      totalSeats: 12,
      bookedSeats: 9,
      price: '₹18,999',
      duration: '7 Days',
      highlights: ['Root Bridges', 'Waterfalls', 'Villages']
    },
    {
      name: 'Monsoon Special',
      date: 'July 10, 2026',
      totalSeats: 15,
      bookedSeats: 10,
      price: '₹16,999',
      duration: '6 Days',
      highlights: ['Rainy Season', 'Full Waterfalls']
    },
    {
      name: 'Complete Meghalaya',
      date: 'October 5, 2026',
      totalSeats: 20,
      bookedSeats: 15,
      price: '₹22,999',
      duration: '8 Days',
      highlights: ['All Highlights', 'Villages', 'Culture']
    }
  ]
};

const meghalayaPackages = [
  {
    name: 'Shillong Cherrapunji Explorer',
    slug: 'shillong-cherrapunji-explorer',
    originalPrice: 18999,
    discountedPrice: 14999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Shillong', 'Cherrapunji', 'Mawlynnong', 'Dawki'],
    rating: 4.7,
    reviewCount: 510,
    highlights: [
      'Elephant Falls & Shillong Peak',
      'Nohkalikai Waterfall',
      'Cleanest Village Asia',
      'Dawki Transparent Boat Ride',
      'Mawsmai Cave',
      'Local Market Shopping'
    ],
    hotelsIncluded: [
      { city: 'Shillong', nights: '3', name: 'Hotel' },
      { city: 'Cherrapunji', nights: '2', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Sightseeing Tours',
        'Entry Tickets',
        'Boat Ride at Dawki',
        'Local Guide'
      ],
      excluded: [
        'Transport to Shillong',
        'Lunch & Dinner',
        'Travel Insurance',
        'Personal Expenses',
        'Camera Fees'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Living Root Bridges Trek',
    slug: 'living-root-bridges-trek',
    originalPrice: 22999,
    discountedPrice: 18999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Shillong', 'Cherrapunji', 'Nongriat', 'Rainbow Falls'],
    rating: 4.9,
    reviewCount: 445,
    highlights: [
      'Double-Decker Root Bridge',
      'Trek to Nongriat Village',
      'Rainbow Falls Swimming',
      'Jungle Trail Experience',
      'Khasi Village Stay',
      'Natural Pool Swimming'
    ],
    hotelsIncluded: [
      { city: 'Shillong', nights: '2', name: 'Hotel' },
      { city: 'Cherrapunji', nights: '2', name: 'Resort' },
      { city: 'Nongriat', nights: '2', name: 'Homestay' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'All Meals During Trek',
        'All Transfers',
        'Trek Guide',
        'Entry Permits',
        'Sightseeing',
        'Village Experience'
      ],
      excluded: [
        'Transport to Shillong',
        'Travel Insurance',
        'Personal Trekking Gear',
        'Porter Services',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80'
    ]
  },
  {
    name: 'Dawki Mawlynnong Day Trip',
    slug: 'dawki-mawlynnong-day-trip',
    originalPrice: 18999,
    discountedPrice: 15999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Shillong', 'Dawki', 'Mawlynnong', 'Riwai'],
    rating: 4.6,
    reviewCount: 380,
    highlights: [
      'Dawki Crystal Clear Water',
      'Cleanest Village Tour',
      'Sky View Platform',
      'Riwai Living Root Bridge',
      'Bangladesh Border View',
      'Local Cuisine Tasting'
    ],
    hotelsIncluded: [
      { city: 'Shillong', nights: '4', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'Day Trip to Dawki',
        'Boat Ride',
        'All Transfers',
        'Sightseeing',
        'Entry Fees'
      ],
      excluded: [
        'Transport to Shillong',
        'Lunch & Dinner',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  },
  {
    name: 'Monsoon Meghalaya Special',
    slug: 'monsoon-meghalaya-special',
    originalPrice: 20999,
    discountedPrice: 16999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Shillong', 'Cherrapunji', 'Mawsynram', 'Seven Sisters'],
    rating: 4.8,
    reviewCount: 425,
    highlights: [
      'Monsoon Waterfalls Full Flow',
      'Wettest Place on Earth',
      'Seven Sisters Falls',
      'Nohkalikai in Monsoon',
      'Cave Explorations',
      'Misty Landscapes'
    ],
    hotelsIncluded: [
      { city: 'Shillong', nights: '3', name: 'Hotel' },
      { city: 'Cherrapunji', nights: '2', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast & Dinner',
        'All Transfers',
        'Waterfall Tours',
        'Cave Entry',
        'Raincoats Provided',
        'Guide Services'
      ],
      excluded: [
        'Transport to Shillong',
        'Lunch',
        'Travel Insurance',
        'Personal Expenses',
        'Trekking Shoes Rent'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80'
    ]
  },
  {
    name: 'Caves & Waterfalls Explorer',
    slug: 'caves-waterfalls-explorer',
    originalPrice: 19999,
    discountedPrice: 16999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Shillong', 'Cherrapunji', 'Mawsmai', 'Arwah'],
    rating: 4.7,
    reviewCount: 390,
    highlights: [
      'Mawsmai Cave Walk',
      'Arwah Cave Adventure',
      'Multiple Waterfalls',
      'Nohsngithiang Falls',
      'Wei Sawdong Falls Trek',
      'Photography Paradise'
    ],
    hotelsIncluded: [
      { city: 'Shillong', nights: '2', name: 'Hotel' },
      { city: 'Cherrapunji', nights: '3', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        'Accommodation',
        'Daily Breakfast',
        'Cave Explorations',
        'Waterfall Tours',
        'All Entry Fees',
        'Guide & Transfers',
        'Safety Equipment'
      ],
      excluded: [
        'Transport to Shillong',
        'Lunch & Dinner',
        'Travel Insurance',
        'Personal Gear',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1608051052169-d8e5a5daa0f8?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80'
    ]
  },
  {
    name: 'Complete Meghalaya Experience',
    slug: 'complete-meghalaya-experience',
    originalPrice: 26999,
    discountedPrice: 22999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Shillong', 'Cherrapunji', 'Dawki', 'Mawlynnong', 'Nongriat'],
    rating: 4.9,
    reviewCount: 560,
    highlights: [
      'All Major Attractions',
      'Living Root Bridges',
      'Dawki Boating',
      'Waterfall Circuit',
      'Cave Explorations',
      '7 Nights Complete Tour'
    ],
    hotelsIncluded: [
      { city: 'Shillong', nights: '3', name: 'Hotel' },
      { city: 'Cherrapunji', nights: '2', name: 'Resort' },
      { city: 'Nongriat', nights: '2', name: 'Homestay' }
    ],
    packageDetails: {
      included: [
        '7 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'All Sightseeing',
        'Entry Tickets',
        'Boat Rides',
        'Trek Guide'
      ],
      excluded: [
        'Transport to Shillong',
        'Lunch & Dinner',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1626621341222-5be6f49a73e4?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1626621340517-bbf3d9990a23?w=800&q=80'
    ]
  }
];

const meghalayaFaqs = [
  {
    question: 'What is the best time to visit Meghalaya?',
    answer: 'October to May is best with pleasant weather (10-24°C). October-November offers post-monsoon greenery. March-May is peak season. June-September is monsoon - waterfalls are spectacular but trekking difficult. Winter (Dec-Feb) is cold but clear. Each season offers unique beauty!'
  },
  {
    question: 'How to reach Living Root Bridges?',
    answer: 'Most famous Double-Decker bridge is in Nongriat village near Cherrapunji. Requires 3000+ steps trek (2-3 hours each way). Moderately challenging. Better to stay overnight in Nongriat. Wear good trekking shoes. Other accessible root bridges at Mawlynnong and Riwai.'
  },
  {
    question: 'Is Meghalaya safe for tourists?',
    answer: 'Yes, Meghalaya is very safe and tourist-friendly. Locals are welcoming and helpful. However, roads can be challenging, especially during monsoon. Hire experienced local drivers. Some areas require Inner Line Permits. Avoid isolated areas at night. Overall, one of India\'s safest destinations!'
  },
  {
    question: 'What should I pack for Meghalaya?',
    answer: 'Pack comfortable trekking shoes (essential!), light cotton clothes, warm jacket for evenings. Raincoat/umbrella mandatory. Sunscreen, mosquito repellent. Quick-dry clothes for monsoon. Medicines, first aid. Power bank, torch. Waterproof bag for electronics. Modest dress appreciated.'
  },
  {
    question: 'Can we swim in Dawki river?',
    answer: 'Yes, swimming is allowed in Umngot River at Dawki. Water is crystal clear. However, currents can be strong during monsoon. Best time: October-May. Life jackets recommended. Also, natural pools at Rainbow Falls (Nongriat) and Wei Sawdong Falls are great for swimming.'
  },
  {
    question: 'What are must-try foods in Meghalaya?',
    answer: 'Must-try: Jadoh (rice with meat), Dohneiiong (pork with black sesame), Tungtap (fermented fish), Nakham Bitchi (dried fish chutney), Pumaloi (rice bread). Pork dishes are specialty. Also try Kwai (betel nut), local rice beer, and momos. Vegetarian options limited outside Shillong.'
  }
];

const meghalayaReviews = [
  {
    name: 'Ravi Kumar',
    rating: 5,
    location: 'Bangalore',
    comment: 'Meghalaya is paradise! Living root bridges were incredible, Dawki water unbelievably clear, and waterfalls breathtaking. Great homestays and delicious food. Northeast India\'s gem!',
    date: new Date('2023-11-10')
  },
  {
    name: 'Anjali Desai',
    rating: 5,
    location: 'Mumbai',
    comment: 'Perfect family vacation! Kids loved the cave explorations and waterfall swimming. Mawlynnong was so clean and beautiful. Excellent guides and comfortable hotels. Highly recommend!',
    date: new Date('2023-10-28')
  },
  {
    name: 'Sanjay Reddy',
    rating: 4,
    location: 'Hyderabad',
    comment: 'Amazing Meghalaya experience! Root bridge trek was challenging but worth it. Cherrapunji landscapes stunning. Roads were tricky but drivers skilled. Wish we had more time!',
    date: new Date('2023-10-15')
  }
];

async function migrateMeghalayaData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'meghalaya' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'meghalaya' }, meghalayaData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(meghalayaData);
    }
    console.log('✅ Meghalaya destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(meghalayaFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(meghalayaPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(meghalayaReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateMeghalayaData();
