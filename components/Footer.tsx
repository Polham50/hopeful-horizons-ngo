
import React from 'react';
import { motion, Variants } from 'framer-motion';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
        {children}
    </a>
);

const footerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
        className="bg-slate-900 text-slate-400 py-12 px-6"
        variants={footerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div variants={footerItemVariants}>
            <h3 className="text-xl font-bold text-white mb-4">Hopeful Horizons</h3>
            <p>Empowering Change, One Community at a Time.</p>
          </motion.div>
          <motion.div variants={footerItemVariants}>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#get-involved" className="hover:text-white transition-colors">Donate</a></li>
            </ul>
          </motion.div>
          <motion.div variants={footerItemVariants}>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <SocialIcon href="#">
                {/* Twitter Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </SocialIcon>
              <SocialIcon href="#">
                {/* Facebook Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </SocialIcon>
              <SocialIcon href="#">
                {/* Instagram Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.141 0-3.493.011-4.71.067-2.61.12-3.793 1.3-3.91 3.91-.056 1.217-.066 1.566-.066 4.71s.01 3.493.066 4.71c.117 2.61 1.3 3.793 3.91 3.91 1.217.056 1.566.066 4.71.066s3.493-.01 4.71-.066c2.61-.117 3.793-1.3 3.91-3.91.056-1.217.066-1.566.066-4.71s-.01-3.493-.066-4.71c-.117-2.61-1.3-3.793-3.91-3.91-1.217-.056-1.566-.066-4.71-.066zM12 6.873c-2.849 0-5.152 2.303-5.152 5.127 0 2.824 2.303 5.127 5.152 5.127 2.824 0 5.127-2.303 5.127-5.127 0-2.824-2.303-5.127-5.127-5.127zm0 8.627c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5 3.5 1.568 3.5 3.5-1.568 3.5-3.5 3.5zm6.406-9.673c-.756 0-1.369.613-1.369 1.369s.613 1.369 1.369 1.369 1.369-.613 1.369-1.369-.613-1.369-1.369-1.369z"></path></svg>
              </SocialIcon>
            </div>
          </motion.div>
        </div>
        <motion.div variants={footerItemVariants} className="mt-12 pt-8 border-t border-slate-700 text-center text-sm">
          <p>&copy; {currentYear} Hopeful Horizons. All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
