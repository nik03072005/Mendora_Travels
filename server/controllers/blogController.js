import uploadToR2 from '../utils/r2Utils.js';
import Blog from '../models/BlogModel.js';
import slugify from 'slugify';

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'No banner file uploaded' });
    }

    const fileBuffer = req.file.buffer;
    const fileName = `images/${Date.now()}-${req.file.originalname}`;
    const bucketName = 'travel';

    const result = await uploadToR2(fileBuffer, fileName, bucketName);

    // Generate base slug from title
    let baseSlug = slugify(title, {
      lower: true,
      strict: true, // Remove special characters
      remove: /[*+~.()'"!:@]/g, // Remove additional special characters
    });

    // Check for slug uniqueness
    let slug = baseSlug;
    let count = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    const blog = new Blog({
      title,
      slug, // Set the unique slug
      content,
      bannerImage: result.fileUrl,
    });

    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog: ' + error.message });
  }
};

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileBuffer = req.file.buffer;
    const fileName = `images/${Date.now()}-${req.file.originalname}`;
    const bucketName = 'travel';

    const result = await uploadToR2(fileBuffer, fileName, bucketName);

    res.status(200).json({ imageUrl: result.fileUrl });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading image: ' + error.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    // Fetch all blogs from the database
    const blogs = await Blog.find();

    // Return success response with blogs
    return res.status(201).json({
      success: 'Blogs retrieved successfully',
      blogs,
      count: blogs.length,
    });
  } catch (error) {
    console.error('Error retrieving blogs:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog: ' + error.message });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog: ' + error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the blog
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Return success response
    return res.status(200).json({
      message: 'Blog deleted successfully',
      blogId: id,
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default {createBlog,getAllBlogs,deleteBlog,uploadImage,getBlogById,getBlogBySlug};