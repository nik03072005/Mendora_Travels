import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your real image path
    title: "THE LAND OF FESTIVAL",
    place: "ARUNACHAL PRADESH",
    logos: ["/images/breakbag.png", "/images/arunachal-logo.png"],
  },
   {
    image: "https://images.unsplash.com/photo-1552301726-570d51466ae2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your real image path
    title: "THE LAND OF FUN",
    place: "Thailand",
    logos: ["/images/breakbag.png", "/images/arunachal-logo.png"],
  },
   {
    image: "https://images.unsplash.com/photo-1546484488-2a1430996887?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your real image path
    title: "THE LAND OF FESTIVAL",
    place: "ARUNACHAL PRADESH",
    logos: ["/images/breakbag.png", "/images/arunachal-logo.png"],
  },
  
  // You can add more slides here...
];

export default function DestinationCarousel() {
  return (
    <div className="px-4  sm:px-6 w-full xl:max-w-[1440px]  lg:px-44 py-6">
      <Swiper
        modules={[Pagination,Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-44  md:h-[250px] lg:h-[300px]">
              <img
                src={slide.image}
                alt={slide.place}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center pl-6 sm:pl-10 text-white">
                <h3 className="text-sm sm:text-lg font-medium text-yellow-400 uppercase">
                  {slide.title}
                </h3>
                <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                  {slide.place}
                </h2>

                {/* Logos */}
                <div className="flex gap-4 mt-4">
                  {slide.logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt="logo"
                      className="h-6 sm:h-8 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
