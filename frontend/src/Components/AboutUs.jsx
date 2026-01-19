import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import founderImg from "../assets/founder-trip.jpg";
import sDas from '../assets/Sdas.png'
import Dipika from '../assets/Dipika.jpg'
import logo from "../assets/mendora-logo.png";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Mendora Travels | Your Trusted Travel Partner</title>
        <meta
          name="description"
          content="Learn about Mendora Travels, your trusted partner in travel. We craft unforgettable experiences with curated tour packages, expert guides, and a passion for exploration."
        />
      </Helmet>

      {/* Modern Transparent Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => navigate('/')} className="flex items-center space-x-3 transition-transform hover:scale-105">
              <img alt="Mendora Travels Logo" className={`h-8 w-auto transition-all duration-300 ${scrolled ? '' : 'drop-shadow-lg'}`} src={logo} />
            </button>

            {/* Search Bar - Desktop Only */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  placeholder="Where do you want to go?"
                  className={`w-full px-4 py-2 pl-10 pr-4 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${scrolled ? 'border border-gray-300 bg-white' : 'bg-white/90 backdrop-blur-sm border border-white/30'}`}
                  type="text"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button onClick={() => navigate('/group-tours')} className={`text-sm font-medium transition-all hover:bg-[#007aff]-500 ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}>
                Upcoming Trips
              </button>
              <button onClick={() => navigate('/corporate')} className={`text-sm font-medium transition-all hover:bg-[#007aff]-500 ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}>
                Corporate Tours
              </button>
              <button onClick={() => navigate('/blogs')} className={`text-sm font-medium transition-all hover:bg-[#007aff]-500 ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}>
                Blogs
              </button>
              <button className={`text-sm font-bold transition-all ${scrolled ? 'bg-[#007aff]-500' : 'bg-[#007aff]-300 drop-shadow-md'}`}>
                Team Section
              </button>
              <button onClick={() => navigate('/payment')} className={`text-sm font-medium transition-all hover:bg-[#007aff]-500 ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}>
                Payments
              </button>
            </nav>

            {/* Desktop Phone Number */}
            <div className="hidden lg:flex items-center">
              <a href="tel:+919547306912" className={`px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${scrolled ? 'text-gray-700 hover:bg-[#007aff]-500' : 'text-white hover:bg-[#007aff]-300 drop-shadow-md'}`}>
                +91-9547306912
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-md transition-all hover:bg-white/10">
              {mobileMenuOpen ? (
                <FiX className={`text-xl transition-colors ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`} />
              ) : (
                <FiMenu className={`text-xl transition-colors ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => { navigate('/group-tours'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Upcoming Trips
              </button>
              <button onClick={() => { navigate('/corporate'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Corporate Tours
              </button>
              <button onClick={() => { navigate('/blogs'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Blogs
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm bg-[#007aff]-500 font-bold hover:bg-gray-100 rounded">
                Team Section
              </button>
              <button onClick={() => { navigate('/career'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Career
              </button>
              <a href="tel:+919147144627" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Call: +91-9147144627
              </a>
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
          <div className="grid grid-cols-4 gap-1">
            <button onClick={() => navigate('/')} className="flex flex-col items-center py-2 px-1 text-xs text-gray-600 hover:bg-[#007aff]-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </button>
            <button className="flex flex-col items-center py-2 px-1 text-xs text-gray-600 hover:bg-[#007aff]-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Explore</span>
            </button>
            <button onClick={() => navigate('/search')} className="flex flex-col items-center py-2 px-1 text-xs text-gray-600 hover:bg-[#007aff]-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>
            <button onClick={() => navigate('/contact-us')} className="flex flex-col items-center py-2 px-1 text-xs text-gray-600 hover:bg-[#007aff]-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Contact</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Gradient Background */}
      <div className="relative h-screen bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Team Section"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&q=80"
          />
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">About Mendora Travels</h1>
            <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-lg">Creating unforgettable journeys and memories that last a lifetime</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button onClick={() => navigate('/contact-us')} className="bg-white text-teal-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#007aff]-500 hover:text-white transition-all hover:scale-105 shadow-xl">
                Start Your Journey
              </button>
              <button onClick={() => navigate('/')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all hover:scale-105 shadow-xl backdrop-blur-sm">
                Explore Destinations
              </button>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-2 block">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a passion for exploration and a commitment to excellence, Mendora Travels has been transforming the way people experience the world. We believe that travel is not just about visiting new places, but about creating meaningful connections, discovering diverse cultures, and making memories that last forever.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-700 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-gray-700 font-medium">Happy Travelers</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-gray-700 font-medium">Destinations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional travel experiences that inspire, educate, and connect people from all walks of life. We strive to make every journey seamless, memorable, and transformative through personalized service and attention to detail.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred travel partner globally, known for creating authentic experiences that foster cultural understanding and sustainable tourism practices while exceeding customer expectations at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-2 block">What We Stand For</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">These principles guide everything we do and shape the experiences we create</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
            <p className="text-gray-600">We love what we do and it shows in every trip we curate</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
            <p className="text-gray-600">Building lasting relationships through transparency and reliability</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">Committed to delivering the highest quality in every aspect</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">Promoting responsible travel that respects local communities</p>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-2 block">The Mendora Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience excellence in every aspect of your journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Every trip is tailored to your preferences and interests, ensuring a unique experience</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Our experienced travel consultants and guides are passionate about creating perfect journeys</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Value</h3>
              <p className="text-gray-600">Competitive pricing without compromising on quality or experience</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance to ensure your peace of mind throughout your journey</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of destinations with insider access to authentic experiences</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">Your safety and security are our top priorities on every adventure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="container mx-auto px-4 py-20 mb-16 lg:mb-0">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-2 block">Our Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Passionate professionals dedicated to making your travel dreams come true</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                alt="Abhijit Biswas"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                src={founderImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Abhijit Biswas</h3>
            <p className="text-teal-600 font-medium">Founder & CEO</p>
          </div>
          <div className="text-center group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                alt="S. Das"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                src={sDas}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">S. Das</h3>
            <p className="text-teal-600 font-medium">Co-Founder</p>
          </div>
          <div className="text-center group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                alt="Dipika"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                src={Dipika}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Dipika</h3>
            <p className="text-teal-600 font-medium">Travel Operations Executive</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 py-20 mb-16 lg:mb-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">Let us help you create memories that will last a lifetime</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-us')}
              className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#007aff]-500 hover:text-white transition-all hover:scale-105 shadow-xl"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all hover:scale-105 shadow-xl backdrop-blur-sm"
            >
              Explore Packages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
