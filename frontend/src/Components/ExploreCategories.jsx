import React from 'react';
import greece from '../assets/greece.jpg';

const EXPLORE_CATEGORIES = [
  {
    id: 1,
    title: "Events & Festivals",
    image: greece, // "https://wanderon-images.gumlet.io/Events+And+Festivals+(mob)+(1).png",
    link: "/events"
  },
  {
    id: 2,
    title: "Group Trips",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/group-thumbnails.jpeg",
    link: "/group-tours"
  },
  {
    id: 3,
    title: "International Trips",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/International-thumbnail.jpeg",
    link: "/international-trips"
  },
  {
    id: 4,
    title: "Explore India",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/India-explore-thumbnail.jpeg",
    link: "/domestic-trips"
  },
  {
    id: 5,
    title: "Corporate Trips",
    image: greece, // "https://wanderon-images.gumlet.io/mice-images-collection/japan-trip.jpeg?updatedAt=1701069889216",
    link: "/corporate"
  },
  {
    id: 6,
    title: "Romantic Escapes",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/romantic-thumbnails.jpeg",
    link: "/honeymoon"
  },
  {
    id: 7,
    title: "Weekend Trips",
    image: greece, // "https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/weekend-thumbnail.jpeg",
    link: "/weekend"
  }
];

const ExploreCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {EXPLORE_CATEGORIES.map((category) => (
            <a 
              key={category.id}
              href={category.link}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-sm font-bold">{category.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
