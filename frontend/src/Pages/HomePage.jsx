import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { fetchDestinations } from "../../Redux/destinationSlice";

// Components
import SearchModal from "../Components/Search/SearchModal";
import FeaturedTripsCarousel from "../Components/FeaturedTripsCarousel";
import UpcomingTrips from "../Components/UpcomingTrips";
import RomanticEscapes from "../Components/RomanticEscapes";
import ExploreCategories from "../Components/ExploreCategories";
import CTASection from "../Components/CTASection";
import WhyChooseUs from "../Components/WhyChooseUs";
import JourneyInFrames from "../Components/JourneyInFrames";
import ContactFormSection from "../Components/ContactFormSection";
import InternationalTrips from "../Components/InternationalTrips";
import ExploreIndia from "../Components/ExploreIndia";
import HomeNavbar from "../Components/HomeNavbar";
import HomeHeroSection from "../Components/HomeHeroSection";
import DestinationsSlider from "../Components/DestinationsSlider";
import PackageCardsSection from "../Components/PackageCardsSection";
import Testimonials from "../Components/Testimonials";

function HomePage() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const dispatch = useDispatch();
  const Destinations = useSelector((state) => state.destinations.destinations);

  const handleDestinationClick = (destination) => {
    if (selectedDestination === destination.name) {
      // Already selected, do nothing
    } else {
      setSelectedDestination(destination.name);
    }
  };

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Mendora Travels | Book Customized International & Domestic Trip Packages</title>
        <meta
          name="description"
          content="Experience unforgettable multi-day tours with Mendora Travels. From handcrafted getaways to offbeat adventures—trusted by travelers, we plan the trip, you live the story."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mendora Travels | Book Customized International & Domestic Trip Packages" />
        <meta property="og:description" content="Experience unforgettable multi-day tours with Mendora Travels. From handcrafted getaways to offbeat adventures—trusted by travelers, we plan the trip, you live the story." />
        <meta property="og:url" content="https://mendoratravels.com/" />
        <meta property="og:image" content="https://mendoratravels.com/images/logo.png" />
        <meta property="og:site_name" content="Mendora Travels" />
      </Helmet>

      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}

      {/* Top Navbar */}
      <HomeNavbar onSearchClick={() => setIsOpen(true)} />

      {/* Hero Section with Video Background */}
      <HomeHeroSection />

      {/* Destinations Slider Section - Below Hero */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <DestinationsSlider 
            selectedDestination={selectedDestination}
            onDestinationClick={handleDestinationClick}
            onExploreClick={() => {
              dispatch(fetchDestinations());
              setSelectedDestination(null);
            }}
          />
        </div>
      </section>

      {/* Featured Trips Carousel Section */}
      <FeaturedTripsCarousel />

      {/* International Trips Section */}
      <InternationalTrips />

      {/* Explore India Section */}
      <ExploreIndia />

      {/* Popular Trips Section */}
      <UpcomingTrips />

      {/* Romantic Escapes Section */}
      <RomanticEscapes />

      {/* Explore Categories Section */}
      <ExploreCategories />

      {/* CTA Section */}
      <CTASection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Journey In Frames Gallery Section */}
      <JourneyInFrames />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Package Cards Section */}
      {/* <div className="px-4 sm:px-6 lg:px-8 mt-8 pb-12">
        <PackageCardsSection 
          destinations={destinations}
          loading={loading}
          noDataFound={noDataFound}
          selectedDestination={selectedDestination}
        />
      </div> */}
    </>
  );
}

export default HomePage;
