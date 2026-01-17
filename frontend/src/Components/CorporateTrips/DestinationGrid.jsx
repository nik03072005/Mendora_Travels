import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const DestinationGrid = ({ destinations, onDestinationClick }) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Top Corporate Destinations
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Perfect locations for team building and corporate offsites
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            onClick={() => onDestinationClick(destination.slug, destination.type)}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Popular Badge */}
              {destination.popular && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Popular
                </div>
              )}
              
              {/* Destination Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-1">{destination.name}</h3>
                <div className="flex items-center text-white/90 text-sm">
                  <FaBriefcase className="mr-2" />
                  <span>{destination.teamSize} people</span>
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
