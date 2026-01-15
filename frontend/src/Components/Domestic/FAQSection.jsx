import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the best time to visit hill stations in India?",
      answer: "The best time to visit most hill stations in India is during summer months (March to June) when the weather is pleasant. However, for snow experiences in places like Manali, Gulmarg, and Shimla, winter months (December to February) are ideal. Monsoon (July to September) should be avoided in most regions due to landslides and heavy rainfall."
    },
    {
      question: "Do I need permits for traveling to certain regions in India?",
      answer: "Yes, certain regions require special permits. Areas like Ladakh's restricted zones (Nubra Valley, Pangong), parts of Northeast India (Arunachal Pradesh, Sikkim), and protected areas require Inner Line Permits (ILP) or Protected Area Permits (PAP). Indian citizens and foreigners have different permit requirements. Always check current regulations before planning your trip."
    },
    {
      question: "What should I pack for a trip to the Himalayas?",
      answer: "Essential items include warm clothing (layered), comfortable trekking shoes, sunscreen (high SPF), sunglasses, medications for altitude sickness, basic first aid kit, power bank, and necessary documents. In winter, pack heavy woolens, gloves, and snow boots. For monsoon treks, waterproof gear is essential. Always check weather forecasts before packing."
    },
    {
      question: "Is it safe to travel solo in India?",
      answer: "Yes, India is generally safe for solo travelers, but it's important to take precautions. Stay in reputable accommodations, avoid isolated areas at night, keep emergency contacts handy, and share your itinerary with family or friends. Join group tours for remote regions like Ladakh or Spiti. Always trust your instincts and stay aware of your surroundings."
    },
    {
      question: "What are the connectivity and network issues in remote areas?",
      answer: "Remote areas like Ladakh, Spiti Valley, and Northeast regions often have limited or no mobile network connectivity. BSNL generally has better coverage in these areas. Download offline maps, inform family about communication gaps, and carry a physical map. Some areas have BSNL/Airtel connectivity at specific points. Plan accordingly and carry extra cash as ATMs may not work."
    }
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">Your right to Know!</p>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-bold text-gray-900">
                <span className="text-orange-600 mr-2">Q:</span>{faq.question}
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
