import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

const staticDestinations = [
  { id: 1, name: 'Paris', tourPackages: [] },
  { id: 2, name: 'Tokyo', tourPackages: [] },
  { id: 3, name: 'New York', tourPackages: [] },
  { id: 4, name: 'London', tourPackages: [] },
];

const ManagePackages = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

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
        toast.error('Failed to fetch destinations. Using static data.', {
          position: "top-right",
          autoClose: 3000,
        });
        setDestinations(staticDestinations);
      }
    };
    fetchDestinations();
  }, []);

  const handleDestinationChange = (event) => {
    const selected = event.target.value;
    setSelectedDestination(selected);
    const found = destinations.find((dest) => dest.destinationName === selected);
    setPackages(found?.tourPackages || []);
  };

  const handleEdit = (pkg) => {
    navigate(`/edit-package/${pkg._id}`, { state: { packageData: pkg } });
  };

  const handleDelete = async (pkgId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/tour-packages/${pkgId}`,{
        headers:{
           Authorization: `Bearer ${token}`, // Include token in Authorization header
        }
      });
      setPackages((prev) => prev.filter((pkg) => pkg._id !== pkgId));
      toast.success('Package deleted successfully.', {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error deleting package.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <Box className="min-h-screen p-4 bg-gray-100">
      <Typography variant="h4" className="mb-6 text-gray-800 font-bold text-center">
        Manage Travel Packages
      </Typography>

      <Box className="flex justify-center mb-8">
        <FormControl className="w-full max-w-md" variant="outlined">
          <InputLabel id="destination-select-label">Select Destination</InputLabel>
          <Select
            labelId="destination-select-label"
            value={selectedDestination}
            onChange={handleDestinationChange}
            label="Select Destination"
            className="bg-white rounded-lg"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {destinations.map((destination) => (
              <MenuItem key={destination._id} value={destination.destinationName}>
                {destination.destinationName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Add ToastContainer to display toast messages */}
      <ToastContainer />

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg._id} className="rounded-xl shadow-md">
            {pkg.imageUrls && pkg.imageUrls.length > 0 && (
              <CardMedia
                component="img"
                height="160"
                image={pkg.imageUrls[0]}
                alt={pkg.name}
              />
            )}
            <CardContent>
              <Typography variant="h6" className="font-semibold">{pkg.name}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => handleEdit(pkg)}>Edit</Button>
              <Button variant="outlined" color="error" onClick={() => handleDelete(pkg._id)}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ManagePackages;