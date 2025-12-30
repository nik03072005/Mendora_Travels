import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { format } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ReviewCard = ({ review, packageTitle, onImageClick }) => {
  const { name, comment, images = [], date } = review;
  const reviewDate = format(new Date(date), "dd MMM yyyy");
  const pkgName = review?.packageId?.name ||  "Unknown Package";

  const maxImagesToShow = 3;
  const displayImages = images.slice(0, maxImagesToShow);
  const remainingCount = images.length - maxImagesToShow;

  return (
    <div className="bg-white shadow rounded-lg p-4  mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{name?.toUpperCase()}</h2>
          <p className="text-sm text-gray-500">Reviewed: {reviewDate}</p>
          <p className="text-sm mt-1">
            Booked:{pkgName}
            <span className="text-blue-600 font-medium">{packageTitle}</span>
          </p>
        </div>
        <div className="flex items-center gap-1 text-green-600 font-semibold">
          <FaStar className="text-green-500" /> 5.0/5
        </div>
      </div>
      <p className="mt-3 text-gray-700 text-sm">{comment}</p>

      {images.length > 0 && (
        <div className="flex mt-4 gap-2 overflow-hidden max-w-full">
          {displayImages.map((imgUrl, i) => {
            const isLastVisible = i === maxImagesToShow - 1 && remainingCount > 0;

            return (
              <div
                key={i}
                className="relative w-28 h-28 sm:w-24 sm:h-24 lg:w-84 lg:h-44 flex-shrink-0 cursor-pointer"
                onClick={() => onImageClick(images, i)}
              >
                <img
                  src={imgUrl}
                  alt={`review-${i}`}
                  className="rounded-md object-cover w-full h-full"
                />
                {isLastVisible && (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-sm font-semibold rounded-md"
                    onClick={() => onImageClick(images, i)}
                  >
                    +{remainingCount} more
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};


const ReviewCards = ({ packageId, refProp }) => {
  const [reviews, setReviews] = useState([]);
  const [packageTitle, setPackageTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (!packageId) return;

    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/reviews/getbyPackage/${packageId}`
        );
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

  const handleImageClick = (images, index) => {
    setModalImages(images);
    setStartIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (loading) return <p className="text-center">Loading reviews...</p>;

  return (
    <>
      <div
        ref={refProp}
        className="max-w-6xl mx-auto px-4 py-6  rounded-lg mt-8"
      >
        <h1 className="text-xl font-bold mb-6 text-gray-800">
          {packageTitle || "Reviews"}
        </h1>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              packageTitle={packageTitle}
              onImageClick={handleImageClick}
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No reviews found.</p>
        )}
      </div>

      {/* Modal for Swiper */}
      {modalOpen && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-black text-3xl font-bold z-50"
          >
            &times;
          </button>
          <div className="w-full max-w-4xl px-4">
            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={startIndex}
              spaceBetween={10}
              slidesPerView={1}
            >
              {modalImages.map((imgUrl, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={imgUrl}
                    alt={`modal-img-${i}`}
                    className="w-full h-[70vh] object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCards;
