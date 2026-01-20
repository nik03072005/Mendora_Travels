import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const KeralaTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Kerala Backwaters", date: "September 15, 2026", seats: 15, booked: 11, price: "₹18,999", duration: "5 Days", highlights: ["Houseboat Stay", "Alleppey", "Vembanad Lake"] },
    { id: 2, name: "Hill Stations Tour", date: "November 20, 2026", seats: 12, booked: 8, price: "₹22,999", duration: "6 Days", highlights: ["Munnar", "Tea Gardens", "Thekkady"] },
    { id: 3, name: "Complete Kerala", date: "January 10, 2027", seats: 10, booked: 7, price: "₹26,999", duration: "8 Days", highlights: ["Munnar", "Alleppey", "Kovalam Beach"] },
    { id: 4, name: "Ayurveda Retreat", date: "April 5, 2027", seats: 8, booked: 5, price: "₹29,999", duration: "7 Days", highlights: ["Spa & Wellness", "Traditional Treatment", "Beach Resort"] }
  ];

  const tourPackages = [
    { id: 1, title: "Backwaters Bliss", duration: "5 Days", startingPrice: "₹16,999", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", locations: ["Alleppey", "Kumarakom", "Backwater Cruise"], rating: 4.9, reviews: 1120 },
    { id: 2, title: "Munnar Hills Escape", duration: "6 Days", startingPrice: "₹19,999", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80", locations: ["Munnar", "Tea Gardens", "Mattupetty"], rating: 4.8, reviews: 950 },
    { id: 3, title: "Alleppey Houseboat Tour", duration: "4 Days", startingPrice: "₹18,999", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", locations: ["Alleppey", "Vembanad Lake", "Houseboat"], rating: 5.0, reviews: 1350 },
    { id: 4, title: "Wayanad Wildlife Adventure", duration: "6 Days", startingPrice: "₹21,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Wayanad", "Wildlife Sanctuary", "Soochipara Falls"], rating: 4.7, reviews: 780 },
    { id: 5, title: "Complete Kerala Package", duration: "8 Days", startingPrice: "₹29,999", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80", locations: ["Munnar", "Thekkady", "Alleppey", "Kovalam"], rating: 4.9, reviews: 1450 },
    { id: 6, title: "Ayurveda Retreat", duration: "7 Days", startingPrice: "₹24,999", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", locations: ["Kovalam", "Ayurveda Resort", "Beach"], rating: 4.8, reviews: 820 }
  ];

  const activities = [
    { id: 1, title: "Houseboat Stay", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", location: "Alleppey Backwaters" },
    { id: 2, title: "Tea Garden Visit", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80", location: "Munnar Hills" },
    { id: 3, title: "Kathakali Show", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80", location: "Traditional Dance" },
    { id: 4, title: "Backwater Cruise", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", location: "Kumarakom Lake" }
  ];

  const destinations = [
    { id: 1, name: "Munnar", country: "Kerala", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80", packages: 30 },
    { id: 2, name: "Alleppey", country: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", packages: 28 },
    { id: 3, name: "Thekkady", country: "Kerala", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 22 },
    { id: 4, name: "Wayanad", country: "Kerala", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 20 },
    { id: 5, name: "Kovalam", country: "Kerala", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", packages: 18 },
    { id: 6, name: "Varkala", country: "Kerala", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80", packages: 16 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Kerala?", answer: "September to March is ideal with pleasant weather and comfortable temperatures. September-November (post-monsoon) offers lush greenery. December-February has cool weather perfect for sightseeing. June-August monsoon is beautiful but heavy rains. Summer (March-May) is hot but good for beach visits." },
    { id: 2, question: "Is it good to visit Kerala during monsoon?", answer: "Yes, especially for Ayurveda treatments. Monsoon (June-August) makes Kerala lush green and beautiful. Best time for Ayurveda as body absorbs oils better. Houseboat rides are romantic in rain. However, expect heavy rainfall, some activities limited, and carry rain gear. Off-season rates are cheaper." },
    { id: 3, question: "What are the famous Ayurveda treatments?", answer: "Popular treatments include Abhyangam (oil massage), Shirodhara (forehead oil flow), Pizhichil (oil bath), Njavarakizhi (rice massage), Panchakarma (detox). Treatments range 7-21 days for best results. Many authentic resorts in Kovalam, Varkala, Kumarakom. We recommend certified Ayurveda centers." },
    { id: 4, question: "What is special about Kerala food?", answer: "Kerala cuisine is unique with coconut, spices, seafood. Must-try: Sadya (feast on banana leaf), Appam with Stew, Fish Moilee, Prawn Curry, Puttu, Kerala Parotta, Banana Chips, Payasam. Vegetarian options abundant. Food is generally mild but can be spicy. Fresh toddy (palm wine) is local specialty." },
    { id: 5, question: "What types of houseboats are available?", answer: "Options include: Deluxe (basic amenities, affordable), Premium (AC bedrooms, better facilities), Luxury (premium furnishings, modern amenities), Ultra-Luxury (jacuzzi, private decks, chef). Available in 1-5 bedroom configurations. Prices range ₹6,000-₹50,000 per night. Includes meals, crew. Best in Alleppey and Kumarakom." },
    { id: 6, question: "Can I customize my Kerala package?", answer: "Absolutely! Add more houseboat days, include Ayurveda treatments, extend beach stays, add Periyar wildlife safari, include Athirapally waterfalls, add cultural shows (Kathakali, Mohiniyattam), plan honeymoon specials, or focus on backwaters/hills. We create personalized itineraries matching your interests and budget." }
  ];

  const reviews = [
    { id: 1, name: "Priya Iyer", rating: 5, date: "February 2023", comment: "God's Own Country indeed! Houseboat stay in Alleppey magical, Munnar tea gardens breathtaking. Ayurveda massage relaxing. Kerala cuisine delicious. Perfect blend of nature and culture!", location: "Chennai" },
    { id: 2, name: "Amit Desai", rating: 5, date: "January 2023", comment: "Fantastic family trip! Backwaters serene, Thekkady wildlife exciting, Kovalam beaches beautiful. Kathakali performance mesmerizing. Kerala hospitality warm. Highly recommend for peaceful vacation!", location: "Mumbai" },
    { id: 3, name: "Kavita Sharma", rating: 4, date: "December 2022", comment: "Wonderful honeymoon! Houseboat romantic, Munnar scenic. Food authentic and tasty. Only wished we had more time. Kerala is truly special place. Will visit again!", location: "Delhi" }
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
        <title>Kerala Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Kerala God's Own Country with our curated tour packages. Experience backwaters, houseboats, Munnar hills, Ayurveda and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kerala Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">God's Own Country</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹16,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">4-8 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Kerala Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Kerala Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Kerala, "God's Own Country," is India's most enchanting tropical paradise featuring serene backwaters, lush tea gardens, pristine beaches, traditional houseboats, and authentic Ayurveda. Our Kerala packages offer relaxation, romance, rejuvenation, and unforgettable cultural experiences.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience magical houseboat stays in Alleppey backwaters, explore misty Munnar tea plantations, witness elephants at Thekkady Periyar sanctuary, rejuvenate with traditional Ayurveda treatments, relax on Kovalam and Varkala beaches, watch mesmerizing Kathakali dance performances, cruise through tranquil Kumarakom lake, and savor authentic Kerala Sadya feast.</p>
                <p>Our packages include comfortable hotels/resorts/houseboats, experienced local guides familiar with Kerala culture, all transfers and boat rides, and complete arrangements for a safe, memorable, relaxing, and hassle-free experience throughout your journey in God's Own Country.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Kerala</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Kerala Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Kerala Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Kerala adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Kerala trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeralaTourPackagesPage;
