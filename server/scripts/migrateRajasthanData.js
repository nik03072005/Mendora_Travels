import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const rajasthanData = {
  destinationName: 'Rajasthan',
  slug: 'rajasthan',
  imageUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80',
  category: 'domestic',
  type: 'state',
  isActive: true,
  
  heroSection: {
    title: 'Rajasthan Tour Packages',
    tagline: 'Land of Kings & Forts',
    startingPrice: 14999,
    durationRange: '5-10 Days',
    heroImage: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Rajasthan, the Land of Kings, offers magnificent forts, royal palaces, vibrant culture, desert safaris, and colorful traditions. Experience the grandeur of India\'s royal heritage.',
    expandedDescription: 'Rajasthan, the Land of Kings, offers magnificent forts, royal palaces, vibrant culture, desert safaris, and colorful traditions. Experience the grandeur of India\'s royal heritage.\n\nExplore majestic Jaipur, romantic Udaipur, golden Jaisalmer, blue Jodhpur, and holy Pushkar. Witness stunning architecture, enjoy camel safaris, experience folk music and dance, taste authentic Rajasthani cuisine.\n\nOur packages include heritage hotels, guided tours, cultural performances, desert camps, and authentic experiences. From historical exploration to desert adventures, Rajasthan offers unforgettable journeys.'
  },
  
  subDestinations: [
    {
      name: 'Jaipur',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=600&q=80',
      packagesCount: 22
    },
    {
      name: 'Udaipur',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Jaisalmer',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Jodhpur',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80',
      packagesCount: 15
    },
    {
      name: 'Pushkar',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Ranthambore',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80',
      packagesCount: 14
    }
  ],
  
  activities: [
    {
      title: 'Fort Exploration',
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=600&q=80',
      location: 'Amber & Mehrangarh'
    },
    {
      title: 'Desert Safari',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80',
      location: 'Jaisalmer Thar Desert'
    },
    {
      title: 'Lake Pichola Cruise',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
      location: 'Udaipur'
    },
    {
      title: 'Tiger Safari',
      image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80',
      location: 'Ranthambore'
    }
  ],
  
  groupTours: [
    {
      name: 'Golden Triangle',
      date: 'March 10, 2026',
      totalSeats: 20,
      bookedSeats: 15,
      price: '₹14,999',
      duration: '6 Days',
      highlights: ['Jaipur', 'Agra', 'Delhi']
    },
    {
      name: 'Royal Rajasthan',
      date: 'April 15, 2026',
      totalSeats: 18,
      bookedSeats: 12,
      price: '₹22,999',
      duration: '8 Days',
      highlights: ['Jaipur', 'Udaipur', 'Jaisalmer', 'Jodhpur']
    },
    {
      name: 'Desert Safari Special',
      date: 'November 5, 2026',
      totalSeats: 15,
      bookedSeats: 10,
      price: '₹18,999',
      duration: '7 Days',
      highlights: ['Jaisalmer Dunes', 'Camel Safari', 'Desert Camp']
    },
    {
      name: 'Complete Rajasthan',
      date: 'December 20, 2026',
      totalSeats: 20,
      bookedSeats: 14,
      price: '₹28,999',
      duration: '10 Days',
      highlights: ['All Major Cities', 'Forts', 'Palaces', 'Safari']
    }
  ]
};

