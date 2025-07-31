import React from 'react';
import { motion } from 'framer-motion';

const WorkCard: React.FC<{ icon: React.ReactNode; title: string; description: string; index: number }> = ({ icon, title, description, index }) => (
  <motion.div 
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
  >
    <div className="bg-primary-light text-primary p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </motion.div>
);

const BookOpenIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const DropletIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
);
const HeartHandshakeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 0 0-3.08v0c-.82-.82-2.13-.82-2.94 0l-.06.06L12 5Z"/></svg>
);

const OurWorkSection: React.FC = () => {
  const workItems = [
    {
      icon: <BookOpenIcon className="w-8 h-8"/>,
      title: 'Education for All',
      description: 'Providing access to quality education and learning resources for children in underserved regions.',
    },
    {
      icon: <DropletIcon className="w-8 h-8"/>,
      title: 'Clean Water Initiative',
      description: 'Building wells and implementing water filtration systems to bring clean, safe drinking water to remote communities.',
    },
    {
      icon: <HeartHandshakeIcon className="w-8 h-8"/>,
      title: 'Community Health',
      description: 'Establishing local clinics and health awareness programs to improve the well-being of families.',
    },
  ];

  return (
    <section id="work" className="py-16 md:py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="container mx-auto">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Work</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We focus on key areas to create a holistic and sustainable impact. Here's a look at our primary initiatives.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
                {workItems.map((item, index) => (
                <WorkCard key={index} {...item} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default OurWorkSection;