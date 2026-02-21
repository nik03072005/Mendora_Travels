import { API_BASE_URL } from '../utils/apiBaseUrl';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DestinationsSection() {
  const [destinationData, setDestinationData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/destinations/get`);
        console.log("he",res.data);
        if (res?.data) {
          setDestinationData(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchDestinationData();
  }, []);

  const handleCardClick = (destination) => {
    // Prepare destination data
    const preparedDestination = {
      id: destination?._id || "",
      imageUrl: destination?.imageUrl || "",
      destinationName: destination?.destinationName || "Unknown Destination",
    };

    // Validate prepared data
    console.log(preparedDestination)
    if (!preparedDestination.id || !preparedDestination.imageUrl) {
      console.error("Invalid destination data:", preparedDestination);
      return;
    }

    navigate(`/international-trips/${preparedDestination.destinationName}`, {
      state: { destination: preparedDestination },
    });
  };

  return (
    <section className="px-4 sm:px-6  w-full lg:max-w-[1550px] lg:px-44 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Destinations</h2>
        <a
          href="/destinations"
          className="text-sm sm:mr-24 sm:text-base text-red-500 font-medium hover:underline"
        >
          View All
        </a>
      </div>

    
      {/* Mobile & Tablet: Horizontal Scroll Carousel */}
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide  xl:hidden">
  {destinationData?.map((destination) => (
    <div
      key={destination._id}
      className="flex-shrink-0 w-[195px] h-[250px] sm:w-[205px] sm:h-[280px] aspect-[2/3] rounded-xl overflow-hidden shadow-md snap-center cursor-pointer relative"
      onClick={() => handleCardClick(destination)}
    >
      {destination?.imageUrl ? (
        <img
          src={destination.imageUrl}
          alt={destination.destinationName}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load image for ${destination.destinationName}:`, destination.imageUrl);
            e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80';
          }}
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">No Image</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm font-semibold">
        {destination.destinationName}
      </div>
    </div>
  ))}
</div>

{/* Desktop & Larger Screens: Grid in One Row */}
<div className="hidden xl:flex gap-4 overflow-x-hidden">
  {destinationData?.map((destination) => (
    <div
      key={destination._id}
      className="w-[205px] h-[280px] aspect-[2/3] rounded-xl overflow-hidden shadow-md cursor-pointer relative"
      onClick={() => handleCardClick(destination)}
    >
      {destination?.imageUrl ? (
        <img
          src={destination.imageUrl}
          alt={destination.destinationName}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load image for ${destination.destinationName}:`, destination.imageUrl);
            e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80';
          }}
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">No Image</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm font-semibold">
        {destination.destinationName}
      </div>
    </div>
  ))}
</div>

    </section>
  );
}