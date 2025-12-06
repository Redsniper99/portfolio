export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    images?: string[]; // Optional array of images for slideshow
    tags: string[];
    category: 'frontend' | 'fullstack' | 'backend';
    liveUrl?: string;
    codeUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'SalonFlow',
        description: 'Comprehensive salon management system with smart scheduling, staff management, POS & billing, analytics, and email/SMS notifications for appointments and marketing campaigns.',
        thumbnail: '/projects/salonflow/dashboard_view.png',
        images: [
            '/projects/salonflow/dashboard_view.png',
            '/projects/salonflow/services_tab_view.png',
            '/projects/salonflow/campaign_tab_view.png',
            '/projects/salonflow/customer_segmentation_tab_view.png',
            '/projects/salonflow/report_and_analitics_view.png',
        ],
        tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
        category: 'fullstack',
        liveUrl: 'https://salon-managment-system.vercel.app/',
        codeUrl: 'https://github.com/Redsniper99/salon_managment_system',
        featured: true,
    },
    {
        id: '2',
        title: 'Global Consulting Visa Hub',
        description: 'Modern visa consulting website with stunning 3D visuals, smooth animations, and professional design for immigration services.',
        thumbnail: '/projects/visa-hub/Screenshot 2025-12-06 at 23.47.12.png',
        images: [
            '/projects/visa-hub/Screenshot 2025-12-06 at 23.47.12.png',
            '/projects/visa-hub/Screenshot 2025-12-06 at 23.48.03.png',
            '/projects/visa-hub/Screenshot 2025-12-06 at 23.48.18.png',
            '/projects/visa-hub/Screenshot 2025-12-06 at 23.48.36.png',
        ],
        tags: ['Next.js', 'Three.js', 'GSAP', 'MUI', 'Framer Motion'],
        category: 'frontend',
        liveUrl: 'https://global-cunsulting-visa-hub.vercel.app/',
        codeUrl: 'https://github.com/Redsniper99/global_cunsulting_visa_hub',
        featured: true,
    },
    {
        id: '3',
        title: 'SalonFlow Website',
        description: 'Beautiful salon booking landing page with smooth scroll animations, GSAP effects, and modern responsive design for appointment scheduling.',
        thumbnail: '/projects/salonflow-website/Screenshot 2025-12-06 at 23.52.33.png',
        images: [
            '/projects/salonflow-website/Screenshot 2025-12-06 at 23.52.33.png',
            '/projects/salonflow-website/Screenshot 2025-12-06 at 23.52.45.png',
            '/projects/salonflow-website/Screenshot 2025-12-06 at 23.53.06.png',
            '/projects/salonflow-website/Screenshot 2025-12-06 at 23.53.29.png',
        ],
        tags: ['Next.js', 'GSAP', 'Tailwind CSS', 'Lenis', 'TypeScript'],
        category: 'frontend',
        liveUrl: 'https://salonflow-website.vercel.app/',
        codeUrl: 'https://github.com/Redsniper99/salonflow-website',
        featured: true,
    },
    {
        id: '4',
        title: 'Future Home Electronics',
        description: 'Modern e-commerce platform for home electronics with product catalog, data grid management, and responsive shopping experience.',
        thumbnail: '/projects/future-home/Screenshot 2025-12-07 at 00.00.31.png',
        images: [
            '/projects/future-home/Screenshot 2025-12-07 at 00.00.31.png',
            '/projects/future-home/Screenshot 2025-12-07 at 00.00.57.png',
            '/projects/future-home/Screenshot 2025-12-07 at 00.01.20.png',
            '/projects/future-home/Screenshot 2025-12-07 at 00.02.04.png',
        ],
        tags: ['Next.js', 'MUI', 'MUI Data Grid', 'TypeScript'],
        category: 'fullstack',
        liveUrl: 'https://future-home-electronics.vercel.app/',
        codeUrl: 'https://github.com/Redsniper99/future_home_electronics',
        featured: true,
    },
    {
        id: '5',
        title: 'Jail - Event Planning',
        description: 'Elegant wedding and event planning website with beautiful animations, gallery showcase, and modern UI design for memorable celebrations.',
        thumbnail: '/projects/jail-events/Screenshot 2025-12-07 at 00.08.55.png',
        images: [
            '/projects/jail-events/Screenshot 2025-12-07 at 00.08.55.png',
            '/projects/jail-events/Screenshot 2025-12-07 at 00.09.02.png',
            '/projects/jail-events/Screenshot 2025-12-07 at 00.09.17.png',
            '/projects/jail-events/Screenshot 2025-12-07 at 00.09.24.png',
        ],
        tags: ['React', 'MUI', 'Framer Motion', 'Tailwind CSS'],
        category: 'frontend',
        liveUrl: 'https://jail-phi.vercel.app/',
        codeUrl: 'https://github.com/Redsniper99/wedding_planner',
        featured: true,
    },
];
