import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleChevronRight,
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Tript.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative ">
      {/* Container for the boxes */}
      <div className="flex justify-center bg-transparent py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl w-full px-6 relative z-10">
          {/* About Us */}
          <div className="bg-white text-black p-4 rounded-lg shadow-[0_0_20px_1px_rgba(0,0,0,0.14)]">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Trip Tortoise Holidays, we're on a bold mission to redefine how
              the world experiences travel. Our passion extends far beyond the
              journey itself—we're devoted to delivering personalized,
              high-touch service that caters to every traveller’s needs.
            </p>
          </div>

          {/* Useful Links */}
          <div className="bg-white text-black p-4 rounded-lg shadow-[0_0_20px_1px_rgba(0,0,0,0.14)]">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Useful Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to={"/about-us"}
                  className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="w-4 h-4 mr-2 text-[#f37002]"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="w-4 h-4 mr-2 text-[#f37002]"
                  />
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="w-4 h-4 mr-2 text-[#f37002]"
                  />
                  Privacy Policies
                </a>
              </li>
              <li>
                <a
                  href="/copyright"
                  className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="w-4 h-4 mr-2 text-[#f37002]"
                  />
                  Copyright Policies
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="w-4 h-4 mr-2 text-[#f37002]"
                  />
                  Career
                </a>
              </li>
              <li>
                <Link
                  to={"/blogs"}
                  className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="w-4 h-4 mr-2 text-[#f37002]"
                  />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact-us"}
                  className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="w-4 h-4 mr-2 text-[#f37002]"
                  />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Destination */}
          <div className="bg-white text-black p-4 rounded-lg shadow-[0_0_20px_1px_rgba(0,0,0,0.14)]">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Destination
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <ul className="space-y-3">
                <li>
                  <Link
                    to={'/destination/Thailand'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Thailand
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Malaysia'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Malaysia
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Singapore'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Singapore
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Vietnam'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Vietnam
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Philippines'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Philippines
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Indonesia'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Indonesia
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Maldives'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Maldives
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={'/destination/Japan'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Japan
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/destination/united-arab-emirates`}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    UAE
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Azerbaijan'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Azerbaijan
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Europe'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Europe
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/India'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    India
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/destination/Bhutan'}
                    className="flex items-center text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="w-4 h-4 mr-2 text-[#f37002]"
                    />
                    Bhutan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-white text-black p-4 rounded-lg shadow-[0_0_20px_1px_rgba(0,0,0,0.14)]">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 text-sm mb-2 flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-4 h-4 mr-2 text-[#f37002]"
              />
              D-6/6 Dr. B.C Roy Sarani
              3rd Floor Bidhan Nagar Municipal Corporation 
              Kolkata- 700059, West Bengal, India
            </p>
            <p className="text-gray-600 text-sm mb-2 flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-4 h-4 mr-2 text-[#f37002]"
              />
              <a
                href="mailto:info@triptortoise.com"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                info@triptortoise.com
              </a>
            </p>
            <p className="text-gray-600 text-sm mb-2 flex items-center">
              <FontAwesomeIcon
                icon={faGlobe}
                className="w-4 h-4 mr-2 text-[#f37002]"
              />
              <a
                href="http://www.triptortoise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                www.triptortoise.com
              </a>
            </p>
            <p className="text-gray-600 text-sm mb-2 flex items-center">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-4 h-4 mr-2 text-[#f37002]"
              />
              <a
                href="https://wa.me/919051483390"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                +919051483390
              </a>
            </p>
            <p className="text-gray-600 text-sm flex mb-2 items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-4 h-4 mr-2 text-[#f37002]"
              />
              <a
                href="tel:+919330405098"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                +919330405098
              </a>
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-4 h-4 mr-2 text-[#f37002]"
              />
              <a
                href="tel:+919051483390"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                +919051483390
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer with original background color */}
      <footer className="bg-gray-900 text-white -mt-32 pt-32 pb-8">
        <div className="container mx-auto px-4">
          {/* Divider */}
          <hr className="border-gray-700 mb-6" />

          {/* Logo and Social Icons (Centered) */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center">
                {/* Circular Logo with Increased Size */}
                <div className="w-40 h-14 overflow-hidden">
                  <img
                    src={logo}
                    alt="Trip Tortoise Logo"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61576753933980"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-2xl hover:text-blue-500"
                  />
                </a>
                <a
                  href="https://www.instagram.com/triptortoise?utm_source=qr&igsh=bTJ3aXZkbG1xeGVv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl hover:text-red-400"
                  />
                </a>
                <a
                  href="https://x.com/tortoise_trip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-2xl hover:text-blue-400"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@Trip-p4y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-2xl hover:text-red-400"
                  />
                </a>
                <a
                  href="https://in.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-2xl hover:text-blue-400"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Updated Copyright Notice with Fixed Width */}
          <div className="max-w-6xl w-full px-6 text-center text-sm text-gray-500 mx-auto">
            <p className="text-[16px] font-semibold">
              © 2025 Trip Tortoise Holidays | All rights reserved.
            </p>
            <p className="mt-2 text-[14px]">
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
              Unauthorized use is prohibited and punishable by law.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
