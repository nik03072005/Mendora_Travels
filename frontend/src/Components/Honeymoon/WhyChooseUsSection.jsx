import React from 'react';
import { FaHeart, FaShieldAlt, FaUserFriends, FaHandHoldingHeart } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Romantic Experiences",
      description: "Curated experiences designed exclusively for couples to create unforgettable memories together.",
      bgColor: "bg-pink-50",
      iconColor: "bg-pink-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Privacy & Comfort",
      description: "Carefully selected accommodations ensuring privacy, luxury and comfort for honeymooners.",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-600"
    },
    {
      icon: <FaUserFriends className="w-8 h-8" />,
      title: "Expert Planners",
      description: "Dedicated honeymoon specialists who understand your vision and make it a reality.",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-600"
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Special Touches",
      description: "Complimentary surprises, romantic setups, and personalized services to make your trip special.",
      bgColor: "bg-red-50",
      iconColor: "bg-red-600"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Why Choose Us for Your Honeymoon?
        </h2>
        <p className="text-lg text-gray-600 mb-3">
          Making Your Dream Honeymoon a Reality
        </p>
        <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`${feature.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex justify-center mb-6">
              <div className={`w-16 h-16 ${feature.iconColor} rounded-full flex items-center justify-center text-white`}>
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
