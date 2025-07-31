
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, FAQItem } from '../data/faq';

const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      className="border-b border-slate-200"
      initial={{ borderRadius: 8 }}
    >
      <motion.button
        className="w-full flex justify-between items-center text-left py-5 px-6 font-semibold text-lg text-slate-800"
        onClick={onClick}
        whileHover={{ backgroundColor: 'rgba(241, 245, 249, 1)'}}
      >
        {item.question}
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-slate-600">{item.answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
            <div className="container mx-auto">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Have questions? We've got answers. Here are some of the most common inquiries we receive.
                    </p>
                </motion.div>
                <motion.div 
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="bg-white rounded-lg shadow-lg">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                item={faq}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
