import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes,  faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { TiHomeOutline } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SearchModal from "./Search/SearchModal";

const MobileMenu = () => {
  const [showChat, setShowChat] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const navigate  = useNavigate();

  const closeDialogs = () => {
    setShowChat(false);
    setShowCallback(false);
  };
   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add your API call logic here
    closeDialogs();
  };

  return (
    <>
      {/* Fixed Bottom Navbar */}
       {isModalOpen && <SearchModal onClose={handleCloseModal} />}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white flex justify-around items-center py-2 shadow-inner xl:hidden">
       <TiHomeOutline onClick={()=>navigate('/')} className="text-2xl cursor-pointer" />
        <MdOutlineTravelExplore onClick={handleExploreClick} className="text-2xl cursor-pointer" />
        <a
         href="tel:+919051483390"
          className="flex flex-col items-center text-xs cursor-pointer"
          
        >
          <IoCallOutline className="text-2xl mb-1" />
        </a>
        <div
          className="flex flex-col items-center text-xs cursor-pointer"
          onClick={() => setShowChat(true)}
        >
          <FaWhatsapp className="text-2xl mb-1" />
        </div>
      </div>

      {/* Chat Now Modal */}
      {showChat && (
        <div className="fixed inset-0 overlay2 bg-transparent backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center fixed mt-24 *: ">
            <button
              onClick={closeDialogs}
              className="absolute top-2 right-3 text-gray-500 hover:text-black "
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-xl font-bold mb-2">WhatsApp Chat</h2>
            <p className="text-gray-600 mb-4">Talk with our travel expert!</p>
            <p className="text-green-700 text-lg font-semibold">
              +91 90514 83390
            </p>
            <a
              href="https://wa.me/919051483390"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {/* <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> */}
              Open WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Callback Modal */}
      {showCallback && (
        <div className="fixed inset-0  bg-transparent backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-left relative">
            <button
              onClick={closeDialogs}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Request a Callback
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
