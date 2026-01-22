import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/reviewModel.js';

dotenv.config();

const maldivesData = {
  destinationName: 'Maldives',
  slug: 'maldives',
  imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  category: 'international',
  type: 'country',
  isActive: true,
  
  heroSection: {
    title: 'Maldives Tour Packages',
    tagline: 'Paradise on Earth',
    startingPrice: 52999,
    durationRange: '4-7 Days',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80'
  },
  
  aboutSection: {
    shortDescription: 'Maldives, a tropical paradise with pristine beaches, crystal-clear waters, vibrant coral reefs, and luxury resorts. Perfect for honeymoons, beach lovers, and water sports enthusiasts.',
    expandedDescription: 'Maldives, a tropical paradise with pristine beaches, crystal-clear waters, vibrant coral reefs, and luxury resorts. Perfect for honeymoons, beach lovers, and water sports enthusiasts.\n\nExperience overwater bungalows, underwater restaurants, world-class diving and snorkeling, dolphin watching, and romantic beach dinners. Enjoy complete relaxation in one of the world\'s most beautiful destinations.\n\nOur packages include luxury resort stays, water activities, island hopping, spa treatments, and authentic Maldivian experiences. From romantic escapes to adventure getaways, Maldives offers the perfect tropical vacation.'
  },
  
  subDestinations: [
    {
      name: 'Male',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=600&q=80',
      packagesCount: 15
    },
    {
      name: 'Hulhumale',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1589273691080-c80e8a41535b?w=600&q=80',
      packagesCount: 12
    },
    {
      name: 'Maafushi',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
      packagesCount: 14
    },
    {
      name: 'Addu Atoll',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80',
      packagesCount: 10
    },
    {
      name: 'Baa Atoll',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&q=80',
      packagesCount: 11
    },
    {
      name: 'Ari Atoll',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      packagesCount: 13
    }
  ],
  
  activities: [
    {
      title: 'Scuba Diving',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      location: 'Various Atolls'
    },
    {
      title: 'Snorkeling',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      location: 'Coral Reefs'
    },
    {
      title: 'Dolphin Watching',
      image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80',
      location: 'Indian Ocean'
    },
    {
      title: 'Spa & Wellness',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
      location: 'Resort Spas'
    }
  ],
  
  groupTours: [
    {
      name: 'Maldives Beach Escape',
      date: 'March 15, 2026',
      totalSeats: 10,
      bookedSeats: 6,
      price: '₹52,999',
      duration: '5 Days',
      highlights: ['Beach Resort', 'Water Sports', 'Island Tour']
    },
    {
      name: 'Luxury Maldives',
      date: 'May 8, 2026',
      totalSeats: 8,
      bookedSeats: 5,
      price: '₹85,999',
      duration: '6 Days',
      highlights: ['Overwater Villa', 'Spa', 'Fine Dining']
    },
    {
      name: 'Honeymoon Special',
      date: 'July 22, 2026',
      totalSeats: 6,
      bookedSeats: 4,
      price: '₹72,999',
      duration: '5 Days',
      highlights: ['Romantic Setup', 'Private Dinners', 'Couple Spa']
    },
    {
      name: 'Adventure Maldives',
      date: 'September 10, 2026',
      totalSeats: 12,
      bookedSeats: 7,
      price: '₹59,999',
      duration: '6 Days',
      highlights: ['Diving', 'Snorkeling', 'Water Sports']
    }
  ]
};

