import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faCalendarAlt, 
  faMoneyBillWave,
  faPhone,
  faTimes,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import TNavbar from '../Components/TransparentNavbar';
import { convertPrice } from '../utils/priceConverter';
import RequestCallbackCard from '../Components/Callback/CallbackCard';
import slugify from "slugify";

const DestinationPackagesPage = () => {
  const { destination, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [packages, setPackages] = useState([]);
  const [destinationData, setDestinationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCallback, setShowCallback] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  const [durationFilter, setDurationFilter] = useState('all');
  
  const selectedCurrency = useSelector((state) => state.currency.currency);
  const destinations = useSelector((state) => state.destinations.destinations);
  
  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€',
  };

  useEffect(() => {
    fetchDestinationData();
  }, [destination, destinations]);

  const fetchDestinationData = async () => {
    try {
      setLoading(true);
      
      // Use id or destination param (id for international-trips route, destination for generic route)
      const searchTerm = (id || destination)?.toLowerCase();
      
      // Find destination from Redux store by name or slug
      const matchedDestination = destinations.find(
        (dest) => 
          dest.destinationName?.toLowerCase() === searchTerm ||
          dest.slug?.toLowerCase() === searchTerm
      );

      if (!matchedDestination) {
        console.error('Destination not found');
        setLoading(false);
        return;
      }

      setDestinationData(matchedDestination);

      // Fetch packages for this destination
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/tour-packages/destination/${matchedDestination._id}`
      );

      const formattedPackages = await Promise.all(
        response.data.map(async (pkg) => {
          const convertedOriginalPrice = await convertPrice(
            pkg.originalPrice,
            selectedCurrency,
            dispatch
          );
          const convertedDiscountedPrice = await convertPrice(
            pkg.discountedPrice,
            selectedCurrency,
            dispatch
          );

          return {
            _id: pkg._id,
            name: pkg.name,
            slug: pkg.slug,
            noOfDays: pkg.noOfDays,
            noOfNights: pkg.noOfNights,
            originalPrice: convertedOriginalPrice,
            discountedPrice: convertedDiscountedPrice,
            image: pkg.imageUrls?.[0] || '',
            pickupPoints: pkg.pickupPoints || [],
            dropPoints: pkg.dropPoints || [],
          };
        })
      );
    console.log(formattedPackages)
      setPackages(formattedPackages);
    } catch (error) {
      console.error('Error fetching destination data:', error);
    } finally {
      setLoading(false);
    }
  };
const createSlug = (title) => {
      if (!title || typeof title !== 'string') {
        return '';
      }
    
      return slugify(title, {
        lower: true,
        strict: true, // Remove special characters
        remove: /[*+~.()'"!:@]/g, // Remove additional special characters
      });
    };
  const handlePackageClick = (pkg) => {
    navigate(`/tours/${createSlug(pkg.name)}`);
  };

  const handleCallbackClose = () => {
    setShowCallback(false);
  };

  // Filter and sort packages
  const filteredPackages = packages
    .filter((pkg) => {
      // Search filter
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Price filter
      const matchesPrice = 
        pkg.discountedPrice >= priceRange.min && 
        pkg.discountedPrice <= priceRange.max;
      
      // Duration filter
      let matchesDuration = true;
      if (durationFilter === 'short') matchesDuration = pkg.noOfDays <= 5;
      else if (durationFilter === 'medium') matchesDuration = pkg.noOfDays >= 6 && pkg.noOfDays <= 10;
      else if (durationFilter === 'long') matchesDuration = pkg.noOfDays > 10;
      
      return matchesSearch && matchesPrice && matchesDuration;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.discountedPrice - b.discountedPrice;
      if (sortBy === 'price-high') return b.discountedPrice - a.discountedPrice;
      if (sortBy === 'duration-short') return a.noOfDays - b.noOfDays;
      if (sortBy === 'duration-long') return b.noOfDays - a.noOfDays;
      return 0; // featured (default order)
    });

  const whatsappNumber = "919147144627";
  const whatsappMessage = encodeURIComponent(
    `Hi Mendora Travels, I'm interested in ${destination} packages!`
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{destination} Tour Packages | Mendora Travels</title>
        <meta
          name="description"
          content={`Explore amazing tour packages for ${destination}. Best deals and curated experiences.`}
        />
      </Helmet>

      <TNavbar />

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700 hover:scale-110"
          style={{
            backgroundImage: `url('${destinationData?.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80'}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Explore {destination}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Discover {packages.length} amazing tour packages
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration-short">Duration: Short to Long</option>
              <option value="duration-long">Duration: Long to Short</option>
            </select>

            {/* Duration Filter */}
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Durations</option>
              <option value="short">1-5 Days</option>
              <option value="medium">6-10 Days</option>
              <option value="long">10+ Days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">No packages found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handlePackageClick(pkg)}
              >
                {/* Package Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100)}% OFF
                  </div>
                </div>

                {/* Package Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {pkg.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500" />
                      <span className="text-sm">
                        {pkg.noOfNights} Nights / {pkg.noOfDays} Days
                      </span>
                    </div>
                    {pkg.pickupPoints?.[0] && (
                      <div className="flex items-center text-gray-600">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500" />
                        <span className="text-sm line-clamp-1">{pkg.pickupPoints[0]}</span>
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-gray-400 line-through text-sm">
                        {currencySymbols[selectedCurrency]} {pkg.originalPrice.toFixed(2)}
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {currencySymbols[selectedCurrency]} {pkg.discountedPrice.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePackageClick(pkg);
                      }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
        </a>
        <button
          onClick={() => setShowCallback(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
        >
          <FontAwesomeIcon icon={faPhone} className="text-xl" />
        </button>
      </div>

      {/* Callback Modal */}
      {showCallback && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full relative">
            <button
              onClick={handleCallbackClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
            <RequestCallbackCard onClose={handleCallbackClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationPackagesPage;
