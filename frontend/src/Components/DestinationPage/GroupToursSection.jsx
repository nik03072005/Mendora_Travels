import React from 'react';
import { FaCalendar, FaClock, FaUsers, FaStar } from 'react-icons/fa';

const GroupToursSection = ({ groupTours = [] }) => {
  if (!groupTours || groupTours.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Fixed Departure Group Tours</h2>
        <p className="text-center text-gray-600 mb-12">Join our curated group tours with fixed departure dates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groupTours.map((tour, index) => {
            const seatsLeft = tour.totalSeats - tour.bookedSeats;
            const percentBooked = tour.totalSeats > 0 ? (tour.bookedSeats / tour.totalSeats) * 100 : 0;
            
            return (
              <div 
                key={tour._id || tour.id || index} 
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{tour.name}</h3>
                  {seatsLeft <= 3 && seatsLeft > 0 && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                      Filling Fast
                    </span>
                  )}
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendar className="text-blue-600" />
                    <span className="text-sm">{tour.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-blue-600" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUsers className="text-blue-600" />
                    <span className="text-sm">{seatsLeft} seats left of {tour.totalSeats}</span>
                  </div>
                </div>
                
                {/* Seats progress bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${percentBooked >= 80 ? 'bg-red-500' : 'bg-blue-600'}`}
                      style={{ width: `${percentBooked}%` }}
                    ></div>
                  </div>
                </div>
                
                {tour.highlights && tour.highlights.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaStar className="text-yellow-400 mt-1 flex-shrink-0" size={10} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500">Starting From</p>
                    <p className="text-xl font-bold text-blue-600">{tour.price}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GroupToursSection;
