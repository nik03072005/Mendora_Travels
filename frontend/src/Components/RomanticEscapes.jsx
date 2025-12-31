import React from 'react';
import greece from '../assets/greece.jpg';
import tripVideo from '../assets/trip-video.mp4';

const ROMANTIC_DESTINATIONS = [
  {
    id: 1,
    name: "Bali",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/romantic%20escapes/bali-romantic-02.jpeg",
    price: "44,999"
  },
  {
    id: 2,
    name: "Maldives",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/International/maldives.jpeg",
    price: "74,999"
  },
  {
    id: 3,
    name: "Singapore",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/romantic%20escapes/singapore-romantic-02.jpeg",
    price: "34,999"
  },
  {
    id: 4,
    name: "Thailand",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/romantic%20escapes/thailand-romantic-02.jpeg",
    price: "44,999"
  },
  {
    id: 5,
    name: "Vietnam",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/International/vietnam.jpeg",
    price: "57,999"
  },
  {
    id: 6,
    name: "Kashmir",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/kashmir.jpeg",
    price: "24,499"
  },
  {
    id: 7,
    name: "Andaman",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/andaman.jpeg",
    price: "29,999"
  },
  {
    id: 8,
    name: "Kerala",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/kerala.jpeg",
    price: "14,000"
  }
];

const RomanticEscapes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          {/* Video Section */}
          <div className="relative w-full lg:w-80 flex-shrink-0">
            <video 
              className="w-full lg:w-80 h-64 object-cover rounded-xl" 
              autoPlay 
              loop 
              muted
              playsInline
              poster={greece}
              // poster="https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/romantic-thumbnail.jpeg"
            >
              <source 
                src={tripVideo}
                // src="https://wanderon-video.gumlet.io/category-section/honeymoon_(1)+(540p).mp4" 
                type="video/mp4" 
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Romantic Escapes</h2>
              <p className="text-base md:text-lg mb-4">Where Forever Begins...Together!</p>
              <a 
                href="/honeymoon" 
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap font-medium"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">
            {ROMANTIC_DESTINATIONS.map((destination) => (
              <div 
                key={destination.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="text-sm font-bold">{destination.name}</h3>
                    <p className="text-xs">Starting Price Rs. {destination.price}/-</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RomanticEscapes;
