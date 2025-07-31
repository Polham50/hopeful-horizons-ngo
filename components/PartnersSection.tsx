import React from 'react';
import { motion, Variants } from 'framer-motion';

const logos = [
  { name: "Innovate Corp" },
  { name: "Eco Solutions" },
  { name: "HealthForward" },
  { name: "Global Reach Inc." },
  { name: "Community Fund" },
  { name: "FutureBuild" },
];

const PartnersSection: React.FC = () => {
  const allLogos = [...logos, ...logos]; // Duplicate logos for a seamless loop

  const marqueeVariants: Variants = {
    animate: {
      x: [0, -1728], // (width 192px + margin 96px) * 6 logos
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  };
  
  return (
    <section id="partners" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Trusted Partners</h2>
          <p className="text-lg text-slate-500">We are proud to collaborate with these amazing organizations.</p>
        </motion.div>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {allLogos.map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-12 flex items-center justify-center h-20" style={{ width: '192px' }}>
                <span title={partner.name} className="text-2xl font-semibold text-slate-400 grayscale hover:grayscale-0 transition-all duration-300">
                    {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 85%, white 100%)'}}></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;