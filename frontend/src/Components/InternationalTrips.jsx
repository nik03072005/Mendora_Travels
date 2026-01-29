import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InternationalTrips = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/destinations/get?category=international`);
        // API already sorts by updatedAt and createdAt in descending order
        const formattedDestinations = response.data.map(dest => ({
          name: dest.destinationName,
          slug: dest.slug,
          price: dest.heroSection?.startingPrice ? dest.heroSection.startingPrice.toLocaleString('en-IN') : '0',
          image: dest.imageUrl || dest.heroSection?.heroImage || 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80'
        }));
        setDestinations(formattedDestinations.slice(0, 8)); // Limit to 8 destinations
        setLoading(false);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleDestinationClick = (slug) => {
    navigate(`/international-trips/${slug}`);
  };

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
              <button
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
                onClick={() => navigate('/international-trips')}
              >
                Explore
              </button>
            </div>
          </div>

          {/* Right: Destination Grid */}
          <div className="grid grid-cols-4 gap-4 flex-1 ml-8">
            {loading ? (
              <div className="col-span-4 text-center py-8">
                <p className="text-gray-600">Loading destinations...</p>
              </div>
            ) : destinations.length === 0 ? (
              <div className="col-span-4 text-center py-8">
                <p className="text-gray-600">No destinations available</p>
              </div>
            ) : (
              destinations.map((destination, index) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalTrips;
