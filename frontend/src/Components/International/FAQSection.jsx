import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How early should I apply for a visa?",
      answer: "It's recommended to apply for a visa at least 4-6 weeks before your intended travel date. Some countries may have longer processing times, so it's best to check the specific embassy or consulate requirements. For popular destinations during peak season, consider applying 2-3 months in advance to avoid any delays."
    },
    {
      question: "Can I use my electronics anywhere in the world?",
      answer: "Most modern electronics are dual voltage (110-240V) and will work anywhere with the proper adapter. However, you'll need to check your device's voltage rating and get the appropriate plug adapter for your destination country. Different regions use different plug types, so it's best to carry a universal travel adapter."
    },
    {
      question: "Should I exchange currency before I go for my international trip?",
      answer: "It's advisable to exchange a small amount before departure for immediate expenses like transportation or snacks. For larger amounts, you can often get better exchange rates at your destination. ATMs at airports or local banks usually offer competitive rates. However, inform your bank about your travel plans to avoid card blocks."
    },
    {
      question: "How can I stay safe in unfamiliar surroundings?",
      answer: "Stay safe by researching your destination beforehand, keeping emergency contacts handy, and staying aware of your surroundings. Avoid displaying expensive items, use hotel safes for valuables, and stick to well-lit and populated areas. Share your itinerary with family or friends, and consider registering with your embassy if traveling to remote areas."
    }
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">Your right to Know!</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-bold text-gray-900">
                <span className="text-blue-600 mr-2">Q:</span>{faq.question}
              </h3>
              <svg className="w-6 h-6 text-gray-600 transform group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="p-6 pt-0 text-gray-700 leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
