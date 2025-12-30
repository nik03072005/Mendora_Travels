import React, { useEffect, useRef, useState } from "react";
import RequestCallbackCard from "../Components/Callback/CallbackCard";
import { LiaHotelSolid } from "react-icons/lia";
import { MdEmojiTransportation } from "react-icons/md";
import { GiBinoculars } from "react-icons/gi";
import PNavbar from "../Components/PackageNavbar";
import { useLocation, useParams } from "react-router-dom";
import FAQ from "../Components/Admin/FAQS/Faqs";
import { FaCar, FaChevronDown, FaChevronUp, FaParachuteBox } from "react-icons/fa";
import ReviewCards from "../Components/Reviews/Review";
import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "../utils/priceConverter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DestinationGallery from "../Components/Gallary/Gallary";
import SkeletonLoader from "../utils/SkeletonLoader";
import { Helmet } from "react-helmet-async";
import { BsBalloon, BsBalloonFill } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

// Constants
const inclusions = [
  {
    icon: <LiaHotelSolid />,
    title: "Hotels Included",
  },
  {
    icon: <MdEmojiTransportation />,
    title: "Transport Included",
  },
  {
    icon: <GiBinoculars />,
    title: "Sightseeing Included",
  },
];

const ImageGallery = ({ tripData }) => {
  const [isSwiperOpen, setIsSwiperOpen] = useState(false);

  const openSwiper = () => setIsSwiperOpen(true);
  const closeSwiper = () => setIsSwiperOpen(false);

  const hasMoreImages = tripData.imageUrls.length > 3;

  return (
    <div className="mt-16 w-full max-w-6xl mx-auto p-4 relative">
     <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-2">
  <img
    src={tripData.imageUrls[0]}
    alt="Main"
    className="md:col-span-2 w-full h-96 lg:h-[450px] object-cover rounded-lg cursor-pointer"
    onClick={openSwiper}
  />
  <div className="hidden md:flex flex-col gap-2">
    <img
      src={tripData.imageUrls[1]}
      alt="Side1"
      className="w-full h-48 lg:h-[220px] object-cover rounded-lg cursor-pointer"
      onClick={openSwiper}
    />
    <div className="relative">
      <img
        src={tripData.imageUrls[2]}
        alt="Side2"
        className="w-full h-48 lg:h-[220px] object-cover rounded-lg cursor-pointer"
        onClick={openSwiper}
      />
      {hasMoreImages && (
        <button
          onClick={openSwiper}
          className="absolute bottom-2 right-2 bg-white text-black px-3 py-1 rounded hover:bg-opacity-80 transition cursor-pointer"
        >
          View More
        </button>
      )}
    </div>
  </div>
</div>

      {/* View More Button */}
      {/* {hasMoreImages && (
        <div className="hidden md:flex justify-end mt-2">
          <button
            onClick={openSwiper}
            className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
          >
            View More
          </button>
        </div>
      )} */}

      

      {/* Mobile View */}
      <div className="block md:hidden">
        <Swiper
        modules={[Navigation]}
        navigation
         
        spaceBetween={10} slidesPerView={1}>
          {tripData.imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Trip ${index}`}
                className="w-full h-80 object-cover rounded"
              />
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>

      {/* Swiper Overlay (Desktop) */}
      {isSwiperOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl px-4">
            <button
              onClick={closeSwiper}
              className="absolute top-4  z-20 right-4 bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
            >
              Close
            </button>
            <Swiper modules={[Navigation]} navigation spaceBetween={10} slidesPerView={1}>
              {tripData.imageUrls.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    alt={`Trip ${index}`}
                    className="w-full h-[80vh] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

const BasicInfoSection = ({ tripData }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    <p className="text-sm text-gray-500">
      {tripData.noOfNights} Nights {tripData.noOfDays} Days
    </p>
    <h2 className="text-xl font-bold mt-1">{tripData.name}</h2>
    <div className="flex justify-between m-2">
      <div className="mt-1 flex items-center gap-2">
        <span className="line-through text-gray-500">
          {tripData.originalPrice}
        </span>
        <span className="text-[#f37002] font-bold text-lg">
          {tripData.discountedPrice}
        </span>
      </div>
    </div>
  </div>
);

const InclusionsSection = ({ tripData }) => (
  <section className="bg-white shadow-lg mt-2 rounded-lg py-8">
    <div className="max-w-5xl mx-auto gap-4 sm:px-4 flex sm:gap-6 sm:text-center flex-wrap pl-4 pr-4">
      {inclusions.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="text-4xl text-[#f37002]">{item.icon}</div>
          <div className="text-sm font-medium text-gray-800">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  </section>
);


const HighlightsSection = ({ tripData }) => (
  <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-gray-800 mb-4">
      Package Highlights
    </h3>
    <ul className="space-y-2 text-gray-700 text-sm">
      {tripData.highlights.map((point, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="text-[#f37002] text-lg">⦿</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </section>
);


const NavigationTabs = ({ sectionRefs, scrollToSection }) => (
  <div className="sticky top-[66px] z-20 bg-white shadow-md mt-8 border border-gray-300 rounded-md overflow-x-auto ">
    <div className="flex gap-8 px-6 py-3 w-max min-w-full">
      {Object.keys(sectionRefs).map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className= " relative cursor-pointer text-sm font-semibold text-gray-600 hover:text-[#f37002] transition-colors duration-300 border-b-4 border-transparent hover:border-[#f37002] whitespace-nowrap after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#f37002] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 focus:outline-none"
        >
          {section}
        </button>
      ))}
    </div>
  </div>
);

const ItinerarySection = ({ refProp, tripData }) => {
  // Initialize openItems state with all days set to true
  const [openItems, setOpenItems] = useState(() => {
    const initialState = {};
    tripData.tripSummary.forEach((item) => {
      initialState[item.day] = true;
    });
    return initialState;
  });

  // Toggle visibility for a specific day
  const toggleItem = (day) => {
    setOpenItems((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  // Static image URL (replace with your own later)
  const staticImageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop";

  return (
    <section ref={refProp} className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Itinerary</h3>
      <div className="flex flex-col gap-4">
        {tripData.tripSummary.map((item) => (
          <div key={item.day} className="border border-orange-300 rounded-xl p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-[#f37002] text-sm font-semibold px-3 py-1 rounded-full">
                  Day {item.day}
                </span>
                <h4 className="text-[#f37002] font-semibold text-md">
                  {item.title || "Day Plan"}
                </h4>
              </div>
              <button
                onClick={() => toggleItem(item.day)}
                className="text-[#f37002] cursor-pointer hover:text-orange-600 transition-colors duration-200 focus:outline-none"
                aria-label={openItems[item.day] ? "Hide details" : "Show details"}
              >
                {openItems[item.day] ? (
                  <FaChevronUp className="text-lg" />
                ) : (
                  <FaChevronDown className="text-lg" />
                )}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems[item.day] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="list-disc pl-6 text-gray-700 text-sm leading-relaxed mb-4">
                {item.description.split("\n").map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))}
              </ul>
              <img
                src={item.dayImage || staticImageUrl}
                alt={`Day ${item.day} itinerary`}
                className="w-full h-62 object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TripSummarySection = ({ refProp,tripData }) => (
  <section ref={refProp} className="mt-8">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Trip Summary</h3>
    {/* <p className="text-sm text-gray-600 mb-6">
      {tripData.noOfNights} Nights, {tripData.noOfDays} Days for {tripData.noOfPersons} persons.
    </p> */}
    <div className="space-y-4">
      {tripData.tripSummary.map((item, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
          <h4 className="font-semibold text-md text-gray-900 mb-2">
            Day {item.day} – {item.title}
          </h4>
          <div className="flex items-start gap-2 text-sm text-gray-800 mb-1">
            <span className="mt-0.5 text-gray-600"><FaCar className="text-xl"/></span>
            <p>
              <span className="font-semibold">Transfer:</span> {item.transfer}
            </p>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-800">
            <span className="mt-0.5 text-gray-600"><FaParachuteBox className="text-xl"/></span>
            <p>
              <span className="font-semibold">Activity:</span> {item.activity}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const HotelsSection = ({ refProp,tripData }) => (
  <section ref={refProp} className="mt-8">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Hotel Accommodation</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">City</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">No. Of Nights</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">Hotel</th>
          </tr>
        </thead>
        <tbody>
          {tripData.hotelsIncluded.map((hotel, idx) => (
            <tr key={idx} className="bg-white">
              <td className="border border-gray-300 px-4 py-2">{hotel.city}</td>
              <td className="border border-gray-300 px-4 py-2">{hotel.nights}</td>
              <td className="border border-gray-300 px-4 py-2">{hotel.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const PackageDetailsSection = ({ refProp,tripData }) => (
  <section ref={refProp} className="mt-8 bg-white shadow-lg rounded-lg p-4">
    <h3 className="text-xl font-bold text-gray-800 mb-4">What's inside the package?</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-4">
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-2">Inclusions</h4>
        <ul className="space-y-2 text-gray-600">
          {tripData.packageDetails.included.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-500 mt-1 mr-2">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-2">Exclusions</h4>
        <ul className="space-y-2 text-gray-600">
          {tripData.packageDetails.excluded.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-[#f37002] mt-1 mr-2">✘</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const ReviewsSection = ({ refProp,tripData }) => (
  <section ref={refProp}>
    <h3 className="text-lg font-semibold text-[#f37002] mb-2">Reviews</h3>
    <p className="italic text-gray-500">Reviews section coming soon...</p>
  </section>
);

export default function TripCard() {
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [destinationId, setDestinationId] = useState(null);
  const {slug} = useParams();
  //  console.log(id,"xd")

    const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currency.currency);
  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€',
  };
  

  // All hooks must be called unconditionally at the top level
  const sectionRefs = {
    Itinerary: useRef(null),
    "Trip Summary": useRef(null),
    Hotels: useRef(null),
    Inclusions: useRef(null),
    Reviews: useRef(null),
  };

  const scrollToSection = (section) => {
  const element = sectionRefs[section]?.current;
  if (element) {
    const headerOffset = 130; // Adjust accordingly
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tour-packages/slug/${slug}`);
        console.log(response,"ff")
        if (!response.ok) {
          throw new Error(`Failed to fetch trip data: ${response.status}`);
        }
        
        const apiData = await response.json();
        // Convert prices using convertPrice
      const originalPrice = apiData.data.originalPrice
        ? await convertPrice(apiData.data.originalPrice, selectedCurrency, dispatch)
        : 0;
      const discountedPrice = apiData.data.discountedPrice
        ? await convertPrice(apiData.data.discountedPrice, selectedCurrency, dispatch)
        : 0;

        setTripData({
          ...apiData.data,
          originalPrice: `${currencySymbols[selectedCurrency]} ${originalPrice.toFixed(2)}`,
          discountedPrice: `${currencySymbols[selectedCurrency]} ${discountedPrice.toFixed(2)}`,
        });

        setDestinationId(apiData.data.destination);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching trip data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchTripData();
    }
  }, [slug]);

