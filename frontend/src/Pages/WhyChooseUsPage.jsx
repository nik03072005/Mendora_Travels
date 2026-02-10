import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../Components/HomeNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faEye, 
  faUsers, 
  faCheckCircle,
  faAward,
  faHeadset,
  faMapMarkedAlt,
  faMoneyBillWave,
  faStar,
  faHeart,
  faThumbsUp,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

const MAIN_FEATURES = [
  {
    id: 1,
    icon: faShieldAlt,
    title: "No Third Party Mess",
    description: "100% in-house operations for all trips! No third parties involved, hence no fishy claims!",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: faEye,
    title: "Transparency & Security",
    description: "Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    icon: faUsers,
    title: "Co-Travelers Filtering",
    description: "Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    icon: faCheckCircle,
    title: "One Stop Hassle Free Experience",
    description: "Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!",
    color: "from-orange-500 to-orange-600"
  }
];

const ADDITIONAL_BENEFITS = [
  {
    icon: faAward,
    title: "Award-Winning Service",
    description: "Recognized for excellence in customer service and travel experiences",
    color: "text-yellow-600"
  },
  {
    icon: faHeadset,
    title: "24/7 Support",
    description: "Round-the-clock customer support for any assistance you need",
    color: "text-blue-600"
  },
  {
    icon: faMapMarkedAlt,
    title: "Curated Itineraries",
    description: "Expertly designed routes covering the best attractions and hidden gems",
    color: "text-green-600"
  },
  {
    icon: faMoneyBillWave,
    title: "Best Price Guarantee",
    description: "Competitive pricing with no hidden costs or surprises",
    color: "text-purple-600"
  },
  {
    icon: faStar,
    title: "Quality Accommodation",
    description: "Handpicked hotels and stays that meet our high standards",
    color: "text-pink-600"
  },
  {
    icon: faGlobe,
    title: "Wide Range of Destinations",
    description: "Extensive portfolio of domestic and international destinations",
    color: "text-teal-600"
  }
];

const TESTIMONIAL_STATS = [
  { number: "50,000+", label: "Happy Travelers", icon: faHeart },
  { number: "200+", label: "Destinations Covered", icon: faMapMarkedAlt },
  { number: "4.8/5", label: "Customer Rating", icon: faStar },
  { number: "98%", label: "Customer Satisfaction", icon: faThumbsUp }
];

const WhyChooseUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Why Choose Mendora Travels | Your Trusted Travel Partner</title>
        <meta
          name="description"
          content="Discover why thousands of travelers choose Mendora Travels. We offer transparent pricing, in-house operations, 24/7 support, and unforgettable travel experiences."
        />
      </Helmet>

      <HomeNavbar variant="solid" />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 text-white pt-24 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose Mendora Travels?
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Experience travel the way it should be - transparent, hassle-free, and memorable
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TESTIMONIAL_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <FontAwesomeIcon 
                  icon={stat.icon} 
                  className="text-4xl text-teal-600 mb-4"
                />
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MAIN_FEATURES.map((feature) => (
              <div 
                key={feature.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              More Reasons to Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_BENEFITS.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <FontAwesomeIcon 
                  icon={benefit.icon} 
                  className={`text-3xl ${benefit.color} mb-4`}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Promise to You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Experience</h3>
              <p className="text-gray-600">Every trip is tailored to your preferences and interests</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">Your safety and security are our top priorities</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Satisfaction</h3>
              <p className="text-gray-600">We don't rest until you're completely satisfied</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have experienced the Mendora difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/interests')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Destinations
            </button>
            <button
              onClick={() => navigate('/contact-us')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsPage;
