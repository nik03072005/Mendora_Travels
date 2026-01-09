import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/HomeNavbar';
import InternationalHeroSection from '../Components/International/InternationalHeroSection';
import DestinationGrid from '../Components/International/DestinationGrid';
import CountryPackageSection from '../Components/International/CountryPackageSection';
import PackageCard from '../Components/International/PackageCard';
import BlogsSection from '../Components/International/BlogsSection';
import FAQSection from '../Components/International/FAQSection';
import TravelGuidelinesSection from '../Components/International/TravelGuidelinesSection';
import ContactFormSection from '../Components/International/ContactFormSection';
import { 
  bestSellerPackages, 
  europePackages, 
  baliPackages,
  dubaiPackages,
  vietnamPackages,
  maldivesPackages,
  malaysiaPackages,
  singaporePackages,
  sriLankaPackages,
  bhutanPackages
} from '../Components/International/packagesData';

const InternationalTripsPage = () => {
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
    console.log('Form submitted:', formData);
    setShowSuccessMessage(true);
    setFormData({ name: '', email: '', phoneNumber: '', message: '' });
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  // International destinations data
  const internationalDestinations = [
    {
      name: "Europe",
      slug: "europe",
      continent: "Europe",
      price: "1,49,999",
      duration: "10-15 Days",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      highlights: ["Eiffel Tower", "Roman Colosseum", "Swiss Alps"],
      popular: true
    },
    {
      name: "Thailand",
      slug: "thailand",
      continent: "Asia",
      price: "44,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      highlights: ["Bangkok", "Phuket", "Pattaya"],
      popular: true
    },
    {
      name: "Bali",
      slug: "bali",
      continent: "Asia",
      price: "49,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      highlights: ["Ubud", "Seminyak", "Nusa Penida"],
      popular: true
    },
    {
      name: "Vietnam",
      slug: "vietnam",
      continent: "Asia",
      price: "59,999",
      duration: "6-8 Days",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
      highlights: ["Hanoi", "Ha Long Bay", "Ho Chi Minh"],
      popular: false
    },
    {
      name: "Dubai",
      slug: "dubai",
      continent: "Middle East",
      price: "69,999",
      duration: "4-6 Days",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
      popular: true
    },
    {
      name: "Maldives",
      slug: "maldives",
      continent: "Asia",
      price: "89,999",
      duration: "4-6 Days",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      highlights: ["Water Villas", "Coral Reefs", "Island Hopping"],
      popular: true
    },
    {
      name: "Singapore",
      slug: "singapore",
      continent: "Asia",
      price: "54,999",
      duration: "4-5 Days",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
      highlights: ["Marina Bay", "Sentosa", "Gardens by the Bay"],
      popular: false
    },
    {
      name: "Malaysia",
      slug: "malaysia",
      continent: "Asia",
      price: "52,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
      highlights: ["Kuala Lumpur", "Langkawi", "Genting Highlands"],
      popular: false
    },
    {
      name: "Japan",
      slug: "japan",
      continent: "Asia",
      price: "1,29,999",
      duration: "7-10 Days",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      highlights: ["Tokyo", "Kyoto", "Mount Fuji"],
      popular: false
    },
    {
      name: "Kazakhstan",
      slug: "kazakhstan",
      continent: "Asia",
      price: "47,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
      highlights: ["Almaty", "Charyn Canyon", "Big Almaty Lake"],
      popular: false
    },
    {
      name: "Bhutan",
      slug: "bhutan",
      continent: "Asia",
      price: "65,999",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
      highlights: ["Tiger's Nest", "Paro Valley", "Thimphu"],
      popular: false
    },
    {
      name: "Sri Lanka",
      slug: "sri-lanka",
      continent: "Asia",
      price: "28,999",
      duration: "5-6 Days",
      image: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80",
      highlights: ["Sigiriya", "Kandy", "Galle"],
      popular: false
    }
  ];

  const handleDestinationClick = (slug) => {
    navigate(`/international-trips/${slug}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>International Tour Packages | Explore World Destinations | Mendora Travels</title>
        <meta
          name="description"
          content="Discover amazing international tour packages to exotic destinations worldwide. Book customized trips to Thailand, Bali, Dubai, Maldives, Europe and more with Mendora Travels."
        />
      </Helmet>

      <HomeNavbar />

      {/* Hero Section */}
      <InternationalHeroSection
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        showSuccessMessage={showSuccessMessage}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Destinations Grid */}
        <DestinationGrid
          destinations={internationalDestinations}
          onDestinationClick={handleDestinationClick}
        />

        {/* Best Seller Packages */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Best Seller Packages</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellerPackages(navigate).map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>

        {/* Country-wise Package Sections */}
        <CountryPackageSection
          title="Best of Europe"
          slug="europe"
          packages={europePackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Bali"
          slug="bali"
          packages={baliPackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Dubai"
          slug="dubai"
          packages={dubaiPackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Vietnam"
          slug="vietnam"
          packages={vietnamPackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Maldives"
          slug="maldives"
          packages={maldivesPackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Malaysia"
          slug="malaysia"
          packages={malaysiaPackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Singapore"
          slug="singapore"
          packages={singaporePackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Sri Lanka"
          slug="sri-lanka"
          packages={sriLankaPackages(navigate)}
        />

        <CountryPackageSection
          title="Best of Bhutan"
          slug="bhutan"
          packages={bhutanPackages(navigate)}
        />

        {/* All Packages Grid - Show all destinations again */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">All Packages</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalDestinations.map((destination) => (
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

        {/* Why Choose Us Section - Mendora Travels' Secret Sauce */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Mendora Travels' Secret Sauce</h2>
            <p className="text-lg text-gray-600 mb-3">Why Choose Mendora Travels?</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* No Third Party Mess */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
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
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
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

export default InternationalTripsPage;
