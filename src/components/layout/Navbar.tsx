'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { Menu, X } from 'lucide-react';

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

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // Scroll animation for navbar
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        // GSAP scroll animation
        gsap.to(nav, {
            scrollTrigger: {
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
            },
        });

        // Active section tracking
        const sections = navLinks.map((link) =>
            document.querySelector(link.href)
        );

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

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

                    {/* Mobile Menu Button */}
                    <IconButton
                        className="md:hidden"
                        onClick={() => setMobileOpen(true)}
                        sx={{ color: 'white' }}
                    >
                        <Menu size={24} />
                    </IconButton>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: '280px',
                        background: 'rgba(10, 10, 15, 0.98)',
                        backdropFilter: 'blur(20px)',
                    },
                }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b border-white/10">
                        <span className="text-lg font-bold gradient-text">Menu</span>
                        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
                            <X size={24} />
                        </IconButton>
                    </div>
                    <List className="flex-1 py-4">
                        {navLinks.map((link, index) => (
                            <ListItem key={link.href} disablePadding>
                                <ListItemButton
                                    onClick={() => handleNavClick(link.href)}
                                    sx={{
                                        py: 2,
                                        px: 3,
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                        },
                                        ...(activeSection === link.href && {
                                            borderLeft: '3px solid #00d4ff',
                                            backgroundColor: 'rgba(0, 212, 255, 0.05)',
                                        }),
                                    }}
                                >
                                    <ListItemText
                                        primary={link.label}
                                        primaryTypographyProps={{
                                            sx: {
                                                color:
                                                    activeSection === link.href ? '#00d4ff' : 'white',
                                                fontWeight: activeSection === link.href ? 600 : 400,
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <div className="p-4 border-t border-white/10">
                        <p className="text-xs text-white/50 text-center">
                            © 2024 Prashandev
                        </p>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
