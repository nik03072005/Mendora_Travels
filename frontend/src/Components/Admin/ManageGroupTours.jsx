import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaCalendar, FaUsers, FaMoneyBillWave } from 'react-icons/fa';

const ManageGroupTours = () => {
  const { destinationId } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [groupTours, setGroupTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTour, setEditingTour] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    totalSeats: 0,
    bookedSeats: 0,
    price: '',
    duration: '',
    highlights: ['']
  });

  useEffect(() => {
    fetchData();
  }, [destinationId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/destinations/${destinationId}`);
      const data = await response.json();
      setDestination(data.destination || data);
      setGroupTours((data.destination || data).groupTours || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch group tours');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData(prev => ({ ...prev, highlights: newHighlights }));
  };

  const addHighlight = () => {
    setFormData(prev => ({
      ...prev,
      highlights: [...prev.highlights, '']
    }));
  };

  const removeHighlight = (index) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index)
    }));
  };

  const handleEdit = (tour) => {
    setEditingTour(tour._id);
    setFormData({
      name: tour.name || '',
      date: tour.date || '',
      totalSeats: tour.totalSeats || 0,
      bookedSeats: tour.bookedSeats || 0,
      price: tour.price || '',
      duration: tour.duration || '',
      highlights: tour.highlights?.length > 0 ? tour.highlights : ['']
    });
  };

  const handleCancelEdit = () => {
    setEditingTour(null);
    setIsAddingNew(false);
    setFormData({
      name: '',
      date: '',
      totalSeats: 0,
      bookedSeats: 0,
      price: '',
      duration: '',
      highlights: ['']
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const cleanedHighlights = formData.highlights.filter(h => h.trim() !== '');

      const payload = {
        ...formData,
        highlights: cleanedHighlights,
        totalSeats: parseInt(formData.totalSeats) || 0,
        bookedSeats: parseInt(formData.bookedSeats) || 0
      };

      let response;
      if (editingTour) {
        // Update existing tour
        response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/destinations/${destinationId}/group-tours/${editingTour}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
          }
        );
      } else {
        // Add new tour
        response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/destinations/${destinationId}/group-tours`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
          }
        );
      }

      if (response.ok) {
        alert(editingTour ? 'Group tour updated successfully' : 'Group tour added successfully');
        handleCancelEdit();
        fetchData();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save group tour');
      }
    } catch (error) {
      console.error('Error saving group tour:', error);
      alert('Failed to save group tour');
    }
  };

  const handleDelete = async (tourId) => {
    if (!confirm('Are you sure you want to delete this group tour?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/destinations/${destinationId}/group-tours/${tourId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.ok) {
        alert('Group tour deleted successfully');
        fetchData();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to delete group tour');
      }
    } catch (error) {
      console.error('Error deleting group tour:', error);
      alert('Failed to delete group tour');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-600">Loading group tours...</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
        >
          <FaArrowLeft /> Back to Destinations
        </button>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Group Tours for {destination?.destinationName}
            </h1>
            <p className="text-gray-600 mt-2">
              Total Group Tours: {groupTours.length}
            </p>
          </div>
          
          {!isAddingNew && !editingTour && (
            <button
              onClick={() => {
                setIsAddingNew(true);
                setFormData({
                  name: '',
                  date: '',
                  totalSeats: 0,
                  bookedSeats: 0,
                  price: '',
                  duration: '',
                  highlights: ['']
                });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaPlus />
              Add New Group Tour
            </button>
          )}
        </div>
      </div>

      {/* Add/Edit Form */}
      {(isAddingNew || editingTour) && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-2 border-blue-500">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {editingTour ? 'Edit Group Tour' : 'Add New Group Tour'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tour Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Kashmir Winter Expedition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 15-20 March 2026"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 5 Days 4 Nights"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., ₹25,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Seats</label>
              <input
                type="number"
                name="totalSeats"
                value={formData.totalSeats}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Booked Seats</label>
              <input
                type="number"
                name="bookedSeats"
                value={formData.bookedSeats}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Highlights</label>
            {formData.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder={`Highlight ${index + 1}`}
                />
                {formData.highlights.length > 1 && (
                  <button
                    onClick={() => removeHighlight(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addHighlight}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              + Add Highlight
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <FaSave />
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="flex items-center gap-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <FaTimes />
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Group Tours List */}
      {groupTours.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <FaUsers className="mx-auto text-6xl text-gray-300 mb-4" />
          <p className="text-gray-600 text-lg mb-4">No group tours found for this destination.</p>
          {!isAddingNew && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <FaPlus />
              Add First Group Tour
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupTours.map((tour) => (
            <div
              key={tour._id}
              className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 ${
                editingTour === tour._id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{tour.name}</h3>
              
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                {tour.date && (
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-500" />
                    <span>{tour.date}</span>
                  </div>
                )}
                
                {tour.duration && (
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-green-500" />
                    <span>{tour.duration}</span>
                  </div>
                )}
                
                {tour.price && (
                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-yellow-500" />
                    <span className="font-semibold">{tour.price}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <FaUsers className="text-purple-500" />
                  <span>
                    {tour.bookedSeats || 0} / {tour.totalSeats || 0} seats booked
                  </span>
                </div>
              </div>

              {/* Highlights */}
              {tour.highlights && tour.highlights.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Availability Status */}
              <div className="mb-4">
                {tour.bookedSeats >= tour.totalSeats ? (
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                    Fully Booked
                  </span>
                ) : (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    {tour.totalSeats - tour.bookedSeats} Seats Available
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(tour)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={editingTour && editingTour !== tour._id}
                >
                  <FaEdit />
                  Edit
                </button>
                
                <button
                  onClick={() => handleDelete(tour._id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  disabled={editingTour}
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageGroupTours;
