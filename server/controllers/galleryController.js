import Destination from '../models/Destination.js';
import Gallery from '../models/Gallery.js';
import { uploadToR2 } from '../utils/r2Utils.js';

// Create a new gallery and update the Destination model
export const createGallery = async (req, res) => {
  try {
    const { destinationId } = req.body;

    // Check if destinationId is provided
    if (!destinationId) {
      return res.status(400).json({ error: 'destinationId is required' });
    }

    // Verify destination exists
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }

    // Check if destination already has a gallery
    if (destination.gallery) {
      return res.status(400).json({ error: 'Destination already has a gallery. Use update to modify images.' });
    }

    // Check if files are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded' });
    }

    // Upload each image to R2 and collect URLs
    const bucketName = 'travel'; // Your R2 bucket name
    const imageUrls = await Promise.all(
      req.files.map(async (file) => {
        const fileName = `images/${Date.now()}-${file.originalname}`;
        const result = await uploadToR2(file.buffer, fileName, bucketName);
        return result.fileUrl; // Store URL directly as string
      })
    );

    // Create and save the gallery
    const gallery = new Gallery({
      destinationId,
      images: imageUrls,
    });
    await gallery.save();

    // Update the Destination with the new Gallery ID
    await Destination.findByIdAndUpdate(
      destinationId,
      { $set: { gallery: gallery._id } }, // Set single gallery ID
      { new: true }
    );

    res.status(201).json(gallery);
  } catch (error) {
    console.error('Error creating gallery:', error);
    res.status(500).json({ error: 'Failed to create gallery' });
  }
};

// Get all galleries
export const getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find().populate('destinationId', 'destinationName');
    res.json(galleries);
  } catch (error) {
    console.error('Error fetching galleries:', error);
    res.status(500).json({ error: 'Failed to fetch galleries' });
  }
};

// Get a single gallery by ID
export const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params; // id is destinationId
    const gallery = await Gallery.findOne({ destinationId: id });
    if (!gallery) {
      return res.status(404).json({ error: 'Gallery not found for this destination' });
    }
    res.json(gallery);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({ error: 'Failed to fetch gallery' });
  }
};

// Update a gallery (e.g., add more images or change destinationId)
export const updateGallery = async (req, res) => {
  try {
    const { destinationId } = req.body;
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ error: 'Gallery not found' });
    }

    // If destinationId is provided and different, update the Destination
    if (destinationId && destinationId !== gallery.destinationId.toString()) {
      const newDestination = await Destination.findById(destinationId);
      if (!newDestination) {
        return res.status(404).json({ error: 'New destination not found' });
      }

      // Check if new destination already has a gallery
      if (newDestination.gallery) {
        return res.status(400).json({ error: 'New destination already has a gallery' });
      }

      // Remove gallery ID from old destination
      await Destination.findByIdAndUpdate(
        gallery.destinationId,
        { $unset: { gallery: 1 } }, // Remove gallery reference
        { new: true }
      );

      // Set gallery ID in new destination
      await Destination.findByIdAndUpdate(
        destinationId,
        { $set: { gallery: gallery._id } },
        { new: true }
      );

      gallery.destinationId = destinationId;
    }

    // Handle new image uploads
    if (req.files && req.files.length > 0) {
      const bucketName = 'travel';
      const newImageUrls = await Promise.all(
        req.files.map(async (file) => {
          const fileName = `images/${Date.now()}-${file.originalname}`;
          const result = await uploadToR2(file.buffer, fileName, bucketName);
          return result.fileUrl; // Store URL directly as string
        })
      );
      gallery.images = [...gallery.images, ...newImageUrls]; // Append new images
    }

    await gallery.save();
    res.json(gallery);
  } catch (error) {
    console.error('Error updating gallery:', error);
    res.status(500).json({ error: 'Failed to update gallery' });
  }
};

// Delete a gallery and remove its ID from the Destination
export const deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ error: 'Gallery not found' });
    }

    // Remove gallery ID from the associated Destination
    await Destination.findByIdAndUpdate(
      gallery.destinationId,
      { $unset: { gallery: 1 } }, // Remove gallery reference
      { new: true }
    );

    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gallery deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery:', error);
    res.status(500).json({ error: 'Failed to delete gallery' });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id, imageUrl } = req.params; // Gallery ID and image URL to delete
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return res.status(404).json({ error: 'Gallery not found' });
    }

    // Check if the image exists in the gallery
    const decodedImageUrl = decodeURIComponent(imageUrl);
    if (!gallery.images.includes(decodedImageUrl)) {
      return res.status(404).json({ error: 'Image not found in gallery' });
    }

    // Remove the image URL from the images array
    gallery.images = gallery.images.filter((url) => url !== decodedImageUrl);
    await gallery.save();

    // Optionally delete the image from R2
    // try {
    //   await deleteFromR2(decodedImageUrl, 'travel'); // Adjust bucket name
    // } catch (r2Error) {
    //   console.error('Error deleting image from R2:', r2Error);
    //   // Continue despite R2 error to avoid blocking the response
    // }

    res.json({ message: 'Image deleted successfully', gallery });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
};

export default {
  createGallery,
  getAllGalleries,
  getGalleryById,
  updateGallery,
  deleteGallery,
  deleteImage
};