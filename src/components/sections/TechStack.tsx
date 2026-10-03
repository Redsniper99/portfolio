'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Paper } from '@mui/material';
import { techStack } from '@/data/techStack';
import {
    Code2,
    Server,
    Database,
    Cloud,
    Wrench,
    Layers,
    Globe,
    Cpu,
    Box,
    GitBranch,
    Palette,
    Terminal,
    Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    react: Code2,
    nextjs: Layers,
    typescript: Code2,
    tailwind: Palette,
    gsap: Zap,
    nodejs: Server,
    express: Server,
    graphql: Globe,
    api: Globe,
    postgresql: Database,
    mongodb: Database,
    redis: Database,
    prisma: Database,
    docker: Box,
    aws: Cloud,
    vercel: Cloud,
    github: GitBranch,
    git: GitBranch,
    vscode: Terminal,
    figma: Palette,
    postman: Cpu,
};

export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each category
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="tech-stack" className="section">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Tech Stack & <span className="gradient-text">Tools</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        The technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Tech Categories */}
                <div className="space-y-10">
                    {techStack.map((category, categoryIndex) => (
                        <div
                            key={category.category}
                            ref={(el) => { cardsRef.current[categoryIndex] = el; }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white/80 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-gradient-to-r from-[#00d4ff] to-transparent" />
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.items.map((tech) => {
                                    const Icon = iconMap[tech.icon] || Code2;
                                    return (
                                        <Paper
                                            key={tech.name}
                                            className="tech-item"
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                textAlign: 'center',
                                                cursor: 'default',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    borderColor: 'rgba(0, 212, 255, 0.5)',
                                                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.15)',
                                                    transform: 'translateY(-4px) scale(1.02)',
                                                },
                                            }}
                                        >
                                            <Icon className="w-8 h-8 mx-auto mb-3 text-[#00d4ff]" />
                                            <div className="font-medium text-white mb-1">{tech.name}</div>
                                            <div className="text-xs text-white/50">{tech.description}</div>
                                        </Paper>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
