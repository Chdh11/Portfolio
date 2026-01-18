import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (email: string, message: string) => {
  try {
    await resend.emails.send({
      from: 'Portfolio Contact Message <onboarding@resend.dev>',
      to: process.env.RECIPIENT_EMAIL!,
      replyTo: email,
      subject: `New Message from ${email}`,
      html: `
        <h2>New Message</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};