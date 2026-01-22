import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

// Thailand destination data extracted from ThailandTourPackagesPage.jsx
const thailandData = {
  destinationName: 'Thailand',
  slug: 'thailand',
  imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Thailand Tour Packages',
    tagline: 'Land of Smiles Awaits You',
    startingPrice: 39999,
    durationRange: '5-9 Days',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Thailand, known as the Land of Smiles, is a perfect blend of ancient temples, modern cities, pristine beaches, and vibrant culture. Our Thailand tour packages offer unforgettable experiences from bustling Bangkok to serene islands.',
    expandedDescription: 'Thailand, known as the Land of Smiles, is a perfect blend of ancient temples, modern cities, pristine beaches, and vibrant culture. Our Thailand tour packages offer unforgettable experiences from bustling Bangkok to serene islands.\n\nExperience the grandeur of Bangkok\'s temples, the excitement of Pattaya\'s beaches, the beauty of Phuket\'s islands, and the adventure of Krabi\'s landscapes. Enjoy world-class shopping, delicious Thai cuisine, traditional Thai massages, and warm hospitality.\n\nOur carefully crafted packages include comfortable stays, guided tours, island hopping, cultural experiences, and authentic Thai experiences. Whether you\'re looking for adventure, relaxation, or cultural immersion, Thailand has it all.'
  },
  
  subDestinations: [
    {
      name: 'Bangkok',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80',
      packagesCount: 18
    },
    {
      name: 'Phuket',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80',
      packagesCount: 15
    },
    {
      name: 'Pattaya',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Krabi',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Chiang Mai',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=600&q=80',
      packagesCount: 9
    },
    {
      name: 'Phi Phi Islands',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80',
      packagesCount: 8
    }
  ],
  
  activities: [
    {
      title: 'Island Hopping',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80',
      location: 'Phi Phi Islands'
    },
    {
      title: 'Grand Palace Visit',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80',
      location: 'Bangkok'
    },
    {
      title: 'Floating Market',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80',
      location: 'Damnoen Saduak'
    },
    {
      title: 'Thai Massage & Spa',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
      location: 'Phuket'
    }
  ],
  
  groupTours: [
    {
      name: 'Thailand Explorer',
      date: 'April 15, 2026',
      totalSeats: 15,
      bookedSeats: 10,
      price: '₹39,999',
      duration: '6 Days',
      highlights: ['Bangkok City', 'Pattaya Beach', 'Coral Island']
    },
    {
      name: 'Bangkok Phuket Group',
      date: 'May 20, 2026',
      totalSeats: 12,
      bookedSeats: 8,
      price: '₹44,999',
      duration: '7 Days',
      highlights: ['James Bond Island', 'Phi Phi Island', 'Night Markets']
    },
    {
      name: 'Island Hopping Tour',
      date: 'July 10, 2026',
      totalSeats: 10,
      bookedSeats: 5,
      price: '₹49,999',
      duration: '8 Days',
      highlights: ['Krabi', 'Phuket', 'Island Tours']
    },
    {
      name: 'Complete Thailand',
      date: 'September 5, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹54,999',
      duration: '9 Days',
      highlights: ['Bangkok', 'Phuket', 'Chiang Mai']
    }
  ]
};

