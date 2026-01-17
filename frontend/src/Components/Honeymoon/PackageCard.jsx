import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaStar } from 'react-icons/fa';

const PackageCard = ({ 
  image, 
  title, 
  destination,
  price, 
  originalPrice, 
  duration, 
  dates,
  highlights,
  rating,
  reviews,
  onClick,
  isPopular 
}) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {isPopular && (
          <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            Popular
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-xs" />
            <span className="text-sm font-semibold text-gray-900">{rating}</span>
            <span className="text-xs text-gray-600">({reviews})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Destination */}
        {destination && (
          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-pink-600 text-sm" />
            <span className="text-sm font-medium text-gray-600">{destination}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaClock className="text-pink-600" />
            <span>{duration}</span>
          </div>
          {dates && (
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-pink-600" />
              <span className="text-xs">{dates}</span>
            </div>
          )}
        </div>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span 
                key={index}
                className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">₹{price}</span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">₹{originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-gray-500">per person</span>
          </div>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
