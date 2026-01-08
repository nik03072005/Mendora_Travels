

import slugify from 'slugify'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { convertPrice } from '../../utils/priceConverter'; // Adjust path as needed
import {
  faPaperPlane,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import RequestCallbackCard from "../Callback/CallbackCard";
import { toast } from 'react-toastify';



const PackageCards = ({ title, packages, viewAllRoute,destinationData }) => {
  const dispatch = useDispatch();
const selectedCurrency = useSelector((state) => state.currency.currency);
const [convertedPackages, setConvertedPackages] = useState([]);
const currencySymbols = {
  INR: '₹',
  USD: '$',
  EUR: '€',
};

useEffect(() => {
  const convertPackages = async () => {
    const converted = await Promise.all(
      packages.map(async (pkg) => {
        const originalPrice = await convertPrice(pkg.originalPrice, selectedCurrency, dispatch);
        const discountedPrice = await convertPrice(pkg.discountedPrice, selectedCurrency, dispatch);
        return {
          ...pkg,
          originalPrice: `${currencySymbols[selectedCurrency]} ${originalPrice.toFixed(2)}`,
          discountedPrice: `${currencySymbols[selectedCurrency]} ${discountedPrice.toFixed(2)}`,
        };
      })
    );
    setConvertedPackages(converted);
  };
  convertPackages();
}, [packages, selectedCurrency, dispatch]);

  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travel_date: "",
    traveller_count: 1, // Default to 1 traveller
    message: "",
  });
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [clickedPackage, setClickedPackage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleViewAll = () => {

    
   if (destinationData?.slug) {
    navigate(`/international-trips/${destinationData.slug}`);
  } else {
    toast.error("Missing slug for destinationData:");
    // Optionally show a toast or fallback
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


  const handleCardClick = (destination) => {
    navigate(`/tours/${createSlug(destination.title)}`)
  };

  const handleChatNow = () => setShowChat(true);

  const handleCallback = (pkg) => {
    setSelectedPackage(pkg);
    setShowCallback(true);
  };

  const closeDialogs = () => {
    setShowChat(false);
    setShowCallback(false);
    setFormData({ name: "", email: "", phone: "", travel_date: "", traveller_count:"" , message: "" });
    setSelectedPackage(null);
    setSubmitStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Format travel_date to ensure it's a valid ISO date string
    let formattedTravelDate = formData.travel_date;
    if (formData.travel_date) {
      try {
        const date = new Date(formData.travel_date);
        if (isNaN(date.getTime())) {
          throw new Error("Invalid date");
        }
        formattedTravelDate = date.toISOString().split("T")[0]; // Ensure YYYY-MM-DD format
      } catch (error) {
        setSubmitStatus({ type: "error", message: "Please enter a valid travel date." });
        setIsSubmitting(false);
        return;
      }
    } else {
      setSubmitStatus({ type: "error", message: "Travel date is required." });
      setIsSubmitting(false);
      return;
    }
    // console.log(selectedPackage._id);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/travel-inquiry/submit-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          travel_date: formattedTravelDate, // Use formatted date
          packageId: selectedPackage?._id,
          packageTitle: selectedPackage?.title,
          packagePrice: selectedPackage?.discountedPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit callback request");
      }

      const result = await response.json();
      setSubmitStatus({ type: "success", message: "Callback request submitted successfully!" });
      setTimeout(() => {
        closeDialogs();
      }, 2000);
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to submit request. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" px-4 mt-8 py-4 w-full mx-auto max-w-6xl relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        {viewAllRoute && (
          <button
            onClick={handleViewAll}
            className="text-[#007aff] hover:underline cursor-pointer text-sm md:text-base"
          >
            View All<IoIosArrowDroprightCircle onClick={handleViewAll} className="text-xl inline mb-1 ml-1" />
          </button>
        )}
      </div>

      {/* Mobile Carousel */}
      <div className="flex xl:hidden gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
  {convertedPackages?.map((pkg) => (
    <div
      key={pkg.id}
      className="w-72 snap-start shrink-0  overflow-hidden transition duration-300"
    >
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-48 object-cover rounded-xl cursor-pointer"
        onClick={() => handleCardClick(pkg)}
      />
      <div className="pt-4 space-y-2">
        <p className="text-sm text-gray-500">{pkg.nights}</p>
        <h3 className="font-semibold text-lg cursor-pointer" onClick={() => handleCardClick(pkg)}>
          {pkg.title}
        </h3>
        <div className="flex items-center gap-3">
          <span className="line-through text-gray-400">
            {pkg.originalPrice}
          </span>
          <span className="text-[#007aff] font-semibold">
            {pkg.discountedPrice}
          </span>
        </div>
        <div className="flex gap-4  mt-4  text-nowrap">
          <button
            onClick={handleChatNow}
            className="border border-[#007aff] text-[#007aff] px-4 py-2 rounded-sm cursor-pointer text-md hover:bg-red-100 transition"
          >
            Chat Now
          </button>
          <button
            onClick={() => handleCallback(pkg)}
            className="bg-[#007aff] text-white w-[200px] px-4 py-2 rounded-sm cursor-pointer text-md hover:bg-[#007aff] transition"
          >
            Request Callback
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Desktop Grid */}
      <div className="hidden xl:grid grid-cols-3 gap-6">
  {convertedPackages?.slice(0, 3).map((pkg) => (
    <div
      key={pkg.id}
      className=" overflow-hidden transition duration-300"
    >
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full lg:h-64 object-cover cursor-pointer rounded-2xl"
        onClick={() => handleCardClick(pkg)}
      />
      <div className="pt-4 space-y-2">
        <p className="text-sm text-gray-500">{pkg.nights}</p>
        <h3 className="font-semibold text-lg cursor-pointer" onClick={() => handleCardClick(pkg)}>
          {pkg.title}
        </h3>
        <div className="flex items-center gap-3">
          <span className="line-through text-gray-400">
            {pkg.originalPrice}
          </span>
          <span className="text-[#007aff] font-semibold">
            {pkg.discountedPrice}
          </span>
        </div>
        <div className="flex text-nowrap gap-4 justify-start mt-4">
          <button
            onClick={handleChatNow}
            className="border border-[#007aff] text-[#007aff] px-4 py-2 cursor-pointer rounded-sm text-lg hover:bg-red-100 transition"
          >
            Chat Now
          </button>
          <button
            onClick={() => handleCallback(pkg)}
            className="bg-[#007aff] text-white w-[280px] px-4 py-2 cursor-pointer rounded-sm text-lg hover:bg-[#007aff] transition"
          >
            Request Callback
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Chat Modal */}
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
              +91 95473 06912
            </p>
            <a
              href="https://wa.me/919547306912"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-600  cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      )}


      {/* Callback Modal */}
     {showCallback && selectedPackage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg max-w-md w-[95%] sm:w-[90%] max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={closeDialogs}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-sm sm:text-base"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <RequestCallbackCard selectedPackage={selectedPackage} />
    </div>
  </div>
)}

    </section>
  );
};

export default PackageCards;