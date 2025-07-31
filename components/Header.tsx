
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const LeafIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1"/><path d="M15.5 5.5A2.5 2.5 0 0 1 18 8V13a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a2.5 2.5 0 0 0-5 0v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a2.5 2.5 0 0 1 2.5-2.5z"/></svg>
);

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const navContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#work', label: 'Our Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a href="#home" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors" whileHover={{ scale: 1.05 }}>
          <LeafIcon className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-slate-900">Hopeful Horizons</span>
        </motion.a>
        <motion.nav 
            className="hidden md:flex items-center gap-8"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
        >
          {navLinks.map((link) => (
            <motion.a 
                key={link.href} 
                href={link.href} 
                className="text-slate-700 font-medium hover:text-primary transition-colors"
                variants={navItemVariants}
                whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>
        <a href="#get-involved" className="hidden md:inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Donate Now
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
