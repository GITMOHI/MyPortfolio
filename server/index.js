import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRoutes from './routes/email.js';

dotenv.config();

const app = express();

app.use(cors()); // Allow frontend to call the API
app.use(express.json()); // Parse JSON request body

app.use('/api',emailRoutes); // Load email routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
