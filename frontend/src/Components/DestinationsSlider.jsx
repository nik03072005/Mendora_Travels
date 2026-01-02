import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DESTINATIONS = [
  { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
  { name: "Dubai", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Egypt", flag: "https://flagcdn.com/w40/eg.png" },
  { name: "Europe", flag: "https://flagcdn.com/w40/eu.png" },
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "Indonesia", flag: "https://flagcdn.com/w40/id.png" },
  { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "Kazakhstan", flag: "https://flagcdn.com/w40/kz.png" },
  { name: "Kenya", flag: "https://flagcdn.com/w40/ke.png" },
  { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
  { name: "Mauritius", flag: "https://flagcdn.com/w40/mu.png" },
  { name: "Morocco", flag: "https://flagcdn.com/w40/ma.png" },
  { name: "New Zealand", flag: "https://flagcdn.com/w40/nz.png" },
  { name: "Oman", flag: "https://flagcdn.com/w40/om.png" },
  { name: "Philippines", flag: "https://flagcdn.com/w40/ph.png" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
  { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
  { name: "Sri Lanka", flag: "https://flagcdn.com/w40/lk.png" },
  { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
  { name: "Turkey", flag: "https://flagcdn.com/w40/tr.png" },
  { name: "Uzbekistan", flag: "https://flagcdn.com/w40/uz.png" },
  { name: "Vietnam", flag: "https://flagcdn.com/w40/vn.png" },
];

const DestinationsSlider = ({ selectedDestination, onDestinationClick, onExploreClick }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center relative px-4">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-30 bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700 text-base" />
          </button>

          <div 
            ref={containerRef}
            className="destinations-container flex items-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto scroll-smooth py-3 px-12 mx-8"
          >
            <div
              onClick={onExploreClick}
              className="flex flex-col items-center cursor-pointer text-orange-500 font-semibold min-w-max hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faFire} className="text-xl mb-2" />
              <span className="text-sm">Explore</span>
            </div>

            {DESTINATIONS.map((destination, index) => (
              <button
                key={index}
                onClick={() => onDestinationClick(destination)}
                className={`flex flex-col items-center min-w-max transition-all hover:scale-110 ${
                  selectedDestination === destination.name
                    ? "text-orange-500 font-bold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <img
                  src={destination.flag}
                  alt={`${destination.name} Flag`}
                  className="w-8 h-8 rounded-full object-cover mb-2 shadow-md"
                />
                <span className="text-sm font-medium">{destination.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 z-30 bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-700 text-base" />
          </button>
        </div>

        <style>{`
          .destinations-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .destinations-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default DestinationsSlider;
