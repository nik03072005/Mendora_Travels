import { useState } from 'react';
import axios from 'axios';

const AddDestination = () => {
  const [formData, setFormData] = useState({
    destinationName: '',
    imageFile: null,
  });
  const token=localStorage.getItem('token')
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageFile') {
      const file = files[0];
      setFormData({ ...formData, imageFile: file });
      // Create a preview URL for the selected image
      if (file) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    const data = new FormData();
    data.append('destinationName', formData.destinationName);
    data.append('imageFile', formData.imageFile);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/destinations/create`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage(response.data.message);
      setFormData({ destinationName: '', imageFile: null });
      setPreview(null);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error adding destination');
    } finally {
      setLoading(false); // Reset loading state after submission completes
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Destination</h2>
      {message && (
        <div
          className={`mb-4 p-2 rounded ${
            message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Destination Name</label>
          <input
            type="text"
            name="destinationName"
            placeholder='Enter Destination Name'
            value={formData.destinationName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 cursor-pointer p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {preview && (
          <div className="mt-2">
            <img src={preview} alt="Preview" className="max-w-full h-auto rounded" />
          </div>
        )}
        <button
          type="submit"
          className={`w-full p-2 rounded text-white ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 cursor-pointer hover:bg-blue-600'
          }`}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Destination'}
        </button>
      </form>
    </div>
  );
};

export default AddDestination;