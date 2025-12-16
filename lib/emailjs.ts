import emailjs from '@emailjs/browser';

// Initialize EmailJS (you'll need to set these in environment variables)
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      return {
        success: false,
        message: 'Email service is not configured. Please set up EmailJS environment variables.',
      };
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_name: 'ZHH Group Holding',
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later or contact us directly.',
    };
  }
}

