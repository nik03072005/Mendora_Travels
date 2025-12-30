import { useEffect, useState } from "react";
import axios from "axios";

export default function FAQ( { destinationId }) {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
//   console.log(destinationId)
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get(`${import.meta.env.VITE_API_URL}/api/faqs/get/${destinationId}`)
      .then((response) => {
        setFaqs(response.data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error);
      });
  }, []);
//   console.log(faqs)

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">FAQs</h2>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className=" rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="px-4 py-3 font-semibold text-gray-800">
              {faq.question}
            </div>
            {faq.answer && activeIndex === index && (
              <div className="px-4 pt-2 pb-3 bg-white text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
