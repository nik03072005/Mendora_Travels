import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DESTINATIONS = [
  { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
  { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
  { name: "Vietnam", flag: "https://flagcdn.com/w40/vn.png", highlighted: true },
  { name: "Phillipines", flag: "https://flagcdn.com/w40/ph.png" },
  { name: "Indonesia", flag: "https://flagcdn.com/w40/id.png" },
  { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Azerbaijan", flag: "https://flagcdn.com/w40/az.png" },
  { name: "Europe", flag: "https://flagcdn.com/w40/eu.png" },
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "Bhutan", flag: "https://flagcdn.com/w40/bt.png" },
  { name: "Maldives", flag: "https://flagcdn.com/w40/ma.png" },
];

const DestinationsSlider = ({ selectedDestination, onDestinationClick, onExploreClick }) => {
  const scrollLeft = () => {
    const container = document.querySelector(".destinations-container");
    if (container) container.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".destinations-container");
    if (container) container.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center relative px-4">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-30 bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700 text-base" />
          </button>

          <div className="destinations-container flex items-center justify-center gap-6 sm:gap-8 md:gap-12 overflow-x-auto scroll-smooth py-3 px-12 whitespace-nowrap">
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
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
          }
          .destinations-container::-webkit-scrollbar {
            display: none;
          }
          .destinations-container > * {
            flex: 0 0 auto;
          }
        `}</style>
      </div>
    </section>
  );
};

export default DestinationsSlider;
