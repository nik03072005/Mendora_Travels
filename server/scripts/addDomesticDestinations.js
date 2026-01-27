import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Destination from '../models/Destination.js';
import slugify from 'slugify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const domesticDestinations = [
  {
    destinationName: 'Goa',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80',
    category: 'domestic',
    heroSection: {
      title: 'Goa Tour Packages',
      tagline: 'Sun, Sand & Sea Paradise',
      startingPrice: 8999,
      durationRange: '3-5 Days',
      heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80'
    },
    aboutSection: {
      shortDescription: 'Goa, India\'s beach paradise, offers pristine beaches, Portuguese heritage, vibrant nightlife, and delicious seafood cuisine.',
      expandedDescription: 'Goa is the ultimate beach destination in India, known for its golden sandy beaches, Portuguese colonial architecture, vibrant nightlife, water sports, and laid-back atmosphere. From North Goa\'s party scene to South Goa\'s peaceful shores, experience beach shacks, seafood, churches, forts, and tropical beauty.'
    },
    subDestinations: [
      { name: 'North Goa', country: 'India', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', packagesCount: 5 },
      { name: 'South Goa', country: 'India', image: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=800&q=80', packagesCount: 4 },
      { name: 'Panjim', country: 'India', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80', packagesCount: 3 }
    ],
    activities: [
      { title: 'Beach Water Sports', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', location: 'Calangute Beach' },
      { title: 'Fort Exploring', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80', location: 'Aguada Fort' },
      { title: 'Church Visit', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80', location: 'Basilica of Bom Jesus' }
    ]
  },
  {
    destinationName: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80',
    category: 'domestic',
    heroSection: {
      title: 'Kerala Tour Packages',
      tagline: 'God\'s Own Country',
      startingPrice: 12999,
      durationRange: '5-7 Days',
      heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80'
    },
    aboutSection: {
      shortDescription: 'Kerala, known as God\'s Own Country, features serene backwaters, lush hill stations, exotic wildlife, and Ayurvedic wellness.',
      expandedDescription: 'Kerala offers an enchanting mix of backwater cruises, hill station retreats, wildlife sanctuaries, and pristine beaches. Experience houseboat stays in Alleppey, tea plantations in Munnar, wildlife in Thekkady, and cultural performances in Kochi. Kerala is also renowned for its Ayurvedic treatments and delicious cuisine.'
    },
    subDestinations: [
      { name: 'Munnar', country: 'India', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', packagesCount: 6 },
      { name: 'Alleppey', country: 'India', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', packagesCount: 5 },
      { name: 'Kochi', country: 'India', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', packagesCount: 4 },
      { name: 'Thekkady', country: 'India', image: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?w=800&q=80', packagesCount: 3 }
    ],
    activities: [
      { title: 'Houseboat Cruise', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', location: 'Alleppey Backwaters' },
      { title: 'Tea Plantation Tour', image: 'https://images.unsplash.com/photo-1564193975-741d8c9f7e2a?w=800&q=80', location: 'Munnar' },
      { title: 'Wildlife Safari', image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&q=80', location: 'Periyar Wildlife Sanctuary' }
    ]
  },
  {
    destinationName: 'Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&q=80',
    category: 'domestic',
    heroSection: {
      title: 'Rajasthan Tour Packages',
      tagline: 'Land of Kings & Palaces',
      startingPrice: 15999,
      durationRange: '6-8 Days',
      heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&q=80'
    },
    aboutSection: {
      shortDescription: 'Rajasthan showcases majestic forts, opulent palaces, colorful culture, desert safaris, and rich royal heritage.',
      expandedDescription: 'Rajasthan, the Land of Kings, is famous for its magnificent forts, grand palaces, vibrant culture, and Thar Desert adventures. Explore Jaipur\'s Pink City, Udaipur\'s romantic lakes, Jodhpur\'s Blue City, Jaisalmer\'s golden sands, and experience camel safaris, folk dances, and royal hospitality.'
    },
    subDestinations: [
      { name: 'Jaipur', country: 'India', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80', packagesCount: 8 },
      { name: 'Udaipur', country: 'India', image: 'https://images.unsplash.com/photo-1608044977595-e8172e3f4d9a?w=800&q=80', packagesCount: 7 },
      { name: 'Jaisalmer', country: 'India', image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80', packagesCount: 6 },
      { name: 'Jodhpur', country: 'India', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', packagesCount: 5 }
    ],
    activities: [
      { title: 'Desert Safari', image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80', location: 'Jaisalmer' },
      { title: 'Palace Tour', image: 'https://images.unsplash.com/photo-1608044977595-e8172e3f4d9a?w=800&q=80', location: 'City Palace, Udaipur' },
      { title: 'Fort Exploration', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', location: 'Mehrangarh Fort' }
    ]
  },
  {
    destinationName: 'Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80',
    category: 'domestic',
    heroSection: {
      title: 'Himachal Pradesh Tour Packages',
      tagline: 'Land of Snow & Adventure',
      startingPrice: 11999,
      durationRange: '5-7 Days',
      heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80'
    },
    aboutSection: {
      shortDescription: 'Himachal Pradesh offers snow-capped mountains, scenic valleys, adventure sports, ancient temples, and colonial hill stations.',
      expandedDescription: 'Himachal Pradesh, nestled in the western Himalayas, is perfect for nature lovers and adventure seekers. Experience the charm of Shimla and Manali, trek in the Himalayas, visit Buddhist monasteries, enjoy river rafting, skiing, and paragliding while surrounded by stunning mountain vistas.'
    },
    subDestinations: [
      { name: 'Manali', country: 'India', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', packagesCount: 10 },
      { name: 'Shimla', country: 'India', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80', packagesCount: 8 },
      { name: 'Dharamshala', country: 'India', image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=800&q=80', packagesCount: 6 },
      { name: 'Kullu', country: 'India', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80', packagesCount: 5 }
    ],
    activities: [
      { title: 'Paragliding', image: 'https://images.unsplash.com/photo-1509087859087-a384654eca4d?w=800&q=80', location: 'Bir Billing' },
      { title: 'Trekking', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80', location: 'Triund' },
      { title: 'River Rafting', image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80', location: 'Kullu' }
    ]
  },
  {
    destinationName: 'Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80',
    category: 'domestic',
    heroSection: {
      title: 'Uttarakhand Tour Packages',
      tagline: 'Land of Gods & Spirituality',
      startingPrice: 13999,
      durationRange: '5-7 Days',
      heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80'
    },
    aboutSection: {
      shortDescription: 'Uttarakhand features sacred temples, yoga capital Rishikesh, hill stations, national parks, and Himalayan adventures.',
      expandedDescription: 'Uttarakhand, known as Devbhoomi (Land of Gods), offers spiritual experiences at Haridwar and Rishikesh, adventure activities like river rafting and trekking, wildlife safaris in Jim Corbett, and serene hill stations like Nainital and Mussoorie. Perfect blend of spirituality, nature, and adventure.'
    },
    subDestinations: [
      { name: 'Rishikesh', country: 'India', image: 'https://images.unsplash.com/photo-1626264962568-66a1e1a83c7b?w=800&q=80', packagesCount: 8 },
      { name: 'Nainital', country: 'India', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80', packagesCount: 6 },
      { name: 'Mussoorie', country: 'India', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80', packagesCount: 5 },
      { name: 'Jim Corbett', country: 'India', image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&q=80', packagesCount: 4 }
    ],
    activities: [
      { title: 'Yoga & Meditation', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', location: 'Rishikesh' },
      { title: 'River Rafting', image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80', location: 'Rishikesh' },
      { title: 'Wildlife Safari', image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&q=80', location: 'Jim Corbett National Park' }
    ]
  }
];

async function addDomesticDestinations() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    for (const destData of domesticDestinations) {
      // Generate slug
      let baseSlug = slugify(destData.destinationName, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
      });

      // Check for existing destination
      const existing = await Destination.findOne({ 
        $or: [
          { destinationName: destData.destinationName },
          { slug: baseSlug }
        ]
      });

      if (existing) {
        console.log(`⚠️  ${destData.destinationName} already exists, skipping...`);
        continue;
      }

      // Create destination with unique slug
      let slug = baseSlug;
      let count = 1;
      while (await Destination.findOne({ slug })) {
        slug = `${baseSlug}-${count}`;
        count++;
      }

      const destination = new Destination({
        ...destData,
        slug
      });

      await destination.save();
      console.log(`✅ Added ${destData.destinationName} - Access at /domestic-trips/${slug}`);
    }

    console.log('\n🎉 All domestic destinations added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding destinations:', error);
    process.exit(1);
  }
}

addDomesticDestinations();
