import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import HomeNavbar from '../Components/HomeNavbar';

const InternationalTripsPage = () => {
  const navigate = useNavigate();
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccessMessage(true);
    setFormData({ name: '', email: '', phoneNumber: '', message: '' });
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  // International destinations with additional data
  const internationalDestinations = [
    {
      name: "Europe",
      slug: "europe",
      continent: "Europe",
      price: "1,49,999",
      duration: "10-15 Days",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      highlights: ["Eiffel Tower", "Roman Colosseum", "Swiss Alps"],
      popular: true
    },
    {
      name: "Thailand",
      slug: "thailand",
      continent: "Asia",
      price: "44,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      highlights: ["Bangkok", "Phuket", "Pattaya"],
      popular: true
    },
    {
      name: "Bali",
      slug: "bali",
      continent: "Asia",
      price: "49,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      highlights: ["Ubud", "Seminyak", "Nusa Penida"],
      popular: true
    },
    {
      name: "Vietnam",
      slug: "vietnam",
      continent: "Asia",
      price: "59,999",
      duration: "6-8 Days",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
      highlights: ["Hanoi", "Ha Long Bay", "Ho Chi Minh"],
      popular: false
    },
    {
      name: "Dubai",
      slug: "dubai",
      continent: "Middle East",
      price: "69,999",
      duration: "4-6 Days",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
      popular: true
    },
    {
      name: "Maldives",
      slug: "maldives",
      continent: "Asia",
      price: "89,999",
      duration: "4-6 Days",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      highlights: ["Water Villas", "Coral Reefs", "Island Hopping"],
      popular: true
    },
    {
      name: "Singapore",
      slug: "singapore",
      continent: "Asia",
      price: "54,999",
      duration: "4-5 Days",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
      highlights: ["Marina Bay", "Sentosa", "Gardens by the Bay"],
      popular: false
    },
    {
      name: "Malaysia",
      slug: "malaysia",
      continent: "Asia",
      price: "52,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
      highlights: ["Kuala Lumpur", "Langkawi", "Genting Highlands"],
      popular: false
    },
    {
      name: "Japan",
      slug: "japan",
      continent: "Asia",
      price: "1,29,999",
      duration: "7-10 Days",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      highlights: ["Tokyo", "Kyoto", "Mount Fuji"],
      popular: false
    },
    {
      name: "Kazakhstan",
      slug: "kazakhstan",
      continent: "Asia",
      price: "47,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
      highlights: ["Almaty", "Charyn Canyon", "Big Almaty Lake"],
      popular: false
    },
    {
      name: "Bhutan",
      slug: "bhutan",
      continent: "Asia",
      price: "65,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
      highlights: ["Tiger's Nest", "Paro Valley", "Thimphu"],
      popular: false
    },
    {
      name: "Sri Lanka",
      slug: "sri-lanka",
      continent: "Asia",
      price: "28,999",
      duration: "5-6 Days",
      image: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80",
      highlights: ["Sigiriya", "Kandy", "Galle"],
      popular: false
    }
  ];

  const handleDestinationClick = (slug) => {
    navigate(`/international-trips/${slug}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>International Tour Packages | Explore World Destinations | Mendora Travels</title>
        <meta
          name="description"
          content="Discover amazing international tour packages to exotic destinations worldwide. Book customized trips to Thailand, Bali, Dubai, Maldives, Europe and more with Mendora Travels."
        />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <div className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/45 via-white/40 to-white/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <span>Explore The World</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                International Tour Packages - Book Now At Best Prices
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover The World Your Way - Find The Perfect International Tour Package Today!
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Travellers</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600">18K+</div>
                  <div className="text-sm text-gray-600 mt-1">5 Star Reviews</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-sm text-gray-600 mt-1">Itineraries</div>
                </div>
              </div>

              {/* Review Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-md">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="font-bold text-gray-900">4.9</span>
                    <span className="text-sm text-gray-500">(14K+ reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-md">
                  <img src="https://www.tripadvisor.com/favicon.ico" alt="TripAdvisor" className="w-6 h-6" />
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="font-bold text-gray-900">5.0</span>
                    <span className="text-sm text-gray-500">(3.8K+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Not sure what to do?</h3>
                <p className="text-gray-600">We'll give you a <span className="text-blue-600 font-semibold">Call back</span></p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Id</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email id"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Informational Content Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Best International Tour Packages in Town</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Ditch the long searches and travel confusion, your perfect international tour package is right here offered by <strong>Mendora Travels</strong>. More than 20+ iconic destinations and perfect international trip packages covered by a team of experts that provide no less than a wholesome experience.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              From thrilling adventures to hearty shopping sagas and from capturing scenic beauties to eating the best cuisines worldwide, we make sure you create memories that last for a lifetime. Choose our best international trips, <strong>customize as per your preferences</strong> and take off on your journey that holds magical elements.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Our international trips packages range from <strong>INR 28,999 - INR 1,49,000 per person</strong>. Further, you can experience all that's in your bucket list with our <strong>Seasonal Early Bird Discounts</strong> to discover the best of everything that too on a budget.
            </p>

            {/* Collapsible Content */}
            <div className={`overflow-hidden transition-all duration-500 ${isContentExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our International Tour Packages Are The Talk of The Town:</h3>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">✈️ Incredible Holiday Packages at Irresistible Prices</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our multiple international trip packages comes with unmissable holiday deals and exclusive discounts. Some of our best international trips packages include Europe Tour Packages, Bali Tour Packages, Vietnam Tour Packages, Bhutan Tour Packages as well as Thailand Tour Packages are currently on heavy discounts but for a limited period of time.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">🎯 Seamless Assistance Throughout The Trip</h4>
                <p className="text-gray-700 leading-relaxed">
                  We've got everything covered, from the moment you buy our international trip package to the moment you return with a bag full of memories, you just need to relax and we'll handle the rest - from flights, visas, accommodations to meals, trip captains and on-ground support, we take care of everything.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">🌟 Experienced Trip Captains</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our trip captains are the best part of your journey, they put their heart and soul, so that your journey becomes unforgettable. They are everything you ask for when on a trip - your travel buddies, vibe curators and memory makers - all wrapped up into one.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">🎨 Specially Curated Packages</h4>
                <p className="text-gray-700 leading-relaxed">
                  We just don't plan trips, we plan experiences. Our specially curated packages are especially designed to offer lifetime experiences. Whether it's the European history and iconic landscapes, or Bali's vibrant culture and beaches, every itinerary of ours is handpicked by travel experts.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">🏨 Handpicked Stays</h4>
                <p className="text-gray-700 leading-relaxed">
                  We have handpicked some of the best stays with quality and standards, these stays will provide you with a comfortable stay that is affordable as well. We cater heritage properties, campsites, and boutique homestays that are beyond ordinary.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">🛡️ Safety & Transparency</h4>
                <p className="text-gray-700 leading-relaxed">
                  We make sure that your international tours are safe and secure as your safety is our topmost priority. Mendora Travels provides verified accommodations, supporting team members, and full travel assistance. There's no hidden charges, just epic travel memories.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">⭐ 18,000+ Positive Reviews & A Growing Community</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our Google rating is 4.9/5 and we are loved by many on social media. Join our tribe of 50,000+ happy travellers and explore international destinations like never before.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular International Destinations We Cover:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇹🇭 Thailand</h5>
                <p className="text-sm text-gray-600">Bangkok, Phuket, Pattaya, Krabi</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇮🇩 Bali</h5>
                <p className="text-sm text-gray-600">Ubud, Seminyak, Nusa Penida</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇻🇳 Vietnam</h5>
                <p className="text-sm text-gray-600">Hanoi, Halong Bay, Ho Chi Minh</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇦🇪 Dubai</h5>
                <p className="text-sm text-gray-600">Burj Khalifa, Desert Safari, Marina</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇲🇻 Maldives</h5>
                <p className="text-sm text-gray-600">Male, Sun Island, Maafushi</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇪🇺 Europe</h5>
                <p className="text-sm text-gray-600">Paris, Rome, Switzerland, Barcelona</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇸🇬 Singapore</h5>
                <p className="text-sm text-gray-600">Marina Bay, Sentosa, Gardens</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇲🇾 Malaysia</h5>
                <p className="text-sm text-gray-600">Kuala Lumpur, Langkawi, Penang</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-2">🇧🇹 Bhutan</h5>
                <p className="text-sm text-gray-600">Thimphu, Paro, Punakha</p>
              </div>
            </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">💡 Travel Tips</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Book 2-3 months in advance for best deals and discounts</li>
                  <li>• Check visa requirements and apply early</li>
                  <li>• Travel insurance is highly recommended for international trips</li>
                  <li>• Research local customs and traditions before visiting</li>
                  <li>• Keep digital and physical copies of important documents</li>
                  <li>• Inform your bank about international travel to avoid card blocks</li>
                </ul>
              </div>
            </div>

            {/* Read More/Less Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsContentExpanded(!isContentExpanded)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <span>{isContentExpanded ? 'Read Less' : 'Read More'}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isContentExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Popular Destinations Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Destinations</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalDestinations.map((destination) => (
              <div
                key={destination.slug}
                onClick={() => handleDestinationClick(destination.slug)}
                className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                {/* Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Top Decorative Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    {destination.popular && (
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  {/* Bottom Section */}
                  <div className="text-white">
                    <div className="mb-2">
                      <p className="text-sm opacity-90 font-light tracking-wide">
                        {destination.continent === 'Europe' ? 'The Canvas of Your Dreams' : 
                         destination.continent === 'Middle East' ? 'Where Luxury Meets Adventure' :
                         destination.slug === 'thailand' ? 'Love and Adventure Unite in' :
                         destination.slug === 'vietnam' ? 'Timeless charm' :
                         destination.slug === 'bali' ? 'Island of Enchantment' :
                         destination.slug === 'sri-lanka' ? 'Isle of Serenity & Splendor' :
                         destination.slug === 'japan' ? 'The Land of The Rising Sun' :
                         'Explore the Beauty of'}
                      </p>
                    </div>
                    <h3 className="text-4xl font-bold mb-3 tracking-wide">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{destination.duration}</span>
                      <span className="mx-2">•</span>
                      <span>From ₹{destination.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Seller Packages Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Best Seller Packages</h2>
            <p className="text-gray-600 text-lg">Find your perfect travel experience with our top-rated packages</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Sample Best Seller Packages - Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex gap-6 lg:grid lg:grid-cols-3 min-w-max lg:min-w-0">
              {/* Package 1 - Dubai */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 lg:w-auto flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" alt="Dubai" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹64,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹62,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">6-Day Dubai Group Trip with Ferrari World & City Tours</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      5N/6D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Dubai - Dubai
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      24 Jan, 14 Feb
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Burj Khalifa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Desert Safari</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ferrari World</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/dubai')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Package 2 - Sri Lanka */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 lg:w-auto flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=600&q=80" alt="Sri Lanka" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹59,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹54,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Explore Sri Lanka in 8 Days - Community Trip</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      7N/8D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Mirissa - Colombo
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      24 Jan, 8 Feb +4 batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Sigiriya</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Kandy</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ella</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/sri-lanka')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Package 3 - Vietnam */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 lg:w-auto flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80" alt="Vietnam" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹63,000/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹59,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">The Ultimate 7-Day Vietnam Tour Package</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Hanoi - Ho Chi Minh
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      25 Jan, 1 Feb +14 batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Hanoi</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ha Long Bay</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ninh Binh</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/vietnam')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Europe Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/europe" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Europe</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Europe Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" alt="Northern Lights" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹2,39,990/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹1,99,990/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">10 Days Finland and Sweden Tour: Northern Lights Special</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      9N/10D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Helsinki - Stockholm
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      17 Jan, 14 Mar
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Helsinki</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Rovaniemi</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Northern Lights</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/europe')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Europe Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" alt="Swiss Paris" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Recommended</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹2,55,990/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹1,95,990/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">8 Days Swiss Paris Delights | Special Europe Tour Package</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      7N/8D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Paris - Zurich
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      10 Feb, 4 Mar +42 batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">3N Paris</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">1N Geneva</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">2N Switzerland</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/europe')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Europe Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80" alt="Amazing Europe" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Family Friendly</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹2,85,000/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹2,43,990/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Summer Deals: 11 Days Amazing Europe Tour</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      10N/11D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Paris - Rome
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      10 Feb, 4 Mar +42 batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">3N Paris</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">2N Switzerland</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">1N Rome</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/europe')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Bali Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/bali" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Bali</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Bali Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80" alt="Bali with Gili" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Recommended</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹54,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹47,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Bali with Gili and Nusa Penida Island</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      7N/8D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Denpasar - Denpasar
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      28 Mar, 16 May +3 batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Gili Island</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Nusa Penida</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ubud</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/bali')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Bali Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=600&q=80" alt="Adventure Bali" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customized</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">₹52,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">7 Days Adventure Bali Trip Package</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Denpasar - Denpasar
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Tanjung Beach</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Water Sports</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Surfing</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/bali')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Bali Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80" alt="Bali Swing" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">₹58,500/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">6 Day Bali Tour - Explore Ubud, Nusa Penida & Uluwatu</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      5N/6D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Ubud - Kuta
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ubud</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Bali Swing</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Uluwatu Temple</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/bali')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Dubai Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/dubai" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Dubai</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Dubai Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" alt="Dubai Community Trip" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹54,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹52,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">5 Days Dubai Community Trip with Desert Safari Adventure</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      4N/5D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Dubai - Dubai
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      24 Jan, 14 Feb
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Dubai</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Burj Khalifa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Museum of the Future</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/dubai')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Dubai Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80" alt="Dubai Ferrari World" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹64,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹62,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">6-Day Dubai Group Trip with Ferrari World & City Tours</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      5N/6D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Dubai - Dubai
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      24 Jan, 14 Feb
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Dubai</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Burj Khalifa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Museum of the Future</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/dubai')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Dubai Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80" alt="Dubai Glimpses" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">Customised <span className="text-sm font-normal text-gray-500"></span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Glimpses Of Dubai For An Unparalleled Experience</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Dubai - Dubai
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Desert Safari</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Abu Dhabi</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ferrari World</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/dubai')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Dubai Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/dubai" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Dubai</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Dubai Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" alt="Dubai Community Trip" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹54,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹52,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">5 Days Dubai Community Trip with Desert Safari Adventure</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      4N/5D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Dubai - Dubai
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      24 Jan, 14 Feb
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Dubai</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Burj Khalifa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Museum of the Future</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/dubai')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Dubai Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80" alt="Dubai Ferrari World" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹64,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹62,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">6-Day Dubai Group Trip with Ferrari World & City Tours</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      5N/6D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Dubai - Dubai
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      24 Jan, 14 Feb
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Dubai</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Burj Khalifa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Museum of the Future</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/dubai')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Dubai Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80" alt="Dubai Glimpses" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">Customised <span className="text-sm font-normal text-gray-500"></span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Glimpses Of Dubai For An Unparalleled Experience</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Dubai - Dubai
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Desert Safari</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Abu Dhabi</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ferrari World</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/dubai')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Vietnam Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/vietnam" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Vietnam</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Vietnam Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80" alt="Vietnam Ultimate Tour" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹63,000/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹59,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">The Ultimate 7-Day Vietnam Tour Package</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Hanoi - Ho Chi Minh
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      25 Jan, 1 Feb +14 batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Hanoi</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ha Long Bay</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ho Chi Minh</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/vietnam')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Vietnam Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80" alt="Phu Quoc Island" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹78,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹75,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">9 Days Vietnam with Phu Quoc Island - Christmas & NY Edition</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      8N/9D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Hanoi - Phu Quoc
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      No Upcoming Batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Hanoi</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ha Long Bay</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Phu Quoc</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/vietnam')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Vietnam Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80" alt="Vietnam Backpacking" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹82,990/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹78,990/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">8 Days Vietnam Backpacking Tour | Xmas & NY Edition</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      7N/8D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Ho Chi Minh - Hanoi
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      No Upcoming Batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ho Chi Minh</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Cu Chi Tunnels</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Da Nang</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/vietnam')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Maldives Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/maldives" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Maldives</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Maldives Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" alt="Medufushi Island" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">Customised</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Medufushi Island Resort</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      4N/5D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Male - Male
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Water Villa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Beach Resort</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Snorkeling</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/maldives')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Maldives Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80" alt="Coco Bodu Hithi" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">Customised</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Coco Bodu Hithi Resort</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      4N/5D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Male - Male
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Luxury Resort</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Overwater Villa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Diving</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/maldives')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Maldives Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80" alt="Honeymoon Package" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">Customised</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Fairytale Maldives Honeymoon @Dhigufaru Island Resort</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      4N/5D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Male Airport - Male Airport
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Honeymoon</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Island Resort</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Romantic</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/maldives')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Malaysia Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/malaysia" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Malaysia</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Malaysia Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80" alt="Singapore Malaysia" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">₹76,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">7-Day Singapore Malaysia Trip: From Sentosa to Genting!</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Singapore - Singapore
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Night Safari</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Universal Studios</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Genting Highlands</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/malaysia')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Malaysia Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80" alt="Genting Highlands" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">Customised</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">6 Days Malaysia Tour Package With Genting Highlands</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      5N/6D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Kuala Lumpur - Kuala Lumpur
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Kuala Lumpur</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Genting Highlands</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">City Tour</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/malaysia')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Malaysia Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80" alt="Langkawi" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">Customised</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Best of Kuala Lumpur and Langkawi - 7 Days Malaysia Tour</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Kuala Lumpur - Langkawi
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Kuala Lumpur</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Langkawi</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Island Tour</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/malaysia')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Singapore Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/singapore" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Singapore</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Singapore Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80" alt="Singapore Family Trip" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">₹61,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">6 Days Singapore Trip: Best Vacation for Your Family</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      5N/6D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Singapore - Singapore
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Night Safari</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Universal Studios</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Sentosa Island</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/singapore')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Singapore Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1506351421178-63b52a6b4e01?w=600&q=80" alt="Universal Studios" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">₹51,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">5-Day Singapore Tour: Explore Universal Studios & Sentosa</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      4N/5D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Singapore - Singapore
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">City Tour</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Sands Sky Park</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Gardens by the Bay</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/singapore')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Singapore Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&q=80" alt="Singapore Malaysia Combo" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-blue-600">₹76,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">7-Day Singapore Malaysia Trip: From Sentosa to Genting!</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      6N/7D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Singapore - Singapore
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      Any date of your choice
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Sentosa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Kuala Lumpur</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Genting Highlands</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/singapore')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Sri Lanka Section */}
        <div className="mb-16">
          <div className="mb-6">
            <a href="/international-trips/sri-lanka" className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Best of Sri Lanka</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {/* Sri Lanka Package 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=600&q=80" alt="Sri Lanka Community Trip" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹59,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹54,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Explore Sri Lanka in 8 Days - Community Trip</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      7N/8D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Mirissa - Colombo
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      24 Jan, 8 Feb +4 batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Mirissa</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Galle</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Ella</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/sri-lanka')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Sri Lanka Package 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80" alt="Sri Lanka New Year" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹69,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹64,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">8-Day Sri Lanka Community Trip: New Year Edition</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      7N/8D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Colombo - Colombo
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      No Upcoming Batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Colombo</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Sigiriya</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Kandy</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/sri-lanka')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Sri Lanka Package 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=600&q=80" alt="Sri Lanka Christmas" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 line-through">₹64,999/-</p>
                    <p className="text-2xl font-bold text-blue-600">₹59,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Magical Sri Lanka Christmas & New Year Group Tour 2025</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      7N/8D
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Mirissa - Colombo
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      No Upcoming Batches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Unawatuna</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Nuwara Eliya</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Kandy</span>
                  </div>
                  <button onClick={() => navigate('/international-trips/sri-lanka')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best of Bhutan Section */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 
              onClick={() => navigate('/international-trips/bhutan')} 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 cursor-pointer hover:text-blue-600 transition-colors inline-block"
            >
              Best of Bhutan
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4 min-w-max">
                {/* Bhutan Package 1 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                  <div className="relative h-48">
                    <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80" alt="Bhutan Road Trip" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <p className="text-sm text-gray-500 line-through">₹42,999/-</p>
                      <p className="text-2xl font-bold text-blue-600">₹34,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Bhutan Road Trip Package</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        6N/7D
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Bagdogra (Siliguri) - Bagdogra (Siliguri)
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        <span>24 Jan, 14 Feb <span className="text-blue-600 font-medium">+7 batches</span></span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Thimphu</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Punakha</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Paro</span>
                    </div>
                    <button onClick={() => navigate('/international-trips/bhutan')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Bhutan Package 2 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                  <div className="relative h-48">
                    <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80" alt="Bhutan with Phobjikha Valley" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <p className="text-sm text-gray-500 line-through">₹51,999/-</p>
                      <p className="text-2xl font-bold text-blue-600">₹44,999/- <span className="text-sm font-normal text-gray-500">onwards</span></p>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Bhutan Road Trip with Phobjikha Valley</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        7N/8D
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Bagdogra (Siliguri) - Bagdogra (Siliguri)
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        <span>7 Mar, 14 Mar <span className="text-blue-600 font-medium">+13 batches</span></span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Phuentsholing</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Phobjikha</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Punakha</span>
                    </div>
                    <button onClick={() => navigate('/international-trips/bhutan')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Bhutan Package 3 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0">
                  <div className="relative h-48">
                    <img src="https://images.unsplash.com/photo-1616418918142-f83bc971ac1a?w=600&q=80" alt="Best of Bhutan 5 Days" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Customised</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <p className="text-2xl font-bold text-blue-600">Customised</p>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Best of Bhutan in 5 Days</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        4N/5D
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Paro - Paro
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        Any date of your choice
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Tiger's Nest</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Paro Valley</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Thimphu</span>
                    </div>
                    <button onClick={() => navigate('/international-trips/bhutan')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Packages Grid */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">All Packages</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalDestinations.map((destination) => (
              <div
                key={destination.slug}
                onClick={() => handleDestinationClick(destination.slug)}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Popular Badge */}
                  {destination.popular && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {destination.duration}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600">₹{destination.price}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Mendora Travels' Secret Sauce</h2>
            <p className="text-lg text-gray-600">Why Choose Mendora Travels?</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">No Third Party Mess</h3>
              <p className="text-gray-600 text-center leading-relaxed">100% in-house operations for all trips! No third parties involved, hence no fishy claims!</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Transparency & Security</h3>
              <p className="text-gray-600 text-center leading-relaxed">Real-time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Like-Minded Travelers</h3>
              <p className="text-gray-600 text-center leading-relaxed">Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">One Stop Hassle Free</h3>
              <p className="text-gray-600 text-center leading-relaxed">Comfortable stays, trained drivers, hospitable staff and friendly trip leaders - one memorable trip for you!</p>
            </div>
          </div>
        </div>

        {/* Our Blogs Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Our Blogs</h2>
            <p className="text-lg text-gray-600">Some good reads to help you travel better!</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://wanderon-images.gumlet.io/blogs/new/2025/01/parks-in-kuala-lumpur.jpg" 
                  alt="Parks in Kuala Lumpur" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <a href="/blogs/parks-in-kuala-lumpur">Discover the 19 Best Parks in Kuala Lumpur in 2026</a>
                </h3>
                <p className="text-sm text-gray-500">January 8, 2026 | 5 Min Read</p>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://wanderon-images.gumlet.io/gallery/new/2026/01/08/1767859215674-islands-in-thailand-for-honeymoon.jpg" 
                  alt="Thailand Honeymoon Islands" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <a href="/blogs/islands-in-thailand-for-honeymoon">Discover Top 15 Islands In Thailand For Honeymoon Bliss 2026</a>
                </h3>
                <p className="text-sm text-gray-500">May 14, 2026 | 5 Min Read</p>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://wanderon-images.gumlet.io/blogs/new/2023/10/gondola-ride-in-autumn-in-kashmir-2023-10-21t224843.429-min.png" 
                  alt="Things to do in Pahalgam" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <a href="/blogs/things-to-do-in-pahalgam">Top 10 Things To Do In Pahalgam To Make The Best Of Your Visit</a>
                </h3>
                <p className="text-sm text-gray-500">January 8, 2026 | 5 Min Read</p>
              </div>
            </div>
          </div>

          {/* Featured Blog Card */}
          <div className="mt-6 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img 
                  src="https://wanderon-images.gumlet.io/blogs/new/2023/08/untitled-design-2023-08-10t155659.348-min.png" 
                  alt="Best Hotels in Kerala" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <a href="/blogs/best-hotels-in-kerala">17 Best Hotels In Kerala For A Comfortable Stay Like Never Before</a>
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">January 8, 2026 | 5 Min Read</p>
                </div>
                <a 
                  href="/blogs/best-hotels-in-kerala"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Full →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Your right to Know!</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="text-blue-600 mr-2">Q:</span>How early should I apply for a visa?
                </h3>
                <svg className="w-6 h-6 text-gray-600 transform group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                <p>It's recommended to apply for a visa at least 4-6 weeks before your intended travel date. Some countries may have longer processing times, so it's best to check the specific embassy or consulate requirements. For popular destinations during peak season, consider applying 2-3 months in advance to avoid any delays.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="text-blue-600 mr-2">Q:</span>Can I use my electronics anywhere in the world?
                </h3>
                <svg className="w-6 h-6 text-gray-600 transform group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                <p>Most modern electronics are dual voltage (110-240V) and will work anywhere with the proper adapter. However, you'll need to check your device's voltage rating and get the appropriate plug adapter for your destination country. Different regions use different plug types, so it's best to carry a universal travel adapter.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="text-blue-600 mr-2">Q:</span>Should I exchange currency before I go for my international trip?
                </h3>
                <svg className="w-6 h-6 text-gray-600 transform group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                <p>It's advisable to exchange a small amount before departure for immediate expenses like transportation or snacks. For larger amounts, you can often get better exchange rates at your destination. ATMs at airports or local banks usually offer competitive rates. However, inform your bank about your travel plans to avoid card blocks.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="text-blue-600 mr-2">Q:</span>How can I stay safe in unfamiliar surroundings?
                </h3>
                <svg className="w-6 h-6 text-gray-600 transform group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                <p>Stay safe by researching your destination beforehand, keeping emergency contacts handy, and staying aware of your surroundings. Avoid displaying expensive items, use hotel safes for valuables, and stick to well-lit and populated areas. Share your itinerary with family or friends, and consider registering with your embassy if traveling to remote areas.</p>
              </div>
            </details>
          </div>
        </div>

        {/* Travel Guidelines Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">International Trips Travel Guidelines</h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>First and foremost make sure your passport is valid for at least six months beyond your return date. Keep physical as well as photocopies of your passport and visa as well as an identity proof.</p>
              
              <p>Next, you need to apply for the visa and get your documents submitted or get information about the visa on arrival, to avoid any kind of delays.</p>
              
              <p>Check required and recommended vaccines and take a basic first aid kit along with you.</p>
              
              <p>Book your flight tickets in advance to avoid last minute price rise.</p>
              
              <p>For any international destination you are planning to travel, make sure to check about any travel restrictions well in advance.</p>
              
              <p>Next, you need to make sure you have life insurance with travel insurance to protect yourself and avoid unforeseen circumstances such as medical emergencies, loss of personal belongings or even trip cancellation.</p>
              
              <p>Further, for staying connected purchase a sim with an international data plan to avoid high roaming charges.</p>
              
              <p>Download offline maps for better navigation, cab booking apps and even translation apps for a convenient journey.</p>
              
              <p>You can also learn about basic language and some phrases spoken in the country you are travelling to avoid communication barriers.</p>
              
              <p>You need to pack your bags smartly with only essential items and items you can reuse and dispose off easily.</p>
              
              <p>You also need to be updated about weather conditions in order to pack accordingly. Be aware of local traditions and customs and dress appropriately in religious settings.</p>
              
              <p>Further, you need to exchange currency before leaving or on arrival to avoid high exchange rates. It is also suggested to carry cash to avoid last minute challenges.</p>
              
              <p>Lastly, get information about local police and other emergency services and share your itinerary and contact details with family members and friends you can trust upon.</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Contact Form</h2>
            <p className="text-lg text-gray-600">Not sure what to do? We will give you a call back!</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Id *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email Id"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter your 10 digit number"
                      value={formData.phoneNumber}
                      onChange={handleFormChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 w-5 h-5 text-gray-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Submit
                </button>
              </form>

              {/* Success Message */}
              {showSuccessMessage && (
                <div className="mt-6 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl">
                  Thank you! Your form has been submitted successfully. We'll be in touch soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTripsPage;
