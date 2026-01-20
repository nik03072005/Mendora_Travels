import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const EuropeTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const groupTours = [
    { id: 1, name: "European Capitals Tour", date: "May 15, 2026", seats: 12, booked: 8, price: "₹99,999", duration: "10 Days", highlights: ["Paris & Rome", "London & Berlin", "All Major Cities"] },
    { id: 2, name: "Western Europe Explorer", date: "June 20, 2026", seats: 15, booked: 10, price: "₹1,19,999", duration: "12 Days", highlights: ["France & Spain", "Switzerland", "Netherlands"] },
    { id: 3, name: "Mediterranean Cruise", date: "July 10, 2026", seats: 20, booked: 14, price: "₹1,29,999", duration: "14 Days", highlights: ["Italy & Greece", "Croatia", "Coastal Cities"] },
    { id: 4, name: "Eastern Europe Discovery", date: "September 5, 2026", seats: 10, booked: 6, price: "₹1,39,999", duration: "11 Days", highlights: ["Prague & Vienna", "Budapest", "Historic Sites"] }
  ];

  // Europe tour packages data
  const tourPackages = [
    {
      id: 1,
      title: "Amsterdam & Paris",
      duration: "6 Days",
      startingPrice: "₹1,09,999",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      locations: ["Amsterdam", "Paris"],
      rating: 4.8,
      reviews: 320
    },
    {
      id: 2,
      title: "Switzerland & France",
      duration: "7 Days",
      startingPrice: "₹1,49,999",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
      locations: ["Zurich", "Geneva", "Paris"],
      rating: 4.9,
      reviews: 450
    },
    {
      id: 3,
      title: "Italy Explorer",
      duration: "8 Days",
      startingPrice: "₹1,29,999",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
      locations: ["Rome", "Venice", "Florence"],
      rating: 4.7,
      reviews: 280
    },
    {
      id: 4,
      title: "Greek Islands",
      duration: "6 Days",
      startingPrice: "₹99,999",
      image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80",
      locations: ["Athens", "Santorini", "Mykonos"],
      rating: 4.9,
      reviews: 520
    },
    {
      id: 5,
      title: "Spain & Portugal",
      duration: "9 Days",
      startingPrice: "₹1,39,999",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
      locations: ["Barcelona", "Madrid", "Lisbon"],
      rating: 4.6,
      reviews: 195
    },
    {
      id: 6,
      title: "London & Scotland",
      duration: "7 Days",
      startingPrice: "₹1,19,999",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      locations: ["London", "Edinburgh", "Glasgow"],
      rating: 4.8,
      reviews: 340
    }
  ];

  // Activities data
  const activities = [
    {
      id: 1,
      title: "Eiffel Tower Visit",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80",
      location: "Paris, France"
    },
    {
      id: 2,
      title: "Gondola Ride",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
      location: "Venice, Italy"
    },
    {
      id: 3,
      title: "Swiss Alps Trek",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80",
      location: "Switzerland"
    },
    {
      id: 4,
      title: "Acropolis Tour",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
      location: "Athens, Greece"
    }
  ];

  // Destinations data
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      packages: 15
    },
    {
      id: 2,
      name: "Rome",
      country: "Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
      packages: 12
    },
    {
      id: 3,
      name: "Barcelona",
      country: "Spain",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80",
      packages: 10
    },
    {
      id: 4,
      name: "Amsterdam",
      country: "Netherlands",
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80",
      packages: 8
    },
    {
      id: 5,
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
      packages: 9
    },
    {
      id: 6,
      name: "London",
      country: "England",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
      packages: 14
    }
  ];

  // FAQs data
  const faqs = [
    {
      id: 1,
      question: "What is the best time to visit Europe?",
      answer: "The best time to visit Europe is during spring (April-June) and fall (September-October) when the weather is pleasant and there are fewer crowds. Summer (July-August) is peak season with warmer weather but more tourists."
    },
    {
      id: 2,
      question: "Do I need a visa for Europe?",
      answer: "Indian passport holders need a Schengen visa to visit most European countries. We assist with the visa application process as part of our package. Processing typically takes 15-20 working days."
    },
    {
      id: 3,
      question: "What is included in the package price?",
      answer: "Our packages typically include flights, accommodation, daily breakfast, airport transfers, sightseeing tours, and a dedicated tour manager. Lunch, dinner, and entry fees to attractions may vary by package."
    },
    {
      id: 4,
      question: "Is travel insurance included?",
      answer: "Basic travel insurance is included in all our Europe packages. However, we recommend comprehensive insurance for better coverage, which can be arranged at an additional cost."
    },
    {
      id: 5,
      question: "What is the group size?",
      answer: "Our group tours typically have 15-25 travelers. This ensures personalized attention while maintaining a social and engaging group dynamic."
    },
    {
      id: 6,
      question: "Can I customize my Europe tour?",
      answer: "Yes! We offer both fixed departure group tours and customized private tours. Contact our travel experts to create a personalized itinerary based on your preferences and budget."
    }
  ];

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "December 2023",
      comment: "Amazing Europe trip! Everything was well-organized. The hotels were great and our tour manager was very helpful. Highly recommend!",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 5,
      date: "November 2023",
      comment: "Best experience ever! Visited Paris, Switzerland, and Italy. The itinerary was perfect with enough time at each place. Will book again!",
      location: "Delhi"
    },
    {
      id: 3,
      name: "Anjali Patel",
      rating: 4,
      date: "October 2023",
      comment: "Great trip overall. The sightseeing was wonderful and the group was friendly. Only minor issue was some long travel days but worth it!",
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
    // Add your form submission logic here
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Europe Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Europe with our curated tour packages. Visit Paris, Rome, Switzerland, Greece and more with Mendora Travels." />
      </Helmet>

      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <div 
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80')`
        }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Europe Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Experience the Magic of Europe</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">Starting from ₹99,999</span>
            </div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">6-15 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Europe Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Europe Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              Europe is a continent that offers an incredible diversity of experiences, from the romantic streets of Paris to the ancient ruins of Rome, 
              from the stunning Swiss Alps to the beautiful Greek islands. Our Europe tour packages are designed to give you the best of this magnificent continent.
            </p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>
                  Whether you're looking for a romantic honeymoon, a family vacation, or an adventure with friends, Europe has something for everyone. 
                  Explore world-class museums, indulge in delicious cuisine, shop at famous markets, and create memories that will last a lifetime.
                </p>
                <p>
                  Our carefully curated Europe tour packages include visa assistance, flights, accommodation, guided tours, and more. 
                  With experienced tour managers and 24/7 support, we ensure your European adventure is smooth and unforgettable.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Europe</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular European Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Europe Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect European adventure</p>
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
                placeholder="Tell us about your dream Europe trip..."
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

export default EuropeTourPackagesPage;
