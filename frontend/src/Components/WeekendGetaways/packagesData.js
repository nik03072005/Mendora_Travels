// Weekend Getaways Packages Data

export const internationalWeekendGetaways = (navigate) => [
  {
    id: 'weekend-int-1',
    title: 'Dubai Weekend Special',
    destination: 'Dubai',
    duration: '3 Days / 2 Nights',
    price: '₹35,000',
    rating: 4.8,
    reviews: 62,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    highlights: [
      'Burj Khalifa Visit',
      'Desert Safari',
      'Dubai Mall Shopping',
      'Marina Cruise'
    ],
    onClick: () => navigate('/international-trips/dubai')
  },
  {
    id: 'weekend-int-2',
    title: 'Singapore City Break',
    destination: 'Singapore',
    duration: '3 Days / 2 Nights',
    price: '₹42,000',
    rating: 4.7,
    reviews: 48,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1952',
    highlights: [
      'Gardens by the Bay',
      'Marina Bay Sands',
      'Sentosa Island',
      'Universal Studios'
    ],
    onClick: () => navigate('/international-trips/singapore')
  },
  {
    id: 'weekend-int-3',
    title: 'Bangkok Quick Escape',
    destination: 'Bangkok',
    duration: '3 Days / 2 Nights',
    price: '₹25,000',
    rating: 4.6,
    reviews: 71,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070',
    highlights: [
      'Grand Palace',
      'Floating Market',
      'Street Food Tour',
      'Spa Experience'
    ],
    onClick: () => navigate('/international-trips/thailand')
  },
  {
    id: 'weekend-int-4',
    title: 'Bali Beach Weekend',
    destination: 'Bali',
    duration: '3 Days / 2 Nights',
    price: '₹32,000',
    rating: 4.9,
    reviews: 55,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038',
    highlights: [
      'Beach Relaxation',
      'Uluwatu Temple',
      'Water Sports',
      'Balinese Massage'
    ],
    onClick: () => navigate('/international-trips/bali')
  },
  {
    id: 'weekend-int-5',
    title: 'Colombo Short Trip',
    destination: 'Sri Lanka',
    duration: '3 Days / 2 Nights',
    price: '₹22,000',
    rating: 4.5,
    reviews: 39,
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2071',
    highlights: [
      'City Tour',
      'Gangaramaya Temple',
      'Local Markets',
      'Beach Time'
    ],
    onClick: () => navigate('/international-trips/sri-lanka')
  },
  {
    id: 'weekend-int-6',
    title: 'Kuala Lumpur Weekend',
    destination: 'Malaysia',
    duration: '3 Days / 2 Nights',
    price: '₹28,000',
    rating: 4.6,
    reviews: 44,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064',
    highlights: [
      'Petronas Towers',
      'Batu Caves',
      'Shopping Spree',
      'Street Food Tour'
    ],
    onClick: () => navigate('/international-trips/malaysia')
  }
];

