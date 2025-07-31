
import React from 'react';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
    return (
        <section id="newsletter" className="py-16 md:py-20 px-6 bg-primary/10">
            <motion.div
                className="container mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stay Connected</h2>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
                    Join our newsletter to receive the latest updates, stories, and news about our initiatives directly in your inbox.
                </p>
                <form 
                    className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full px-5 py-3 border border-slate-300 rounded-full focus:ring-2 focus:ring-primary-light focus:border-primary transition-all"
                        aria-label="Email address for newsletter"
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        Subscribe
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default NewsletterSection;
