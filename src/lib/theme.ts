'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00d4ff', // Neon cyan
            light: '#5dffff',
            dark: '#00a2cc',
        },
        secondary: {
            main: '#a855f7', // Purple
            light: '#d4a5ff',
            dark: '#7c3aed',
        },
        background: {
            default: '#0a0a0f',
            paper: 'rgba(20, 20, 30, 0.8)',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
    },
    typography: {
        fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: '10px 24px',
                    fontSize: '0.95rem',
                },
                contained: {
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                    '&:hover': {
                        boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                    },
                },
                outlined: {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                        borderColor: 'rgba(0, 212, 255, 0.5)',
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: 'rgba(20, 20, 30, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: 'rgba(20, 20, 30, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(10px)',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'rgba(10, 10, 15, 0.95)',
                    backdropFilter: 'blur(20px)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(0, 212, 255, 0.5)',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#00d4ff',
                            boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
                        },
                    },
                },
            },
        },
    },
});

export default theme;
