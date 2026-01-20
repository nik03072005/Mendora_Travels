import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MalaysiaTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Malaysia Delight", date: "April 15, 2026", seats: 15, booked: 10, price: "₹39,999", duration: "6 Days", highlights: ["Kuala Lumpur", "Genting Highlands", "Batu Caves"] },
    { id: 2, name: "KL & Beaches", date: "May 25, 2026", seats: 12, booked: 9, price: "₹54,999", duration: "7 Days", highlights: ["Kuala Lumpur", "Langkawi Island", "Beach Resort"] },
    { id: 3, name: "Complete Malaysia", date: "July 10, 2026", seats: 10, booked: 6, price: "₹59,999", duration: "8 Days", highlights: ["KL", "Penang", "Cameron Highlands"] },
    { id: 4, name: "Island Paradise", date: "August 20, 2026", seats: 8, booked: 5, price: "₹49,999", duration: "6 Days", highlights: ["Langkawi", "Island Hopping", "Water Sports"] }
  ];

  const tourPackages = [
    { id: 1, title: "Kuala Lumpur Explorer", duration: "4 Days", startingPrice: "₹39,999", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80", locations: ["KL Tower", "Batu Caves", "Petronas"], rating: 4.7, reviews: 420 },
    { id: 2, title: "KL & Genting Highlands", duration: "5 Days", startingPrice: "₹44,999", image: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=800&q=80", locations: ["Kuala Lumpur", "Genting", "Theme Park"], rating: 4.8, reviews: 460 },
    { id: 3, title: "Beach Holiday", duration: "6 Days", startingPrice: "₹54,999", image: "https://images.unsplash.com/photo-1551844304-2f6b0f12b06e?w=800&q=80", locations: ["Langkawi", "Beach Resort", "Island Tour"], rating: 4.9, reviews: 380 },
    { id: 4, title: "Cameron Highlands", duration: "4 Days", startingPrice: "₹42,999", image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80", locations: ["Tea Plantations", "Strawberry Farm", "Hills"], rating: 4.6, reviews: 290 },
    { id: 5, title: "Penang & Langkawi", duration: "7 Days", startingPrice: "₹59,999", image: "https://images.unsplash.com/photo-1551844304-2f6b0f12b06e?w=800&q=80", locations: ["George Town", "Langkawi", "Island Hopping"], rating: 4.8, reviews: 350 },
    { id: 6, title: "Complete Malaysia", duration: "8 Days", startingPrice: "₹69,999", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80", locations: ["KL", "Penang", "Langkawi", "Genting"], rating: 4.9, reviews: 410 }
  ];

  const activities = [
    { id: 1, title: "Petronas Twin Towers", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", location: "Kuala Lumpur" },
    { id: 2, title: "Batu Caves", image: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=600&q=80", location: "Selangor" },
    { id: 3, title: "Genting Highlands", image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80", location: "Genting" },
    { id: 4, title: "Island Hopping", image: "https://images.unsplash.com/photo-1551844304-2f6b0f12b06e?w=600&q=80", location: "Langkawi" }
  ];

  const destinations = [
    { id: 1, name: "Kuala Lumpur", country: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", packages: 18 },
    { id: 2, name: "Genting Highlands", country: "Malaysia", image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80", packages: 12 },
    { id: 3, name: "Penang", country: "Malaysia", image: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=600&q=80", packages: 14 },
    { id: 4, name: "Langkawi", country: "Malaysia", image: "https://images.unsplash.com/photo-1551844304-2f6b0f12b06e?w=600&q=80", packages: 15 },
    { id: 5, name: "Malacca", country: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", packages: 10 },
    { id: 6, name: "Cameron Highlands", country: "Malaysia", image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80", packages: 9 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Malaysia?", answer: "December to April is dry season, ideal for beaches. May to October is monsoon but still good for visiting. Year-round destination with tropical weather." },
    { id: 2, question: "Do I need a visa for Malaysia?", answer: "Indian passport holders get free 30-day visa on arrival (eVISA). Just need valid passport and confirmed return ticket. We assist with the process." },
    { id: 3, question: "What is included in the package?", answer: "Packages include flights, hotels with breakfast, airport transfers, city tours, Genting cable car, and major attractions based on itinerary." },
    { id: 4, question: "Is Malaysia expensive?", answer: "Malaysia is affordable with good value. Street food is cheap (₹50-150), hotels are reasonable, and attractions are budget-friendly compared to Singapore." },
    { id: 5, question: "What currency is used?", answer: "Malaysian Ringgit (MYR) is used. 1 MYR ≈ ₹18-19. Cards accepted widely. ATMs available. Some places accept SGD near Singapore border." },
    { id: 6, question: "Can I customize my package?", answer: "Yes! Add destinations like Malacca, upgrade hotels, include specific activities, or extend stay. We create packages matching your preferences." }
  ];

  const reviews = [
    { id: 1, name: "Suresh Reddy", rating: 5, date: "January 2024", comment: "Fantastic trip! Petronas Towers were magnificent, Genting was fun, Batu Caves were spiritual. Food was amazing and people very friendly!", location: "Hyderabad" },
    { id: 2, name: "Priya Nair", rating: 5, date: "December 2023", comment: "Loved Malaysia! Langkawi beaches were pristine, George Town food tour was delicious. Great shopping and very affordable. Perfect vacation!", location: "Kerala" },
    { id: 3, name: "Aditya Sharma", rating: 4, date: "November 2023", comment: "Good family trip! Cameron Highlands were beautiful, tea plantations amazing. Kids loved Genting theme park. Would recommend!", location: "Pune" }
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
        <title>Malaysia Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Malaysia with our curated tour packages. Visit Kuala Lumpur, Langkawi, Penang, Genting Highlands and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Malaysia Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Truly Asia Experience</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹39,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">4-8 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Malaysia Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Malaysia Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Malaysia is a diverse tropical paradise featuring modern cities, pristine beaches, lush highlands, rich culture, and delicious cuisine. Our Malaysia packages offer the perfect mix of urban excitement, natural beauty, and cultural experiences.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience iconic Petronas Towers, spiritual Batu Caves, cool Cameron Highlands tea plantations, exciting Genting theme parks, beautiful Langkawi beaches, and historic George Town. Enjoy amazing street food, shopping, and warm Malaysian hospitality.</p>
                <p>Our packages include comfortable accommodations, guided tours, major attractions, and complete arrangements for a memorable Malaysian adventure.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Malaysia</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Malaysia Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Malaysia Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Malaysia adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Malaysia trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MalaysiaTourPackagesPage;
