
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState<{ status: 'idle' | 'submitting' | 'submitted' }>({ status: 'idle' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState({ status: 'submitting' });
        // Simulate API call
        setTimeout(() => {
            setFormState({ status: 'submitted' });
        }, 2000);
    };


    return (
        <section id="contact" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
            <motion.div
                className="container mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8">
                            Have questions, ideas, or want to collaborate? We'd love to hear from you. Reach out to us, and let's start a conversation.
                        </motion.p>
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary-light text-primary p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">Email Us</h4>
                                    <a href="mailto:contact@hopefulhorizons.org" className="text-primary hover:underline">contact@hopefulhorizons.org</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary-light text-primary p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">Call Us</h4>
                                    <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-lg shadow-md">
                        <AnimatePresence mode="wait">
                            {formState.status === 'submitted' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-12"
                                >
                                    <div className="mx-auto bg-primary-light text-primary rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                                    <p className="text-slate-600">Your message has been sent successfully. We'll be in touch soon.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-6"
                                    onSubmit={handleSubmit}
                                >
                                    <motion.div variants={itemVariants}>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary" placeholder="John Doe" required disabled={formState.status === 'submitting'} />
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary" placeholder="you@example.com" required disabled={formState.status === 'submitting'} />
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                        <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Your message..." required disabled={formState.status === 'submitting'}></textarea>
                                    </motion.div>
                                    <motion.button variants={itemVariants} type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:bg-primary/70 disabled:scale-100" disabled={formState.status === 'submitting'}>
                                        {formState.status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;