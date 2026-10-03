'use client';

import { useRef } from 'react';

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden"
            style={{
                background: `
          radial-gradient(ellipse at 5% 30%, rgba(0, 212, 255, 0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 15% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 45%),
          radial-gradient(ellipse at 80% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)
        `,
            }}
        >
            {/* Left-side main light source - CSS animation instead of GSAP */}
            <div
                className="absolute top-[20%] left-[0%] w-[350px] h-[400px] rounded-full opacity-25 animate-blob-1"
                style={{
                    background: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
                    filter: 'blur(80px)',
                    willChange: 'transform',
                }}
            />
            {/* Secondary left glow - CSS animation */}
            <div
                className="absolute top-[50%] left-[5%] w-[280px] h-[280px] rounded-full opacity-20 animate-blob-2"
                style={{
                    background: 'linear-gradient(135deg, #3b82f6, #00d4ff)',
                    filter: 'blur(70px)',
                    willChange: 'transform',
                }}
            />
            {/* Subtle right accent - CSS animation */}
            <div
                className="absolute top-[60%] right-[10%] w-[250px] h-[250px] rounded-full opacity-12 animate-blob-3"
                style={{
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                    filter: 'blur(70px)',
                    willChange: 'transform',
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
        </div>
    );
}
