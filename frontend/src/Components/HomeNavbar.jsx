import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { setCurrency } from '../../Redux/currencySLice';
import logo from '../assets/mendora-logo.png';

const CURRENCY_FLAGS = {
  INR: "https://flagcdn.com/w20/in.png",
  USD: "https://flagcdn.com/w20/us.png",
  EUR: "https://flagcdn.com/w20/eu.png",
};

const HomeNavbar = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currency.currency);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCurrencyChange = (event) => {
    dispatch(setCurrency(event.target.value));
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Mendora Travels"
              className="h-6 sm:h-8 w-auto object-contain"
              style={{ maxWidth: '120px' }}
            />
          </div>

          {/* Center Section: Search Bar + Social Media */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-3 mx-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-md relative">
              <input
                type="text"
                placeholder="Where do you want to go?"
                onClick={onSearchClick}
                className={`w-full px-3 py-1.5 pr-9 rounded-full border focus:outline-none backdrop-blur-md text-sm transition-colors ${
                  isScrolled 
                    ? 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500' 
                    : 'border-white/30 bg-white/20 text-white placeholder-white/70 focus:border-white'
                }`}
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                  isScrolled ? 'text-gray-500' : 'text-white/70'
                }`}
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.facebook.com/profile.php?id=61576753933980"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-7 h-7 rounded-full backdrop-blur-sm transition-all ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200' 
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <FontAwesomeIcon icon={faFacebookF} className={`text-sm ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              </a>
              <a
                href="https://www.instagram.com/triptortoise?utm_source=qr&igsh=bTJ3aXZkbG1xeGVv"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-7 h-7 rounded-full backdrop-blur-sm transition-all ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200' 
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <FontAwesomeIcon icon={faInstagram} className={`text-sm ${isScrolled ? 'text-pink-600' : 'text-white'}`} />
              </a>
              <a
                href="https://x.com/tortoise_trip"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-7 h-7 rounded-full backdrop-blur-sm transition-all ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200' 
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <FontAwesomeIcon icon={faXTwitter} className={`text-sm ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              </a>
            </div>
          </div>

          {/* Right Menu Items */}
          <div className="hidden lg:flex items-center space-x-4 text-xs sm:text-sm">
            <a href="/blogs" className={`hover:bg-[#007aff]-400 transition-colors font-medium ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Blogs</a>
            <a href="/about-us" className={`hover:bg-[#007aff]-400 transition-colors font-medium ${isScrolled ? 'text-gray-900' : 'text-white'}`}>About Us</a>
            <a href="/contact-us" className={`hover:bg-[#007aff]-400 transition-colors font-medium ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Contact</a>
            <a href="tel:+919547306912" className={`hover:bg-[#007aff]-400 transition-colors font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              +91-9547306912
            </a>
            <div className="flex items-center gap-1">
              <img
                src={CURRENCY_FLAGS[selectedCurrency]}
                alt={`${selectedCurrency} Flag`}
                className="w-5 h-4"
              />
              <select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className={`border-none outline-none text-sm bg-transparent cursor-pointer font-medium ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                style={{
                  colorScheme: 'light'
                }}
              >
                <option value="INR" style={{ color: '#111827', backgroundColor: '#ffffff' }}>INR</option>
                <option value="USD" style={{ color: '#111827', backgroundColor: '#ffffff' }}>USD</option>
                <option value="EUR" style={{ color: '#111827', backgroundColor: '#ffffff' }}>EUR</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={onSearchClick}
              className={`p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <FontAwesomeIcon icon={faSearch} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
