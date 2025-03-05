import express from 'express';
import { sendEmail,sendContact } from '../controllers/emailController.js';

const router = express.Router();

router.post('/send-email', sendEmail); // POST request to send an email
router.post('/send-contact',sendContact); // POST request to send an email

export default router;
