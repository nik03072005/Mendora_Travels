import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
  Paper,
  Grid,
} from '@mui/material';
import { FaUpload, FaTrash } from 'react-icons/fa'; // Added FaTrash for removing images
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const CreateGallery = () => {
  const [destinationId, setDestinationId] = useState('');
  const [images, setImages] = useState([]); // Store File objects
  const [previews, setPreviews] = useState([]); // Store preview URLs
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingDestinations, setFetchingDestinations] = useState(true);

  // Replace with your auth state from Redux if needed
  // const token = useSelector((state) => state.auth?.token); // Adjust based on your Redux store
    const token = localStorage.getItem('token')
  // Fetch destinations on mount
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/destinations/get`);
        setDestinations(response.data);
      } catch (error) {
        toast.error('Failed to fetch destinations');
      } finally {
        setFetchingDestinations(false);
      }
    };
    fetchDestinations();
  }, []);

  // Handle image file selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images, ...files];
    setImages(newImages);
    // Generate preview URLs
    const newPreviews = newImages.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  // Remove an image
  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  // Clean up preview URLs on unmount
  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [previews]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!destinationId) {
      toast.error('Please select a destination');
      return;
    }
    if (images.length === 0) {
      toast.error('Please select at least one image');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('destinationId', destinationId);
    images.forEach((image) => {
      formData.append('images', image); // Matches backend field name
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/gallery/create`, formData,{
        headers:{
           Authorization: `Bearer ${token}`, // Include token in Authorization header
          'Content-Type': 'multipart/form-data', // Explicitly set for formData
        }
      });
      toast.success('Gallery created successfully!');
      // Reset form
      setDestinationId('');
      setImages([]);
      setPreviews([]);
      document.getElementById('image-upload').value = ''; // Clear file input
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to create gallery');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Create Gallery
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 3 }} disabled={fetchingDestinations}>
            <InputLabel id="destination-label">Destination</InputLabel>
            <Select
              labelId="destination-label"
              value={destinationId}
              label="Destination"
              onChange={(e) => setDestinationId(e.target.value)}
            >
              {fetchingDestinations ? (
                <MenuItem disabled>Loading destinations...</MenuItem>
              ) : destinations.length === 0 ? (
                <MenuItem disabled>No destinations available</MenuItem>
              ) : (
                destinations.map((dest) => (
                  <MenuItem key={dest._id} value={dest._id}>
                    {dest.destinationName}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          <Box sx={{ mb: 3 }}>
            <Button
              variant="contained"
              component="label"
              startIcon={<FaUpload />}
              disabled={loading}
            >
              Upload Images
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={handleImageChange}
              />
            </Button>
            {images.length > 0 && (
              <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                {images.length} image(s) selected
              </Typography>
            )}
            {previews.length > 0 && (
              <Grid container spacing={2}>
                {previews.map((preview, index) => (
                  <Grid item xs={4} key={index}>
                    <Box sx={{ position: 'relative' }}>
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        style={{
                          width: '100%',
                          height: 100,
                          objectFit: 'cover',
                          borderRadius: 4,
                        }}
                      />
                      <Button
                        size="small"
                        color="error"
                        onClick={() => handleRemoveImage(index)}
                        sx={{
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          minWidth: 0,
                          p: 0.5,
                          bgcolor: 'rgba(0, 0, 0, 0.6)',
                        }}
                      >
                        <FaTrash color="white" />
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || fetchingDestinations}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Create Gallery'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateGallery;