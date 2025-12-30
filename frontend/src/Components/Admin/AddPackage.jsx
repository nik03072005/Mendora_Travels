import { useState, useEffect } from 'react';
import axios from 'axios';

// Static fallback data for destinations
const staticDestinations = [
  { _id: 'static1', destinationName: 'Paris' },
  { _id: 'static2', destinationName: 'Tokyo' },
  { _id: 'static3', destinationName: 'New York' },
];

const AddPackage = () => {
  const [formData, setFormData] = useState({
    name: '',
    noOfDays: '',
    noOfNights: '',
    originalPrice: '',
    discountedPrice: '',
    tripSummary: [{ day: 1, title: '', transfer: '', activity: '', description: '', dayImage: null }],
    highlights: [''],
    hotelsIncluded: [{ city: '', nights: '', name: '' }],
    packageDetails: { included: [''], excluded: [''] },
    imageFiles: [null],
    destinationId: '',
  });
  const [destinations, setDestinations] = useState([]);
  const [message, setMessage] = useState('');
  const [previews, setPreviews] = useState([]);
  const [dayImagePreviews, setDayImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const token= localStorage.getItem('token')

  // Fetch destinations for dropdown
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/destinations/get`);
        const fetchedDestinations = Array.isArray(response.data) && response.data.length > 0
          ? response.data
          : staticDestinations;
        setDestinations(fetchedDestinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setMessage('Failed to fetch destinations. Using static data.');
        setDestinations(staticDestinations);
      }
    };
    fetchDestinations();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, key, value) => {
    const updatedArray = [...formData[field]];
    if (key === 'dayImage') {
      const file = value[0];
      updatedArray[index] = { ...updatedArray[index], [key]: file };
      setFormData({ ...formData, [field]: updatedArray });

      // Update day image previews
      const updatedDayPreviews = [...dayImagePreviews];
      updatedDayPreviews[index] = file ? URL.createObjectURL(file) : null;
      setDayImagePreviews(updatedDayPreviews);
    } else {
      updatedArray[index] = { ...updatedArray[index], [key]: value };
      setFormData({ ...formData, [field]: updatedArray });
    }
  };

  const handlePackageDetailsChange = (key, index, value) => {
    const updatedDetails = { ...formData.packageDetails };
    updatedDetails[key][index] = value;
    setFormData({ ...formData, packageDetails: updatedDetails });
  };

  const handleSimpleArrayChange = (field, index, value) => {
    if (field === 'imageFiles') {
      const file = value[0];
      const updatedFiles = [...formData.imageFiles];
      updatedFiles[index] = file;
      setFormData({ ...formData, imageFiles: updatedFiles });

      // Update previews
      const updatedPreviews = [...previews];
      updatedPreviews[index] = file ? URL.createObjectURL(file) : null;
      setPreviews(updatedPreviews);
    } else {
      const updatedArray = [...formData[field]];
      updatedArray[index] = value;
      setFormData({ ...formData, [field]: updatedArray });
    }
  };

  const addArrayItem = (field) => {
    if (field === 'tripSummary') {
      setFormData({
        ...formData,
        tripSummary: [...formData.tripSummary, { day: formData.tripSummary.length + 1, title: '', transfer: '', activity: '', description: '', dayImage: null }],
      });
      setDayImagePreviews([...dayImagePreviews, null]);
    } else if (field === 'hotelsIncluded') {
      setFormData({
        ...formData,
        hotelsIncluded: [...formData.hotelsIncluded, { city: '', nights: '', name: '' }],
      });
    } else if (field === 'highlights') {
      setFormData({ ...formData, highlights: [...formData.highlights, ''] });
    } else if (field === 'imageFiles') {
      setFormData({ ...formData, imageFiles: [...formData.imageFiles, null] });
      setPreviews([...previews, null]);
    } else if (field.includes('packageDetails.')) {
      const key = field.split('.')[1];
      setFormData({
        ...formData,
        packageDetails: {
          ...formData.packageDetails,
          [key]: [...formData.packageDetails[key], ''],
        },
      });
    }
  };

  const removeArrayItem = (field, index) => {
    if (field === 'tripSummary') {
      setFormData({
        ...formData,
        tripSummary: formData.tripSummary.filter((_, i) => i !== index),
      });
      setDayImagePreviews(dayImagePreviews.filter((_, i) => i !== index));
    } else if (field === 'hotelsIncluded') {
      setFormData({
        ...formData,
        hotelsIncluded: formData.hotelsIncluded.filter((_, i) => i !== index),
      });
    } else if (field === 'highlights') {
      setFormData({
        ...formData,
        highlights: formData.highlights.filter((_, i) => i !== index),
      });
    } else if (field === 'imageFiles') {
      setFormData({
        ...formData,
        imageFiles: formData.imageFiles.filter((_, i) => i !== index),
      });
      setPreviews(previews.filter((_, i) => i !== index));
    } else if (field.includes('packageDetails.')) {
      const key = field.split('.')[1];
      setFormData({
        ...formData,
        packageDetails: {
          ...formData.packageDetails,
          [key]: formData.packageDetails[key].filter((_, i) => i !== index),
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('noOfDays', formData.noOfDays);
    data.append('noOfNights', formData.noOfNights);
    data.append('originalPrice', formData.originalPrice);
    data.append('discountedPrice', formData.discountedPrice);
    data.append('destinationId', formData.destinationId);
    // Append tripSummary without dayImage (files will be appended separately)
    const tripSummaryWithoutImages = formData.tripSummary.map(({ dayImage, ...rest }) => rest);
    data.append('tripSummary', JSON.stringify(tripSummaryWithoutImages));
    data.append('highlights', JSON.stringify(formData.highlights));
    data.append('hotelsIncluded', JSON.stringify(formData.hotelsIncluded));
    data.append('packageDetails', JSON.stringify(formData.packageDetails));

    // Append package image files
    formData.imageFiles.forEach((file, index) => {
      if (file) {
        data.append('imageFiles', file);
      }
    });

    // Append dayImage files for tripSummary
    formData.tripSummary.forEach((day, index) => {
      if (day.dayImage) {
        data.append(`dayImages`, day.dayImage);
      }
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/tour-packages`,
        data,
        {
          headers: {
             Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage(response.data.message);
      setFormData({
        name: '',
        noOfDays: '',
        noOfNights: '',
        originalPrice: '',
        discountedPrice: '',
        tripSummary: [{ day: 1, title: '', transfer: '', activity: '', description: '', dayImage: null }],
        highlights: [''],
        hotelsIncluded: [{ city: '', nights: '', name: '' }],
        packageDetails: { included: [''], excluded: [''] },
        imageFiles: [null],
        destinationId: '',
      });
      setPreviews([]);
      setDayImagePreviews([]);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error adding tour package');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Tour Package</h2>
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
          <label className="block text-sm font-medium text-gray-700">Package Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Package Name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Days</label>
          <input
            type="number"
            name="noOfDays"
            placeholder="No. of days"
            value={formData.noOfDays}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Nights</label>
          <input
            type="number"
            name="noOfNights"
            placeholder="No. of Nights"
            value={formData.noOfNights}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Original Price</label>
          <input
            type="number"
            name="originalPrice"
            placeholder="Original Price"
            value={formData.originalPrice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Discounted Price</label>
          <input
            type="number"
            name="discountedPrice"
            placeholder="Discounted Price"
            value={formData.discountedPrice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <select
            name="destinationId"
            value={formData.destinationId}
            onChange={handleChange}
            className="mt-1 p-2 cursor-pointer w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a destination</option>
            {destinations.map((destination) => (
              <option key={destination._id} value={destination._id}>
                {destination.destinationName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Trip Summary</label>
          {formData.tripSummary.map((day, index) => (
            <div key={index} className="space-y-2 mt-2 border p-4 rounded">
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={day.day}
                  placeholder="Day Number"
                  onChange={(e) => handleArrayChange(index, 'tripSummary', 'day', e.target.value)}
                  className="p-2 w-20 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  min="1"
                />
                <input
                  type="text"
                  value={day.title}
                  placeholder={`Day ${day.day} Title`}
                  onChange={(e) => handleArrayChange(index, 'tripSummary', 'title', e.target.value)}
                  className="p-2 flex-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                value={day.transfer}
                placeholder="Transfer Details"
                onChange={(e) => handleArrayChange(index, 'tripSummary', 'transfer', e.target.value)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={day.activity}
                placeholder="Activity Description"
                onChange={(e) => handleArrayChange(index, 'tripSummary', 'activity', e.target.value)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={day.description}
                placeholder={`Day ${day.day} Description`}
                onChange={(e) => handleArrayChange(index, 'tripSummary', 'description', e.target.value)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleArrayChange(index, 'tripSummary', 'dayImage', e.target.files)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {dayImagePreviews[index] && (
                <div className="mt-2">
                  <img src={dayImagePreviews[index]} alt={`Day ${day.day} Preview`} className="max-w-full h-auto rounded" />
                </div>
              )}
              {formData.tripSummary.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('tripSummary', index)}
                  className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove Day
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('tripSummary')}
            className="mt-2 cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Day
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Highlights</label>
          {formData.highlights.map((highlight, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input
                type="text"
                value={highlight}
                placeholder="Enter Highlight"
                onChange={(e) => handleSimpleArrayChange('highlights', index, e.target.value)}
                className="p-2 flex-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {formData.highlights.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('highlights', index)}
                  className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('highlights')}
            className="mt-2 cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Highlight
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Hotels Included</label>
          {formData.hotelsIncluded.map((hotel, index) => (
            <div key={index} className="space-y-2 mt-2 border p-4 rounded">
              <input
                type="text"
                value={hotel.city}
                placeholder="City"
                onChange={(e) => handleArrayChange(index, 'hotelsIncluded', 'city', e.target.value)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={hotel.nights}
                placeholder="Number of Nights (e.g., 3 Nights)"
                onChange={(e) => handleArrayChange(index, 'hotelsIncluded', 'nights', e.target.value)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={hotel.name}
                placeholder="Hotel Name"
                onChange={(e) => handleArrayChange(index, 'hotelsIncluded', 'name', e.target.value)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {formData.hotelsIncluded.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('hotelsIncluded', index)}
                  className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove Hotel
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('hotelsIncluded')}
            className="mt-2 cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Hotel
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Included in Package</label>
          {formData.packageDetails.included.map((item, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input
                type="text"
                value={item}
                placeholder="Included in this Package"
                onChange={(e) => handlePackageDetailsChange('included', index, e.target.value)}
                className="p-2 flex-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {formData.packageDetails.included.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('packageDetails.included', index)}
                  className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('packageDetails.included')}
            className="mt-2 cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Included Item
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Excluded from Package</label>
          {formData.packageDetails.excluded.map((item, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input
                type="text"
                value={item}
                placeholder="Excluded from this Package"
                onChange={(e) => handlePackageDetailsChange('excluded', index, e.target.value)}
                className="p-2 flex-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {formData.packageDetails.excluded.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('packageDetails.excluded', index)}
                  className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('packageDetails.excluded')}
            className="mt-2 p-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Excluded Item
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Images</label>
          {formData.imageFiles.map((file, index) => (
            <div key={index} className="mt-2 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleSimpleArrayChange('imageFiles', index, e.target.files)}
                className="p-2 cursor-pointer w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={index === 0}
              />
              {previews[index] && (
                <div className="mt-2">
                  <img src={previews[index]} alt={`Preview ${index + 1}`} className="max-w-full h-auto rounded" />
                </div>
              )}
              {formData.imageFiles.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('imageFiles', index)}
                  className="mt-2 cursor-pointer p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove Image
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('imageFiles')}
            className="mt-2 p-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Image Input
          </button>
        </div>
        <button
          type="submit"
          className={`w-full cursor-pointer p-2 rounded text-white ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Tour Package'}
        </button>
      </form>
    </div>
  );
};

export default AddPackage;