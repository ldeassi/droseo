import { Resend } from 'resend';

// Simple email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simple HTML sanitization (escape HTML characters)
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    // Input validation
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }), 
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ message: 'Invalid email format' }), 
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured');
      return new Response(
        JSON.stringify({ message: 'Server configuration error' }), 
        { status: 500 }
      );
    }

    // Sanitize inputs for HTML
    const sanitizedFirstName = escapeHtml(firstName);
    const sanitizedLastName = escapeHtml(lastName);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use resend.dev for testing
      to: ['leandrodeassis.fs@gmail.com'],
      replyTo: email, // User can still receive replies
      subject: `Contact Form Submission from ${sanitizedFirstName} ${sanitizedLastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .content { background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .message { background: #f9f9f9; padding: 15px; border-left: 4px solid #007cba; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${sanitizedFirstName} ${sanitizedLastName}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${sanitizedEmail}
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        Message:
        ${message}
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ message: 'Failed to send email', error: error.message }), 
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return new Response(
      JSON.stringify({ 
        message: 'Email sent successfully!',
        id: data.id // Resend provides a unique ID for tracking
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Failed to send email', 
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}