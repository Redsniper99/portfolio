'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    TextField,
    Button,
    IconButton,
    Snackbar,
    Alert
} from '@mui/material';
import {
    Github,
    Linkedin,
    Mail,
    Send,
    MapPin,
    Phone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
    { icon: Github, href: 'https://github.com/Redsniper99', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/manjula-prashan-52551a211', label: 'LinkedIn' },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Content animation
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Form animation
            gsap.fromTo(
                formRef.current,
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission
            setSnackbar({
                open: true,
                message: 'Message sent successfully! I\'ll get back to you soon.',
                severity: 'success',
            });
            setFormData({ name: '', email: '', message: '' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="section">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Let's <span className="gradient-text">Build</span> Something Together
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'd love to hear from you
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div ref={contentRef}>
                        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                        <p className="text-white/70 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision. Feel free to reach out through any of the
                            channels below.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl glass">
                                    <Mail className="w-5 h-5 text-[#00d4ff]" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/60">Email</div>
                                    <a
                                        href="mailto:prashandev77@gmail.com"
                                        className="text-white hover:text-[#00d4ff] transition-colors"
                                    >
                                        prashandev77@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl glass">
                                    <MapPin className="w-5 h-5 text-[#00d4ff]" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/60">Location</div>
                                    <span className="text-white">Kandy, Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div className="text-sm text-white/60 mb-3">Connect with me</div>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <IconButton
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                                                borderColor: '#00d4ff',
                                                color: '#00d4ff',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        <social.icon size={20} />
                                    </IconButton>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="glass rounded-2xl p-6 sm:p-8"
                    >
                        <div className="space-y-6">
                            <TextField
                                fullWidth
                                label="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />

                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />

                            <TextField
                                fullWidth
                                label="Your Message"
                                name="message"
                                multiline
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                variant="outlined"
                                sx={{ mb: 2 }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                endIcon={<Send size={18} />}
                                sx={{
                                    background: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
                                    py: 1.5,
                                    fontSize: '1rem',
                                    mt: 1,
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #00b8e6, #2563eb)',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Snackbar */}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                        severity={snackbar.severity}
                        variant="filled"
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </div>
        </section>
    );
}
