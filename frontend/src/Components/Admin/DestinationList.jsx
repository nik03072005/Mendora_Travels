import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBoxOpen, FaUsers, FaEdit } from 'react-icons/fa';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Determine category from route
  const isDomestic = location.pathname.includes('domestic');
  const category = isDomestic ? 'domestic' : 'international';
  const title = isDomestic ? 'Domestic Destinations' : 'International Destinations';

  useEffect(() => {
    fetchDestinations();
  }, [category]);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/destinations/get?category=${category}`);
      const data = await response.json();
      
      // Debug: Check the response structure
      console.log('API Response:', data);
      console.log('First destination:', data[0]);
      
      // API returns array directly for backward compatibility
      const destinationsList = Array.isArray(data) ? data : (data.destinations || []);
      
      // Log each destination's counts
      destinationsList.forEach(dest => {
        console.log(`${dest.destinationName}:`, {
          packages: dest.tourPackages?.length || 0,
          groupTours: dest.groupTours?.length || 0,
          rawPackages: dest.tourPackages,
          rawGroupTours: dest.groupTours
        });
      });
      
      setDestinations(destinationsList);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      alert('Failed to fetch destinations');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-600">Loading destinations...</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600">
          Manage packages and group tours for each destination
        </p>
      </div>

      {destinations.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">No destinations found in this category.</p>
          <Link
            to={`/add-destination?category=${category}`}
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add First Destination
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination._id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Destination Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={destination.imageUrl || '/placeholder-destination.jpg'}
                  alt={destination.destinationName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/placeholder-destination.jpg';
                  }}
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    destination.category === 'domestic' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {destination.category?.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Destination Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {destination.destinationName}
                </h3>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaBoxOpen className="text-blue-500" />
                    <span>{destination.tourPackages?.length || 0} Packages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-green-500" />
                    <span>{destination.groupTours?.length || 0} Group Tours</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link
                    to={`/admin/destination/${destination._id}/packages`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaBoxOpen />
                    <span>Manage Packages</span>
                  </Link>
                  
                  <Link
                    to={`/admin/destination/${destination._id}/group-tours`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FaUsers />
                    <span>Manage Group Tours</span>
                  </Link>

                  <Link
                    to={`/manage-destination?edit=${destination._id}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaEdit />
                    <span>Edit Destination</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationList;
