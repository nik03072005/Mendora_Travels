import React, { useEffect, useRef, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { toast } from 'react-toastify';
import PNavbar from "./PackageNavbar";
import AboutGallery from "./Gallary/AboutUs";
import tripVideo from "../assets/trip-video.mp4";
import founderImg from "../assets/founder-trip.jpg";
import timeline1 from "../assets/timeline1.jpg";
import timelinefirst from "../assets/timelinefirst.jpg";
import timeline2 from "../assets/timeline2.jpg";
import timeline3 from "../assets/timeline3.jpg";
import sDas from '../assets/Sdas.png'
import Dipika from '../assets/Dipika.jpg'
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get-blogs`);
        const fetchedBlogs = response.data.blogs.slice(0, 3);
        console.log('Fetched Blogs:', fetchedBlogs); // Debug: Log blog data
        setBlogs(fetchedBlogs);
      } catch (error) {
        toast.error('Error fetching blogs: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Timeline scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && lineRef.current) {
        const timeline = timelineRef.current;
        const line = lineRef.current;
        const timelineRect = timeline.getBoundingClientRect();
        const timelineTop = timelineRect.top + window.scrollY;
        const timelineHeight = timelineRect.height;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const start = Math.max(0, scrollPosition - timelineTop + windowHeight / 2);
        const progress = Math.min(start / timelineHeight, 1);
        line.style.height = `${progress * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/(^-|-$)+/g, ''); // Remove leading/trailing hyphens
};

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Helmet>
        <title>About Trip Tortoise | Your Trusted Travel Partner</title>
        <meta
          name="description"
          content="Learn about Trip Tortoise, your trusted partner in travel. We craft unforgettable experiences with curated tour packages, expert guides, and a passion for exploration."
        />
      </Helmet>

    <div className="bg-gray-50">

      <PNavbar />
      
      <div className="min-h-[70vh] sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24  flex items-center justify-center">
        <Container
          maxWidth="lg"
          className="flex flex-col md:flex-row items-center justify-between py-6 md:py-10 gap-6"
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Typography
              variant="h6"
              className="text-gray-500 uppercase tracking-wider mb-2 text-sm md:text-base"
            >
              Trip Tortoise
            </Typography>
            <Typography
              variant="h2"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug md:leading-tight break-words"
            >
              Redefining Touring For{" "}
              <span className="text-orange-500">The Modern Traveler!</span>
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600 mt-4 text-sm md:text-base">
              We Add More Joy To Your Global Travels
            </Typography>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={tripVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Container>
      </div>

      {/* Second Section: Our Mission */}
      <div className="py-10 md:py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <Container
          maxWidth="lg"
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Typography
              variant="h3"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 leading-relaxed text-sm md:text-base"
            >
              Travel is a burst of life, where every step sings with new stories. Breaking the monotony of conventional travel, we bring new-age travel within the reach of Georgia which adds to the joy and delight, combining it with the most adored elements of traditional travel. All travel experiences in our catalog are tested to be flawless and create memories that last a lifetime.
            </Typography>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
            <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-gray-200 flex items-center justify-center relative">
              <img
                src={founderImg}
                alt="Founders"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <Typography
                variant="body1"
                className="font-semibold text-gray-800 text-base md:text-lg"
              >
                Abhijit Biswas
              </Typography>
              <Typography variant="caption" className="text-gray-500 text-xs md:text-sm">
                Founder
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      {/* Third Section: Meet the Architects of Experiences */}
      <div className="py-10 md:py-16 bg-gray-50">
        <Container maxWidth="lg" className="text-center">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
          >
            We curate the finest travel{" "}
            <span className="text-orange-500">experiences </span> as defined by your preferences
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 mb-8 text-sm md:text-base">
            Bringing a passionate team with insights into quality touring at your service!
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 mb-12 justify-center max-w-4xl mx-auto">
             <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <img
                  src={founderImg}
                  alt="Founders"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <Typography
                variant="body1"
                className="font-semibold text-gray-800 text-base md:text-lg"
              >
                Abhijit Biswas
              </Typography>
              <Typography variant="caption" className="text-gray-500 text-xs md:text-sm">
                Founder
              </Typography>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center mb-2">
               <img
                  src={sDas}
                  alt="Co-Founder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <Typography
                variant="body1"
                className="font-semibold text-gray-800 text-base md:text-lg"
              >
                S. Das
              </Typography>
              <Typography variant="caption" className="text-gray-500 text-xs md:text-sm">
                Co-Founder
              </Typography>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <img
                  src={Dipika}
                  alt="Travel Operations Executive"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <Typography
                variant="body1"
                className="font-semibold text-gray-800 text-base md:text-lg"
              >
                Dipika
              </Typography>
              <Typography variant="caption" className="text-gray-500 text-xs md:text-sm">
                Travel Operations Executive
              </Typography>
            </div>
          </div>
          <div className="text-center">
            <Typography
              variant="h4"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2"
            >
              Experience the exhilarating joy that engulfs the spirit when traveling!
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 mx-auto leading-relaxed text-sm md:text-base w-full"
            >
              The factor demarking the services of Tour Tortoise as a tour operator is our great enthusiasm and energy to serve the best to all travelers. Our commitment to innovation makes it all possible, reinstating our position as one of the pioneers in modern-day travel. Our holistic outlook makes the journey and the destination a more delightful experience and we take utmost care at every step along the way.
            </Typography>
          </div>
        </Container>
      </div>

      {/* Fourth Section: Trip Tortoise's Journey Timeline */}
      <div className="py-10 md:py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-6"
          >
            <span className="text-orange-500">Trip Tortoise's</span> Journey
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 mb-12 text-sm md:text-base">
            Carefully curated experiences for the discerning traveler!
          </Typography>
          <div className="relative" ref={timelineRef}>
            <div
              ref={lineRef}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 hidden md:block"
              style={{ height: "0%", top: 0 }}
            />
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
              <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-right order-2 md:order-1">
                <Typography variant="h6" className="text-orange-500 font-bold text-sm md:text-base">
                  2017
                </Typography>
                <Typography
                  variant="h5"
                  className="text-gray-800 font-semibold text-base md:text-lg"
                >
                  THE JOURNEY BEGINS - A VISION TO TRANSFORM TRAVEL
                </Typography>
                <Typography variant="body1" className="text-gray-600 mt-2 text-sm md:text-base">
                  Trip Tortoise Holidays Pvt. Ltd. was launched in 2017 under the visionary leadership of Abhijit Biswas. From humble beginnings, the goal was clear—to redefine how people explore the world by offering carefully curated travel experiences that go beyond the ordinary. With passion and a traveler-first mindset, the foundation for a unique, customer-centric travel company was laid.
                </Typography>
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-8 mb-6 md:mb-0 order-1 md:order-2">
                <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
                    src={timelinefirst}
                    alt="Timeline Image 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full border-4 border-white hidden md:block" />
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center mb-12 md:mb-16">
              <div className="w-full md:w-1/2 pl-0 md:pl-8 text-center md:text-left order-2 md:order-1">
                <Typography variant="h6" className="text-orange-500 font-bold text-sm md:text-base">
                  2022
                </Typography>
                <Typography
                  variant="h5"
                  className="text-gray-800 font-semibold text-base md:text-lg"
                >
                  BUILDING TRUST, EXPANDING HORIZONS
                </Typography>
                <Typography variant="body1" className="text-gray-600 mt-2 text-sm md:text-base">
                  Within just a few years, Trip Tortoise had made a mark in the travel and tourism space. With 10+ domestic and international packages and a growing network of trusted partners, the company built a reputation for reliability and personalized service, earning the trust of travelers across India.
                </Typography>
              </div>
              <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0 order-1 md:order-2">
                <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
                    src={timeline2}
                    alt="Timeline Image 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full border-4 border-white hidden md:block" />
            </div>
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
              <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-right order-2 md:order-1">
                <Typography variant="h6" className="text-orange-500 font-bold text-sm md:text-base">
                  2024
                </Typography>
                <Typography
                  variant="h5"
                  className="text-gray-800 font-semibold text-base md:text-lg"
                >
                  RECOGNITION & RAPID SCALING
                </Typography>
                <Typography variant="body1" className="text-gray-600 mt-2 text-sm md:text-base">
                  With 35+ domestic and international packages and an ever-expanding network of partners, Trip Tortoise further strengthened its position in the industry. By the end of 2024, the company had proudly served over 3,000 happy travelers, including groups, families, and corporate clients. A commitment to quality, transparency, and memorable experiences remained at the heart of its growth journey.
                </Typography>
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-8 mb-6 md:mb-0 order-1 md:order-2">
                <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
                    src={timeline3}
                    alt="Timeline Image 3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full border-4 border-white hidden md:block" />
            </div>
          </div>
        </Container>
      </div>

      {/* Fifth Section: Life at Trip Tortoise - Picture Gallery */}
      <div className="py-10 md:py-16">
        <Container maxWidth="lg">
          <div className="mb-12 md:mb-16">
            <Typography
              variant="h4"
              className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-6"
            >
              <span className="text-orange-500">Trip Tortoise</span> Picture Gallery
            </Typography>
            <AboutGallery destinationId={"682e1d2a999a672f22edc6d2"} />
          </div>
        </Container>
      </div>

      {/* Sixth Section: Insights, Inspirations & Impact */}
      <div className="py-10 md:py-16 bg-gray-50">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            className="text-lg sm:text-xl md:text-2xl font-bold text-center text-orange-500 mb-2"
          >
            <span className="text-gray-800">Stories That Move Our World At</span>{" "}
            Trip Tortoise
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 mb-8 text-center text-sm md:text-base">
            Blogs, news releases, and the latest in the world of travel!
          </Typography>
          <div className="relative">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              {loading ? (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <Typography variant="body1" className="text-gray-500 text-sm md:text-base">
                    Loading blogs...
                  </Typography>
                </div>
              ) : blogs.length === 0 ? (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <Typography variant="body1" className="text-gray-500 text-sm md:text-base">
                    No blogs available
                  </Typography>
                </div>
              ) : (
                blogs.map((blog, index) => (
                  <div
                    key={blog._id}
                    className={`absolute top-0 left-0 w-full h-full rounded-lg flex items-end justify-center transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={blog.bannerImage || "/images/fallback.jpg"}
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div
                      className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-b-lg cursor-pointer"
                      onClick={() => navigate(`/blog/${createSlug(blog.title)}`)}
                    >
                      <Typography
                        variant="h5"
                        className="font-semibold text-center text-sm sm:text-base md:text-lg"
                      >
                        {blog.title}
                      </Typography>
                    </div>
                  </div>
                ))
              )}
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-100 transition-colors z-20"
                disabled={loading || blogs.length === 0}
              >
                <span className="text-gray-800 text-lg sm:text-2xl cursor-pointer">←</span>
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-100 transition-colors z-20"
                disabled={loading || blogs.length === 0}
              >
                <span className="text-gray-800 text-lg sm:text-2xl cursor-pointer">→</span>
              </button>
            </div>
            <div className="flex justify-center space-x-2 my-6">
              {blogs.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Typography
              variant="caption"
              className="text-gray-600 text-center block mb-6 text-xs md:text-sm"
            >
              {blogs.length > 0 ? `${currentSlide + 1}/${blogs.length}` : "0/0"}
            </Typography>
          </div>
        </Container>
      </div>
    </div>
    </>
  );
};

export default AboutUs;