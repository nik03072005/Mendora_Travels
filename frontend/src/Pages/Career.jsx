import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PNavbar from "../Components/PackageNavbar";
import careerbanner from "../assets/joinourteam.jpg";
import { Helmet } from "react-helmet-async";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const token = localStorage.getItem("token");

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/job/jobs`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setJobs(response.data.data || []);
      } catch (error) {
        toast.error("Error fetching jobs: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [token]);

  // Toggle job content visibility
  const toggleJobContent = (id) => {
    setSelectedJobId(selectedJobId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl">
        <Skeleton height={40} className="mb-4" />
        <Skeleton count={5} height={50} />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Careers at Trip Tortoise | Join Our Team & Grow With Us</title>

        <meta
          name="description"
          content="Explore exciting career opportunities at Trip Tortoise. Join a team that values innovation, growth, and your unique contributions. Apply today and build your future with us."
        />
      </Helmet>
      <PNavbar />
      {/* Full-Width Banner Section */}
      <div className="w-full mt-18">
        <img
          src={careerbanner}
          alt="Career Banner"
          className="w-full h-96 sm:h-64 lg:h-[500px] object-cover"
        />
      </div>
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-6xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
          Job Listings
        </h1>
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found.</p>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job._id} className="border rounded-lg shadow-sm">
                <button
                  onClick={() => toggleJobContent(job._id)}
                  className="w-full cursor-pointer flex justify-between items-center px-4 py-3 text-left text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-100 hover:rounded-lg focus:outline-none"
                >
                  <span className="truncate">{job.title}</span>
                  <FontAwesomeIcon
                    icon={
                      selectedJobId === job._id ? faChevronUp : faChevronDown
                    }
                    className="text-gray-500"
                  />
                </button>
                {selectedJobId === job._id && (
                  <div className="px-4 py-3 prose prose-sm sm:prose-base max-w-none prose-img:rounded-lg prose-img:w-full prose-img:object-cover">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(job.content),
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Career;
