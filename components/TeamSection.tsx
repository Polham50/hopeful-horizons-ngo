
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { team, TeamMember } from '../data/team';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    className="relative group overflow-hidden rounded-xl shadow-lg"
    variants={itemVariants}
  >
    <img src={member.imageUrl} alt={member.name} className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="text-primary-light transition-opacity duration-300 opacity-0 group-hover:opacity-100">{member.role}</p>
    </div>
  </motion.div>
);

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The passionate individuals dedicated to driving our mission forward and creating lasting change.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;