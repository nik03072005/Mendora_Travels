import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { FaPlus, FaTrash, FaImage } from 'react-icons/fa';

const AddDestination = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const token = localStorage.getItem('token');
  
  const [formData, setFormData] = useState({
    destinationName: '',
    imageFile: null,
    category: categoryFromUrl || 'international',
    // Hero Section
    heroTitle: '',
    heroTagline: '',
    heroStartingPrice: '',
    heroDurationRange: '',
    heroImageFile: null,
    // About Section
    shortDescription: '',
    expandedDescription: '',
    // Sub-Destinations
    subDestinations: [],
    // Activities
    activities: [],
    // Group Tours
    groupTours: []
  });
  
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(null);
  const [heroPreview, setHeroPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (categoryFromUrl) {
      setFormData(prev => ({ ...prev, category: categoryFromUrl }));
    }
  }, [categoryFromUrl]);

  const [subDestinations, setSubDestinations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [groupTours, setGroupTours] = useState([]);
  const [activeTab, setActiveTab] = useState('basic');

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
      date: '', 
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
    setLoading(true);
    
    const data = new FormData();
    
    // Basic fields
    data.append('destinationName', formData.destinationName);
    data.append('category', formData.category);
    if (formData.imageFile) data.append('imageFile', formData.imageFile);
    
    // Build destination data object
    const destinationDataObj = {
      heroSection: {
        title: formData.heroTitle || `${formData.destinationName} Tour Packages`,
        tagline: formData.heroTagline || `Discover the beauty of ${formData.destinationName}`,
        startingPrice: parseFloat(formData.heroStartingPrice) || 0,
        durationRange: formData.heroDurationRange || '5-7 Days',
        heroImage: '' // Will be set by backend
      },
      aboutSection: {
        shortDescription: formData.shortDescription || `Explore amazing ${formData.destinationName} with our carefully curated tour packages.`,
        expandedDescription: formData.expandedDescription || `${formData.destinationName} offers unforgettable experiences for travelers. Book your dream vacation today!`
      },
      subDestinations: subDestinations.filter(sd => sd.name), // Only include if name is filled
      activities: activities.filter(a => a.title), // Only include if title is filled
      groupTours: groupTours.filter(gt => gt.name) // Only include if name is filled
    };
    
    data.append('destinationData', JSON.stringify(destinationDataObj));

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
      
      setMessage(`✅ ${response.data.message} - Page available at: /${formData.category}-trips/${response.data.destination.slug}`);
      
      // Reset form
      setFormData({ 
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
      setSubDestinations([]);
      setActivities([]);
      setGroupTours([]);
      setPreview(null);
      setHeroPreview(null);
      setActiveTab('basic');
    } catch (error) {
      setMessage('❌ ' + (error.response?.data?.message || 'Error adding destination'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Add New Destination - Fully Customizable</h2>
      
      {message && (
        <div className={`mb-4 p-4 rounded ${message.includes('✅') ? 'bg-green-100 text-green-700 border border-green-400' : 'bg-red-100 text-red-700 border border-red-400'}`}>
          {message}
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b mb-6 overflow-x-auto">
        {['basic', 'hero', 'about', 'subdest', 'activities', 'tours'].map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-semibold whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            {tab === 'basic' && 'Basic Info'}
            {tab === 'hero' && 'Hero Section'}
            {tab === 'about' && 'About'}
            {tab === 'subdest' && 'Sub-Destinations'}
            {tab === 'activities' && 'Activities'}
            {tab === 'tours' && 'Group Tours'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Basic Info Tab */}
        {activeTab === 'basic' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination Name *</label>
              <input
                type="text"
                name="destinationName"
                placeholder="e.g., Goa, Maldives, Paris"
                value={formData.destinationName}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="international">International</option>
                <option value="domestic">Domestic</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Destination Image *</label>
              <input
                type="file"
                name="imageFile"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              {preview && <img src={preview} alt="Preview" className="mt-4 max-w-md h-auto rounded shadow" />}
            </div>
          </div>
        )}

        {/* Hero Section Tab */}
        {activeTab === 'hero' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
            <p className="text-sm text-gray-600 mb-4">Customize the hero banner at the top of destination page</p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
              <input
                type="text"
                name="heroTitle"
                placeholder={`${formData.destinationName || 'Destination'} Tour Packages`}
                value={formData.heroTitle}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Tagline</label>
              <input
                type="text"
                name="heroTagline"
                placeholder={`Discover the beauty of ${formData.destinationName || 'this destination'}`}
                value={formData.heroTagline}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Starting Price (₹)</label>
                <input
                  type="number"
                  name="heroStartingPrice"
                  placeholder="e.g., 15999"
                  value={formData.heroStartingPrice}
                  onChange={handleChange}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration Range</label>
                <input
                  type="text"
                  name="heroDurationRange"
                  placeholder="e.g., 5-7 Days"
                  value={formData.heroDurationRange}
                  onChange={handleChange}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* About Section Tab */}
        {activeTab === 'about' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-xl font-semibold mb-4">About Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
              <textarea
                name="shortDescription"
                placeholder="A brief introduction..."
                value={formData.shortDescription}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expanded Description</label>
              <textarea
                name="expandedDescription"
                placeholder="Detailed information..."
                value={formData.expandedDescription}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Sub-Destinations Tab */}
        {activeTab === 'subdest' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Sub-Destinations</h3>
              <button type="button" onClick={addSubDestination} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <FaPlus /> Add
              </button>
            </div>
            
            {subDestinations.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No sub-destinations. Click Add to create one.</p>
            ) : (
              subDestinations.map((sub, idx) => (
                <div key={idx} className="border p-4 rounded space-y-3 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">Sub-Destination {idx + 1}</h4>
                    <button type="button" onClick={() => removeSubDestination(idx)} className="text-red-500"><FaTrash /></button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Name" value={sub.name} onChange={(e) => updateSubDestination(idx, 'name', e.target.value)} className="p-2 border rounded" />
                    <input type="text" placeholder="Country/Region" value={sub.country} onChange={(e) => updateSubDestination(idx, 'country', e.target.value)} className="p-2 border rounded" />
                  </div>
                  <input type="text" placeholder="Image URL" value={sub.image} onChange={(e) => updateSubDestination(idx, 'image', e.target.value)} className="w-full p-2 border rounded" />
                  <input type="number" placeholder="Packages Count" value={sub.packagesCount} onChange={(e) => updateSubDestination(idx, 'packagesCount', parseInt(e.target.value) || 0)} className="w-full p-2 border rounded" />
                </div>
              ))
            )}
          </div>
        )}

        {/* Activities Tab */}
        {activeTab === 'activities' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Activities</h3>
              <button type="button" onClick={addActivity} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <FaPlus /> Add
              </button>
            </div>
            
            {activities.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No activities. Click Add to create one.</p>
            ) : (
              activities.map((activity, idx) => (
                <div key={idx} className="border p-4 rounded space-y-3 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">Activity {idx + 1}</h4>
                    <button type="button" onClick={() => removeActivity(idx)} className="text-red-500"><FaTrash /></button>
                  </div>
                  <input type="text" placeholder="Title" value={activity.title} onChange={(e) => updateActivity(idx, 'title', e.target.value)} className="w-full p-2 border rounded" />
                  <input type="text" placeholder="Image URL" value={activity.image} onChange={(e) => updateActivity(idx, 'image', e.target.value)} className="w-full p-2 border rounded" />
                  <input type="text" placeholder="Location" value={activity.location} onChange={(e) => updateActivity(idx, 'location', e.target.value)} className="w-full p-2 border rounded" />
                </div>
              ))
            )}
          </div>
        )}

        {/* Group Tours Tab */}
        {activeTab === 'tours' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Group Tours</h3>
              <button type="button" onClick={addGroupTour} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <FaPlus /> Add
              </button>
            </div>
            
            {groupTours.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No group tours. Click Add to create one.</p>
            ) : (
              groupTours.map((tour, idx) => (
                <div key={idx} className="border p-4 rounded space-y-3 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">Tour {idx + 1}</h4>
                    <button type="button" onClick={() => removeGroupTour(idx)} className="text-red-500"><FaTrash /></button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Tour Name" value={tour.name} onChange={(e) => updateGroupTour(idx, 'name', e.target.value)} className="p-2 border rounded" />
                    <input type="date" value={tour.date} onChange={(e) => updateGroupTour(idx, 'date', e.target.value)} className="p-2 border rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="number" placeholder="Total Seats" value={tour.totalSeats} onChange={(e) => updateGroupTour(idx, 'totalSeats', parseInt(e.target.value) || 0)} className="p-2 border rounded" />
                    <input type="number" placeholder="Booked Seats" value={tour.bookedSeats} onChange={(e) => updateGroupTour(idx, 'bookedSeats', parseInt(e.target.value) || 0)} className="p-2 border rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Price" value={tour.price} onChange={(e) => updateGroupTour(idx, 'price', e.target.value)} className="p-2 border rounded" />
                    <input type="text" placeholder="Duration" value={tour.duration} onChange={(e) => updateGroupTour(idx, 'duration', e.target.value)} className="p-2 border rounded" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full p-4 rounded text-white font-semibold ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          disabled={loading}
        >
          {loading ? 'Creating Destination...' : 'Create Destination'}
        </button>
      </form>
    </div>
  );
};

export default AddDestination;