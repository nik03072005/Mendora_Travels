import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import DomesticHeroSection from '../Components/Domestic/DomesticHeroSection';
import DestinationGrid from '../Components/Domestic/DestinationGrid';
import PackageCard from '../Components/Domestic/PackageCard';
import StatePackageSection from '../Components/Domestic/StatePackageSection';
import BlogsSection from '../Components/Domestic/BlogsSection';
import FAQSection from '../Components/Domestic/FAQSection';
import TravelGuidelinesSection from '../Components/Domestic/TravelGuidelinesSection';
import ContactFormSection from '../Components/Domestic/ContactFormSection';
import { 
  bestSellerPackages, 
  kashmirPackages, 
  himachalPackages,
  ladakhPackages,
  rajasthanPackages,
  keralaPackages,
  spitiValleyPackages,
  meghalayaPackages,
  nagalandPackages,
  andamanPackages
} from '../Components/Domestic/packagesData';

const DomesticTripsPage = () => {
  const navigate = useNavigate();
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setFormData({ name: '', email: '', phoneNumber: '', message: '' });
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  // Domestic destinations data
  const domesticDestinations = [
    {
      name: "Kashmir",
      slug: "kashmir",
      region: "North India",
      price: "15,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80",
      highlights: ["Dal Lake", "Gulmarg", "Pahalgam"],
      popular: true
    },
    {
      name: "Himachal Pradesh",
      slug: "himachal-pradesh",
      region: "North India",
      price: "12,999",
      duration: "5-6 Days",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      highlights: ["Manali", "Shimla", "Dharamshala"],
      popular: true
    },
    {
      name: "Ladakh",
      slug: "ladakh",
      region: "North India",
      price: "24,999",
      duration: "6-8 Days",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      highlights: ["Leh", "Pangong Lake", "Nubra Valley"],
      popular: true
    },
    {
      name: "Rajasthan",
      slug: "rajasthan",
      region: "North India",
      price: "14,999",
      duration: "6-8 Days",
      image: "https://images.unsplash.com/photo-1524230507669-27e3047ba033?w=800&q=80",
      highlights: ["Jaipur", "Udaipur", "Jaisalmer"],
      popular: true
    },
    {
      name: "Kerala",
      slug: "kerala",
      region: "South India",
      price: "16,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
      highlights: ["Munnar", "Alleppey", "Kochi"],
      popular: true
    },
    {
      name: "Goa",
      slug: "goa",
      region: "West India",
      price: "10,999",
      duration: "4-5 Days",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      highlights: ["Beach", "Water Sports", "Nightlife"],
      popular: true
    },
    {
      name: "Uttarakhand",
      slug: "uttarakhand",
      region: "North India",
      price: "13,999",
      duration: "5-6 Days",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      highlights: ["Mussoorie", "Nainital", "Rishikesh"],
      popular: false
    },
    {
      name: "Sikkim",
      slug: "sikkim",
      region: "East India",
      price: "18,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      highlights: ["Gangtok", "Pelling", "Lachung"],
      popular: false
    },
    {
      name: "Andaman",
      slug: "andaman",
      region: "Islands",
      price: "22,999",
      duration: "5-6 Days",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      highlights: ["Havelock", "Neil Island", "Port Blair"],
      popular: false
    },
    {
      name: "North East",
      slug: "north-east",
      region: "East India",
      price: "19,999",
      duration: "7-9 Days",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      highlights: ["Meghalaya", "Assam", "Arunachal Pradesh"],
      popular: false
    },
    {
      name: "Karnataka",
      slug: "karnataka",
      region: "South India",
      price: "11,999",
      duration: "4-6 Days",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      highlights: ["Coorg", "Bangalore", "Hampi"],
      popular: false
    },
    {
      name: "Tamil Nadu",
      slug: "tamil-nadu",
      region: "South India",
      price: "13,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      highlights: ["Ooty", "Kodaikanal", "Madurai"],
      popular: false
    }
  ];

  const handleDestinationClick = (slug) => {
    navigate(`/domestic-trips/${slug}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Domestic Tour Packages | Explore India Destinations | Mendora Travels</title>
        <meta
          name="description"
          content="Discover amazing domestic tour packages to beautiful destinations across India. Book customized trips to Kashmir, Himachal, Kerala, Goa, Ladakh and more with Mendora Travels."
        />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <DomesticHeroSection
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        showSuccessMessage={showSuccessMessage}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Destinations Grid */}
        <DestinationGrid
          destinations={domesticDestinations}
          onDestinationClick={handleDestinationClick}
        />

        {/* Best Seller Packages */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Best Seller Packages</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellerPackages(navigate).map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>

        {/* State-wise Package Sections */}
        <StatePackageSection
          title="Best of Kashmir"
          slug="kashmir"
          packages={kashmirPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Himachal Pradesh"
          slug="himachal-pradesh"
          packages={himachalPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Ladakh"
          slug="ladakh"
          packages={ladakhPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Spiti Valley"
          slug="spiti-valley"
          packages={spitiValleyPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Meghalaya"
          slug="meghalaya"
          packages={meghalayaPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Nagaland"
          slug="nagaland"
          packages={nagalandPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Rajasthan"
          slug="rajasthan"
          packages={rajasthanPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Kerala"
          slug="kerala"
          packages={keralaPackages(navigate)}
        />

        <StatePackageSection
          title="Best of Andaman"
          slug="andaman"
          packages={andamanPackages(navigate)}
        />

        {/* All Packages Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">All Packages</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {domesticDestinations.map((destination) => (
              <div
                key={destination.slug}
                onClick={() => handleDestinationClick(destination.slug)}
                className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-sm text-white/90">Starting from ₹{destination.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Mendora Travels' Secret Sauce</h2>
            <p className="text-lg text-gray-600 mb-3">Why Choose Mendora Travels?</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* No Third Party Mess */}
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">No Third Party Mess</h3>
              <p className="text-gray-700 text-center leading-relaxed">100% in-house operations for all trips! No third parties involved, hence no fishy claims!</p>
            </div>

            {/* Transparency & Security */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Transparency & Security</h3>
              <p className="text-gray-700 text-center leading-relaxed">Real-time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!</p>
            </div>

            {/* Like-Minded Travelers */}
            <div className="bg-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Like-Minded Travelers</h3>
              <p className="text-gray-700 text-center leading-relaxed">Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!</p>
            </div>

            {/* One Stop Hassle Free */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l-5.5 9h11z"/>
                    <circle cx="17.5" cy="17.5" r="4.5"/>
                    <path d="M3 13.5h8v8H3z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">One Stop Hassle Free</h3>
              <p className="text-gray-700 text-center leading-relaxed">Comfortable stays, trained drivers, hospitable staff and friendly trip leaders - one memorable trip for you!</p>
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <BlogsSection />

        {/* FAQs Section */}
        <FAQSection />

        {/* Travel Guidelines Section */}
        <TravelGuidelinesSection />

        {/* Bottom Contact Form Section */}
        <ContactFormSection 
          formData={formData}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
          showSuccessMessage={showSuccessMessage}
        />

      </div>
    </div>
  );
};

export default DomesticTripsPage;
