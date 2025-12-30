import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../Redux/currencySLice";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faFire,
  faSearch,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { TextField, InputAdornment } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css/autoplay';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/sean-oulashin.jpg';
import pic3 from '../assets/greece.jpg';
import balitrip from '../assets/balitrip.png';
import bhutan from '../assets/bhutan.svg';
import city from '../assets/city-1.png';
import cropped_Ellipse from '../assets/cropped-Ellipse-12.png';
import discovery_thai from '../assets/discovery-thai.svg';
import dmc_final_logo_high from '../assets/dmc-final-logo-high.png';
import kkk from '../assets/kkk.png';
import letz from '../assets/letz.png';
import logo_circle from '../assets/logo-circle.png';
import logo_satguru from '../assets/logo-satguru.png';
import rajasthan from '../assets/rajasthan.webp';
import wow from '../assets/wow.png';
import Star_Travel from '../assets/Star-Travel-Logo-PNG.png';
import topview from '../assets/topview.png';

// Components

import PackageCards from "../Components/Packages/Cards";
import SearchModal from "../Components/Search/SearchModal";


// Assets
import logo from "../assets/Tript.png";
import { Helmet } from "react-helmet-async";
import { fetchDestinations } from "../../Redux/destinationSlice";

// Constants
const DESTINATIONS = [
  { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
  { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
  { name: "Vietnam", flag: "https://flagcdn.com/w40/vn.png", highlighted: true },
  { name: "Phillipines", flag: "https://flagcdn.com/w40/ph.png" },
  { name: "Indonesia", flag: "https://flagcdn.com/w40/id.png" },
  { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Azerbaijan", flag: "https://flagcdn.com/w40/az.png" },
  { name: "Europe", flag: "https://flagcdn.com/w40/eu.png" },
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "Bhutan", flag: "https://flagcdn.com/w40/bt.png" },
  { name: "Maldives", flag: "https://flagcdn.com/w40/ma.png" },
];


const tourismBoardAlliances = [
  { image: balitrip },
  { image: bhutan },
  { image: city},
  { image: cropped_Ellipse},
  { image: discovery_thai },
  { image: dmc_final_logo_high },
  { image: kkk},
  { image: letz},
  { image: logo_circle},
  { image: logo_satguru},
  { image: rajasthan},
  { image: wow},
  { image: Star_Travel},
  { image: topview}
];

const CURRENCY_SYMBOLS = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

const CURRENCY_FLAGS = {
  INR: "https://flagcdn.com/w20/in.png",
  USD: "https://flagcdn.com/w20/us.png",
  EUR: "https://flagcdn.com/w20/eu.png",
};

const CAROUSEL_IMAGES = [
  pic1,
  pic2,
  pic3,
];

function HomePage() {
  // State management
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Redux hooks
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currency.currency);
  const Destinations = useSelector((state) => state.destinations.destinations);
  // console.log(Destinations[0].slug,"Destinations from Redux");
 

useEffect(() => {
  if (Destinations && Destinations.length > 0) {
    const formattedDestinations = Destinations.map((destination) => ({
      name: destination.destinationName,
      id: destination.Id || destination._id || "",
      imageUrl: destination.imageUrl || "https://via.placeholder.com/300",
      packages: destination.tourPackages?.map((pkg, index) => ({
        id: index + 1,
        _id: pkg._id,
        title: pkg.name,
        nights: `${pkg.noOfNights} Nights ${pkg.noOfDays} Days`,
        originalPrice: pkg.originalPrice || 0,
        discountedPrice: pkg.discountedPrice || 0,
        image: pkg.imageUrls?.[0] || "https://via.placeholder.com/300",
      })) || [],
      viewAllRoute: `/destination/${destination.destinationName}`,
      slug: destination.slug
    }));

    setDestinations(formattedDestinations);
    setNoDataFound(false);
    setLoading(false);
    // console.log(destinations, "Formatted destinations from Redux");
  }
}, [Destinations]);

 

 const fetchDestinationsByName = (destinationName, allDestinations) => {
  try {
    console.log("Filtering local destinations for:", destinationName);

    const matched = allDestinations.find(
      (dest) => dest.destinationName?.toLowerCase() === destinationName.toLowerCase()
    );

    if (!matched) {
      setNoDataFound(true);
      setDestinations([]);
      return;
    }

    const formattedDestination = {
      name: matched.destinationName || "Unknown Destination",
      id: matched._id || matched.Id || "",
      imageUrl: matched.imageUrl || "https://via.placeholder.com/300",
      packages: matched.tourPackages?.map((pkg, index) => ({
        id: index + 1,
        _id: pkg._id || "",
        title: pkg.name || "Untitled Package",
        nights: `${pkg.noOfNights || 0} Nights ${pkg.noOfDays || 0} Days`,
        originalPrice: pkg.originalPrice || 0,
        discountedPrice: pkg.discountedPrice || 0,
        image: pkg.imageUrls?.[0] || "https://via.placeholder.com/300",
      })) || [],
      viewAllRoute: `/destination/${matched.destinationName || "unknown"}`,
      slug: matched.slug
    };

    if (formattedDestination.packages.length === 0) {
      setNoDataFound(true);
      setDestinations([]);
    } else {
      setNoDataFound(false);
      setDestinations([formattedDestination]);
    }
  } catch (error) {
    console.error("Error filtering destination:", error.message);
    setNoDataFound(true);
    setDestinations([]);
  }
};


  // Event handlers
  const handleDestinationClick = (destination) => {
    if (selectedDestination === destination.name) {
      // setSelectedDestination(null);
      // setNoDataFound(false);
      // fetchDestinations();
    } else {
      setSelectedDestination(destination.name);
      fetchDestinationsByName(destination.name,Destinations);
    }
  };

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch(setCurrency(newCurrency));
  };

  const scrollLeft = () => {
    const container = document.querySelector(".destinations-container");
    if (container) {
      container.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.querySelector(".destinations-container");
    if (container) {
      container.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  // Effects
  useEffect(() => {
    console.log("useEffect triggered for fetching destinations");
    fetchDestinations();
  }, []);

  // Render functions
  const renderSearchAndCurrency = () => (
    <div className="flex items-center justify-between mb-1 mx-4 sm:mx-9">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Trip Tortoise Logo"
          className="w-16 h-8 sm:w-42 sm:h-16"
        />
      </div>

      <div className="mx-2 hidden sm:block w-full sm:w-auto">
        <TextField
          placeholder="Search for Destination"
          variant="outlined"
          size="small"
          className="w-full sm:w-56 md:w-80 lg:w-96"
          onClick={() => setIsOpen(true)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-500 text-sm sm:text-base"
                />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "9999px",
              backgroundColor: "#f3f4f6",
              padding: "2px 6px sm:4px sm:8px",
              fontSize: "0.875rem sm:1rem",
            },
          }}
        />
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2">
         <a
          href="https://www.facebook.com/profile.php?id=61576753933980"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors mr-2 sm:mr-3"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-blue-600 text-xs sm:text-sm"
          />
        </a>
        <a
          href="https://www.instagram.com/triptortoise?utm_source=qr&igsh=bTJ3aXZkbG1xeGVv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-pink-600 text-xs sm:text-sm"
          />
        </a>
        <a
          href="https://x.com/tortoise_trip"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-blue-400 text-xs sm:text-sm"
          />
        </a>
        
        <img
          src={CURRENCY_FLAGS[selectedCurrency]}
          alt={`${selectedCurrency} Flag`}
          className="w-3 h-3 sm:w-4 sm:h-4"
        />
        <select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className="border-none outline-none text-xs sm:text-sm bg-transparent"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );

  const renderDestinationsSlider = () => (
    <div className="flex items-center justify-start relative mx-4">
      <button
        onClick={scrollLeft}
        className="absolute cursor-pointer left-2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-gray-600 text-sm sm:text-base"
        />
      </button>

      <div className="destinations-container flex items-center space-x-8 sm:space-x-12 overflow-x-auto scroll-smooth px-4 sm:px-8 py-1 sm:py-2 ml-1 whitespace-nowrap">
        <div
          onClick={() => (dispatch(fetchDestinations()), setSelectedDestination(null))}
          className="flex flex-col items-center cursor-pointer text-orange-500 font-semibold min-w-max"
        >
          <FontAwesomeIcon icon={faFire} className="text-sm sm:text-base" />
          <span className="text-xs mt-1">Explore</span>
        </div>

        {DESTINATIONS.map((destination, index) => (
          <button
            key={index}
            onClick={() => handleDestinationClick(destination)}
            className={`flex cursor-pointer flex-col items-center min-w-max ${
              selectedDestination === destination.name
                ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            <img
              src={destination.flag}
              alt={`${destination.name} Flag`}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="text-xs mt-1">{destination.name}</span>
          </button>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 cursor-pointer z-10 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-gray-600 text-sm sm:text-base"
        />
      </button>
    </div>
  );

  const renderCarousel = () => (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={false}
      className="w-full h-[350px] sm:h-[600px]"
    >
      {CAROUSEL_IMAGES.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderPackageCards = () => {
    if (noDataFound) {
      return (
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-600">
            No packages found for {selectedDestination}
          </h2>
          <p className="text-gray-500 mt-2">
            Please try another destination or check back later.
          </p>
        </div>
      );
    }

    if (loading) {
    return (
   <div className="mt-6 flex flex-col w-full items-center">
  <div className=" pr-5 py-4 mx-auto w-full max-w-6xl">
    <div className="flex justify-between items-center mb-6">
      <div className="h-8 w-28 xs:w-36 sm:w-48 bg-gray-200 animate-pulse"></div>
    </div>
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
      {Array(3).fill().map((_, index) => (
        <Skeleton 
          key={index} 
          height={300} 
          width="100%" 
          className="rounded-xl w-full"
        />
      ))}
    </div>
  </div>
</div>
    );
  }

  const destinationsWithPackages = (destinations || []).filter(destination => destination.packages.length > 0);

  const firstTwoDestinations = destinationsWithPackages?.slice(0, 2) || [];
  const remainingDestinations = destinationsWithPackages?.slice(2) || [];
 

    return<div className=" mt-6">
      {firstTwoDestinations.filter(destination => destination.packages.length > 0).map((destination, index) => (
        <PackageCards
          key={index}
          title={destination.name}
          packages={destination.packages}
          viewAllRoute={destination.viewAllRoute}
          destinationData={{
            _id: destination.id,
            imageUrl: destination.imageUrl,
            destinationName: destination.name,
            slug: destination.slug,
          }}
        />
      ))}

   {/* Tourism Board Alliances Slider */}
      <div className="mt-6 px-4 flex flex-col items-center">
      <h3 className="text-lg md:text-xl font-semibold mb-4">Tourism Board Alliances</h3>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={8} // Slightly increased for better spacing on smaller screens
        slidesPerView={2} // Default for smallest screens
        breakpoints={{
          640: { slidesPerView: 3 }, // sm: 3 slides
          768: { slidesPerView: 4 }, // md: 4 slides
          1024: { slidesPerView: 6 }, // lg: 6 slides
          1280: { slidesPerView: 7 }, // xl: 7 slides
        }}
        autoplay={{ delay: 0, disableOnInteraction: false }} // Zero delay for continuous sliding
        loop={true}
        allowTouchMove={true} // Enabled for touch interaction on mobile
        speed={1500} // Smooth continuous motion
        className="w-full max-w-5xl"
      >
        {tourismBoardAlliances.map((destination, index) => (
          <SwiperSlide key={index}>
            <img
              src={destination.image}
              alt={`Tourism Board Alliance ${index + 1}`}
              className="w-20 h-16 md:w-24 md:h-20 object-contain" // Responsive image sizes
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {remainingDestinations.filter(destination => destination.packages.length > 0).map((destination, index) => (
        <PackageCards
          key={index + 2}
          title={destination.name}
          packages={destination.packages}
          viewAllRoute={destination.viewAllRoute}
          destinationData={{
             _id: destination.id,
            imageUrl: destination.imageUrl,
            destinationName: destination.name,
            slug: destination.slug,
          }}
        />
      ))}
    </div>
  };

  return (
    <div>
      <Helmet>
      <title>Trip Tortoise | Book Customized International & Domestic Trip Packages</title>
      <meta
        name="description" content="Experience unforgettable multi-day tours with Trip Tortoise. From handcrafted getaways to offbeat adventures—trusted by travelers, we plan the trip, you live the story."/>
	  <meta name="robots" content="index,follow"/>
    </Helmet>
	   <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trip Tortoise | Book Customized International & Domestic Trip Packages" />
        <meta property="og:description" content="Experience unforgettable multi-day tours with Trip Tortoise. From handcrafted getaways to offbeat adventures—trusted by travelers, we plan the trip, you live the story." />
        <meta property="og:url" content="https://triptortoise.com/" />
        <meta property="og:image" content="https://cloud.triptortoise.com/images/logo.png" />
        <meta property="og:site_name" content="Trip Tortoise" />
      </Helmet>
      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
      
      <div className="relative  w-full">
        {renderCarousel()}

        <div className="absolute inset-0 z-20">
          <div className="py-5">
            <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-12 py-2 sm:py-4">
              <div className="sm:max-w-5xl md:max-w-6xl lg:max-w-[1100px] mx-auto bg-white border-2 border-[#f37002] rounded-lg">
                {renderSearchAndCurrency()}
                {renderDestinationsSlider()}
              </div>
            </div>
          </div>

          <div className="text-white flex justify-center items-center px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
              To Travel Is To Live
            </p>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 w-full h-32 pointer-events-none z-10">
          <div className="w-full h-full bg-gradient-to-t from-white to-transparent" />
        </div>

        <style jsx>{`
          .destinations-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
          }
          .destinations-container::-webkit-scrollbar {
            display: none;
          }
          .destinations-container > * {
            flex: 0 0 auto;
          }
        `}</style>
      </div>
      <div className=" pl-7 mt-6">

      {renderPackageCards()}
      </div>

    </div>
  );
}

export default HomePage;