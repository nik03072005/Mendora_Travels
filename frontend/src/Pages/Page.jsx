
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AllPackageCards from '../Components/Packages/AllPackages';
import logo from '../assets/logo-red.png';
import banner from '../assets/banner.png';
import ReviewCardsD from '../Components/Reviews/ReviewbyDestinationId';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import TNavbar from '../Components/TransparentNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DestinationGallery from '../Components/Gallary/Gallary';

export default function DestinationPage() {
  const { id } = useParams();
   const originalName =id
  //  console.log('Original Name:', originalName);
 
  
 

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
  

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Explore the Best of {destinationName} | Tours & Travel Packages | Trip Tortoise</title>
        <meta
          name="description"
          content={`Discover ${destinationName} with expertly curated tours, cultural experiences, and scenic adventures. Plan your perfect trip with trusted guides and affordable packages.`}
        />
      </Helmet>

      <TNavbar />
      <div className="bg-gray-50">
        <div className="relative h-[40vh] sm:h-[70vh]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('${destination?.imageUrl || ''}')`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content Centered */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
              {destinationName} Tour Packages!
            </h1>
          </div>

          {/* Call Us Button */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={() => setShowChat(true)}
              className="bg-[#f37002] text-base sm:text-lg cursor-pointer text-white px-6 sm:px-8 py-2 sm:py-3 rounded-[30px] shadow-lg hover:bg-[#e65c00] transition duration-300"
            >
              Chat Now
            </button>
          </div>
        </div>

        {/* Banner Section */}
        <div className="lg:max-w-[1100px] mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <img src={banner} alt="Banner" className="w-full h-auto" />
        </div>

        <div className="px-4 sm:px-8">
           {
             destination?._id && thailandPackages.length > 0 ? (
              
          <AllPackageCards
            title={destinationName}
            packages={thailandPackages}
            viewAllRoute="/thailand-packages"
          />
            ) : (
              <div className="text-center py-8">
                <h2 className="text-2xl font-semibold text-gray-700">
                  No packages available for {destinationName} at the moment.
                </h2>
                <p className="text-gray-500 mt-2">
                  Please check back later or contact us for more information.
                </p>
              </div>
            )
           }
          <div className='px-4 py-4 w-full mx-auto max-w-[1140px] relative'>

          {
            destination?._id && (
              <>
              <DestinationGallery destinationId={destination?._id} />
          <ReviewCardsD packageId={destination?._id} />
              </>
            )
          }
          </div>
        </div>

        {/* WhatsApp Chat Modal */}
        {showChat && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center relative">
            <button
              onClick={closeDialogs}
              className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-black"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-xl font-bold mb-2">WhatsApp Chat</h2>
            <p className="text-gray-600 mb-4">Talk with our travel expert!</p>
            <p className="text-green-700 text-lg font-semibold">
              +91 90514 83390
            </p>
            <a
              href="https://wa.me/919051483390"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-600  cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

// Removed PropTypes since no props are passed to the component