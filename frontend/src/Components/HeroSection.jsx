import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TextField, InputAdornment } from '@mui/material';
import logo from '../assets/mendora-logo.png';

const HeroSection = () => {
  const destinations = [
    { name: 'Thailand', flag: 'https://flagcdn.com/w40/th.png' },
    { name: 'Bali', flag: 'https://flagcdn.com/w40/ba.png' },
    { name: 'Malaysia', flag: 'https://flagcdn.com/w40/my.png' },
    { name: 'Singapore', flag: 'https://flagcdn.com/w40/sg.png' },
    { name: 'Vietnam', flag: 'https://flagcdn.com/w40/vn.png', highlighted: true },
    { name: 'Phillipines', flag: 'https://flagcdn.com/w40/ph.png' },
    { name: 'Indonesia', flag: 'https://flagcdn.com/w40/id.png' },
    { name: 'Japan', flag: 'https://flagcdn.com/w40/jp.png' },
    { name: 'UAE', flag: 'https://flagcdn.com/w40/ae.png' },
    { name: 'Azerbaijan ', flag: 'https://flagcdn.com/w40/az.png' },
    { name: 'Europe', flag: 'https://flagcdn.com/w40/eu.png' },
    { name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
    { name: 'Bhutan', flag: 'https://flagcdn.com/w40/bt.png' },
  ];

  // JavaScript for sliding functionality
  const scrollLeft = () => {
    const container = document.querySelector('.destinations-container');
    container.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.querySelector('.destinations-container');
    container.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className="shadow-md mx-2 sm:mx-4 md:mx-6 lg:mx-12 py-1 sm:py-2">
      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-4xl mx-auto bg-white border-2 border-[#007aff] rounded-lg">
        {/* First Line: Logo, Search, Currency */}
        <div className="flex items-center justify-between mx-2 sm:mx-4">
          <div className="flex items-center overflow-hidden">
            <img src={logo} alt="Mendora Travels Logo" className="h-8 sm:h-10 w-auto object-contain" />
          </div>

          <div className="mx-2 hidden sm:block w-full sm:w-auto">
            <TextField
              placeholder="Search for Destination"
              variant="outlined"
              size="small"
              className="w-full sm:w-48 md:w-64 lg:w-72"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-sm sm:text-base" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '9999px',
                  backgroundColor: '#f3f4f6',
                  padding: '2px 6px sm:4px sm:8px',
                  fontSize: '0.875rem sm:1rem',
                },
              }}
            />
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <img src="https://flagcdn.com/w20/in.png" alt="India Flag" className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-gray-600 text-xs sm:text-sm">INR ₹</span>
            <select className="border-none outline-none text-xs sm:text-sm">
              <option>INR ₹</option>
              <option>USD $</option>
              <option>EUR €</option>
            </select>
          </div>
        </div>

        {/* Second Line: Explore and Destinations Slider */}
        <div className="flex items-center justify-start relative mx-4">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 text-sm sm:text-base" />
          </button>

          {/* Destinations Slider */}
          <div className="destinations-container flex items-center space-x-2 sm:space-x-4 overflow-x-auto scroll-smooth px-4 sm:px-8 py-1 sm:py-2 ml-1">
            <div className="flex flex-col items-center bg-[#007aff]-500 font-semibold min-w-max">
              <FontAwesomeIcon icon={faFire} className="text-sm sm:text-base" />
              <span className="text-xs mt-1">Explore</span>
            </div>

            {destinations.map((destination, index) => (
              <a
                key={index}
                href="#"
                className={`flex flex-col items-center min-w-max ${
                  destination.highlighted ? 'bg-[#007aff]-500' : 'text-gray-600'
                } hover:text-blue-500`}
              >
                <img
                  src={destination.flag}
                  alt={`${destination.name} Flag`}
                  className="w-2 h-2 sm:w-3 sm:h-3"
                />
                <span className="text-xs mt-1">{destination.name}</span>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-600 text-sm sm:text-base" />
          </button>
        </div>
      </div>

      {/* Inline CSS for Slider */}
      <style>{`
        .destinations-container {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .destinations-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default HeroSection;