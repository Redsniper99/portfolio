'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button, Chip } from '@mui/material';
import { ArrowRight, Download, Circle } from 'lucide-react';

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 50, letterSpacing: '0.1em' },
                {
                    opacity: 1,
                    y: 0,
                    letterSpacing: '-0.02em',
                    duration: 1,
                    delay: 0.2,
                    ease: 'power3.out',
                }
            );

            // Subheading slide in
            gsap.fromTo(
                subheadingRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
            );

            // Staggered button entrance
            if (buttonsRef.current) {
                gsap.fromTo(
                    buttonsRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        delay: 0.8,
                        ease: 'back.out(1.2)',
                    }
                );
            }

            // Floating cards entrance only (no infinite loop - use CSS for floating)
            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll('.floating-card');
                cards.forEach((card, i) => {
                    gsap.fromTo(
                        card,
                        { opacity: 0, y: 100, rotation: 10 },
                        {
                            opacity: 1,
                            y: 0,
                            rotation: 0,
                            duration: 1,
                            delay: 0.3 + i * 0.2,
                            ease: 'power3.out',
                        }
                    );
                });
            }
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    {/* Status Pill */}
                    <Chip
                        icon={<Circle size={8} className="fill-green-400 text-green-400" />}
                        label="Available for freelance work"
                        sx={{
                            mb: 3,
                            backgroundColor: 'rgba(74, 222, 128, 0.1)',
                            border: '1px solid rgba(74, 222, 128, 0.3)',
                            color: '#4ade80',
                            '& .MuiChip-icon': {
                                color: '#4ade80',
                            },
                        }}
                    />

                    {/* Heading */}
                    <h1
                        ref={headingRef}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
                    >
                        <span className="gradient-text">Full Stack Developer</span>
                        <br />
                        <span className="text-white">building modern,</span>
                        <br />
                        <span className="text-white/90">scalable web apps</span>
                    </h1>

                    {/* Subheading */}
                    <p
                        ref={subheadingRef}
                        className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8"
                    >
                        I craft exceptional digital experiences with{' '}
                        <span className="text-[#00d4ff]">Next.js</span>,{' '}
                        <span className="text-[#a855f7]">Node.js</span>, and modern databases.
                        Passionate about clean code, beautiful UI, and scalable architecture.
                    </p>

                    {/* CTA Buttons */}
                    <div ref={buttonsRef} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowRight size={20} />}
                            onClick={() => {
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            sx={{
                                background: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #00b8e6, #2563eb)',
                                },
                            }}
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<Download size={20} />}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                    borderColor: '#00d4ff',
                                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                },
                            }}
                        >
                            Download CV
                        </Button>
                    </div>
                </div>

                {/* Right Content - Floating Cards with CSS animations */}
                <div ref={cardsRef} className="relative h-[400px] lg:h-[500px] hidden lg:flex items-center justify-center">
                    {/* Background glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#00d4ff]/15 to-[#a855f7]/15 blur-[60px]" />
                    </div>

                    {/* Card Stack - CSS float animations instead of infinite GSAP tweens */}
                    <div
                        className="floating-card absolute glass rounded-2xl p-6 w-72 gradient-border animate-card-float-1"
                        style={{ top: '10%', left: '5%' }}
                    >
                        <div className="text-sm text-white/60 mb-2">Frontend</div>
                        <div className="text-2xl font-bold gradient-text mb-1">React & Next.js</div>
                        <div className="text-white/70 text-sm">
                            Building blazing-fast, SEO-friendly web applications
                        </div>
                    </div>

                    <div
                        className="floating-card absolute glass rounded-2xl p-6 w-72 gradient-border animate-card-float-2"
                        style={{ top: '35%', right: '5%' }}
                    >
                        <div className="text-sm text-white/60 mb-2">Backend</div>
                        <div className="text-2xl font-bold gradient-text-blue mb-1">Node.js & APIs</div>
                        <div className="text-white/70 text-sm">
                            Scalable microservices and RESTful APIs
                        </div>
                    </div>

                    <div
                        className="floating-card absolute glass rounded-2xl p-6 w-72 gradient-border animate-card-float-3"
                        style={{ bottom: '5%', left: '15%' }}
                    >
                        <div className="text-sm text-white/60 mb-2">Database</div>
                        <div className="text-2xl font-bold mb-1" style={{ color: '#a855f7' }}>
                            PostgreSQL & MongoDB
                        </div>
                        <div className="text-white/70 text-sm">
                            Efficient data modeling and optimization
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs text-white/50">Scroll to explore</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
