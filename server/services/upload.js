import TourPackage from '../models/TourPackage.js';

   // Function to save tour package with images to MongoDB
   async function saveTourPackage(files, tourData) {
       try {
           if (!files || files.length === 0) {
               throw new Error('No files provided');
           }
           

           // Convert images to base64 strings
           const imageUrls = files.map(file => file.buffer.toString('base64'));

           // Prepare tour package data
           const tourPackageData = {
               name: tourData.name,
               noOfDays: parseInt(tourData.noOfDays),
               noOfNights: parseInt(tourData.noOfNights),
               noOfPersons: parseInt(tourData.noOfPersons),
               tripSummary: JSON.parse(tourData.tripSummary),
               hotelsIncluded: JSON.parse(tourData.hotelsIncluded),
               packageDetails: {
                   included: JSON.parse(tourData.included),
                   excluded: JSON.parse(tourData.excluded),
               },
               imageUrls,
               destination: tourData.destination, // Assumes valid ObjectId
           };

           // Save to MongoDB
           const tourPackage = new TourPackage(tourPackageData);
           await tourPackage.save();

           return { message: `Successfully uploaded ${files.length} image(s) for tour package` };
       } catch (error) {
           console.error('Error saving tour package:', error);
           throw error;
       }
   }

   export default { saveTourPackage };