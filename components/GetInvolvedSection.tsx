
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';

const GiftIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
);
const UsersIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const HeartHandshakeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 0 0-3.08v0c-.82-.82-2.13-.82-2.94 0l-.06.06L12 5Z"/></svg>
);

interface InvolvementOption {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    icon: React.ReactNode;
}

const involvementOptions: InvolvementOption[] = [
    { title: "Donate", description: "Your generosity fuels our projects. Every contribution, big or small, creates a ripple of positive change.", buttonText: "Donate Now", imageUrl: images.getInvolved.donate, icon: <GiftIcon /> },
    { title: "Volunteer", description: "Lend your skills and time to make a direct impact. Join our team of passionate volunteers on the ground.", buttonText: "Become a Volunteer", imageUrl: images.getInvolved.volunteer, icon: <UsersIcon /> },
    { title: "Partner", description: "Corporate partnerships amplify our reach and effectiveness. Let's collaborate for a greater good.", buttonText: "Partner With Us", imageUrl: images.getInvolved.partner, icon: <HeartHandshakeIcon /> }
];

const InvolvementCard: React.FC<{ option: InvolvementOption, index: number }> = ({ option, index }) => {
    return (
        <motion.div
            className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
        >
            <motion.img
                src={option.imageUrl}
                alt={option.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-full p-6 md:p-8 text-white flex flex-col justify-end"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1) 50%, transparent 70%)' }}
                initial={{ y: '38%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="text-primary-light mb-4">{option.icon}</div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{option.title}</h3>
                <p className="text-slate-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{option.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#contact" className="w-fit bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        {option.buttonText}
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

const GetInvolvedSection: React.FC = () => {
    return (
        <section id="get-involved" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">You Can Make a Difference</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Change is powered by people like you. Discover how you can contribute to our cause and help create a brighter future.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {involvementOptions.map((item, index) => (
                        <InvolvementCard key={index} option={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolvedSection;
