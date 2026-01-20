import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const LadakhTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Leh Ladakh Adventure", date: "May 20, 2026", seats: 15, booked: 11, price: "₹24,999", duration: "6 Days", highlights: ["Pangong Lake", "Nubra Valley", "Monasteries"] },
    { id: 2, name: "Bike Trip Special", date: "June 15, 2026", seats: 12, booked: 9, price: "₹29,999", duration: "8 Days", highlights: ["Manali to Leh", "Khardung La", "Adventure Ride"] },
    { id: 3, name: "Complete Ladakh", date: "July 20, 2026", seats: 10, booked: 7, price: "₹32,999", duration: "9 Days", highlights: ["All Major Spots", "Lakes & Passes", "Culture"] },
    { id: 4, name: "Pangong Expedition", date: "August 10, 2026", seats: 8, booked: 5, price: "₹34,999", duration: "7 Days", highlights: ["Pangong Tso", "Tso Moriri", "High Passes"] }
  ];

  const tourPackages = [
    { id: 1, title: "Leh Ladakh Adventure", duration: "6 Days", startingPrice: "₹24,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Leh", "Nubra Valley", "Pangong Lake"], rating: 4.9, reviews: 650 },
    { id: 2, title: "Manali to Leh Bike Trip", duration: "9 Days", startingPrice: "₹34,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Manali", "Khardung La", "Leh"], rating: 5.0, reviews: 720 },
    { id: 3, title: "Ladakh Complete Tour", duration: "8 Days", startingPrice: "₹29,999", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80", locations: ["Leh", "Pangong", "Tso Moriri", "Nubra"], rating: 4.8, reviews: 580 },
    { id: 4, title: "Srinagar Leh Tour", duration: "7 Days", startingPrice: "₹27,999", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&q=80", locations: ["Srinagar", "Kargil", "Leh"], rating: 4.7, reviews: 490 },
    { id: 5, title: "Ladakh Family Package", duration: "6 Days", startingPrice: "₹26,999", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", locations: ["Leh", "Shanti Stupa", "Pangong"], rating: 4.6, reviews: 420 },
    { id: 6, title: "Ladakh Trekking Expedition", duration: "10 Days", startingPrice: "₹39,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Markha Valley", "Stok Kangri", "Leh"], rating: 4.9, reviews: 380 }
  ];

  const activities = [
    { id: 1, title: "Khardung La Pass", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", location: "World's Highest Motorable Road" },
    { id: 2, title: "Pangong Lake", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80", location: "3 Idiots Fame Lake" },
    { id: 3, title: "Nubra Valley", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80", location: "Double Humped Camel Safari" },
    { id: 4, title: "Magnetic Hill", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", location: "Gravity Defying Road" }
  ];

  const destinations = [
    { id: 1, name: "Leh", country: "Ladakh", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 20 },
    { id: 2, name: "Pangong Lake", country: "Ladakh", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80", packages: 18 },
    { id: 3, name: "Nubra Valley", country: "Ladakh", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80", packages: 16 },
    { id: 4, name: "Tso Moriri", country: "Ladakh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 12 },
    { id: 5, name: "Khardung La", country: "Ladakh", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 15 },
    { id: 6, name: "Zanskar Valley", country: "Ladakh", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 10 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Ladakh?", answer: "May to September is ideal with pleasant weather and open roads. June-August is peak season. September offers fewer crowds. October onwards roads close due to heavy snow." },
    { id: 2, question: "Do I need any permits for Ladakh?", answer: "Inner Line Permits (ILP) needed for Nubra Valley, Pangong Lake, Tso Moriri. Can be obtained online or in Leh. Valid ID proof required. We assist with permit arrangements." },
    { id: 3, question: "How to reach Ladakh?", answer: "By Air: Fly to Leh (from Delhi, Mumbai, Srinagar). By Road: Manali-Leh highway (May-Oct) or Srinagar-Leh highway (Apr-Nov). Both offer stunning views but high altitude." },
    { id: 4, question: "How to deal with altitude sickness?", answer: "Acclimatize in Leh for 2 days. Stay hydrated, avoid alcohol, rest well. Walk slowly, take Diamox if needed. Descend immediately if severe symptoms. Most recover in 24-48 hours." },
    { id: 5, question: "What should I pack for Ladakh?", answer: "Warm clothes (even in summer), sunscreen (SPF 50+), sunglasses, moisturizer, medicines, power bank, torch. Layers work best as temperature varies. Good trekking shoes essential." },
    { id: 6, question: "Can I customize my Ladakh package?", answer: "Absolutely! Add bike rentals, extend stays, include specific monasteries, add trekking routes, upgrade hotels, or plan Zanskar Valley. We create personalized itineraries." }
  ];

  const reviews = [
    { id: 1, name: "Rahul Sharma", rating: 5, date: "August 2023", comment: "Breathtaking experience! Pangong Lake was mesmerizing, Khardung La thrilling. Well-organized trip with great guides. Acclimatization days helped. Must-visit destination!", location: "Delhi" },
    { id: 2, name: "Priya Menon", rating: 5, date: "July 2023", comment: "Dream trip! Nubra Valley camel safari was unique. Monasteries were peaceful. Roads challenging but views worth it. Best vacation ever. Highly recommend!", location: "Bangalore" },
    { id: 3, name: "Amit Patel", rating: 4, date: "June 2023", comment: "Amazing adventure! Leh market was vibrant, Pangong stunning. Only issue was altitude sickness first day but recovered. Overall fantastic experience!", location: "Mumbai" }
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
        <title>Ladakh Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Ladakh with our curated tour packages. Visit Leh, Pangong Lake, Nubra Valley, Khardung La and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ladakh Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Land of High Passes</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹24,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">6-10 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Ladakh Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Ladakh Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Ladakh, the "Land of High Passes," is India's most spectacular mountain destination featuring breathtaking landscapes, pristine lakes, ancient monasteries, and thrilling high-altitude passes. Our Ladakh packages offer adventure, spirituality, and unforgettable Himalayan experiences.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience the stunning blue Pangong Lake, thrilling Khardung La (highest motorable road), serene Nubra Valley with Bactrian camels, mystical monasteries like Thiksey and Hemis, and adventure activities like river rafting and trekking.</p>
                <p>Our packages include comfortable hotels, oxygen cylinders, experienced drivers familiar with high-altitude roads, and complete arrangements for a safe and memorable Ladakh adventure.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Ladakh</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Ladakh Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Ladakh Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Ladakh adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Ladakh trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LadakhTourPackagesPage;
