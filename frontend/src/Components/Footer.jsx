import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/mendora-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* International Trips */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold mb-2">International Trips</h3>
              <ul className="space-y-1">
                <li><a href="/international-trips/europe" className="text-gray-300 hover:text-white transition-colors text-sm">Europe</a></li>
                <li><a href="/international-trips/bali" className="text-gray-300 hover:text-white transition-colors text-sm">Bali</a></li>
                <li><a href="/international-trips/vietnam" className="text-gray-300 hover:text-white transition-colors text-sm">Vietnam</a></li>
                <li><a href="/international-trips/thailand" className="text-gray-300 hover:text-white transition-colors text-sm">Thailand</a></li>
                <li><a href="/international-trips/kazakhstan" className="text-gray-300 hover:text-white transition-colors text-sm">Kazakhstan</a></li>
                <li><a href="/international-trips/singapore" className="text-gray-300 hover:text-white transition-colors text-sm">Singapore</a></li>
                <li><a href="/international-trips/bhutan" className="text-gray-300 hover:text-white transition-colors text-sm">Bhutan</a></li>
                <li><a href="/international-trips/maldives" className="text-gray-300 hover:text-white transition-colors text-sm">Maldives</a></li>
                <li><a href="/international-trips/dubai" className="text-gray-300 hover:text-white transition-colors text-sm">Dubai</a></li>
                <li><a href="/international-trips/malaysia" className="text-gray-300 hover:text-white transition-colors text-sm">Malaysia</a></li>
              </ul>
            </div>

            {/* India Trips */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold mb-2">India Trips</h3>
              <ul className="space-y-1">
                <li><a href="/domestic-trips/ladakh" className="text-gray-300 hover:text-white transition-colors text-sm">Ladakh</a></li>
                <li><a href="/domestic-trips/spiti-valley" className="text-gray-300 hover:text-white transition-colors text-sm">Spiti Valley</a></li>
                <li><a href="/domestic-trips/meghalaya" className="text-gray-300 hover:text-white transition-colors text-sm">Meghalaya</a></li>
                <li><a href="/domestic-trips/kashmir" className="text-gray-300 hover:text-white transition-colors text-sm">Kashmir</a></li>
                <li><a href="/domestic-trips/himachal-pradesh" className="text-gray-300 hover:text-white transition-colors text-sm">Himachal Pradesh</a></li>
                <li><a href="/domestic-trips/andaman" className="text-gray-300 hover:text-white transition-colors text-sm">Andaman</a></li>
                <li><a href="/domestic-trips/kerala" className="text-gray-300 hover:text-white transition-colors text-sm">Kerala</a></li>
                <li><a href="/domestic-trips/rajasthan" className="text-gray-300 hover:text-white transition-colors text-sm">Rajasthan</a></li>
                <li><a href="/domestic-trips/nagaland" className="text-gray-300 hover:text-white transition-colors text-sm">Nagaland</a></li>
              </ul>
            </div>

            {/* Mendora Special */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold mb-2">Mendora Special</h3>
              <ul className="space-y-1">
                <li><a href="/group-tours" className="text-gray-300 hover:text-white transition-colors text-sm">Community Trips</a></li>
                <li><a href="/honeymoon" className="text-gray-300 hover:text-white transition-colors text-sm">Honeymoon Trips</a></li>
                <li><a href="/corporate" className="text-gray-300 hover:text-white transition-colors text-sm">Corporate Trips</a></li>
                <li><a href="/weekend" className="text-gray-300 hover:text-white transition-colors text-sm">Weekend Getaways</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link to="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
                <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-sm">Customer Success & Support</Link></li>
                <li><a href="/copyright" className="text-gray-300 hover:text-white transition-colors text-sm">Disclaimer</a></li>
                <li><a href="/career" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="/blogs" className="text-gray-300 hover:text-white transition-colors text-sm">Blogs</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-2">
                <img
                  src={logo}
                  alt="Mendora Travels"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <h3 className="text-base font-semibold">MENDORA TRAVELS</h3>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs">
                <a href="mailto:info@mendoratravels.com" className="text-gray-300 hover:text-white transition-colors">
                  info@mendoratravels.com
                </a>
                <a href="tel:+919547306912" className="text-gray-300 hover:text-white transition-colors">
                  +91-9547306912
                </a>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  www.mendoratravels.com
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 pt-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=61576753933980" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/triptortoise?utm_source=qr&igsh=bTJ3aXZkbG1xeGVv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com/tortoise_trip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@mendoratravels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/mendoratravels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
                </a>
              </div>

              {/* Footer Decoration Image */}
              <div className="pt-2">
                <img 
                  src="https://wanderon-images.gumlet.io//footer-desktop.png?updatedAt=1734433384777" 
                  alt="Footer Decoration"
                  className="mx-auto max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex flex-col md:flex-row justify-center items-center text-center">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} Mendora Travels. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button with Hover Popup */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          {/* Hover Popup */}
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64 transform transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
            <div className="text-center space-y-3">
              <div className="text-sm font-medium text-gray-900">Request A Call Back</div>
              <a
                href="https://api.whatsapp.com/send?phone=919547306912&text=Hi%20Mendora%20Travels%2C%20I%20have%20a%20query!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                <span className="text-sm">Chat With Our Executive</span>
              </a>
              <a
                href="tel:9547306912"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Call Now
              </a>
            </div>
          </div>
          
          {/* WhatsApp Button */}
          <a
            href="https://api.whatsapp.com/send?phone=919547306912&text=Hi%20Mendora%20Travels%2C%20I%20have%20a%20query!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-white" />
          </a>
        </div>
      </div>

      {/* Fixed Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors z-50 flex items-center justify-center"
        title="Back to Top"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </>
  );
};

export default Footer;
