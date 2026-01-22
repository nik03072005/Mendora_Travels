# Template for Converting Remaining Destination Pages

This template helps you quickly convert the remaining 18 destination pages to dynamic API-driven pages.

## Quick Conversion Process

### 1. Create Migration Script for Each Destination

Copy `server/scripts/migrateThailandData.js` and modify the data:

```javascript
// Example: server/scripts/migrateRajasthanData.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';
import Faq from '../models/Faq.js';

dotenv.config();

const rajasthanData = {
  destinationName: 'Rajasthan',
  slug: 'rajasthan',
  imageUrl: 'YOUR_IMAGE_URL',
  category: 'domestic',  // ← Change to 'domestic' for Indian destinations
  type: 'state',         // ← Change to 'state' for Indian states
  isActive: true,
  
  heroSection: {
    title: 'Rajasthan Tour Packages',  // ← Update
    tagline: 'Land of Kings and Colors',  // ← Update
    startingPrice: 29999,  // ← Update
    durationRange: '4-8 Days',  // ← Update
    heroImage: 'YOUR_HERO_IMAGE_URL'
  },
  
  aboutSection: {
    shortDescription: 'YOUR_SHORT_DESCRIPTION',  // ← Copy from page
    expandedDescription: 'YOUR_FULL_DESCRIPTION'  // ← Copy from page
  },
  
  subDestinations: [
    // ← Copy cities from page (lines 113-157)
    {
      name: 'Jaipur',
      country: 'Rajasthan',
      image: 'IMAGE_URL',
      packagesCount: 15
    }
    // ... more cities
  ],
  
  activities: [
    // ← Copy activities from page (lines 86-112)
    {
      title: 'Activity Name',
      image: 'IMAGE_URL',
      location: 'Location'
    }
    // ... more activities
  ],
  
  groupTours: [
    // ← Copy group tours from page (lines 16-22)
    {
      name: 'Tour Name',
      date: 'Date',
      totalSeats: 15,
      bookedSeats: 10,
      price: '₹29,999',
      duration: '6 Days',
      highlights: ['Highlight 1', 'Highlight 2']
    }
    // ... more tours
  ]
};

const rajasthanFaqs = [
  // ← Copy FAQs from page (lines 158-190)
  {
    question: 'FAQ Question?',
    answer: 'FAQ Answer'
  }
  // ... more FAQs
];

async function migrateRajasthanData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    let destination = await Destination.findOne({ slug: 'rajasthan' });
    
    if (destination) {
      console.log('📝 Updating existing Rajasthan destination...');
      destination = await Destination.findOneAndUpdate(
        { slug: 'rajasthan' },
        rajasthanData,
        { new: true, upsert: true }
      );
    } else {
      console.log('🆕 Creating new Rajasthan destination...');
      destination = await Destination.create(rajasthanData);
    }
    
    console.log('✅ Rajasthan destination migrated successfully');
    console.log(`   Destination ID: ${destination._id}`);

    console.log('\n📝 Migrating FAQs...');
    await Faq.deleteMany({ destinationId: destination._id });
    
    const faqsWithDestinationId = rajasthanFaqs.map(faq => ({
      ...faq,
      destinationId: destination._id
    }));
    
    await Faq.insertMany(faqsWithDestinationId);
    console.log(`✅ ${rajasthanFaqs.length} FAQs migrated successfully`);

    console.log('\n🎉 Migration completed successfully!');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

migrateRajasthanData();
```

### 2. Extract Data from Page File

#### Find Line Numbers for Each Section:
```javascript
// Open the destination page file (e.g., RajasthanTourPackagesPage.jsx)
// and locate these sections:

const groupTours = [     // Usually around lines 16-22
const tourPackages = [   // Usually around lines 23-85
const activities = [     // Usually around lines 86-112
const destinations = [   // Usually around lines 113-157 (these are subDestinations)
const faqs = [          // Usually around lines 158-190
const reviews = [       // Usually around lines 191-207
// Hero section data   // Around lines 220-260
// About section text  // Around lines 275-302
```

### 3. Create Dynamic Page Component

Copy `ThailandTourPackagesPage_Dynamic.jsx` and modify:

