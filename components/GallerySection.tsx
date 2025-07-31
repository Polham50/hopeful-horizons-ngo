
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../data/images';

const galleryCategories = ['All', ...new Set(images.gallery.map(img => img.category))];

const GallerySection: React.FC<{ onImageSelect: (index: number) => void }> = ({ onImageSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredImages = selectedCategory === 'All' 
    ? images.gallery 
    : images.gallery.filter(img => img.category === selectedCategory);

  const findOriginalIndex = (src: string) => {
    return images.gallery.findIndex(img => img.src === src);
  }

  return (
    <section id="gallery" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A visual journey through our work, the communities we serve, and the lives we've touched.
          </p>
        </motion.div>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
            {galleryCategories.map(category => (
                <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 relative ${selectedCategory === category ? 'text-white' : 'text-slate-600 hover:text-primary'}`}
                    whileHover={{ y: -2 }}
                >
                    {selectedCategory === category && (
                        <motion.div
                            layoutId="gallery-category-pill"
                            className="absolute inset-0 bg-primary rounded-full"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        ></motion.div>
                    )}
                    <span className="relative z-10">{category}</span>
                </motion.button>
            ))}
        </div>

        <motion.div
          layout
          className="[column-count:2] md:[column-count:3] lg:[column-count:4] gap-4 space-y-4"
        >
          <AnimatePresence>
            {filteredImages.map((image) => {
                const originalIndex = findOriginalIndex(image.src);
                return (
                    <motion.div
                        key={image.src}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer break-inside-avoid"
                        onClick={() => onImageSelect(originalIndex)}
                        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
                    >
                        <img src={image.src} alt={image.caption} className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <p className="text-white text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">{image.caption}</p>
                        </div>
                    </motion.div>
                )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
