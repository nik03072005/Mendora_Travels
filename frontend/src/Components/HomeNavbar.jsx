import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
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

          {/* Navigation Menu Items */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-6">
              <a href="/" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                Home
              </a>
              <a href="/international" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                International
              </a>
              <a href="/domestic" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                Domestic
              </a>
              <a href="/destinations" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                Destinations
              </a>
              <a href="/interests" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                Interests
              </a>
              <a href="/blogs" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                Our Blogs
              </a>
              <a href="/why-choose-us" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                Why Choose Us
              </a>
              <a href="/faq" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                FAQ
              </a>
              <a href="/contact-us" className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-[#007aff]' : 'text-white hover:text-white/80'}`}>
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Section: Currency Selector */}
          <div className="hidden lg:flex items-center gap-1">
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
