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
      <div className="container mx-auto p-4">
        <Skeleton height={400} className="mb-4" />
        <Skeleton height={40} width={300} className="mb-4" />
        <Skeleton count={10} />
      </div>
    );
  }

  const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = DOMPurify.sanitize(html);
    return div.textContent || div.innerText || '';
  };

  if (!blog) {
    return <div className="container mx-auto p-4 text-center text-gray-500">Blog not found.</div>;
  }

  const description = stripHtml(blog.content).slice(0, 50);

  return (
    <>
      <Helmet>
        <title>{blog.title} | All About Our Adventures</title>
        <meta name="description" content={description} />
      </Helmet>
      <PNavbar />
      <div className="container mx-auto p-4 max-w-6xl text-justify mt-14">
        <img
          src={blog.bannerImage}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
          onError={(e) => (e.target.src = 'https://via.placeholder.com/1200x400?text=Image+Not+Found')}
        />
        <h1 className="text-4xl font-bold mb-6 text-center">{blog.title}</h1>
        <div
          className="prose max-w-none prose-img:rounded-lg prose-img:max-w-full"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
        />
      </div>
    </>
  );
};

export default BlogDetail;