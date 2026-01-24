
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface StaggerWrapperProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delay?: number;
  triggerOnce?: boolean;
  mode?: 'enter' | 'inView'; // 'enter' for immediate page load, 'inView' for scroll trigger
  childClassName?: string; // Class for the motion div if different from wrapper
  children?: React.ReactNode;
  className?: string;
}

export const StaggerWrapper: React.FC<StaggerWrapperProps> = ({
  children,
  stagger = 0.1,
  delay = 0,
  triggerOnce = true,
  mode = 'inView',
  className,
  ...props
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={mode === 'enter' ? 'visible' : undefined}
      whileInView={mode === 'inView' ? 'visible' : undefined}
      viewport={mode === 'inView' ? { once: triggerOnce, margin: "-10%" } : undefined}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<"div"> & { children?: React.ReactNode }> = ({ children, className, ...props }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
};
