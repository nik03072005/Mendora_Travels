import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
  },
  {
    id: 5,
    title: "Bali Adventure Trip - New Year Special Edition",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/bali.jpeg",
    originalPrice: "69,999",
    discountedPrice: "64,999",
    duration: "5N/6D",
    location: "Bali - Bali",
    date: "30 Dec"
  },
  {
    id: 6,
    title: "Vietnam Backpacking Trip - Winter Special",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/vietnam.jpeg",
    originalPrice: "54,999",
    discountedPrice: "49,999",
    duration: "6N/7D",
    location: "Hanoi - Ho Chi Minh",
    date: "31 Dec"
  },
  {
    id: 7,
    title: "Kashmir Winter Wonderland - New Year Celebration",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/kashmir.jpeg",
    originalPrice: "32,999",
    discountedPrice: "28,999",
    duration: "4N/5D",
    location: "Srinagar - Srinagar",
    date: "01 Jan"
  },
  {
    id: 8,
    title: "Goa Beach Party - New Year Eve Special",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/goa.jpeg",
    originalPrice: "24,999",
    discountedPrice: "21,999",
    duration: "3N/4D",
    location: "Goa - Goa",
    date: "30 Dec"
  },
  {
    id: 9,
    title: "Manali Snow Adventure - Winter Wonderland Trip",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/trips/manali.jpeg",
    originalPrice: "18,999",
    discountedPrice: "15,999",
    duration: "4N/5D",
    location: "Delhi - Delhi",
    date: "02 Jan"
  }
];

const UpcomingTrips = () => {
  const [selectedMonth, setSelectedMonth] = useState('DEC \'25');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Community Trips
          </h2>
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

        {/* Trip Cards Grid - 4x2 Compact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TRIPS_DATA.slice(0, 8).map((trip) => (
            <div 
              key={trip.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-32">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* Duration Badge */}
                <div className="absolute top-2 right-2 bg-white/90 text-gray-900 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  {trip.duration}
                </div>
                {/* Date Badge */}
                <div className="absolute bottom-2 left-2 bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  {trip.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Title */}
                <h3 className="text-xs font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[32px]">
                  {trip.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-600 text-[10px]" />
                  <span className="line-clamp-1">{trip.location}</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-1">
                  {trip.originalPrice && (
                    <span className="text-gray-400 line-through text-[10px]">
                      ₹{trip.originalPrice}
                    </span>
                  )}
                  <span className="text-sm font-bold text-teal-600">
                    ₹{trip.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <a 
            href="/group-tours" 
            className="flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 font-semibold transition-colors"
          >
            View More
            <FontAwesomeIcon icon={faArrowRight} className="text-white text-sm" />
          </a>
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
