export interface TechItem {
    name: string;
    icon: string;
    description: string;
}

export interface TechCategory {
    category: string;
    items: TechItem[];
}

export const techStack: TechCategory[] = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: 'react', description: 'UI Library' },
            { name: 'Next.js', icon: 'nextjs', description: 'React Framework' },
            { name: 'TypeScript', icon: 'typescript', description: 'Type Safety' },
            { name: 'Tailwind CSS', icon: 'tailwind', description: 'Styling' },
            { name: 'GSAP', icon: 'gsap', description: 'Animations' },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js', icon: 'nodejs', description: 'Runtime' },
            { name: 'Express', icon: 'express', description: 'Framework' },
            { name: 'GraphQL', icon: 'graphql', description: 'API Query' },
            { name: 'REST APIs', icon: 'api', description: 'HTTP APIs' },
        ],
    },
    {
        category: 'Database',
        items: [
            { name: 'PostgreSQL', icon: 'postgresql', description: 'SQL Database' },
            { name: 'Supabase', icon: 'supabase', description: 'Backend as a Service' },
            { name: 'MongoDB', icon: 'mongodb', description: 'NoSQL Database' },
            { name: 'Redis', icon: 'redis', description: 'Caching' },
            { name: 'Prisma', icon: 'prisma', description: 'ORM' },
        ],
    },
    {
        category: 'DevOps',
        items: [
            { name: 'Docker', icon: 'docker', description: 'Containers' },
            { name: 'AWS', icon: 'aws', description: 'Cloud Platform' },
            { name: 'Vercel', icon: 'vercel', description: 'Deployment' },
            { name: 'GitHub Actions', icon: 'github', description: 'CI/CD' },
        ],
    },
    {
        category: 'Tools',
        items: [
            { name: 'Git', icon: 'git', description: 'Version Control' },
            { name: 'VS Code', icon: 'vscode', description: 'Editor' },
            { name: 'Figma', icon: 'figma', description: 'Design' },
            { name: 'Postman', icon: 'postman', description: 'API Testing' },
        ],
    },
];
