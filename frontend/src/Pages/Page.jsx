
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AllPackageCards from '../Components/Packages/AllPackages';
import ReviewCardsD from '../Components/Reviews/ReviewbyDestinationId';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import TNavbar from '../Components/TransparentNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import DestinationGallery from '../Components/Gallary/Gallary';

export default function DestinationPage() {
  const { id } = useParams();
  const originalName = id;
 
  
 

  // If the URL is not normalized, redirect to the normalized one

  const [destination, setDestination] = useState({});
  const [thailandPackages, setThailandPackages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const destinations = useSelector((state) => state.destinations.destinations);

  const fetchDestinationsByName = (destinationName, allDestinations) => {
    try {
      const matched = allDestinations.find(
        (dest) => dest.slug?.toLowerCase() === destinationName.toLowerCase()
      );
      setDestination(matched || {});
      return matched;
    } catch (error) {
      console.error('Error filtering destination:', error.message);
      return null;
    }
  };

  const fetchThailandPackages = async (destinationId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/tour-packages/destination/${destinationId}`
      );
      const data = response.data;
      const formattedPackages = data.map((pkg, index) => ({
        id: index + 1,
        _id: pkg.Id,
        title: pkg.name,
        nights: `${pkg.noOfNights} Nights ${pkg.noOfDays} Days`,
        originalPrice: pkg.originalPrice || 0,
        discountedPrice: pkg.discountedPrice || 0,
        image: pkg.imageUrls?.[0] || '',
      }));
      setThailandPackages(formattedPackages);
    } catch (error) {
      console.error('Error fetching Thailand packages:', error.message);
      setThailandPackages([]);
    }
  };

  useEffect(() => {
    if (originalName && destinations.length > 0) {
      const matchedDestination = fetchDestinationsByName(originalName, destinations);
      if (matchedDestination?._id) {
        fetchThailandPackages(matchedDestination._id);
      }
    }
  }, [id, destinations]);

  const closeDialogs = () => setShowChat(false);

  const destinationName = destination?.destinationName || 'Top Destinations';
  const whatsappNumber = "919147144627";
  const whatsappMessage = encodeURIComponent(`Hi Mendora Travels, I'm interested in ${destinationName} packages!`);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Explore the Best of {destinationName} | Tours & Travel Packages | Mendora Travels</title>
        <meta
          name="description"
          content={`Discover ${destinationName} with expertly curated tours, cultural experiences, and scenic adventures. Plan your perfect trip with trusted guides and affordable packages.`}
        />
      </Helmet>

      <TNavbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{
              backgroundImage: `url('${destination?.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80'}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              Explore {destinationName}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              Discover unforgettable experiences and create lasting memories
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => setShowChat(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                Chat With Us
              </button>
              <a
                href="#packages"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3.5 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                View Packages
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Destination Overview Card */}
        {destination?.description && (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About {destinationName}</h2>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{destination.description}</p>
          </div>
        )}

        {/* Packages Section */}
        <div id="packages" className="scroll-mt-20">
          {destination?._id && thailandPackages.length > 0 ? (
            <AllPackageCards
              title={`${destinationName} Tour Packages`}
              packages={thailandPackages}
              viewAllRoute="#packages"
            />
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-gray-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  No Packages Available
                </h2>
                <p className="text-gray-600 text-lg">
                  We're currently updating our {destinationName} packages. Please check back soon or contact us directly!
                </p>
                <button
                  onClick={() => setShowChat(true)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Gallery & Reviews Section */}
        {destination?._id && (
          <div className="mt-12 space-y-12">
            {/* Gallery */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <DestinationGallery destinationId={destination._id} />
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <ReviewCardsD packageId={destination._id} />
            </div>
          </div>
        )}

        {/* Contact Information Card */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to Plan Your {destinationName} Adventure?</h2>
            <p className="text-lg text-blue-50">Get in touch with our travel experts for personalized packages</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-3xl mb-2" />
                <p className="text-sm font-semibold">WhatsApp</p>
              </a>
              
              <a
                href="tel:+919147144627"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faPhone} className="text-3xl mb-2" />
                <p className="text-sm font-semibold">+91 9147144627</p>
              </a>
              
              <a
                href="mailto:contact@mendoratravels.com"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-2" />
                <p className="text-sm font-semibold">Email Us</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-t-2xl">
              <button
                onClick={closeDialogs}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-4xl" />
                <div>
                  <h2 className="text-2xl font-bold">Chat With Us</h2>
                  <p className="text-green-50 text-sm">We're here to help!</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Get Instant Support:</strong>
                </p>
                <p className="text-gray-600 text-sm">
                  Connect with our travel experts on WhatsApp for personalized assistance with your {destinationName} trip!
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-xl" />
                  Open WhatsApp Chat
                </a>

                <a
                  href="tel:+919147144627"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Call Now: +91 9147144627
                </a>
              </div>

              <p className="text-center text-gray-500 text-sm">
                Available 24/7 • Quick Response Guaranteed
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Removed PropTypes since no props are passed to the component