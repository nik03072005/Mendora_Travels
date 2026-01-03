import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faChevronLeft, faChevronRight, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    trip: "Bali Adventure Trip",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    review: "Absolutely incredible experience! Mendora Travels made our dream Bali vacation a reality. The attention to detail, personalized itinerary, and seamless coordination were outstanding. Every moment was magical!",
    date: "December 2025"
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi, India",
    rating: 5,
    trip: "Vietnam Backpacking",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    review: "Best travel company I've ever worked with! The team was incredibly responsive and helpful. They customized our Vietnam trip perfectly according to our preferences. Can't wait to book our next adventure with them!",
    date: "November 2025"
  },
  {
    id: 3,
    name: "Anjali & Karan",
    location: "Bangalore, India",
    rating: 5,
    trip: "Thailand Honeymoon Package",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
    review: "Our honeymoon was absolutely perfect thanks to Mendora Travels! From romantic dinners to beautiful accommodations, everything was thoughtfully planned. They turned our special trip into unforgettable memories.",
    date: "October 2025"
  },
  {
    id: 4,
    name: "Amit Patel",
    location: "Ahmedabad, India",
    rating: 5,
    trip: "Dubai & Abu Dhabi Tour",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    review: "Professional, reliable, and absolutely wonderful! The Dubai trip was executed flawlessly. Great hotels, amazing experiences, and excellent guides. Mendora Travels exceeded all our expectations!",
    date: "September 2025"
  },
  {
    id: 5,
    name: "Sneha Reddy",
    location: "Hyderabad, India",
    rating: 5,
    trip: "Kashmir Winter Wonderland",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    review: "The Kashmir trip was breathtaking! Mendora Travels took care of everything - from cozy accommodations to exciting activities. Their local knowledge made the experience truly authentic and memorable.",
    date: "January 2026"
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Jaipur, India",
    rating: 5,
    trip: "Meghalaya Road Trip",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    review: "An adventure of a lifetime! The Meghalaya road trip was perfectly organized with comfortable stays and expert drivers. Mendora Travels made sure we had a safe and thrilling experience throughout!",
    date: "December 2025"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const getVisibleTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % TESTIMONIALS_DATA.length;
      testimonials.push(TESTIMONIALS_DATA[index]);
    }
    return testimonials;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full mx-auto">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Travelers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real travelers who trusted us to create their perfect journey
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop View - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`transform transition-all duration-500 ${
                  idx === 1 ? 'scale-105 z-10' : 'scale-95 opacity-90'
                } ${isAnimating ? 'blur-sm' : ''}`}
              >
                <TestimonialCard testimonial={testimonial} featured={idx === 1} />
              </div>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="md:hidden">
            <TestimonialCard testimonial={TESTIMONIALS_DATA[currentIndex]} featured={true} />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-teal-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center z-20"
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-teal-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center z-20"
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 w-8 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              5000+
            </div>
            <div className="text-gray-600 mt-2">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              4.9★
            </div>
            <div className="text-gray-600 mt-2">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              50+
            </div>
            <div className="text-gray-600 mt-2">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              98%
            </div>
            <div className="text-gray-600 mt-2">Return Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, featured }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative ${
        featured ? 'border-2 border-teal-500' : ''
      }`}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-lg" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-6 leading-relaxed line-clamp-5">
        "{testimonial.review}"
      </p>

      {/* Trip Badge */}
      <div className="mb-6">
        <span className="inline-block bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
          {testimonial.trip}
        </span>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-500"
          />
        ) : (
          <FontAwesomeIcon icon={faUserCircle} className="text-5xl text-gray-400" />
        )}
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
          <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Featured
        </div>
      )}
    </div>
  );
};

export default Testimonials;
