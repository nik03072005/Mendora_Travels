import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/mendora-logo.png"; // Adjust the path to your logo image
import { useNavigate } from "react-router-dom";
import CallUsButton from "./Callback/CallUsButton";

const TNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-full bg-transparent px-2 z-50">
      <div className="max-w-6xl mx-auto justify-between">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer overflow-hidden">
          <img onClick={()=>navigate('/')} src={logo} alt="Mendora Travels"
          className="h-8 sm:h-10 w-auto object-contain" />
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden mb-2 md:block">
          <CallUsButton/>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Contact Button */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4">
         <CallUsButton/>
        </div>
      )}
      </div>
    </div>
  );
};

export default TNavbar;
