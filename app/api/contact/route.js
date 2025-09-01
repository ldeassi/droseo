// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { firstName, lastName, email, message } = req.body;

//   // Configure your transporter (example for Gmail)
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER, // Set in .env.local
//       pass: process.env.GMAIL_PASS, // Set in .env.local
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: process.env.GMAIL_USER,
//       subject: `Contact Form Submission from ${firstName} ${lastName}`,
//       text: message,
//       html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
//     });
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to send email', error });
//   }
// }
