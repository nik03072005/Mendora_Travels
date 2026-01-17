import React from 'react';
import { FaHeart } from 'react-icons/fa';

const DestinationGrid = ({ destinations, onDestinationClick }) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Top Honeymoon Destinations
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Discover romantic getaways perfect for celebrating your love
        </p>
        <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            onClick={() => onDestinationClick && onDestinationClick(destination.slug)}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Popular Badge */}
            {destination.popular && (
              <div className="absolute top-4 right-4 z-10 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <FaHeart className="text-xs" />
                Popular
              </div>
            )}

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
              <p className="text-white/90 text-sm mb-3">{destination.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <span className="text-sm opacity-90">Starting from</span>
                  <div className="text-xl font-bold">₹{destination.price}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">{destination.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;
