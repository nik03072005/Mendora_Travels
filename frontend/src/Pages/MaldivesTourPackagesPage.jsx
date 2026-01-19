import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MaldivesTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const tourPackages = [
    { id: 1, title: "Maldives Honeymoon", duration: "5 Days", startingPrice: "₹89,999", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", locations: ["Male", "Water Villa", "Beach Resort"], rating: 4.9, reviews: 580 },
    { id: 2, title: "Water Villa Escape", duration: "6 Days", startingPrice: "₹1,09,999", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80", locations: ["Overwater Villa", "Spa", "Snorkeling"], rating: 5.0, reviews: 620 },
    { id: 3, title: "Beach Resort Paradise", duration: "4 Days", startingPrice: "₹79,999", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80", locations: ["Maafushi", "Beach Villa", "Lagoon"], rating: 4.8, reviews: 450 },
    { id: 4, title: "Diving Adventure", duration: "7 Days", startingPrice: "₹1,19,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Ari Atoll", "Dive Sites", "Manta Ray"], rating: 4.9, reviews: 390 },
    { id: 5, title: "Luxury Maldives", duration: "6 Days", startingPrice: "₹1,49,999", image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80", locations: ["Private Island", "Yacht", "Spa"], rating: 5.0, reviews: 520 },
    { id: 6, title: "Island Hopping", duration: "5 Days", startingPrice: "₹94,999", image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80", locations: ["Male", "Hulhumale", "Local Islands"], rating: 4.7, reviews: 340 }
  ];

  const activities = [
    { id: 1, title: "Snorkeling", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", location: "Coral Reefs" },
    { id: 2, title: "Scuba Diving", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", location: "Ari Atoll" },
    { id: 3, title: "Island Hopping", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80", location: "Local Islands" },
    { id: 4, title: "Underwater Restaurant", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80", location: "Ithaa Restaurant" }
  ];

  const destinations = [
    { id: 1, name: "Male", country: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80", packages: 15 },
    { id: 2, name: "Hulhumale", country: "Maldives", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80", packages: 12 },
    { id: 3, name: "Maafushi", country: "Maldives", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80", packages: 14 },
    { id: 4, name: "Addu Atoll", country: "Maldives", image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80", packages: 8 },
    { id: 5, name: "Baa Atoll", country: "Maldives", image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80", packages: 10 },
    { id: 6, name: "Ari Atoll", country: "Maldives", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 13 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Maldives?", answer: "November to April is ideal with dry weather and calm seas. May to October is monsoon season but offers better deals and fewer tourists." },
    { id: 2, question: "Do I need a visa for Maldives?", answer: "Indian passport holders get free 30-day visa on arrival. No pre-application needed. Just need valid passport and return ticket." },
    { id: 3, question: "What is included in the package?", answer: "Packages include flights, resort/hotel, meals (as per plan), speedboat/seaplane transfers, water activities, and honeymoon amenities." },
    { id: 4, question: "Is Maldives expensive?", answer: "Maldives caters to all budgets. While luxury resorts are expensive, guesthouses on local islands offer affordable alternatives with great experiences." },
    { id: 5, question: "What currency is used?", answer: "Maldivian Rufiyaa (MVR) and US Dollars are accepted. Most resorts prefer USD. 1 USD ≈ ₹83. Cards widely accepted." },
    { id: 6, question: "Can I customize my package?", answer: "Yes! Choose your resort, upgrade to water villa, add diving courses, or extend stay. We tailor packages to your preferences and budget." }
  ];

  const reviews = [
    { id: 1, name: "Ananya & Karthik", rating: 5, date: "January 2024", comment: "Perfect honeymoon! Water villa was stunning, crystal clear waters, amazing snorkeling. Romantic dinners and excellent service. Highly recommended!", location: "Bangalore" },
    { id: 2, name: "Priyanka Sharma", rating: 5, date: "December 2023", comment: "Dream vacation! Overwater bungalow was magical. Diving with manta rays was unforgettable. Beach was pristine. Will definitely return!", location: "Delhi" },
    { id: 3, name: "Varun Malhotra", rating: 4, date: "November 2023", comment: "Beautiful destination! Resort was excellent, food was great. Only downside was expensive extras but overall amazing tropical paradise!", location: "Mumbai" }
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
        <title>Maldives Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Maldives with our curated tour packages. Overwater villas, pristine beaches, diving and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Maldives Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Tropical Paradise Awaits</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹79,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">4-7 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Maldives Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Maldives Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Maldives is a tropical paradise of pristine beaches, crystal-clear turquoise waters, and luxurious overwater villas. Our Maldives packages offer the ultimate romantic getaway with world-class diving, stunning sunsets, and unforgettable experiences.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience luxury resorts, underwater restaurants, vibrant marine life, private island dinners, and rejuvenating spa treatments. Perfect for honeymoons, anniversaries, or anyone seeking paradise.</p>
                <p>Our packages range from budget-friendly guesthouses to ultra-luxury resorts, ensuring every traveler can experience the magic of Maldives.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Maldives</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Maldives Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Maldives Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Maldives adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Maldives trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaldivesTourPackagesPage;
