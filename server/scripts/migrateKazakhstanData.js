import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const kazakhstanData = {
  destinationName: 'Kazakhstan',
  slug: 'kazakhstan',
  imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Kazakhstan Tour Packages',
    tagline: 'Heart of Central Asia',
    startingPrice: 54999,
    durationRange: '6-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Kazakhstan, the largest landlocked country, offers futuristic cities, vast steppes, stunning mountains, and rich nomadic culture. Experience the perfect blend of tradition and modernity.',
    expandedDescription: 'Kazakhstan, the largest landlocked country, offers futuristic cities, vast steppes, stunning mountains, and rich nomadic culture. Experience the perfect blend of tradition and modernity.\n\nExplore ultra-modern Almaty, marvel at futuristic Nur-Sultan architecture, discover Charyn Canyon, visit Big Almaty Lake, experience nomadic traditions, and witness the stunning Tian Shan mountains.\n\nOur packages include comfortable stays, guided tours, cultural experiences, and adventure activities. From urban exploration to mountain adventures, Kazakhstan promises unique and unforgettable experiences.'
  },
  
  subDestinations: [
    {
      name: 'Almaty',
      country: 'Kazakhstan',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Nur-Sultan',
      country: 'Kazakhstan',
      image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80',
      packagesCount: 14
    },
    {
      name: 'Shymbulak',
      country: 'Kazakhstan',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Charyn Canyon',
      country: 'Kazakhstan',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Kolsai Lakes',
      country: 'Kazakhstan',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      packagesCount: 9
    },
    {
      name: 'Turgen Gorge',
      country: 'Kazakhstan',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
      packagesCount: 8
    }
  ],
  
  activities: [
    {
      title: 'Cable Car Ride',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
      location: 'Kok-Tobe & Shymbulak'
    },
    {
      title: 'Canyon Exploration',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
      location: 'Charyn Canyon'
    },
    {
      title: 'Mountain Hiking',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      location: 'Tian Shan Mountains'
    },
    {
      title: 'City Tours',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80',
      location: 'Almaty & Nur-Sultan'
    }
  ],
  
  groupTours: [
    {
      name: 'Kazakhstan Explorer',
      date: 'June 15, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹54,999',
      duration: '7 Days',
      highlights: ['Almaty', 'Charyn Canyon', 'Mountain Tours']
    },
    {
      name: 'Silk Road Journey',
      date: 'July 20, 2026',
      totalSeats: 10,
      bookedSeats: 5,
      price: '₹62,999',
      duration: '8 Days',
      highlights: ['Historical Sites', 'Culture', 'Nature']
    },
    {
      name: 'Mountain Adventure',
      date: 'August 10, 2026',
      totalSeats: 8,
      bookedSeats: 4,
      price: '₹58,999',
      duration: '7 Days',
      highlights: ['Trekking', 'Lakes', 'Canyons']
    },
    {
      name: 'Complete Kazakhstan',
      date: 'September 5, 2026',
      totalSeats: 12,
      bookedSeats: 6,
      price: '₹69,999',
      duration: '9 Days',
      highlights: ['Two Cities', 'Nature', 'Culture', 'Adventure']
    }
  ]
};

