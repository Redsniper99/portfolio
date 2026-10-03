'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const triggersRef = useRef<ScrollTrigger[]>([]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && mobileOpen) {
                setMobileOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // Scroll handler with requestAnimationFrame throttle
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // GSAP scroll animation - store trigger reference
        const navTrigger = ScrollTrigger.create({
            trigger: 'body',
            start: '50px top',
            end: '51px top',
            onEnter: () => {
                gsap.to(nav, {
                    padding: '0.75rem 1.5rem',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                    duration: 0.3,
                });
            },
            onLeaveBack: () => {
                gsap.to(nav, {
                    padding: '1rem 1.5rem',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    duration: 0.3,
                });
            },
        });
        triggersRef.current.push(navTrigger);

        // Active section tracking
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean) as Element[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Only kill OUR triggers, not all app triggers
            triggersRef.current.forEach((trigger) => trigger.kill());
            triggersRef.current = [];
            observer.disconnect();
        };
    }, []);

    const handleNavClick = useCallback((href: string) => {
        setMobileOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl transition-all duration-300 ${scrolled ? 'glass-strong' : 'glass'
                    }`}
                style={{
                    padding: '1rem 1.5rem',
                }}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        {'<Prashandev />'}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`nav-link text-sm font-medium transition-colors hover:text-[#00d4ff] ${activeSection === link.href
                                    ? 'active text-[#00d4ff]'
                                    : 'text-white/80'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button - pure CSS, no MUI override issues */}
                    <button
                        className="mobile-menu-btn md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        <div className={`hamburger-icon ${mobileOpen ? 'open' : ''}`}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Slide-out Menu */}
            <div
                className={`fixed top-0 right-0 z-40 h-full w-72 mobile-menu-panel transition-transform duration-400 ease-out md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-white/10">
                        <span className="text-lg font-bold gradient-text">Menu</span>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 py-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`mobile-nav-link flex items-center gap-3 px-6 py-4 text-base font-medium transition-all duration-200 ${activeSection === link.href
                                    ? 'text-[#00d4ff] bg-[#00d4ff]/10 border-l-3 border-[#00d4ff]'
                                    : 'text-white/80 hover:text-white hover:bg-white/5 border-l-3 border-transparent'
                                    }`}
                                style={{
                                    transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms',
                                    transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                                    opacity: mobileOpen ? 1 : 0,
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Footer */}
                    <div className="p-6 border-t border-white/10">
                        <p className="text-xs text-white/40 text-center">
                            © {new Date().getFullYear()} Prashandev
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
