'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@mui/material';
import { testimonials } from '@/data/testimonials';
import { Quote, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!cardsRef.current) return;

            const cards = cardsRef.current.querySelectorAll('.testimonial-card');

            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.15,
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
    }, []);

    return (
        <section ref={sectionRef} id="testimonials" className="section">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        What my clients and colleagues have to say about working with me
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="testimonial-card"
                            sx={{
                                background: 'rgba(20, 20, 30, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 3,
                                p: 4,
                                position: 'relative',
                                overflow: 'visible',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: 'rgba(0, 212, 255, 0.3)',
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                                },
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center">
                                <Quote className="w-5 h-5 text-white" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/80 leading-relaxed mb-6 italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                {/* Avatar placeholder */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff]/30 to-[#a855f7]/30 flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-white/60">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
