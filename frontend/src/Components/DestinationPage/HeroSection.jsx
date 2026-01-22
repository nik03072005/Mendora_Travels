import React from 'react';

const HeroSection = ({ title, tagline, startingPrice, durationRange, heroImage }) => {
  return (
    <div 
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImage || 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1920&q=80'}')`
      }}
    >
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title || 'Destination Tour Packages'}</h1>
        <p className="text-xl md:text-2xl mb-6">{tagline || 'Discover Amazing Places'}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {startingPrice && (
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg">
              <p className="text-sm">Starting From</p>
              <p className="text-2xl font-bold">₹{startingPrice?.toLocaleString('en-IN')}</p>
            </div>
          )}
          {durationRange && (
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg">
              <p className="text-sm">Duration</p>
              <p className="text-2xl font-bold">{durationRange}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
