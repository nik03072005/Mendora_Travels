import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MeghalayaTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Meghalaya Explorer", date: "April 15, 2026", seats: 15, booked: 10, price: "₹19,999", duration: "6 Days", highlights: ["Cherrapunji", "Living Root Bridges", "Waterfalls"] },
    { id: 2, name: "Living Bridges Trek", date: "June 20, 2026", seats: 12, booked: 8, price: "₹22,999", duration: "7 Days", highlights: ["Double Decker Bridge", "Trekking", "Villages"] },
    { id: 3, name: "Complete Northeast", date: "September 10, 2026", seats: 10, booked: 6, price: "₹24,999", duration: "8 Days", highlights: ["Shillong", "Cherrapunji", "Dawki"] },
    { id: 4, name: "Waterfalls Trail", date: "November 5, 2026", seats: 8, booked: 5, price: "₹26,999", duration: "7 Days", highlights: ["Nohkalikai", "Seven Sisters", "Elephant Falls"] }
  ];

  const tourPackages = [
    { id: 1, title: "Meghalaya Explorer", duration: "6 Days", startingPrice: "₹19,999", image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&q=80", locations: ["Shillong", "Cherrapunji", "Mawlynnong"], rating: 4.9, reviews: 520 },
    { id: 2, title: "Living Root Bridges Tour", duration: "5 Days", startingPrice: "₹22,999", image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=800&q=80", locations: ["Double Decker", "Single Decker", "Rainbow Falls"], rating: 5.0, reviews: 480 },
    { id: 3, title: "Meghalaya Complete", duration: "8 Days", startingPrice: "₹26,999", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80", locations: ["All Major Destinations", "Caves", "Waterfalls"], rating: 4.8, reviews: 450 },
    { id: 4, title: "Dawki & Mawlynnong", duration: "4 Days", startingPrice: "₹17,999", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", locations: ["Crystal Clear Dawki", "Cleanest Village", "Bangladesh Border"], rating: 4.7, reviews: 390 },
    { id: 5, title: "Waterfalls Trail", duration: "5 Days", startingPrice: "₹21,999", image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&q=80", locations: ["Nohkalikai", "Seven Sisters", "Elephant Falls"], rating: 4.8, reviews: 410 },
    { id: 6, title: "Meghalaya Trekking", duration: "7 Days", startingPrice: "₹24,999", image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=800&q=80", locations: ["David Scott Trail", "Living Root Bridges", "Villages"], rating: 4.9, reviews: 360 }
  ];

  const activities = [
    { id: 1, title: "Living Root Bridges", image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=600&q=80", location: "Nongriat Village" },
    { id: 2, title: "Dawki River Boating", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", location: "Clearest Water in India" },
    { id: 3, title: "Nohkalikai Falls", image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80", location: "India's Tallest Plunge Waterfall" },
    { id: 4, title: "Mawsmai Caves", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80", location: "Limestone Cave Exploration" }
  ];

  const destinations = [
    { id: 1, name: "Shillong", country: "Meghalaya", image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80", packages: 20 },
    { id: 2, name: "Cherrapunji", country: "Meghalaya", image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=600&q=80", packages: 18 },
    { id: 3, name: "Mawlynnong", country: "Meghalaya", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80", packages: 15 },
    { id: 4, name: "Dawki", country: "Meghalaya", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 16 },
    { id: 5, name: "Nongriat", country: "Meghalaya", image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=600&q=80", packages: 12 },
    { id: 6, name: "Mawsynram", country: "Meghalaya", image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80", packages: 10 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Meghalaya?", answer: "October to May is ideal with pleasant weather. November-February is winter (cold but clear). Monsoon (June-Sept) is wettest time but waterfalls are at peak. Avoid heavy rain months if trekking." },
    { id: 2, question: "How to reach Meghalaya?", answer: "Fly to Guwahati (Assam) then 3-hour drive to Shillong. Direct flights from Delhi, Mumbai, Bangalore, Kolkata. Guwahati railway station well-connected. We provide transfers from Guwahati." },
    { id: 3, question: "Do I need permits for Meghalaya?", answer: "No permits needed for Indian nationals. Foreign tourists need Protected Area Permit (PAP) and Restricted Area Permit (RAP) for some areas. We assist with arrangements." },
    { id: 4, question: "Is Double Decker Root Bridge trek difficult?", answer: "Moderate difficulty. 3,500+ steps down and up. Takes 5-6 hours round trip. Good fitness needed. Wear proper shoes. Carry water, snacks. Worth the effort for unique experience!" },
    { id: 5, question: "What to pack for Meghalaya?", answer: "Rain gear (umbrella, raincoat), comfortable trekking shoes, light clothes, warm jacket (winter), sunscreen, water bottle, torch, insect repellent. Pack light as stairs are steep." },
    { id: 6, question: "Can I customize my Meghalaya package?", answer: "Yes! Add specific waterfalls, extend homestays, include adventure activities, visit offbeat villages, add caves. We tailor packages to your interests and fitness level." }
  ];

  const reviews = [
    { id: 1, name: "Sanjay Reddy", rating: 5, date: "November 2023", comment: "Incredible experience! Living Root Bridges were magical. Dawki water was unbelievably clear. Mawlynnong deserves cleanest village title. Perfect destination!", location: "Hyderabad" },
    { id: 2, name: "Priya Das", rating: 5, date: "December 2023", comment: "Dream trip! Nohkalikai Falls breathtaking, Cherrapunji stunning. Double Decker trek challenging but rewarding. People warm and hospitable. Highly recommend!", location: "Kolkata" },
    { id: 3, name: "Karthik Nair", rating: 4, date: "October 2023", comment: "Beautiful state! Waterfalls everywhere, greenery lush. Only issue was rain but that's expected. Caves were interesting. Great offbeat destination!", location: "Bangalore" }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Meghalaya Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Meghalaya with our curated tour packages. Visit Shillong, Cherrapunji, Living Root Bridges, Dawki and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meghalaya Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Abode of Clouds</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹17,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">4-8 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Meghalaya Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">{pkg.duration}</div>
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
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Meghalaya Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Meghalaya, the "Abode of Clouds," is India's wettest state featuring stunning waterfalls, unique living root bridges, cleanest village, crystal-clear rivers, mysterious caves, and lush green landscapes. Our Meghalaya packages offer nature, adventure, and offbeat experiences.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience the iconic Double Decker Living Root Bridge (200+ years old), Asia's cleanest village Mawlynnong, crystal-clear Dawki River (boats appear floating in air), India's tallest plunge waterfall Nohkalikai, Seven Sisters Falls, Mawsmai limestone caves, and beautiful Shillong city. Enjoy authentic Khasi culture and warm hospitality.</p>
                <p>Our packages include comfortable hotels/homestays, transfers, guides, and complete arrangements for a memorable Meghalaya adventure.</p>
              </div>
            )}
            <button onClick={() => setExpandedAbout(!expandedAbout)} className="text-blue-600 font-semibold mt-4 flex items-center gap-2 hover:text-blue-700">
              {expandedAbout ? 'Read Less' : 'Read More'}
              {expandedAbout ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Meghalaya</h2>
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
            ))}  </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Meghalaya Destinations</h2>
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
                <button onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {activeFAQ === faq.id ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-400" />}
                </button>
                {activeFAQ === faq.id && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
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
                  {[...Array(review.rating)].map((_, i) => (<FaStar key={i} className="text-yellow-400" />))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Meghalaya Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Meghalaya adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Meghalaya trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeghalayaTourPackagesPage;
