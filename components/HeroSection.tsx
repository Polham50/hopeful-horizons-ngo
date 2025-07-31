
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src={images.hero}
        alt="Community volunteers working together"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center px-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Creating a Better Future, Together.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          We are committed to empowering communities, fostering education, and providing essential resources to those in need across the globe.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#about" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Learn More
          </a>
          <a href="#get-involved" className="bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Get Involved
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
