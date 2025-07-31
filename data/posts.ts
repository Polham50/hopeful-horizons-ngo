
import { images } from './images';

export interface Post {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    author: string;
    date: string;
    content: string;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Our Clean Water Initiative Reaches a New Milestone",
        excerpt: "This month, we successfully installed our 50th well, bringing clean and safe drinking water to over 5,000 more people in the region.",
        imageUrl: images.blog.post1,
        author: "Jane Doe, Project Manager",
        date: "October 26, 2023",
        content: `
            <p>It's with immense pride that we announce a significant milestone for our Clean Water Initiative. This month, we successfully installed our 50th well, bringing clean and safe drinking water to over 5,000 more people in the region. This achievement was made possible through the tireless efforts of our volunteers and the generous donations from our supporters.</p>
            <p class="mt-4">The new well, located in the village of Mvula, has already had a profound impact. Children can now attend school regularly, as they no longer need to spend hours each day fetching water from distant, contaminated sources. Local health has improved, with a marked decrease in waterborne illnesses.</p>
            <p class="mt-4">"We are overjoyed," said a local community leader. "Water is life, and Hopeful Horizons has given our village a new beginning." We are committed to continuing this vital work and expanding our reach in the coming year.</p>
        `
    },
    {
        id: 2,
        title: "Empowering the Next Generation Through Education",
        excerpt: "Our 'Education for All' program just supplied a newly built school with books, computers, and furniture, supporting 200 students.",
        imageUrl: images.blog.post2,
        author: "John Smith, Education Lead",
        date: "October 15, 2023",
        content: `
            <p>Education is the cornerstone of a brighter future. Our "Education for All" program continues to make strides in providing quality learning opportunities for children in underserved communities. This past quarter, we celebrated the opening of a new primary school in the Anaka district.</p>
            <p class="mt-4">Hopeful Horizons fully equipped the school with a library of new books, a small computer lab with five workstations, and desks and chairs for all 200 students. Our team of volunteer teachers has been working closely with local educators to develop a curriculum that is both engaging and culturally relevant.</p>
            <p class="mt-4">The excitement on the children's faces as they walked into their new classrooms was a powerful reminder of why we do what we do. By investing in education, we are investing in the leaders, innovators, and dreamers of tomorrow.</p>
        `
    },
    {
        id: 3,
        title: "A Volunteer's Story: Finding Purpose in Service",
        excerpt: "Meet Sarah, a volunteer who spent three months with our health program. She shares her moving experience and the lessons she learned.",
        imageUrl: images.blog.post3,
        author: "Sarah Johnson, Volunteer",
        date: "September 30, 2023",
        content: `
            <p>"I came here hoping to help, but I never expected how much I would receive in return," says Sarah Johnson, who recently completed a three-month volunteer placement with our Community Health team. Sarah, a registered nurse from Canada, helped establish a new maternal health clinic.</p>
            <p class="mt-4">"The resilience and spirit of the community were truly inspiring," she reflects. "I assisted with prenatal check-ups, health education workshops, and basic medical care. The gratitude from the families was overwhelming. Seeing a healthy baby being born in a safe environment because of the work we did is a feeling I will never forget."</p>
            <p class="mt-4">Sarah's story is a testament to the power of volunteering. It’s not just about giving time; it’s about creating connections, sharing skills, and being part of something larger than oneself. We are incredibly grateful for her service and the impact she made.</p>
        `
    }
];
