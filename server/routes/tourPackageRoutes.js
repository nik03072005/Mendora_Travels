import express from 'express';
import tourPackageController from '../controllers/tourPackageController.js';
const router = express.Router();
import multer from 'multer';
import authMiddleware from '../middleware/authMiddleware.js';
const storage = multer.memoryStorage();
const uploadforUpdate = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  },
}).fields([
  { name: 'imageFiles', maxCount: 10 }, // Adjust maxCount as needed
  { name: 'dayImages', maxCount: 50 }, // Increased to support multiple days
]);
// Routes
// Configure Multer for multiple file fields
const upload = multer({
  storage: multer.memoryStorage(),
}).fields([
  { name: 'imageFiles', maxCount: 10 }, // For package images
  { name: 'dayImages', maxCount: 10 },  // For trip summary day images
]);
router.post('/',authMiddleware, upload, tourPackageController.createTourPackage);
router.get('/destination/:destinationId', tourPackageController.getTourPackagesByDestination);
router.get('/:id', tourPackageController.getTourPackageById);
router.get('/slug/:slug', tourPackageController.getTourPackageBySlug);
router.delete('/:id',authMiddleware, tourPackageController.deleteTourPackageById);
router.put('/:id',authMiddleware,upload, tourPackageController.updateTourPackage);



export default router;