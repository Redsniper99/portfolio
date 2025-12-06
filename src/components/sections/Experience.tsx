'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chip, Card } from '@mui/material';
import { experience } from '@/data/experience';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline line animation
            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        duration: 1.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: 'top 80%',
                            end: 'bottom 60%',
                            scrub: 1,
                        },
                    }
                );
            }

            // Cards animation
            if (timelineRef.current) {
                const cards = timelineRef.current.querySelectorAll('.timeline-card');
                cards.forEach((card, index) => {
                    gsap.fromTo(
                        card,
                        {
                            opacity: 0,
                            x: index % 2 === 0 ? -50 : 50,
                            scale: 0.95
                        },
                        {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 0.7,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                });

                // Timeline dots animation
                const dots = timelineRef.current.querySelectorAll('.timeline-dot');
                dots.forEach((dot) => {
                    gsap.fromTo(
                        dot,
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.4,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: dot,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="experience" className="section">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Education & <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        My learning path and professional growth as a developer
                    </p>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Timeline line */}
                    <div
                        ref={lineRef}
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] origin-top hidden sm:block"
                        style={{
                            background: 'linear-gradient(180deg, #00d4ff, #a855f7, #00d4ff)',
                        }}
                    />

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col sm:flex-row gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="timeline-dot absolute left-8 md:left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center w-5 h-5 rounded-full bg-[#0a0a0f] border-2 border-[#00d4ff] z-10">
                                    <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                                </div>

                                {/* Card */}
                                <Card
                                    className={`timeline-card flex-1 ${index % 2 === 0 ? 'sm:mr-[calc(50%+2rem)]' : 'sm:ml-[calc(50%+2rem)]'
                                        }`}
                                    sx={{
                                        background: 'rgba(20, 20, 30, 0.6)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 3,
                                        p: 3,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'rgba(0, 212, 255, 0.3)',
                                            boxShadow: '0 10px 40px rgba(0, 212, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20">
                                            <Briefcase className="w-6 h-6 text-[#00d4ff]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                            <p className="text-[#00d4ff] font-medium">{exp.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{exp.duration}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                                    color: '#00d4ff',
                                                    fontSize: '0.7rem',
                                                    height: 24,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
