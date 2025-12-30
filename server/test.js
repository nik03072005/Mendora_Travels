import mongoose from 'mongoose';
import slugify from 'slugify';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error:', err);
});

// Reference the Destination model
const Destination = mongoose.model('Destination', new mongoose.Schema({
  destinationName: String,
  imageUrl: String,
  tourPackages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TourPackage' }],
  gallery: { type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  slug: { type: String, unique: true, trim: true },
}));

// Migration function to add slugs
async function migrateSlugs() {
  try {
    const destinations = await Destination.find({ slug: { $exists: false } });
    console.log(`Found ${destinations.length} documents to migrate`);

    for (const destination of destinations) {
      let baseSlug = slugify(destination.destinationName, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });

      let slug = baseSlug;
      let count = 1;
      while (await Destination.findOne({ slug })) {
        slug = `${baseSlug}-${count}`;
        count++;
      }

      destination.slug = slug;
      await destination.save();
      console.log(`Updated slug for ${destination.destinationName}: ${slug}`);
    }

    console.log('Migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrateSlugs();