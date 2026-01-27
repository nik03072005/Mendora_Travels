import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Box,
  Typography,
  TablePagination,
} from '@mui/material';

const Managedestination = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const token = localStorage.getItem('token');

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
      console.error('Error fetching destinations:', error);
      toast.error('Failed to fetch destinations. Using static data.');
      setDestinations(staticDestinations);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this destination?')) {
      return;
    }
    
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/destinations/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      fetchDestinations();
      toast.success('Destination deleted successfully.');
    } catch (error) {
      console.error('Error deleting destination:', error);
      toast.error('Failed to delete destination.');
    }
  };

  // Handle edit - navigate to edit page
  const handleEdit = (destination) => {
    navigate(`/admin/edit-destination/${destination._id}?category=${destination.category || 'international'}`);
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

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />

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
                    onClick={() => handleEdit(destination)}
                    sx={{ minWidth: 'auto', p: 1, mr: 1 }}
                    className="cursor-pointer"
                    title="Edit Destination"
                  >
                    <FaEdit color="#1976d2" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(destination._id)}
                    sx={{ minWidth: 'auto', p: 1 }}
                    className="cursor-pointer"
                    title="Delete Destination"
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
    </Box>
  );
};

export default Managedestination;
