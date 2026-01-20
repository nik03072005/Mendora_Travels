import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AndamanTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Andaman Paradise", date: "October 20, 2026", seats: 15, booked: 11, price: "₹27,999", duration: "6 Days", highlights: ["Havelock Island", "Radhanagar Beach", "Water Sports"] },
    { id: 2, name: "Scuba Diving Group", date: "November 15, 2026", seats: 12, booked: 9, price: "₹34,999", duration: "7 Days", highlights: ["Diving Experience", "Marine Life", "Beach Activities"] },
    { id: 3, name: "Island Hopping", date: "January 10, 2027", seats: 10, booked: 7, price: "₹37,999", duration: "8 Days", highlights: ["Multiple Islands", "Beaches", "Snorkeling"] },
    { id: 4, name: "Complete Andaman", date: "April 5, 2027", seats: 8, booked: 5, price: "₹42,999", duration: "9 Days", highlights: ["Port Blair", "Havelock", "Neil Island"] }
  ];

  const tourPackages = [
    { id: 1, title: "Port Blair & Havelock", duration: "6 Days", startingPrice: "₹23,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Port Blair", "Havelock", "Radhanagar Beach"], rating: 4.9, reviews: 980 },
    { id: 2, title: "Neil Island Explorer", duration: "7 Days", startingPrice: "₹27,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Neil Island", "Natural Bridge", "Sitapur Beach"], rating: 4.8, reviews: 850 },
    { id: 3, title: "Scuba Diving Special", duration: "5 Days", startingPrice: "₹29,999", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", locations: ["Havelock", "North Bay", "Elephant Beach"], rating: 5.0, reviews: 1120 },
    { id: 4, title: "Complete Andaman Package", duration: "9 Days", startingPrice: "₹42,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Port Blair", "Havelock", "Neil", "Baratang"], rating: 4.9, reviews: 1250 },
    { id: 5, title: "Honeymoon Special", duration: "6 Days", startingPrice: "₹35,999", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80", locations: ["Havelock", "Neil Island", "Private Beach"], rating: 4.9, reviews: 920 },
    { id: 6, title: "Water Sports Adventure", duration: "5 Days", startingPrice: "₹26,999", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", locations: ["North Bay", "Elephant Beach", "Wandoor"], rating: 4.8, reviews: 780 }
  ];

  const activities = [
    { id: 1, title: "Scuba Diving", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", location: "Havelock Island" },
    { id: 2, title: "Snorkeling", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", location: "Elephant Beach" },
    { id: 3, title: "Radhanagar Beach", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80", location: "Asia's Best Beach" },
    { id: 4, title: "Cellular Jail", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80", location: "Historic Port Blair" }
  ];

  const destinations = [
    { id: 1, name: "Port Blair", country: "Andaman", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80", packages: 28 },
    { id: 2, name: "Havelock Island", country: "Andaman", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 25 },
    { id: 3, name: "Neil Island", country: "Andaman", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 20 },
    { id: 4, name: "Ross Island", country: "Andaman", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80", packages: 15 },
    { id: 5, name: "Baratang", country: "Andaman", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", packages: 12 },
    { id: 6, name: "North Bay", country: "Andaman", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 18 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Andaman?", answer: "October to May is ideal with pleasant weather, calm seas, and clear waters. October-February offers comfortable temperatures. March-May is hot but perfect for water sports. Avoid June-September monsoons due to rough seas, limited ferry services, and underwater visibility issues." },
    { id: 2, question: "How to reach Andaman Islands?", answer: "By Air: Direct flights from Delhi, Mumbai, Kolkata, Chennai, Bangalore to Port Blair (Veer Savarkar Airport). By Ship: Ships from Kolkata, Chennai, Visakhapatnam (3-4 days journey, irregular schedules). We recommend flights for comfort and time-saving. We arrange port/airport transfers." },
    { id: 3, question: "Do I need permits for Andaman?", answer: "Indian citizens don't need special permits for most tourist islands (Port Blair, Havelock, Neil). Foreign nationals need Restricted Area Permit (RAP), available on arrival. Some tribal areas like North Sentinel, Jarawa Reserve are strictly prohibited. We handle all permit formalities." },
    { id: 4, question: "What water sports are available?", answer: "Scuba diving (Havelock, Neil), snorkeling (Elephant Beach, North Bay), sea walking, parasailing, jet skiing, banana boat rides, glass bottom boat rides, kayaking. Scuba requires basic swimming skills. Best spots: Havelock for diving, North Bay for multiple activities." },
    { id: 5, question: "What is the budget for Andaman trip?", answer: "Budget: ₹25,000-35,000 per person for 5-6 days (economy hotels, shared transfers). Mid-range: ₹40,000-60,000 (good hotels, private cabs). Luxury: ₹80,000+ (beach resorts, water sports). Includes flights, hotels, ferries, sightseeing. Add ₹15,000-20,000 for scuba diving packages." },
    { id: 6, question: "Can I customize my Andaman package?", answer: "Absolutely! Add extra islands (Baratang caves, Ross Island), extend beach time, include advanced scuba courses (PADI), upgrade to beach resorts, add private yacht tours, plan honeymoon specials with candlelight dinners, or combine adventure with relaxation. We create personalized itineraries." }
  ];

  const reviews = [
    { id: 1, name: "Rajesh Kumar", rating: 5, date: "March 2023", comment: "Paradise found! Radhanagar Beach stunning, scuba diving at Havelock unforgettable. Crystal clear waters, colorful coral reefs, and amazing marine life. Best beach vacation ever!", location: "Bangalore" },
    { id: 2, name: "Sneha Patel", rating: 5, date: "February 2023", comment: "Perfect honeymoon! Neil Island was serene, Cellular Jail light show emotional. Water was so clear could see fish from boat. Romantic sunsets, delicious seafood. Highly recommend!", location: "Ahmedabad" },
    { id: 3, name: "Arjun Mehta", rating: 4, date: "January 2023", comment: "Amazing island hopping! Each island unique - Port Blair historic, Havelock adventurous, Neil peaceful. Only issue was ferry timings but views made up for it. Fantastic trip!", location: "Mumbai" }
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
        <title>Andaman Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Andaman Tropical Paradise with our curated tour packages. Visit Port Blair, Havelock, Neil Island and enjoy scuba diving, beaches with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Andaman Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Tropical Paradise</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹23,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">5-9 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Andaman Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Andaman Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Andaman, India's tropical paradise, features pristine white sand beaches, crystal-clear turquoise waters, vibrant coral reefs, and lush rainforests. Our Andaman packages offer adventure, relaxation, romance, and unforgettable island hopping experiences in the Bay of Bengal.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience world-class scuba diving in Havelock, relax on Asia's best beach (Radhanagar), explore historic Cellular Jail (Kala Pani), snorkel among colorful coral reefs, witness natural limestone caves in Baratang, enjoy thrilling water sports at North Bay, hop between picturesque islands, and savor fresh seafood delicacies.</p>
                <p>Our packages include comfortable hotels/beach resorts, ferry tickets (government and private), experienced dive instructors (PADI certified), all transfers, and complete arrangements for a safe, memorable, and hassle-free island adventure throughout your tropical escape.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Andaman</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Andaman Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Andaman Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Andaman adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Andaman trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AndamanTourPackagesPage;
