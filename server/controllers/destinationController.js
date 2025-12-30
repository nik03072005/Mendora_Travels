import slugify from 'slugify';
import Destination from '../models/Destination.js';
import TourPackage from '../models/TourPackage.js';
import { uploadToR2 } from '../utils/r2Utils.js';

// Create a new destination
export const createDestination = async (req, res) => {
  try {
    // Extract destinationName from req.body
  //  console.log(req.body.destinationName)
    const destinationName=req.body.destinationName;
    console.log(destinationName,"io")

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

    if (!req.file) {
         return res.status(400).json({ error: 'No file uploaded' });
       }
   
       const fileBuffer = req.file.buffer;
       const fileName = `images/${Date.now()}-${req.file.originalname}`; // e.g., 'images/1698765432100-my-image.jpg'
       const bucketName = 'travel'; // Replace with your R2 bucket name
   
       const result = await uploadToR2(fileBuffer, fileName, bucketName);

    // Create and save the destination with the uploaded image URL
    const destination = new Destination({ destinationName, imageUrl: result.fileUrl,slug });
    await destination.save();
    console.log("first")

    res.status(201).json({ message: 'Destination created successfully', destination });
  } catch (error) {
    console.error('Error creating destination:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all destinations with their tour packages
export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().populate('tourPackages');
    // Sort tourPackages for each destination by createdAt (latest first)
    const sortedDestinations = destinations.map(destination => ({
      ...destination._doc, // Spread destination document
      tourPackages: destination.tourPackages.sort((a, b) => b.createdAt - a.createdAt)
    }));
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
    console.log(name)
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
     
     

    const { destinationName } = req.body;
    const existingDestination = await Destination.findById(id);

    if (!existingDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    let imageURL = existingDestination.imageUrl;

    if (req.file) {
    
      const fileBuffer = req.file.buffer;
      const fileName = `images/${Date.now()}-${req.file.originalname}`;
      const bucketName = 'travel';
      const result = await uploadToR2(fileBuffer, fileName, bucketName);
    
      imageURL = result.fileUrl;
    }

   
    const updatedDestination = await Destination.findOneAndUpdate(
      { _id: id },
      { $set: { destinationName, imageUrl: imageURL } }, // Ensure field name matches schema
      { new: true, runValidators: true }
    );

    if (!updatedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

     
    res.status(200).json(updatedDestination);
  } catch (error) {
    console.error('Error details:', error.message, error.stack);
    res.status(500).json({ message: 'Server error' });
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

export default { createDestination, getDestinationByName,getDestinations, getDestinationById,updateDestination,deleteDestination };
