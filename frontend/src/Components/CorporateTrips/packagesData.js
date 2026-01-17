// Corporate Trips Packages Data

export const internationalCorporateTrips = (navigate) => [
  {
    id: 'corp-int-1',
    title: 'Singapore Corporate Retreat',
    destination: 'Singapore',
    duration: '4 Days / 3 Nights',
    price: '₹75,000',
    rating: 4.8,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1952',
    highlights: [
      'Marina Bay Conference Center',
      'Team Building Activities',
      'Sentosa Island Outing',
      'Networking Dinner'
    ],
    teamSize: '15-50 people',
    onClick: () => navigate('/international-trips/singapore')
  },
  {
    id: 'corp-int-2',
    title: 'Dubai Business & Leisure',
    destination: 'Dubai',
    duration: '5 Days / 4 Nights',
    price: '₹85,000',
    rating: 4.9,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    highlights: [
      'Luxury Hotel Stay',
      'Desert Safari Team Building',
      'Dhow Cruise Dinner',
      'Burj Khalifa Visit'
    ],
    teamSize: '10-40 people',
    onClick: () => navigate('/international-trips/dubai')
  },
  {
    id: 'corp-int-3',
    title: 'Thailand Offsite Package',
    destination: 'Thailand',
    duration: '5 Days / 4 Nights',
    price: '₹55,000',
    rating: 4.7,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070',
    highlights: [
      'Bangkok & Pattaya',
      'Beach Team Activities',
      'Cultural Experience',
      'Gala Dinner'
    ],
    teamSize: '20-60 people',
    onClick: () => navigate('/international-trips/thailand')
  },
  {
    id: 'corp-int-4',
    title: 'Bali Corporate Getaway',
    destination: 'Bali',
    duration: '6 Days / 5 Nights',
    price: '₹68,000',
    rating: 4.8,
    reviews: 41,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038',
    highlights: [
      'Beachfront Resort',
      'Water Sports Activities',
      'Cultural Workshops',
      'Spa & Wellness'
    ],
    teamSize: '12-35 people',
    onClick: () => navigate('/international-trips/bali')
  },
  {
    id: 'corp-int-5',
    title: 'Malaysia Team Building',
    destination: 'Malaysia',
    duration: '4 Days / 3 Nights',
    price: '₹52,000',
    rating: 4.6,
    reviews: 33,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064',
    highlights: [
      'Kuala Lumpur Conference',
      'Genting Highlands Retreat',
      'City Tour & Shopping',
      'Team Dinner'
    ],
    teamSize: '15-45 people',
    onClick: () => navigate('/international-trips/malaysia')
  },
  {
    id: 'corp-int-6',
    title: 'Vietnam Corporate Tour',
    destination: 'Vietnam',
    duration: '5 Days / 4 Nights',
    price: '₹62,000',
    rating: 4.7,
    reviews: 29,
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2070',
    highlights: [
      'Hanoi & Ha Long Bay',
      'Cruise Team Building',
      'Cultural Activities',
      'Networking Events'
    ],
    teamSize: '18-50 people',
    onClick: () => navigate('/international-trips/vietnam')
  }
];

export const domesticCorporateTrips = (navigate) => [
  {
    id: 'corp-dom-1',
    title: 'Goa Corporate Offsite',
    destination: 'Goa',
    duration: '3 Days / 2 Nights',
    price: '₹22,000',
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974',
    highlights: [
      'Beach Resort Stay',
      'Adventure Activities',
      'Beach Party',
      'Water Sports'
    ],
    teamSize: '20-80 people',
    onClick: () => navigate('/domestic-trips/goa')
  },
  {
    id: 'corp-dom-2',
    title: 'Jaipur Heritage Offsite',
    destination: 'Jaipur',
    duration: '3 Days / 2 Nights',
    price: '₹25,000',
    rating: 4.8,
    reviews: 54,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070',
    highlights: [
      'Heritage Hotel Stay',
      'Cultural Team Building',
      'Rajasthani Evening',
      'City Palace Visit'
    ],
    teamSize: '15-60 people',
    onClick: () => navigate('/domestic-trips/jaipur')
  },
  {
    id: 'corp-dom-3',
    title: 'Jim Corbett Retreat',
    destination: 'Jim Corbett',
    duration: '3 Days / 2 Nights',
    price: '₹28,000',
    rating: 4.9,
    reviews: 48,
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2076',
    highlights: [
      'Wildlife Resort',
      'Safari Experience',
      'Nature Activities',
      'Bonfire Night'
    ],
    teamSize: '12-40 people',
    onClick: () => navigate('/domestic-trips/jim-corbett')
  },
  {
    id: 'corp-dom-4',
    title: 'Udaipur Royal Offsite',
    destination: 'Udaipur',
    duration: '3 Days / 2 Nights',
    price: '₹32,000',
    rating: 4.9,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070',
    highlights: [
      'Lake Palace Stay',
      'Boat Team Building',
      'Royal Dinner',
      'City Heritage Tour'
    ],
    teamSize: '10-35 people',
    onClick: () => navigate('/domestic-trips/udaipur')
  },
  {
    id: 'corp-dom-5',
    title: 'Rishikesh Adventure Camp',
    destination: 'Rishikesh',
    duration: '3 Days / 2 Nights',
    price: '₹20,000',
    rating: 4.6,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070',
    highlights: [
      'River Rafting',
      'Adventure Activities',
      'Yoga Sessions',
      'Camping by Ganges'
    ],
    teamSize: '15-50 people',
    onClick: () => navigate('/domestic-trips/rishikesh')
  },
  {
    id: 'corp-dom-6',
    title: 'Munnar Tea Estate Retreat',
    destination: 'Munnar',
    duration: '4 Days / 3 Nights',
    price: '₹26,000',
    rating: 4.7,
    reviews: 39,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2032',
    highlights: [
      'Hill Resort Stay',
      'Tea Plantation Visit',
      'Nature Team Building',
      'Wellness Activities'
    ],
    teamSize: '12-40 people',
    onClick: () => navigate('/domestic-trips/munnar')
  }
];

export const corporateDestinations = [
  {
    id: 1,
    name: 'Singapore',
    slug: 'singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1952',
    type: 'international',
    teamSize: '15-50',
    popular: true
  },
  {
    id: 2,
    name: 'Dubai',
    slug: 'dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    type: 'international',
    teamSize: '10-40',
    popular: true
  },
  {
    id: 3,
    name: 'Thailand',
    slug: 'thailand',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070',
    type: 'international',
    teamSize: '20-60',
    popular: false
  },
  {
    id: 4,
    name: 'Goa',
    slug: 'goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974',
    type: 'domestic',
    teamSize: '20-80',
    popular: true
  },
  {
    id: 5,
    name: 'Jaipur',
    slug: 'jaipur',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070',
    type: 'domestic',
    teamSize: '15-60',
    popular: true
  },
  {
    id: 6,
    name: 'Jim Corbett',
    slug: 'jim-corbett',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2076',
    type: 'domestic',
    teamSize: '12-40',
    popular: false
  },
  {
    id: 7,
    name: 'Udaipur',
    slug: 'udaipur',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070',
    type: 'domestic',
    teamSize: '10-35',
    popular: false
  },
  {
    id: 8,
    name: 'Rishikesh',
    slug: 'rishikesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070',
    type: 'domestic',
    teamSize: '15-50',
    popular: false
  }
];
