

import React from 'react';
import { motion } from 'framer-motion';
import { posts, Post } from '../data/posts';

const PostCard: React.FC<{ post: Post; onPostSelect: (post: Post) => void; index: number }> = ({ post, onPostSelect, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      onClick={() => onPostSelect(post)}
    >
      <div className="overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
        <p className="text-slate-600 mb-4 flex-grow">{post.excerpt}</p>
        <div className="text-primary hover:text-primary-dark font-semibold transition-colors text-left self-start mt-auto">
          Read More &rarr;
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection: React.FC<{ onPostSelect: (post: Post) => void }> = ({ onPostSelect }) => {
  const recentPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-16 md:py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Articles</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with our latest news, stories from the field, and the impact of your support.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <PostCard key={post.id} post={post} onPostSelect={onPostSelect} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;