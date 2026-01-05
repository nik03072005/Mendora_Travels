import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import PNavbar from '../Components/PackageNavbar';

const BlogDetail = () => {
  const { title } = useParams(); // Changed from 'id' to 'title' to match slug-based routing
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch blog by slug
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get-blog-by-slug/${title}`);
        setBlog(response.data);
      } catch (error) {
        toast.error('Error fetching blog: ' + error.message);
        navigate('/blogs'); // Redirect to blog list on error
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [title, navigate]);

  if (loading) {
    return (
      <>
        <PNavbar />
        <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton height={400} className="mb-4 rounded-xl" />
            <Skeleton height={40} width={300} className="mb-4" />
            <Skeleton count={10} />
          </div>
        </div>
      </>
    );
  }

  const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = DOMPurify.sanitize(html);
    return div.textContent || div.innerText || '';
  };

  if (!blog) {
    return (
      <>
        <PNavbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-16">
          <div className="text-center text-gray-500 text-lg">Blog not found.</div>
        </div>
      </>
    );
  }

  const description = stripHtml(blog.content).slice(0, 50);

  return (
    <>
      <Helmet>
        <title>{blog.title} | All About Our Adventures</title>
        <meta name="description" content={description} />
      </Helmet>
      <PNavbar />
      <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={blog.bannerImage}
            alt={blog.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl mb-6 sm:mb-8 shadow-lg"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/1200x400?text=Image+Not+Found')}
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900">{blog.title}</h1>
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
            <div
              className="prose sm:prose-lg max-w-none prose-img:rounded-lg prose-img:max-w-full prose-headings:text-gray-900 text-justify"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;