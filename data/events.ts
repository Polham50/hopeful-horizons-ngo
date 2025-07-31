
import { images } from './images';

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Annual Charity Gala & Fundraiser',
    date: 'December 15, 2023',
    location: 'Grand Plaza Hotel, City Center',
    description: 'Join us for an evening of inspiration and giving as we celebrate this year\'s achievements and raise funds for the year ahead.',
    imageUrl: images.events.gala,
  },
  {
    id: 2,
    title: 'Community Health Drive',
    date: 'January 20, 2024',
    location: 'Mvula Village Community Hall',
    description: 'Our team will be providing free health check-ups, vaccinations, and health education workshops for all community members.',
    imageUrl: images.events.healthDrive,
  },
  {
    id: 3,
    title: 'Volunteer Orientation Day',
    date: 'February 5, 2024',
    location: 'Hopeful Horizons HQ',
    description: 'New to volunteering with us? This orientation day will get you up to speed on our mission, projects, and how you can make a difference.',
    imageUrl: images.events.orientation,
  },
];
