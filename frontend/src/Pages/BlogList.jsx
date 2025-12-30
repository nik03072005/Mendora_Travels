import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from 'react-helmet-async';
import PNavbar from '../Components/PackageNavbar';
import slugify from 'slugify';

// Helper function to create a URL-friendly slug from the title
const createSlug = (title) => {
  if (!title || typeof title !== 'string') {
    return '';
  }

  return slugify(title, {
    lower: true,
    strict: true, // Remove special characters
    remove: /[*+~.()'"!:@]/g, // Remove additional special characters
  });
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get-blogs`);
        setBlogs(response.data.blogs);
      } catch (error) {
        toast.error('Error fetching blogs: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Travel Stories & Destination Guides | All About Our Adventures Blog</title>
        <meta
          name="description"
          content="Get inspired for your next journey! Explore travel stories, destination guides, and tips from the All About Our Adventures blog archive."
        />
      </Helmet>
      <PNavbar />
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Discover Our Adventures | Travel Blogs
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mx-4 sm:mx-6 lg:mx-12 xl:mx-50">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border rounded-lg shadow-md w-full">
                <Skeleton height={192} className="w-full" />
                <div className="p-4">
                  <Skeleton count={2} />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 text-base sm:text-lg">No blogs available.</p>
        ) : (
          <div className="px-4 py-4 w-full mx-auto max-w-6xl relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="border rounded-lg shadow-md cursor-pointer hover-shadow-lg transition-transform transform hover:scale-105 bg-white w-full"
                  onClick={() => navigate(`/blog/${createSlug(blog.title)}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      navigate(`/blog/${createSlug(blog.title)}`);
                    }
                  }}
                >
                  <img
                    src={blog.bannerImage}
                    alt={blog.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/300x192?text=Image+Not+Found')}
                    loading="lazy"
                  />
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold line-clamp-2">{blog.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;