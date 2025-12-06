'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const blob1Ref = useRef<HTMLDivElement>(null);
    const blob2Ref = useRef<HTMLDivElement>(null);
    const blob3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const blob1 = blob1Ref.current;
        const blob2 = blob2Ref.current;
        const blob3 = blob3Ref.current;

        if (!container || !blob1 || !blob2 || !blob3) return;

        // Floating animation for blobs
        gsap.to(blob1, {
            y: -30,
            x: 20,
            rotation: 5,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to(blob2, {
            y: 40,
            x: -30,
            rotation: -5,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to(blob3, {
            y: -20,
            x: -40,
            rotation: 3,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // Parallax effect on scroll
        gsap.to(container, {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
            backgroundPosition: '50% 100%',
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden"
            style={{
                background: `
          radial-gradient(ellipse at 5% 30%, rgba(0, 212, 255, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 15% 60%, rgba(59, 130, 246, 0.10) 0%, transparent 45%),
          radial-gradient(ellipse at 80% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)
        `,
                backgroundPosition: '50% 0%',
            }}
        >
            {/* Left-side main light source */}
            <div
                ref={blob1Ref}
                className="absolute top-[20%] left-[0%] w-[500px] h-[600px] rounded-full opacity-35 blur-[120px]"
                style={{
                    background: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
                }}
            />
            {/* Secondary left glow */}
            <div
                ref={blob2Ref}
                className="absolute top-[50%] left-[5%] w-[400px] h-[400px] rounded-full opacity-25 blur-[100px]"
                style={{
                    background: 'linear-gradient(135deg, #3b82f6, #00d4ff)',
                }}
            />
            {/* Subtle right accent */}
            <div
                ref={blob3Ref}
                className="absolute top-[60%] right-[10%] w-[350px] h-[350px] rounded-full opacity-15 blur-[100px]"
                style={{
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                }}
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