if (loading) {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mt-5 mx-auto">
        <SkeletonLoader
          type="card"
          width="w-full"
          height="h-86"
          baseColor="#b0b3b8"
          highlightColor="#e0e0e0"
          duration={0.8}
          enablePulse={true}
          className="rounded-md"
        />
        <SkeletonLoader
          type="card"
          width="w-full"
          height="h-86"
          baseColor="#b0b3b8"
          highlightColor="#e0e0e0"
          duration={0.8}
          enablePulse={true}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
  if (error) return <div className="text-center py-8 text-[#f37002]">Error: {error}</div>;
  if (!tripData) return <div className="text-center py-8">No trip data available</div>;

  const selectedPackage = {
    _id: tripData._id || "trip-123",
    title: tripData.name,
    discountedPrice: `${tripData.discountedPrice}`,
    image: tripData.imageUrls?.[0],
  };

  return (
    <div className="bg-gray-50 min-h-screen ">
       <Helmet>
                  <title>Top Travel Packages for {tripData.name} | Affordable Tours & Deals | Mendora Travels</title>
                  <meta
                    name="description"
                    content={`Explore the best travel packages to ${tripData.name}, including guided tours, adventure trips, and cultural experiences. Enjoy affordable prices with trusted service from Mendora Travels.`}
                  />
                </Helmet>

      <PNavbar />
      {tripData.imageUrls && <ImageGallery tripData={tripData} />}
      
      <div className="mt-0 lg:flex gap-4 max-w-6xl mx-auto p-4">
        <div className="flex lg:w-[1500px] flex-col">
          <BasicInfoSection  tripData={tripData} />
          <InclusionsSection  tripData={tripData} />
          <HighlightsSection tripData={tripData} />
          
          <NavigationTabs sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
          
          <div className="space-y-10 mt-6">
            {tripData.tripSummary && <ItinerarySection refProp={sectionRefs["Itinerary"]} tripData={tripData} />}
            <TripSummarySection refProp={sectionRefs["Trip Summary"]} tripData={tripData} />
            {tripData.hotelsIncluded && <HotelsSection refProp={sectionRefs["Hotels"]} tripData={tripData} />}
            {/* <ReviewsSection refProp={sectionRefs["Reviews"]}  tripData={tripData} /> */}
          </div>
        </div>
        
        <div className="hidden lg:flex w-[750px]">
          <div className="sticky top-16 z-20 h-fit">
            <RequestCallbackCard selectedPackage={selectedPackage} />
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto p-4">
        {tripData.packageDetails && <PackageDetailsSection refProp={sectionRefs["Inclusions"]} tripData={tripData} />}
        <FAQ    destinationId={destinationId} />
        <DestinationGallery destinationId={destinationId} />
        <ReviewCards refProp={sectionRefs["Reviews"]} packageId={tripData._id} />
      </div>
    </div>
  );
}