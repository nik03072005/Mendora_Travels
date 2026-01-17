import React from 'react';
import { FaClock, FaRupeeSign, FaMapMarkedAlt, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: FaClock,
      title: 'Quick & Easy',
      description: 'Perfect 2-3 day trips that fit your busy schedule',
      color: 'green'
    },
    {
      icon: FaRupeeSign,
      title: 'Budget Friendly',
      description: 'Affordable packages without compromising on quality',
      color: 'emerald'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Easy to Reach',
      description: 'Destinations close by with convenient transportation',
      color: 'teal'
    },
    {
      icon: FaCheckCircle,
      title: 'Hassle-Free',
      description: 'Complete planning and bookings taken care of',
      color: 'cyan'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      teal: 'bg-teal-100 text-teal-600',
      cyan: 'bg-cyan-100 text-cyan-600'
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Why Choose Our Weekend Packages
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Making your weekend getaways simple and memorable
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
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
