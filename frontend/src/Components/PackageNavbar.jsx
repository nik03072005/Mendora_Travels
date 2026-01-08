import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/mendora-logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../Redux/currencySLice';

const CURRENCY_FLAGS = {
  INR: "https://flagcdn.com/w20/in.png",
  USD: "https://flagcdn.com/w20/us.png",
  EUR: "https://flagcdn.com/w20/eu.png",
};

const PNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currency.currency);

  const handleCurrencyChange = (event) => {
    dispatch(setCurrency(event.target.value));
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "International", path: "/international-trips" },
    { name: "Domestic", path: "/#domestic-trips" },
    { name: "Destinations", path: "/#destinations" },
    { name: "Interests", path: "/#explore-categories" },
    { name: "Blogs", path: "/blogs" },
    { name: "Why Choose Us", path: "/#why-choose-us" },
    { name: "FAQ", path: "/#testimonials" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
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

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Currency Selector */}
          <div className="hidden lg:flex items-center gap-2">
            <img
              src={CURRENCY_FLAGS[selectedCurrency]}
              alt={`${selectedCurrency} Flag`}
              className="w-5 h-4"
            />
            <select
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              className="border-none outline-none text-sm bg-transparent cursor-pointer font-medium text-gray-900"
              style={{ colorScheme: 'light' }}
            >
              <option value="INR" style={{ color: '#111827', backgroundColor: '#ffffff' }}>INR</option>
              <option value="USD" style={{ color: '#111827', backgroundColor: '#ffffff' }}>USD</option>
              <option value="EUR" style={{ color: '#111827', backgroundColor: '#ffffff' }}>EUR</option>
            </select>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-3">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-600 rounded-md transition-colors font-medium text-sm"
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Currency Selector */}
              <div className="px-4 py-2 flex items-center gap-2">
                <img
                  src={CURRENCY_FLAGS[selectedCurrency]}
                  alt={`${selectedCurrency} Flag`}
                  className="w-5 h-4"
                />
                <select
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white cursor-pointer font-medium text-gray-900"
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PNavbar;
