import slugify from 'slugify';
import Destination from '../models/Destination.js';
import TourPackage from '../models/TourPackage.js';
import Faq from '../models/Faq.js';
import Review from '../models/reviewModel.js';
import { uploadToR2 } from '../utils/r2Utils.js';

// Create a new destination
export const createDestination = async (req, res) => {
  try {
    // Extract destinationName and category from req.body
    const { destinationName, category, destinationData: customData } = req.body;

     let baseSlug = slugify(destinationName, {
          lower: true,
          strict: true, // Remove special characters
          remove: /[*+~.()'"!:@]/g, // Remove additional special characters
        });
    
        // Check for slug uniqueness
        let slug = baseSlug;
        let count = 1;
        while (await Destination.findOne({ slug })) {
          slug = `${baseSlug}-${count}`;
          count++;
        }

    // Check for main image file
    if (!req.files || !req.files.imageFile || !req.files.imageFile[0]) {
         return res.status(400).json({ error: 'No main image file uploaded' });
       }
   
       // Upload main destination image
       const mainImageBuffer = req.files.imageFile[0].buffer;
       const mainImageFileName = `images/${Date.now()}-${req.files.imageFile[0].originalname}`;
       const bucketName = 'travel'; // Replace with your R2 bucket name
   
       const mainImageResult = await uploadToR2(mainImageBuffer, mainImageFileName, bucketName);
       
       // Upload hero image if provided
       let heroImageUrl = mainImageResult.fileUrl; // Default to main image
       if (req.files.heroImageFile && req.files.heroImageFile[0]) {
         const heroImageBuffer = req.files.heroImageFile[0].buffer;
         const heroImageFileName = `images/${Date.now()}-hero-${req.files.heroImageFile[0].originalname}`;
         const heroImageResult = await uploadToR2(heroImageBuffer, heroImageFileName, bucketName);
         heroImageUrl = heroImageResult.fileUrl;
       }

    // Parse custom data if provided
    let parsedCustomData = {};
    if (customData) {
      try {
        parsedCustomData = typeof customData === 'string' ? JSON.parse(customData) : customData;
      } catch (err) {
        console.error('Error parsing custom data:', err);
      }
    }

    // Merge custom data with defaults
    const destinationData = { 
      destinationName, 
      imageUrl: mainImageResult.fileUrl, 
      slug,
      // Hero Section - use custom or defaults
      heroSection: {
        title: parsedCustomData.heroSection?.title || `${destinationName} Tour Packages`,
        tagline: parsedCustomData.heroSection?.tagline || `Discover the beauty of ${destinationName}`,
        startingPrice: parsedCustomData.heroSection?.startingPrice || 0,
        durationRange: parsedCustomData.heroSection?.durationRange || '5-7 Days',
        heroImage: heroImageUrl, // Use uploaded hero image or main image as fallback
      },
      // About Section - use custom or defaults
      aboutSection: {
        shortDescription: parsedCustomData.aboutSection?.shortDescription || `Explore amazing ${destinationName} with our carefully curated tour packages.`,
        expandedDescription: parsedCustomData.aboutSection?.expandedDescription || `${destinationName} offers unforgettable experiences for travelers. Book your dream vacation today!`,
      },
      // Arrays - use custom or empty
      subDestinations: parsedCustomData.subDestinations || [],
      activities: parsedCustomData.activities || [],
      groupTours: parsedCustomData.groupTours || [],
    };
    
    // Add category if provided, default to 'international'
    if (category) {
      destinationData.category = category;
    }
    
    const destination = new Destination(destinationData);
    await destination.save();

    res.status(201).json({ message: 'Destination created successfully', destination });
  } catch (error) {
    console.error('Error creating destination:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all destinations with their tour packages
export const getDestinations = async (req, res) => {
  try {
    const { category } = req.query; // Get category from query params
    
    // Build filter based on category
    // If category is specified, include destinations with that category OR no category (for backward compatibility)
    const filter = category ? { 
      $or: [
        { category: category },
        { category: { $exists: false } },
        { category: null }
      ]
    } : {};
    
    const destinations = await Destination.find(filter)
      .populate('tourPackages') // Populate to get actual package data
      .lean(); // Use lean for better performance
    
    // Sort tourPackages for each destination by createdAt (latest first) and include groupTours
    const sortedDestinations = destinations.map(destination => ({
      ...destination,
      tourPackages: (destination.tourPackages || []).sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      ),
      groupTours: destination.groupTours || [] // Ensure groupTours is always an array
    }));
    
    // Return array directly for backward compatibility with existing code
    res.json(sortedDestinations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single destination by ID with its tour packages
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id).populate('tourPackages');
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getDestinationByName = async (req, res) => {
  try {
    // console.log(req.body)
    const { name } = req.body;
    // Validate input
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Destination name is required and must be a string' });
    }

    // Convert input name to lowercase for case-insensitive search
    const destinationName = name.toLowerCase();

    // Use findOne with a case-insensitive regex to match the name
    const destination = await Destination.findOne({
      destinationName: new RegExp(`^${destinationName}$`, 'i'),
    }).populate('tourPackages');

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const updateDestination = async (req, res) => {
  try {
    const { id } = req.params;
    const { destinationName, category, destinationData: customData } = req.body;
    
    const existingDestination = await Destination.findById(id);

    if (!existingDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    // Handle image uploads
    let imageURL = existingDestination.imageUrl;
    let heroImageUrl = existingDestination.heroSection?.heroImage || existingDestination.imageUrl;

    if (req.files) {
      // Upload main image if provided
      if (req.files.imageFile && req.files.imageFile[0]) {
        const mainImageBuffer = req.files.imageFile[0].buffer;
        const mainImageFileName = `images/${Date.now()}-${req.files.imageFile[0].originalname}`;
        const bucketName = 'travel';
        const mainImageResult = await uploadToR2(mainImageBuffer, mainImageFileName, bucketName);
        imageURL = mainImageResult.fileUrl;
      }

      // Upload hero image if provided
      if (req.files.heroImageFile && req.files.heroImageFile[0]) {
        const heroImageBuffer = req.files.heroImageFile[0].buffer;
        const heroImageFileName = `images/${Date.now()}-hero-${req.files.heroImageFile[0].originalname}`;
        const heroImageResult = await uploadToR2(heroImageBuffer, heroImageFileName, 'travel');
        heroImageUrl = heroImageResult.fileUrl;
      }
    }

    // Parse custom data if provided
    let parsedCustomData = {};
    if (customData) {
      try {
        parsedCustomData = typeof customData === 'string' ? JSON.parse(customData) : customData;
      } catch (err) {
        console.error('Error parsing custom data:', err);
      }
    }

    // Build update object with all dynamic fields
    const updateData = {
      destinationName,
      imageUrl: imageURL,
      category: category || existingDestination.category,
      heroSection: {
        title: parsedCustomData.heroSection?.title || existingDestination.heroSection?.title || `${destinationName} Tour Packages`,
        tagline: parsedCustomData.heroSection?.tagline || existingDestination.heroSection?.tagline || `Discover ${destinationName}`,
        startingPrice: parsedCustomData.heroSection?.startingPrice ?? existingDestination.heroSection?.startingPrice ?? 0,
        durationRange: parsedCustomData.heroSection?.durationRange || existingDestination.heroSection?.durationRange || '5-7 Days',
        heroImage: heroImageUrl,
      },
      aboutSection: {
        shortDescription: parsedCustomData.aboutSection?.shortDescription || existingDestination.aboutSection?.shortDescription || '',
        expandedDescription: parsedCustomData.aboutSection?.expandedDescription || existingDestination.aboutSection?.expandedDescription || '',
      },
      subDestinations: parsedCustomData.subDestinations !== undefined ? parsedCustomData.subDestinations : existingDestination.subDestinations || [],
      activities: parsedCustomData.activities !== undefined ? parsedCustomData.activities : existingDestination.activities || [],
      groupTours: parsedCustomData.groupTours !== undefined ? parsedCustomData.groupTours : existingDestination.groupTours || [],
    };

    const updatedDestination = await Destination.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    res.status(200).json({ message: 'Destination updated successfully', destination: updatedDestination });
  } catch (error) {
    console.error('Error details:', error.message, error.stack);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;

    const destination = await Destination.findOne({ _id: id });
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    await Destination.findOneAndDelete({ _id: id });

    const deleteResult = await TourPackage.deleteMany({ destination: id });

    res.status(200).json({ 
      message: 'Destination and associated packages deleted successfully',
      deletedPackagesCount: deleteResult.deletedCount 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get complete destination page data by slug (for dynamic page rendering)
export const getDestinationPageData = async (req, res) => {
  try {
    const { slug } = req.params;

    // Find destination by slug
    const destination = await Destination.findOne({ slug })
      .populate('gallery');

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    // Fetch Tour Packages for this destination
    const tourPackages = await TourPackage.find({ destination: destination._id })
      .sort({ createdAt: -1 });

    // Fetch FAQs for this destination
    const faqs = await Faq.find({ destinationId: destination._id });

    // Fetch Reviews for this destination
    const reviews = await Review.find({ destinationId: destination._id })
      .sort({ createdAt: -1 })
      .limit(10);

    // Return complete page data in one response
    res.status(200).json({
      destination: {
        ...destination.toObject(),
        tourPackages, // Add packages array
        reviews // Add reviews to destination object
      },
      faqs,
      success: true
    });

  } catch (error) {
    console.error('Error fetching destination page data:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add a group tour to a destination
export const addGroupTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tourData = req.body;

    const destination = await Destination.findById(id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    destination.groupTours.push(tourData);
    await destination.save();

    res.status(201).json({ 
      message: 'Group tour added successfully', 
      destination 
    });
  } catch (error) {
    console.error('Error adding group tour:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a group tour
export const updateGroupTour = async (req, res) => {
  try {
    const { id, tourId } = req.params;
    const tourData = req.body;

    const destination = await Destination.findById(id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    const tourIndex = destination.groupTours.findIndex(
      tour => tour._id.toString() === tourId
    );

    if (tourIndex === -1) {
      return res.status(404).json({ message: 'Group tour not found' });
    }

    // Update the tour
    destination.groupTours[tourIndex] = {
      ...destination.groupTours[tourIndex].toObject(),
      ...tourData
    };

    await destination.save();

    res.json({ 
      message: 'Group tour updated successfully', 
      destination 
    });
  } catch (error) {
    console.error('Error updating group tour:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a group tour
export const deleteGroupTour = async (req, res) => {
  try {
    const { id, tourId } = req.params;

    const destination = await Destination.findById(id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    destination.groupTours = destination.groupTours.filter(
      tour => tour._id.toString() !== tourId
    );

    await destination.save();

    res.json({ 
      message: 'Group tour deleted successfully', 
      destination 
    });
  } catch (error) {
    console.error('Error deleting group tour:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export default { 
  createDestination, 
  getDestinationByName,
  getDestinations, 
  getDestinationById,
  updateDestination,
  deleteDestination,
  getDestinationPageData,
  addGroupTour,
  updateGroupTour,
  deleteGroupTour
};
