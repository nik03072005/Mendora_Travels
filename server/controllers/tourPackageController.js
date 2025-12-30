import slugify from 'slugify';
import Destination from '../models/Destination.js'; // Update to ES modules
import TourPackage from '../models/TourPackage.js'; // Update to ES modules // Update to ES modules
import uploadToR2 from '../utils/r2Utils.js';

export const createTourPackage = async (req, res) => {
  try {
    // Extract fields from req.body, parsing JSON strings where necessary
    const {
      name,
      noOfDays,
      noOfNights,
      originalPrice,
      discountedPrice,
      tripSummary,
      highlights,
      hotelsIncluded,
      packageDetails,
      destinationId,
    } = req.body;

    // Parse JSON-stringified fields
    const parsedTripSummary = JSON.parse(tripSummary);
    const parsedHighlights = JSON.parse(highlights);
    const parsedHotelsIncluded = JSON.parse(hotelsIncluded);
    const parsedPackageDetails = JSON.parse(packageDetails);

    // Verify destination exists
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    // Handle package image uploads
    const imageFiles = req.files.imageFiles || []; // Assumes multer middleware with field name 'imageFiles'
    if (!imageFiles || imageFiles.length === 0) {
      return res.status(400).json({ message: 'No package image files uploaded' });
    }

    // Upload package images to Cloudflare R2 and collect URLs
    const bucketName = 'travel'; // Your R2 bucket name
    const imageUrls = [];
    for (const file of Array.isArray(imageFiles) ? imageFiles : [imageFiles]) {
      const fileBuffer = file.buffer;
      const fileName = `images/${Date.now()}-${file.originalname}`;
      const result = await uploadToR2(fileBuffer, fileName, bucketName);
      imageUrls.push(result.fileUrl); // Assuming uploadToR2 returns an object with a 'fileUrl' property
    }

    // Handle dayImage uploads for tripSummary
    const dayImages = req.files.dayImages || []; // Assumes multer middleware with field name 'dayImages'
    const tripSummaryWithImages = await Promise.all(
      parsedTripSummary.map(async (day, index) => {
        if (dayImages[index]) {
          const file = Array.isArray(dayImages) ? dayImages[index] : dayImages;
          const fileBuffer = file.buffer;
          const fileName = `images/${Date.now()}-${file.originalname}`;
          const result = await uploadToR2(fileBuffer, fileName, bucketName);
          return { ...day, dayImage: result.fileUrl };
        }
        return { ...day, dayImage: null }; // If no image for this day
      })
    );

     let baseSlug = slugify(name, {
          lower: true,
          strict: true, // Remove special characters
          remove: /[*+~.()'"!:@]/g, // Remove additional special characters
        });
    
        // Check for slug uniqueness
        let slug = baseSlug;
        let count = 1;
        while (await TourPackage.findOne({ slug })) {
          slug = `${baseSlug}-${count}`;
          count++;
        }

    // Create new tour package
    const tourPackage = new TourPackage({
      name,
      noOfDays,
      noOfNights,
      originalPrice,
      slug,
      discountedPrice,
      tripSummary: tripSummaryWithImages,
      highlights: parsedHighlights,
      hotelsIncluded: parsedHotelsIncluded,
      packageDetails: parsedPackageDetails,
      imageUrls,
      destination: destinationId,
    });
    await tourPackage.save();

    // Add tour package to destination's tourPackages array
    destination.tourPackages.push(tourPackage._id);
    await destination.save();

    res.status(201).json({ message: 'Tour package created successfully', tourPackage });
  } catch (error) {
    console.error('Error creating tour package:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Export other functions (ensure these are defined)
export const getTourPackagesByDestination = async (req, res) => {
  try {
    const { destinationId } = req.params;

     let destination=destinationId;
    // console.log(destination,"op")
    // Assuming you have a TourPackage model
    const tourPackages = await TourPackage.find({ destination });

    if (!tourPackages || tourPackages.length === 0) {
      return res.status(404).json({ message: "No tour packages found for this destination" });
    }

    // Format the response to match the frontend's expectations
    const formattedPackages = tourPackages.map((pkg) => ({
      Id: pkg._id,
      name: pkg.name,
      noOfNights: pkg.noOfNights,
      noOfDays: pkg.noOfDays,
      originalPrice: pkg.originalPrice || 0,
      discountedPrice: pkg.discountedPrice || 0,
      imageUrls: pkg.imageUrls || [],
    }));

    res.status(200).json(formattedPackages);
  } catch (error) {
    console.error("Error fetching tour packages by destination ID:", error.message);
    res.status(500).json({ message: "Server error while fetching tour packages" });
  }
};

export const getTourPackageById = async (req, res) => {
  try {
    // Extract the ID from request parameters
    const { id } = req.params;

    // Validate ID format (assuming MongoDB ObjectId)
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid tour package ID format'
      });
    }

    // Find tour package by ID
    const tourPackage = await TourPackage.findById(id);

    // Check if tour package exists
    if (!tourPackage) {
      return res.status(404).json({
        success: false,
        message: 'Tour package not found'
      });
    }

    // Return the tour package
    res.status(200).json({
      success: true,
      data: tourPackage
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      success: false,
      message: 'Server error while fetching tour package',
      error: error.message
    });
  }
};

export const getTourPackageBySlug = async (req, res) => {
  try {
    // Extract the slug from request parameters
    const { slug } = req.params;
    console.log(slug,"c")

    // Validate slug (basic check for non-empty and string format)
    if (!slug) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing slug'
      });
    }

    // Find tour package by slug
    const tourPackage = await TourPackage.findOne({ slug});

    // Check if tour package exists
    if (!tourPackage) {
      return res.status(404).json({
        success: false,
        message: 'Tour package not found'
      });
    }

    // Return the tour package
    res.status(200).json({
      success: true,
      data: tourPackage
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      success: false,
      message: 'Server error while fetching tour package',
      error: error.message
    });
  }
};

