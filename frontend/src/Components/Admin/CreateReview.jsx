import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography, CircularProgress } from '@mui/material';
import { FaStar, FaTrash } from 'react-icons/fa';
import styled from '@emotion/styled';

const Input = styled('input')({
  display: 'none',
});

const ImagePreviewContainer = styled('div')({
  position: 'relative',
  margin: '8px',
});

const ImagePreview = styled('img')({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const DeleteButton = styled('button')({
  position: 'absolute',
  top: '-8px',
  right: '-8px',
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '50%',
  padding: '4px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: 'rgba(255, 255, 255, 1)',
  },
});

const CreateReview = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    destinationId: '',
    packageId: '',
  });
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  // Use Redux for token if available, fallback to localStorage
  const token = useSelector((state) => state.auth?.token) || localStorage.getItem('token');

  // Fetch all destinations on mount
  useEffect(() => {
    const fetchDestinations = async () => {
      setFetching(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/destinations/get`);
        setDestinations(response.data || []);
      } catch (error) {
        toast.error('Failed to load destinations. Please try again later.');
        console.error('Fetch destinations error:', error);
      } finally {
        setFetching(false);
      }
    };
    fetchDestinations();
  }, []);

  // Fetch tour packages when destinationId changes
  useEffect(() => {
    if (formData.destinationId) {
      const fetchPackages = async () => {
        setFetching(true);
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tour-packages/destination/${formData.destinationId}`);
          setPackages(response.data || []);
          setFormData((prev) => ({ ...prev, packageId: '' }));
        } catch (error) {
          toast.error('Failed to load tour packages. Please try again.');
          console.error('Fetch packages error:', error);
          setPackages([]);
        } finally {
          setFetching(false);
        }
      };
      fetchPackages();
    } else {
      setPackages([]);
      setFormData((prev) => ({ ...prev, packageId: '' }));
    }
  }, [formData.destinationId]);

  // Handle image selection and generate previews
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files).filter((file) => file.type.startsWith('image/'));
    if (selectedFiles.length === 0) {
      toast.error('Please select valid image files.');
      return;
    }
    const newImages = [...images, ...selectedFiles];
    setImages(newImages);
    const newPreviews = newImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
  };

  // Handle image deletion
  const handleDeleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    // Revoke URL of the deleted image
    URL.revokeObjectURL(imagePreviews[index]);

    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  // Clean up image preview URLs on unmount or when images change
  useEffect(() => {
    return () => {
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    if (!formData.comment.trim()) {
      toast.error('Please enter a comment.');
      return;
    }
    if (!formData.destinationId) {
      toast.error('Please select a destination.');
      return;
    }
    if (!formData.packageId) {
      toast.error('Please select a tour package.');
      return;
    }
    if (!images.length) {
      toast.error('Please upload at least one image.');
      return;
    }

    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('comment', formData.comment);
    data.append('destinationId', formData.destinationId);
    data.append('packageId', formData.packageId);
    images.forEach((image) => data.append('images', image));

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/reviews/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(response.data.message || 'Review submitted successfully!');
      setFormData({ name: '', comment: '', destinationId: '', packageId: '' });
      setImages([]);
      setImagePreviews([]);
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to submit review. Please try again.');
      console.error('Submit error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Typography variant="h4" className="text-center mb-6 flex items-center justify-center gap-2">
        <FaStar className="text-yellow-500" /> Write a Review
      </Typography>
      {fetching ? (
        <Box className="flex justify-center">
          <CircularProgress />
        </Box>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Your Comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
            multiline
            rows={4}
            variant="outlined"
          />
          <FormControl fullWidth required variant="outlined">
            <InputLabel>Destination</InputLabel>
            <Select
              name="destinationId"
              value={formData.destinationId}
              onChange={handleInputChange}
              label="Destination"
            >
              <MenuItem value="">
                <em>Select a destination</em>
              </MenuItem>
              {destinations.map((dest) => (
                <MenuItem key={dest._id} value={dest._id}>
                  {dest.destinationName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            required
            variant="outlined"
            disabled={!formData.destinationId || packages.length === 0}
          >
            <InputLabel>Tour Package</InputLabel>
            <Select
              key={formData.destinationId}
              name="packageId"
              value={formData.packageId}
              onChange={handleInputChange}
              label="Tour Package"
            >
              <MenuItem value="">
                <em>Select a tour package</em>
              </MenuItem>
              {packages.map((pkg) => (
                <MenuItem key={pkg.Id} value={pkg.Id}>
                  {pkg.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <label htmlFor="images">
              <Input
                accept="image/*"
                id="images"
                multiple
                type="file"
                onChange={handleImageChange}
              />
              <Button
                variant="contained"
                component="span"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Upload Images
              </Button>
            </label>
            {imagePreviews.length > 0 && (
              <Box className="mt-4 flex flex-wrap">
                {imagePreviews.map((url, index) => (
                  <ImagePreviewContainer key={index}>
                    <ImagePreview src={url} alt={`Preview ${index + 1}`} />
                    <DeleteButton type="button" onClick={() => handleDeleteImage(index)}>
                      <FaTrash className="text-red-500" />
                    </DeleteButton>
                  </ImagePreviewContainer>
                ))}
              </Box>
            )}
            {images.length > 0 && (
              <Typography variant="body2" className="mt-2">
                {images.length} image(s) selected
              </Typography>
            )}
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || !formData.destinationId || !formData.packageId || !formData.name.trim() || !formData.comment.trim() || !images.length}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {loading ? <CircularProgress size={24} className="text-white" /> : 'Submit Review'}
          </Button>
        </form>
      )}
    </Box>
  );
};

export default CreateReview;