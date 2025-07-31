
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials, Testimonial } from '../data/testimonials';

const QuoteIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-2.908 1.698-4.962 4.962-4.962h.983v3.983h-.983c-.908 0-1.962.433-1.962 1.962v6.408h-3v-6.408h-3v6.408h3zm-11 0v-7.391c0-2.908 1.698-4.962 4.962-4.962h.983v3.983h-.983c-.908 0-1.962.433-1.962 1.962v6.408h-3v-6.408h-3v6.408h3z"/>
    </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial, index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <QuoteIcon className="text-primary-light w-10 h-10 mb-4" />
      <p className="text-slate-600 mb-6 flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
        <div>
          <p className="font-bold text-slate-900">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="container mx-auto">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Voices from Our Community</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Hear from the people we've worked with and for. Their stories fuel our passion and drive our mission forward.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={index} testimonial={item} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default TestimonialsSection;
