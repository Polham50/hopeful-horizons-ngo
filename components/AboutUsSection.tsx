
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { images } from '../data/images';

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.5,
        }
    }
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const image1Variants: Variants = {
    hidden: { scale: 1.1, x: -20 },
    visible: { scale: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

const image2Variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const AboutUsSection: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
            <motion.div
                className="container mx-auto"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={textVariants}>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-primary text-lg font-semibold mb-6">Empowering Change, One Community at a Time.</p>
                        <p className="text-slate-600 mb-4">
                        Hopeful Horizons was founded on the belief that every individual deserves the opportunity to thrive. We work tirelessly to tackle systemic issues, providing sustainable solutions in education, healthcare, and economic development.
                        </p>
                        <p className="text-slate-600">
                        Our approach is collaborative and community-driven. We partner with local leaders to ensure our programs are culturally sensitive, effective, and create lasting, positive impact.
                        </p>
                    </motion.div>
                    <div className="relative h-96 w-full">
                         <motion.img 
                            src={images.about1}
                            alt="Smiling children" 
                            className="absolute top-0 left-0 h-full w-full object-cover rounded-lg shadow-2xl"
                            variants={image1Variants}
                            whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
                        />
                        <motion.img 
                            src={images.about2}
                            alt="Volunteers working" 
                            className="absolute -bottom-8 -right-8 h-48 w-64 object-cover rounded-lg border-8 border-white shadow-xl"
                            variants={image2Variants}
                            whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutUsSection;
