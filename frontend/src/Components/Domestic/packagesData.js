// All package data for domestic destinations

export const bestSellerPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "6-Day Manali Group Trip with Solang Valley & Rohtang Pass",
    price: "12,999",
    originalPrice: "14,999",
    duration: "5N/6D",
    route: "Manali - Manali",
    dates: "24 Jan, 14 Feb",
    highlights: ["Rohtang Pass", "Solang Valley", "Manali Mall Road"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/himachal-pradesh')
  },
  {
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80",
    title: "Kashmir Paradise - 7 Days Heaven on Earth",
    price: "18,999",
    originalPrice: "21,999",
    duration: "6N/7D",
    route: "Srinagar - Srinagar",
    dates: "28 Jan, 11 Feb +6 batches",
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/kashmir')
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    title: "Ladakh Adventure - 8 Days Bike Trip to Leh",
    price: "24,999",
    originalPrice: "27,999",
    duration: "7N/8D",
    route: "Manali - Leh",
    dates: "15 May, 22 May +12 batches",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La"],
    onClick: () => navigate('/domestic-trips/ladakh')
  }
];

export const kashmirPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80",
    title: "Kashmir Paradise Package - Dal Lake & Gulmarg",
    price: "16,999",
    originalPrice: "19,999",
    duration: "5N/6D",
    route: "Srinagar - Srinagar",
    dates: "20 Jan, 27 Jan",
    highlights: ["Shikara Ride", "Gulmarg Gondola", "Mughal Gardens"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/kashmir')
  },
  {
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=80",
    title: "Complete Kashmir Tour - 8 Days",
    price: "22,999",
    originalPrice: "25,999",
    duration: "7N/8D",
    route: "Srinagar - Srinagar",
    dates: "5 Feb, 19 Feb +4 batches",
    highlights: ["Sonamarg", "Gulmarg", "Pahalgam"],
    onClick: () => navigate('/domestic-trips/kashmir')
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Kashmir Honeymoon Special",
    price: "28,999",
    originalPrice: "32,999",
    duration: "5N/6D",
    route: "Srinagar - Srinagar",
    dates: "Customised",
    highlights: ["Luxury Houseboat", "Private Shikara", "Candlelight Dinner"],
    isCustomised: true,
    onClick: () => navigate('/domestic-trips/kashmir')
  }
];

export const himachalPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Manali Backpacking Trip - 5 Days",
    price: "9,999",
    originalPrice: "11,999",
    duration: "4N/5D",
    route: "Manali - Manali",
    dates: "18 Jan, 25 Jan +20 batches",
    highlights: ["Solang Valley", "Hidimba Temple", "Old Manali"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/himachal-pradesh')
  },
  {
    image: "https://images.unsplash.com/photo-1585516482738-d8afd4d9693a?w=600&q=80",
    title: "Shimla Manali Tour Package - 6 Days",
    price: "12,999",
    originalPrice: "14,999",
    duration: "5N/6D",
    route: "Chandigarh - Chandigarh",
    dates: "22 Jan, 5 Feb +15 batches",
    highlights: ["Kufri", "Solang Valley", "Rohtang Pass"],
    onClick: () => navigate('/domestic-trips/himachal-pradesh')
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Complete Himachal Tour - 8 Days",
    price: "16,999",
    originalPrice: "19,999",
    duration: "7N/8D",
    route: "Delhi - Delhi",
    dates: "1 Feb, 15 Feb +8 batches",
    highlights: ["Shimla", "Manali", "Dharamshala"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/himachal-pradesh')
  }
];

export const ladakhPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    title: "Leh Ladakh Bike Trip - 8 Days",
    price: "24,999",
    originalPrice: "28,999",
    duration: "7N/8D",
    route: "Manali - Leh",
    dates: "1 Jun, 8 Jun +25 batches",
    highlights: ["Khardung La", "Pangong Lake", "Nubra Valley"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/ladakh')
  },
  {
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
    title: "Ladakh Sightseeing Tour - 6 Days",
    price: "19,999",
    originalPrice: "22,999",
    duration: "5N/6D",
    route: "Leh - Leh",
    dates: "15 May, 22 May +18 batches",
    highlights: ["Pangong Lake", "Magnetic Hill", "Monasteries"],
    onClick: () => navigate('/domestic-trips/ladakh')
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Complete Ladakh Adventure - 10 Days",
    price: "32,999",
    originalPrice: "36,999",
    duration: "9N/10D",
    route: "Srinagar - Leh",
    dates: "5 Jun, 12 Jun +10 batches",
    highlights: ["Kargil", "Pangong", "Nubra", "Tso Moriri"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/ladakh')
  }
];

