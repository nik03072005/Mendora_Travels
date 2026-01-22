import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = ({ faqs = [] }) => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq._id || faq.id || index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-left text-gray-800">
                  {faq.question}
                </span>
                {activeFAQ === index ? (
                  <FaChevronUp className="text-blue-600 flex-shrink-0 ml-4" />
                ) : (
                  <FaChevronDown className="text-blue-600 flex-shrink-0 ml-4" />
                )}
              </button>
              
              {activeFAQ === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
