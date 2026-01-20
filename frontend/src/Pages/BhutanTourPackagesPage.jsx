import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BhutanTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Bhutan Spiritual", date: "April 10, 2026", seats: 12, booked: 8, price: "₹59,999", duration: "6 Days", highlights: ["Tiger's Nest", "Monasteries", "Thimphu Dzong"] },
    { id: 2, name: "Complete Bhutan", date: "June 5, 2026", seats: 10, booked: 7, price: "₹69,999", duration: "8 Days", highlights: ["Paro", "Punakha", "Cultural Sites"] },
    { id: 3, name: "Festival Special", date: "September 15, 2026", seats: 15, booked: 10, price: "₹74,999", duration: "7 Days", highlights: ["Festival Experience", "Dzongs", "Local Culture"] },
    { id: 4, name: "Trekking Expedition", date: "October 20, 2026", seats: 8, booked: 5, price: "₹79,999", duration: "9 Days", highlights: ["Mountain Trails", "Remote Villages", "Nature"] }
  ];

  const tourPackages = [
    { id: 1, title: "Bhutan Cultural Tour", duration: "6 Days", startingPrice: "₹64,999", image: "https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=800&q=80", locations: ["Paro", "Thimphu", "Punakha"], rating: 4.9, reviews: 320 },
    { id: 2, title: "Paro & Thimphu Special", duration: "5 Days", startingPrice: "₹59,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Tiger's Nest", "Thimphu", "Dzongs"], rating: 4.8, reviews: 380 },
    { id: 3, title: "Bhutan Trekking", duration: "8 Days", startingPrice: "₹79,999", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80", locations: ["Paro", "Trek Route", "Monasteries"], rating: 5.0, reviews: 240 },
    { id: 4, title: "Punakha Valley Tour", duration: "6 Days", startingPrice: "₹69,999", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80", locations: ["Punakha Dzong", "Valley", "River"], rating: 4.7, reviews: 210 },
    { id: 5, title: "Complete Bhutan", duration: "9 Days", startingPrice: "₹89,999", image: "https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=800&q=80", locations: ["All Major Cities", "Dzongs", "Monasteries"], rating: 4.9, reviews: 290 },
    { id: 6, title: "Bhutan Festival Tour", duration: "7 Days", startingPrice: "₹74,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Festival", "Paro", "Cultural Sites"], rating: 4.8, reviews: 260 }
  ];

  const activities = [
    { id: 1, title: "Tiger's Nest Trek", image: "https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=600&q=80", location: "Paro" },
    { id: 2, title: "Dzong Visits", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", location: "Punakha" },
    { id: 3, title: "Prayer Flags", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80", location: "Dochula Pass" },
    { id: 4, title: "Traditional Archery", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", location: "Thimphu" }
  ];

  const destinations = [
    { id: 1, name: "Paro", country: "Bhutan", image: "https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=600&q=80", packages: 16 },
    { id: 2, name: "Thimphu", country: "Bhutan", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 15 },
    { id: 3, name: "Punakha", country: "Bhutan", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80", packages: 13 },
    { id: 4, name: "Bumthang", country: "Bhutan", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", packages: 10 },
    { id: 5, name: "Phobjikha Valley", country: "Bhutan", image: "https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=600&q=80", packages: 9 },
    { id: 6, name: "Haa Valley", country: "Bhutan", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 7 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Bhutan?", answer: "March-May (spring) and September-November (autumn) are best with clear skies and pleasant weather. Monsoon is June-August. Winter is cold but offers snow views." },
    { id: 2, question: "Do I need a visa for Bhutan?", answer: "Yes, Indian passport holders need permit/entry document. We arrange it with hotel bookings. Need valid passport/Voter ID. No visa fee for Indians." },
    { id: 3, question: "What is Sustainable Development Fee?", answer: "Indians pay ₹1,200 per night SDF. Includes sustainable tourism contribution. Children under 5 free. We include this in package pricing for transparency." },
    { id: 4, question: "Is Bhutan expensive?", answer: "Reasonable for Indians. No daily tariff like foreigners. Main costs are hotels (₹2,000-5,000/night), transport, and SDF. Food and entry fees are affordable." },
    { id: 5, question: "What currency is used?", answer: "Bhutanese Ngultrum (BTN) equal to Indian Rupee. INR widely accepted everywhere. 1 BTN = ₹1. Cards accepted in major hotels and shops." },
    { id: 6, question: "Can I customize my package?", answer: "Absolutely! Add trekking routes, extend stays, include specific festivals, upgrade hotels, or visit remote valleys. We create personalized itineraries." }
  ];

  const reviews = [
    { id: 1, name: "Rajesh Iyer", rating: 5, date: "January 2024", comment: "Magical experience! Tiger's Nest trek was challenging but rewarding. Punakha Dzong was magnificent. People were warm and culture rich. Highly recommend!", location: "Bangalore" },
    { id: 2, name: "Meera Patel", rating: 5, date: "December 2023", comment: "Spiritual journey! Monasteries were peaceful, landscapes breathtaking. Dochula Pass with prayer flags was stunning. Best vacation ever!", location: "Gujarat" },
    { id: 3, name: "Arjun Singh", rating: 4, date: "November 2023", comment: "Beautiful country! Thimphu was charming, Paro valley gorgeous. Only issue was limited internet but that made it more peaceful. Great experience!", location: "Delhi" }
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
        <title>Bhutan Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Bhutan with our curated tour packages. Visit Paro, Thimphu, Punakha, Tiger's Nest and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bhutan Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Land of Happiness</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹59,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">5-9 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Bhutan Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Bhutan Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Bhutan is the last Himalayan kingdom, known for Gross National Happiness, pristine nature, ancient dzongs, colorful festivals, and spiritual culture. Our Bhutan packages offer an unforgettable journey through this mystical land of thunder dragons.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience iconic Tiger's Nest monastery, majestic Punakha Dzong, vibrant Thimphu city, scenic Dochula Pass, peaceful Phobjikha Valley, and spiritual monasteries. Trek through pristine forests, witness traditional festivals, and immerse in Buddhist culture.</p>
                <p>Our packages include comfortable hotels, experienced guides, cultural experiences, and complete arrangements for a meaningful Bhutanese adventure.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Bhutan</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Bhutan Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Bhutan Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Bhutan adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Bhutan trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BhutanTourPackagesPage;
