'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, Chip, ToggleButton, ToggleButtonGroup, Card } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import ProjectImageSlideshow from '@/components/ui/ProjectImageSlideshow';

gsap.registerPlugin(ScrollTrigger);

const categories = [
    { value: 'all', label: 'All' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'backend', label: 'Backend' },
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((p) => p.category === filter));
        }
    }, [filter]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!cardsRef.current) return;

            const cards = cardsRef.current.querySelectorAll('.project-card');

            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, rotation: 3 },
                {
                    opacity: 1,
                    y: 0,
                    rotation: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [filteredProjects]);

    // 3D tilt effect on hover - desktop only
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
        if (window.innerWidth < 768) return; // Skip on mobile
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000,
        });
    };

    const handleMouseLeave = (card: HTMLDivElement) => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out',
        });
    };

    return (
        <section ref={sectionRef} id="projects" className="section">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and passion for building
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex justify-center mb-12">
                    <ToggleButtonGroup
                        value={filter}
                        exclusive
                        onChange={(_, value) => value && setFilter(value)}
                        sx={{
                            '& .MuiToggleButton-root': {
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'rgba(255, 255, 255, 0.7)',
                                px: 3,
                                py: 1,
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    backgroundColor: 'rgba(0, 212, 255, 0.2)',
                                    color: '#00d4ff',
                                    borderColor: '#00d4ff',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 212, 255, 0.3)',
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                },
                            },
                        }}
                    >
                        {categories.map((cat) => (
                            <ToggleButton key={cat.value} value={cat.value}>
                                {cat.label}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </div>

                {/* Projects Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="project-card"
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                            sx={{
                                background: 'rgba(20, 20, 30, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 3,
                                overflow: 'hidden',
                                cursor: 'default',
                                transition: 'box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 20px 50px rgba(0, 212, 255, 0.15)',
                                    borderColor: 'rgba(0, 212, 255, 0.3)',
                                },
                            }}
                        >
                            {/* Image Slideshow */}
                            <div className="relative">
                                <ProjectImageSlideshow
                                    images={project.images}
                                    thumbnail={project.thumbnail}
                                    title={project.title}
                                />
                                {project.featured && (
                                    <div className="absolute top-3 right-3 z-10">
                                        <Chip
                                            label="Featured"
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                                                color: '#00d4ff',
                                                fontSize: '0.7rem',
                                                backdropFilter: 'blur(4px)',
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontSize: '0.7rem',
                                                height: 24,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    {project.liveUrl && (
                                        <Button
                                            size="small"
                                            variant="contained"
                                            startIcon={<ExternalLink size={16} />}
                                            href={project.liveUrl}
                                            target="_blank"
                                            sx={{
                                                flex: 1,
                                                background: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
                                                fontSize: '0.8rem',
                                                py: 1,
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #00b8e6, #2563eb)',
                                                },
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                    {project.codeUrl && (
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            startIcon={<Github size={16} />}
                                            href={project.codeUrl}
                                            target="_blank"
                                            sx={{
                                                flex: 1,
                                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                                color: 'white',
                                                fontSize: '0.8rem',
                                                py: 1,
                                                '&:hover': {
                                                    borderColor: '#00d4ff',
                                                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                                },
                                            }}
                                        >
                                            Code
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
