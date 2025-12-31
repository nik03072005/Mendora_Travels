import React from 'react';
import greece from '../assets/greece.jpg';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={greece}
          // src="https://wanderon-images.gumlet.io/new-homepage-data/cta%20homepage%20-%20desktop.png" 
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-600/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Explore the World?
        </h2>
        <p className="text-lg md:text-xl mb-8">Let's plan your perfect getaway!</p>
        <a 
          href="/contact-us"
          className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Connect Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
