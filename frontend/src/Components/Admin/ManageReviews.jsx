import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, CircularProgress, Card, CardContent, IconButton } from '@mui/material';
import { FaStar, FaTrash } from 'react-icons/fa';
import styled from '@emotion/styled';

// Styled components for review card
const ReviewCard = styled(Card)({
  marginBottom: '16px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'relative',
});

const ReviewImage = styled('img')({
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  borderRadius: '4px',
  marginRight: '8px',
});

const DeleteButton = styled(IconButton)({
  position: 'absolute',
  top: '8px',
  right: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

const Label = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '4px',
});

const ManageReviews = () => {
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    destinationId: '',
    packageId: '',
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  // Get auth token from Redux store
 const token =localStorage.getItem('token')

  // Fetch all destinations on mount
  useEffect(() => {
    const fetchDestinations = async () => {
      setFetching(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/destinations/get`);
        setDestinations(response.data || []);
      } catch (error) {
        toast.error('Failed to load destinations');
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
          toast.error('Failed to load tour packages');
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
      setReviews([]);
    }
  }, [formData.destinationId]);

  // Fetch reviews based on destinationId or packageId
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        let url = `${import.meta.env.VITE_API_URL}/api/reviews/getbyDestination/${formData.destinationId}`;
        if (formData.packageId) {
          url = `${import.meta.env.VITE_API_URL}/api/reviews/getbyPackage/${formData.packageId}`;
        }
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReviews(response.data.reviews || []);
      } catch (error) {
        toast.error('Failed to load reviews');
        console.error('Fetch reviews error:', error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    if (formData.destinationId) {
      fetchReviews();
    } else {
      setReviews([]);
    }
  }, [formData.destinationId, formData.packageId, token]);

  // Handle review deletion
  const handleDeleteReview = async (reviewId) => {
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/reviews/delete/${reviewId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Review deleted successfully');
      setReviews((prev) => prev.filter((review) => review._id !== reviewId));
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to delete review');
      console.error('Delete review error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Typography variant="h4" className="text-center mb-6 flex items-center justify-center gap-2">
        <FaStar className="text-yellow-500" /> Manage Reviews
      </Typography>

      {fetching ? (
        <Box className="flex justify-center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <FormControl fullWidth variant="outlined" className="mb-4">
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
            variant="outlined"
            disabled={!formData.destinationId || packages.length === 0}
            className="mb-4"
          >
            <InputLabel>Tour Package</InputLabel>
            <Select
              name="packageId"
              value={formData.packageId}
              onChange={handleInputChange}
              label="Tour Package"
            >
              <MenuItem value="">
                <em>Select a tour package (optional)</em>
              </MenuItem>
              {packages.map((pkg) => (
                <MenuItem key={pkg.Id} value={pkg.Id}>
                  {pkg.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {loading ? (
            <Box className="flex justify-center">
              <CircularProgress />
            </Box>
          ) : reviews.length === 0 ? (
            <Typography variant="body1" className="text-center">
              No reviews found for the selected {formData.packageId ? 'package' : 'destination'}.
            </Typography>
          ) : (
            <Box>
              <Typography variant="h6" className="mb-4">
                Reviews ({reviews.length})
              </Typography>
              {reviews?.map((review) => (
                <ReviewCard key={review._id}>
                  <CardContent>
                    <DeleteButton onClick={() => handleDeleteReview(review._id)}>
                      <FaTrash className="text-red-500" />
                    </DeleteButton>
                    <Label variant="subtitle1">Name</Label>
                    <Typography variant="h6">{review.name}</Typography>
                    <Label variant="subtitle1" className="mt-2">Comment</Label>
                    <Typography variant="body2" color="textSecondary" className="mb-2">
                      {review.comment}
                    </Typography>
                    {review.images && review.images.length > 0 && (
                      <>
                        <Label variant="subtitle1">Images</Label>
                        <Box className="flex flex-wrap">
                          {review.images.map((image, index) => (
                            <ReviewImage key={index} src={image} alt={`Review image ${index + 1}`} />
                          ))}
                        </Box>
                      </>
                    )}
                  </CardContent>
                </ReviewCard>
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default ManageReviews;