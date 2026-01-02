import React from 'react';

const EXPLORE_CATEGORIES = [
  {
    id: 1,
    title: "Events & Festivals",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    link: "/events"
  },
  {
    id: 2,
    title: "Group Trips",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
    link: "/group-tours"
  },
  {
    id: 3,
    title: "International Trips",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    link: "/international-trips"
  },
  {
    id: 4,
    title: "Explore India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    link: "/domestic-trips"
  },
  {
    id: 5,
    title: "Corporate Trips",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    link: "/corporate"
  },
  {
    id: 6,
    title: "Romantic Escapes",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    link: "/honeymoon"
  },
  {
    id: 7,
    title: "Weekend Trips",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
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
