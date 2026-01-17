import React from 'react';
import { FaUsers, FaHandsHelping, FaShieldAlt, FaCalendarCheck } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Like-Minded People",
      description: "Meet and travel with people who share your interests and passion for adventure.",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-600"
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: "Expert Trip Leaders",
      description: "Experienced leaders ensure smooth travel, safety, and memorable experiences throughout.",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Your safety is our priority with verified accommodations and 24/7 support.",
      bgColor: "bg-green-50",
      iconColor: "bg-green-600"
    },
    {
      icon: <FaCalendarCheck className="w-8 h-8" />,
      title: "Fixed Departures",
      description: "Multiple departure dates throughout the year with guaranteed trips.",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-600"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Why Choose Our Group Tours?
        </h2>
        <p className="text-lg text-gray-600 mb-3">
          Travel Together, Create Memories Forever
        </p>
        <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
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
