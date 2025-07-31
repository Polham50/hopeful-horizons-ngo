
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { images } from '../data/images';

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        }
    }
};

const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const textContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ConvenerSection: React.FC = () => {
    return (
        <section id="convener" className="py-16 md:py-24 px-6 bg-slate-100 overflow-hidden">
            <motion.div
                className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    className="relative w-full h-96 md:h-[500px]"
                    variants={imageVariants}
                >
                    <img 
                        src={images.convener} 
                        alt="Portrait of the Founder" 
                        className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl object-[top_center]"
                    />
                </motion.div>
                
                <motion.div variants={textContainerVariants}>
                    <motion.h2 variants={textVariants} className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">A Word From Our Founder</motion.h2>
                    <motion.blockquote variants={textVariants} className="text-lg lg:text-xl text-slate-700 italic border-l-4 border-primary pl-6 py-2 mb-6">
                        "True change begins not with a grand plan, but with a single, unwavering belief in the potential of humanity. Our journey is a testament to the power of community, compassion, and the courage to act."
                    </motion.blockquote>
                    <motion.div variants={textVariants}>
                        <p className="text-xl font-bold text-slate-900">Dr. Evelyn Reed</p>
                        <p className="text-md text-primary font-semibold">Founder & Chief Convener</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ConvenerSection;
