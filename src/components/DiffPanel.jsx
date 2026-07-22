import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FULL_LINE = 'react: "18"';

/**
 * The site's one signature move: a typed git-diff of the React 16 -> 18
 * migration that anchors the "led production migrations" claim. Used once
 * in full in the hero, and once in miniature (already-typed) beside the
 * matching Experience bullet. Nowhere else.
 *
 * Triggers on mount, not on scroll-into-view: gating visibility on
 * IntersectionObserver means the panel never renders for renderers that
 * don't scroll (crawlers, screenshot tools), so both lines are always
 * present at full opacity — only the typing effect is a mount-triggered
 * enhancement on top.
 */
const DiffPanel = ({ variant = 'full', className = '' }) => {
  const isMini = variant === 'mini';
  const reduceMotion = useReducedMotion();
  const skipTyping = reduceMotion || isMini;

  const [typedLength, setTypedLength] = useState(skipTyping ? FULL_LINE.length : 0);
  const [showAdd, setShowAdd] = useState(skipTyping);

  useEffect(() => {
    if (skipTyping) return;
    const revealTimer = setTimeout(() => setShowAdd(true), 650);
    return () => clearTimeout(revealTimer);
  }, [skipTyping]);

  useEffect(() => {
    if (skipTyping || !showAdd || typedLength >= FULL_LINE.length) return;
    const t = setTimeout(() => setTypedLength((n) => n + 1), 55);
    return () => clearTimeout(t);
  }, [skipTyping, showAdd, typedLength]);

  return (
    <div className={`code-panel diff-panel diff-panel--${variant} ${className}`}>
      <div className="code-panel__bar">
        <span className="code-panel__dot" aria-hidden="true" />
        <span className="code-panel__label">career.diff</span>
      </div>
      <div className="code-panel__body diff-panel__body">
        <motion.div
          className="diff-line diff-line--remove"
          initial={skipTyping ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="diff-line__gutter">−</span>
          <span className="diff-line__text diff-line__text--strike">react: "16"</span>
        </motion.div>

        <div className="diff-line diff-line--add" style={{ opacity: showAdd ? 1 : 0 }}>
          <span className="diff-line__gutter">+</span>
          <span className="diff-line__text">
            {isMini ? FULL_LINE : FULL_LINE.slice(0, typedLength)}
            {!isMini && !reduceMotion && typedLength < FULL_LINE.length && showAdd && (
              <span className="diff-line__cursor" aria-hidden="true" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiffPanel;
