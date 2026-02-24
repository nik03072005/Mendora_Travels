import express from 'express';
import tourPackageController from '../controllers/tourPackageController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { uploadTourPackageImages } from '../middleware/upload.js';

const router = express.Router();

// 🎯 Centralized upload middleware - clean & production-ready
router.post('/', authMiddleware, uploadTourPackageImages, tourPackageController.createTourPackage);
router.get('/by-tags', tourPackageController.getTourPackagesByTags);
router.get('/destination/:destinationId', tourPackageController.getTourPackagesByDestination);
router.get('/destination-slug/:slug', tourPackageController.getTourPackagesByDestinationSlug);
router.post('/:id/click', tourPackageController.incrementPackageClicks);
router.get('/:id', tourPackageController.getTourPackageById);
router.get('/slug/:slug', tourPackageController.getTourPackageBySlug);
router.delete('/:id', authMiddleware, tourPackageController.deleteTourPackageById);
router.put('/:id', authMiddleware, uploadTourPackageImages, tourPackageController.updateTourPackage);

export default router;