import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AboutSection = ({ shortDescription = '', expandedDescription = '' }) => {
  const [expandedAbout, setExpandedAbout] = useState(false);

  if (!shortDescription && !expandedDescription) {
    return null;
  }

  const hasMore = expandedDescription && expandedDescription.length > shortDescription.length;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About This Destination</h2>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              {expandedAbout ? expandedDescription || shortDescription : shortDescription}
            </p>
          </div>
          
          {hasMore && (
            <button
              onClick={() => setExpandedAbout(!expandedAbout)}
              className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              {expandedAbout ? (
                <>
                  <span>Show Less</span>
                  <FaChevronUp />
                </>
              ) : (
                <>
                  <span>Read More</span>
                  <FaChevronDown />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
