import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const VietnamTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const groupTours = [
    { id: 1, name: "Vietnam Discovery", date: "May 10, 2026", seats: 12, booked: 8, price: "₹54,999", duration: "7 Days", highlights: ["Hanoi Heritage", "Ha Long Bay", "Local Cuisine"] },
    { id: 2, name: "North to South", date: "June 15, 2026", seats: 15, booked: 10, price: "₹59,999", duration: "9 Days", highlights: ["Hanoi to Ho Chi Minh", "Mekong Delta", "All Highlights"] },
    { id: 3, name: "Ha Long Bay Special", date: "July 20, 2026", seats: 10, booked: 6, price: "₹64,999", duration: "6 Days", highlights: ["Cruise Experience", "Cave Exploration", "Kayaking"] },
    { id: 4, name: "Coastal Vietnam", date: "September 5, 2026", seats: 12, booked: 7, price: "₹69,999", duration: "8 Days", highlights: ["Beaches", "Coastal Cities", "Water Activities"] }
  ];

  const tourPackages = [
    {
      id: 1,
      title: "Hanoi & Ha Long Bay",
      duration: "5 Days",
      startingPrice: "₹54,999",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
      locations: ["Hanoi", "Ha Long Bay", "Sapa"],
      rating: 4.9,
      reviews: 380
    },
    {
      id: 2,
      title: "Ho Chi Minh Discovery",
      duration: "6 Days",
      startingPrice: "₹59,999",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
      locations: ["Ho Chi Minh", "Cu Chi Tunnels", "Mekong Delta"],
      rating: 4.8,
      reviews: 320
    },
    {
      id: 3,
      title: "Complete Vietnam",
      duration: "9 Days",
      startingPrice: "₹79,999",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
      locations: ["Hanoi", "Ha Long Bay", "Hoi An", "Ho Chi Minh"],
      rating: 4.9,
      reviews: 450
    },
    {
      id: 4,
      title: "Hoi An & Da Nang",
      duration: "5 Days",
      startingPrice: "₹49,999",
      image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
      locations: ["Hoi An", "Da Nang", "Marble Mountains"],
      rating: 4.7,
      reviews: 290
    },
    {
      id: 5,
      title: "Vietnam Coastal Tour",
      duration: "7 Days",
      startingPrice: "₹64,999",
      image: "https://images.unsplash.com/photo-1570365820108-e86f21c21f15?w=800&q=80",
      locations: ["Nha Trang", "Mui Ne", "Phan Thiet"],
      rating: 4.6,
      reviews: 240
    },
    {
      id: 6,
      title: "Vietnam Adventure",
      duration: "8 Days",
      startingPrice: "₹69,999",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
      locations: ["Hanoi", "Ninh Binh", "Phong Nha", "Hue"],
      rating: 4.8,
      reviews: 350
    }
  ];

  const activities = [
    {
      id: 1,
      title: "Ha Long Bay Cruise",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80",
      location: "Ha Long Bay"
    },
    {
      id: 2,
      title: "Cu Chi Tunnels Tour",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
      location: "Ho Chi Minh City"
    },
    {
      id: 3,
      title: "Ancient Town Walk",
      image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=80",
      location: "Hoi An"
    },
    {
      id: 4,
      title: "Mekong Delta Cruise",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80",
      location: "Mekong Delta"
    }
  ];

  const destinations = [
    {
      id: 1,
      name: "Hanoi",
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80",
      packages: 15
    },
    {
      id: 2,
      name: "Ho Chi Minh",
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
      packages: 12
    },
    {
      id: 3,
      name: "Ha Long Bay",
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80",
      packages: 14
    },
    {
      id: 4,
      name: "Hoi An",
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=80",
      packages: 10
    },
    {
      id: 5,
      name: "Da Nang",
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1570365820108-e86f21c21f15?w=600&q=80",
      packages: 9
    },
    {
      id: 6,
      name: "Nha Trang",
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80",
      packages: 8
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the best time to visit Vietnam?",
      answer: "The best time to visit Vietnam is from November to April when the weather is dry and pleasant. Southern Vietnam is warm year-round, while northern Vietnam can be cool in winter."
    },
    {
      id: 2,
      question: "Do I need a visa for Vietnam?",
      answer: "Indian passport holders need a visa to visit Vietnam. You can apply for an e-visa online or get visa on arrival. We assist with the visa process as part of our package."
    },
    {
      id: 3,
      question: "What is included in the package price?",
      answer: "Our packages typically include flights, accommodation, daily breakfast, airport transfers, guided tours, and entrance fees. Some packages include lunch and dinner as well."
    },
    {
      id: 4,
      question: "Is Vietnam safe for tourists?",
      answer: "Yes, Vietnam is very safe for tourists. The locals are friendly and welcoming. Tourist areas have good security and English-speaking staff to assist visitors."
    },
    {
      id: 5,
      question: "What currency is used in Vietnam?",
      answer: "Vietnamese Dong (VND) is the official currency. US dollars are widely accepted in tourist areas. ATMs are available in cities and cards are accepted at hotels and restaurants."
    },
    {
      id: 6,
      question: "Can I customize my Vietnam tour?",
      answer: "Yes! We offer flexible itineraries. You can add destinations, upgrade hotels, include specific activities, or extend your stay based on your preferences."
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Pooja Joshi",
      rating: 5,
      date: "January 2024",
      comment: "Vietnam exceeded all expectations! Ha Long Bay cruise was breathtaking, Hoi An was charming, and the food was incredible. Highly recommended!",
      location: "Pune"
    },
    {
      id: 2,
      name: "Vikram Malhotra",
      rating: 5,
      date: "December 2023",
      comment: "Perfect trip! Cu Chi Tunnels were fascinating, Hanoi's old quarter was vibrant. Our guide was knowledgeable and hotels were excellent.",
      location: "Delhi"
    },
    {
      id: 3,
      name: "Neha Kapoor",
      rating: 4,
      date: "November 2023",
      comment: "Great cultural experience! Loved the street food, markets, and temples. Only issue was some long travel days but totally worth it!",
      location: "Bangalore"
    }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Vietnam Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Vietnam with our curated tour packages. Visit Hanoi, Ha Long Bay, Ho Chi Minh, Hoi An and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div 
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80')`
        }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Vietnam Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Discover the Beauty of Vietnam</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">Starting from ₹49,999</span>
            </div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">5-9 Days</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Vietnam Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span className="text-sm">{pkg.locations.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{pkg.rating}</span>
                    <span className="text-gray-500 text-sm">({pkg.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600">{pkg.startingPrice}</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Vietnam Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              Vietnam is a captivating destination with stunning natural beauty, rich history, and vibrant culture. From the bustling streets of Hanoi to the serene waters of Ha Long Bay, 
              our Vietnam tour packages offer an unforgettable journey through this beautiful country.
            </p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>
                  Explore ancient temples, cruise through limestone karsts, visit historic Cu Chi Tunnels, wander through charming Hoi An, and experience the energy of Ho Chi Minh City. 
                  Vietnamese cuisine is world-renowned, and you'll enjoy delicious pho, banh mi, and fresh seafood throughout your journey.
                </p>
                <p>
                  Our packages include comfortable accommodations, expert guides, authentic experiences, and carefully planned itineraries that showcase the best of Vietnam. 
                  Whether you're seeking adventure, culture, or relaxation, Vietnam has something special for everyone.
                </p>
              </div>
            )}
            <button 
              onClick={() => setExpandedAbout(!expandedAbout)}
              className="text-blue-600 font-semibold mt-4 flex items-center gap-2 hover:text-blue-700"
            >
              {expandedAbout ? 'Read Less' : 'Read More'}
              {expandedAbout ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Vietnam</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-red-500 text-sm" />
                    <span className="text-sm">{activity.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Group Tours</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Join our guided group tours with like-minded travelers. Fixed departures with expert guides and hassle-free arrangements.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {groupTours.map((tour) => (
              <div key={tour.id} className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{tour.duration}</div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Available Seats</p>
                    <p className="text-2xl font-bold text-blue-600">{tour.seats - tour.booked}</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{tour.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                    <span className="text-sm">{tour.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                    <span className="text-sm">Group of {tour.seats}</span>
                  </div>
                </div>
                <div className="border-t pt-3 mb-3">
                  <p className="text-xs text-gray-600 mb-1">Tour Highlights:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Starting from</p>
                    <p className="text-xl font-bold text-blue-600">{tour.price}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Vietnam Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <div key={dest.id} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-sm mb-2">{dest.country}</p>
                  <p className="text-sm text-gray-300">{dest.packages} Packages Available</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {activeFAQ === faq.id ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-400" />}
                </button>
                {activeFAQ === faq.id && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Vietnam Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Vietnam adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your dream Vietnam trip..."
                value={formData.message}
                onChange={handleFormChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default VietnamTourPackagesPage;
