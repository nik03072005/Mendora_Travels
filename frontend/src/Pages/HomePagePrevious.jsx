import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../Redux/currencySLice"; // Adjust path as needed
import HeroSection from "../Components/HeroSection";
import FeatureSection from "../Components/FeatureSection";
import Navbar from "../Components/Navbar";
import DestinationsSection from "../Components/DestinationCards";
import DestinationCarousel from "../Components/Crousel";
import PackageCards from "../Components/Packages/Cards";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faSearch,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { TextField, InputAdornment } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import logo from "../assets/logo-red.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SearchModal from "../Components/Search/SearchModal";
import Footer from "../Components/Footer";

function HomePage() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currency.currency);
  const [isOpen, setIsOpen] = useState(false);

  const destinationss = [
    { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
    { name: "Bali", flag: "https://flagcdn.com/w40/ba.png" },
    { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
    { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
    {
      name: "Vietnam",
      flag: "https://flagcdn.com/w40/vn.png",
      highlighted: true,
    },
    { name: "Phillipines", flag: "https://flagcdn.com/w40/ph.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/w40/id.png" },
    { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
    { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
    { name: "Azerbaijan", flag: "https://flagcdn.com/w40/az.png" },
    { name: "Europe", flag: "https://flagcdn.com/w40/eu.png" },
    { name: "India", flag: "https://flagcdn.com/w40/in.png" },
    { name: "Bhutan", flag: "https://flagcdn.com/w40/bt.png" },
  ];

  const currencySymbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  };

  const currencyFlags = {
    INR: "https://flagcdn.com/w20/in.png",
    USD: "https://flagcdn.com/w20/us.png",
    EUR: "https://flagcdn.com/w20/eu.png",
  };

  const handleDestinationClick = (destination) => {
    if (selectedDestination === destination.name) {
      setSelectedDestination(null);
      setNoDataFound(false);
      fetchDestinations();
    } else {
      setSelectedDestination(destination.name);
      fetchDestinationsbyName(destination.name);
    }
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

  const fetchDestinationsbyName = async (destinationName) => {
    try {
      console.log("Making API call to fetch destination", destinationName);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/destinations/get/name`,
        { name: destinationName }
      );
      const data = response?.data;

      if (!data) {
        throw new Error("No destination data received from API");
      }

      const formattedDestination = {
        name: data.destinationName || "Unknown Destination",
        id: data.Id || data._id || "",
        imageUrl: data.imageUrl || "https://via.placeholder.com/300",
        packages:
          data.tourPackages?.map((pkg, index) => ({
            id: index + 1,
            _id: pkg._id || "",
            title: pkg.name || "Untitled Package",
            nights: `${pkg.noOfNights || 0} Nights ${pkg.noOfDays || 0} Days`,
            originalPrice: pkg.originalPrice || 0,
            discountedPrice: pkg.discountedPrice || 0,
            image: pkg.imageUrls?.[0] || "https://via.placeholder.com/300",
          })) || [],
        viewAllRoute: `/destination/${data.destinationName || "unknown"}`,
      };

      if (formattedDestination.packages.length === 0) {
        setNoDataFound(true);
        setDestinations([]);
      } else {
        setNoDataFound(false);
        setDestinations([formattedDestination]);
      }
    } catch (error) {
      console.error("Error fetching destination:", error.message);
      setNoDataFound(true);
      setDestinations([]);
    }
  };

  const fetchDestinations = async () => {
    try {
      console.log("Making API call to fetch destinations");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/destinations/get`
      );
      const data = response.data;

      const formattedDestinations = data.map((destination) => ({
        name: destination.destinationName,
        id: destination.Id || destination._id || "",
        imageUrl: destination.imageUrl || "https://via.placeholder.com/300",
        packages:
          destination.tourPackages?.map((pkg, index) => ({
            id: index + 1,
            _id: pkg._id,
            title: pkg.name,
            nights: `${pkg.noOfNights} Nights ${pkg.noOfDays} Days`,
            originalPrice: pkg.originalPrice || 0,
            discountedPrice: pkg.discountedPrice || 0,
            image: pkg.imageUrls?.[0] || "https://via.placeholder.com/300",
          })) || [],
        viewAllRoute: `/destination/${destination.destinationName}`,
      }));

      setDestinations(formattedDestinations);
      setNoDataFound(false);
    } catch (error) {
      console.error("Error fetching destinations:", error.message);
      setNoDataFound(true);
      setDestinations([]);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered for fetching destinations");
    fetchDestinations();
  }, []);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch(setCurrency(newCurrency));
  };

  const carouselImages = [
    "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546484488-2a1430996887?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div>
      {/* Background Section with Swiper Carousel */}

      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
      <div className="relative min-h-[600px] w-full">
        {/* Swiper Carousel for Background Images */}

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false} // Disable Swiper's built-in navigation to avoid conflicts
          className="w-full h-[600px]"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Static Overlay Content */}
        <div className="absolute inset-0 z-20">
          <div className="py-5">
            <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-12 py-2 sm:py-4">
              <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-4xl mx-auto bg-white border-2 border-[#f37002] rounded-lg">
                {/* First Line: Logo, Search, Currency */}
                <div className="flex items-center justify-between mb-1 mx-4 sm:mx-9">
                  <div className="flex items-center space-x-2">
                    <img
                      src={logo}
                      alt="Trip Tortoise Logo"
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                  </div>

                  <div className="mx-2 hidden sm:block w-full sm:w-auto">
                    <TextField
                      placeholder="Search for Destination"
                      variant="outlined"
                      size="small"
                      className="w-full sm:w-48 md:w-64 lg:w-72"
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
                    <img
                      src={currencyFlags[selectedCurrency]}
                      alt={`${selectedCurrency} Flag`}
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <span className="text-gray-600 text-xs sm:text-sm">
                      {selectedCurrency}
                    </span>
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

                {/* Second Line: Explore and Destinations Slider */}
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
                      onClick={() => (
                        fetchDestinations(), setSelectedDestination(null)
                      )}
                      className="flex flex-col items-center cursor-pointer text-orange-500 font-semibold min-w-max"
                    >
                      <FontAwesomeIcon
                        icon={faFire}
                        className="text-sm sm:text-base"
                      />

                      <span className="text-xs mt-1">Explore</span>
                    </div>

                    {destinationss.map((destination, index) => (
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
              </div>
            </div>
          </div>

          {/* Static Text Overlay */}
          <div className="text-white flex justify-center items-center px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
              Crafting Tomorrow’s Travel Experience
            </p>
          </div>
        </div>

        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-30">
          <div className="w-full h-full bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Inline CSS for Slider */}
        <style jsx>{`
          .destinations-container {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
          }
          .destinations-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
          .destinations-container > * {
            flex: 0 0 auto;
          }
        `}</style>
      </div>

      {/* Conditionally render "Data Not Found" or PackageCards */}
      {noDataFound ? (
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-600">
            No packages found for {selectedDestination}
          </h2>
          <p className="text-gray-500 mt-2">
            Please try another destination or check back later.
          </p>
        </div>
      ) : (
        destinations
          ?.filter(
            (destination) =>
              destination.packages && destination.packages.length > 0
          )
          .map((destination, index) => (
            <PackageCards
              key={index}
              title={destination.name}
              packages={destination.packages}
              viewAllRoute={destination.viewAllRoute}
              destinationData={{
                _id: destination.id,
                imageUrl: destination.imageUrl,
                destinationName: destination.name,
              }}
            />
          ))
      )}
    </div>
  );
}

export default HomePage;
