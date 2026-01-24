
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionLoaderProps {
  isVisible: boolean;
}

const TransitionLoader: React.FC<TransitionLoaderProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Advanced Minimalist Loader */}
          <div className="relative w-16 h-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-gray-100 border-t-black"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400"
          >
            Optimizing Environment
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionLoader;
