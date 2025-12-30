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
import { FaUpload, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const UpdateGallery = () => {
  const [destinationId, setDestinationId] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [gallery, setGallery] = useState(null);
  const [newImages, setNewImages] = useState([]); // For new uploads
  const [previews, setPreviews] = useState([]); // For new image previews
  const [loading, setLoading] = useState(false);
  const [fetchingDestinations, setFetchingDestinations] = useState(true);
  const [fetchingGallery, setFetchingGallery] = useState(false);

  // Replace with your auth state from Redux if needed
  // const token = useSelector((state) => state.auth?.token); // Adjust based on your Redux store

  const token=localStorage.getItem('token')

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

  // Fetch gallery when destinationId changes
  useEffect(() => {
    const fetchGallery = async () => {
      if (!destinationId) {
        setGallery(null);
        return;
      }
      setFetchingGallery(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/gallery/get/${destinationId}`
        );
        setGallery(response.data);
        console.log(response)
      } catch (error) {
        if (error.response?.status === 404) {
          setGallery(null);
          toast.info('No gallery found for this destination');
        } else {
          toast.error('Failed to fetch gallery');
        }
      } finally {
        setFetchingGallery(false);
      }
    };
    fetchGallery();
  }, [destinationId, token]);

  // Handle new image file selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...newImages, ...files];
    setNewImages(updatedImages);
    const newPreviews = updatedImages.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  // Remove a new image (before upload)
  const handleRemoveNewImage = (index) => {
    const updatedImages = newImages.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setNewImages(updatedImages);
    setPreviews(updatedPreviews);
  };

  // Delete an existing image
  const handleDeleteImage = async (imageUrl) => {
    if (!gallery) return;
    setLoading(true);
    try {
      const response = await axios.delete( `${import.meta.env.VITE_API_URL}/api/gallery/delete/${gallery._id}/image/${encodeURIComponent(imageUrl)}`,{
        headers:{
           Authorization: `Bearer ${token}`, // Include token in Authorization header
        }
      }
      );
      setGallery(response.data.gallery);
      toast.success('Image deleted successfully');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to delete image');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission for uploading new images
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gallery) {
      toast.error('No gallery selected. Create a gallery first.');
      return;
    }
    if (newImages.length === 0) {
      toast.error('Please select at least one image to upload');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    newImages.forEach((image) => {
      formData.append('images', image); // Matches backend field name
    });

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/gallery/update/${gallery._id}`,
        formData,{
          headers:{
             Authorization: `Bearer ${token}`, // Include token in Authorization header
          'Content-Type': 'multipart/form-data', // Explicitly set for formData
          }
        }
      );
      setGallery(response.data);
      toast.success('Images uploaded successfully!');
      // Reset new images
      setNewImages([]);
      setPreviews([]);
      document.getElementById('image-upload').value = '';
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to upload images');
    } finally {
      setLoading(false);
    }
  };

  // Clean up preview URLs
  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [previews]);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Update Gallery
        </Typography>
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

        {/* Existing Images */}
        {fetchingGallery ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CircularProgress />
            <Typography>Loading gallery...</Typography>
          </Box>
        ) : gallery && gallery.images.length > 0 ? (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Existing Images
            </Typography>
            <Grid container spacing={2}>
              {gallery.images.map((image, index) => (
                <Grid item xs={4} key={index}>
                  <Box sx={{ position: 'relative' }}>
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      style={{
                        width: '100%',
                        height: 150,
                        objectFit: 'cover',
                        borderRadius: 4,
                      }}
                    />
                    <Button
                      size="small"
                      color="error"
                      onClick={() => handleDeleteImage(image)}
                      disabled={loading}
                      sx={{
                        position: 'absolute',
                        bottom: 5,
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
          </Box>
        ) : (
          <Typography sx={{ mb: 3 }}>
            {destinationId ? 'No images found for this destination' : 'Select a destination to view images'}
          </Typography>
        )}

        {/* Upload New Images */}
        <Box sx={{ mb: 3 }}>
          <Button
            variant="contained"
            component="label"
            startIcon={<FaUpload />}
            disabled={loading || !destinationId}
          >
            Upload New Images
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleImageChange}
            />
          </Button>
          {newImages.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                New Images to Upload
              </Typography>
              <Grid container spacing={2}>
                {previews.map((preview, index) => (
                  <Grid item xs={4} key={index}>
                    <Box sx={{ position: 'relative' }}>
                      <img
                        src={preview}
                        alt={`New image ${index + 1}`}
                        style={{
                          width: '100%',
                          height: 150,
                          objectFit: 'cover',
                          borderRadius: 4,
                        }}
                      />
                      <Button
                        size="small"
                        color="error"
                        onClick={() => handleRemoveNewImage(index)}
                        disabled={loading}
                        sx={{
                          position: 'absolute',
                          bottom: 5,
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
            </Box>
          )}
        </Box>

        {newImages.length > 0 && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || !gallery}
            fullWidth
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress size={24} /> : 'Upload New Images'}
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default UpdateGallery;