import React from 'react';
import { FaCalendarWeek } from 'react-icons/fa';

const WeekendGetawaysHeroSection = ({ formData, handleFormChange, handleFormSubmit, showSuccessMessage }) => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-green-800 via-emerald-700 to-teal-600">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-white">
              <div className="flex items-center mb-4">
                <FaCalendarWeek className="text-5xl text-yellow-400 mr-4" />
                <h1 className="text-5xl sm:text-6xl font-bold">
                  Weekend <span className="text-yellow-400">Escapes</span>
                </h1>
              </div>
              <p className="text-xl sm:text-2xl mb-6 text-green-100">
                Perfect short getaways for your weekend adventures
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <p className="text-lg text-green-100">2-3 Day Quick Trips</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <p className="text-lg text-green-100">Easy to Reach Destinations</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <p className="text-lg text-green-100">Budget-Friendly Packages</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <p className="text-lg text-green-100">Hassle-Free Planning</p>
                </div>
              </div>
            </div>

            {/* Right Side - Quick Inquiry Form */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Weekend Trip</h3>
              
              {showSuccessMessage && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! We'll contact you soon with the best weekend getaway options.
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="destination"
                    placeholder="Preferred Destination"
                    value={formData.destination}
                    onChange={handleFormChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <input
                    type="number"
                    name="numberOfPeople"
                    placeholder="Number of Travelers"
                    value={formData.numberOfPeople}
                    onChange={handleFormChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Special Requirements"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Weekend Packages
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekendGetawaysHeroSection;
