export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
    technologies: string[];
    type: 'education' | 'certification' | 'freelance';
}

export const experience: Experience[] = [
    {
        id: '1',
        company: 'Diploma in Information Technology',
        role: 'IT Foundation',
        duration: 'Completed',
        startDate: '',
        endDate: '',
        responsibilities: [
            'Built strong foundation in programming fundamentals',
            'Learned web development basics (HTML, CSS, JavaScript)',
            'Database management and SQL fundamentals',
            'Introduction to software development lifecycle',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Java'],
        type: 'education',
    },
    {
        id: '2',
        company: 'BSc in Information Technology',
        role: 'Bachelor\'s Degree',
        duration: 'Completed',
        startDate: '',
        endDate: '',
        responsibilities: [
            'Advanced programming and software engineering',
            'Full-stack web development specialization',
            'Database design and management systems',
            'Cloud computing and modern architectures',
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Python', 'AWS'],
        type: 'education',
    },
    {
        id: '3',
        company: 'AWS Essentials Certification',
        role: 'Cloud Certification',
        duration: 'Certified',
        startDate: '',
        endDate: '',
        responsibilities: [
            'Cloud computing fundamentals and AWS core services',
            'EC2, S3, RDS, and Lambda configurations',
            'Security best practices and IAM management',
            'Cost optimization and scalable architecture design',
        ],
        technologies: ['AWS', 'EC2', 'S3', 'Lambda', 'CloudFormation'],
        type: 'certification',
    },
    {
        id: '4',
        company: 'Freelance Developer',
        role: 'Full Stack Developer & Designer',
        duration: '2022 - Present',
        startDate: '2022',
        endDate: 'Present',
        responsibilities: [
            'Building custom web applications for 10+ clients',
            'UI/UX design and modern responsive interfaces',
            'Full-stack development with Next.js and Supabase',
            'Delivering projects on time with high client satisfaction',
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'TypeScript'],
        type: 'freelance',
    },
];
