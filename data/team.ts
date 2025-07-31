
import { images } from './images';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Evelyn Reed',
    role: 'Founder & Chief Convener',
    imageUrl: images.team.founder,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Director of Operations',
    imageUrl: images.team.operations,
  },
  {
    id: 3,
    name: 'Maria Garcia',
    role: 'Head of Community Programs',
    imageUrl: images.team.programs,
  },
  {
    id: 4,
    name: 'Samuel Jones',
    role: 'Lead Fundraising Coordinator',
    imageUrl: images.team.fundraising,
  },
];
