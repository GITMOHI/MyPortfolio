import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const apiUrl = import.meta.env.VITE_API_URL;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(apiUrl);
      // Send form data to the backend
      const response = await fetch(`${apiUrl}/api/send-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsLoading(false);
        // Show success toast
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset the form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setIsLoading(false);
        // Show error toast if the response is not OK
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Submission error:", error);

      // Show error toast if an exception occurs
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen shadow-2xl py-12 px-4 sm:px-6 lg:px-8 mx-auto bg-white text-black">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1>
        <p className="text-gray-600 mb-8">
          Whether you have a project in mind, a question, or just want to say
          hello, I'd love to hear from you! Feel free to reach out using the
          form below or through my social media channels.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 bg-white  block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-white mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              className="bg-white  mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Hi, I'd like to discuss a project with you..."
              value={formData.message}
              onChange={handleChange}
              className=" bg-white mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-bold py-4 w-full bg-indigo-600 text-white px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
            disabled={isLoading}
          >
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              Email:{" "}
              <a
                href="umohi559@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                umohi559@gmail.com
              </a>
            </li>
            <li>Phone: 01625680207</li>
            <li>Location:Bogura</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              className="text-gray-600 hover:text-indigo-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 hover:text-indigo-600"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              className="text-gray-600 hover:text-indigo-600"
            >
              Twitter
            </a>
            <a
              href="https://medium.com/@yourusername"
              className="text-gray-600 hover:text-indigo-600"
            >
              Medium
            </a>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
