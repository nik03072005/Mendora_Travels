import React from 'react';
import greece from '../assets/greece.jpg';
import tripVideo from '../assets/trip-video.mp4';

const InternationalTrips = () => {
  const destinations = [
    {
      name: "Europe",
      price: "1,49,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/International/europe.jpeg"
    },
    {
      name: "Vietnam",
      price: "59,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/International/vietnam.jpeg"
    },
    {
      name: "Bali",
      price: "49,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/International/bali.jpeg"
    },
    {
      name: "Thailand",
      price: "44,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/International/thailand.jpeg"
    },
    {
      name: "Japan",
      price: "1,29,999",
      image: greece // "https://wanderon-images.gumlet.io/Card%20Image/japan_card.jpeg?updatedAt=1725356230489"
    },
    {
      name: "Sri Lanka",
      price: "28,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/International/sri-lanka.jpeg"
    },
    {
      name: "Philippines",
      price: "79,990",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/International/philippines.jpeg"
    },
    {
      name: "Kazakhstan",
      price: "47,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/International/kazakhstan.jpeg"
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
              poster={greece}
            >
              <source
                src={tripVideo}
                type="video/mp4"
              />
              {/* <source
                src="https://wanderon-video.gumlet.io/category-section/international_(1)+(540p).mp4"
                type="video/mp4"
              /> */}
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
