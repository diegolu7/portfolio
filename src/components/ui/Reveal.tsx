import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: 'up' | 'left' | 'right' | 'scale';
}

const offsets = {
  up: { x: 0, y: 40 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  scale: { x: 0, y: 0, scale: 0.9 },
};

export default function Reveal({ children, delay = 0, className, from = 'up' }: RevealProps) {
  const base = offsets[from];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...base }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}