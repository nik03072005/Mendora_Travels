import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FiMenu, FiX } from "react-icons/fi";
import { setCurrency } from '../../Redux/currencySLice';
import logo from '../assets/mendora-logo.png';
import CallUsButton from './Callback/CallUsButton';

const CURRENCY_FLAGS = {
  INR: "https://flagcdn.com/w20/in.png",
  USD: "https://flagcdn.com/w20/us.png",
  EUR: "https://flagcdn.com/w20/eu.png",
};

const HomeNavbar = ({ 
  onSearchClick, 
  variant = 'transparent', // 'transparent', 'solid', 'minimal'
  showMenuItems = true,
  showCurrency = true 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCurrency = useSelector((state) => state.currency.currency);

  useEffect(() => {
    if (variant === 'transparent') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant]);

  const handleCurrencyChange = (event) => {
    dispatch(setCurrency(event.target.value));
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "International", path: "/international-trips" },
    { name: "Domestic", path: "/domestic-trips" },
    { name: "Interests", path: "/interests" },
    { name: "Blogs", path: "/blogs" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "FAQ", path: "/#testimonials" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Determine navbar styling based on variant and scroll state
  const getNavbarClass = () => {
    if (variant === 'minimal') {
      return 'bg-transparent';
    }
    if (variant === 'solid') {
      return 'bg-white shadow-md';
    }
    // transparent variant
    return isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm';
  };

  const getTextClass = () => {
    if (variant === 'minimal' || variant === 'transparent' && !isScrolled) {
      return 'text-white hover:text-white/80';
    }
    return 'text-gray-900 hover:text-[#007aff]';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarClass()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img
              onClick={() => navigate('/')}
              src={logo}
              alt="Mendora Travels"
              className="h-6 sm:h-8 w-auto object-contain"
              style={{ maxWidth: '120px' }}
            />
          </div>

          {/* Navigation Menu Items - Only show if showMenuItems is true */}
          {showMenuItems && (
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center space-x-6">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`transition-colors font-medium ${getTextClass()}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Currency Selector - Only show if showCurrency is true and showMenuItems is true */}
            {showCurrency && showMenuItems && (
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
                    variant === 'solid' || (variant === 'transparent' && isScrolled) ? 'text-gray-900' : 'text-white'
                  }`}
                  style={{ colorScheme: 'light' }}
                >
                  <option value="INR" style={{ color: '#111827', backgroundColor: '#ffffff' }}>INR</option>
                  <option value="USD" style={{ color: '#111827', backgroundColor: '#ffffff' }}>USD</option>
                  <option value="EUR" style={{ color: '#111827', backgroundColor: '#ffffff' }}>EUR</option>
                </select>
              </div>
            )}
            
            {/* CallUsButton for minimal variant */}
            {variant === 'minimal' && <CallUsButton />}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {variant === 'minimal' ? (
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={variant === 'solid' || (variant === 'transparent' && isScrolled) ? 'text-gray-900' : 'text-white'}
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            ) : (
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${variant === 'solid' || (variant === 'transparent' && isScrolled) ? 'text-gray-900' : 'text-white'}`}
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && showMenuItems && (
          <div className="lg:hidden py-4 bg-white">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-900 hover:text-[#007aff] font-medium px-4 py-2"
                >
                  {item.name}
                </a>
              ))}
              {showCurrency && (
                <div className="flex items-center gap-2 px-4 py-2">
                  <img
                    src={CURRENCY_FLAGS[selectedCurrency]}
                    alt={`${selectedCurrency} Flag`}
                    className="w-5 h-4"
                  />
                  <select
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile CallUsButton for minimal variant */}
        {mobileMenuOpen && variant === 'minimal' && (
          <div className="lg:hidden py-4 bg-white px-4">
            <CallUsButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
