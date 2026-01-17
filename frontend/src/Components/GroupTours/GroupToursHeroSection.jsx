import React from 'react';
import { FaStar, FaUsers } from 'react-icons/fa';

const GroupToursHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=80')`
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
            <FaUsers />
            <span className="text-sm font-semibold">Join The Adventure</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Group Tour Packages
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Travel with like-minded people and create unforgettable memories together
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Group Tours
          </button>
        </div>
      </div>

      {/* Review Badges at Bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 flex-wrap justify-center px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2">
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            className="w-5 h-5"
          />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
          </div>
          <span className="text-white text-sm font-medium">4.9</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2">
          <img 
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" 
            alt="TripAdvisor" 
            className="w-5 h-5"
          />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
          </div>
          <span className="text-white text-sm font-medium">4.8</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
          </div>
          <span className="text-white text-sm font-medium">4.7</span>
        </div>
      </div>
    </section>
  );
};

export default GroupToursHeroSection;
