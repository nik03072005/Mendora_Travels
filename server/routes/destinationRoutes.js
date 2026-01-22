import express from 'express';
import destinationController from '../controllers/destinationController.js';
import multer from 'multer';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Routes
router.post('/create',authMiddleware, upload.single('imageFile'), destinationController.createDestination);
router.get('/get', destinationController.getDestinations);
router.get('/page/:slug', destinationController.getDestinationPageData); // New unified endpoint
router.get('/:id', destinationController.getDestinationById);
router.post('/get/name', destinationController.getDestinationByName);
router.put('/update/:id',authMiddleware, upload.single('imageFile'), destinationController.updateDestination);
router.delete('/delete/:id',authMiddleware, destinationController.deleteDestination);

// Group Tours Management Routes
router.post('/:id/group-tours', authMiddleware, destinationController.addGroupTour);
router.put('/:id/group-tours/:tourId', authMiddleware, destinationController.updateGroupTour);
router.delete('/:id/group-tours/:tourId', authMiddleware, destinationController.deleteGroupTour);

export default router;