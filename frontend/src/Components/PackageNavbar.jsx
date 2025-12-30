import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Tript.png"; // Adjust the path to your logo image
import { useNavigate } from "react-router-dom";
import CallUsButton from "./Callback/CallUsButton";

const PNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md   px-6 py-2 fixed w-full z-50 top-0">
      <div className="max-w-6xl  mx-auto   justify-between">
        <div    className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500 cursor-pointer">
          <img onClick={()=>navigate('/')} src={logo} alt=""
          className=" h-12 scale-150 object-contain" />
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
