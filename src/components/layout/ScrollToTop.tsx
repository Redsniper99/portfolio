'use client';

import { useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={visible}>
            <Fab
                onClick={scrollToTop}
                aria-label="Scroll to top"
                sx={{
                    position: 'fixed',
                    bottom: { xs: 20, sm: 32 },
                    right: { xs: 16, sm: 32 },
                    background: 'rgba(20, 20, 30, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#00d4ff',
                    zIndex: 40,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'rgba(0, 212, 255, 0.2)',
                        borderColor: '#00d4ff',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
                    },
                }}
            >
                <ArrowUp size={24} />
            </Fab>
        </Zoom>
    );
}
