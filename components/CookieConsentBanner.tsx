
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsentBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // We add a small delay to prevent layout shift on initial load
        const timer = setTimeout(() => {
            if (!localStorage.getItem('cookie_consent_given')) {
                setIsVisible(true);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent_given', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-0 left-0 right-0 bg-slate-800/90 backdrop-blur-sm text-white p-5 z-50 shadow-2xl"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-300 text-center md:text-left">
                            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                        </p>
                        <button
                            onClick={handleAccept}
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 flex-shrink-0"
                            aria-label="Accept cookies"
                        >
                            Accept
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsentBanner;