import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import PackageCards from './Packages/Cards';

// Assets
import balitrip from '../assets/balitrip.png';
import bhutan from '../assets/bhutan.svg';
import city from '../assets/city-1.png';
import cropped_Ellipse from '../assets/cropped-Ellipse-12.png';
import discovery_thai from '../assets/discovery-thai.svg';
import dmc_final_logo_high from '../assets/dmc-final-logo-high.png';
import kkk from '../assets/kkk.png';
import letz from '../assets/letz.png';
import logo_circle from '../assets/logo-circle.png';
import logo_satguru from '../assets/logo-satguru.png';
import rajasthan from '../assets/rajasthan.webp';
import wow from '../assets/wow.png';
import Star_Travel from '../assets/Star-Travel-Logo-PNG.png';
import topview from '../assets/topview.png';

const tourismBoardAlliances = [
  { image: balitrip },
  { image: bhutan },
  { image: city },
  { image: cropped_Ellipse },
  { image: discovery_thai },
  { image: dmc_final_logo_high },
  { image: kkk },
  { image: letz },
  { image: logo_circle },
  { image: logo_satguru },
  { image: rajasthan },
  { image: wow },
  { image: Star_Travel },
  { image: topview }
];

const PackageCardsSection = ({ destinations, loading, noDataFound, selectedDestination }) => {
  if (noDataFound) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-8 pb-12">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-600">
            No packages found for {selectedDestination}
          </h2>
          <p className="text-gray-500 mt-2">
            Please try another destination or check back later.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-8 pb-12">
        <div className="mt-6 flex flex-col w-full items-center">
          <div className="pr-5 py-4 mx-auto w-full max-w-6xl">
            <div className="flex justify-between items-center mb-6">
              <div className="h-8 w-28 xs:w-36 sm:w-48 bg-gray-200 animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
              {Array(3).fill().map((_, index) => (
                <Skeleton 
                  key={index} 
                  height={300} 
                  width="100%" 
                  className="rounded-xl w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const destinationsWithPackages = (destinations || []).filter(
    destination => destination.packages.length > 0
  );

  const firstTwoDestinations = destinationsWithPackages?.slice(0, 2) || [];
  const remainingDestinations = destinationsWithPackages?.slice(2) || [];

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 pb-12">
      <div className="mt-6">
        {firstTwoDestinations.map((destination, index) => (
          <PackageCards
            key={index}
            title={destination.name}
            packages={destination.packages}
            viewAllRoute={destination.viewAllRoute}
            destinationData={{
              _id: destination.id,
              imageUrl: destination.imageUrl,
              destinationName: destination.name,
              slug: destination.slug,
            }}
          />
        ))}

        {/* Tourism Board Alliances Slider */}
        <div className="mt-6 px-4 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Tourism Board Alliances</h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={true}
            speed={1500}
            className="w-full max-w-5xl"
          >
            {tourismBoardAlliances.map((alliance, index) => (
              <SwiperSlide key={index}>
                <img
                  src={alliance.image}
                  alt={`Tourism Board Alliance ${index + 1}`}
                  className="w-20 h-16 md:w-24 md:h-20 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {remainingDestinations.map((destination, index) => (
          <PackageCards
            key={index + 2}
            title={destination.name}
            packages={destination.packages}
            viewAllRoute={destination.viewAllRoute}
            destinationData={{
              _id: destination.id,
              imageUrl: destination.imageUrl,
              destinationName: destination.name,
              slug: destination.slug,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageCardsSection;
