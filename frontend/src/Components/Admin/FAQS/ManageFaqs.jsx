import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../../../Redux/destinationSlice";
import { toast } from "react-toastify";

const ManageFAQsByDestination = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [selectedDestination, setSelectedDestination] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState("");
  const [editedAnswer, setEditedAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { destinations, status, error: reduxError } = useSelector(state => state.destinations);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDestinations());
    }
  }, [status, dispatch]);

  const fetchFAQs = async (destinationId) => {
    if (!token) {
      setError("Authentication token is missing");
      toast.error("Please log in to view FAQs");
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/faqs/get/${destinationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setFaqs(res.data.data || []);
      setError(null);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to fetch FAQs";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDestinationChange = (e) => {
    const destId = e.target.value;
    setSelectedDestination(destId);
    setError(null);
    if (destId) {
      fetchFAQs(destId);
    } else {
      setFaqs([]);
    }
  };

  const handleDelete = async (id) => {
    if (!token) {
      toast.error("Please log in to delete FAQs");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this FAQ?")) return;

    setIsLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/faqs/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setFaqs((prev) => prev.filter((faq) => faq._id !== id));
      toast.success("FAQ deleted successfully");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to delete FAQ";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (faq) => {
    setEditingId(faq._id);
    setEditedQuestion(faq.question);
    setEditedAnswer(faq.answer);
  };

  const handleUpdate = async () => {
    if (!token) {
      toast.error("Please log in to update FAQs");
      return;
    }

    if (!editedQuestion.trim() || !editedAnswer.trim()) {
      toast.error("Question and answer cannot be empty");
      return;
    }

    setIsLoading(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/faqs/update/${editingId}`,
        {
          question: editedQuestion,
          answer: editedAnswer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setEditingId(null);
      fetchFAQs(selectedDestination);
      toast.success("FAQ updated successfully");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to update FAQ";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") return <p className="text-center">Loading destinations...</p>;
  if (status === "failed") return <p className="text-center text-red-600">Error: {reduxError}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage FAQs</h2>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Select Destination</label>
        <select
          value={selectedDestination}
          onChange={handleDestinationChange}
          className="w-full border px-3 py-2 rounded-md"
          disabled={isLoading}
        >
          <option value="">-- Choose a destination --</option>
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

      {error && (
        <p className="mb-4 text-red-600 text-center">{error}</p>
      )}

      {isLoading && (
        <p className="text-center text-gray-500">Loading FAQs...</p>
      )}

      {!isLoading && faqs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left border-b">Question</th>
                <th className="p-3 text-left border-b">Answer</th>
                <th className="p-3 text-center border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq) => (
                <tr key={faq._id}>
                  <td className="p-3 border-b">
                    {editingId === faq._id ? (
                      <input
                        type="text"
                        className="w-full border px-2 py-1 rounded"
                        value={editedQuestion}
                        onChange={(e) => setEditedQuestion(e.target.value)}
                        required
                      />
                    ) : (
                      faq.question
                    )}
                  </td>
                  <td className="p-3 border-b">
                    {editingId === faq._id ? (
                      <textarea
                        className="w-full border px-2 py-1 rounded resize-y"
                        rows={3}
                        value={editedAnswer}
                        onChange={(e

) => setEditedAnswer(e.target.value)}
                        required
                      />
                    ) : (
                      <div className="line-clamp-3">{faq.answer}</div>
                    )}
                  </td>
                  <td className="p-3 text-center border-b space-x-2">
                    {editingId === faq._id ? (
                      <>
                        <button
                          onClick={handleUpdate}
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 disabled:bg-green-300"
                          disabled={isLoading || !editedQuestion.trim() || !editedAnswer.trim()}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 disabled:bg-gray-300"
                          disabled={isLoading}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(faq)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 disabled:bg-yellow-300"
                          disabled={isLoading}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(faq._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:bg-red-300"
                          disabled={isLoading}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : selectedDestination && !isLoading ? (
        <p className="text-center text-gray-500">No FAQs for this destination.</p>
      ) : null}
    </div>
  );
};

export default ManageFAQsByDestination;