import express from 'express';
import { createFaq, deleteFaq, getAllFaqs, updateFaq } from '../controllers/faqController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/create',authMiddleware, createFaq);
router.get('/get/:id',getAllFaqs);
router.put('/update/:id',authMiddleware, updateFaq); // Uncomment if you have an updateFaq function
router.delete('/delete/:id',authMiddleware, deleteFaq); // Uncomment if you have a deleteFaq function

export default router;