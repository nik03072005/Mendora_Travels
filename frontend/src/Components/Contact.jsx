import { useState } from 'react';
import { Phone, Mail, MapPin, User, Calendar , MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import contactus from '../assets/trip-contact.jpg';
import Footer from './Footer';
import PNavbar from './PackageNavbar';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

export const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [apiError, setApiError] = useState('');

  const Destinations = useSelector((state) => state.destinations.destinations);

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!destination.trim()) newErrors.destination = 'Destination is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    if (!travelDate.trim()) newErrors.travelDate = 'Travel date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setApiError('');

    if (!validateForm()) return;

    // Find the selected destination object from Destinations
    const selectedDestinationData = Destinations.find(
      (dest) => dest._id === destination
    );

    const formData = {
      name:fullName,
      email,
      phone:phoneNumber,
      package: destination,
      message,
      referenceId: selectedDestinationData?._id || '',
      referenceModel: 'Destination',
      packageTitle: selectedDestinationData?.destinationName || 'Unknown',
      packagePrice: selectedDestinationData?.price || 0,
      travel_date: travelDate,
      traveller_count: 1, // Assuming a default value of 1 for traveller count
    };

    try {
      console.log(formData.email, formData.name, formData.phone, formData.travel_date, formData.message, formData.referenceId, formData.referenceModel, formData.packageTitle, formData.packagePrice, formData.traveller_count);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/travel-inquiry/submit-inquiry`,
        formData
      );
      setSuccessMessage('Your inquiry has been submitted successfully!');
      setErrors({});
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setDestination('');
      setTravelDate('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiError(
        error.response?.data?.message || 'Failed to submit inquiry.'
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Trip Tortoise | Get in Touch for Travel Inquiries & Support
        </title>
        <meta
          name="description"
          content="Have questions or need help planning your trip? Contact Trip Tortoise for travel inquiries, support, or custom tour packages. We're here to assist you."
        />
      </Helmet>

      <PNavbar />
      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f37002] mb-6 sm:mb-8 text-center">
            Let's Get In Touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information Section */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f37002] mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-[#f37002]/10 rounded-full">
                    <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-xs sm:text-sm text-gray-600">+91 9330405098</p>
                    <p className="text-xs sm:text-sm text-gray-600">+91 9051483390</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-[#f37002]/10 rounded-full">
                    <FaWhatsapp className="h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Whatsapp</p>
                    <p className="text-xs sm:text-sm text-gray-600">+91 9051483390</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-[#f37002]/10 rounded-full">
                    <Mail className="h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Email</p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      info@triptoise.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-[#f37002]/10 rounded-full">
                    <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Address</p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      D-6/6 Dr. B.C Roy Sarani 3rd Floor Bidhan Nagar Municipal Corporation Kolkata- 700059, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <img
                  src={contactus}
                  alt="Contact background"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f37002] mb-4 sm:mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-900">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your full name..."
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-9 sm:pl-10 p-2 sm:p-2.5 border border-gray-300 rounded-md focus:ring-[#f37002] focus:border-[#f37002] text-sm"
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs sm:text-sm text-red-600 mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 sm:pl-10 p-2 sm:p-2.5 border border-gray-300 rounded-md focus:ring-[#f37002] focus:border-[#f37002] text-sm"
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                    </div>
                    {errors.email && (
                      <p className="text-xs sm:text-sm text-red-600 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Phone Number */}
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-900">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Enter your phone number..."
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full pl-9 sm:pl-10 p-2 sm:p-2.5 border border-gray-300 rounded-md focus:ring-[#f37002] focus:border-[#f37002] text-sm"
                      />
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-xs sm:text-sm text-red-600 mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-900">
                      Destination
                    </label>
                    <div className="relative">
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-9 sm:pl-10 p-2 sm:p-2.5 border border-gray-300 rounded-md focus:ring-[#f37002] focus:border-[#f37002] text-sm"
                      >
                        <option value="">Select a destination...</option>
                        {Destinations.map((dest) => (
                          <option key={dest._id} value={dest._id}>
                            {dest.destinationName}
                          </option>
                        ))}
                      </select>
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                    </div>
                    {errors.destination && (
                      <p className="text-xs sm:text-sm text-red-600 mt-1">
                        {errors.destination}
                      </p>
                    )}
                  </div>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-900">
                    Travel Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full pl-9 sm:pl-10 p-2 sm:p-2.5 border border-gray-300 rounded-md focus:ring-[#f37002] focus:border-[#f37002] text-sm"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                  </div>
                  {errors.travelDate && (
                    <p className="text-xs sm:text-sm text-red-600 mt-1">
                      {errors.travelDate}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-900">
                    Inquiry Message
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Enter your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full pl-9 sm:pl-10 pt-3 border border-gray-300 rounded-md focus:ring-[#f37002] focus:border-[#f37002] min-h-[100px] sm:min-h-[120px] text-sm"
                    />
                    <MessageSquare className="absolute left-3 top-4 h-4 sm:h-5 w-4 sm:w-5 text-[#f37002]" />
                  </div>
                  {errors.message && (
                    <p className="text-xs sm:text-sm text-red-600 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button and Feedback */}
                <div className="flex flex-col items-end">
                  <button
                    type="submit"
                    className="bg-[#f37002] hover:bg-[#d65e02] text-white px-4 sm:px-6 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base"
                  >
                    Submit Form
                  </button>
                  {apiError && (
                    <p className="text-xs sm:text-sm text-red-600 text-right mt-2">
                      {apiError}
                    </p>
                  )}
                  {successMessage && (
                    <p className="text-xs sm:text-sm text-green-600 text-right mt-2">
                      {successMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};