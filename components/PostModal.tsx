
import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Post } from '../data/posts';

interface PostModalProps {
  post: Post;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } },
};

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  
  useEffect(() => {
    // Disable scroll on the body when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scroll when the modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="relative">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <div className="p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{post.title}</h2>
          <p className="text-sm text-slate-500 mb-6">{post.author} &bull; {post.date}</p>
          <div className="prose max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PostModal;
