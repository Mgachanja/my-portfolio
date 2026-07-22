import React from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const MotionA = motion.a;
const MotionButton = motion.button;

/**
 * Wraps a button/link so it pulls slightly toward the cursor on hover —
 * a small, clearly-visible interaction that doesn't depend on scroll
 * position or IntersectionObserver at all.
 */
const Magnetic = ({ children, as = 'a', strength = 14, className = '', ...rest }) => {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 16, mass: 0.4 });

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * strength);
    y.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = as === 'button' ? MotionButton : MotionA;

  return (
    <Component
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Magnetic;
