import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExploreIndia = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Rajasthan",
      slug: "rajasthan",
      price: "12,999",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80"
    },
    {
      name: "Meghalaya",
      slug: "meghalaya",
      price: "21,499",
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80"
    },
    {
      name: "Andaman",
      slug: "andaman",
      price: "29,999",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    },
    {
      name: "Spiti",
      slug: "spiti-valley",
      price: "17,999",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
    },
    {
      name: "Leh Ladakh",
      slug: "ladakh",
      price: "21,999",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
    },
    {
      name: "Himachal",
      slug: "himachal-pradesh",
      price: "7,999",
      image: "https://images.unsplash.com/photo-1585516482738-d8afd4d9693a?w=800&q=80"
    },
    {
      name: "Kashmir",
      slug: "kashmir",
      price: "24,499",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80"
    },
    {
      name: "Sikkim",
      slug: "sikkim",
      price: "14,999",
      image: "https://images.unsplash.com/photo-1622308644420-4eb86a2f9814?w=800&q=80"
    }
  ];

  const handleDestinationClick = (slug) => {
    navigate(`/domestic-trips/${slug}`);
  };

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
              poster="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80"
            >
              <source
                src="https://player.vimeo.com/external/370467553.sd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Explore India</h2>
              <p className="text-lg mb-4">A Journey Through Time, Colour And Culture</p>
              <button
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
                onClick={() => navigate('/domestic-trips')}
              >
                Explore
              </button>
            </div>
          </div>

          {/* Right: Destination Grid */}
          <div className="grid grid-cols-4 gap-4 flex-1 ml-8">
            {destinations.map((destination, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => handleDestinationClick(destination.slug)}
              >
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
