import React from 'react';
import { FaStar, FaCalendarWeek } from 'react-icons/fa';

const PackageCard = ({ title, duration, price, rating, reviews, image, highlights, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        {/* Weekend Badge */}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
          <FaCalendarWeek className="text-sm" />
          <span className="text-sm font-semibold">Quick Trip</span>
        </div>
        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm text-gray-600">Starting from</p>
          <p className="text-xl font-bold text-green-600">{price}</p>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-green-100 px-2 py-1 rounded">
              <FaStar className="text-yellow-500 text-sm mr-1" />
              <span className="text-sm font-semibold text-gray-700">{rating}</span>
            </div>
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
          </div>
        </div>

        {/* Duration */}
        <p className="text-gray-600 mb-4 flex items-center">
          <span className="font-semibold text-green-600 mr-2">Duration:</span>
          {duration}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <p className="font-semibold text-gray-700 mb-2">Package Includes:</p>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-green-600 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
