import express from 'express';
const router = express.Router();
import multer from 'multer';
import galleryController from '../controllers/galleryController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const upload = multer({ storage: multer.memoryStorage() });
// Routes
router.post('/create',authMiddleware, upload.array('images'),galleryController.createGallery);
router.get('/galleries', galleryController.getAllGalleries);
router.get('/get/:id', galleryController.getGalleryById);
router.put('/update/:id', authMiddleware, upload.array('images'), galleryController.updateGallery);
router.delete('/delete/:id/image/:imageUrl',authMiddleware, galleryController.deleteImage);


export default router;