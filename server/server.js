import express from 'express';
import dotenv from 'dotenv';

// Load environment variables FIRST before any other imports that need them
dotenv.config();

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import tourPackageRoutes from './routes/tourPackageRoutes.js';
import destinationRoutes from './routes/destinationRoutes.js';
import travelInquiryRoutes from './routes/travelInquiryRoutes.js';
import faqsRoutes from './routes/faqRoutes.js'
import galleryRoutes from './routes/galleryRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import searchRoutes from './controllers/SearchController.js'
import multer from 'multer';
import { uploadToR2 } from './utils/r2Utils.js';
import cors from 'cors'
import blogRoutes from './routes/blogRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import bodyParser from 'body-parser';

const app = express();

// CORS configuration - more secure for development
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());
app.use(bodyParser.json());
// Routes
app.use('/api/users', userRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/tour-packages', tourPackageRoutes);
app.use('/api/travel-inquiry', travelInquiryRoutes);
app.use('/api/faqs', faqsRoutes);
app.use('/api/gallery',galleryRoutes );
app.use('/api/reviews',reviewRoutes );
app.use('/api/blog',blogRoutes );
app.use('/api/job',jobRoutes );
app.use('/api',searchRoutes)


// Endpoint to upload image to R2
// app.post('/api/upload-to-r2', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     const fileBuffer = req.file.buffer;
//     const fileName = `images/${Date.now()}-${req.file.originalname}`; // e.g., 'images/1698765432100-my-image.jpg'
//     const bucketName = 'travel'; // Replace with your R2 bucket name

//     const result = await uploadToR2(fileBuffer, fileName, bucketName);
//     res.json({ success: true, fileUrl: result.fileUrl });
//     console.log( result.fileUrl)
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Connect to MongoDB and start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();
    
    // Start server after DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();