// Tour Packages for Thailand
const thailandPackages = [
  {
    name: 'Bangkok Pattaya Paradise',
    slug: 'bangkok-pattaya-paradise',
    originalPrice: 45999,
    discountedPrice: 39999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Bangkok', 'Pattaya'],
    rating: 4.8,
    reviewCount: 520,
    tripSummary: [
      {
        day: 1,
        title: 'Arrival in Bangkok',
        transfer: 'Airport to Hotel',
        activity: 'Check-in and Leisure',
        description: 'Arrive at Bangkok airport, transfer to hotel. Evening free for leisure or explore nearby markets.',
        dayImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80'
      },
      {
        day: 2,
        title: 'Bangkok City Tour',
        transfer: 'Hotel to Attractions',
        activity: 'Temple & Palace Visit',
        description: 'Visit Grand Palace, Wat Pho, Wat Arun. Evening Chao Phraya River cruise.',
        dayImage: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80'
      },
      {
        day: 3,
        title: 'Bangkok to Pattaya',
        transfer: 'Bangkok to Pattaya (2 hours)',
        activity: 'Coral Island Tour',
        description: 'Transfer to Pattaya. Enjoy water sports at Coral Island. Evening Alcazar Show.',
        dayImage: 'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80'
      },
      {
        day: 4,
        title: 'Pattaya Exploration',
        transfer: 'Local Sightseeing',
        activity: 'Beach & Shopping',
        description: 'Visit Nong Nooch Village, Art in Paradise. Beach relaxation and shopping.',
        dayImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
      },
      {
        day: 5,
        title: 'Departure',
        transfer: 'Hotel to Airport',
        activity: 'Check-out & Departure',
        description: 'Check-out from hotel. Transfer to Bangkok airport for return flight.',
        dayImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
      }
    ],
    highlights: [
      'Grand Palace & Wat Pho Temple Tour',
      'Chao Phraya River Cruise',
      'Coral Island with Water Sports',
      'Alcazar Show in Pattaya',
      'Nong Nooch Tropical Garden',
      '4 Nights Accommodation'
    ],
    hotelsIncluded: [
      { city: 'Bangkok', nights: '2', name: 'Hotel or Similar' },
      { city: 'Pattaya', nights: '2', name: 'Beach Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Accommodation',
        'Daily Breakfast',
        'Airport Transfers',
        'Bangkok City Tour',
        'Coral Island Tour',
        'Alcazar Show Tickets'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Personal Expenses',
        'Optional Activities'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
    ]
  },
  {
    name: 'Phuket Beach Escape',
    slug: 'phuket-beach-escape',
    originalPrice: 52999,
    discountedPrice: 44999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Phuket', 'Phi Phi Islands', 'Krabi'],
    rating: 4.9,
    reviewCount: 480,
    tripSummary: [
      {
        day: 1,
        title: 'Arrival in Phuket',
        transfer: 'Airport to Hotel',
        activity: 'Beach Leisure',
        description: 'Arrive in Phuket, transfer to beach resort. Evening at Patong Beach.',
        dayImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80'
      },
      {
        day: 2,
        title: 'Phi Phi Island Tour',
        transfer: 'Hotel to Pier',
        activity: 'Island Hopping',
        description: 'Full day Phi Phi Islands tour by speedboat. Snorkeling and beach activities.',
        dayImage: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80'
      },
      {
        day: 3,
        title: 'James Bond Island',
        transfer: 'Full Day Tour',
        activity: 'Phang Nga Bay',
        description: 'Explore James Bond Island, sea canoeing in Phang Nga Bay.',
        dayImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
      },
      {
        day: 4,
        title: 'Phuket City Tour',
        transfer: 'Local Sightseeing',
        activity: 'Cultural Tour',
        description: 'Visit Big Buddha, Wat Chalong, Old Phuket Town. Evening at Phuket Fantasea.',
        dayImage: 'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80'
      },
      {
        day: 5,
        title: 'Free Day',
        transfer: 'Optional Tours',
        activity: 'Leisure & Shopping',
        description: 'Free day for shopping, spa, or optional water sports activities.',
        dayImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
      },
      {
        day: 6,
        title: 'Departure',
        transfer: 'Hotel to Airport',
        activity: 'Check-out',
        description: 'Check-out and transfer to airport for return flight.',
        dayImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
      }
    ],
    highlights: [
      'Phi Phi Islands Speedboat Tour',
      'James Bond Island Excursion',
      'Phuket Fantasea Show',
      'Big Buddha & Wat Chalong',
      'Beach Resort Stay',
      '5 Nights Accommodation'
    ],
    hotelsIncluded: [
      { city: 'Phuket', nights: '5', name: 'Beach Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Beach Resort',
        'Daily Breakfast',
        'Airport Transfers',
        'Phi Phi Island Tour',
        'James Bond Island Tour',
        'Phuket Fantasea Show'
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
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
    ]
  },
  {
    name: 'Bangkok Phuket Combo',
    slug: 'bangkok-phuket-combo',
    originalPrice: 58999,
    discountedPrice: 49999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Bangkok', 'Phuket', 'Phi Phi'],
    rating: 4.7,
    reviewCount: 390,
    tripSummary: [
      {
        day: 1,
        title: 'Arrival Bangkok',
        transfer: 'Airport to Hotel',
        activity: 'City Orientation',
        description: 'Arrive in Bangkok, check-in hotel. Evening at Khao San Road.',
        dayImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80'
      },
      {
        day: 2,
        title: 'Bangkok Highlights',
        transfer: 'Full Day Tour',
        activity: 'Temples & Markets',
        description: 'Grand Palace, Wat Pho, Chatuchak Market, evening river cruise.',
        dayImage: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80'
      },
      {
        day: 3,
        title: 'Bangkok to Phuket',
        transfer: 'Domestic Flight',
        activity: 'Beach Time',
        description: 'Fly to Phuket, check-in beach resort. Relax at Patong Beach.',
        dayImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80'
      },
      {
        day: 4,
        title: 'Phi Phi Islands',
        transfer: 'Speedboat Tour',
        activity: 'Island Hopping',
        description: 'Full day Phi Phi Islands tour with snorkeling and lunch.',
        dayImage: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80'
      },
      {
        day: 5,
        title: 'Phuket City Tour',
        transfer: 'Sightseeing',
        activity: 'Cultural Sites',
        description: 'Big Buddha, Chalong Temple, Old Town, evening show.',
        dayImage: 'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80'
      },
      {
        day: 6,
        title: 'Leisure Day',
        transfer: 'Optional Activities',
        activity: 'Beach & Shopping',
        description: 'Free day for spa, shopping, or optional water activities.',
        dayImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
      },
      {
        day: 7,
        title: 'Departure',
        transfer: 'Hotel to Airport',
        activity: 'Return Journey',
        description: 'Transfer to airport for return flight.',
        dayImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
      }
    ],
    highlights: [
      'Bangkok Grand Palace & Temples',
      'Chao Phraya River Cruise',
      'Domestic Flight Bangkok-Phuket',
      'Phi Phi Islands Speedboat Tour',
      'Phuket Cultural Tour',
      '6 Nights Premium Hotels'
    ],
    hotelsIncluded: [
      { city: 'Bangkok', nights: '2', name: '4-Star Hotel or Similar' },
      { city: 'Phuket', nights: '4', name: 'Beach Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'International & Domestic Flights',
        '6 Nights Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'Bangkok City Tour',
        'Phi Phi Island Tour',
        'Cultural Show Tickets'
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
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80',
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80'
    ]
  },
  {
    name: 'Krabi Adventure Tour',
    slug: 'krabi-adventure-tour',
    originalPrice: 49999,
    discountedPrice: 42999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Krabi', 'Railay Beach', 'Ao Nang'],
    rating: 4.8,
    reviewCount: 310,
    tripSummary: [
      {
        day: 1,
        title: 'Arrival in Krabi',
        transfer: 'Airport to Resort',
        activity: 'Beach Relaxation',
        description: 'Arrive in Krabi, transfer to beach resort. Relax at Ao Nang Beach.',
        dayImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
      },
      {
        day: 2,
        title: '4 Island Tour',
        transfer: 'Longtail Boat',
        activity: 'Island Hopping',
        description: 'Visit Phra Nang Cave, Tup Island, Chicken Island, and Poda Island with snorkeling.',
        dayImage: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80'
      },
      {
        day: 3,
        title: 'Railay Beach',
        transfer: 'Boat Transfer',
        activity: 'Rock Climbing & Beach',
        description: 'Full day at Railay Beach. Optional rock climbing or beach relaxation.',
        dayImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80'
      },
      {
        day: 4,
        title: 'Tiger Cave Temple',
        transfer: 'Local Tour',
        activity: 'Cultural Visit',
        description: 'Visit Tiger Cave Temple, Emerald Pool, and hot springs.',
        dayImage: 'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80'
      },
      {
        day: 5,
        title: 'Departure',
        transfer: 'Resort to Airport',
        activity: 'Check-out',
        description: 'Final shopping at Ao Nang, transfer to airport.',
        dayImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
      }
    ],
    highlights: [
      '4 Island Longtail Boat Tour',
      'Railay Beach Visit',
      'Rock Climbing Adventure',
      'Tiger Cave Temple',
      'Emerald Pool & Hot Springs',
      'Beach Resort Stay'
    ],
    hotelsIncluded: [
      { city: 'Krabi', nights: '4', name: 'Beach Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Beach Resort',
        'Daily Breakfast',
        'Airport Transfers',
        '4 Island Tour',
        'Railay Beach Trip',
        'Tiger Cave Temple Tour'
      ],
      excluded: [
        'Lunch & Dinner',
        'Visa Fees',
        'Travel Insurance',
        'Rock Climbing Fees',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80',
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80'
    ]
  },
  {
    name: 'Chiang Mai Cultural',
    slug: 'chiang-mai-cultural',
    originalPrice: 52999,
    discountedPrice: 45999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Chiang Mai', 'Chiang Rai', 'Doi Suthep'],
    rating: 4.6,
    reviewCount: 260,
    tripSummary: [
      {
        day: 1,
        title: 'Arrival Chiang Mai',
        transfer: 'Airport to Hotel',
        activity: 'Night Bazaar',
        description: 'Arrive in Chiang Mai, check-in hotel. Evening at famous Night Bazaar.',
        dayImage: 'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80'
      },
      {
        day: 2,
        title: 'Doi Suthep Temple',
        transfer: 'Half Day Tour',
        activity: 'Temple Visit',
        description: 'Visit Doi Suthep Temple, Phuping Palace, and hill tribe village.',
        dayImage: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80'
      },
      {
        day: 3,
        title: 'Elephant Sanctuary',
        transfer: 'Full Day Tour',
        activity: 'Elephant Care',
        description: 'Ethical elephant sanctuary visit. Feed, bathe, and interact with elephants.',
        dayImage: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80'
      },
      {
        day: 4,
        title: 'Chiang Rai Day Trip',
        transfer: 'Full Day Excursion',
        activity: 'White & Blue Temple',
        description: 'Visit White Temple, Blue Temple, Black House, and Golden Triangle.',
        dayImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80'
      },
      {
        day: 5,
        title: 'Cooking Class',
        transfer: 'Half Day Activity',
        activity: 'Thai Cooking',
        description: 'Morning market tour and Thai cooking class. Afternoon spa and massage.',
        dayImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
      },
      {
        day: 6,
        title: 'Departure',
        transfer: 'Hotel to Airport',
        activity: 'Return Journey',
        description: 'Last minute shopping, transfer to airport.',
        dayImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
      }
    ],
    highlights: [
      'Doi Suthep Temple Visit',
      'Ethical Elephant Sanctuary',
      'Chiang Rai White Temple',
      'Blue Temple & Black House',
      'Thai Cooking Class',
      'Traditional Thai Massage'
    ],
    hotelsIncluded: [
      { city: 'Chiang Mai', nights: '5', name: 'Boutique Hotel or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Accommodation',
        'Daily Breakfast',
        'Airport Transfers',
        'All Sightseeing Tours',
        'Elephant Sanctuary',
        'Cooking Class'
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
      'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80',
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80'
    ]
  },
  {
    name: 'Complete Thailand',
    slug: 'complete-thailand',
    originalPrice: 74999,
    discountedPrice: 64999,
    noOfDays: 9,
    noOfNights: 8,
    locations: ['Bangkok', 'Pattaya', 'Phuket', 'Krabi'],
    rating: 4.9,
    reviewCount: 420,
    tripSummary: [
      {
        day: 1,
        title: 'Arrival Bangkok',
        transfer: 'Airport to Hotel',
        activity: 'Welcome to Thailand',
        description: 'Arrive in Bangkok, check-in hotel. Evening free for leisure.',
        dayImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80'
      },
      {
        day: 2,
        title: 'Bangkok City Tour',
        transfer: 'Full Day Tour',
        activity: 'Temples & Culture',
        description: 'Grand Palace, Wat Pho, Wat Arun, evening river cruise.',
        dayImage: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80'
      },
      {
        day: 3,
        title: 'Bangkok to Pattaya',
        transfer: '2 Hour Drive',
        activity: 'Coral Island',
        description: 'Transfer to Pattaya, Coral Island tour with water sports.',
        dayImage: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80'
      },
      {
        day: 4,
        title: 'Pattaya Exploration',
        transfer: 'Local Tours',
        activity: 'Shows & Attractions',
        description: 'Nong Nooch Village, Art in Paradise, Alcazar Show.',
        dayImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
      },
      {
        day: 5,
        title: 'Pattaya to Phuket',
        transfer: 'Domestic Flight',
        activity: 'Beach Arrival',
        description: 'Fly to Phuket, check-in beach resort. Patong Beach evening.',
        dayImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80'
      },
      {
        day: 6,
        title: 'Phi Phi Islands',
        transfer: 'Speedboat Tour',
        activity: 'Island Paradise',
        description: 'Full day Phi Phi Islands tour with snorkeling and lunch.',
        dayImage: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80'
      },
      {
        day: 7,
        title: 'Phuket to Krabi',
        transfer: '2 Hour Transfer',
        activity: '4 Island Tour',
        description: 'Transfer to Krabi, afternoon 4 Island tour.',
        dayImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
      },
      {
        day: 8,
        title: 'Krabi Exploration',
        transfer: 'Local Tours',
        activity: 'Railay & Tiger Cave',
        description: 'Railay Beach visit, Tiger Cave Temple, hot springs.',
        dayImage: 'https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80'
      },
      {
        day: 9,
        title: 'Departure',
        transfer: 'Krabi to Airport',
        activity: 'Return Journey',
        description: 'Transfer to Krabi or Bangkok airport for return flight.',
        dayImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80'
      }
    ],
    highlights: [
      'Bangkok Temples & River Cruise',
      'Pattaya Coral Island & Shows',
      'Phuket Phi Phi Islands',
      'Krabi 4 Island Tour',
      'Railay Beach Adventure',
      '3 Domestic Flights Included'
    ],
    hotelsIncluded: [
      { city: 'Bangkok', nights: '2', name: '4-Star Hotel or Similar' },
      { city: 'Pattaya', nights: '2', name: 'Beach Resort or Similar' },
      { city: 'Phuket', nights: '2', name: 'Beach Resort or Similar' },
      { city: 'Krabi', nights: '2', name: 'Beach Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'International & Domestic Flights',
        '8 Nights Premium Accommodation',
        'Daily Breakfast',
        'All Transfers',
        'All Major Tours',
        'Island Hopping',
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
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80'
    ]
  }
];

const thailandFaqs = [
  {
    question: 'What is the best time to visit Thailand?',
    answer: 'The best time to visit Thailand is from November to February when the weather is cool and dry. March to May is hot season, while June to October is monsoon season with occasional rainfall.'
  },
  {
    question: 'Do I need a visa for Thailand?',
    answer: 'Indian passport holders get visa on arrival for up to 15 days or can apply for e-visa for 60 days. We can assist you with the visa process as part of our package.'
  },
  {
    question: 'What is included in the package price?',
    answer: 'Our packages typically include flights, accommodation, daily breakfast, airport transfers, sightseeing tours, and some meals. Activities like island tours may vary by package.'
  },
  {
    question: 'Is Thailand safe for tourists?',
    answer: 'Yes, Thailand is very safe and tourist-friendly. The locals are welcoming and helpful. Tourist police are available in major tourist areas for assistance.'
  },
  {
    question: 'What currency is used in Thailand?',
    answer: 'Thai Baht (THB) is the official currency. Currency exchange is available at airports, banks, and authorized money changers. Cards are widely accepted in cities.'
  },
  {
    question: 'Can I customize my Thailand tour?',
    answer: 'Absolutely! We offer flexible packages. You can add destinations, change hotels, include specific activities, or extend your stay based on your preferences and budget.'
  }
];

// Reviews for Thailand
const thailandReviews = [
  {
    name: 'Amit Kumar',
    rating: 5,
    location: 'Delhi',
    comment: 'Amazing Thailand trip! Bangkok temples were beautiful, Phuket beaches were stunning. Great hotels and delicious food throughout the trip!',
    date: new Date('2024-01-15')
  },
  {
    name: 'Sneha Desai',
    rating: 5,
    location: 'Gujarat',
    comment: 'Perfect family vacation! Kids loved the Coral Island activities. Bangkok shopping and Pattaya water sports were highlights. Excellent service!',
    date: new Date('2023-12-20')
  },
  {
    name: 'Rajesh Iyer',
    rating: 4,
    location: 'Chennai',
    comment: 'Great value for money! Phi Phi Islands were breathtaking. Only minor issue was some crowded tourist spots but overall fantastic experience!',
    date: new Date('2023-11-10')
  }
];

async function migrateThailandData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if Thailand destination already exists
    let destination = await Destination.findOne({ slug: 'thailand' });
    
    if (destination) {
      console.log('📝 Updating existing Thailand destination...');
      destination = await Destination.findOneAndUpdate(
        { slug: 'thailand' },
        thailandData,
        { new: true, upsert: true }
      );
    } else {
      console.log('🆕 Creating new Thailand destination...');
      destination = await Destination.create(thailandData);
    }
    
    console.log('✅ Thailand destination migrated successfully');
    console.log(`   Destination ID: ${destination._id}`);

    // Migrate FAQs
    console.log('\n📝 Migrating FAQs...');
    
    // Delete existing FAQs for Thailand
    await Faq.deleteMany({ destinationId: destination._id });
    
    // Create new FAQs
    const faqsWithDestinationId = thailandFaqs.map(faq => ({
      ...faq,
      destinationId: destination._id
    }));
    
    await Faq.insertMany(faqsWithDestinationId);
    console.log(`✅ ${thailandFaqs.length} FAQs migrated successfully`);

    // Migrate Tour Packages
    console.log('\n📦 Migrating Tour Packages...');
    
    // Delete existing packages for Thailand
    await TourPackage.deleteMany({ destination: destination._id });
    
    // Create new packages with destination reference
    const packagesWithDestination = thailandPackages.map(pkg => ({
      ...pkg,
      destination: destination._id
    }));
    
    const createdPackages = await TourPackage.insertMany(packagesWithDestination);
    console.log(`✅ ${createdPackages.length} Tour Packages migrated successfully`);

    // Migrate Reviews
    console.log('\n⭐ Migrating Reviews...');
    
    // Delete existing reviews for Thailand
    await Review.deleteMany({ destinationId: destination._id });
    
    // Create new reviews with destination and first package reference
    const reviewsWithDestination = thailandReviews.map(review => ({
      ...review,
      destinationId: destination._id,
      packageId: createdPackages[0]._id // Link to first package
    }));
    
    const createdReviews = await Review.insertMany(reviewsWithDestination);
    console.log(`✅ ${createdReviews.length} Reviews migrated successfully`);

    console.log('\n🎉 Migration completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - Destination: ${destination.destinationName}`);
    console.log(`   - Slug: ${destination.slug}`);
    console.log(`   - Sub-destinations: ${destination.subDestinations.length}`);
    console.log(`   - Activities: ${destination.activities.length}`);
    console.log(`   - Group Tours: ${destination.groupTours.length}`);
    console.log(`   - Tour Packages: ${createdPackages.length}`);
    console.log(`   - Reviews: ${createdReviews.length}`);
    console.log(`   - FAQs: ${thailandFaqs.length}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

// Run migration
migrateThailandData();
