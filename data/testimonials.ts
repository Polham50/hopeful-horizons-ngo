
import { images } from './images';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "The support from Hopeful Horizons changed my life. The educational program gave me the skills I needed to build a future for myself and my family.",
    name: "Aisha Bakari",
    role: "Program Graduate",
    avatarUrl: images.avatars.testimonial1,
  },
  {
    quote: "Volunteering here was one of the most rewarding experiences. Seeing the direct impact of our work on the community is something I'll never forget.",
    name: "Michael Chen",
    role: "Volunteer",
    avatarUrl: images.avatars.testimonial2,
  },
  {
    quote: "Partnering with Hopeful Horizons allows our company to make a real, tangible difference. Their professionalism and dedication are second to none.",
    name: "Samantha Reed",
    role: "CEO, Tech for Good",
    avatarUrl: images.avatars.testimonial3,
  },
];
