'use client';

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { IconButton } from '@mui/material';

const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold gradient-text">
                            {'<Prashandev />'}
                        </a>
                        <p className="text-sm text-white/50 mt-2">
                            © {currentYear} Prashandev. All rights reserved.
                        </p>
                    </div>

                    {/* Built With */}
                    <div className="flex items-center gap-2 text-sm text-white/50">
                        <span>Built with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>using Next.js, MUI, Tailwind & GSAP</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map((social) => (
                            <IconButton
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#00d4ff',
                                        transform: 'translateY(-2px)',
                                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                    },
                                }}
                            >
                                <social.icon size={20} />
                            </IconButton>
                        ))}
                    </div>
                </div>

                {/* Decorative Line */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs text-white/30 text-center">
                        Designed & developed with passion for great user experiences
                    </p>
                </div>
            </div>
        </footer>
    );
}
