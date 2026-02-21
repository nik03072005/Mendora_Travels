import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiBaseUrl';
import HomeNavbar from '../Components/HomeNavbar';
import HoneymoonHeroSection from '../Components/Honeymoon/HoneymoonHeroSection';
import DestinationGrid from '../Components/Honeymoon/DestinationGrid';
import PackageCard from '../Components/Honeymoon/PackageCard';
import WhyChooseUsSection from '../Components/Honeymoon/WhyChooseUsSection';
import ContactFormSection from '../Components/Domestic/ContactFormSection';
import { honeymoonDestinations } from '../Components/Honeymoon/packagesData';

const HoneymoonPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('international');
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  
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

  // Fetch packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/tour-packages/by-tags?tags=honeymoon`);
        setPackages(response.data.data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching honeymoon packages:', error);
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleDestinationClick = (slug, type) => {
    // Navigate to appropriate destination page based on type
    if (type === 'international') {
      navigate(`/international-trips/${slug}`);
    } else {
      navigate(`/domestic-trips/${slug}`);
    }
  };

  const handlePackageClick = (packageSlug) => {
    navigate(`/packages/${packageSlug}`);
  };

  // Get packages based on active tab
  const getDisplayedPackages = () => {
    if (activeTab === 'international') {
      return packages.filter(pkg => pkg.destination?.category === 'international');
    } else if (activeTab === 'domestic') {
      return packages.filter(pkg => pkg.destination?.category === 'domestic');
    }
    return packages;
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
        
        {/* Destinations Grid */}
        <DestinationGrid
          destinations={honeymoonDestinations}
          onDestinationClick={(slug, type) => handleDestinationClick(slug, type)}
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
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
              <p className="mt-4 text-gray-600">Loading packages...</p>
            </div>
          ) : getDisplayedPackages().length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No packages available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDisplayedPackages().map((pkg) => (
                <PackageCard 
                  key={pkg._id}
                  title={pkg.name}
                  destination={pkg.destination?.destinationName || 'Unknown'}
                  price={pkg.discountedPrice?.toLocaleString('en-IN')}
                  originalPrice={pkg.originalPrice?.toLocaleString('en-IN')}
                  duration={`${pkg.noOfNights}N/${pkg.noOfDays}D`}
                  image={pkg.imageUrls?.[0] || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800'}
                  rating={pkg.rating || 4.5}
                  reviews={pkg.reviewCount || 0}
                  highlights={pkg.highlights?.slice(0, 4) || []}
                  onClick={() => handlePackageClick(pkg.slug)}
                />
              ))}
            </div>
          )}
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
