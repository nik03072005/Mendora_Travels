import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { FaPlus, FaTrash, FaImage } from 'react-icons/fa';

const EditDestination = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('basic');
  const [preview, setPreview] = useState(null);
  const [heroPreview, setHeroPreview] = useState(null);
  
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    destinationName: '',
    imageFile: null,
    category: categoryFromUrl || 'international',
    heroTitle: '',
    heroTagline: '',
    heroStartingPrice: '',
    heroDurationRange: '',
    heroImageFile: null,
    shortDescription: '',
    expandedDescription: '',
  });

  const [subDestinations, setSubDestinations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [groupTours, setGroupTours] = useState([]);

  // Fetch destination data
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/destinations/${id}`
        );
        const dest = response.data;
        
        // Set form data
        setFormData({
          destinationName: dest.destinationName || '',
          imageFile: null,
          category: dest.category || 'international',
          heroTitle: dest.heroSection?.title || '',
          heroTagline: dest.heroSection?.tagline || '',
          heroStartingPrice: dest.heroSection?.startingPrice || '',
          heroDurationRange: dest.heroSection?.durationRange || '',
          heroImageFile: null,
          shortDescription: dest.aboutSection?.shortDescription || '',
          expandedDescription: dest.aboutSection?.expandedDescription || '',
        });

        // Set preview images
        setPreview(dest.imageUrl || null);
        setHeroPreview(dest.heroSection?.heroImage || null);

        // Set arrays
        setSubDestinations(dest.subDestinations || []);
        setActivities(dest.activities || []);
        setGroupTours(dest.groupTours || []);

        setLoading(false);
      } catch (error) {
        console.error('Error loading destination:', error);
        setMessage('❌ Error loading destination');
        setLoading(false);
      }
    };

    if (id) {
      fetchDestination();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageFile') {
      const file = files[0];
      setFormData({ ...formData, imageFile: file });
      if (file) setPreview(URL.createObjectURL(file));
      else setPreview(null);
    } else if (name === 'heroImageFile') {
      const file = files[0];
      setFormData({ ...formData, heroImageFile: file });
      if (file) setHeroPreview(URL.createObjectURL(file));
      else setHeroPreview(null);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Sub-Destinations Management
  const addSubDestination = () => {
    setSubDestinations([...subDestinations, { name: '', country: '', image: '', packagesCount: 0 }]);
  };

  const removeSubDestination = (index) => {
    setSubDestinations(subDestinations.filter((_, i) => i !== index));
  };

  const updateSubDestination = (index, field, value) => {
    const updated = [...subDestinations];
    updated[index][field] = value;
    setSubDestinations(updated);
  };

  // Activities Management
  const addActivity = () => {
    setActivities([...activities, { title: '', image: '', location: '' }]);
  };

  const removeActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const updateActivity = (index, field, value) => {
    const updated = [...activities];
    updated[index][field] = value;
    setActivities(updated);
  };

  // Group Tours Management
  const addGroupTour = () => {
    setGroupTours([...groupTours, { 
      name: '', 
      departureDate: '', 
      returnDate: '', 
      totalSeats: 0, 
      bookedSeats: 0, 
      price: '', 
      duration: '',
      highlights: []
    }]);
  };

  const removeGroupTour = (index) => {
    setGroupTours(groupTours.filter((_, i) => i !== index));
  };

  const updateGroupTour = (index, field, value) => {
    const updated = [...groupTours];
    updated[index][field] = value;
    setGroupTours(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    const data = new FormData();
    
    // Basic fields
    data.append('destinationName', formData.destinationName);
    data.append('category', formData.category);
    if (formData.imageFile) data.append('imageFile', formData.imageFile);
    if (formData.heroImageFile) data.append('heroImageFile', formData.heroImageFile);
    
    // Build destination data object
    const destinationDataObj = {
      heroSection: {
        title: formData.heroTitle || `${formData.destinationName} Tour Packages`,
        tagline: formData.heroTagline || `Discover the beauty of ${formData.destinationName}`,
        startingPrice: parseFloat(formData.heroStartingPrice) || 0,
        durationRange: formData.heroDurationRange || '5-7 Days',
      },
      aboutSection: {
        shortDescription: formData.shortDescription || `Explore amazing ${formData.destinationName} with our carefully curated tour packages.`,
        expandedDescription: formData.expandedDescription || `${formData.destinationName} offers unforgettable experiences for travelers. Book your dream vacation today!`
      },
      subDestinations: subDestinations.filter(sd => sd.name),
      activities: activities.filter(a => a.title),
      groupTours: groupTours.filter(gt => gt.name)
    };
    
    data.append('destinationData', JSON.stringify(destinationDataObj));

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/destinations/update/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      setMessage(`✅ ${response.data.message || 'Destination updated successfully!'}`);
      setTimeout(() => navigate(-1), 2000);
    } catch (error) {
      setMessage('❌ ' + (error.response?.data?.message || 'Error updating destination'));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading destination data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Edit Destination</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>

      {message && (
        <div className={`mb-4 p-4 rounded ${message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 border-b overflow-x-auto">
        {['basic', 'hero', 'about', 'subdest', 'activities', 'tours'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold whitespace-nowrap ${
              activeTab === tab 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab === 'basic' && 'Basic Info'}
            {tab === 'hero' && 'Hero Section'}
            {tab === 'about' && 'About Section'}
            {tab === 'subdest' && 'Sub-Destinations'}
            {tab === 'activities' && 'Activities'}
            {tab === 'tours' && 'Group Tours'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info Tab */}
        {activeTab === 'basic' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Destination Name *</label>
              <input
                type="text"
                name="destinationName"
                value={formData.destinationName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="domestic">Domestic</option>
                <option value="international">International</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Main Destination Image</label>
              <input
                type="file"
                name="imageFile"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              {preview && (
                <img src={preview} alt="Preview" className="mt-2 h-48 object-cover rounded" />
              )}
            </div>
          </div>
        )}

        {/* Hero Section Tab */}
        {activeTab === 'hero' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Hero Title</label>
              <input
                type="text"
                name="heroTitle"
                value={formData.heroTitle}
                onChange={handleChange}
                placeholder={`${formData.destinationName} Tour Packages`}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Hero Tagline</label>
              <input
                type="text"
                name="heroTagline"
                value={formData.heroTagline}
                onChange={handleChange}
                placeholder="Discover the beauty..."
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Starting Price (₹)</label>
                <input
                  type="number"
                  name="heroStartingPrice"
                  value={formData.heroStartingPrice}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration Range</label>
                <input
                  type="text"
                  name="heroDurationRange"
                  value={formData.heroDurationRange}
                  onChange={handleChange}
                  placeholder="5-7 Days"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Hero Background Image</label>
              <input
                type="file"
                name="heroImageFile"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              {heroPreview && (
                <img src={heroPreview} alt="Hero Preview" className="mt-2 h-48 object-cover rounded" />
              )}
            </div>
          </div>
        )}

        {/* About Section Tab */}
        {activeTab === 'about' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Short Description</label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="3"
                placeholder="Brief description..."
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Expanded Description</label>
              <textarea
                name="expandedDescription"
                value={formData.expandedDescription}
                onChange={handleChange}
                rows="5"
                placeholder="Detailed description..."
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Sub-Destinations Tab */}
        {activeTab === 'subdest' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Sub-Destinations</h3>
              <button
                type="button"
                onClick={addSubDestination}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <FaPlus /> Add Sub-Destination
              </button>
            </div>

            {subDestinations.map((sub, index) => (
              <div key={index} className="p-4 border rounded bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Sub-Destination #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeSubDestination(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={sub.name}
                    onChange={(e) => updateSubDestination(index, 'name', e.target.value)}
                    className="px-3 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    value={sub.country}
                    onChange={(e) => updateSubDestination(index, 'country', e.target.value)}
                    className="px-3 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={sub.image}
                    onChange={(e) => updateSubDestination(index, 'image', e.target.value)}
                    className="px-3 py-2 border rounded col-span-2"
                  />
                  <input
                    type="number"
                    placeholder="Packages Count"
                    value={sub.packagesCount}
                    onChange={(e) => updateSubDestination(index, 'packagesCount', parseInt(e.target.value) || 0)}
                    className="px-3 py-2 border rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Activities Tab */}
        {activeTab === 'activities' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Activities</h3>
              <button
                type="button"
                onClick={addActivity}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <FaPlus /> Add Activity
              </button>
            </div>

            {activities.map((activity, index) => (
              <div key={index} className="p-4 border rounded bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Activity #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeActivity(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Activity Title"
                    value={activity.title}
                    onChange={(e) => updateActivity(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={activity.image}
                    onChange={(e) => updateActivity(index, 'image', e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={activity.location}
                    onChange={(e) => updateActivity(index, 'location', e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Group Tours Tab */}
        {activeTab === 'tours' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Group Tours</h3>
              <button
                type="button"
                onClick={addGroupTour}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <FaPlus /> Add Group Tour
              </button>
            </div>

            {groupTours.map((tour, index) => (
              <div key={index} className="p-4 border rounded bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Group Tour #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeGroupTour(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Tour Name"
                    value={tour.name}
                    onChange={(e) => updateGroupTour(index, 'name', e.target.value)}
                    className="px-3 py-2 border rounded col-span-2"
                  />
                  <input
                    type="date"
                    placeholder="Departure Date"
                    value={tour.departureDate}
                    onChange={(e) => updateGroupTour(index, 'departureDate', e.target.value)}
                    className="px-3 py-2 border rounded"
                  />
                  <input
                    type="date"
                    placeholder="Return Date"
                    value={tour.returnDate}
                    onChange={(e) => updateGroupTour(index, 'returnDate', e.target.value)}
                    className="px-3 py-2 border rounded"
                  />
                  <input
                    type="number"
                    placeholder="Total Seats"
                    value={tour.totalSeats}
                    onChange={(e) => updateGroupTour(index, 'totalSeats', parseInt(e.target.value) || 0)}
                    className="px-3 py-2 border rounded"
                  />
                  <input
                    type="number"
                    placeholder="Price (₹)"
                    value={tour.price}
                    onChange={(e) => updateGroupTour(index, 'price', e.target.value)}
                    className="px-3 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 5D/4N)"
                    value={tour.duration}
                    onChange={(e) => updateGroupTour(index, 'duration', e.target.value)}
                    className="px-3 py-2 border rounded col-span-2"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-semibold"
          >
            {saving ? 'Updating...' : 'Update Destination'}
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDestination;
