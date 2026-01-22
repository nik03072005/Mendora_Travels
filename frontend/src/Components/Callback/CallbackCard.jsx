import { useState } from 'react';

const RequestCallbackCard = ({ selectedPackage }) => {
  // Define dummy data for fallback
  const dummyPackage = {
    _id: 'dummy-123',
    image: 'https://via.placeholder.com/80',
    title: 'Sample Travel Package',
    discountedPrice: '$499',
  };

  // Use selectedPackage if provided and valid, else use dummyPackage
  const packageData = selectedPackage &&
    selectedPackage._id &&
    selectedPackage.image &&
    selectedPackage.title &&
    selectedPackage.discountedPrice
    ? selectedPackage
    : dummyPackage;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travel_date: '',
    traveller_count: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    let formattedTravelDate = formData.travel_date;
    if (formData.travel_date) {
      try {
        const date = new Date(formData.travel_date);
        if (isNaN(date.getTime())) {
          throw new Error("Invalid date");
        }
        formattedTravelDate = date.toISOString().split("T")[0];
      } catch (error) {
        setSubmitStatus({ type: "error", message: "Please enter a valid travel date." });
        setIsSubmitting(false);
        return;
      }
    } else {
      setSubmitStatus({ type: "error", message: "Travel date is required." });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/travel-inquiry/submit-inquiry`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...formData,
    travel_date: formattedTravelDate,
    referenceId: packageData._id,
    referenceModel: "TourPackage", // or "Destination" if applicable
    packageTitle: packageData.title,
    packagePrice: packageData.discountedPrice,
  }),
});


      if (!response.ok) {
        throw new Error("Failed to submit callback request");
      }

      await response.json();
      setSubmitStatus({ type: "success", message: "Callback request submitted successfully!" });
      setFormData({ name: '', email: '', phone: '',traveller_count: '',  travel_date: '', message: '' }); // Reset form
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to submit request. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg text-left ">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h3 className="text-base font-bold">{packageData.title}</h3>
          <p className="text-[#007aff] font-semibold text-sm">{packageData.discountedPrice}</p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2 text-[#007aff]">Request a Callback</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <input
          type="number"
          name="traveller_count"
          placeholder="Number of Travellers"
          value={formData.traveller_count}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          min="1"
          required
        />
        <input
          type="date"
          name="travel_date"
          placeholder="Choose Travel Date"
          value={formData.travel_date}
          onChange={handleInputChange}
          className="w-full cursor-pointer p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <textarea
          name="message"
          rows="3"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        {submitStatus && (
          <p
            className={`text-xs ${
              submitStatus.type === "success" ? "text-green-600" : "text-[#007aff]"
            }`}
          >
            {submitStatus.message}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-md transition cursor-pointer text-sm ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#007aff] text-white"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RequestCallbackCard;