import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Verify token with backend
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsAuthenticated(response.data.isValid);
      } catch (error) {
        console.error('Token verification failed:', error.message);
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading while verifying token
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/adminlogin" replace />;
};

export default ProtectedRoute;