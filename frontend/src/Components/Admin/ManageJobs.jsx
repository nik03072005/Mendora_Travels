import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const token = localStorage.getItem('token');

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/job/jobs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(response.data.data || []);
      } catch (error) {
        toast.error('Error fetching jobs: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [token]);

  // Handle job deletion
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;

    const toastId = toast.loading('Deleting job...');
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/job/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobs(jobs.filter((job) => job._id !== id));
      toast.update(toastId, {
        render: 'Job deleted successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: 'Error deleting job: ' + error.message,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Skeleton height={40} className="mb-4" />
        <Skeleton count={5} height={50} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Manage Jobs</h1>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 sm:px-6">
                    Job Title
                  </th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 sm:px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentJobs.map((job) => (
                  <tr key={job._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 sm:px-6 truncate max-w-xs">
                      {job.title}
                    </td>
                    <td className="px-4 py-3 text-center text-sm sm:px-6">
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete Job"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end items-center mt-4 space-x-4">
            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`text-sm ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 cursor-pointer hover:text-blue-800'
              }`}
              title="Previous Page"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`text-sm ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 cursor-pointer hover:text-blue-800'
              }`}
              title="Next Page"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageJobs;