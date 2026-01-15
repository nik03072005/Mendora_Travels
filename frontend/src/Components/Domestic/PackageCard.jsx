import React from 'react';

const PackageCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  duration, 
  route, 
  dates, 
  highlights, 
  isPopular, 
  isRecommended,
  isCustomised,
  onClick 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isPopular && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </div>
        )}
        {isRecommended && (
          <div className="absolute top-4 right-4">
            <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </span>
          </div>
        )}
        {isCustomised && (
          <div className="absolute top-4 right-4">
            <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Customised
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-5">
        <div className="mb-3">
          {originalPrice && (
            <p className="text-sm text-gray-500 line-through">₹{originalPrice}/-</p>
          )}
          <p className="text-2xl font-bold text-orange-600">
            {price === "Customised" ? price : `₹${price}/-`} {price !== "Customised" && <span className="text-sm font-normal text-gray-500">onwards</span>}
          </p>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {duration}
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {route}
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {dates}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.map((highlight, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {highlight}
            </span>
          ))}
        </div>
        <button 
          onClick={onClick} 
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
