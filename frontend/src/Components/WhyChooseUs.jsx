import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faEye, faUsers, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FEATURES = [
  {
    id: 1,
    icon: faShieldAlt,
    title: "No Third Party Mess",
    description: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!"
  },
  {
    id: 2,
    icon: faEye,
    title: "Transparency & Security",
    description: "Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!"
  },
  {
    id: 3,
    icon: faUsers,
    title: "Co-Travelers Filtering",
    description: "Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!"
  },
  {
    id: 4,
    icon: faCheckCircle,
    title: "One Stop Hassle Free Experience",
    description: "Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Mendora Travels?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors relative"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={feature.icon} className="text-2xl text-teal-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
