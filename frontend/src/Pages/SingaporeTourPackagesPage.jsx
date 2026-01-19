import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SingaporeTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const tourPackages = [
    { id: 1, title: "Singapore City Break", duration: "4 Days", startingPrice: "₹44,999", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80", locations: ["Marina Bay", "Sentosa", "Gardens"], rating: 4.8, reviews: 480 },
    { id: 2, title: "Singapore Family Fun", duration: "5 Days", startingPrice: "₹54,999", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80", locations: ["Universal Studios", "Zoo", "Aquarium"], rating: 4.9, reviews: 520 },
    { id: 3, title: "Singapore & Sentosa", duration: "6 Days", startingPrice: "₹59,999", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80", locations: ["Sentosa Island", "Marina Bay", "Orchard"], rating: 4.7, reviews: 390 },
    { id: 4, title: "Singapore Gardens", duration: "4 Days", startingPrice: "₹47,999", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", locations: ["Gardens by Bay", "Botanic Gardens", "Marina"], rating: 4.6, reviews: 340 },
    { id: 5, title: "Shopping Spree", duration: "5 Days", startingPrice: "₹52,999", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80", locations: ["Orchard Road", "Marina Bay Sands", "Chinatown"], rating: 4.7, reviews: 310 },
    { id: 6, title: "Complete Singapore", duration: "7 Days", startingPrice: "₹69,999", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80", locations: ["All Attractions", "Cruise", "Theme Parks"], rating: 4.9, reviews: 450 }
  ];

  const activities = [
    { id: 1, title: "Universal Studios", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80", location: "Sentosa Island" },
    { id: 2, title: "Gardens by the Bay", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80", location: "Marina Bay" },
    { id: 3, title: "Night Safari", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80", location: "Singapore Zoo" },
    { id: 4, title: "Sentosa Island", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80", location: "Sentosa" }
  ];

  const destinations = [
    { id: 1, name: "Marina Bay", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", packages: 16 },
    { id: 2, name: "Sentosa", country: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80", packages: 14 },
    { id: 3, name: "Little India", country: "Singapore", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80", packages: 10 },
    { id: 4, name: "Chinatown", country: "Singapore", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80", packages: 12 },
    { id: 5, name: "Orchard Road", country: "Singapore", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80", packages: 11 },
    { id: 6, name: "Jurong", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", packages: 8 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Singapore?", answer: "Singapore is a year-round destination with consistent weather. February to April is slightly drier. May to October can have occasional showers but is still great for visiting." },
    { id: 2, question: "Do I need a visa for Singapore?", answer: "Indian passport holders need a visa. Apply for e-visa online (2-5 working days). We assist with the visa application process as part of our packages." },
    { id: 3, question: "What is included in the package?", answer: "Packages include flights, accommodation, breakfast, airport transfers, city tour, and select attractions like Universal Studios or Gardens by the Bay." },
    { id: 4, question: "Is Singapore expensive?", answer: "Singapore can be expensive but offers value for money. Street food at hawker centers is affordable. We include budget-friendly options in our packages." },
    { id: 5, question: "What currency is used?", answer: "Singapore Dollar (SGD) is used. 1 SGD ≈ ₹62. Cards widely accepted everywhere. ATMs available throughout the city." },
    { id: 6, question: "Can I customize my tour?", answer: "Yes! Add attractions, upgrade hotels, extend stay, or include specific activities. We tailor packages to match your interests and budget." }
  ];

  const reviews = [
    { id: 1, name: "Ravi Kumar", rating: 5, date: "January 2024", comment: "Perfect family vacation! Kids loved Universal Studios and the Zoo. Marina Bay light show was spectacular. Very clean and safe city!", location: "Chennai" },
    { id: 2, name: "Anjali Gupta", rating: 5, date: "December 2023", comment: "Amazing trip! Gardens by the Bay was breathtaking. Shopping on Orchard Road was fantastic. Food at hawker centers was delicious and cheap!", location: "Delhi" },
    { id: 3, name: "Sameer Patel", rating: 4, date: "November 2023", comment: "Great destination! Sentosa was fun, Night Safari was unique. Only complaint was expensive attractions but worth it for the experience!", location: "Ahmedabad" }
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
        <title>Singapore Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Singapore with our curated tour packages. Visit Marina Bay, Universal Studios, Gardens by the Bay and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Singapore Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Garden City of Asia</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹44,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">4-7 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Singapore Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Singapore Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Singapore is a vibrant modern city-state known for its stunning architecture, world-class attractions, diverse cuisine, and spotless streets. Our Singapore packages offer the perfect blend of entertainment, culture, shopping, and nature.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience iconic Gardens by the Bay, thrilling Universal Studios, amazing Night Safari, stunning Marina Bay Sands, and vibrant ethnic neighborhoods. Enjoy world-class shopping, delicious hawker food, and futuristic skyline.</p>
                <p>Our packages include comfortable hotels, guided tours, major attractions, and hassle-free arrangements for a memorable Singapore vacation.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Singapore</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Singapore Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Singapore Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Singapore adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Singapore trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingaporeTourPackagesPage;
