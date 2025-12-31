import React from 'react';
import greece from '../assets/greece.jpg';
import tripVideo from '../assets/trip-video.mp4';

const ExploreIndia = () => {
  const destinations = [
    {
      name: "Rajasthan",
      price: "12,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/rajasthan.jpeg"
    },
    {
      name: "Meghalaya",
      price: "21,499",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/meghalaya.jpeg"
    },
    {
      name: "Andaman",
      price: "29,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/andaman.jpeg"
    },
    {
      name: "Spiti",
      price: "17,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/spiti.jpeg"
    },
    {
      name: "Leh Ladakh",
      price: "21,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/ladakh.jpeg"
    },
    {
      name: "Himachal",
      price: "7,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/himachal.jpeg"
    },
    {
      name: "Kashmir",
      price: "24,499",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/kashmir.jpeg"
    },
    {
      name: "Sikkim",
      price: "14,999",
      image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Explore%20India/sikkim.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
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
                src="https://wanderon-video.gumlet.io/category-section/india_(1)+(540p).mp4"
                type="video/mp4"
              /> */}
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Explore India</h2>
              <p className="text-lg mb-4">A Journey Through Time, Colour And Culture</p>
              <a
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
                href="/domestic-trips"
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

export default ExploreIndia;
