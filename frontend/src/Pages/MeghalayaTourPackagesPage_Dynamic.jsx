import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import HomeNavbar from '../Components/HomeNavbar';
import HeroSection from '../Components/DestinationPage/HeroSection';
import TourPackagesSection from '../Components/DestinationPage/TourPackagesSection';
import AboutSection from '../Components/DestinationPage/AboutSection';
import ActivitiesSection from '../Components/DestinationPage/ActivitiesSection';
import GroupToursSection from '../Components/DestinationPage/GroupToursSection';
import SubDestinationsSection from '../Components/DestinationPage/SubDestinationsSection';
import FAQSection from '../Components/DestinationPage/FAQSection';
import ReviewsSection from '../Components/DestinationPage/ReviewsSection';

const MeghalayaTourPackagesPage = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Fetch destination data from API
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/destinations/page/meghalaya`
        );
        setPageData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Meghalaya page data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Show loading state
  if (loading) {
    return (
      <>
        <HomeNavbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Meghalaya tour packages...</p>
          </div>
        </div>
      </>
    );
  }

  // Show error state
  if (error) {
    return (
      <>
        <HomeNavbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-4">⚠️ Error loading page</div>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </>
    );
  }

  // Using fallback default values
  const destination = pageData?.destination || {
    destinationName: 'Meghalaya',
    heroSection: {
      title: 'Meghalaya Tour Packages',
      tagline: 'Land of Smiles Awaits You',
      startingPrice: 39999,
      durationRange: '5-9 Days',
      heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80'
    },
    aboutSection: {
      shortDescription: 'Meghalaya, known as the Land of Smiles, is a perfect blend of ancient temples, modern cities, pristine beaches, and vibrant culture.',
      expandedDescription: 'Meghalaya, known as the Land of Smiles, is a perfect blend of ancient temples, modern cities, pristine beaches, and vibrant culture. Experience the grandeur of Bangkok\'s temples, the excitement of Pattaya\'s beaches, the beauty of Phuket\'s islands, and the adventure of Krabi\'s landscapes.'
    },
    activities: [],
    groupTours: [],
    subDestinations: [],
    tourPackages: []
  };

  const faqs = pageData?.faqs || [];

  return (
    <>
      <Helmet>
        <title>{destination.heroSection?.title || 'Meghalaya Tour Packages'} | Mendora Travels</title>
        <meta name="description" content={destination.aboutSection?.shortDescription || 'Explore Meghalaya with our curated tour packages.'} />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <HeroSection 
        title={destination.heroSection?.title}
        tagline={destination.heroSection?.tagline}
        startingPrice={destination.heroSection?.startingPrice}
        durationRange={destination.heroSection?.durationRange}
        heroImage={destination.heroSection?.heroImage}
      />

      {/* Tour Packages Section */}
      <TourPackagesSection packages={destination.tourPackages || []} />

      {/* About Section */}
      <AboutSection 
        shortDescription={destination.aboutSection?.shortDescription}
        expandedDescription={destination.aboutSection?.expandedDescription}
      />

      {/* Activities Section */}
      {destination.activities && destination.activities.length > 0 && (
        <ActivitiesSection activities={destination.activities} />
      )}

      {/* Group Tours Section */}
      {destination.groupTours && destination.groupTours.length > 0 && (
        <GroupToursSection groupTours={destination.groupTours} />
      )}

      {/* Sub-Destinations Grid */}
      {destination.subDestinations && destination.subDestinations.length > 0 && (
        <SubDestinationsSection 
          subDestinations={destination.subDestinations}
          destinationName={destination.destinationName}
        />
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs} />
      )}

      {/* Reviews Section */}
      {destination.reviews && destination.reviews.length > 0 && (
        <ReviewsSection reviews={destination.reviews} />
      )}

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Meghalaya Trip</h2>
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Meghalaya adventure</p>
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
                placeholder="Tell us about your dream Meghalaya trip..."
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

export default MeghalayaTourPackagesPage;
