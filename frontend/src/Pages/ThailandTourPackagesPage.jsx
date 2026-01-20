import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ThailandTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const groupTours = [
    { id: 1, name: "Thailand Explorer", date: "April 15, 2026", seats: 15, booked: 10, price: "₹39,999", duration: "6 Days", highlights: ["Bangkok City", "Pattaya Beach", "Coral Island"] },
    { id: 2, name: "Bangkok Phuket Group", date: "May 20, 2026", seats: 12, booked: 8, price: "₹44,999", duration: "7 Days", highlights: ["James Bond Island", "Phi Phi Island", "Night Markets"] },
    { id: 3, name: "Island Hopping Tour", date: "July 10, 2026", seats: 10, booked: 5, price: "₹49,999", duration: "8 Days", highlights: ["Krabi", "Phuket", "Island Tours"] },
    { id: 4, name: "Complete Thailand", date: "September 5, 2026", seats: 12, booked: 7, price: "₹54,999", duration: "9 Days", highlights: ["Bangkok", "Phuket", "Chiang Mai"] }
  ];

  const tourPackages = [
    {
      id: 1,
      title: "Bangkok Pattaya Paradise",
      duration: "5 Days",
      startingPrice: "₹39,999",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      locations: ["Bangkok", "Pattaya"],
      rating: 4.8,
      reviews: 520
    },
    {
      id: 2,
      title: "Phuket Beach Escape",
      duration: "6 Days",
      startingPrice: "₹44,999",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
      locations: ["Phuket", "Phi Phi Islands", "Krabi"],
      rating: 4.9,
      reviews: 480
    },
    {
      id: 3,
      title: "Bangkok Phuket Combo",
      duration: "7 Days",
      startingPrice: "₹49,999",
      image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80",
      locations: ["Bangkok", "Phuket", "Phi Phi"],
      rating: 4.7,
      reviews: 390
    },
    {
      id: 4,
      title: "Krabi Adventure Tour",
      duration: "5 Days",
      startingPrice: "₹42,999",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
      locations: ["Krabi", "Railay Beach", "Ao Nang"],
      rating: 4.8,
      reviews: 310
    },
    {
      id: 5,
      title: "Chiang Mai Cultural",
      duration: "6 Days",
      startingPrice: "₹45,999",
      image: "https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=800&q=80",
      locations: ["Chiang Mai", "Chiang Rai", "Doi Suthep"],
      rating: 4.6,
      reviews: 260
    },
    {
      id: 6,
      title: "Complete Thailand",
      duration: "9 Days",
      startingPrice: "₹64,999",
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
      locations: ["Bangkok", "Pattaya", "Phuket", "Krabi"],
      rating: 4.9,
      reviews: 420
    }
  ];

  const activities = [
    {
      id: 1,
      title: "Island Hopping",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80",
      location: "Phi Phi Islands"
    },
    {
      id: 2,
      title: "Grand Palace Visit",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80",
      location: "Bangkok"
    },
    {
      id: 3,
      title: "Floating Market",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80",
      location: "Damnoen Saduak"
    },
    {
      id: 4,
      title: "Thai Massage & Spa",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
      location: "Phuket"
    }
  ];

  const destinations = [
    {
      id: 1,
      name: "Bangkok",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
      packages: 18
    },
    {
      id: 2,
      name: "Phuket",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80",
      packages: 15
    },
    {
      id: 3,
      name: "Pattaya",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80",
      packages: 12
    },
    {
      id: 4,
      name: "Krabi",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80",
      packages: 10
    },
    {
      id: 5,
      name: "Chiang Mai",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1598968482603-0b7ef5057382?w=600&q=80",
      packages: 9
    },
    {
      id: 6,
      name: "Phi Phi Islands",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80",
      packages: 8
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the best time to visit Thailand?",
      answer: "The best time to visit Thailand is from November to February when the weather is cool and dry. March to May is hot season, while June to October is monsoon season with occasional rainfall."
    },
    {
      id: 2,
      question: "Do I need a visa for Thailand?",
      answer: "Indian passport holders get visa on arrival for up to 15 days or can apply for e-visa for 60 days. We can assist you with the visa process as part of our package."
    },
    {
      id: 3,
      question: "What is included in the package price?",
      answer: "Our packages typically include flights, accommodation, daily breakfast, airport transfers, sightseeing tours, and some meals. Activities like island tours may vary by package."
    },
    {
      id: 4,
      question: "Is Thailand safe for tourists?",
      answer: "Yes, Thailand is very safe and tourist-friendly. The locals are welcoming and helpful. Tourist police are available in major tourist areas for assistance."
    },
    {
      id: 5,
      question: "What currency is used in Thailand?",
      answer: "Thai Baht (THB) is the official currency. Currency exchange is available at airports, banks, and authorized money changers. Cards are widely accepted in cities."
    },
    {
      id: 6,
      question: "Can I customize my Thailand tour?",
      answer: "Absolutely! We offer flexible packages. You can add destinations, change hotels, include specific activities, or extend your stay based on your preferences and budget."
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Amit Kumar",
      rating: 5,
      date: "January 2024",
      comment: "Amazing Thailand trip! Bangkok temples were beautiful, Phuket beaches were stunning. Great hotels and delicious food throughout the trip!",
      location: "Delhi"
    },
    {
      id: 2,
      name: "Sneha Desai",
      rating: 5,
      date: "December 2023",
      comment: "Perfect family vacation! Kids loved the Coral Island activities. Bangkok shopping and Pattaya water sports were highlights. Excellent service!",
      location: "Gujarat"
    },
    {
      id: 3,
      name: "Rajesh Iyer",
      rating: 4,
      date: "November 2023",
      comment: "Great value for money! Phi Phi Islands were breathtaking. Only minor issue was some crowded tourist spots but overall fantastic experience!",
      location: "Chennai"
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
        <title>Thailand Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Thailand with our curated tour packages. Visit Bangkok, Phuket, Pattaya, Krabi and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <div 
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80')`
        }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Thailand Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Land of Smiles Awaits You</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">Starting from ₹39,999</span>
            </div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">5-9 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Thailand Tour Packages</h2>
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

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Thailand Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              Thailand, known as the Land of Smiles, is a perfect blend of ancient temples, modern cities, pristine beaches, and vibrant culture. 
              Our Thailand tour packages offer unforgettable experiences from bustling Bangkok to serene islands.
            </p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>
                  Experience the grandeur of Bangkok's temples, the excitement of Pattaya's beaches, the beauty of Phuket's islands, and the adventure of Krabi's landscapes. 
                  Enjoy world-class shopping, delicious Thai cuisine, traditional Thai massages, and warm hospitality.
                </p>
                <p>
                  Our carefully crafted packages include comfortable stays, guided tours, island hopping, cultural experiences, and authentic Thai experiences. 
                  Whether you're looking for adventure, relaxation, or cultural immersion, Thailand has it all.
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

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Thailand</h2>
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

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Thailand Destinations</h2>
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

      {/* FAQs Section */}
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

      {/* Reviews Section */}
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

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Thailand Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Thailand adventure</p>
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
                placeholder="Tell us about your dream Thailand trip..."
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

export default ThailandTourPackagesPage;
