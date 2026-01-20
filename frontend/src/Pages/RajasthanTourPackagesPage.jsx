import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const RajasthanTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Royal Rajasthan", date: "October 20, 2026", seats: 15, booked: 12, price: "₹22,999", duration: "7 Days", highlights: ["Jaipur", "Udaipur", "Jaisalmer"] },
    { id: 2, name: "Desert Safari Special", date: "November 15, 2026", seats: 12, booked: 9, price: "₹27,999", duration: "6 Days", highlights: ["Camel Safari", "Desert Camping", "Folk Dance"] },
    { id: 3, name: "Heritage Tour", date: "January 10, 2027", seats: 10, booked: 6, price: "₹32,999", duration: "9 Days", highlights: ["Forts & Palaces", "Culture", "History"] },
    { id: 4, name: "Complete Rajasthan", date: "March 5, 2027", seats: 8, booked: 5, price: "₹37,999", duration: "10 Days", highlights: ["All Major Cities", "Desert", "Lakes"] }
  ];

  const tourPackages = [
    { id: 1, title: "Golden Triangle Special", duration: "7 Days", startingPrice: "₹19,999", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", locations: ["Jaipur", "Udaipur", "Jaisalmer"], rating: 4.9, reviews: 1280 },
    { id: 2, title: "Jaipur Udaipur Delight", duration: "6 Days", startingPrice: "₹22,999", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80", locations: ["Jaipur", "Udaipur", "Pushkar"], rating: 4.8, reviews: 1050 },
    { id: 3, title: "Desert Safari Adventure", duration: "5 Days", startingPrice: "₹21,999", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", locations: ["Jaisalmer", "Sam Dunes", "Camel Safari"], rating: 4.9, reviews: 980 },
    { id: 4, title: "Heritage Forts Tour", duration: "8 Days", startingPrice: "₹29,999", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", locations: ["Jaipur", "Jodhpur", "Bikaner", "Jaisalmer"], rating: 4.7, reviews: 890 },
    { id: 5, title: "Complete Rajasthan Package", duration: "10 Days", startingPrice: "₹39,999", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80", locations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar"], rating: 4.9, reviews: 1450 },
    { id: 6, title: "Royal Experience", duration: "7 Days", startingPrice: "₹34,999", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", locations: ["Heritage Hotels", "Palace Tours", "Royal Dining"], rating: 5.0, reviews: 720 }
  ];

  const activities = [
    { id: 1, title: "Camel Safari", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", location: "Thar Desert, Jaisalmer" },
    { id: 2, title: "Palace Tours", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", location: "Jaipur & Udaipur" },
    { id: 3, title: "Desert Camping", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", location: "Sam Sand Dunes" },
    { id: 4, title: "Folk Dance Shows", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", location: "Cultural Performances" }
  ];

  const destinations = [
    { id: 1, name: "Jaipur", country: "Rajasthan", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", packages: 35 },
    { id: 2, name: "Udaipur", country: "Rajasthan", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", packages: 32 },
    { id: 3, name: "Jodhpur", country: "Rajasthan", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 28 },
    { id: 4, name: "Jaisalmer", country: "Rajasthan", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", packages: 25 },
    { id: 5, name: "Pushkar", country: "Rajasthan", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80", packages: 20 },
    { id: 6, name: "Bikaner", country: "Rajasthan", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 18 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Rajasthan?", answer: "October to March is ideal with pleasant weather and comfortable temperatures. October-November has festivals like Diwali, Pushkar Fair. December-February is peak season with cool weather perfect for sightseeing and desert safari. Summer (April-June) is extremely hot (40-45°C). Monsoon (July-September) is sparse but brings some relief." },
    { id: 2, question: "Should I cover desert or cities first?", answer: "Depends on your interest. Start with cities (Jaipur, Udaipur, Jodhpur) for forts, palaces, culture, then desert (Jaisalmer) for unique experience. Or reverse for gradual build-up. Complete packages cover both. Desert is best in winter evenings. We design optimal routes minimizing travel time and maximizing experience." },
    { id: 3, question: "Can I stay in heritage hotels?", answer: "Absolutely! Rajasthan has numerous heritage hotels - converted palaces, havelis, forts. Options range budget (₹3,000/night) to luxury (₹50,000+/night). Popular: Umaid Bhawan (Jodhpur), Lake Palace (Udaipur), Samode Palace (Jaipur). Book early, especially peak season. We include heritage hotels in our premium packages or can add to any package." },
    { id: 4, question: "What should I expect in camel safari?", answer: "Camel safari in Thar Desert (Jaisalmer) - 2 hours to full-day options. Expect slow-paced ride through dunes, sunset views, desert camping with cultural program, traditional Rajasthani dinner, folk music and dance. Can be bumpy, so wear comfortable clothes. Best time: Oct-Mar. We arrange experienced guides and comfortable camps." },
    { id: 5, question: "What is the approximate budget?", answer: "Budget trip: ₹15,000-25,000 per person for 7 days (budget hotels, public transport, basic meals). Mid-range: ₹30,000-50,000 (good hotels, private car, guided tours). Luxury: ₹70,000+ (heritage hotels, premium services). Add ₹5,000-10,000 for desert camping. Prices include accommodation, transport, meals, entry fees. Flight/train extra." },
    { id: 6, question: "Can I customize my Rajasthan package?", answer: "Absolutely! Add specific forts (Amber, Mehrangarh, Jaisalmer), include Ranthambore tiger safari, extend stays in favorite cities, upgrade to heritage hotels, add camel/jeep safari, include cultural programs, plan destination weddings, or focus on photography. We create personalized itineraries matching your interests, budget, and pace." }
  ];

  const reviews = [
    { id: 1, name: "Neha Gupta", rating: 5, date: "February 2023", comment: "Royal experience! Jaipur's palaces magnificent, Udaipur's lakes romantic, Jaisalmer's desert magical. Camel safari sunset unforgettable. Heritage hotel stay felt like royalty. Rajasthan exceeded expectations!", location: "Kolkata" },
    { id: 2, name: "Karthik Reddy", rating: 5, date: "January 2023", comment: "Amazing cultural journey! Every fort tells story, every city unique. Food delicious, people warm. Desert camping highlight with folk dance. Well-organized trip. Rajasthan is incredible!", location: "Hyderabad" },
    { id: 3, name: "Riya Singh", rating: 4, date: "December 2022", comment: "Fantastic family vacation! Kids loved camel ride, forts fascinating, colors everywhere beautiful. Pushkar peaceful. Only issue was winter fog affecting some mornings. Overall wonderful experience!", location: "Pune" }
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
        <title>Rajasthan Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Rajasthan Land of Kings with our curated tour packages. Visit Jaipur, Udaipur, Jaisalmer, experience desert safari, palaces and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rajasthan Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Land of Kings</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹19,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">5-10 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Rajasthan Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Rajasthan Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Rajasthan, the "Land of Kings," is India's most colorful and majestic state featuring magnificent forts and palaces, golden Thar Desert, vibrant culture, rich heritage, and royal hospitality. Our Rajasthan packages offer history, adventure, romance, and unforgettable royal experiences.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience the pink city Jaipur with iconic Hawa Mahal and Amber Fort, romantic Udaipur with beautiful Lake Palace and City Palace, blue city Jodhpur with mighty Mehrangarh Fort, golden city Jaisalmer with stunning desert fort and camel safari in Thar Desert, spiritual Pushkar with holy lake, explore magnificent palaces converted to heritage hotels, and witness colorful folk performances.</p>
                <p>Our packages include comfortable hotels (from budget to heritage properties), experienced local guides who bring history alive, all transfers in private vehicles, and complete arrangements for a safe, memorable, royal, and hassle-free experience throughout your majestic journey in the Land of Kings.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Rajasthan</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Rajasthan Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Rajasthan Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Rajasthan adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Rajasthan trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RajasthanTourPackagesPage;
