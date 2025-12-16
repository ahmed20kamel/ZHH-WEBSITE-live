'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { sendEmail, ContactFormData } from '@/lib/emailjs';
import { fadeInUp } from '@/lib/animations';
import Button from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await sendEmail(data);
      setSubmitMessage({
        type: result.success ? 'success' : 'error',
        text: result.message,
      });

      if (result.success) {
        reset();
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="relative">
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="peer pt-4 pb-1 placeholder-transparent"
              placeholder="Your name"
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-200 
                peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00a78a] 
                peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-600"
            >
              Name *
            </label>
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <Input
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="peer pt-4 pb-1 placeholder-transparent"
              placeholder="you@example.com"
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-200 
                peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00a78a] 
                peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-600"
            >
              Email *
            </label>
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <div className="relative">
          <Input
            id="phone"
            {...register('phone')}
            className="peer pt-4 pb-1 placeholder-transparent"
            placeholder="+971 XX XXX XXXX"
          />
          <label
            htmlFor="phone"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-200 
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00a78a] 
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-600"
          >
            Phone (optional)
          </label>
        </div>
      </div>

      <div>
        <div className="relative">
          <Textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={6}
            className="peer pt-5 pb-3 placeholder-transparent"
            placeholder="Your message..."
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-4 top-4 text-sm text-gray-500 transition-all duration-200 
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00a78a]
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-600"
          >
            Message *
          </label>
        </div>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {submitMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            submitMessage.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitMessage.text}
        </motion.div>
      )}

      <Button
        type="submit"
        size="md"
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
}

