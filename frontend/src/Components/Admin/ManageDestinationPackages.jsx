import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';

const ManageDestinationPackages = () => {
  const { destinationId } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [destinationId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch destination details
      const destResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/destinations/${destinationId}`);
      if (!destResponse.ok) {
        throw new Error('Failed to fetch destination');
      }
      const destData = await destResponse.json();
      setDestination(destData.destination || destData);

      // Fetch packages for this destination
      const packagesResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/tour-packages/destination/${destinationId}`
      );
      
      if (packagesResponse.ok) {
        const packagesData = await packagesResponse.json();
        setPackages(packagesData.tourPackages || packagesData || []);
      } else {
        // If 404 or error, just set empty array
        setPackages([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data: ' + error.message);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (packageId) => {
    if (!confirm('Are you sure you want to delete this package?')) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/tour-packages/${packageId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.ok) {
        alert('Package deleted successfully');
        fetchData();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to delete package');
      }
    } catch (error) {
      console.error('Error deleting package:', error);
      alert('Failed to delete package');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-600">Loading packages...</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
        >
          <FaArrowLeft /> Back to Destinations
        </button>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Packages for {destination?.destinationName}
            </h1>
            <p className="text-gray-600 mt-2">
              Total Packages: {packages.length}
            </p>
          </div>
          
          <Link
            to={`/add-package?destination=${destinationId}`}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaPlus />
            Add New Package
          </Link>
        </div>
      </div>

      {/* Packages List */}
      {packages.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg mb-4">No packages found for this destination.</p>
          <Link
            to={`/add-package?destination=${destinationId}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <FaPlus />
            Add First Package
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Package Image */}
                <div className="md:w-1/3 h-64 md:h-auto bg-gray-200">
                  <img
                    src={pkg.imageUrls?.[0] || '/placeholder-package.jpg'}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-package.jpg';
                    }}
                  />
                </div>

                {/* Package Info */}
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="font-semibold">
                          {pkg.noOfDays}D / {pkg.noOfNights}N
                        </span>
                        <span>•</span>
                        <span>Rating: {pkg.rating || 0}⭐ ({pkg.reviewCount || 0} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-green-600">
                        ₹{pkg.discountedPrice?.toLocaleString()}
                      </span>
                      {pkg.originalPrice !== pkg.discountedPrice && (
                        <>
                          <span className="text-lg text-gray-400 line-through">
                            ₹{pkg.originalPrice?.toLocaleString()}
                          </span>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            Save ₹{(pkg.originalPrice - pkg.discountedPrice).toLocaleString()}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Locations */}
                  {pkg.locations && pkg.locations.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Locations:</span> {pkg.locations.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* Highlights */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 font-semibold mb-2">Highlights:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link
                      to={`/tours/${pkg.slug}`}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <FaEye />
                      View
                    </Link>
                    
                    <Link
                      to={`/edit-package/${pkg._id}`}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaEdit />
                      Edit
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageDestinationPackages;
