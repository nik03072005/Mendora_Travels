import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../Components/HomeNavbar';

const INTERESTS_CATEGORIES = [
  {
    id: 1,
    title: "Events & Festivals",
    description: "Experience the vibrant culture and traditions through exciting events and festivals",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    link: "/events",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Group Trips",
    description: "Join like-minded travelers and make unforgettable memories together",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
    link: "/group-tours",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "International Trips",
    description: "Explore the world's most amazing destinations beyond borders",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    link: "/international-trips",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    title: "Explore India",
    description: "Discover the incredible diversity and beauty of India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    link: "/domestic-trips",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Corporate Trips",
    description: "Perfect team building experiences and corporate getaways",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    link: "/corporate",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Romantic Escapes",
    description: "Create magical moments with your loved one in beautiful destinations",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    link: "/honeymoon",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 7,
    title: "Weekend Trips",
    description: "Quick getaways perfect for refreshing your mind and soul",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    link: "/weekend",
    color: "from-yellow-500 to-orange-500"
  }
];

const InterestsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Explore Your Interests | Mendora Travels</title>
        <meta
          name="description"
          content="Discover travel experiences tailored to your interests. From group trips to romantic escapes, find your perfect adventure with Mendora Travels."
        />
      </Helmet>

      <HomeNavbar variant="solid" />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Explore Your Interests
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Find the perfect travel experience that matches your passion and style
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTERESTS_CATEGORIES.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(category.link)}
                className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-40 group-hover:opacity-50 transition-opacity`}></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <button className="mt-4 text-blue-600 font-semibold text-sm group-hover:text-blue-700 flex items-center gap-2">
                    Explore Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Can't Find Your Interest?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you create a customized travel experience tailored to your unique preferences
          </p>
          <button
            onClick={() => navigate('/contact-us')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default InterestsPage;
