export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
    avatar?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'CTO',
        company: 'TechStartup Inc.',
        quote: 'Exceptional developer who delivered our platform ahead of schedule. The attention to detail and code quality exceeded our expectations. Highly recommend for any complex project.',
        rating: 5,
    },
    {
        id: '2',
        name: 'Michael Chen',
        role: 'Product Manager',
        company: 'Digital Solutions',
        quote: 'Working with this developer was a game-changer for our team. They brought fresh ideas and implemented features we didn\'t even know we needed. Outstanding communication throughout.',
        rating: 5,
    },
    {
        id: '3',
        name: 'Emily Rodriguez',
        role: 'Founder',
        company: 'CreativeAgency',
        quote: 'The perfect blend of technical expertise and creative problem-solving. Our website performance improved dramatically, and the new animations made our brand stand out.',
        rating: 5,
    },
    {
        id: '4',
        name: 'David Park',
        role: 'Engineering Lead',
        company: 'Enterprise Corp',
        quote: 'A true full-stack expert who can handle anything from database optimization to pixel-perfect UI. They integrated seamlessly with our team and delivered exceptional results.',
        rating: 5,
    },
];
