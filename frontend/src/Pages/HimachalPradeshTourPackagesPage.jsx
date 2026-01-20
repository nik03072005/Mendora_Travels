import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HimachalPradeshTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const groupTours = [
    { id: 1, name: "Himachal Adventure", date: "April 20, 2026", seats: 15, booked: 11, price: "₹19,999", duration: "6 Days", highlights: ["Manali", "Solang Valley", "Rohtang Pass"] },
    { id: 2, name: "Shimla Manali", date: "June 15, 2026", seats: 12, booked: 9, price: "₹24,999", duration: "7 Days", highlights: ["Shimla Mall Road", "Manali", "Adventure"] },
    { id: 3, name: "Complete Himachal", date: "October 10, 2026", seats: 10, booked: 6, price: "₹29,999", duration: "9 Days", highlights: ["Shimla", "Manali", "Dharamshala"] },
    { id: 4, name: "Hill Stations Retreat", date: "December 5, 2026", seats: 8, booked: 5, price: "₹32,999", duration: "8 Days", highlights: ["Kasauli", "Dalhousie", "McLeodganj"] }
  ];

  const tourPackages = [
    { id: 1, title: "Shimla Manali Special", duration: "7 Days", startingPrice: "₹17,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Shimla", "Manali", "Solang Valley"], rating: 4.9, reviews: 1350 },
    { id: 2, title: "Dharamshala McLeodganj", duration: "5 Days", startingPrice: "₹19,999", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", locations: ["Dharamshala", "McLeodganj", "Triund"], rating: 4.8, reviews: 920 },
    { id: 3, title: "Adventure Himachal", duration: "8 Days", startingPrice: "₹26,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", locations: ["Manali", "Bir Billing", "Rishikesh"], rating: 5.0, reviews: 1150 },
    { id: 4, title: "Kinnaur Spiti Circuit", duration: "10 Days", startingPrice: "₹32,999", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80", locations: ["Kinnaur", "Spiti", "Kaza", "Tabo"], rating: 4.9, reviews: 780 },
    { id: 5, title: "Complete Himachal Package", duration: "12 Days", startingPrice: "₹29,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", locations: ["Shimla", "Manali", "Dharamshala", "Dalhousie"], rating: 4.8, reviews: 1520 },
    { id: 6, title: "Hill Station Retreat", duration: "6 Days", startingPrice: "₹18,999", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", locations: ["Kasol", "Kullu", "Manikaran"], rating: 4.7, reviews: 850 }
  ];

  const activities = [
    { id: 1, title: "Paragliding", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", location: "Bir Billing - Paragliding Capital" },
    { id: 2, title: "River Rafting", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", location: "Kullu & Rishikesh" },
    { id: 3, title: "Rohtang Pass", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80", location: "Snow Adventure - Manali" },
    { id: 4, title: "Monastery Tours", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", location: "Dalai Lama Temple" }
  ];

  const destinations = [
    { id: 1, name: "Shimla", country: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 32 },
    { id: 2, name: "Manali", country: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 35 },
    { id: 3, name: "Dharamshala", country: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 28 },
    { id: 4, name: "Kasol", country: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", packages: 22 },
    { id: 5, name: "Kullu", country: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", packages: 25 },
    { id: 6, name: "Dalhousie", country: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 20 }
  ];

  const faqs = [
    { id: 1, question: "What is the best time to visit Himachal Pradesh?", answer: "March to June (summer) for pleasant weather, sightseeing, adventure activities. December to February for snow lovers - Shimla, Manali, Kufri have snowfall. September-November (autumn) offers post-monsoon beauty. Monsoon (July-August) brings landslide risks but lush landscapes. Each season has unique charm depending on your preference." },
    { id: 2, question: "What adventure activities are available?", answer: "Paragliding in Bir Billing (best in India), river rafting in Kullu valley, skiing in Solang Valley and Narkanda, trekking (Triund, Hampta Pass, Pin Parvati), zorbing, zip-lining, camping, mountain biking. Summer offers all activities. Winter has skiing, snowboarding. We arrange certified operators for safe adventures." },
    { id: 3, question: "Do I need permits for Spiti Valley?", answer: "Indian citizens don't need special permits for most Himachal areas. However, Inner Line Permit (ILP) required for certain areas near Tibet border (parts of Kinnaur, restricted zones). Can be obtained online or at district headquarters. Valid ID proof mandatory everywhere. We assist with all permit arrangements for Spiti Circuit tours." },
    { id: 4, question: "What should I pack for Himachal trip?", answer: "Comfortable walking shoes, warm clothes (even in summer, evenings are cold), woollens for winter, sunscreen (SPF 50+), sunglasses, cap, medicines (altitude sickness if visiting high areas), power bank, torch, raincoat (monsoon/unexpected rain). Winter requires heavy jackets, thermals, gloves. Layers work best as temperature varies throughout day." },
    { id: 5, question: "How to reach major Himachal destinations?", answer: "By Air: Nearest airports - Shimla (Jubbarhatti), Kullu-Manali (Bhuntar), Dharamshala (Gaggal). By Train: Kalka-Shimla toy train (UNESCO heritage), Pathankot for Dharamshala. By Road: Well-connected from Delhi (volvo buses, taxis). We arrange pickups from all entry points and handle all transfers throughout the journey." },
    { id: 6, question: "Can I customize my Himachal package?", answer: "Absolutely! Add adventure activities (paragliding, rafting, skiing), include offbeat destinations (Tirthan Valley, Malana, Chitkul), extend stays in favorite places, upgrade to luxury resorts, plan Spiti Valley circuit, combine with Ladakh, add monastery visits, or focus on nature/adventure. We create personalized itineraries matching your interests and budget." }
  ];

  const reviews = [
    { id: 1, name: "Rohit Malhotra", rating: 5, date: "May 2023", comment: "Perfect mountain escape! Shimla charming, Manali breathtaking, Solang Valley adventure thrilling. Rohtang Pass snow experience unforgettable. Himachal's beauty beyond words. Will definitely return!", location: "Delhi" },
    { id: 2, name: "Pooja Nair", rating: 5, date: "April 2023", comment: "Amazing trip! Paragliding in Bir Billing lifetime experience. Dharamshala peaceful, McLeodganj spiritual. Tibetan culture fascinating. Food delicious. Well-organized tour. Highly recommend!", location: "Bangalore" },
    { id: 3, name: "Arun Kumar", rating: 4, date: "March 2023", comment: "Wonderful family vacation! Kids loved toy train, snow activities fun. Kullu valley beautiful. Only issue was traffic on Mall Road. Overall fantastic experience in mountains!", location: "Chennai" }
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
        <title>Himachal Pradesh Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Himachal Pradesh Land of Gods with our curated tour packages. Visit Shimla, Manali, Dharamshala, experience adventure, mountains with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')` }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Himachal Pradesh Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Land of Gods</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">Starting from ₹17,999</span></div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full"><span className="font-semibold text-white">5-12 Days</span></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Himachal Pradesh Tour Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Himachal Pradesh Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Himachal Pradesh, the "Land of Gods," is India's ultimate mountain destination featuring majestic Himalayas, charming hill stations, adventure sports paradise, ancient monasteries, and pristine landscapes. Our Himachal packages offer adventure, spirituality, romance, and unforgettable Himalayan experiences.</p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>Experience colonial charm in Shimla with Mall Road and Ridge, adventure capital Manali with Solang Valley and Rohtang Pass, spiritual Dharamshala home to Dalai Lama, paragliding capital Bir Billing, hippie paradise Kasol in Parvati Valley, thrilling river rafting in Kullu, snow activities in winter, mysterious Spiti Valley cold desert, apple orchards, and pine forests.</p>
                <p>Our packages include comfortable hotels/resorts, experienced mountain drivers familiar with hill roads, adventure activity arrangements with certified operators, all transfers, and complete arrangements for a safe, memorable, thrilling, and hassle-free experience throughout your mountain adventure in the Land of Gods.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Himachal Pradesh</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Himachal Pradesh Destinations</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Himachal Pradesh Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Himachal Pradesh adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required />
              <textarea name="message" placeholder="Tell us about your dream Himachal Pradesh trip..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HimachalPradeshTourPackagesPage;
