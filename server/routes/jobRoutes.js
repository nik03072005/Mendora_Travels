import express from 'express';
import { createJob, deleteJob, getJobs } from '../controllers/jobController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/create-job',authMiddleware, createJob);
router.get('/jobs', getJobs);
router.delete('/jobs/:id', authMiddleware, deleteJob);

export default router;