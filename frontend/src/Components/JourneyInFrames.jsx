import React from 'react';
import greece from '../assets/greece.jpg';

const GALLERY_DESTINATIONS = [
  {
    id: 1,
    name: "Vietnam",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/vietnam%202.jpeg"
  },
  {
    id: 2,
    name: "Dubai",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/dubai%20re%2001.jpeg?updatedAt=1711452484035"
  },
  {
    id: 3,
    name: "Bhutan",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/bhutan%204.jpeg"
  },
  {
    id: 4,
    name: "Kerala",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/kerala-trips-1.jpeg"
  },
  {
    id: 5,
    name: "Meghalaya",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/meghalaya.jpeg"
  },
  {
    id: 6,
    name: "Uttarakhand",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/uttarakhand.jpeg"
  },
  {
    id: 7,
    name: "Rajasthan",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/rajasthan.jpeg"
  },
  {
    id: 8,
    name: "Sikkim",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/sikkim.jpeg"
  },
  {
    id: 9,
    name: "Ladakh",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/ladakh.jpeg"
  },
  {
    id: 10,
    name: "Himachal",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/himachal.jpeg"
  },
  {
    id: 11,
    name: "Spiti",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/spiti.jpeg"
  },
  {
    id: 12,
    name: "Thailand",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/thailand.jpeg"
  },
  {
    id: 13,
    name: "Vietnam",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/vietnam.jpeg"
  },
  {
    id: 14,
    name: "Bhutan",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/bhutan.jpeg"
  },
  {
    id: 15,
    name: "Kashmir",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/kashmir.jpeg"
  },
  {
    id: 16,
    name: "Andaman",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/andaman.jpeg"
  },
  {
    id: 17,
    name: "Europe",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/europe.jpeg"
  },
  {
    id: 18,
    name: "Bali",
    image: greece // "https://wanderon-images.gumlet.io/new-homepage-data/Gallery/bali.jpeg"
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
