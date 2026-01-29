import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/mendora-logo.png";

// Constants
const CONTACT_INFO = {
  email: "contact@mendoratravels.com",
  phone: "+919147144627",
  phoneDisplay: "+91 9147144627",
  whatsappMessage: "Hi%20Mendora%20Travels%2C%20I%20have%20a%20query!",
};

const INTERNATIONAL_DESTINATIONS = [
  { name: "Europe", path: "/international-trips/europe" },
  { name: "Bali", path: "/international-trips/bali" },
  { name: "Vietnam", path: "/international-trips/vietnam" },
  { name: "Thailand", path: "/international-trips/thailand" },
  { name: "Kazakhstan", path: "/international-trips/kazakhstan" },
  { name: "Singapore", path: "/international-trips/singapore" },
  { name: "Bhutan", path: "/international-trips/bhutan" },
  { name: "Maldives", path: "/international-trips/maldives" },
  { name: "Dubai", path: "/international-trips/dubai" },
  { name: "Malaysia", path: "/international-trips/malaysia" },
];

const DOMESTIC_DESTINATIONS = [
  { name: "Ladakh", path: "/domestic-trips/ladakh" },
  { name: "Spiti Valley", path: "/domestic-trips/spiti-valley" },
  { name: "Meghalaya", path: "/domestic-trips/meghalaya" },
  { name: "Kashmir", path: "/domestic-trips/kashmir" },
  { name: "Nagaland", path: "/domestic-trips/nagaland" },
  { name: "Andaman", path: "/domestic-trips/andaman" },
  { name: "Kerala", path: "/domestic-trips/kerala" },
  { name: "Rajasthan", path: "/domestic-trips/rajasthan" },
  { name: "Himachal Pradesh", path: "/domestic-trips/himachal-pradesh" },
];

const SPECIAL_TRIPS = [
  { name: "Community Trips", path: "/group-tours" },
  { name: "Honeymoon Trips", path: "/honeymoon" },
  { name: "Corporate Trips", path: "/corporate" },
  { name: "Weekend Getaways", path: "/weekend" },
];

const QUICK_LINKS = [
  { name: "About us", path: "/about-us", useLink: true },
  { name: "Contact Us", path: "/contact-us", useLink: true },
  { name: "Blogs", path: "/blogs" },
  { name: "Careers", path: "/career" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Disclaimer", path: "/copyright" },
  { name: "Terms & Conditions", path: "/terms-conditions" },
];

// Reusable Components
const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-base font-bold text-white uppercase tracking-wide relative pb-3">
      {title}
      <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500" />
    </h3>
    {children}
  </div>
);

const FooterLink = ({ href, children, useLink = false }) => {
  const linkClasses = "text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm";
  
  return useLink ? (
    <Link to={href} className={linkClasses}>
      {children}
    </Link>
  ) : (
    <a href={href} className={linkClasses}>
      {children}
    </a>
  );
};

const EmailIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const BackToTopIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const WhatsAppButton = () => (
  <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
    <div className="relative group">
      {/* Hover Popup */}
      <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 sm:p-4 w-56 sm:w-64 transform transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
        <div className="text-center space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm font-medium text-gray-900">Request A Call Back</p>
          <a
            href={`https://api.whatsapp.com/send?phone=91${CONTACT_INFO.phone.slice(1)}&text=${CONTACT_INFO.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 sm:space-x-2 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-base sm:text-lg" />
            <span className="text-xs sm:text-sm">Chat With Our Executive</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="block w-full text-center bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://api.whatsapp.com/send?phone=91${CONTACT_INFO.phone.slice(1)}&text=${CONTACT_INFO.whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
        aria-label="Contact us on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-2xl text-white" />
      </a>
    </div>
  </div>
);

const BackToTopButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 hover:scale-110 transition-all z-50 flex items-center justify-center"
    title="Back to Top"
    aria-label="Scroll to top"
  >
    <BackToTopIcon />
  </button>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {/* Logo Section */}
            <div className="lg:col-span-1 flex items-start justify-center sm:justify-start">
              <img
                src={logo}
                alt="Mendora Travels Logo"
                className="brightness-110 drop-shadow-lg w-48 h-auto sm:w-52 lg:w-64 lg:-ml-4"
              />
            </div>

            {/* International Trips */}
            <div className="lg:ml-8">
              <FooterSection title="International Trips">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {INTERNATIONAL_DESTINATIONS.map((destination) => (
                    <li key={destination.path}>
                      <FooterLink href={destination.path}>
                        {destination.name}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </FooterSection>
            </div>

            {/* India Trips */}
            <FooterSection title="India Trips">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {DOMESTIC_DESTINATIONS.map((destination) => (
                  <li key={destination.path}>
                    <FooterLink href={destination.path}>
                      {destination.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Mendora Special */}
            <FooterSection title="Mendora Special">
              <ul className="space-y-2.5">
                {SPECIAL_TRIPS.map((trip) => (
                  <li key={trip.path}>
                    <FooterLink href={trip.path}>{trip.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Quick Links */}
            <FooterSection title="Quick Links">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.path}>
                    <FooterLink href={link.path} useLink={link.useLink}>
                      {link.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                © {currentYear} Mendora Travels. All rights reserved.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6 sm:gap-y-2 text-xs sm:text-sm">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"
                  aria-label="Email us"
                >
                  <EmailIcon />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"
                  aria-label="Call us"
                >
                  <PhoneIcon />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <BackToTopButton onClick={scrollToTop} />
    </>
  );
};

export default Footer;