export const domesticWeekendGetaways = (navigate) => [
  {
    id: 'weekend-dom-1',
    title: 'Goa Beach Weekend',
    destination: 'Goa',
    duration: '2 Days / 1 Night',
    price: '₹8,999',
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974',
    highlights: [
      'Beach Hopping',
      'Water Sports',
      'Beach Shacks',
      'Nightlife'
    ],
    onClick: () => navigate('/domestic-trips/goa')
  },
  {
    id: 'weekend-dom-2',
    title: 'Jaipur Heritage Weekend',
    destination: 'Jaipur',
    duration: '2 Days / 1 Night',
    price: '₹7,999',
    rating: 4.8,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070',
    highlights: [
      'Amber Fort',
      'City Palace',
      'Hawa Mahal',
      'Local Markets'
    ],
    onClick: () => navigate('/domestic-trips/jaipur')
  },
  {
    id: 'weekend-dom-3',
    title: 'Rishikesh Adventure',
    destination: 'Rishikesh',
    duration: '2 Days / 1 Night',
    price: '₹6,999',
    rating: 4.6,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070',
    highlights: [
      'River Rafting',
      'Lakshman Jhula',
      'Ganga Aarti',
      'Yoga Session'
    ],
    onClick: () => navigate('/domestic-trips/rishikesh')
  },
  {
    id: 'weekend-dom-4',
    title: 'Udaipur Lake City',
    destination: 'Udaipur',
    duration: '2 Days / 1 Night',
    price: '₹9,999',
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070',
    highlights: [
      'Lake Pichola',
      'City Palace',
      'Boat Ride',
      'Sunset Views'
    ],
    onClick: () => navigate('/domestic-trips/udaipur')
  },
  {
    id: 'weekend-dom-5',
    title: 'Mussoorie Hill Escape',
    destination: 'Mussoorie',
    duration: '2 Days / 1 Night',
    price: '₹7,500',
    rating: 4.5,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=2070',
    highlights: [
      'Mall Road',
      'Kempty Falls',
      'Gun Hill',
      'Cable Car Ride'
    ],
    onClick: () => navigate('/domestic-trips/mussoorie')
  },
  {
    id: 'weekend-dom-6',
    title: 'Lonavala Quick Trip',
    destination: 'Lonavala',
    duration: '2 Days / 1 Night',
    price: '₹6,500',
    rating: 4.4,
    reviews: 82,
    image: 'https://images.unsplash.com/photo-1588019971874-d5d17c73e025?q=80&w=2070',
    highlights: [
      'Tiger Point',
      'Bhushi Dam',
      'Karla Caves',
      'Local Chikki'
    ],
    onClick: () => navigate('/domestic-trips/lonavala')
  },
  {
    id: 'weekend-dom-7',
    title: 'Shimla Short Break',
    destination: 'Shimla',
    duration: '2 Days / 1 Night',
    price: '₹8,500',
    rating: 4.6,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070',
    highlights: [
      'Mall Road',
      'Jakhu Temple',
      'Ridge',
      'Toy Train'
    ],
    onClick: () => navigate('/domestic-trips/shimla')
  },
  {
    id: 'weekend-dom-8',
    title: 'Agra Taj Mahal Tour',
    destination: 'Agra',
    duration: '2 Days / 1 Night',
    price: '₹7,500',
    rating: 4.7,
    reviews: 91,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071',
    highlights: [
      'Taj Mahal',
      'Agra Fort',
      'Fatehpur Sikri',
      'Local Crafts'
    ],
    onClick: () => navigate('/domestic-trips/agra')
  }
];

export const weekendDestinations = [
  {
    id: 1,
    name: 'Goa',
    slug: 'goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974',
    type: 'domestic',
    duration: '2D/1N',
    popular: true
  },
  {
    id: 2,
    name: 'Dubai',
    slug: 'dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    type: 'international',
    duration: '3D/2N',
    popular: true
  },
  {
    id: 3,
    name: 'Jaipur',
    slug: 'jaipur',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070',
    type: 'domestic',
    duration: '2D/1N',
    popular: true
  },
  {
    id: 4,
    name: 'Rishikesh',
    slug: 'rishikesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070',
    type: 'domestic',
    duration: '2D/1N',
    popular: false
  },
  {
    id: 5,
    name: 'Bangkok',
    slug: 'thailand',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070',
    type: 'international',
    duration: '3D/2N',
    popular: true
  },
  {
    id: 6,
    name: 'Udaipur',
    slug: 'udaipur',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070',
    type: 'domestic',
    duration: '2D/1N',
    popular: false
  },
  {
    id: 7,
    name: 'Bali',
    slug: 'bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038',
    type: 'international',
    duration: '3D/2N',
    popular: false
  },
  {
    id: 8,
    name: 'Mussoorie',
    slug: 'mussoorie',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=2070',
    type: 'domestic',
    duration: '2D/1N',
    popular: false
  }
];
