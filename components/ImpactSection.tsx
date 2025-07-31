import React, { useRef } from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { motion } from 'framer-motion';

const AnimatedStat: React.FC<{ value: number; label: string, suffix?: string }> = ({ value, label, suffix="" }) => {
  const { ref: countRef, startAnimation } = useAnimatedCounter(value, 2.5);
  const hasAnimated = useRef(false);

  const handleInView = () => {
      if (!hasAnimated.current) {
          startAnimation();
          hasAnimated.current = true;
      }
  };

  return (
    <motion.div 
      className="text-center p-4 rounded-lg"
      onViewportEnter={handleInView}
      viewport={{ once: true, amount: 0.8 }}
      whileHover={{ scale: 1.05, y: -5, backgroundColor: 'rgba(248, 250, 252, 1)' }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-5xl md:text-6xl font-extrabold text-primary">
        <span ref={countRef}>0</span>{suffix}
      </h3>
      <p className="text-slate-600 mt-2 text-lg">{label}</p>
    </motion.div>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
            Transparency is key to our mission. Here's a look at the tangible results of our collective efforts and your generous support.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <AnimatedStat value={12500} label="Children Educated" suffix="+"/>
          <AnimatedStat value={78} label="Communities Empowered" />
          <AnimatedStat value={2500000} label="Lives Touched" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;