```javascript
// Example: RajasthanTourPackagesPage.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import HomeNavbar from '../Components/HomeNavbar';
import HeroSection from '../Components/DestinationPage/HeroSection';
import TourPackagesSection from '../Components/DestinationPage/TourPackagesSection';
import AboutSection from '../Components/DestinationPage/AboutSection';
import ActivitiesSection from '../Components/DestinationPage/ActivitiesSection';
import GroupToursSection from '../Components/DestinationPage/GroupToursSection';
import SubDestinationsSection from '../Components/DestinationPage/SubDestinationsSection';
import FAQSection from '../Components/DestinationPage/FAQSection';
import ReviewsSection from '../Components/DestinationPage/ReviewsSection';

const RajasthanTourPackagesPage = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/destinations/page/rajasthan`  // ← Change slug
        );
        setPageData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Rajasthan page data:', err);  // ← Update
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (loading) {
    return (
      <>
        <HomeNavbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Rajasthan tour packages...</p>  // ← Update
          </div>
        </div>
      </>
    );
  }

  const destination = pageData?.destination || {
    destinationName: 'Rajasthan',  // ← Update fallback
    heroSection: {
      title: 'Rajasthan Tour Packages',  // ← Update fallback
      tagline: 'Land of Kings',  // ← Update fallback
      startingPrice: 29999,  // ← Update fallback
      durationRange: '4-8 Days',  // ← Update fallback
      heroImage: 'YOUR_DEFAULT_IMAGE'
    },
    aboutSection: {
      shortDescription: 'YOUR_DEFAULT_DESCRIPTION',
      expandedDescription: ''
    },
    activities: [],
    groupTours: [],
    subDestinations: [],
    tourPackages: []
  };

  const faqs = pageData?.faqs || [];

  return (
    <>
      <Helmet>
        <title>{destination.heroSection?.title || 'Rajasthan Tour Packages'} | Mendora Travels</title>
        <meta name="description" content={destination.aboutSection?.shortDescription || 'Explore Rajasthan with our curated tour packages.'} />
      </Helmet>

      <HomeNavbar />

      <HeroSection 
        title={destination.heroSection?.title}
        tagline={destination.heroSection?.tagline}
        startingPrice={destination.heroSection?.startingPrice}
        durationRange={destination.heroSection?.durationRange}
        heroImage={destination.heroSection?.heroImage}
      />

      {destination.groupTours && destination.groupTours.length > 0 && (
        <GroupToursSection groupTours={destination.groupTours} />
      )}

      <TourPackagesSection packages={destination.tourPackages || []} />

      <AboutSection 
        shortDescription={destination.aboutSection?.shortDescription}
        expandedDescription={destination.aboutSection?.expandedDescription}
      />

      {destination.activities && destination.activities.length > 0 && (
        <ActivitiesSection activities={destination.activities} />
      )}

      {destination.subDestinations && destination.subDestinations.length > 0 && (
        <SubDestinationsSection 
          subDestinations={destination.subDestinations}
          destinationName={destination.destinationName}
        />
      )}

      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs} />
      )}

      {destination.reviews && destination.reviews.length > 0 && (
        <ReviewsSection reviews={destination.reviews} />
      )}

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Rajasthan Trip</h2>  // ← Update
            <p className="mb-8">Get in touch with our travel experts to customize your perfect Rajasthan adventure</p>  // ← Update
            <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your dream Rajasthan trip..."  // ← Update
                value={formData.message}
                onChange={handleFormChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RajasthanTourPackagesPage;
```

### 4. Conversion Checklist for Each Destination

```
□ Create migration script: migrateXXXData.js
□ Extract hardcoded data from page file
□ Update destinationName, slug, category, type
□ Copy heroSection data
□ Copy aboutSection text
□ Copy subDestinations array
□ Copy activities array
□ Copy groupTours array
□ Copy FAQs array
□ Run migration script
□ Verify data in database
□ Test API endpoint
□ Create/update dynamic page component
□ Update route in App.jsx
□ Test frontend rendering
□ Verify all sections appear
□ Test responsive design
□ Check console for errors
```

## Batch Processing Script

Create a master script to run all migrations:

```javascript
// server/scripts/migrateAllDestinations.js
import { execSync } from 'child_process';

const destinations = [
  'thailand',
  'rajasthan',
  'bali',
  'vietnam',
  'kerala',
  // ... add all 19
];

console.log(`🚀 Starting migration for ${destinations.length} destinations...\n`);

destinations.forEach((dest, index) => {
  console.log(`\n[${index + 1}/${destinations.length}] Migrating ${dest}...`);
  try {
    execSync(`node scripts/migrate${capitalize(dest)}Data.js`, { stdio: 'inherit' });
    console.log(`✅ ${dest} completed`);
  } catch (error) {
    console.error(`❌ ${dest} failed:`, error.message);
  }
});

console.log('\n🎉 All migrations completed!');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

## Quick Reference: Slug to Category/Type Mapping

### International (category: 'international', type: 'country')
- thailand
- vietnam
- bali
- dubai
- maldives
- singapore
- malaysia
- bhutan
- kazakhstan
- europe

### Domestic (category: 'domestic', type: 'state')
- rajasthan
- kerala
- kashmir
- ladakh
- spiti-valley
- meghalaya
- nagaland
- andaman
- himachal-pradesh

## Time Estimates

- **Per Destination Migration Script:** 15-20 minutes
- **Per Destination Component:** 10-15 minutes
- **Testing Per Destination:** 10 minutes
- **Total for All 19:** ~8-10 hours

## Automation Tips

1. **Use VS Code Multi-Cursor:** Select all destination names and update simultaneously
2. **Find & Replace:** Use regex to update multiple files at once
3. **Snippets:** Create code snippets for repetitive patterns
4. **Batch Scripts:** Run all migrations in sequence overnight

---

**Ready to start?** Begin with one domestic and one international destination to ensure the pattern works for both categories.
