'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Briefcase, Coffee, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { icon: Code2, label: 'Years Experience', value: 2, suffix: '+' },
    { icon: Briefcase, label: 'Projects Completed', value: 10, suffix: '+' },
    { icon: Coffee, label: 'Cups of Coffee', value: 9999, suffix: '' },
    { icon: Award, label: 'Happy Clients', value: 10, suffix: '+' },
];

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image animation
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.8, rotation: -5 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Content animation
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Stats animation
            if (statsRef.current) {
                gsap.fromTo(
                    statsRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="section"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Passionate developer with a love for creating beautiful, functional web experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Portrait */}
                    <div ref={imageRef} className="flex justify-center lg:justify-start animate-float">
                        <div className="relative">
                            {/* Left-side glow effect to match image lighting */}
                            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-to-r from-[#00d4ff]/40 via-[#00d4ff]/20 to-transparent rounded-full blur-3xl" />
                            <div className="absolute -left-4 top-1/4 w-24 h-48 bg-gradient-to-r from-[#3b82f6]/30 to-transparent rounded-full blur-2xl" />

                            {/* 3D Avatar Image - no frame */}
                            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                                <img
                                    src="/portfolio_avatar.png"
                                    alt="Prashandev - Full Stack Developer"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                    style={{
                                        filter: 'drop-shadow(-20px 10px 30px rgba(0, 212, 255, 0.3))',
                                    }}
                                />

                                {/* Angled name badge at bottom */}
                                <div
                                    className="absolute -bottom-6 left-0 right-0 mx-auto w-full py-4 rounded-xl text-center"
                                    style={{
                                        transform: 'rotate(-3deg)',
                                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(15, 15, 20, 0.95))',
                                        border: '1px solid rgba(0, 212, 255, 0.3)',
                                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 212, 255, 0.15)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <span className="text-3xl sm:text-4xl font-bold gradient-text tracking-wide">
                                        Prashan
                                    </span>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 -left-8 w-24 h-24 rounded-full bg-[#00d4ff]/25 blur-2xl animate-pulse" />
                            <div className="absolute bottom-8 -left-4 w-16 h-16 rounded-full bg-[#3b82f6]/20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                        </div>
                    </div>

                    {/* Content */}
                    <div ref={contentRef}>
                        <h3 className="text-2xl font-bold mb-4">
                            Hi, I'm <span className="gradient-text">Prashandev</span>
                        </h3>
                        <p className="text-white/70 mb-4 leading-relaxed">
                            I'm a passionate Full Stack Developer with over 2 years of experience in freelancing designs and building
                            modern web applications. I specialize in creating seamless user experiences
                            with cutting-edge technologies like React, Next.js, and Node.js.
                        </p>
                        <p className="text-white/70 mb-6 leading-relaxed">
                            My journey in tech started with a curiosity for how things work on the web.
                            Today, I help businesses and startups bring their ideas to life with clean,
                            maintainable code and beautiful interfaces. When I'm not coding, you'll find
                            me exploring new technologies, contributing to open source, or mentoring
                            aspiring developers.
                        </p>

                        {/* Floating Tech Logos */}
                        <div className="flex flex-wrap gap-4 mt-2">
                            {[
                                { name: 'React', color: '#61DAFB', rotate: '-3deg' },
                                { name: 'Next.js', color: '#ffffff', rotate: '2deg' },
                                { name: 'TypeScript', color: '#3178C6', rotate: '-2deg' },
                                { name: 'Node.js', color: '#339933', rotate: '4deg' },
                                { name: 'Tailwind', color: '#06B6D4', rotate: '-4deg' },
                                { name: 'Supabase', color: '#3ECF8E', rotate: '3deg' },
                            ].map((tech) => (
                                <div
                                    key={tech.name}
                                    className="px-4 py-2 rounded-lg glass text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                                    style={{
                                        transform: `rotate(${tech.rotate})`,
                                        borderColor: `${tech.color}40`,
                                        boxShadow: `0 4px 15px ${tech.color}20`,
                                    }}
                                >
                                    <span style={{ color: tech.color }}>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div
                    ref={statsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="glass rounded-xl p-6 text-center card-hover"
                        >
                            <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#00d4ff]" />
                            <div className="text-3xl font-bold gradient-text mb-1">
                                {stat.value.toLocaleString()}{stat.suffix}
                            </div>
                            <div className="text-sm text-white/60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
