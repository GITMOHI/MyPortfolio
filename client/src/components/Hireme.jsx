import React, { useState } from 'react';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaCommentDots, 
  FaBriefcase, 
  FaProjectDiagram 
} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success('Project inquiry sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        });
      } else {
        toast.error('Failed to send project inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 mx-auto ">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl border-t-4 border-[#377681]">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#377681] mb-4">
            Collaborate on Your Next Project
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Looking for a skilled developer to bring your ideas to life? Fill out the form below, and let's discuss how I can help you achieve your project goals.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#377681]"
                required
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#377681]"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (Optional)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#377681]"
              />
            </div>

            <div className="relative">
              <FaProjectDiagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#377681] text-gray-600"
              >
                <option value="">Select Project Type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App</option>
                <option value="backend-api">Backend/API</option>
                <option value="full-stack">Full Stack</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project requirements, goals, and any specific details"
              rows="5"
              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#377681]"
              required
            ></textarea>
          </div>

          <div className="relative">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#377681] text-gray-600"
            >
              <option value="">Estimated Project Budget</option>
              <option value="0-1000">$0 - $1,000</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-25000">$10,000 - $25,000</option>
              <option value="25000+">$25,000+</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full btn bg-[#377681] hover:bg-[#2c5c6b] text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-3 text-lg"
          >
            <FaPaperPlane className="text-xl" /> Send Project Inquiry
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          All information is confidential. I'll review your project and respond within 24-48 hours.
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default HireMe;