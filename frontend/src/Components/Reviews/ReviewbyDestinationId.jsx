import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { format } from "date-fns";

const ReviewCard = ({ review, packageTitle }) => {
  const { name, comment, images = [], date } = review;
  const pkgName = review?.packageId?.name ||  "Unknown Package";
  const reviewDate = format(new Date(date), "dd MMM yyyy");

  return (
   <div className="max-auto p-4  bg-white  shadow rounded-lg mb-4">
     <div className="   mb-4">
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        {images.map((imgUrl, i) => (
          <img
            key={i}
            src={imgUrl}
            alt={`review-${i}`}
            className="rounded-md h-32 object-cover w-full"
          />
        ))}
      </div>
    </div>
   </div>
  );
};

const ReviewCardsD = ({ packageId}) => {
  const [reviews, setReviews] = useState([]);
  const [packageTitle, setPackageTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!packageId) return;

    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/reviews/getbyDestination/${packageId}`);
        console.log("Fetched reviews:", res.data);
        setReviews(res.data.reviews);
        setPackageTitle(res.data.packageTitle); // optional
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
    <div  className="mt-8 relative">
      <h1 className="text-xl font-bold mb-6 text-gray-800">
        {packageTitle || "Reviews"}
      </h1>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewCard
            key={review._id}
            review={review}
            packageTitle={packageTitle}
          />
        ))
      ) : (
        <p className="text-gray-600 text-center">No reviews found.</p>
      )}
    </div>
  );
};

export default ReviewCardsD;
