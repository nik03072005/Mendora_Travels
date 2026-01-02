import React from 'react';

const GALLERY_DESTINATIONS = [
  {
    id: 1,
    name: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80"
  },
  {
    id: 2,
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
  },
  {
    id: 3,
    name: "Bhutan",
    image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=800&q=80"
  },
  {
    id: 4,
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80"
  },
  {
    id: 5,
    name: "Meghalaya",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80"
  },
  {
    id: 6,
    name: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
  },
  {
    id: 7,
    name: "Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80"
  },
  {
    id: 8,
    name: "Sikkim",
    image: "https://images.unsplash.com/photo-1622308644420-4eb86a2f9814?w=800&q=80"
  },
  {
    id: 9,
    name: "Ladakh",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
  },
  {
    id: 10,
    name: "Himachal",
    image: "https://images.unsplash.com/photo-1585516482738-d8afd4d9693a?w=800&q=80"
  },
  {
    id: 11,
    name: "Spiti",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80"
  },
  {
    id: 12,
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80"
  },
  {
    id: 13,
    name: "Vietnam",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80"
  },
  {
    id: 14,
    name: "Bhutan",
    image: "https://images.unsplash.com/photo-1578128178001-2c3e37ce5b3a?w=800&q=80"
  },
  {
    id: 15,
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80"
  },
  {
    id: 16,
    name: "Andaman",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
  },
  {
    id: 17,
    name: "Europe",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80"
  },
  {
    id: 18,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
  }
];

const JourneyInFrames = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            JOURNEY IN FRAMES
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Pictures Perfect Moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_DESTINATIONS.map((destination) => (
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
                  <p className="text-sm font-medium">{destination.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyInFrames;
