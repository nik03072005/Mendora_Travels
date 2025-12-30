import express from 'express';
import TourPackage from '../models/TourPackage.js';
import Destination from '../models/Destination.js';

const router = express.Router();

router.get('/search', async (req, res) => {
  const { keyword, minDays, maxDays, page = 1, limit = 10 } = req.query;

  try {
    // Escape regex special characters
    const escapedKeyword = keyword ? keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const skip = (pageNum - 1) * limitNum;

    // Prefix Search Pipeline for TourPackages
    const packagePrefixPipeline = [
      {
        $lookup: {
          from: 'destinations',
          localField: 'destination',
          foreignField: '_id',
          as: 'destinationDetails'
        }
      },
      { $unwind: '$destinationDetails' },
      {
        $match: {
          $or: [
            { name: { $regex: `^${escapedKeyword}`, $options: 'i' } },
            { 'destinationDetails.destinationName': { $regex: `^${escapedKeyword}`, $options: 'i' } }
          ],
          ...(minDays && maxDays ? { noOfDays: { $gte: Number(minDays), $lte: Number(maxDays) } } : {})
        }
      },
      { $sort: { discountedPrice: 1 } },
      {
        $project: {
          type: 'package',
          name: 1,
          originalPrice: 1,
          discountedPrice: 1,
          noOfDays: 1,
          noOfNights: 1,
          destinationName: '$destinationDetails.destinationName',
          image: { $arrayElemAt: ['$imageUrls', 0] },
          score: 0.5,
          searchType: 'prefix'
        }
      }
    ];

    // Fuzzy Search Pipeline for TourPackages (only for keywords >= 3 chars)
    const packageFuzzyPipeline = keyword && keyword.length >= 3 ? [
      {
        $lookup: {
          from: 'destinations',
          localField: 'destination',
          foreignField: '_id',
          as: 'destinationDetails'
        }
      },
      { $unwind: '$destinationDetails' },
      {
        $match: {
          $or: [
            { name: { $regex: escapedKeyword, $options: 'i' } },
            { 'destinationDetails.destinationName': { $regex: escapedKeyword, $options: 'i' } }
          ],
          ...(minDays && maxDays ? { noOfDays: { $gte: Number(minDays), $lte: Number(maxDays) } } : {})
        }
      },
      { $sort: { discountedPrice: 1 } },
      {
        $project: {
          type: 'package',
          name: 1,
          originalPrice: 1,
          discountedPrice: 1,
          noOfDays: 1,
          noOfNights: 1,
          destinationName: '$destinationDetails.destinationName',
          image: { $arrayElemAt: ['$imageUrls', 0] },
          score: 0.2,
          searchType: 'fuzzy'
        }
      }
    ] : [];

    // Prefix Search Pipeline for Destinations
    const destinationPrefixPipeline = [
      {
        $match: {
          destinationName: { $regex: `^${escapedKeyword}`, $options: 'i' }
        }
      },
      { $sort: { destinationName: 1 } },
      {
        $project: {
          type: 'destination',
          destinationName: 1,
          image: '$imageUrl',
          score: 0.5,
          searchType: 'prefix'
        }
      }
    ];

    // Fuzzy Search Pipeline for Destinations (only for keywords >= 3 chars)
    const destinationFuzzyPipeline = keyword && keyword.length >= 3 ? [
      {
        $match: {
          destinationName: { $regex: escapedKeyword, $options: 'i' }
        }
      },
      { $sort: { destinationName: 1 } },
      {
        $project: {
          type: 'destination',
          destinationName: 1,
          image: '$imageUrl',
          score: 0.2,
          searchType: 'fuzzy'
        }
      }
    ] : [];

    // Execute all pipelines
    const [packagesPrefix, packagesFuzzy, destinationsPrefix, destinationsFuzzy] = await Promise.all([
      TourPackage.aggregate(packagePrefixPipeline),
      keyword && keyword.length >= 3 ? TourPackage.aggregate(packageFuzzyPipeline) : Promise.resolve([]),
      Destination.aggregate(destinationPrefixPipeline),
      keyword && keyword.length >= 3 ? Destination.aggregate(destinationFuzzyPipeline) : Promise.resolve([])
    ]);

    // Combine and deduplicate results
    const allResults = [
      ...packagesPrefix,
      ...packagesFuzzy,
      ...destinationsPrefix,
      ...destinationsFuzzy
    ];

    // Deduplicate by _id
    const seenIds = new Set();
    const uniqueResults = allResults.filter(result => {
      const id = result._id ? result._id.toString() : `${result.type}-${result.name || result.destinationName}`;
      if (seenIds.has(id)) return false;
      seenIds.add(id);
      return true;
    });

    // Sort by score (prefix > fuzzy) and apply pagination
    const sortedResults = uniqueResults
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(skip, skip + limitNum);

    res.json({ results: sortedResults, total: uniqueResults.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;