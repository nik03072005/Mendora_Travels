import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
export const authMiddleware = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT Verification Error:', err.message);
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token has expired' });
        }
        return res.status(401).json({ message: 'Invalid token' });
      }

      // Attach decoded user info to request object
      req.user = { userId: decoded.userId, email: decoded.email };
      next();
    });
  } catch (error) {
    console.error('Middleware Error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export default authMiddleware