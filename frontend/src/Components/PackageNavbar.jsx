import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/mendora-logo.png"; // Adjust the path to your logo image
import { useNavigate } from "react-router-dom";
import CallUsButton from "./Callback/CallUsButton";

const PNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-2 fixed w-full z-50 top-0">
      <div className="max-w-6xl mx-auto justify-between">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer overflow-hidden">
          <img onClick={()=>navigate('/')} src={logo} alt="Mendora Travels"
          className="h-8 sm:h-10 w-auto object-contain" />
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden max-w-[140px] md:block">
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
        <div className="md:hidden mt-4 px-4 pb-4">
                    <CallUsButton/>
        </div>
      )}
      </div>
    </nav>
  );
};

export default PNavbar;
