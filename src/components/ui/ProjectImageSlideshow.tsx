'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageSlideshowProps {
    images?: string[];
    thumbnail: string;
    title: string;
}

export default function ProjectImageSlideshow({
    images,
    thumbnail,
    title
}: ProjectImageSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

    // All images including thumbnail as fallback
    const allImages = images && images.length > 0 ? images : [thumbnail];

    // Auto-advance slideshow - always running, faster on hover
    useEffect(() => {
        if (allImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % allImages.length);
        }, isHovered ? 2000 : 4000); // Faster on hover

        return () => clearInterval(interval);
    }, [isHovered, allImages.length]);

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const handleImageError = (index: number) => {
        setImageError((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <div
            className="relative h-48 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d14] overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5" />

            {/* Image */}
            {!imageError[currentIndex] ? (
                <img
                    src={allImages[currentIndex]}
                    alt={`${title} screenshot ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                    onError={() => handleImageError(currentIndex)}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl font-bold gradient-text opacity-30">
                        {title.charAt(0)}
                    </div>
                </div>
            )}

            {/* Navigation arrows (show on hover when multiple images) */}
            {allImages.length > 1 && isHovered && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
                        aria-label="Next image"
                    >
                        <ChevronRight size={18} />
                    </button>
                </>
            )}

            {/* Dots indicator */}
            {allImages.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {allImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? 'bg-[#00d4ff] w-4'
                                : 'bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
