import React, { useRef } from "react";
import RequestCallbackCard from "../Components/Callback/CallbackCard";
import { LiaHotelSolid } from "react-icons/lia";
import { MdEmojiTransportation } from "react-icons/md";
import { GiBinoculars } from "react-icons/gi";
import PNavbar from "../Components/PackageNavbar";
 const inclusions = [
    {
      icon: <LiaHotelSolid />, // Replace with actual SVG or image as needed
      title: "Hotels Included",
    },
    {
      icon: <MdEmojiTransportation />, // Replace with actual SVG or image
      title: "Transport Included",
    },
    {
      icon: <GiBinoculars />, // Replace with actual SVG or image
      title: "Sightseeing Included",
    },
  ];

const tripData = {
  name: "Pattaya Bangkok Adventure",
  originalPrice: 15999,
  discountedPrice: 13999,
  noOfDays: 6,
  noOfNights: 5,
  noOfPersons: 2,
 tripSummary: [
  {
    day: 1,
    title: "Arrive at Bangkok - Pattaya",
    transfer: "Transfer from Bangkok Airport to Pattaya Hotel - Private Transfer",
    activity: "Day Free Leisure",
    description: "Arrival in Bangkok and transfer to Pattaya Hotel. Enjoy the rest of the day at leisure."
  },
  {
    day: 2,
    title: "Coral Island Tour by Speedboat with Indian Lunch - Join Tour",
    transfer: "Transfer from Pattaya Hotel to meeting point",
    activity: "Coral Island by speedboat and enjoy the soft white sand",
    description: "Post breakfast, explore Coral Island and enjoy water sports followed by Indian lunch."
  },
  
],
highlights: [
  "Enjoy water sports and pristine beaches on this popular island getaway.",
  "Experience Pattaya's nightlife with lively bars, clubs, and street performances.",
  "Climb the Temple of Dawn for stunning panoramic views of Bangkok.",
  "Discover the opulent royal residence and the sacred Emerald Buddha temple."
]
,

  hotelsIncluded: [
  {
    city: "Pattaya",
    nights: "3 Nights",
    name: "Golden Tulip Essential 3* or Similar."
  },
  {
    city: "Bangkok",
    nights: "2 Nights",
    name: "Aspen Suites Hotel 4* or Similar."
  }
]
,
  packageDetails: {
  included: [
    "03 nights stay at selected hotel option or similar in Pattaya.",
    "02 nights stay at selected hotel option or similar in Bangkok.",
    "Daily breakfast, except on Day 1.",
    "Airport / Hotel / Airport transfers on Private basis.",
    "Sightseeing as per itinerary on sharing basis (Seat in Coach), unless specified.",
    "Coral Island Tour by Speedboat with Indian Lunch on Sharing Basis.",
    "Bangkok City Tour on Sharing Basis."
  ],
  excluded: [
    "Anything not mentioned in Inclusions.",
    "GST, TCS & International and Domestic Airfare.",
    "Meals not mentioned in the itinerary.",
    "The rates won’t be valid in the travel dates falls between blackout dates (New Year, Lunar New Year).",
    "Transfer Services from Hotel - Meeting point on Shared tours if hotel is located outskirts.",
    "Tourism Tax & Midnight surcharge (if applicable).",
    "The rates are valid for minimum 02 adults travelling together at all times."
  ]
}
,
  imageUrls: [
    "https://plus.unsplash.com/premium_photo-1693149386423-2e4e264712e5?q=80&w=1932&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?q=80&w=1935&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661766983546-c923002564a5?q=80&w=2070&auto=format&fit=crop",
  ],
};

