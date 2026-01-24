
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  scrollAnchor?: string; // e.g., "section-id" passed from router ID
}

const variants = {
  initial: { 
    opacity: 0, 
    y: 20, 
    scale: 0.98,
    filter: 'blur(8px)' // Cinematic blur on entry
  },
  enter: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // Custom "Apple-like" ease
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.99,
    filter: 'blur(4px)', // Slight blur on exit
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const PageTransition: React.FC<PageTransitionProps> = ({ children, className = "", scrollAnchor }) => {
  
  // Handle Scroll Restoration smoothly after layout is ready
  useEffect(() => {
    // Small timeout to ensure DOM layout is calculated (React 18 concurrent mode safety)
    const timer = setTimeout(() => {
        if (scrollAnchor) {
            // Handle "scroll:xxx" logic
            const elementId = scrollAnchor.replace('scroll:', '').replace('filter:', ''); // Clean up prefix if mixed
            // Try to find element directly or by fuzzy match if logic requires
            const element = document.getElementById(elementId);
            
            if (element) {
                const yOffset = -100; // Header offset
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'instant' }); // Use instant to jump before frame paint, animation handles visual smoothing
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            // Default: Scroll to top
            window.scrollTo(0, 0);
        }
    }, 10); // 10ms micro-delay is usually sufficient to separate from unmount

    return () => clearTimeout(timer);
  }, [scrollAnchor]);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
