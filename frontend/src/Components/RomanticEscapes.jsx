import React from 'react';

const ROMANTIC_DESTINATIONS = [
  {
    id: 1,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    price: "44,999"
  },
  {
    id: 2,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    price: "74,999"
  },
  {
    id: 3,
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    price: "34,999"
  },
  {
    id: 4,
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    price: "44,999"
  },
  {
    id: 5,
    name: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    price: "57,999"
  },
  {
    id: 6,
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80",
    price: "24,499"
  },
  {
    id: 7,
    name: "Andaman",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    price: "29,999"
  },
  {
    id: 8,
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
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
              poster="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
            >
              <source 
                src="https://player.vimeo.com/external/370467553.sd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=139&oauth2_token_id=57447761" 
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
