import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  Fade,
  TextField,
  Box,
  Typography,
  TablePagination,
} from '@mui/material';

const Managedestination = () => {
  // State for destinations, popup, form inputs, and updating status
  const [destinations, setDestinations] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentDestination, setCurrentDestination] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false); // New state for update status
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const token = localStorage.getItem('token')

  // Static fallback data
  const staticDestinations = [
    { id: 1, destinationName: 'Paris', imageUrl: 'https://via.placeholder.com/100' },
    { id: 2, destinationName: 'Tokyo', imageUrl: 'https://via.placeholder.com/100' },
    { id: 3, destinationName: 'New York', imageUrl: 'https://via.placeholder.com/100' },
    { id: 4, destinationName: 'London', imageUrl: 'https://via.placeholder.com/100' },
    { id: 5, destinationName: 'Sydney', imageUrl: 'https://via.placeholder.com/100' },
    { id: 6, destinationName: 'Rome', imageUrl: 'https://via.placeholder.com/100' },
  ];

  // Fetch destinations on mount
  const fetchDestinations = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/destinations/get`);
      const fetchedDestinations = Array.isArray(response.data) && response.data.length > 0
        ? response.data
        : staticDestinations;
      setDestinations(fetchedDestinations);
    } catch (error) {
      console.error('Edestinations:', error);
      toast.error('Failed to fetch destinations. Using static data.');
      setDestinations(staticDestinations);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/destinations/delete/${id}`,{
        headers:{
           Authorization: `Bearer ${token}`, // Include token in Authorization header
        }
      });
      setDestinations(destinations.filter((dest) => dest.id !== id));
      fetchDestinations();
      toast.success('Destination deleted successfully.');
    } catch (error) {
      console.error('Error deleting destination:', error);
      toast.error('Failed to delete destination.');
    }
  };

  // Handle update popup open
  const handleUpdateOpen = (destination) => {
    setCurrentDestination(destination);
    setUpdatedName(destination.destinationName);
    setPreviewImage(destination.imageUrl);
    setSelectedFile(null);
    setIsPopupOpen(true);
  };

  // Handle update submit
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!updatedName) {
      toast.error('Please enter a destination name.');
      return;
    }

    setIsUpdating(true); // Set updating state to true
    try {
      const formData = new FormData();
      formData.append('destinationName', updatedName);
      if (selectedFile) {
        formData.append('imageFile', selectedFile);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/destinations/update/${currentDestination._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          'Content-Type': 'multipart/form-data', // Explicitly set for formData
          },
        }
      );

      if (response?.status === 200) {
        fetchDestinations();
      }

      toast.success('Destination updated successfully.');
      setIsPopupOpen(false);
      setCurrentDestination(null);
      setSelectedFile(null);
      setPreviewImage('');
      setUpdatedName('');
    } catch (error) {
      console.error('Error updating destination:', error);
      toast.error('Failed to update destination.');
    } finally {
      setIsUpdating(false); // Reset updating state
    }
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentDestination(null);
    setSelectedFile(null);
    setPreviewImage('');
    setUpdatedName('');
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Destinations Dashboard
      </Typography>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {destinations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((destination) => (
              <TableRow key={destination._id} hover>
                <TableCell>
                  <img
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </TableCell>
                <TableCell>{destination.destinationName}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleUpdateOpen(destination)}
                    sx={{ minWidth: 'auto', p: 1, mr: 1 }}
                    className="cursor-pointer"
                    title="Update"
                  >
                    <FaEdit color="#1976d2" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(destination._id)}
                    sx={{ minWidth: 'auto', p: 1 }}
                    className="cursor-pointer"
                    title="Delete"
                  >
                    <FaTrash color="#d32f2f" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={destinations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>

      {/* Update Popup */}
      <Dialog
        open={isPopupOpen}
        onClose={closePopup}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        PaperProps={{
          sx: { p: 3, width: '100%', maxWidth: '500px' },
        }}
        sx={{
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        {currentDestination && (
          <>
            <Typography variant="h6" gutterBottom>
              Update Destination
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">
                Current Destination
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <img
                  src={currentDestination.imageUrl}
                  alt={currentDestination.destinationName}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '16px' }}
                />
                <Typography variant="body1" fontWeight="medium">
                  {currentDestination.destinationName}
                </Typography>
              </Box>
            </Box>
            <form onSubmit={handleUpdateSubmit}>
              <TextField
                label="Destination Name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="textSecondary">
                  Upload New Image
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  name="imageFile"
                  onChange={handleFileChange}
                  style={{ marginTop: '8px', width: '100%' }}
                />
                {previewImage && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="textSecondary">
                      Image Preview:
                    </Typography>
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/100')}
                    />
                  </Box>
                )}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                  onClick={closePopup}
                  sx={{ mr: 1 }}
                  className="cursor-pointer"
                  disabled={isUpdating} // Disable Cancel button during update
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="cursor-pointer"
                  disabled={isUpdating} // Disable Update button during update
                >
                  {isUpdating ? 'Updating...' : 'Update'}
                </Button>
              </Box>
            </form>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Managedestination;