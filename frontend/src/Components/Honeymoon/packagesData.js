// Honeymoon packages data

export const internationalHoneymoonPackages = (navigate) => [
  {
    id: 1,
    title: "Romantic Maldives - 5 Days of Paradise",
    destination: "Maldives",
    price: "89,999",
    originalPrice: "1,05,999",
    duration: "4N/5D",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    rating: 4.9,
    reviews: 245,
    highlights: ["Overwater Villa", "Private Beach Dinner", "Couple Spa"],
    dates: "Available Year Round",
    onClick: () => navigate('/package/maldives-honeymoon')
  },
  {
    id: 2,
    title: "Bali Bliss - Romantic Island Escape",
    destination: "Bali",
    price: "65,999",
    originalPrice: "78,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    rating: 4.8,
    reviews: 198,
    highlights: ["Ubud Rice Terraces", "Couple's Massage", "Sunset at Tanah Lot"],
    dates: "10 batches available",
    onClick: () => navigate('/package/bali-honeymoon')
  },
  {
    id: 3,
    title: "Switzerland Romance - 7 Days Alpine Love",
    destination: "Switzerland",
    price: "1,45,999",
    originalPrice: "1,65,999",
    duration: "6N/7D",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    rating: 4.9,
    reviews: 167,
    highlights: ["Jungfraujoch", "Interlaken", "Lucerne Lake Cruise"],
    dates: "May-Sep batches",
    onClick: () => navigate('/package/switzerland-honeymoon')
  },
  {
    id: 4,
    title: "Paris & Switzerland - Love in Europe",
    destination: "Europe",
    price: "1,89,999",
    originalPrice: "2,15,999",
    duration: "8N/9D",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    rating: 4.9,
    reviews: 223,
    highlights: ["Eiffel Tower", "Seine River Cruise", "Swiss Alps"],
    dates: "12 batches available",
    onClick: () => navigate('/package/paris-switzerland-honeymoon')
  },
  {
    id: 5,
    title: "Mauritius Paradise - Beach & Romance",
    destination: "Mauritius",
    price: "72,999",
    originalPrice: "88,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80",
    rating: 4.8,
    reviews: 189,
    highlights: ["Ile aux Cerfs", "Underwater Walk", "Sunset Catamaran"],
    dates: "Available Year Round",
    onClick: () => navigate('/package/mauritius-honeymoon')
  },
  {
    id: 6,
    title: "Dubai Luxury - Royal Honeymoon",
    destination: "Dubai",
    price: "58,999",
    originalPrice: "69,999",
    duration: "4N/5D",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    rating: 4.7,
    reviews: 312,
    highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise"],
    dates: "15 batches available",
    onClick: () => navigate('/package/dubai-honeymoon')
  }
];

export const domesticHoneymoonPackages = (navigate) => [
  {
    id: 7,
    title: "Kashmir - Heaven on Earth for Lovers",
    destination: "Kashmir",
    price: "28,999",
    originalPrice: "34,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80",
    rating: 4.8,
    reviews: 276,
    highlights: ["Shikara Ride", "Gulmarg", "Pahalgam Valley"],
    dates: "Mar-Oct batches",
    onClick: () => navigate('/package/kashmir-honeymoon')
  },
  {
    id: 8,
    title: "Kerala Backwaters - Romance in God's Own Country",
    destination: "Kerala",
    price: "24,999",
    originalPrice: "29,999",
    duration: "4N/5D",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    rating: 4.7,
    reviews: 234,
    highlights: ["Houseboat Stay", "Munnar Tea Gardens", "Alleppey Backwaters"],
    dates: "Available Year Round",
    onClick: () => navigate('/package/kerala-honeymoon')
  },
  {
    id: 9,
    title: "Andaman Islands - Tropical Romance",
    destination: "Andaman",
    price: "32,999",
    originalPrice: "39,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    rating: 4.8,
    reviews: 198,
    highlights: ["Radhanagar Beach", "Scuba Diving", "Ross Island"],
    dates: "Oct-May batches",
    onClick: () => navigate('/package/andaman-honeymoon')
  },
  {
    id: 10,
    title: "Goa Beach Romance - Sun, Sand & Love",
    destination: "Goa",
    price: "18,999",
    originalPrice: "23,999",
    duration: "3N/4D",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    rating: 4.6,
    reviews: 412,
    highlights: ["Beach Shacks", "Dudhsagar Falls", "Candolim Beach"],
    dates: "12 batches available",
    onClick: () => navigate('/package/goa-honeymoon')
  },
  {
    id: 11,
    title: "Manali Honeymoon - Snow & Romance",
    destination: "Manali",
    price: "22,999",
    originalPrice: "27,999",
    duration: "4N/5D",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    rating: 4.7,
    reviews: 267,
    highlights: ["Rohtang Pass", "Solang Valley", "Hot Springs"],
    dates: "Available Year Round",
    onClick: () => navigate('/package/manali-honeymoon')
  },
  {
    id: 12,
    title: "Udaipur Royal - Palace Romance",
    destination: "Rajasthan",
    price: "26,999",
    originalPrice: "31,999",
    duration: "3N/4D",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
    rating: 4.8,
    reviews: 189,
    highlights: ["Lake Palace", "City Palace", "Boat Ride"],
    dates: "Available Year Round",
    onClick: () => navigate('/package/udaipur-honeymoon')
  }
];

export const honeymoonDestinations = [
  {
    id: 1,
    name: "Maldives",
    slug: "maldives",
    type: "international",
    price: "89,999",
    duration: "4N/5D",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    description: "Overwater villas and pristine beaches",
    popular: true
  },
  {
    id: 2,
    name: "Bali",
    slug: "bali",
    type: "international",
    price: "65,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    description: "Tropical paradise with ancient temples",
    popular: true
  },
  {
    id: 3,
    name: "Switzerland",
    slug: "switzerland",
    type: "international",
    price: "1,45,999",
    duration: "6N/7D",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    description: "Alpine romance with stunning landscapes",
    popular: true
  },
  {
    id: 4,
    name: "Kashmir",
    slug: "kashmir",
    type: "domestic",
    price: "28,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80",
    description: "Heaven on earth for romantic getaways",
    popular: true
  },
  {
    id: 5,
    name: "Kerala",
    slug: "kerala",
    type: "domestic",
    price: "24,999",
    duration: "4N/5D",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    description: "Backwater romance in God's own country",
    popular: true
  },
  {
    id: 6,
    name: "Andaman",
    slug: "andaman",
    type: "domestic",
    price: "32,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    description: "Pristine beaches and crystal waters",
    popular: false
  },
  {
    id: 7,
    name: "Mauritius",
    slug: "mauritius",
    type: "international",
    price: "72,999",
    duration: "5N/6D",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80",
    description: "Exotic island paradise for couples",
    popular: false
  },
  {
    id: 8,
    name: "Udaipur",
    slug: "udaipur",
    type: "domestic",
    price: "26,999",
    duration: "3N/4D",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
    description: "Royal palaces and lakeside romance",
    popular: false
  }
];
