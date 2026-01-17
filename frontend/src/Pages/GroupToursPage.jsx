import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import GroupToursHeroSection from '../Components/GroupTours/GroupToursHeroSection';
import DestinationGrid from '../Components/GroupTours/DestinationGrid';
import PackageCard from '../Components/GroupTours/PackageCard';
import WhyChooseUsSection from '../Components/GroupTours/WhyChooseUsSection';
import ContactFormSection from '../Components/Domestic/ContactFormSection';
import { 
  internationalGroupTours, 
  domesticGroupTours,
  groupToursDestinations 
} from '../Components/GroupTours/packagesData';

const GroupToursPage = () => {
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

  const handleDestinationClick = (slug, type) => {
    if (type === 'international') {
      navigate(`/international-trips/${slug}`);
    } else {
      navigate(`/domestic-trips/${slug}`);
    }
  };

  // Get packages based on active tab
  const getDisplayedPackages = () => {
    if (activeTab === 'international') {
      return internationalGroupTours(navigate);
    } else if (activeTab === 'domestic') {
      return domesticGroupTours(navigate);
    }
    return [...internationalGroupTours(navigate), ...domesticGroupTours(navigate)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Helmet>
        <title>Group Tour Packages - Travel Together | Mendora Travels</title>
        <meta 
          name="description" 
          content="Join our group tours and travel with like-minded people. Explore domestic and international destinations with expert trip leaders." 
        />
        <meta 
          name="keywords" 
          content="group tours, community trips, group travel packages, adventure groups, travel together" 
        />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <GroupToursHeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Destinations Grid */}
        <DestinationGrid
          destinations={groupToursDestinations}
          onDestinationClick={(slug, type) => handleDestinationClick(slug, type)}
        />

        {/* Packages Section with Tabs */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Group Tour Packages
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Choose from our curated collection of group adventures
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('international')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'international'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                International
              </button>
              <button
                onClick={() => setActiveTab('domestic')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'domestic'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Domestic
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
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
        <div className="mb-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Join a Group Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with fellow travelers and create memories that last a lifetime
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Now
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

export default GroupToursPage;
