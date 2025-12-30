import express from 'express'
import multer from 'multer';
import blogController from '../controllers/blogController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  '/create-blogs',authMiddleware,
 upload.single('banner'),
  blogController.createBlog
);

router.get('/get-blogs',blogController.getAllBlogs)
router.post('/upload-image', upload.single('image'), blogController.uploadImage);
router.get('/blogs/:id', blogController.getBlogById);
router.get('/get-blog-by-slug/:slug', blogController.getBlogBySlug);
router.delete('/delete-blog/:id',authMiddleware, blogController.deleteBlog);

export default router;