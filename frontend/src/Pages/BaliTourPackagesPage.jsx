import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import { FaMapMarkerAlt, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BaliTourPackagesPage = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const tourPackages = [
    {
      id: 1,
      title: "Bali Honeymoon Special",
      duration: "5 Days",
      startingPrice: "₹45,999",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      locations: ["Ubud", "Seminyak", "Nusa Dua"],
      rating: 4.9,
      reviews: 420
    },
    {
      id: 2,
      title: "Bali Adventure Tour",
      duration: "6 Days",
      startingPrice: "₹49,999",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      locations: ["Ubud", "Canggu", "Uluwatu"],
      rating: 4.8,
      reviews: 350
    },
    {
      id: 3,
      title: "Bali Beach Paradise",
      duration: "5 Days",
      startingPrice: "₹42,999",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      locations: ["Seminyak", "Nusa Penida", "Sanur"],
      rating: 4.7,
      reviews: 290
    },
    {
      id: 4,
      title: "Bali Cultural Experience",
      duration: "7 Days",
      startingPrice: "₹54,999",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      locations: ["Ubud", "Tanah Lot", "Tirta Empul"],
      rating: 4.9,
      reviews: 380
    },
    {
      id: 5,
      title: "Bali Family Package",
      duration: "6 Days",
      startingPrice: "₹51,999",
      image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&q=80",
      locations: ["Ubud", "Seminyak", "Sanur"],
      rating: 4.6,
      reviews: 220
    },
    {
      id: 6,
      title: "Bali Island Hopping",
      duration: "7 Days",
      startingPrice: "₹59,999",
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80",
      locations: ["Nusa Penida", "Nusa Lembongan", "Gili Islands"],
      rating: 4.8,
      reviews: 310
    }
  ];

  const activities = [
    {
      id: 1,
      title: "Water Sports",
      image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
      location: "Tanjung Benoa"
    },
    {
      id: 2,
      title: "Temple Tour",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
      location: "Ubud"
    },
    {
      id: 3,
      title: "Rice Terrace Walk",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
      location: "Tegallalang"
    },
    {
      id: 4,
      title: "Sunset at Tanah Lot",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
      location: "Tanah Lot Temple"
    }
  ];

  const destinations = [
    {
      id: 1,
      name: "Ubud",
      country: "Bali",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
      packages: 12
    },
    {
      id: 2,
      name: "Seminyak",
      country: "Bali",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
      packages: 10
    },
    {
      id: 3,
      name: "Nusa Penida",
      country: "Bali",
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80",
      packages: 8
    },
    {
      id: 4,
      name: "Canggu",
      country: "Bali",
      image: "https://images.unsplash.com/photo-1558005530-a7958896ec70?w=600&q=80",
      packages: 9
    },
    {
      id: 5,
      name: "Uluwatu",
      country: "Bali",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
      packages: 7
    },
    {
      id: 6,
      name: "Sanur",
      country: "Bali",
      image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=600&q=80",
      packages: 6
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the best time to visit Bali?",
      answer: "The best time to visit Bali is during the dry season from April to October. The weather is sunny and perfect for beach activities. July-August is peak season with more tourists."
    },
    {
      id: 2,
      question: "Do I need a visa for Bali?",
      answer: "Indian passport holders can get a Visa on Arrival (VOA) for 30 days, which can be extended for another 30 days. The VOA costs approximately $35 USD."
    },
    {
      id: 3,
      question: "What is included in the package price?",
      answer: "Our packages typically include flights, accommodation, daily breakfast, airport transfers, sightseeing tours with private driver. Some packages include lunch and dinner as well."
    },
    {
      id: 4,
      question: "Is Bali safe for travelers?",
      answer: "Yes, Bali is very safe for tourists. The locals are friendly and welcoming. However, always follow basic safety precautions and respect local customs and traditions."
    },
    {
      id: 5,
      question: "What currency is used in Bali?",
      answer: "Indonesian Rupiah (IDR) is the official currency. ATMs are widely available, and cards are accepted at most hotels and restaurants. It's good to carry some cash for smaller vendors."
    },
    {
      id: 6,
      question: "Can I customize my Bali tour?",
      answer: "Absolutely! We offer flexible itineraries. You can add activities, change hotels, or extend your stay. Contact our travel experts to create your perfect Bali vacation."
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Meera Reddy",
      rating: 5,
      date: "January 2024",
      comment: "Bali was absolutely magical! The temples, beaches, and rice terraces were breathtaking. Our guide was excellent and very knowledgeable.",
      location: "Hyderabad"
    },
    {
      id: 2,
      name: "Karan Singh",
      rating: 5,
      date: "December 2023",
      comment: "Perfect honeymoon destination! The private villa, romantic dinners, and couple activities were amazing. Thank you Mendora Travels!",
      location: "Mumbai"
    },
    {
      id: 3,
      name: "Divya Nair",
      rating: 4,
      date: "November 2023",
      comment: "Great family vacation! Kids loved the water sports and monkey forest. Hotels were clean and comfortable. Will definitely visit again!",
      location: "Kerala"
    }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Bali Tour Packages | Mendora Travels</title>
        <meta name="description" content="Explore Bali with our curated tour packages. Visit Ubud, Seminyak, Nusa Penida and more with Mendora Travels." />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <div 
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80')`
        }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bali Tour Packages</h1>
          <p className="text-xl md:text-2xl mb-6">Island of Gods Paradise</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">Starting from ₹42,999</span>
            </div>
            <div className="bg-blue-600 bg-opacity-90 px-6 py-3 rounded-full">
              <span className="font-semibold text-white">5-7 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Bali Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {pkg.duration}
                  </div>
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
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Bali Tours</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              Bali, the Island of Gods, is Indonesia's most famous destination known for its stunning beaches, ancient temples, lush rice terraces, and vibrant culture. 
              Our Bali tour packages offer the perfect blend of relaxation, adventure, and cultural experiences.
            </p>
            {expandedAbout && (
              <div className="text-gray-700 space-y-4">
                <p>
                  From surfing in Canggu to yoga in Ubud, from temple hopping to island hopping, Bali offers endless possibilities. 
                  Experience traditional Balinese dance, indulge in spa treatments, explore underwater marine life, or simply relax on pristine beaches.
                </p>
                <p>
                  Our packages include comfortable accommodations, private transfers, guided tours, and authentic experiences that showcase the best of Bali. 
                  Whether it's a romantic honeymoon, family vacation, or adventure trip, we have the perfect Bali package for you.
                </p>
              </div>
            )}
            <button 
              onClick={() => setExpandedAbout(!expandedAbout)}
              className="text-blue-600 font-semibold mt-4 flex items-center gap-2 hover:text-blue-700"
            >
              {expandedAbout ? 'Read Less' : 'Read More'}
              {expandedAbout ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Activities in Bali</h2>
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

      {/* Destinations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Bali Destinations</h2>
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

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {activeFAQ === faq.id ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-400" />}
                </button>
                {activeFAQ === faq.id && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
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

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Bali Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Bali adventure</p>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your dream Bali trip..."
                value={formData.message}
                onChange={handleFormChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BaliTourPackagesPage;
