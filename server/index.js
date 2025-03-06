import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRoutes from './routes/email.js';

dotenv.config();

const app = express();

app.use(cors()); // Allow frontend to call the API
app.use(express.json()); // Parse JSON request body

app.use('/api',emailRoutes); // Load email routes





// Sample blog data
const blogs = [
  {
    blog_name: "Mastering JavaScript Essentials and All Fundamentals",
    description: "In this blog post, we delve into the fundamentals of JavaScript, covering everything from basic syntax to advanced concepts. Whether you're a beginner or an experienced developer, this comprehensive guide will help you sharpen your JavaScript skills.",
    image_url: "https://i.ibb.co/w0bs8Mb/joan-gamell-ZS67i1-HLllo-unsplash.jpg"
  },
  {
    blog_name: "Building Scalable Applications with Node.js",
    description: "Discover the power of Node.js for building scalable and efficient web applications. This blog post explores the features of Node.js and provides practical tips and tricks for leveraging its capabilities to develop high-performance backend systems.",
    image_url: "https://i.ibb.co/VBCfcsH/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg"
  },
  {
    blog_name: "Getting Started with React: A Beginner's Guide",
    description: "Jumpstart your journey into React development with this beginner-friendly guide. Learn how to build interactive user interfaces with React components, manage state effectively, and harness the full potential of this popular JavaScript library.",
    image_url: "https://i.ibb.co/VBCfcsH/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg"
  },
  {
    blog_name: "Exploring Django: Building Web Applications with Python",
    description: "Dive into Django, the powerful Python framework for building web applications. This blog post covers Django's core features, including its robust MVC architecture, ORM, and built-in admin interface. Follow along with practical examples to kickstart your Django development journey.",
    image_url: "https://i.ibb.co/CK2TZFL/faisal-BI465ksrl-Ws-unsplash.jpg"
  }
];

app.get('/api/blogs', (req, res) =>{
  console.log(blogs)
  res.json(blogs);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
