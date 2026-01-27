import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Destination from '../models/Destination.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function addFAQsAndTestimonials() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected\n');

    // Check Kashmir for FAQs structure
    const kashmir = await Destination.findOne({ destinationName: /kashmir/i });
    console.log('📊 Kashmir FAQs:', kashmir?.faqs?.length || 0);
    console.log('📊 Kashmir Testimonials:', kashmir?.testimonials?.length || 0, '\n');

    // FAQs for Goa
    const goaFAQs = [
      {
        question: 'What is the best time to visit Goa?',
        answer: 'The best time to visit Goa is from November to February when the weather is pleasant with temperatures ranging from 20-32°C. This is peak tourist season with various festivals and beach activities.'
      },
      {
        question: 'How many days are enough for Goa trip?',
        answer: 'A minimum of 4-5 days is recommended to explore Goa properly. This allows you to visit North Goa beaches, South Goa beaches, enjoy water sports, nightlife, and some sightseeing.'
      },
      {
        question: 'Is Goa expensive for tourists?',
        answer: 'Goa can suit all budgets. Budget travelers can stay in hostels (₹500-1000/night), mid-range hotels cost ₹2000-4000/night, and luxury resorts range from ₹8000-20000/night. Food and activities are reasonably priced.'
      },
      {
        question: 'What are must-visit beaches in Goa?',
        answer: 'North Goa: Baga, Calangute, Anjuna, Vagator. South Goa: Palolem, Agonda, Butterfly Beach, Colva. Each beach has its unique vibe - party beaches in North, peaceful beaches in South.'
      },
      {
        question: 'Is Goa safe for solo female travelers?',
        answer: 'Yes, Goa is generally safe for solo female travelers. Stay in well-populated areas, avoid isolated beaches at night, use registered taxis, and be cautious with drinks. Many hostels offer women-only dorms.'
      },
      {
        question: 'What water sports are available in Goa?',
        answer: 'Parasailing, jet skiing, banana boat rides, bumper rides, scuba diving, snorkeling, kayaking, windsurfing, and flyboarding. Baga, Calangute, and Candolim beaches offer most water sports.'
      }
    ];

    // Testimonials for Goa
    const goaTestimonials = [
      {
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        rating: 5,
        comment: 'Had an amazing time in Goa! The beaches were pristine, water sports were thrilling, and the nightlife was fantastic. Mendora Travels arranged everything perfectly. Highly recommend!',
        date: '2025-12-15',
        image: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      {
        name: 'Rahul Verma',
        location: 'Delhi, India',
        rating: 5,
        comment: 'Perfect honeymoon destination! Stayed at a beach resort, enjoyed romantic sunsets, tried water sports, and explored both North and South Goa. The itinerary was well-planned.',
        date: '2025-11-28',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      {
        name: 'Ananya Desai',
        location: 'Bangalore, India',
        rating: 4,
        comment: 'Girls trip to Goa was super fun! Beach parties, shopping at flea markets, spa sessions, and amazing food. Only wish we had more days. Will definitely visit again!',
        date: '2025-10-20',
        image: 'https://randomuser.me/api/portraits/women/68.jpg'
      },
      {
        name: 'Vikram Singh',
        location: 'Pune, India',
        rating: 5,
        comment: 'Took my family to Goa and everyone loved it! Kids enjoyed water sports, parents loved the churches and forts, and I enjoyed the beach shacks. Perfect family destination.',
        date: '2025-09-15',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ];

    // FAQs for Uttarakhand
    const uttarakhandFAQs = [
      {
        question: 'What is the best time to visit Uttarakhand?',
        answer: 'Summer (March-June) for general tourism, Monsoon (July-September) for Valley of Flowers, Winter (October-February) for snow activities. Char Dham Yatra is best from May to October.'
      },
      {
        question: 'Is Uttarakhand safe for tourists?',
        answer: 'Yes, Uttarakhand is very safe for tourists. However, check weather conditions before trekking, hire experienced guides for difficult treks, and avoid traveling during heavy monsoons due to landslides.'
      },
      {
        question: 'How many days needed for Uttarakhand trip?',
        answer: 'For Nainital-Mussoorie circuit: 5-7 days. For Char Dham Yatra: 10-12 days. For trekking expeditions: 7-10 days. For complete exploration including Rishikesh-Haridwar: 12-15 days.'
      },
      {
        question: 'What are must-visit places in Uttarakhand?',
        answer: 'Nainital, Mussoorie, Rishikesh, Haridwar, Auli, Jim Corbett National Park, Valley of Flowers, Kedarnath, Badrinath, Chopta, Ranikhet, and Lansdowne. Each offers unique experiences.'
      },
      {
        question: 'Can we visit Char Dham in winter?',
        answer: 'No, Char Dham temples close during winter (November-April) due to heavy snowfall. Gangotri and Yamunotri open in May, while Kedarnath and Badrinath open by end of April or early May.'
      },
      {
        question: 'What adventure activities are available?',
        answer: 'River rafting in Rishikesh, bungee jumping, trekking (Valley of Flowers, Kedarnath, Har Ki Dun), skiing in Auli, paragliding, camping, wildlife safari in Jim Corbett, and mountain biking.'
      }
    ];

    // Testimonials for Uttarakhand
    const uttarakhandTestimonials = [
      {
        name: 'Amit Kumar',
        location: 'Jaipur, India',
        rating: 5,
        comment: 'Char Dham Yatra was a spiritual journey of a lifetime! Well-organized itinerary, comfortable stays, and experienced guide made it memorable. The Himalayan views were breathtaking.',
        date: '2025-11-05',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
      },
      {
        name: 'Sneha Patel',
        location: 'Ahmedabad, India',
        rating: 5,
        comment: 'Nainital family trip was amazing! Kids loved boating, we enjoyed the scenic views, and the weather was perfect. The resort was comfortable and food was delicious. Highly recommended!',
        date: '2025-10-12',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        name: 'Rohan Malhotra',
        location: 'Chandigarh, India',
        rating: 5,
        comment: 'Adrenaline-packed adventure in Uttarakhand! River rafting in Rishikesh was thrilling, bungee jumping was scary but exciting, and camping under stars was magical. Perfect adventure trip!',
        date: '2025-09-28',
        image: 'https://randomuser.me/api/portraits/men/56.jpg'
      },
      {
        name: 'Kavita Reddy',
        location: 'Hyderabad, India',
        rating: 4,
        comment: 'Yoga and wellness retreat in Rishikesh was exactly what I needed. Morning yoga by the Ganges, meditation sessions, and peaceful surroundings rejuvenated my mind and body.',
        date: '2025-08-15',
        image: 'https://randomuser.me/api/portraits/women/29.jpg'
      }
    ];

    // Update Goa
    const goa = await Destination.findOneAndUpdate(
      { destinationName: 'Goa' },
      { 
        $set: { 
          faqs: goaFAQs,
          testimonials: goaTestimonials
        }
      },
      { new: true }
    );
    console.log('✅ Added to Goa:');
    console.log(`   📝 ${goaFAQs.length} FAQs`);
    console.log(`   💬 ${goaTestimonials.length} Testimonials\n`);

    // Update Uttarakhand
    const uttarakhand = await Destination.findOneAndUpdate(
      { destinationName: 'Uttarakhand' },
      { 
        $set: { 
          faqs: uttarakhandFAQs,
          testimonials: uttarakhandTestimonials
        }
      },
      { new: true }
    );
    console.log('✅ Added to Uttarakhand:');
    console.log(`   📝 ${uttarakhandFAQs.length} FAQs`);
    console.log(`   💬 ${uttarakhandTestimonials.length} Testimonials\n`);

    console.log('🎉 FAQs and Testimonials added successfully!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

addFAQsAndTestimonials();