const kazakhstanPackages = [
  {
    name: 'Almaty City & Mountains',
    slug: 'almaty-city-mountains',
    originalPrice: 64999,
    discountedPrice: 54999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Almaty', 'Shymbulak', 'Big Almaty Lake'],
    rating: 4.7,
    reviewCount: 220,
    highlights: [
      'Kok-Tobe Hill Cable Car',
      'Shymbulak Ski Resort',
      'Big Almaty Lake',
      'Green Bazaar Visit',
      'Medeu Dam',
      '5 Nights City Hotel'
    ],
    hotelsIncluded: [
      { city: 'Almaty', nights: '5', name: '4-Star Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Hotel',
        'Daily Breakfast',
        'Airport Transfers',
        'City Tours',
        'Mountain Excursions',
        'Cable Car Tickets'
      ],
      excluded: [
        'Lunch & Dinner',
        'Kazakhstan Visa',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ]
  },
  {
    name: 'Charyn Canyon Adventure',
    slug: 'charyn-canyon-adventure',
    originalPrice: 58999,
    discountedPrice: 49999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Almaty', 'Charyn Canyon', 'Kolsai Lakes'],
    rating: 4.8,
    reviewCount: 195,
    highlights: [
      'Charyn Canyon Exploration',
      'Kolsai Lakes Trek',
      'Kaindy Lake Visit',
      'Nomadic Experience',
      'Nature Photography',
      'Off-Road Adventures'
    ],
    hotelsIncluded: [
      { city: 'Almaty', nights: '3', name: 'Hotel' },
      { city: 'Kolsai', nights: '2', name: 'Guesthouse or Yurt' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Accommodation',
        'All Meals',
        'All Transfers',
        'Canyon Tours',
        'Lake Excursions',
        'Guide Services'
      ],
      excluded: [
        'Kazakhstan Visa',
        'Travel Insurance',
        'Optional Activities',
        'Horse Riding',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80'
    ]
  },
  {
    name: 'Two Cities Kazakhstan',
    slug: 'two-cities-kazakhstan',
    originalPrice: 74999,
    discountedPrice: 64999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Almaty', 'Nur-Sultan'],
    rating: 4.6,
    reviewCount: 180,
    highlights: [
      'Futuristic Nur-Sultan',
      'Bayterek Tower',
      'Khan Shatyr Mall',
      'Hazret Sultan Mosque',
      'Almaty Attractions',
      'Two City Experience'
    ],
    hotelsIncluded: [
      { city: 'Almaty', nights: '4', name: '4-Star Hotel' },
      { city: 'Nur-Sultan', nights: '3', name: '4-Star Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '7 Nights Hotels',
        'Daily Breakfast',
        'Domestic Flight',
        'All Transfers',
        'City Tours',
        'Entrance Fees'
      ],
      excluded: [
        'Lunch & Dinner',
        'Kazakhstan Visa',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80'
    ]
  },
  {
    name: 'Kazakhstan Nature Trek',
    slug: 'kazakhstan-nature-trek',
    originalPrice: 68999,
    discountedPrice: 58999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Almaty', 'Kolsai', 'Kaindy', 'Turgen'],
    rating: 4.7,
    reviewCount: 165,
    highlights: [
      'Mountain Trekking',
      'Three Lakes Tour',
      'Waterfall Visits',
      'Hot Springs',
      'Wildlife Spotting',
      'Camping Experience'
    ],
    hotelsIncluded: [
      { city: 'Almaty', nights: '2', name: 'Hotel' },
      { city: 'Mountain Areas', nights: '4', name: 'Guesthouses & Camping' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Accommodation',
        'All Meals',
        'Trekking Equipment',
        'Guide & Driver',
        'All Permits',
        'Nature Tours'
      ],
      excluded: [
        'Kazakhstan Visa',
        'Travel Insurance',
        'Personal Gear',
        'Tips',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
    ]
  },
  {
    name: 'Silk Road Heritage',
    slug: 'silk-road-heritage',
    originalPrice: 71999,
    discountedPrice: 61999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Almaty', 'Turkestan', 'Shymkent'],
    rating: 4.5,
    reviewCount: 155,
    highlights: [
      'Silk Road History',
      'Mausoleum of Khoja Ahmed Yasawi',
      'Ancient Cities',
      'Cultural Sites',
      'Traditional Markets',
      'Historical Tours'
    ],
    hotelsIncluded: [
      { city: 'Almaty', nights: '3', name: 'Hotel' },
      { city: 'Turkestan', nights: '2', name: 'Hotel' },
      { city: 'Shymkent', nights: '2', name: 'Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '7 Nights Hotels',
        'Daily Breakfast',
        'Domestic Flights',
        'All Transfers',
        'Historical Tours',
        'Guide Services'
      ],
      excluded: [
        'Lunch & Dinner',
        'Kazakhstan Visa',
        'Travel Insurance',
        'Optional Tours',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
    ]
  },
  {
    name: 'Complete Kazakhstan Journey',
    slug: 'complete-kazakhstan-journey',
    originalPrice: 79999,
    discountedPrice: 69999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Almaty', 'Nur-Sultan', 'Charyn', 'Kolsai'],
    rating: 4.8,
    reviewCount: 210,
    highlights: [
      'Comprehensive Tour',
      'Cities & Nature',
      'Culture & Adventure',
      'All Major Attractions',
      'Mountain & Canyon',
      '8 Nights Premium Stay'
    ],
    hotelsIncluded: [
      { city: 'Almaty', nights: '4', name: '4-Star Hotel' },
      { city: 'Nur-Sultan', nights: '2', name: '4-Star Hotel' },
      { city: 'Kolsai', nights: '2', name: 'Guesthouse' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '8 Nights Accommodation',
        'Daily Breakfast & Some Meals',
        'Domestic Flight',
        'All Transfers',
        'All Major Tours',
        'Guide Services'
      ],
      excluded: [
        'Some Meals',
        'Kazakhstan Visa',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
    ]
  }
];

const kazakhstanFaqs = [
  {
    question: 'What is the best time to visit Kazakhstan?',
    answer: 'The best time is May to September for pleasant weather and mountain activities. June to August is peak summer, ideal for trekking and lake visits. September offers autumn colors. Winter (December-February) is great for skiing at Shymbulak.'
  },
  {
    question: 'Do Indians need a visa for Kazakhstan?',
    answer: 'Yes, Indian passport holders need a visa. Kazakhstan offers e-Visa facility with 5-7 days processing time. Tourist visa is valid for 30 days. We assist with visa documentation as part of our packages.'
  },
  {
    question: 'What currency is used in Kazakhstan?',
    answer: 'Kazakhstani Tenge (KZT) is the official currency. 1 KZT = approximately ₹0.17-0.18. Currency exchange available at airports, banks, and exchange offices. Credit cards accepted in major cities and hotels.'
  },
  {
    question: 'Is Kazakhstan safe for tourists?',
    answer: 'Yes, Kazakhstan is generally safe for tourists. Major cities like Almaty and Nur-Sultan are modern and well-developed. People are friendly and welcoming. Exercise normal precautions and respect local customs.'
  },
  {
    question: 'What languages are spoken in Kazakhstan?',
    answer: 'Kazakh is the state language, Russian is widely spoken. English is common in hotels and tourist areas. Our guides speak English/Hindi. Basic Russian phrases can be helpful for local interactions.'
  },
  {
    question: 'Can vegetarians find food in Kazakhstan?',
    answer: 'While Kazakh cuisine is meat-based, vegetarian options are available in Almaty and Nur-Sultan. Many restaurants offer salads, vegetables, pasta, and rice dishes. Indian restaurants are also available in major cities.'
  }
];

const kazakhstanReviews = [
  {
    name: 'Vikram Malhotra',
    rating: 5,
    location: 'Delhi',
    comment: 'Incredible Kazakhstan trip! Charyn Canyon was breathtaking, Almaty modern and beautiful, and Big Almaty Lake stunning. A truly unique destination!',
    date: new Date('2024-01-12')
  },
  {
    name: 'Priya Verma',
    rating: 4,
    location: 'Mumbai',
    comment: 'Amazing experience! Futuristic Nur-Sultan architecture and natural beauty of Almaty exceeded expectations. Great guides and well-organized tour!',
    date: new Date('2023-12-28')
  },
  {
    name: 'Aditya Singh',
    rating: 5,
    location: 'Bangalore',
    comment: 'Perfect blend of nature and modernity! Kolsai Lakes trek was amazing, city tours informative. Kazakhstan is an underrated gem. Highly recommend!',
    date: new Date('2023-12-15')
  }
];

async function migrateKazakhstanData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'kazakhstan' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'kazakhstan' }, kazakhstanData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(kazakhstanData);
    }
    console.log('✅ Kazakhstan destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(kazakhstanFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(kazakhstanPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(kazakhstanReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateKazakhstanData();
