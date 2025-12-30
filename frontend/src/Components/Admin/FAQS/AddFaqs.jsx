import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../../../Redux/destinationSlice";
import { toast } from "react-toastify";

const AddFAQ = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [selectedDestination, setSelectedDestination] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Get destinations from Redux store
  const { destinations, status, error: reduxError } = useSelector(state => state.destinations);

  // Fetch destinations when component mounts
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDestinations());
    }
  }, [status, dispatch]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!token) {
      setError("Authentication token is missing");
      toast.error("Please log in to add an FAQ");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/faqs/create`,
        {
          destinationId: selectedDestination,
          question,
          answer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct Content-Type for JSON
          }
        }
      );

      setSuccess(true);
      toast.success("FAQ added successfully!");
      
      // Reset form
      setQuestion("");
      setAnswer("");
      setSelectedDestination("");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to add FAQ. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  // Render loading and error states
  if (status === "loading") return <p className="text-center">Loading destinations...</p>;
  if (status === "failed") return <p className="text-center text-red-600">Error: {reduxError}</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New FAQ</h2>

      {/* Destination selection */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Destination</label>
        <select
          className="w-full border px-3 py-2 rounded-md"
          value={selectedDestination}
          onChange={(e) => setSelectedDestination(e.target.value)}
          required
        >
          <option value="">-- Choose a Destination --</option>
          {Array.isArray(destinations) && destinations.length > 0 ? (
            destinations.map((dest) => (
              <option key={dest?._id} value={dest?._id}>
                {dest?.destinationName || 'Unnamed Destination'}
              </option>
            ))
          ) : (
            <option disabled>No destinations available</option>
          )}
        </select>
      </div>

      {/* Error message */}
      {error && (
        <p className="mb-4 text-red-600 text-center">
          {error}
        </p>
      )}

      {/* Form */}
      {selectedDestination && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Question</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              placeholder="Enter your question"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Answer</label>
            <textarea
              className="w-full border px-3 py-2 rounded-md resize-y"
              rows={4}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              placeholder="Enter the answer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300"
            disabled={!selectedDestination || !question || !answer}
          >
            Submit FAQ
          </button>

          {success && (
            <p className="mt-3 text-green-600 text-center">
              FAQ added successfully!
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default AddFAQ;