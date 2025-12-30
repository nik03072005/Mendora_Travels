import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-100 flex items-center px-6 py-4 bg-transparent top-0">
     {/* Logo */}
      <div className="text-white text-2xl font-bold">
        <span className="bg-white text-black px-2 py-1 rounded">BREAK</span>BAG
      </div>

      {/* Centered Tabs  */}

      <div className="flex justify-center flex-1">
        <div className="bg-white rounded-t-md px-4 py-2 flex space-x-2">
          <button className="bg-red-600 text-white font-medium px-4 py-2 rounded-t-md hover:bg-red-700 transition">Tours</button>
          <button className="text-red-600 font-medium px-4 py-2 rounded-t-md hover:bg-red-600 hover:text-white transition">Activities</button>
          <button className="text-red-600 font-medium px-4 py-2 rounded-t-md hover:bg-red-600 hover:text-white transition">Group Tours</button>
        </div>
      </div>

      {/* Login Button */}

      <div className="absolute right-6">
        <button className="bg-red-600 text-white font-medium px-4 py-2 rounded hover:bg-red-700 transition">Login</button>
      </div>
    </div>
  );
}
