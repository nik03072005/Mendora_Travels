import React from 'react';
import { FaBriefcase, FaUsers, FaShieldAlt, FaCog } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: FaBriefcase,
      title: 'Professional Planning',
      description: 'Expert event management with attention to every corporate detail',
      color: 'blue'
    },
    {
      icon: FaUsers,
      title: 'Team Building Focus',
      description: 'Activities designed to strengthen bonds and improve collaboration',
      color: 'indigo'
    },
    {
      icon: FaShieldAlt,
      title: 'Reliable & Secure',
      description: 'Safe, secure, and hassle-free corporate travel experience',
      color: 'green'
    },
    {
      icon: FaCog,
      title: 'Customizable Packages',
      description: 'Tailored itineraries to match your team goals and budget',
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Why Choose Us for Corporate Events
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Making your corporate offsites successful and memorable
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className={`${getColorClasses(feature.color)} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
              <feature.icon className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
