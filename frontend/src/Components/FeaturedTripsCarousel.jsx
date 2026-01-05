import React, { useState, useEffect } from 'react';
// import greece from '../assets/greece.jpg';

const FeaturedTripsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { alt: "F1 Japan Special", src: "https://wanderon-images.gumlet.io/f1-japan-special-banner-desktop-thumbnail.png" }, // "https://wanderon-images.gumlet.io/f1-japan-special-banner-desktop-thumbnail.png"
    { alt: "Japan Cherry Blossom", src: "https://wanderon-images.gumlet.io/japan-cheery-blossom-poster-thumbnail-desktop.jpg" }, // "https://wanderon-images.gumlet.io/japan-cheery-blossom-poster-thumbnail-desktop.jpg"
    { alt: "Northern Lights", src: "https://wanderon-images.gumlet.io/nlights-poster-desktop-thumbnail.png" }, // "https://wanderon-images.gumlet.io/nlights-poster-desktop-thumbnail.png"
    { alt: "Thailand Backpacking", src: "https://wanderon-images.gumlet.io/fullmoon-t-d.png" }, // "https://wanderon-images.gumlet.io/fullmoon-t-d.png"
    { alt: "Bali", src: "https://wanderon-images.gumlet.io/bali-t-d.png" } // "https://wanderon-images.gumlet.io/bali-t-d.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Auto-sliding Carousel */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-xl"
                  src={image.src}
                />
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Popular Trips Banner */}
        <div className="mt-8">
          <img
            alt="Popular Trips"
            className="w-full rounded-xl"
            src="https://wanderon-images.gumlet.io//uct-desktop-new.webp?updatedAt=1738909844156"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedTripsCarousel;