export const rajasthanPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1524230507669-27e3047ba033?w=600&q=80",
    title: "Jaipur Weekend Getaway - 3 Days",
    price: "7,999",
    originalPrice: "9,999",
    duration: "2N/3D",
    route: "Jaipur - Jaipur",
    dates: "Every Weekend",
    highlights: ["Amber Fort", "City Palace", "Hawa Mahal"],
    onClick: () => navigate('/domestic-trips/rajasthan')
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
    title: "Rajasthan Heritage Tour - 7 Days",
    price: "16,999",
    originalPrice: "19,999",
    duration: "6N/7D",
    route: "Jaipur - Jaipur",
    dates: "25 Jan, 8 Feb +12 batches",
    highlights: ["Jaipur", "Jodhpur", "Jaisalmer", "Udaipur"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/rajasthan')
  },
  {
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    title: "Royal Rajasthan with Pushkar - 9 Days",
    price: "21,999",
    originalPrice: "24,999",
    duration: "8N/9D",
    route: "Delhi - Delhi",
    dates: "15 Feb, 1 Mar +6 batches",
    highlights: ["Udaipur Lake", "Desert Safari", "Pushkar Temple"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/rajasthan')
  }
];

export const keralaPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    title: "Kerala Backwaters & Munnar - 6 Days",
    price: "15,999",
    originalPrice: "18,999",
    duration: "5N/6D",
    route: "Kochi - Kochi",
    dates: "20 Jan, 3 Feb +10 batches",
    highlights: ["Munnar Tea Gardens", "Alleppey Houseboat", "Kochi"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/kerala')
  },
  {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    title: "Complete Kerala Tour - 8 Days",
    price: "19,999",
    originalPrice: "22,999",
    duration: "7N/8D",
    route: "Kochi - Trivandrum",
    dates: "5 Feb, 19 Feb +8 batches",
    highlights: ["Munnar", "Thekkady", "Alleppey", "Kovalam"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/kerala')
  },
  {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    title: "Kerala Honeymoon Package - 5 Days",
    price: "24,999",
    originalPrice: "27,999",
    duration: "4N/5D",
    route: "Kochi - Kochi",
    dates: "Customised",
    highlights: ["Luxury Houseboat", "Private Tours", "Spa & Wellness"],
    isCustomised: true,
    onClick: () => navigate('/domestic-trips/kerala')
  }
];

export const goaPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    title: "Goa Beach Party Trip - 4 Days",
    price: "9,999",
    originalPrice: "11,999",
    duration: "3N/4D",
    route: "Goa - Goa",
    dates: "Every Weekend",
    highlights: ["Beach Parties", "Water Sports", "Club Hopping"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/goa')
  },
  {
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    title: "Complete Goa Tour - 5 Days",
    price: "12,999",
    originalPrice: "14,999",
    duration: "4N/5D",
    route: "Goa - Goa",
    dates: "18 Jan, 25 Jan +30 batches",
    highlights: ["North Goa", "South Goa", "Dudhsagar Falls"],
    onClick: () => navigate('/domestic-trips/goa')
  },
  {
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    title: "Goa with Scuba Diving - 5 Days",
    price: "16,999",
    originalPrice: "19,999",
    duration: "4N/5D",
    route: "Goa - Goa",
    dates: "22 Jan, 5 Feb +15 batches",
    highlights: ["Scuba Diving", "Water Sports", "Island Tours"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/goa')
  }
];

