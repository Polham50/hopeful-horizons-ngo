
// This is your new "Image Control Panel".
// To change any image on the site, just update the path here.

// Step 1: Add your image files to the `public/assets/` folder.
// Step 2: Update the string here to match your new filename.
// Example: export const images = { hero: '/assets/my-hero-image.jpg', ... }

export const images = {
    hero: '/assets/hero.jpg',
    about1: '/assets/about-us-1.jpg',
    about2: '/assets/about-us-2.jpg',
    convener: '/assets/founder-portrait.jpg',
    getInvolved: {
        donate: '/assets/donate.jpg',
        volunteer: '/assets/volunteer.jpg',
        partner: '/assets/partner.jpg',
    },
    blog: {
        post1: '/assets/blog-post-1.jpg',
        post2: '/assets/blog-post-2.jpg',
        post3: '/assets/blog-post-3.jpg',
    },
    avatars: {
        testimonial1: '/assets/avatar-1.jpg',
        testimonial2: '/assets/avatar-2.jpg',
        testimonial3: '/assets/avatar-3.jpg',
    },
    team: {
        founder: '/assets/founder-portrait.jpg',
        operations: '/assets/team-member-1.jpg',
        programs: '/assets/team-member-2.jpg',
        fundraising: '/assets/team-member-3.jpg',
    },
    events: {
        gala: '/assets/event-gala.jpg',
        healthDrive: '/assets/event-health-drive.jpg',
        orientation: '/assets/event-orientation.jpg',
    },
    gallery: [
        { src: '/assets/gallery-1.jpg', caption: 'Community members working together on a new building project.', category: 'Infrastructure' },
        { src: '/assets/gallery-2.jpg', caption: 'A young student proudly displays her new school supplies.', category: 'Education' },
        { src: '/assets/gallery-3.jpg', caption: 'Our team delivering essential medical supplies to a remote village clinic.', category: 'Health' },
        { src: '/assets/gallery-4.jpg', caption: 'Celebrating the successful harvest from our sustainable agriculture program.', category: 'Community' },
        { src: '/assets/gallery-5.jpg', caption: 'A health worker conducting a check-up during a community health drive.', category: 'Health' },
        { src: '/assets/gallery-6.jpg', caption: 'Volunteers and locals collaborating on a clean water well installation.', category: 'Infrastructure' },
        { src: '/assets/gallery-7.jpg', caption: 'The joy of learning in one of our newly equipped classrooms.', category: 'Education' },
        { src: '/assets/gallery-8.jpg', caption: 'A small business owner who benefited from our micro-loan initiative.', category: 'Community' }
    ],
    // You can add more partners here if you want to use logos instead of text
    partners: {
        // e.g. partner1: '/assets/partner-logo-1.png'
    }
};