const rajasthanPackages = [
  {
    name: 'Jaipur Udaipur Getaway',
    slug: 'jaipur-udaipur-getaway',
    originalPrice: 18999,
    discountedPrice: 14999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Jaipur', 'Udaipur'],
    rating: 4.7,
    reviewCount: 580,
    highlights: [
      'Amber Fort & Palace of Winds',
      'City Palace Complex',
      'Lake Pichola Boat Ride',
      'Local Market Shopping',
      'Rajasthani Folk Dance',
      '5 Nights Heritage Hotels'
    ],
    hotelsIncluded: [
      { city: 'Jaipur', nights: '3', name: 'Heritage Hotel' },
      { city: 'Udaipur', nights: '2', name: 'Lake View Hotel' }
    ],
    packageDetails: {
      included: [
        'Hotel Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Sightseeing Tours',
        'Fort Entry Tickets',
        'Boat Ride',
        'Folk Dance Evening'
      ],
      excluded: [
        'Train/Flight Tickets',
        'Lunch & Dinner',
        'Travel Insurance',
        'Personal Expenses',
        'Camera Fees'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80'
    ]
  },
  {
    name: 'Desert Safari Jaisalmer',
    slug: 'desert-safari-jaisalmer',
    originalPrice: 22999,
    discountedPrice: 18999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Jodhpur', 'Jaisalmer', 'Sam Sand Dunes'],
    rating: 4.8,
    reviewCount: 495,
    highlights: [
      'Mehrangarh Fort',
      'Jaisalmer Fort & Havelis',
      'Camel Safari in Thar Desert',
      'Desert Camp Stay',
      'Folk Music & Bonfire',
      'Sunset at Sand Dunes'
    ],
    hotelsIncluded: [
      { city: 'Jodhpur', nights: '2', name: 'Heritage Hotel' },
      { city: 'Jaisalmer', nights: '2', name: 'Hotel' },
      { city: 'Sam Dunes', nights: '1', name: 'Desert Camp' }
    ],
    packageDetails: {
      included: [
        'Hotel & Camp Stay',
        'Daily Breakfast & Camp Dinner',
        'All Transfers',
        'Sightseeing Tours',
        'Camel Safari',
        'Cultural Evening',
        'Desert Activities'
      ],
      excluded: [
        'Train/Flight Tickets',
        'Most Meals',
        'Travel Insurance',
        'Personal Expenses',
        'Tips'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80',
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80'
    ]
  },
  {
    name: 'Royal Rajasthan Circuit',
    slug: 'royal-rajasthan-circuit',
    originalPrice: 28999,
    discountedPrice: 24999,
    noOfDays: 8,
    noOfNights: 7,
    locations: ['Jaipur', 'Pushkar', 'Jodhpur', 'Udaipur'],
    rating: 4.9,
    reviewCount: 520,
    highlights: [
      'Four Royal Cities',
      'Forts & Palaces',
      'Brahma Temple Pushkar',
      'Lake City Romance',
      'Desert Experience',
      'Cultural Shows'
    ],
    hotelsIncluded: [
      { city: 'Jaipur', nights: '2', name: 'Heritage Hotel' },
      { city: 'Pushkar', nights: '1', name: 'Resort' },
      { city: 'Jodhpur', nights: '2', name: 'Heritage Hotel' },
      { city: 'Udaipur', nights: '2', name: 'Lake View Hotel' }
    ],
    packageDetails: {
      included: [
        '7 Nights Hotels',
        'Daily Breakfast',
        'All Transfers',
        'All Sightseeing',
        'Entry Tickets',
        'Boat Ride',
        'Cultural Performances'
      ],
      excluded: [
        'Transportation to/from Rajasthan',
        'Lunch & Dinner',
        'Travel Insurance',
        'Shopping',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80'
    ]
  },
  {
    name: 'Wildlife & Heritage Tour',
    slug: 'wildlife-heritage-tour',
    originalPrice: 26999,
    discountedPrice: 22999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Jaipur', 'Ranthambore', 'Bharatpur'],
    rating: 4.6,
    reviewCount: 410,
    highlights: [
      'Amber Fort & City Palace',
      'Ranthambore Tiger Safari',
      'Bharatpur Bird Sanctuary',
      'Wildlife Photography',
      'Nature Walks',
      'Heritage Stays'
    ],
    hotelsIncluded: [
      { city: 'Jaipur', nights: '2', name: 'Heritage Hotel' },
      { city: 'Ranthambore', nights: '2', name: 'Wildlife Resort' },
      { city: 'Bharatpur', nights: '2', name: 'Resort' }
    ],
    packageDetails: {
      included: [
        '6 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        '2 Jungle Safaris',
        'Bird Sanctuary Entry',
        'Sightseeing Tours',
        'Naturalist Guide'
      ],
      excluded: [
        'Train/Flight Tickets',
        'Lunch & Dinner',
        'Travel Insurance',
        'Camera Fees',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80',
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80',
      'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=800&q=80'
    ]
  },
  {
    name: 'Pushkar Camel Fair Special',
    slug: 'pushkar-camel-fair-special',
    originalPrice: 19999,
    discountedPrice: 16999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Jaipur', 'Pushkar', 'Ajmer'],
    rating: 4.7,
    reviewCount: 350,
    highlights: [
      'Pushkar Camel Fair',
      'Cultural Performances',
      'Brahma Temple',
      'Ajmer Dargah',
      'Fair Activities',
      'Local Shopping'
    ],
    hotelsIncluded: [
      { city: 'Jaipur', nights: '2', name: 'Hotel' },
      { city: 'Pushkar', nights: '2', name: 'Camp/Hotel' }
    ],
    packageDetails: {
      included: [
        '4 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Fair Entry Tickets',
        'City Tours',
        'Temple Visits',
        'Cultural Shows'
      ],
      excluded: [
        'Transportation to Jaipur',
        'Lunch & Dinner',
        'Travel Insurance',
        'Fair Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=800&q=80',
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80'
    ]
  },
  {
    name: 'Complete Rajasthan Experience',
    slug: 'complete-rajasthan-experience',
    originalPrice: 34999,
    discountedPrice: 29999,
    noOfDays: 10,
    noOfNights: 9,
    locations: ['Jaipur', 'Pushkar', 'Jodhpur', 'Jaisalmer', 'Udaipur'],
    rating: 4.9,
    reviewCount: 600,
    highlights: [
      'All Major Cities',
      'Forts & Palaces',
      'Desert Safari',
      'Lake City Udaipur',
      'Cultural Experiences',
      '9 Nights Heritage Stay'
    ],
    hotelsIncluded: [
      { city: 'Jaipur', nights: '2', name: 'Heritage Hotel' },
      { city: 'Pushkar', nights: '1', name: 'Resort' },
      { city: 'Jodhpur', nights: '2', name: 'Heritage Hotel' },
      { city: 'Jaisalmer', nights: '2', name: 'Hotel & Desert Camp' },
      { city: 'Udaipur', nights: '2', name: 'Lake View Hotel' }
    ],
    packageDetails: {
      included: [
        '9 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'All Sightseeing',
        'Camel Safari',
        'Boat Rides',
        'Cultural Shows'
      ],
      excluded: [
        'Transport to/from Rajasthan',
        'Lunch & Dinner',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80'
    ]
  }
];

const rajasthanFaqs = [
  {
    question: 'What is the best time to visit Rajasthan?',
    answer: 'The best time is October to March when the weather is pleasant (10-27°C). November to February is peak season with comfortable temperatures. Avoid summer (April-June) as temperatures can exceed 45°C. Monsoon (July-September) sees moderate rainfall.'
  },
  {
    question: 'What are must-visit places in Rajasthan?',
    answer: 'Must-visit cities include Jaipur (Pink City), Udaipur (Lake City), Jaisalmer (Golden City), Jodhpur (Blue City), and Pushkar (Holy City). Also visit Ranthambore for tiger safari, Mount Abu for hill station experience.'
  },
  {
    question: 'What should I wear in Rajasthan?',
    answer: 'Wear comfortable, light cotton clothes in summer. Carry warm clothes for winter evenings (Nov-Feb). Modest dress is appreciated at religious sites. Comfortable walking shoes are essential for fort explorations. Don\'t forget sunscreen and sunglasses!'
  },
  {
    question: 'Is Rajasthan safe for tourists?',
    answer: 'Yes, Rajasthan is generally safe and very tourist-friendly. Locals are hospitable and welcoming. However, exercise normal precautions, especially in crowded markets. Book authorized guides and avoid isolated areas at night.'
  },
  {
    question: 'What is special about Rajasthani cuisine?',
    answer: 'Rajasthani cuisine offers unique flavors - try Dal Baati Churma, Laal Maas, Gatte ki Sabzi, Ker Sangri, and Ghewar dessert. Vegetarian options are abundant. Street food like Kachori, Mirchi Vada, and Mawa Kachori are must-tries.'
  },
  {
    question: 'Can we do a desert safari in Rajasthan?',
    answer: 'Yes! Jaisalmer offers excellent desert safari experiences in the Thar Desert. Enjoy camel rides, jeep safaris, desert camping, cultural performances, and stunning sunsets. Sam Sand Dunes and Khuri are popular safari locations.'
  }
];

const rajasthanReviews = [
  {
    name: 'Arjun Mehta',
    rating: 5,
    location: 'Mumbai',
    comment: 'Incredible Rajasthan tour! Forts were magnificent, desert safari amazing, and Udaipur lakes beautiful. Excellent heritage hotels and authentic Rajasthani food. Highly recommended!',
    date: new Date('2024-01-15')
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    location: 'Delhi',
    comment: 'Perfect family vacation! Kids loved the camel ride and desert camp. Amber Fort elephant ride was memorable. Great guides and comfortable hotels throughout!',
    date: new Date('2023-12-28')
  },
  {
    name: 'Karthik Reddy',
    rating: 4,
    location: 'Bangalore',
    comment: 'Wonderful Rajasthan experience! Rich culture, stunning architecture, and warm hospitality. Jaisalmer Fort was breathtaking. Only wish we had more time!',
    date: new Date('2023-12-10')
  }
];

async function migrateRajasthanData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'rajasthan' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'rajasthan' }, rajasthanData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(rajasthanData);
    }
    console.log('✅ Rajasthan destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(rajasthanFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(rajasthanPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(rajasthanReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateRajasthanData();
