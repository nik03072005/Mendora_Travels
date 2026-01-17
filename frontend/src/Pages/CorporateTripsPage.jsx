import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import CorporateTripsHeroSection from '../Components/CorporateTrips/CorporateTripsHeroSection';
import DestinationGrid from '../Components/CorporateTrips/DestinationGrid';
import PackageCard from '../Components/CorporateTrips/PackageCard';
import WhyChooseUsSection from '../Components/CorporateTrips/WhyChooseUsSection';
import ContactFormSection from '../Components/Domestic/ContactFormSection';
import { 
  internationalCorporateTrips, 
  domesticCorporateTrips,
  corporateDestinations 
} from '../Components/CorporateTrips/packagesData';

const CorporateTripsPage = () => {
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
      return internationalCorporateTrips(navigate);
    } else if (activeTab === 'domestic') {
      return domesticCorporateTrips(navigate);
    }
    return [...internationalCorporateTrips(navigate), ...domesticCorporateTrips(navigate)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Corporate Trip Packages - Team Building & Offsites | Mendora Travels</title>
        <meta 
          name="description" 
          content="Plan perfect corporate offsites and team building trips. Customized packages for business travel with professional event management." 
        />
        <meta 
          name="keywords" 
          content="corporate trips, team building, corporate offsites, business travel, company retreats" 
        />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <CorporateTripsHeroSection
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        showSuccessMessage={showSuccessMessage}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Destinations Grid */}
        <DestinationGrid
          destinations={corporateDestinations}
          onDestinationClick={(slug, type) => handleDestinationClick(slug, type)}
        />

        {/* Packages Section with Tabs */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Corporate Trip Packages
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Choose from our curated collection of corporate offsites
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('international')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'international'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                International
              </button>
              <button
                onClick={() => setActiveTab('domestic')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'domestic'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Domestic
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
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
        <div className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Plan Your Corporate Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you create an unforgettable team building experience
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request Proposal
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

export default CorporateTripsPage;
