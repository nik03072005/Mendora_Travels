import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const europeData = {
  destinationName: 'Europe',
  slug: 'europe',
  imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
  category: 'international',
  type: 'region',
  isActive: true,
  
  heroSection: {
    title: 'Europe Tour Packages',
    tagline: 'Grand European Adventure',
    startingPrice: 89999,
    durationRange: '8-14 Days',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Europe offers iconic landmarks, rich history, diverse cultures, stunning architecture, and world-class cuisine. Experience the Eiffel Tower, Swiss Alps, Roman Colosseum, and more.',
    expandedDescription: 'Europe offers iconic landmarks, rich history, diverse cultures, stunning architecture, and world-class cuisine. Experience the Eiffel Tower, Swiss Alps, Roman Colosseum, and more.\n\nExplore romantic Paris, scenic Switzerland, historic Rome, vibrant Amsterdam, and beautiful Prague. Witness art masterpieces, medieval castles, alpine scenery, and Mediterranean coastlines.\n\nOur packages include comfortable hotels, guided tours, inter-city transfers, Schengen visa assistance, and curated experiences. From honeymoons to family tours, Europe offers unforgettable memories.'
  },
  
  subDestinations: [
    {
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      packagesCount: 20
    },
    {
      name: 'Switzerland',
      country: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Rome',
      country: 'Italy',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80',
      packagesCount: 16
    },
    {
      name: 'Amsterdam',
      country: 'Netherlands',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80',
      packagesCount: 14
    },
    {
      name: 'Prague',
      country: 'Czech Republic',
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Vienna',
      country: 'Austria',
      image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80',
      packagesCount: 13
    }
  ],
  
  activities: [
    {
      title: 'Eiffel Tower Visit',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      location: 'Paris'
    },
    {
      title: 'Swiss Alps Tour',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=600&q=80',
      location: 'Switzerland'
    },
    {
      title: 'Colosseum Tour',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80',
      location: 'Rome'
    },
    {
      title: 'Canal Cruise',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80',
      location: 'Amsterdam'
    }
  ],
  
  groupTours: [
    {
      name: 'Paris Switzerland',
      date: 'May 10, 2026',
      totalSeats: 15,
      bookedSeats: 10,
      price: '₹89,999',
      duration: '9 Days',
      highlights: ['Paris', 'Swiss Alps', 'Scenic Beauty']
    },
    {
      name: 'Grand Europe Tour',
      date: 'June 20, 2026',
      totalSeats: 18,
      bookedSeats: 12,
      price: '₹1,25,999',
      duration: '12 Days',
      highlights: ['6 Countries', 'Major Cities', 'Iconic Sites']
    },
    {
      name: 'Italy Special',
      date: 'August 15, 2026',
      totalSeats: 12,
      bookedSeats: 8,
      price: '₹95,999',
      duration: '10 Days',
      highlights: ['Rome', 'Venice', 'Florence', 'Milan']
    },
    {
      name: 'Eastern Europe',
      date: 'September 25, 2026',
      totalSeats: 14,
      bookedSeats: 9,
      price: '₹99,999',
      duration: '11 Days',
      highlights: ['Prague', 'Vienna', 'Budapest', 'Culture']
    }
  ]
};

