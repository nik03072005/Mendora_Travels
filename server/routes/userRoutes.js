import express from 'express';
import {  loginUser, signupUser, verifyToken } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/verify', verifyToken);

export default router;