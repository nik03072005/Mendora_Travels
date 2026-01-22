import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DestinationGallery = ({ destinationId }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/get/${destinationId}`);
        setImages(response.data.images || []);
        setError(null);
      } catch (err) {
        // If it's a 404, gallery doesn't exist yet - show placeholder
        if (err.response?.status === 404) {
          setImages([]);
          setError(null);
        } else {
          console.error('Error fetching images:', err);
          setError('Failed to load images.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (destinationId) {
      fetchImages();
    }
  }, [destinationId]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleViewAllClick = () => {
    setActiveIndex(0);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="mt-16 w-full max-w-6xl mx-auto p-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2 h-80 md:h-[450px] bg-gray-200 rounded-lg"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-54 bg-gray-200 rounded-lg"></div>
              <div className="h-54 bg-gray-200 rounded-lg"></div>
              <div className="h-54 bg-gray-200 rounded-lg"></div>
              <div className="h-54 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 w-full max-w-6xl mx-auto p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600 font-medium">{error}</p>
          <p className="text-sm text-gray-600 mt-2">Please try again later or contact support.</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="mt-16 w-full max-w-6xl mx-auto p-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <div className="text-gray-400 text-6xl mb-4">📸</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Gallery Images Yet</h3>
          <p className="text-gray-600">Gallery images for this destination will be added soon.</p>
        </div>
      </div>
    );
  }

  const extraCount = images.length - 5;

  return (
    <div className="mt-16 w-full bg-white shadow-sm rounded-lg max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Traveler Image Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        {/* Main Large Image */}
        <div className=" overflow-hidden relative md:col-span-2 rounded-lg">
          <img
            src={images[0]}
            alt="Main"
            className="w-full h-80 md:h-[450px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer "
            onClick={() => handleImageClick(0)}
          />
          {extraCount > 0 && (
            <div
              className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-opacity-75"
              onClick={handleViewAllClick}
            >
              📷 View All (+{extraCount})
            </div>
          )}
        </div>

        {/* Four smaller images in 2x2 grid */}
        <div className="grid grid-cols-2 gap-2 ">
          {images.slice(1, 5).map((url, index) => (
           <div className='overflow-hidden rounded-lg'>
             <img
              key={index}
              src={url}
              alt={`Side ${index + 1}`}
              className="w-full h-54 object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(index + 1)}
            />
           </div>
          ))}
        </div>
      </div>

      {/* Swiper Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl p-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
            >
              &times;
            </button>
            <Swiper
              initialSlide={activeIndex}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {images.map((url, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={url}
                    alt={`Gallery ${idx}`}
                    className="w-full max-h-[80vh] object-contain mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationGallery;
