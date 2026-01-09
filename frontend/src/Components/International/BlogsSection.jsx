import React from 'react';

const BlogsSection = () => {
  const blogs = [
    {
      image: "https://wanderon-images.gumlet.io/blogs/new/2025/01/parks-in-kuala-lumpur.jpg",
      title: "Discover the 19 Best Parks in Kuala Lumpur in 2026",
      date: "January 8, 2026",
      readTime: "5 Min Read",
      link: "/blogs/parks-in-kuala-lumpur"
    },
    {
      image: "https://wanderon-images.gumlet.io/gallery/new/2026/01/08/1767859215674-islands-in-thailand-for-honeymoon.jpg",
      title: "Discover Top 15 Islands In Thailand For Honeymoon Bliss 2026",
      date: "May 14, 2026",
      readTime: "5 Min Read",
      link: "/blogs/islands-in-thailand-for-honeymoon"
    },
    {
      image: "https://wanderon-images.gumlet.io/blogs/new/2023/10/gondola-ride-in-autumn-in-kashmir-2023-10-21t224843.429-min.png",
      title: "Top 10 Things To Do In Pahalgam To Make The Best Of Your Visit",
      date: "January 8, 2026",
      readTime: "5 Min Read",
      link: "/blogs/things-to-do-in-pahalgam"
    }
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Our Blogs</h2>
        <p className="text-lg text-gray-600">Some good reads to help you travel better!</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                <a href={blog.link}>{blog.title}</a>
              </h3>
              <p className="text-sm text-gray-500">{blog.date} | {blog.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
