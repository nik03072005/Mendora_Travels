import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_SERVER_DOMAIN;

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Disable button when login starts
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful! Redirecting...', { position: 'top-center' });
      setTimeout(() => {
        setIsLoading(false); // Re-enable button before navigation
        navigate('/add-destination');
      }, 1500);
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response?.data?.message || 'Login failed. Please check your credentials.', {
        position: 'top-center',
      });
      setIsLoading(false); // Re-enable button on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 p-4">
      <ToastContainer />
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <Typography variant="h4" className="text-center font-bold text-gray-800 mb-2">
          Admin Login
        </Typography>
        <Typography variant="subtitle1" className="text-center text-gray-600 mb-6">
          Travel Dashboard Access
        </Typography>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007aff]-500 transition"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007aff] transition"
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading} // Disable button when loading
            sx={{
              bgcolor: '#1e88e5',
              '&:hover': { bgcolor: '#1565c0' },
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: '8px',
              padding: '10px',
            }}
          >
            {isLoading ? 'Signing In...' : 'Sign In as Admin'} {/* Show loading text */}
          </Button>
        </form>
      </div>
    </div>
  );
}