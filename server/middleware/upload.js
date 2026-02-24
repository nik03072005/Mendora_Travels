import multer from 'multer';

// 🎯 Production-Ready File Upload Configuration
// Uses in-memory storage for direct cloud upload
const storage = multer.memoryStorage();

// 🛡️ File validation
const fileFilter = (req, file, cb) => {
  // Only allow image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed (jpg, jpeg, png, gif, webp)'), false);
  }
};

// 📦 Multer configuration with limits
const uploadConfig = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB per file
    files: 60 // Max 60 files (10 package images + 50 day images)
  }
});

// 🎯 Upload middleware for tour packages
// Handles both package images and day-wise itinerary images
export const uploadTourPackageImages = uploadConfig.fields([
  { name: 'imageFiles', maxCount: 10 },  // Main package images
  { name: 'dayImages', maxCount: 50 }    // Day-wise itinerary images
]);

// 🎯 Export for other potential uses
export default uploadConfig;
