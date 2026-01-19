import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const KazakhstanTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const tourPackages = [
    { id: 1, title: "Almaty Discovery", duration: "6 Days", startingPrice: "₹69,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Almaty", "Medeu", "Big Lake"], rating: 4.8, reviews: 280 },
    { id: 2, title: "Silk Road Heritage", duration: "9 Days", startingPrice: "₹89,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Turkestan", "Shymkent", "Taraz"], rating: 4.9, reviews: 240 },
    { id: 3, title: "Astana & Almaty", duration: "7 Days", startingPrice: "₹79,999", image: "https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=800&q=80", locations: ["Astana", "Almaty", "Museums"], rating: 4.7, reviews: 310 },
    { id: 4, title: "Charyn Canyon Adventure", duration: "6 Days", startingPrice: "₹74,999", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80", locations: ["Charyn Canyon", "Kolsai Lakes", "Almaty"], rating: 4.8, reviews: 260 },
    { id: 5, title: "Cultural Kazakhstan", duration: "10 Days", startingPrice: "₹94,999", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80", locations: ["All Cities", "Historical Sites", "Nature"], rating: 4.9, reviews: 220 },
    { id: 6, title: "Complete Kazakhstan", duration: "12 Days", startingPrice: "₹1,09,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Almaty", "Astana", "Turkestan", "Canyons"], rating: 5.0, reviews: 190 }
  ];

  const activities = [
    { id: 1, title: "Skiing in Shymbulak", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", location: "Almaty" },
    { id: 2, title: "Nomadic Culture", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", location: "Steppes" },
    { id: 3, title: "Charyn Canyon Trek", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80", location: "Charyn National Park" },
    { id: 4, title: "Big Almaty Lake", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", location: "Almaty Region" }
  ];

  const destinations = [
    { id: 1, name: "Almaty", country: "Kazakhstan", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 18 },
    { id: 2, name: "Astana (Nur-Sultan)", country: "Kazakhstan", image: "https://images.unsplash.com/photo-1565192286976-9352bf89d75d?w=600&q=80", packages: 14 },
    { id: 3, name: "Shymkent", country: "Kazakhstan", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 10 },
    { id: 4, name: "Turkestan", country: "Kazakhstan", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", packages: 11 },
    { id: 5, name: "Charyn Canyon", country: "Kazakhstan", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80", packages: 12 },
    { id: 6, name: "Kolsai Lakes", country: "Kazakhstan", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 9 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Kazakhstan?", answer: "April-June and September-October are ideal with pleasant weather. July-August is warm but good for mountains. December-February is cold (-15°C to -30°C) but great for skiing." },
    { id: 2, question: "Do I need a visa for Kazakhstan?", answer: "Indian passport holders get 14-day visa-free entry. For longer stays, apply for e-visa online (2-5 working days). We assist with visa process if needed." },
    { id: 3, question: "What is included in the package?", answer: "Packages include flights, hotels with breakfast, airport transfers, guided city tours, transport for excursions, and select attractions like Medeu and Shymbulak." },
    { id: 4, question: "Is Kazakhstan expensive?", answer: "Moderate pricing. Hotels ₹3,000-8,000/night, meals ₹500-1,500. Transport and attractions affordable. Better value than Dubai or Europe for similar experiences." },
    { id: 5, question: "What currency is used?", answer: "Kazakhstani Tenge (KZT) is used. 1 KZT ≈ ₹0.18. 1 USD ≈ 450-500 KZT. Cards accepted in cities. ATMs available. Carry some cash for rural areas." },
    { id: 6, question: "Can I customize my tour?", answer: "Yes! Add trekking, extend stays, include specific regions, upgrade hotels, or arrange eagle hunting experiences. We tailor packages to your interests." }
  ];

  const reviews = [
    { id: 1, name: "Vikram Desai", rating: 5, date: "January 2024", comment: "Amazing adventure! Charyn Canyon was stunning like Grand Canyon. Big Almaty Lake was beautiful. Almaty city was modern and clean. Unique destination!", location: "Mumbai" },
    { id: 2, name: "Nisha Kapoor", rating: 5, date: "December 2023", comment: "Incredible experience! Skiing at Shymbulak was fantastic. Nomadic culture tour was fascinating. Astana architecture was futuristic. Highly recommend!", location: "Delhi" },
    { id: 3, name: "Sanjay Verma", rating: 4, date: "November 2023", comment: "Great trip! Turkestan mausoleum was impressive. Food was delicious, especially beshbarmak. Only issue was language barrier but guide helped. Worth visiting!", location: "Bangalore" }
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
        <title>Kazakhstan Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Kazakhstan with our curated tour packages. Visit Almaty, Astana, Charyn Canyon, Kolsai Lakes and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kazakhstan Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Heart of Central Asia</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹69,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">6-12 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Kazakhstan Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Kazakhstan Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Kazakhstan is Central Asia's largest country featuring stunning mountain ranges, dramatic canyons, pristine lakes, futuristic cities, rich nomadic heritage, and the historic Silk Road. Our Kazakhstan packages offer adventure, culture, and unique experiences in this emerging destination.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience breathtaking Charyn Canyon (like Grand Canyon), turquoise Big Almaty Lake, modern Astana architecture, historic Turkestan mausoleum, world-class skiing at Shymbulak, scenic Kolsai Lakes, and traditional nomadic yurt stays. Enjoy delicious Central Asian cuisine and warm Kazakh hospitality.</p>
                <p>Our packages include comfortable hotels, experienced guides, transport, and complete arrangements for an unforgettable Kazakhstan adventure.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Kazakhstan</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Kazakhstan Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Kazakhstan Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Kazakhstan adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Kazakhstan trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default KazakhstanTourPackagesPage;