const maldivesPackages = [
  {
    name: 'Maldives Beach Paradise',
    slug: 'maldives-beach-paradise',
    originalPrice: 62999,
    discountedPrice: 52999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Male', 'Maafushi'],
    rating: 4.8,
    reviewCount: 385,
    highlights: [
      'Beach Resort Stay',
      'Snorkeling Excursion',
      'Island Hopping Tour',
      'Sunset Fishing',
      'Beach BBQ Dinner',
      '4 Nights All-Inclusive'
    ],
    hotelsIncluded: [
      { city: 'Maafushi', nights: '4', name: 'Beach Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '4 Nights Resort Stay',
        'All Meals (Breakfast, Lunch, Dinner)',
        'Airport Transfers & Speedboat',
        'Snorkeling Trip',
        'Island Hopping',
        'Sunset Fishing'
      ],
      excluded: [
        'Travel Insurance',
        'Spa Treatments',
        'Diving Courses',
        'Optional Activities',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80'
    ]
  },
  {
    name: 'Luxury Overwater Villa',
    slug: 'luxury-overwater-villa',
    originalPrice: 98999,
    discountedPrice: 85999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Ari Atoll'],
    rating: 5.0,
    reviewCount: 290,
    highlights: [
      'Overwater Villa with Pool',
      'All-Inclusive Premium Resort',
      'Underwater Restaurant',
      'Couple Spa Treatment',
      'Private Sunset Cruise',
      'Champagne & Flowers'
    ],
    hotelsIncluded: [
      { city: 'Ari Atoll', nights: '5', name: '5-Star Luxury Resort' }
    ],
    packageDetails: {
      included: [
        'Return Airfare & Seaplane',
        '5 Nights Overwater Villa',
        'All Premium Meals & Drinks',
        'All Transfers',
        'Spa Treatment',
        'Sunset Cruise',
        'Water Activities'
      ],
      excluded: [
        'Travel Insurance',
        'Diving Certification',
        'Special Dining Experiences',
        'Excursions',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
    ]
  },
  {
    name: 'Honeymoon in Paradise',
    slug: 'honeymoon-in-paradise',
    originalPrice: 84999,
    discountedPrice: 72999,
    noOfDays: 5,
    noOfNights: 4,
    locations: ['Baa Atoll'],
    rating: 4.9,
    reviewCount: 425,
    highlights: [
      'Romantic Villa Setup',
      'Candlelight Beach Dinner',
      'Couple Spa Package',
      'Private Picnic Island',
      'Champagne Breakfast',
      'Honeymoon Photography'
    ],
    hotelsIncluded: [
      { city: 'Baa Atoll', nights: '4', name: 'Romantic Resort' }
    ],
    packageDetails: {
      included: [
        'Return Airfare & Transfers',
        '4 Nights Villa',
        'All Meals Included',
        'Romantic Setups',
        'Couple Activities',
        'Spa Treatment',
        'Special Dinners'
      ],
      excluded: [
        'Travel Insurance',
        'Additional Spa Services',
        'Scuba Diving',
        'Optional Tours',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80'
    ]
  },
  {
    name: 'Diving Adventure Package',
    slug: 'diving-adventure-package',
    originalPrice: 69999,
    discountedPrice: 59999,
    noOfDays: 6,
    noOfNights: 5,
    locations: ['Ari Atoll', 'South Male'],
    rating: 4.7,
    reviewCount: 310,
    highlights: [
      'PADI Diving Course',
      '8 Certified Dives',
      'Manta Ray Spotting',
      'Shark Diving',
      'Wreck Diving',
      'Dive Resort Stay'
    ],
    hotelsIncluded: [
      { city: 'Ari Atoll', nights: '5', name: 'Dive Resort or Similar' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '5 Nights Dive Resort',
        'All Meals',
        'Diving Equipment',
        'Dive Master Guide',
        '8 Dives',
        'Certification'
      ],
      excluded: [
        'Travel Insurance',
        'Advanced Courses',
        'Non-Diving Activities',
        'Spa Services',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80'
    ]
  },
  {
    name: 'Budget Maldives Getaway',
    slug: 'budget-maldives-getaway',
    originalPrice: 48999,
    discountedPrice: 39999,
    noOfDays: 4,
    noOfNights: 3,
    locations: ['Hulhumale', 'Maafushi'],
    rating: 4.5,
    reviewCount: 460,
    highlights: [
      'Budget-Friendly Hotels',
      'Snorkeling Trip',
      'Sandbank Visit',
      'Male City Tour',
      'Beach Time',
      '3 Nights Accommodation'
    ],
    hotelsIncluded: [
      { city: 'Hulhumale', nights: '1', name: 'Budget Hotel' },
      { city: 'Maafushi', nights: '2', name: 'Guest House' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '3 Nights Accommodation',
        'Daily Breakfast',
        'Airport Transfers',
        'Snorkeling Trip',
        'Male City Tour',
        'Sandbank Visit'
      ],
      excluded: [
        'Lunch & Dinner',
        'Travel Insurance',
        'Water Sports',
        'Spa Services',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1589273691080-c80e8a41535b?w=800&q=80',
      'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800&q=80'
    ]
  },
  {
    name: 'Complete Maldives Experience',
    slug: 'complete-maldives-experience',
    originalPrice: 78999,
    discountedPrice: 68999,
    noOfDays: 7,
    noOfNights: 6,
    locations: ['Male', 'Maafushi', 'Ari Atoll'],
    rating: 4.8,
    reviewCount: 340,
    highlights: [
      'Multi-Island Experience',
      'Resort & Local Island',
      'Diving & Snorkeling',
      'Island Hopping',
      'Water Sports Package',
      '6 Nights Various Hotels'
    ],
    hotelsIncluded: [
      { city: 'Maafushi', nights: '3', name: 'Guest House' },
      { city: 'Ari Atoll', nights: '3', name: 'Beach Resort' }
    ],
    packageDetails: {
      included: [
        'Return Airfare',
        '6 Nights Accommodation',
        'Daily Breakfast & Some Meals',
        'All Transfers',
        'Island Hopping',
        'Water Activities',
        'Snorkeling & Diving'
      ],
      excluded: [
        'Some Meals',
        'Travel Insurance',
        'Optional Excursions',
        'Spa Treatments',
        'Personal Expenses'
      ]
    },
    imageUrls: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80'
    ]
  }
];

const maldivesFaqs = [
  {
    question: 'What is the best time to visit Maldives?',
    answer: 'The best time to visit Maldives is from November to April during the dry season. The weather is sunny with minimal rainfall. May to October is the wet season with occasional showers, but also offers lower prices and fewer tourists.'
  },
  {
    question: 'Do Indians need a visa for Maldives?',
    answer: 'No, Indian passport holders get a free 30-day visa on arrival in Maldives. You need a valid passport (minimum 6 months), confirmed hotel booking, return tickets, and proof of sufficient funds.'
  },
  {
    question: 'What is the currency used in Maldives?',
    answer: 'Maldivian Rufiyaa (MVR) is the official currency, but US Dollars are widely accepted at resorts and tourist areas. Most resorts and restaurants accept credit cards. ATMs are available in Male and major islands.'
  },
  {
    question: 'Are Maldives packages expensive?',
    answer: 'Maldives offers options for all budgets. While luxury resorts are expensive, budget-friendly guesthouses on local islands provide affordable alternatives. Our packages range from budget to luxury to suit different preferences.'
  },
  {
    question: 'What activities can I do in Maldives?',
    answer: 'Popular activities include snorkeling, scuba diving, dolphin watching, island hopping, water sports, spa treatments, fishing, and beach relaxation. Maldives is famous for its underwater marine life and coral reefs.'
  },
  {
    question: 'Can vegetarians find food in Maldives?',
    answer: 'Yes, most resorts and guesthouses offer vegetarian and vegan options. Indian cuisine is available at many places. Fresh fruits, seafood alternatives, and international vegetarian dishes are widely available.'
  }
];

const maldivesReviews = [
  {
    name: 'Sneha & Karan',
    rating: 5,
    location: 'Mumbai',
    comment: 'Perfect honeymoon! Overwater villa was stunning, beach dinners romantic, and snorkeling incredible. The turquoise waters and sunsets were magical!',
    date: new Date('2024-01-25')
  },
  {
    name: 'Pradeep Sharma',
    rating: 5,
    location: 'Delhi',
    comment: 'Amazing diving experience! Saw manta rays, sharks, and beautiful coral reefs. The resort was excellent and staff very hospitable. Highly recommend!',
    date: new Date('2024-01-15')
  },
  {
    name: 'Anita Desai',
    rating: 4,
    location: 'Bangalore',
    comment: 'Beautiful Maldives! Crystal clear waters, pristine beaches, and excellent resorts. Budget package was great value. Only wish we stayed longer!',
    date: new Date('2023-12-28')
  }
];

async function migrateMaldivesData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'maldives' });
    
    if (destination) {
      console.log('📝 Updating existing Maldives destination...');
      destination = await Destination.findOneAndUpdate(
        { slug: 'maldives' },
        maldivesData,
        { new: true, upsert: true }
      );
    } else {
      console.log('🆕 Creating new Maldives destination...');
      destination = await Destination.create(maldivesData);
    }
    
    console.log('✅ Maldives destination migrated successfully');

    console.log('\n📝 Migrating FAQs...');
    await Faq.deleteMany({ destinationId: destination._id });
    await Faq.insertMany(maldivesFaqs.map(faq => ({ ...faq, destinationId: destination._id })));
    console.log(`✅ ${maldivesFaqs.length} FAQs migrated`);

    console.log('\n📦 Migrating Tour Packages...');
    await TourPackage.deleteMany({ destination: destination._id });
    const createdPackages = await TourPackage.insertMany(maldivesPackages.map(pkg => ({ ...pkg, destination: destination._id })));
    console.log(`✅ ${createdPackages.length} Tour Packages migrated`);

    console.log('\n⭐ Migrating Reviews...');
    await Review.deleteMany({ destinationId: destination._id });
    await Review.insertMany(maldivesReviews.map(review => ({ ...review, destinationId: destination._id, packageId: createdPackages[0]._id })));
    console.log(`✅ ${maldivesReviews.length} Reviews migrated`);

    console.log('\n🎉 Migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

migrateMaldivesData();
