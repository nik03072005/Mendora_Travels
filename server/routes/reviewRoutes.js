import express from 'express';
const router = express.Router();
import multer from 'multer';
import reviewController from '../controllers/reviewController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const upload = multer({ storage: multer.memoryStorage() });
// Routes
router.post('/create',authMiddleware, upload.array('images'),reviewController.createReview);
router.get('/getbyDestination/:destinationId', reviewController.getReviewsByDestination);
router.get('/getbyPackage/:packageId', reviewController.getReviewsByPackage);
router.put('/update/:id',authMiddleware, upload.array('images'), reviewController.updateReview);
router.delete('/delete/:id',authMiddleware, reviewController.deleteReview);


export default router;