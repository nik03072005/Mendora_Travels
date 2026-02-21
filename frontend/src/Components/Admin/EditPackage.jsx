
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Static fallback data for destinations
const staticDestinations = [
  { _id: 'static1', destinationName: 'Paris' },
  { _id: 'static2', destinationName: 'Tokyo' },
  { _id: 'static3', destinationName: 'New York' },
];

export default function EditPackage() {
  const { packageId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
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
    imageFiles: [],
    destinationId: '',
    tags: [],
  });
  const [destinations, setDestinations] = useState([]);
  const [message, setMessage] = useState('');
  const [previews, setPreviews] = useState([]);
  const [dayImagePreviews, setDayImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isTripSummaryReset, setIsTripSummaryReset] = useState(false);
  const token= localStorage.getItem('token')

  // API URL with fallback
  const API_URL = import.meta.env?.VITE_API_URL || 'http://localhost:5000';

  // Fetch destinations and package data
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/destinations/get`);
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

    const fetchPackageData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/tour-packages/${packageId}`);
        const pkg = response?.data?.data || {};
        const packageData = {
          name: pkg.name || '',
          noOfDays: pkg.noOfDays?.toString() || '',
          noOfNights: pkg.noOfNights?.toString() || '',
          originalPrice: pkg.originalPrice?.toString() || '',
          discountedPrice: pkg.discountedPrice?.toString() || '',
          tripSummary: pkg.tripSummary?.length > 0
            ? pkg.tripSummary.map((day) => ({
                day: day.day || 1,
                title: day.title || '',
                transfer: day.transfer || '',
                activity: day.activity || '',
                description: day.description || '',
                dayImage: day.dayImage || null,
              }))
            : [{ day: 1, title: '', transfer: '', activity: '', description: '', dayImage: null }],
          highlights: pkg.highlights?.length > 0 ? pkg.highlights : [''],
          hotelsIncluded: pkg.hotelsIncluded?.length > 0 ? pkg.hotelsIncluded : [{ city: '', nights: '', name: '' }],
          packageDetails: {
            included: pkg.packageDetails?.included?.length > 0 ? pkg.packageDetails.included : [''],
            excluded: pkg.packageDetails?.excluded?.length > 0 ? pkg.packageDetails.excluded : [''],
          },
          imageFiles: pkg.imageUrls?.length > 0 ? pkg.imageUrls.map(() => null) : [null],
          destinationId: pkg.destination?._id || pkg.destinationId || '',
          tags: pkg.tags || [],
        };
        setFormData(packageData);
        // Filter out empty/null URLs and validate them
        const validImageUrls = (pkg.imageUrls || []).map(url => 
          url && url.trim() !== '' ? url : null
        );
        setPreviews(validImageUrls);
        
        const validDayImages = (pkg.tripSummary || []).map((day) => 
          day.dayImage && day.dayImage.trim() !== '' ? day.dayImage : ''
        );
        setDayImagePreviews(validDayImages.length > 0 ? validDayImages : ['']);
      } catch (error) {
        console.error('Error fetching package:', error);
        setMessage('Failed to fetch package data.');
        if (state?.packageData) {
          const pkg = state.packageData;
          const packageData = {
            name: pkg.name || '',
            noOfDays: pkg.noOfDays?.toString() || '',
            noOfNights: pkg.noOfNights?.toString() || '',
            originalPrice: pkg.originalPrice?.toString() || '',
            discountedPrice: pkg.discountedPrice?.toString() || '',
            tripSummary: pkg.tripSummary?.length > 0
              ? pkg.tripSummary.map((day) => ({
                  day: day.day || 1,
                  title: day.title || '',
                  transfer: day.transfer || '',
                  activity: day.activity || '',
                  description: day.description || '',
                  dayImage: day.dayImage || null,
                }))
              : [{ day: 1, title: '', transfer: '', activity: '', description: '', dayImage: null }],
            highlights: pkg.highlights?.length > 0 ? pkg.highlights : [''],
            hotelsIncluded: pkg.hotelsIncluded?.length > 0 ? pkg.hotelsIncluded : [{ city: '', nights: '', name: '' }],
            packageDetails: {
              included: pkg.packageDetails?.included?.length > 0 ? pkg.packageDetails.included : [''],
              excluded: pkg.packageDetails?.excluded?.length > 0 ? pkg.packageDetails.excluded : [''],
            },
            imageFiles: pkg.imageUrls?.length > 0 ? pkg.imageUrls.map(() => null) : [null],
            destinationId: pkg.destination?._id || pkg.destinationId || '',
            tags: pkg.tags || [],
          };
          setFormData(packageData);
          // Filter out empty/null URLs and validate them
          const validImageUrls = (pkg.imageUrls || []).map(url => 
            url && url.trim() !== '' ? url : null
          );
          setPreviews(validImageUrls);
          
          const validDayImages = (pkg.tripSummary || []).map((day) => 
            day.dayImage && day.dayImage.trim() !== '' ? day.dayImage : ''
          );
          setDayImagePreviews(validDayImages.length > 0 ? validDayImages : ['']);
        }
      }
    };

    fetchDestinations();
    fetchPackageData();
  }, [packageId, state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, key, value) => {
    if (field === 'tripSummary' && key === 'dayImage') {
      const file = value && value[0] ? value[0] : null;
      const updatedArray = [...formData[field]];
      updatedArray[index] = { ...updatedArray[index], [key]: file };
      setFormData({ ...formData, [field]: updatedArray });

      const updatedDayPreviews = [...dayImagePreviews];
      updatedDayPreviews[index] = file ? URL.createObjectURL(file) : dayImagePreviews[index] || '';
      setDayImagePreviews(updatedDayPreviews);
    } else {
      const updatedArray = [...formData[field]];
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
      const file = value && value[0] ? value[0] : null;
      const updatedFiles = [...formData.imageFiles];
      updatedFiles[index] = file;
      setFormData({ ...formData, imageFiles: updatedFiles });

      const updatedPreviews = [...previews];
      // Keep existing preview if no new file selected, otherwise create new blob URL
      updatedPreviews[index] = file ? URL.createObjectURL(file) : previews[index];
      setPreviews(updatedPreviews);
    } else {
      const updatedArray = [...formData[field]];
      updatedArray[index] = value;
      setFormData({ ...formData, [field]: updatedArray });
    }
  };

  const addArrayItem = (field) => {
    if (field === 'tripSummary' && isTripSummaryReset) {
      setFormData({
        ...formData,
        tripSummary: [
          ...formData.tripSummary,
          { day: formData.tripSummary.length + 1, title: '', transfer: '', activity: '', description: '', dayImage: null },
        ],
      });
      setDayImagePreviews([...dayImagePreviews, '']);
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
    if (field === 'hotelsIncluded') {
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

  const resetTripSummary = () => {
    setFormData({
      ...formData,
      tripSummary: [{ day: 1, title: '', transfer: '', activity: '', description: '', dayImage: null }],
    });
    setDayImagePreviews(['']);
    setIsTripSummaryReset(true);
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
    
    // Clean tripSummary: remove dayImage if it's a File object (will be sent separately)
    // Only include dayImage if it's a valid string URL
    const cleanedTripSummary = formData.tripSummary.map(day => {
      const { dayImage, ...rest } = day;
      
      // Only include dayImage if it's a valid string URL
      if (typeof dayImage === 'string' && dayImage.trim() !== '') {
        return { ...rest, dayImage };
      }
      
      // Don't include dayImage if it's a File, empty, or invalid
      return rest;
    });
    
    data.append('tripSummary', JSON.stringify(cleanedTripSummary));
    data.append('highlights', JSON.stringify(formData.highlights));
    data.append('hotelsIncluded', JSON.stringify(formData.hotelsIncluded));
    data.append('packageDetails', JSON.stringify(formData.packageDetails));
    data.append('tags', JSON.stringify(formData.tags));

    // Append package image files
    formData.imageFiles.forEach((file, index) => {
      if (file) {
        data.append('imageFiles', file);
      }
    });

    // Append existing package image URLs
    previews.forEach((url, index) => {
      if (!formData.imageFiles[index] && url) {
        data.append('existingImageUrls', url);
      }
    });

    // Append new dayImage files
    formData.tripSummary.forEach((day, index) => {
      if (day.dayImage instanceof File) {
        data.append('dayImages', day.dayImage);
      }
    });

    // 🔍 DEBUG LOG - See what's being sent to backend
    console.log('\n📤 FRONTEND SENDING TO BACKEND:');
    console.log('FormData entries:');
    for (let [key, value] of data.entries()) {
      console.log(`  ${key}:`, typeof value === 'object' && value instanceof File 
        ? `File(${value.name})` 
        : value.substring ? value.substring(0, 100) : value
      );
    }
    console.log('\n');

    try {
      const response = await axios.put(
        `${API_URL}/api/tour-packages/${packageId}`,
        data,
        {
          
          headers: { 
             Authorization: `Bearer ${token}`, // Include token in Authorization header
            'Content-Type': 'multipart/form-data' 
          },
        }
      );
      setMessage(response.data.message || 'Package updated successfully');
      navigate('/manage-package');
    } catch (error) {
      console.error('Error updating package:', error);
      setMessage(error.response?.data?.message || 'Error updating tour package');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Tour Package</h2>
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
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        
        {/* Package Tags Section */}
        <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
          <label className="block text-base font-semibold text-gray-800 mb-3">
            📌 Package Tags (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['honeymoon', 'corporate', 'group-tour', 'weekend-getaway', 'adventure', 'family', 'luxury', 'budget'].map((tag) => (
              <label key={tag} className="flex items-center p-2 bg-white rounded border border-gray-300 hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.tags.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({ ...formData, tags: [...formData.tags, tag] });
                    } else {
                      setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
                    }
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 capitalize">
                  {tag.replace(/-/g, ' ')}
                </span>
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2 italic">
            Selected tags: {formData.tags.length > 0 ? formData.tags.join(', ') : 'None'}
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Trip Summary</label>
          <button
            type="button"
            onClick={resetTripSummary}
            className="mt-2 mb-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reset Trip Summary
          </button>
          {formData.tripSummary.map((day, index) => (
            <div key={`day-${index}`} className="space-y-2 mt-2 border p-4 rounded">
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
              {dayImagePreviews[index] && dayImagePreviews[index].trim() !== '' ? (
                <div className="mt-2">
                  <img
                    src={dayImagePreviews[index]}
                    alt={`Day ${day.day} Preview`}
                    className="max-w-full h-auto rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      setMessage(`Failed to load Day ${day.day} image. The URL might be broken or inaccessible.`);
                    }}
                  />
                </div>
              ) : (
                <div className="mt-2 p-3 bg-gray-100 border border-gray-300 rounded text-sm text-gray-600">
                  No existing image for this day. Upload a new one to add.
                </div>
              )}
            </div>
          ))}
          {isTripSummaryReset && (
            <button
              type="button"
              onClick={() => addArrayItem('tripSummary')}
              className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Day
            </button>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Highlights</label>
          {formData.highlights.map((highlight, index) => (
            <div key={`highlight-${index}`} className="flex space-x-2 mt-2">
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
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('highlights')}
            className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Highlight
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Hotels Included</label>
          {formData.hotelsIncluded.map((hotel, index) => (
            <div key={`hotel-${index}`} className="space-y-2 mt-2 border p-4 rounded">
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
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove Hotel
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('hotelsIncluded')}
            className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Hotel
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Included in Package</label>
          {formData.packageDetails.included.map((item, index) => (
            <div key={`included-${index}`} className="flex space-x-2 mt-2">
              <input
                type="text"
                value={item}
                placeholder="Included Item"
                onChange={(e) => handlePackageDetailsChange('included', index, e.target.value)}
                className="p-2 flex-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {formData.packageDetails.included.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('packageDetails.included', index)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('packageDetails.included')}
            className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Included Item
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Excluded from Package</label>
          {formData.packageDetails.excluded.map((item, index) => (
            <div key={`excluded-${index}`} className="flex space-x-2 mt-2">
              <input
                type="text"
                value={item}
                placeholder="Excluded Item"
                onChange={(e) => handlePackageDetailsChange('excluded', index, e.target.value)}
                className="p-2 flex-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {formData.packageDetails.excluded.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('packageDetails.excluded', index)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('packageDetails.excluded')}
            className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Excluded Item
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Images</label>
          {formData.imageFiles.map((file, index) => (
            <div key={`image-${index}`} className="mt-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleSimpleArrayChange('imageFiles', index, e.target.files)}
                className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {previews[index] && previews[index].trim() !== '' ? (
                <div className="mt-2">
                  <img
                    src={previews[index]}
                    alt={`Image ${index + 1}`}
                    className="max-w-full h-auto rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      setMessage(`Failed to load package image #${index + 1}. The URL might be broken or inaccessible.`);
                    }}
                  />
                </div>
              ) : (
                <div className="mt-2 p-3 bg-gray-100 border border-gray-300 rounded text-sm text-gray-600">
                  No existing image. Upload a new one to add.
                </div>
              )}
              <button
                type="button"
                onClick={() => removeArrayItem('imageFiles', index)}
                className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove Image
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('imageFiles')}
            className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Image
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className={`w-full p-2 rounded text-white ${
              loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Tour Package'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/manage-package')}
            className="w-full p-2 rounded text-white bg-gray-500 hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}