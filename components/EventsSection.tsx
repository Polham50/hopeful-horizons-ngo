
import React from 'react';
import { motion } from 'framer-motion';
import { events, Event } from '../data/events';

const EventCard: React.FC<{ event: Event; index: number }> = ({ event, index }) => (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="overflow-hidden">
        <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-primary font-semibold mb-2">{event.date} &bull; {event.location}</p>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
        <p className="text-slate-600 mb-4 flex-grow">{event.description}</p>
        <a href="#contact" className="text-secondary hover:text-secondary-dark font-semibold transition-colors text-left self-start mt-auto">
          Learn More &rarr;
        </a>
      </div>
    </motion.div>
  );

const EventsSection: React.FC = () => {
    return (
    <section id="events" className="py-16 md:py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join us at our upcoming events to learn more, get involved, and support our cause.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