const europePackages = [
  {
    name: 'Paris Switzerland Dream',
    slug: 'paris-switzerland-dream',
    originalPrice: 105999,
    discountedPrice: 89999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Paris', 'Zurich', 'Lucerne', 'Interlaken'],
    rating: 4.9,
    reviewCount: 540,
    highlights: [
      'Eiffel Tower & Seine Cruise',
      'Jungfraujoch Top of Europe',
      'Mt. Titlis Cable Car',
      'Louvre Museum',
      'Swiss Chocolate Factory',
      '8 Nights 4-Star Hotels'
    ],
    hotelsIncluded: [
      { city: 'Paris', nights: '3', name: '4-Star Hotel' },
      { city: 'Switzerland', nights: '5', name: '4-Star Hotels' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '8 Nights Hotels',
        'Daily Breakfast',
        'Train Paris-Zurich',
        'All Transfers',
        'City Tours',
        'Entrance Tickets'
      ],
      excluded: [
        'Lunch & Dinner (Most Days)',
        'Schengen Visa Fees',
        'Travel Insurance',
        'Optional Tours',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80'
    ]
  },
  {
    name: 'Grand Europe Explorer',
    slug: 'grand-europe-explorer',
    originalPrice: 145999,
    discountedPrice: 125999,
    noOfDays: 12,
    noOfNights: 11,
    locations: ['Paris', 'Switzerland', 'Italy', 'Austria'],
    rating: 4.8,
    reviewCount: 480,
    highlights: [
      '6 Countries in 12 Days',
      'Paris, Rome, Venice, Vienna',
      'Swiss Alps Experience',
      'Rhine Falls',
      'Vatican City',
      'Multi-Country Tour'
    ],
    hotelsIncluded: [
      { city: 'Paris', nights: '2', name: '4-Star Hotel' },
      { city: 'Switzerland', nights: '3', name: '4-Star Hotel' },
      { city: 'Italy', nights: '4', name: '4-Star Hotel' },
      { city: 'Vienna', nights: '2', name: '4-Star Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '11 Nights Hotels',
        'Daily Breakfast',
        'Coach Transportation',
        'All City Tours',
        'Major Attractions',
        'Tour Manager'
      ],
      excluded: [
        'Lunch & Dinner',
        'Schengen Visa',
        'Travel Insurance',
        'Optional Excursions',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80'
    ]
  },
  {
    name: 'Italy Highlights Tour',
    slug: 'italy-highlights-tour',
    originalPrice: 115999,
    discountedPrice: 99999,
    noOfDays: 10,
    noOfNights: 9,
    locations: ['Rome', 'Florence', 'Venice', 'Milan'],
    rating: 4.7,
    reviewCount: 420,
    highlights: [
      'Colosseum & Vatican',
      'Venice Gondola Ride',
      'Florence Duomo',
      'Milan Cathedral',
      'Tuscany Wine Region',
      'Italian Cuisine'
    ],
    hotelsIncluded: [
      { city: 'Rome', nights: '3', name: '4-Star Hotel' },
      { city: 'Florence', nights: '2', name: '4-Star Hotel' },
      { city: 'Venice', nights: '2', name: '4-Star Hotel' },
      { city: 'Milan', nights: '2', name: '4-Star Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '9 Nights Hotels',
        'Daily Breakfast',
        'Train Tickets',
        'All Transfers',
        'City Tours',
        'Major Attractions'
      ],
      excluded: [
        'Lunch & Dinner',
        'Schengen Visa',
        'Travel Insurance',
        'Gondola Ride',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80'
    ]
  },
  {
    name: 'Eastern Europe Discovery',
    slug: 'eastern-europe-discovery',
    originalPrice: 118999,
    discountedPrice: 99999,
    noOfDays: 11,
    noOfNights: 10,
    locations: ['Prague', 'Vienna', 'Budapest', 'Krakow'],
    rating: 4.6,
    reviewCount: 380,
    highlights: [
      'Prague Castle & Charles Bridge',
      'Vienna Classical Concerts',
      'Budapest Thermal Baths',
      'Krakow Old Town',
      'Danube River Cruise',
      'Cultural Heritage'
    ],
    hotelsIncluded: [
      { city: 'Prague', nights: '3', name: '4-Star Hotel' },
      { city: 'Vienna', nights: '3', name: '4-Star Hotel' },
      { city: 'Budapest', nights: '2', name: '4-Star Hotel' },
      { city: 'Krakow', nights: '2', name: '4-Star Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '10 Nights Hotels',
        'Daily Breakfast',
        'Coach Transportation',
        'City Tours',
        'River Cruise',
        'Entrance Fees'
      ],
      excluded: [
        'Lunch & Dinner',
        'Schengen Visa',
        'Travel Insurance',
        'Concert Tickets',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
      'https://images.unsplash.com/photo-1541697800-ea5a03fe9e7d?w=800&q=80'
    ]
  },
  {
    name: 'Northern Europe Adventure',
    slug: 'northern-europe-adventure',
    originalPrice: 128999,
    discountedPrice: 109999,
    noOfDays: 12,
    noOfNights: 11,
    locations: ['Amsterdam', 'Belgium', 'Germany', 'Denmark'],
    rating: 4.7,
    reviewCount: 350,
    highlights: [
      'Amsterdam Canal Cruise',
      'Brussels Grand Place',
      'Rhine Valley Tour',
      'Copenhagen Little Mermaid',
      'Viking History',
      'Multi-Country'
    ],
    hotelsIncluded: [
      { city: 'Amsterdam', nights: '3', name: '4-Star Hotel' },
      { city: 'Brussels', nights: '2', name: '4-Star Hotel' },
      { city: 'Germany', nights: '3', name: '4-Star Hotel' },
      { city: 'Copenhagen', nights: '3', name: '4-Star Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '11 Nights Hotels',
        'Daily Breakfast',
        'Coach Travel',
        'Canal Cruise',
        'City Tours',
        'Entrance Tickets'
      ],
      excluded: [
        'Lunch & Dinner',
        'Schengen Visa',
        'Travel Insurance',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80'
    ]
  },
  {
    name: 'Complete Europe Grand Tour',
    slug: 'complete-europe-grand-tour',
    originalPrice: 165999,
    discountedPrice: 145999,
    noOfDays: 14,
    noOfNights: 13,
    locations: ['France', 'Switzerland', 'Italy', 'Austria', 'Germany'],
    rating: 4.9,
    reviewCount: 510,
    highlights: [
      '8 Countries in 14 Days',
      'All Major Cities',
      'Iconic Landmarks',
      'Swiss Alps & Italian Lakes',
      'Rhine Valley',
      'Comprehensive Tour'
    ],
    hotelsIncluded: [
      { city: 'Paris', nights: '2', name: '4-Star Hotel' },
      { city: 'Switzerland', nights: '3', name: '4-Star Hotel' },
      { city: 'Italy', nights: '4', name: '4-Star Hotel' },
      { city: 'Austria', nights: '2', name: '4-Star Hotel' },
      { city: 'Germany', nights: '2', name: '4-Star Hotel' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '13 Nights Hotels',
        'Daily Breakfast & Some Dinners',
        'Luxury Coach',
        'All Major Tours',
        'Entrance Fees',
        'Tour Manager'
      ],
      excluded: [
        'Most Lunches & Dinners',
        'Schengen Visa',
        'Travel Insurance',
        'Optional Excursions',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80'
    ]
  }
];

const europeFaqs = [
  {
    question: 'What is the best time to visit Europe?',
    answer: 'The best time is April to June and September to October for pleasant weather and fewer crowds. Summer (July-August) is peak season with warm weather but crowded. December is magical for Christmas markets.'
  },
  {
    question: 'Do Indians need a Schengen visa for Europe?',
    answer: 'Yes, Indian passport holders need a Schengen visa for most European countries. It allows travel within 26 Schengen countries. Processing takes 15-30 days. We provide complete visa assistance including documentation and appointments.'
  },
  {
    question: 'What currency is used in Europe?',
    answer: 'Euro (EUR) is used in most countries (France, Italy, Germany, Austria, Netherlands). Switzerland uses Swiss Franc (CHF), UK uses Pound (GBP), Czech Republic uses Czech Koruna. Credit cards widely accepted.'
  },
  {
    question: 'Is Europe expensive for Indian tourists?',
    answer: 'Europe can be expensive but our packages offer great value with inclusions. Costs vary by country - Switzerland and Scandinavia are pricier, Eastern Europe is more affordable. We include major expenses in packages for budget clarity.'
  },
  {
    question: 'Can vegetarians find food in Europe?',
    answer: 'Yes, vegetarian options are increasingly available in Europe. Major cities have Indian restaurants. Italian, Mediterranean, and Eastern European cuisines offer good vegetarian choices. We recommend restaurants in our itineraries.'
  },
  {
    question: 'What should I pack for a Europe trip?',
    answer: 'Pack comfortable walking shoes, layered clothing for variable weather, universal adapter, travel documents, and some Euro cash. Summer: light clothes with a jacket. Winter: warm coat, gloves, and scarf. Check specific destinations for requirements.'
  }
];

const europeReviews = [
  {
    name: 'Rajesh & Priya',
    rating: 5,
    location: 'Mumbai',
    comment: 'Dream Europe honeymoon! Paris was romantic, Swiss Alps breathtaking, and Venice magical. Excellent hotels and seamless arrangements. Unforgettable memories!',
    date: new Date('2024-01-10')
  },
  {
    name: 'Amit Sharma',
    rating: 5,
    location: 'Delhi',
    comment: 'Fantastic Grand Tour! Saw 6 countries in 12 days. Well-organized, knowledgeable guides, comfortable hotels. Every destination was amazing. Worth every penny!',
    date: new Date('2023-12-22')
  },
  {
    name: 'Kavita Patel',
    rating: 4,
    location: 'Ahmedabad',
    comment: 'Wonderful Europe trip! Italy was beautiful, Prague charming, and food delicious. Packed itinerary but covered all major sites. Highly recommended!',
    date: new Date('2023-12-10')
  }
];

async function migrateEuropeData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'europe' });
    if (destination) {
      destination = await Destination.findOneAndUpdate({ slug: 'europe' }, europeData, { new: true, upsert: true });
    } else {
      destination = await Destination.create(europeData);
    }
    console.log('✅ Europe destination migrated');

    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(europeFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(europePackages.map(pkg => ({ ...pkg, destination: destination._id })));
    
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(europeReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));

    console.log('🎉 Migration completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateEuropeData();
