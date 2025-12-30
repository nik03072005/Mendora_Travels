
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token')
  // Fetch all blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get-blogs`);
        setBlogs(response.data.blogs);
      } catch (error) {
        toast.error('Failed to fetch blogs');
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Handle blog deletion
  const handleDelete = async (id) => {
    // Show confirmation prompt
    if (!window.confirm('Are you sure you want to delete this blog?')) {
      return;
    }

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/blog/delete-blog/${id}`,{
        headers:{
              Authorization: `Bearer ${token}`, // Include token in Authorization header
        }
      });
      // Remove deleted blog from state
      setBlogs(blogs.filter((blog) => blog._id !== id));
      toast.success('Blog deleted successfully');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to delete blog');
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <Box className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <Paper elevation={3} className="p-8 rounded-2xl shadow-lg">
        <Typography
          variant="h3"
          className="mb-6 font-bold text-gray-800 text-center"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Manage Blogs
        </Typography>
        {loading ? (
          <Typography className="text-center text-gray-600">Loading...</Typography>
        ) : blogs.length === 0 ? (
          <Typography className="text-center text-gray-600">No blogs found.</Typography>
        ) : (
          <TableContainer component={Paper} className="shadow-md">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Banner Image</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog._id} hover>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell>
                      <img
                        src={blog.bannerImage}
                        alt={blog.title}
                        style={{ width: '100px', height: 'auto', borderRadius: '4px' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(blog._id)}
                        size="small"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
};

export default ManageBlog;