export default function TripCard() {
  const sectionRefs = {
    Itinerary: useRef(null),
    "Trip Summary": useRef(null),
    Hotels: useRef(null),
    // Packages: useRef(null),
    Inclusions: useRef(null),
    Reviews: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Map tripData to selectedPackage for RequestCallbackCard
  const selectedPackage = {
    _id: tripData._id || "trip-123", // Use a fallback ID if not present
    title: tripData.name,
    discountedPrice: `₹${tripData.discountedPrice}`,
    image: tripData.imageUrls[0],
  };

  return (
    <div className="bg-gray-50 min-h-screen ">
      <PNavbar />
      <div className="mt-16 w-full max-w-6xl mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
    {/* Main Image */}
    <img
      src={tripData.imageUrls[0]}
      alt="Main"
      className="md:col-span-2 w-full h-96 lg:h-[450px]  object-cover rounded"
    />

    {/* Side Images */}
    <div className="hidden md:flex flex-col gap-2">
      <img
        src={tripData.imageUrls[1]}
        alt="Side1"
        className="w-full h-48 lg:h-[225px] object-cover rounded"
      />
      <img
        src={tripData.imageUrls[2]}
        alt="Side2"
        className="w-full h-48 lg:h-[225px] object-cover rounded"
      />
    </div>
  </div>
</div>


      <div className=" mt-0 flex gap-4 max-w-6xl    mx-auto p-4">
        
        

        <div>
          {/* Basic Info and RequestCallbackCard */}
        <div className=" flex   flex-col   ">
          {/* Basic Info */}
          <div >
            <div className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-sm text-gray-500">
              {tripData.noOfNights} Nights {tripData.noOfDays} Days
            </p>
            <h2 className="text-xl font-bold mt-1">{tripData.name}</h2>
            <div className="flex justify-between m-2">
              <div className="mt-1 flex items-center gap-2">
                <span className="line-through text-gray-500">
                  ₹{tripData.originalPrice}
                </span>
                <span className="text-red-600 font-bold text-lg">
                  ₹{tripData.discountedPrice}
                </span>
              </div>

              {/* <button className="bg-red-600 text-white px-4 py-2 rounded mt-2">
              Download Itinerary
            </button> */}
            </div>
            </div>

            <section className="bg-white shadow-lg mt-2 rounded-lg py-8">
              <div className="max-w-5xl mx-auto px-4 flex  gap-6 text-center">
                {inclusions.map((item, index) => (
                  <div
                    key={index}
                    className="flex  gap-2"
                  >
                    <div className="text-4xl text-red-600">{item.icon}</div>
                    <div className="text-sm font-medium text-gray-800">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* <div className="mt-6 flex justify-between items-center">
              <button className="bg-red-600 text-white px-6 py-2 rounded">
                Get Quote
              </button>
            </div> */}
            <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Package Highlights
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {tripData.highlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">⦿</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          
        </div>

        {/* Sticky Tabs */}
        <div className="sticky  top-14 z-20 bg-white shadow-md mt-8 border border-gray-300 rounded-md overflow-x-auto">
          <div className="flex gap-8 px-6 py-3 w-max min-w-full">
            {Object.keys(sectionRefs).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="
          relative
          text-sm font-semibold
          text-gray-600
          hover:text-red-600
          transition-colors duration-300
          border-b-4 border-transparent
          hover:border-red-600
          whitespace-nowrap
          after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-red-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
          hover:after:scale-x-100
          focus:outline-none
          "
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Sections */}
        <div className="space-y-10  mt-6">
          <section ref={sectionRefs["Itinerary"]}>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Itinerary
            </h3>

            <div className="flex flex-col gap-4">
              {tripData.tripSummary.map((item) => (
                <div
                  key={item.day}
                  className="border border-red-300 rounded-xl p-4 bg-white shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                      Day {item.day}
                    </span>
                    <h4 className="text-red-700 font-semibold text-md">
                      {item.title || "Day Plan"}
                    </h4>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700 text-sm leading-relaxed">
                    {item.description.split("\n").map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section ref={sectionRefs["Trip Summary"]} className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Trip Summary
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {tripData.noOfNights} Nights, {tripData.noOfDays} Days for{" "}
              {tripData.noOfPersons} persons.
            </p>

            <div className="space-y-4">
              {tripData.tripSummary.map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-md text-gray-900 mb-2">
                    Day {item.day} – {item.title}
                  </h4>

                  <div className="flex items-start gap-2 text-sm text-gray-800 mb-1">
                    <span className="mt-0.5 text-gray-600">🚗</span>
                    <p>
                      <span className="font-semibold">Transfer:</span>{" "}
                      {item.transfer}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-gray-800">
                    <span className="mt-0.5 text-gray-600">⚠️</span>
                    <p>
                      <span className="font-semibold">Activity:</span>{" "}
                      {item.activity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section ref={sectionRefs["Hotels"]} className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Hotel Accommodation
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      City
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      No. Of Nights
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      Hotel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tripData.hotelsIncluded.map((hotel, idx) => (
                    <tr key={idx} className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.city}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.nights}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* <section ref={sectionRefs["Packages"]}>
          <h3 className="text-lg font-semibold text-red-600 mb-2">Packages</h3>
          <ul className="list-disc list-inside">
            {tripData.packageDetails.included.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section> */}

          <section ref={sectionRefs["Inclusions"]} className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              What’s inside the package?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Inclusions
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {tripData.packageDetails.included.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mt-1 mr-2">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Exclusions
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {tripData.packageDetails.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mt-1 mr-2">✘</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section ref={sectionRefs["Reviews"]}>
            <h3 className="text-lg font-semibold text-red-600 mb-2">Reviews</h3>
            <p className="italic text-gray-500">
              Reviews section coming soon...
            </p>
          </section>
        </div>
        </div>
         {/* Sticky RequestCallbackCard */}
          <div className=" hidden lg:flex w-[750px]  ">
            <div className="sticky  top-16 z-20 h-fit">
              <RequestCallbackCard selectedPackage={selectedPackage} />
            </div>
          </div>
      
      </div>
     
    </div>
  );
}