export const spitiValleyPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Spiti Valley Adventure - 8 Days",
    price: "19,999",
    originalPrice: "22,999",
    duration: "7N/8D",
    route: "Manali - Manali",
    dates: "15 May, 22 May +10 batches",
    highlights: ["Key Monastery", "Chandratal Lake", "Kaza"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/spiti-valley')
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Spiti Valley Bike Trip - 9 Days",
    price: "23,999",
    originalPrice: "26,999",
    duration: "8N/9D",
    route: "Shimla - Manali",
    dates: "1 Jun, 8 Jun +8 batches",
    highlights: ["Kunzum Pass", "Dhankar Monastery", "Pin Valley"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/spiti-valley')
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Complete Spiti Circuit - 10 Days",
    price: "27,999",
    originalPrice: "31,999",
    duration: "9N/10D",
    route: "Manali - Shimla",
    dates: "25 May, 1 Jun +6 batches",
    highlights: ["Tabo", "Kaza", "Kalpa", "Nako"],
    onClick: () => navigate('/domestic-trips/spiti-valley')
  }
];

export const meghalayaPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    title: "Meghalaya - Land of Clouds 6 Days",
    price: "17,999",
    originalPrice: "20,999",
    duration: "5N/6D",
    route: "Guwahati - Guwahati",
    dates: "20 Jan, 10 Feb +12 batches",
    highlights: ["Cherrapunji", "Living Root Bridges", "Dawki"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/meghalaya')
  },
  {
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    title: "Complete Meghalaya Tour - 8 Days",
    price: "21,999",
    originalPrice: "24,999",
    duration: "7N/8D",
    route: "Guwahati - Guwahati",
    dates: "5 Feb, 19 Feb +8 batches",
    highlights: ["Shillong", "Mawlynnong", "Nongriat", "Umngot River"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/meghalaya')
  },
  {
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    title: "Meghalaya with Kaziranga - 9 Days",
    price: "26,999",
    originalPrice: "29,999",
    duration: "8N/9D",
    route: "Guwahati - Guwahati",
    dates: "15 Feb, 1 Mar +5 batches",
    highlights: ["Kaziranga Safari", "Double Decker Bridge", "Mawsmai Cave"],
    onClick: () => navigate('/domestic-trips/meghalaya')
  }
];

export const nagalandPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Nagaland Hornbill Festival - 7 Days",
    price: "19,999",
    originalPrice: "22,999",
    duration: "6N/7D",
    route: "Dimapur - Dimapur",
    dates: "1 Dec, 3 Dec +2 batches",
    highlights: ["Hornbill Festival", "Kohima", "Dzukou Valley"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/nagaland')
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Complete Nagaland Tour - 8 Days",
    price: "22,999",
    originalPrice: "25,999",
    duration: "7N/8D",
    route: "Dimapur - Dimapur",
    dates: "15 Jan, 5 Feb +6 batches",
    highlights: ["Mokokchung", "Mon", "War Cemetery", "Tribal Villages"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/nagaland')
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    title: "Nagaland with Kaziranga - 9 Days",
    price: "27,999",
    originalPrice: "30,999",
    duration: "8N/9D",
    route: "Guwahati - Dimapur",
    dates: "20 Jan, 10 Feb +4 batches",
    highlights: ["Dzukou Valley Trek", "Kohima Museum", "Wildlife Safari"],
    onClick: () => navigate('/domestic-trips/nagaland')
  }
];

export const andamanPackages = (navigate) => [
  {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    title: "Andaman Beach Paradise - 6 Days",
    price: "21,999",
    originalPrice: "24,999",
    duration: "5N/6D",
    route: "Port Blair - Port Blair",
    dates: "25 Jan, 8 Feb +15 batches",
    highlights: ["Havelock Island", "Radhanagar Beach", "Scuba Diving"],
    isPopular: true,
    onClick: () => navigate('/domestic-trips/andaman')
  },
  {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    title: "Complete Andaman Tour - 8 Days",
    price: "28,999",
    originalPrice: "32,999",
    duration: "7N/8D",
    route: "Port Blair - Port Blair",
    dates: "5 Feb, 19 Feb +10 batches",
    highlights: ["Neil Island", "Ross Island", "Cellular Jail", "Water Sports"],
    isRecommended: true,
    onClick: () => navigate('/domestic-trips/andaman')
  },
  {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    title: "Andaman Honeymoon Special - 7 Days",
    price: "35,999",
    originalPrice: "39,999",
    duration: "6N/7D",
    route: "Port Blair - Port Blair",
    dates: "Customised",
    highlights: ["Private Beach Resort", "Sunset Cruise", "Couple Spa"],
    isCustomised: true,
    onClick: () => navigate('/domestic-trips/andaman')
  }
];
