import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  const { name, email, company, projectType, budget, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Please fill in all required fields" });
  }

  console.log(process.env.EMAIL_USER);
  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password (not your real password)
    },
  });

  const mailOptions = {
    from: email,
    to: "umohi559@gmail.com", // Receiver email
    subject: `New Project Inquiry from ${name}`,
    text: `Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Project Type: ${projectType}
Budget: ${budget}
Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};


export const sendContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Please fill in all required fields" });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password (not your real password)
    },
  });

  // Email content
  const mailOptions = {
    from: email, // Sender email
    to: "umohi559@gmail.com", // Receiver email
    subject: `New Contact Form Submission: ${subject || "No Subject"}`, // Use subject or default
    text: `Name: ${name}
Email: ${email}
Subject: ${subject || "N/A"}
Message: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
};
