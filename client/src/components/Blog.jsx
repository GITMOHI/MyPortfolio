import React, { useEffect } from 'react';

// Sample blog data
// const blogs = [
//   {
//     blog_name: "Mastering JavaScript Essentials and All Fundamentals",
//     description: "In this blog post, we delve into the fundamentals of JavaScript, covering everything from basic syntax to advanced concepts. Whether you're a beginner or an experienced developer, this comprehensive guide will help you sharpen your JavaScript skills.",
//     image_url: "https://i.ibb.co/w0bs8Mb/joan-gamell-ZS67i1-HLllo-unsplash.jpg"
//   },
//   {
//     blog_name: "Building Scalable Applications with Node.js",
//     description: "Discover the power of Node.js for building scalable and efficient web applications. This blog post explores the features of Node.js and provides practical tips and tricks for leveraging its capabilities to develop high-performance backend systems.",
//     image_url: "https://i.ibb.co/VBCfcsH/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg"
//   },
//   {
//     blog_name: "Getting Started with React: A Beginner's Guide",
//     description: "Jumpstart your journey into React development with this beginner-friendly guide. Learn how to build interactive user interfaces with React components, manage state effectively, and harness the full potential of this popular JavaScript library.",
//     image_url: "https://i.ibb.co/VBCfcsH/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg"
//   },
//   {
//     blog_name: "Exploring Django: Building Web Applications with Python",
//     description: "Dive into Django, the powerful Python framework for building web applications. This blog post covers Django's core features, including its robust MVC architecture, ORM, and built-in admin interface. Follow along with practical examples to kickstart your Django development journey.",
//     image_url: "https://i.ibb.co/CK2TZFL/faisal-BI465ksrl-Ws-unsplash.jpg"
//   }
// ];



const BlogPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [blogs, setBlogs] = React.useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to send contact");
        }
  
        const data = await response.json();
        setBlogs(data);
        console.log("Response:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    getBlogs();
  }, []); // Runs only once when the component mounts
  

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#377681] mb-8">
          Latest Blog Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.image_url}
                alt={blog.blog_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#377681] mb-4">{blog.blog_name}</h2>
                <p className="text-gray-700 text-base mb-4">{blog.description}</p>
                <a
                  href="#"
                  className="text-[#377681] font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
