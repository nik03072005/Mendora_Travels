import React from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TourPackagesSection = ({ packages = [] }) => {
  const navigate = useNavigate();

  const handlePackageClick = (pkg) => {
    navigate(`/tours/${pkg.slug}`);
  };

  if (!packages || packages.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Tour Packages</h2>
          <div className="text-center py-12">
            <p className="text-gray-600">No tour packages available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Thailand Tour Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg._id || pkg.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handlePackageClick(pkg)}
            >
              <div className="relative h-64">
                <img 
                  src={pkg.imageUrls?.[0] || pkg.image || 'https://via.placeholder.com/800x600'} 
                  alt={pkg.name || pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {pkg.noOfDays && pkg.noOfNights 
                    ? `${pkg.noOfDays} Days`
                    : pkg.duration || 'N/A'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name || pkg.title}</h3>
                
                {pkg.locations && pkg.locations.length > 0 && (
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span className="text-sm">{pkg.locations.join(', ')}</span>
                  </div>
                )}
                
                {pkg.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{pkg.rating}</span>
                    <span className="text-gray-500 text-sm">({pkg.reviewCount || pkg.reviews || 0} reviews)</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Starting from</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ₹{(pkg.discountedPrice || pkg.startingPrice || 0).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackagesSection;
