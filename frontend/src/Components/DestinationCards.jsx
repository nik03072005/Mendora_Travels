import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DestinationsSection() {
  const [destinationData, setDestinationData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/destinations/get`);
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

    navigate(`/destination/${preparedDestination.destinationName}`, {
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
      className="flex-shrink-0 w-[195px] h-[250px] sm:w-[205px] sm:h-[280px] aspect-[2/3] rounded-xl overflow-hidden shadow-md snap-center cursor-pointer"
      onClick={() => handleCardClick(destination)}
    >
      <img
        src={destination?.imageUrl}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

{/* Desktop & Larger Screens: Grid in One Row */}
<div className="hidden xl:flex gap-4 overflow-x-hidden">
  {destinationData?.map((destination) => (
    <div
      key={destination._id}
      className="w-[205px] h-[280px] aspect-[2/3] rounded-xl overflow-hidden shadow-md cursor-pointer"
      onClick={() => handleCardClick(destination)}
    >
      <img
        src={destination?.imageUrl}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

    </section>
  );
}