import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faCalendarAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import greece from '../assets/greece.jpg';

const MONTHS = [
  'DEC \'25', 'JAN \'26', 'FEB \'26', 'MAR \'26', 
  'APR \'26', 'MAY \'26', 'JUN \'26', 'JUL \'26', 
  'AUG \'26', 'SEP \'26', 'OCT \'26'
];

const TRIPS_DATA = [
  {
    id: 1,
    title: "6-Days Dubai & Abu Dhabi Community Trip | New Year Edition",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/dubai.jpeg",
    originalPrice: "89,999",
    discountedPrice: "82,999",
    duration: "5N/6D",
    location: "Dubai - Dubai",
    date: "29 Dec"
  },
  {
    id: 2,
    title: "Meghalaya With Kaziranga Road Trip - Christmas and New Year Special Edition",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/meghalaya.jpeg",
    originalPrice: "36,999",
    discountedPrice: "32,999",
    duration: "6N/7D",
    location: "Guwahati - Guwahati",
    date: "29 Dec"
  },
  {
    id: 3,
    title: "Fantastic Thailand Vacation | Christmas and New Year Special Tour Package",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/thailand.jpeg",
    originalPrice: "79,999",
    discountedPrice: "74,999",
    duration: "6N/7D",
    location: "Phuket Airport - Phuket Airport",
    date: "29 Dec"
  },
  {
    id: 4,
    title: "Chopta Tungnath Christmas - New Year Trip Package",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/chopta.jpeg",
    originalPrice: null,
    discountedPrice: "12,999",
    duration: "2N/3D",
    location: "Delhi - Delhi",
    date: "29 Dec"
  }
];

const UpcomingTrips = () => {
  const [selectedMonth, setSelectedMonth] = useState('DEC \'25');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Community Trips
          </h2>
          <a 
            href="/group-tours" 
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
          >
            View All
            <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
              <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs" />
            </div>
          </a>
        </div>

        {/* Month Filter Buttons */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {MONTHS.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedMonth === month
                  ? 'bg-yellow-400 text-gray-900 font-semibold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRIPS_DATA.map((trip) => (
            <div 
              key={trip.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Image */}
              <div className="relative">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Pricing */}
                <div className="flex items-center gap-2 mb-2">
                  {trip.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{trip.originalPrice}/-
                    </span>
                  )}
                  <span className="text-lg font-bold text-gray-900">
                    ₹{trip.discountedPrice}/-
                  </span>
                  <span className="text-sm text-gray-500">Onwards</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[40px]">
                  {trip.title}
                </h3>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span className="line-clamp-1">{trip.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{trip.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UpcomingTrips;
