import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SubDestinationsSection = ({ subDestinations = [], destinationName = '' }) => {
  if (!subDestinations || subDestinations.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Explore {destinationName || 'Destinations'}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover the best places to visit
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subDestinations.map((dest, index) => (
            <div 
              key={dest._id || dest.id || index} 
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-80">
                <img 
                  src={dest.image || 'https://via.placeholder.com/600x800'} 
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                  
                  {dest.country && (
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-blue-400" />
                      <span className="text-sm">{dest.country}</span>
                    </div>
                  )}
                  
                  {dest.packagesCount > 0 && (
                    <div className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm">
                      {dest.packagesCount} Packages Available
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubDestinationsSection;
