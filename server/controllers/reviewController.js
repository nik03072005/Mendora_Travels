import Review from '../models/reviewModel.js';
import Destination from '../models/Destination.js'; // Assuming this is the path to your Destination model
import TourPackage from '../models/TourPackage.js'; // Assuming this is the path to your TourPackage model
import mongoose from 'mongoose';
import { uploadToR2 } from '../utils/r2Utils.js'; // Assuming you have a utility file for R2 uploads

// Create a new review with multiple image uploads and update Destination and TourPackage
export const createReview = async (req, res) => {
  try {
    const { name, comment, destinationId, packageId } = req.body;

    // Validate required fields
    if (!name || !comment || !destinationId || !packageId) {
      return res.status(400).json({ error: 'Name, comment, destinationId, and packageId are required' });
    }

    // Validate ObjectIds
    if (!mongoose.Types.ObjectId.isValid(destinationId) || !mongoose.Types.ObjectId.isValid(packageId)) {
      return res.status(400).json({ error: 'Invalid destinationId or packageId' });
    }

    // Check if Destination and TourPackage exist
    const destination = await Destination.findById(destinationId);
    const tourPackage = await TourPackage.findById(packageId);
    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    if (!tourPackage) {
      return res.status(404).json({ error: 'TourPackage not found' });
    }

    // Handle multiple image uploads
    const images = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const fileBuffer = file.buffer;
        const fileName = `images/${Date.now()}-${file.originalname}`;
        const bucketName = 'travel';

        const result = await uploadToR2(fileBuffer, fileName, bucketName);
        images.push(result.fileUrl);
      }
    }

    // Create new review
    const review = new Review({
      name,
      comment,
      destinationId,
      packageId,
      images
    });

    // Save review
    await review.save();

    // Update Destination and TourPackage with review ID
    await Destination.findByIdAndUpdate(
      destinationId,
      { $addToSet: { reviews: review._id } }
    );

    await TourPackage.findByIdAndUpdate(
      packageId,
      { $addToSet: { reviews: review._id } }
    );

    return res.status(201).json({ message: 'Review created successfully', review });
  } catch (error) {
    console.error('Error creating review:', error);
    return res.status(500).json({ error: 'Server error while creating review' });
  }
};

// Get reviews by destinationId
export const getReviewsByDestination = async (req, res) => {
  try {
    const { destinationId } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(destinationId)) {
      return res.status(400).json({ error: 'Invalid destinationId' });
    }

    // Check if Destination exists
    console.log(destinationId);
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }

    const reviews = await Review.find({ destinationId })
      .populate('destinationId', 'destinationName')
      .populate('packageId', 'name');

    return res.status(200).json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews by destination:', error);
    return res.status(500).json({ error: 'Server error while fetching reviews' });
  }
};

// Get reviews by packageId
export const getReviewsByPackage = async (req, res) => {
  try {
    const { packageId } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(packageId)) {
      return res.status(400).json({ error: 'Invalid packageId' });
    }

    // Check if TourPackage exists
    const tourPackage = await TourPackage.findById(packageId);
    if (!tourPackage) {
      return res.status(404).json({ error: 'TourPackage not found' });
    }

    const reviews = await Review.find({ packageId })
      .populate('destinationId', 'destinationName')
      .populate('packageId', 'name');

    return res.status(200).json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews by package:', error);
    return res.status(500).json({ error: 'Server error while fetching reviews' });
  }
};

// Update a review by ID
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, comment, destinationId, packageId } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    // Validate optional ObjectIds
    if (destinationId && !mongoose.Types.ObjectId.isValid(destinationId)) {
      return res.status(400).json({ error: 'Invalid destinationId' });
    }
    if (packageId && !mongoose.Types.ObjectId.isValid(packageId)) {
      return res.status(400).json({ error: 'Invalid packageId' });
    }

    // Handle image uploads (replace existing images if provided)
    let images = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const fileBuffer = file.buffer;
        const fileName = `images/${Date.now()}-${file.originalname}`;
        const bucketName = 'travel';

        const result = await uploadToR2(fileBuffer, fileName, bucketName);
        images.push(result.fileUrl);
      }
    }

    // Prepare update object
    const updateData = { name, comment };
    if (destinationId) updateData.destinationId = destinationId;
    if (packageId) updateData.packageId = packageId;
    if (images.length > 0) updateData.images = images;

    const review = await Review.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    return res.status(200).json({ message: 'Review updated successfully', review });
  } catch (error) {
    console.error('Error updating review:', error);
    return res.status(500).json({ error: 'Server error while updating review' });
  }
};

// Delete a review by ID
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    // Find the review to get associated destinationId and packageId
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Delete the review
    await Review.findByIdAndDelete(id);

    // Remove review ID from TourPackage's reviews array (if packageId exists)
    if (review.packageId) {
      await TourPackage.findByIdAndUpdate(
        review.packageId,
        { $pull: { reviews: id } },
        { new: true }
      );
    }

    // Remove review ID from Destination's reviews array
    await Destination.findByIdAndUpdate(
      review.destinationId,
      { $pull: { reviews: id } },
      { new: true }
    );

    return res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    return res.status(500).json({ error: 'Server error while deleting review' });
  }
};

export default {
  createReview,
  getReviewsByDestination,
  getReviewsByPackage,
  updateReview,
  deleteReview,
};