export const deleteTourPackageById = async (req, res) => {
  try {
    // Extract the ID from request parameters
    const { id } = req.params;

    // Validate ID format (assuming MongoDB ObjectId)
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid tour package ID format'
      });
    }

    // Find the tour package by ID
    const tourPackage = await TourPackage.findById(id);

    // Check if tour package exists
    if (!tourPackage) {
      return res.status(404).json({
        success: false,
        message: 'Tour package not found'
      });
    }

    // Remove the tour package ID from the referenced Destination
    if (tourPackage.destination) {
      await Destination.findByIdAndUpdate(
        tourPackage.destination,
        { $pull: { tourPackages: id } },
        { new: true }
      );
    }

    // Delete the tour package
    await TourPackage.findByIdAndDelete(id);

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Tour package deleted successfully'
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      success: false,
      message: 'Server error while deleting tour package',
      error: error.message
    });
  }
};

export const updateTourPackage = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format (MongoDB ObjectId)
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid tour package ID format',
      });
    }

    // Find the existing tour package
    const existingPackage = await TourPackage.findById(id);
    if (!existingPackage) {
      return res.status(404).json({
        success: false,
        message: 'Tour package not found',
      });
    }

    // Extract form data
    const {
      name,
      noOfDays,
      noOfNights,
      originalPrice,
      discountedPrice,
      destinationId,
      tripSummary,
      highlights,
      hotelsIncluded,
      packageDetails,
      existingImageUrls,
    } = req.body;

    // Parse JSON fields if strings
    const parsedTripSummary = typeof tripSummary === 'string' ? JSON.parse(tripSummary) : tripSummary;
    const parsedHighlights = typeof highlights === 'string' ? JSON.parse(highlights) : highlights;
    const parsedHotelsIncluded = typeof hotelsIncluded === 'string' ? JSON.parse(hotelsIncluded) : hotelsIncluded;
    const parsedPackageDetails = typeof packageDetails === 'string' ? JSON.parse(packageDetails) : packageDetails;

    // Handle existingImageUrls
    let parsedExistingImageUrls = [];
    if (existingImageUrls) {
      parsedExistingImageUrls = Array.isArray(existingImageUrls)
        ? existingImageUrls
        : existingImageUrls.includes(',')
        ? existingImageUrls.split(',').map((url) => url.trim())
        : [existingImageUrls.trim()];
    }

    // Validate required fields
    if (!name || !noOfDays || !noOfNights || !originalPrice || !discountedPrice || !destinationId) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided',
      });
    }

    // Validate destinationId
    if (!destinationId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid destination ID format',
      });
    }

    // Check if destination exists
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found',
      });
    }

    const bucketName = 'travel';

    // Handle package image uploads
    let imageUrls = [...parsedExistingImageUrls];
    const imageFiles = req.files.imageFiles || [];
    if (imageFiles.length > 0) {
      const newImageUrls = [];
      for (const file of Array.isArray(imageFiles) ? imageFiles : [imageFiles]) {
        const fileBuffer = file.buffer;
        const fileName = `images/${Date.now()}-${file.originalname}`;
        const result = await uploadToR2(fileBuffer, fileName, bucketName);
        newImageUrls.push(result.fileUrl);
      }
      imageUrls = [...imageUrls, ...newImageUrls];
    }

    // Handle dayImage uploads for tripSummary
    const dayImages = req.files.dayImages || [];
    const tripSummaryWithImages = await Promise.all(
      parsedTripSummary.map(async (day, index) => {
        const file = Array.isArray(dayImages) ? dayImages[index] : dayImages;
        if (file) {
          const fileBuffer = file.buffer;
          const fileName = `images/${Date.now()}-${file.originalname}`;
          const result = await uploadToR2(fileBuffer, fileName, bucketName);
          return { ...day, dayImage: result.fileUrl };
        }
        // Preserve existing dayImage from database or form data
        const existingDay = existingPackage.tripSummary[index] || {};
        return { ...day, dayImage: day.dayImage || existingDay.dayImage || null };
      })
    );

    // Prepare updated package data
    const updatedData = {
      name,
      noOfDays: parseInt(noOfDays),
      noOfNights: parseInt(noOfNights),
      originalPrice: parseFloat(originalPrice),
      discountedPrice: parseFloat(discountedPrice),
      tripSummary: tripSummaryWithImages,
      highlights: parsedHighlights,
      hotelsIncluded: parsedHotelsIncluded,
      packageDetails: parsedPackageDetails,
      imageUrls,
      destination: destinationId,
    };

    // Update destination references if changed
    if (existingPackage.destination.toString() !== destinationId) {
      await Destination.findByIdAndUpdate(existingPackage.destination, { $pull: { tourPackages: id } });
      await Destination.findByIdAndUpdate(destinationId, { $addToSet: { tourPackages: id } });
    }

    // Update the tour package
    const updatedPackage = await TourPackage.findByIdAndUpdate(id, { $set: updatedData }, { new: true });

    res.status(200).json({
      success: true,
      message: 'Tour package updated successfully',
      data: updatedPackage,
    });
  } catch (error) {
    console.error('Error updating tour package:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating tour package',
      error: error.message,
    });
  }
};



// Default export as an object containing all functions
export default {
  createTourPackage,
  getTourPackagesByDestination,
  getTourPackageById,
  deleteTourPackageById,
  updateTourPackage,
  getTourPackageBySlug

};