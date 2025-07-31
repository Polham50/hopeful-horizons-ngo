
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import OurWorkSection from './components/OurWorkSection';
import ImpactSection from './components/ImpactSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PostModal from './components/PostModal';
import { Post } from './data/posts';
import { AnimatePresence } from 'framer-motion';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import BackToTopButton from './components/BackToTopButton';
import ConvenerSection from './components/ConvenerSection';
import FAQSection from './components/FAQSection';
import NewsletterSection from './components/NewsletterSection';
import CookieConsentBanner from './components/CookieConsentBanner';
import GallerySection from './components/GallerySection';
import ImageModal from './components/ImageModal';
import { images } from './data/images';
import TeamSection from './components/TeamSection';
import EventsSection from './components/EventsSection';

const GlobalStyle: React.FC = () => {
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `html { scroll-behavior: smooth; }`;
        document.head.append(style);
        return () => {
            document.head.removeChild(style);
        }
    }, []);
    return null;
}

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseImage = () => {
    setSelectedImageIndex(null);
  };

  const handleImageNavigation = (direction: 'next' | 'prev') => {
    if (selectedImageIndex === null) return;
    const gallerySize = images.gallery.length;
    if (direction === 'next') {
        setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % gallerySize);
    } else {
        setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + gallerySize) % gallerySize);
    }
  };


  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <GlobalStyle />
      <Header />
      <main>
        <HeroSection />
        <AboutUsSection />
        <ConvenerSection />
        <TeamSection />
        <OurWorkSection />
        <ImpactSection />
        <GallerySection onImageSelect={handleImageSelect} />
        <TestimonialsSection />
        <PartnersSection />
        <GetInvolvedSection />
        <EventsSection />
        <BlogSection onPostSelect={setSelectedPost} />
        <FAQSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
      <CookieConsentBanner />
      <AnimatePresence>
        {selectedPost && (
          <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <ImageModal
            images={images.gallery}
            selectedIndex={selectedImageIndex}
            onClose={handleCloseImage}
            onNavigate={handleImageNavigation}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
