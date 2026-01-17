import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import HoneymoonHeroSection from '../Components/Honeymoon/HoneymoonHeroSection';
import DestinationGrid from '../Components/Honeymoon/DestinationGrid';
import PackageCard from '../Components/Honeymoon/PackageCard';
import WhyChooseUsSection from '../Components/Honeymoon/WhyChooseUsSection';
import ContactFormSection from '../Components/Domestic/ContactFormSection';
import { 
  internationalHoneymoonPackages, 
  domesticHoneymoonPackages,
  honeymoonDestinations 
} from '../Components/Honeymoon/packagesData';

const HoneymoonPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('international');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    numberOfPeople: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Form handlers
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      numberOfPeople: '',
      message: ''
    });
  };

  const handleDestinationClick = (slug) => {
    navigate(`/honeymoon/${slug}`);
  };

  // Get packages based on active tab
  const getDisplayedPackages = () => {
    if (activeTab === 'international') {
      return internationalHoneymoonPackages(navigate);
    } else if (activeTab === 'domestic') {
      return domesticHoneymoonPackages(navigate);
    }
    return [...internationalHoneymoonPackages(navigate), ...domesticHoneymoonPackages(navigate)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Helmet>
        <title>Honeymoon Packages - Romantic Getaways | Mendora Travels</title>
        <meta 
          name="description" 
          content="Create unforgettable memories with our romantic honeymoon packages. Explore international and domestic destinations perfect for newlyweds." 
        />
        <meta 
          name="keywords" 
          content="honeymoon packages, romantic getaways, honeymoon destinations, couple tours, honeymoon trips" 
        />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <HoneymoonHeroSection
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        showSuccessMessage={showSuccessMessage}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Section */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Dream Honeymoon Awaits
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Start your journey together with Mendora Travels' exclusive honeymoon packages. 
            We understand that your honeymoon is more than just a vacation – it's the beginning 
            of your lifelong adventure together. Our carefully curated packages combine romance, 
            luxury, and unforgettable experiences tailored just for you.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From pristine beaches to snow-capped mountains, from exotic islands to heritage cities, 
            we offer romantic getaways that create memories to last a lifetime. Let us handle the 
            details while you focus on celebrating your love.
          </p>
        </div>

        {/* Destinations Grid */}
        <DestinationGrid
          destinations={honeymoonDestinations}
          onDestinationClick={handleDestinationClick}
        />

        {/* Packages Section with Tabs */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Romantic Honeymoon Packages
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Choose from our handpicked collection of honeymoon packages
            </p>
            <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('international')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'international'
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                International
              </button>
              <button
                onClick={() => setActiveTab('domestic')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'domestic'
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                Domestic
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                View All
              </button>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getDisplayedPackages().map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Plan Your Dream Honeymoon?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our honeymoon experts create a personalized itinerary that perfectly matches your vision
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-pink-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </button>
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Bottom Contact Form Section */}
        <ContactFormSection 
          formData={formData}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
          showSuccessMessage={showSuccessMessage}
        />
      </div>
    </div>
  );
};

export default HoneymoonPage;
