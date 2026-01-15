import React from 'react';

const BlogsSection = () => {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80",
      title: "Top 10 Things To Do In Pahalgam To Make The Best Of Your Visit",
      date: "January 8, 2026",
      readTime: "5 Min Read",
      link: "/blogs/things-to-do-in-pahalgam"
    },
    {
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
      title: "Complete Guide to Manali: Best Time to Visit & Places to Explore",
      date: "December 20, 2025",
      readTime: "7 Min Read",
      link: "/blogs/manali-travel-guide"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      title: "Ladakh Bike Trip: Everything You Need to Know Before You Go",
      date: "January 5, 2026",
      readTime: "10 Min Read",
      link: "/blogs/ladakh-bike-trip-guide"
    }
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Our Blogs</h2>
        <p className="text-lg text-gray-600">Some good reads to help you travel better across India!</p>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
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
              <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
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
