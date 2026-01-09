import React from 'react';

const DestinationGrid = ({ destinations, onDestinationClick }) => {
  const getTagline = (name) => {
    const taglines = {
      'Europe': 'The Canvas of Your Dreams',
      'Thailand': 'The Land of Smiles',
      'Bali': 'Island of Gods',
      'Vietnam': 'Timeless Charm',
      'Dubai': 'City of Gold',
      'Maldives': 'Paradise on Earth',
      'Singapore': 'The Lion City',
      'Malaysia': 'Truly Asia',
      'Japan': 'Land of Rising Sun',
      'Kazakhstan': 'Heart of Eurasia',
      'Bhutan': 'Land of Happiness',
      'Sri Lanka': 'Pearl of Indian Ocean'
    };
    return taglines[name] || 'Explore Now';
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Destinations</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.slug}
            onClick={() => onDestinationClick(destination.slug)}
            className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Top Decorative Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              {/* Top Section */}
              <div className="flex justify-between items-start">
                {destination.popular && (
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              
              {/* Bottom Section */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-sm text-white/90 mb-3 italic">{getTagline(destination.name)}</p>
                
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90">Starting from</p>
                    <p className="text-xl font-bold">₹{destination.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90">{destination.duration}</p>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {destination.highlights.slice(0, 2).map((highlight, idx) => (
                    <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
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
