import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const TravelInquiryTable = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem('token');

  const fetchInquiries = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/travel-inquiry/get-inquiry`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInquiries(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      setLoading(false);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const updatedStatus = currentStatus === "pending" ? "resolved" : "pending";
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/travel-inquiry/update-status/${id}`,
        { status: updatedStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      fetchInquiries(); // Refresh data
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

    const handleDelete = async (id) => {
    toast.info(
      <div>
        <p>Are you sure you want to delete this inquiry?</p>
        <div className="flex justify-center gap-4 mt-2">
          <button
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              toast.dismiss();
              deleteInquiry(id);
            }}
          >
            Delete
          </button>
          <button
            className="px-4 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={() => toast.dismiss()}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeButton: false,
        position: "top-center",
      }
    );
  };

  const deleteInquiry = async (id) => {
    try {
      setDeletingId(id);
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/travel-inquiry/delete-inquiry/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setInquiries(inquiries.filter(inquiry => inquiry._id !== id));
      toast.success("Inquiry deleted successfully");
    } catch (error) {
      console.error("Failed to delete inquiry:", error);
      toast.error("Failed to delete inquiry");
    } finally {
      setDeletingId(null);
    }
  };

  

  useEffect(() => {
    fetchInquiries();
  }, []);

  if (loading) return <div className="p-4">Loading inquiries...</div>;

  return (
    <div className="p-3 sm:p-4 md:p-6 overflow-x-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Travel Inquiry Callbacks</h2>
      <div className="relative shadow rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
              <th className="p-2 sm:p-3 border-b w-[12%]">Name</th>
              <th className="p-2 sm:p-3 border-b w-[15%]">Email</th>
              <th className="p-2 sm:p-3 border-b w-[12%]">Phone</th>
              <th className="p-2 sm:p-3 border-b w-[10%]">Travel Date</th>
              <th className="p-2 sm:p-3 border-b w-[8%]">Travellers</th>
              <th className="p-2 sm:p-3 border-b w-[20%]">Message</th>
              <th className="p-2 sm:p-3 border-b w-[10%]">Status</th>
              <th className="p-2 sm:p-3 border-b w-[15%]">Destination/Package</th>
              <th className="p-2 sm:p-3 border-b w-[15%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries?.map((inquiry) => (
              <tr key={inquiry._id} className="hover:bg-gray-50 transition-colors">
                <td className="p-2 sm:p-3 border-b text-gray-800 truncate">{inquiry?.name}</td>
                <td className="p-2 sm:p-3 border-b text-gray-800 truncate">{inquiry?.email}</td>
                <td className="p-2 sm:p-3 border-b text-gray-800">{inquiry?.phone}</td>
                <td className="p-2 sm:p-3 border-b text-gray-800">
                  {new Date(inquiry?.travel_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td className="p-2 sm:p-3 border-b text-gray-800 text-center">{inquiry?.traveller_count}</td>
                <td className="p-2 sm:p-3 border-b">
                  <textarea
                    className="w-full min-w-[150px] sm:min-w-[200px] resize-y border border-gray-300 rounded p-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-20"
                    defaultValue={inquiry?.message}
                    readOnly
                  />
                </td>
                <td className="p-2 sm:p-3 border-b capitalize text-gray-800">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs sm:text-sm ${
                      inquiry.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {inquiry?.status}
                  </span>
                </td>
                <td className="p-2 sm:p-3 border-b text-gray-800 truncate">
                  {inquiry?.referenceId?.name || inquiry?.referenceId?.destinationName}
                </td>
                <td className="p-2 sm:p-3  border-b space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="flex gap-2">
                    <button
                    onClick={() => toggleStatus(inquiry?._id, inquiry?.status)}
                    className={`w-full sm:w-auto px-3 py-1 rounded text-xs sm:text-sm font-medium text-white transition ${
                      inquiry.status === 'pending'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-yellow-600 hover:bg-yellow-700'
                    }`}
                  >
                    {inquiry.status === 'pending' ? 'Resolve' : 'Pending'}
                  </button>
                  <button
                    onClick={() => handleDelete(inquiry._id)}
                    disabled={deletingId === inquiry._id}
                    className="w-full sm:w-auto px-3 py-1 rounded text-xs sm:text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deletingId === inquiry._id ? 'Deleting...' : 'Delete'}
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TravelInquiryTable;