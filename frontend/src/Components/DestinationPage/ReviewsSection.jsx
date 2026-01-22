import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsSection = ({ reviews = [] }) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={review._id || review.id || index} 
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < (review.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  {review.location && (
                    <p className="text-sm text-gray-500">{review.location}</p>
                  )}
                </div>
                {review.date && (
                  <p className="text-sm text-gray-500">
                    {typeof review.date === 'string' 
                      ? review.date 
                      : new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                    }
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
