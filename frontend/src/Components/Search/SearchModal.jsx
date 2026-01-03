import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

export default function SearchModal({ onClose }) {
  const [destination, setDestination] = useState("");
  const [packageType, setPackageType] = useState("Tour");
  const [tripDuration, setTripDuration] = useState("3 to 5 Days"); // Default to 4-5 days range
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 const navigate = useNavigate();
  const durations = [
    "Up to 1 Day",
    "2 to 3 Days",
    "3 to 5 Days",
    "5 to 7 Days",
    "7+ Days",
  ];

  // Map tripDuration to minDays and maxDays
  const getDurationRange = (duration) => {
    switch (duration) {
      case "Up to 1 Day":
        return { minDays: 1, maxDays: 1 };
      case "2 to 3 Days":
        return { minDays: 2, maxDays: 3 };
      case "3 to 5 Days":
        return { minDays: 3, maxDays: 5 };
      case "5 to 7 Days":
        return { minDays: 5, maxDays: 7 };
      case "7+ Days":
        return { minDays: 7, maxDays: Infinity };
      default:
        return { minDays: null, maxDays: null };
    }
  };

   const handleDCardClick = (destination) => {
    // Prepare destination data
    const preparedDestination = {
      id: destination?._id || "",
      imageUrl: destination?.image || "",
      destinationName: destination?.destinationName || "Unknown Destination",
    };

    // Validate prepared data
    console.log(preparedDestination)
    if (!preparedDestination.id || !preparedDestination.imageUrl) {
      console.error("Invalid destination data:", preparedDestination);
      return;
    }

    navigate(`/destination/${preparedDestination?.destinationName?.toLowerCase()}`, {
      state: { destination: preparedDestination },
    });
  };
  
  const handlePCardClick = (destination) => {
    // Prepare destination data
    const preparedDestination = {
      id: destination?._id || "",
     
      destinationName: destination?.name || "Unknown Destination",
    };

    
    if (!preparedDestination.id || !preparedDestination.destinationName) {
      console.error("Invalid destination data:", preparedDestination);
      return;
    }

   const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

    navigate(`/tours/${slugify(preparedDestination.destinationName)}`, {
  state: { destination: preparedDestination },
});
  };

  // Debounced search function
  const fetchResults = useCallback(
    debounce(async (keyword, duration, type) => {
      if (!keyword.trim()) {
        setResults([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      const { minDays, maxDays } = getDurationRange(duration);

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/search`, {
          params: {
            keyword,
            ...(minDays && maxDays !== Infinity ? { minDays, maxDays } : minDays ? { minDays } : {}),
            page: 1,
            limit: 10,
          },
        });

        // Filter by packageType client-side
        const filteredResults = response.data.results.filter(
          (result) => result.type === "destination" || packageType === "Tour"
        );
        setResults(filteredResults);
      } catch (err) {
        console.log(err)
        setError("Failed to fetch search results. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300),
    [packageType]
  );

  // Trigger search on destination or tripDuration change
  useEffect(() => {
    fetchResults(destination, tripDuration, packageType);
    // Cleanup debounce on unmount
    return () => fetchResults.cancel();
  }, [destination, tripDuration, packageType, fetchResults]);

 

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-start justify-center pt-10 z-[1000]"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 pt-12 rounded-lg w-full max-w-xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>

        <input
          type="text"
          placeholder="Search Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border rounded-full px-4 py-2 mb-4 shadow"
        />

        <div>
          <h2 className="font-semibold mb-2">Package Type</h2>
          <div className="flex gap-3 mb-4">
            {["Tour", "Activity"].map((type) => (
              <button
                key={type}
                onClick={() => setPackageType(type)}
                className={`px-4 py-2 rounded-full border ${
                  packageType === type
                    ? "bg-[#007aff] text-white"
                    : "bg-white text-black"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Trip Duration</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setTripDuration(duration)}
                className={`px-4 py-2 rounded-full border ${
                  tripDuration === duration
                    ? "bg-[#007aff] text-white"
                    : "bg-white text-black"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white mt-6">
          {error && <p className="text-[#007aff] mb-4">{error}</p>}
          {loading && <p className="text-gray-500 mb-4">Loading...</p>}
          {results.length > 0 && (
            <div>
              <h2 className="font-semibold mb-2">Search Results</h2>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg flex items-center gap-4 bg-white shadow-smc cursor-pointer"
                    onClick={() => {
                        if (result.type === "package") {
                          handlePCardClick(result);
                        } else {
                          handleDCardClick(result);
                        }
                      }}
                  >
                    <img
                      src={result.image}
                      alt={result.type === "package" ? result.name : result.destinationName}
                      className="w-24 h-24 object-cover rounded"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/100")} // Fallback image
                      
                      
                    />
                    <div>
                      <p className="font-semibold">
                        {result.type === "package" ? result.name : result.destinationName}
                      </p>
                      {result.type === "package" && (
                        <>
                          <p>Destination: {result.destinationName}</p>
                          <p>Days: {result.noOfDays}</p>
                          <p>Price: ₹{result.discountedPrice}</p>
                        </>
                      )}
                      <p className="text-sm text-gray-500">Type: {result.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {results.length === 0 && !loading && !error && destination && (
            <p className="text-gray-500 mb-4">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}