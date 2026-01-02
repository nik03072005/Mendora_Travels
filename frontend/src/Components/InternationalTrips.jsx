import React from 'react';

const InternationalTrips = () => {
  const destinations = [
    {
      name: "Europe",
      price: "1,49,999",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80"
    },
    {
      name: "Vietnam",
      price: "59,999",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80"
    },
    {
      name: "Bali",
      price: "49,999",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
    },
    {
      name: "Thailand",
      price: "44,999",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80"
    },
    {
      name: "Japan",
      price: "1,29,999",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
    },
    {
      name: "Sri Lanka",
      price: "28,999",
      image: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80"
    },
    {
      name: "Philippines",
      price: "79,990",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80"
    },
    {
      name: "Kazakhstan",
      price: "47,999",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          {/* Left: Video Section */}
          <div className="relative">
            <video
              className="w-80 h-64 object-cover rounded-xl"
              autoPlay
              loop
              playsInline
              muted
              poster="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80"
            >
              <source
                src="https://player.vimeo.com/external/370467553.sd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">International Trips</h2>
              <p className="text-lg mb-4">Discover the world, one destination at a time</p>
              <a
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
                href="/international-trips"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Right: Destination Grid */}
          <div className="grid grid-cols-4 gap-4 flex-1 ml-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt={destination.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    src={destination.image}
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

export default InternationalTrips;
