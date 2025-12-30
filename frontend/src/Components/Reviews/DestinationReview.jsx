import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewCarousel({ packageId }) {
  const [reviews, setReviews] = useState([]);
  const [packageTitle, setPackageTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!packageId) return;

    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/reviews/getbyDestination/${packageId}`);
        setReviews(res.data.reviews);
        setPackageTitle(res.data.packageTitle);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [packageId]);

  if (loading) return <p className="text-center">Loading reviews...</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-6   mt-8">
      <h2 className="text-3xl font-semibold text-center mb-8">People Love Travelling With <span className=" text-red-500">Trip Tortise</span></h2>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Rating Box */}
        <div className="flex flex-col items-center p-6  rounded-lg  w-full md:w-1/4">
          <div className="flex gap-1 text-green-500">
            {Array(5).fill(0).map((_, i) => (
              <FaStar key={i} fill="currentColor" className="w-6 h-6" />
            ))}
          </div>
          <div className="text-4xl font-bold mt-2 text-green-600">4.8</div>
          <div className="text-green-600 underline mt-1">700+ Travellers Reviews</div>
          <div className="text-sm text-gray-500  mt-1">by Travellers from <strong>25+ countries</strong></div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full md:w-3/4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="p-6  rounded-lg  shadow-lg bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <span className="flex items-center text-green-600 text-sm font-semibold">
                      <FaStar className="w-4 h-4 fill-green-600 mr-1" /> {review.rating}
                    </span>
                  </div>
                  <p className="text-gray-700 min-h-32 text-sm mb-4">{review.comment}</p>
                  <div className="flex gap-2 flex-wrap">
                    {review.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="review"
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
