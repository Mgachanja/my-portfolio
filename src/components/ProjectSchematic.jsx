import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const block = {
  hidden: { y: 10 },
  show: { y: 0, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } },
};

/**
 * Abstract wireframe of the actual Arpella Stores product structure
 * (mobile catalog + web catalog, both sharing the same product-grid +
 * checkout-CTA layout) — stands in for a screenshot without misrepresenting
 * placeholder art as a real capture.
 */
const ProjectSchematic = () => (
  <motion.svg
    className="project-schematic"
    viewBox="0 0 640 380"
    role="img"
    aria-label="Simplified wireframe of the Arpella Stores mobile and web product catalog, showing a shared layout of navigation, a hero banner, a product grid, and a checkout button across both platforms."
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-15% 0px' }}
  >
    {/* Phone frame */}
    <motion.rect variants={block} x="40" y="20" width="180" height="340" rx="24" className="schem-frame" />
    <motion.rect variants={block} x="56" y="40" width="148" height="14" rx="4" className="schem-fill-faint" />
    <motion.rect variants={block} x="56" y="64" width="148" height="70" rx="6" className="schem-fill-soft" />
    <motion.rect variants={block} x="56" y="146" width="68" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="136" y="146" width="68" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="56" y="204" width="68" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="136" y="204" width="68" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="56" y="268" width="148" height="32" rx="16" className="schem-fill-bright" />
    <motion.circle variants={block} cx="118" cy="326" r="3" className="schem-dot" />
    <motion.circle variants={block} cx="130" cy="326" r="3" className="schem-dot" />
    <motion.circle variants={block} cx="142" cy="326" r="3" className="schem-dot" />

    {/* Web frame */}
    <motion.rect variants={block} x="260" y="20" width="340" height="340" rx="12" className="schem-frame" />
    <motion.rect variants={block} x="260" y="20" width="340" height="28" rx="12" className="schem-fill-sunken" />
    <motion.circle variants={block} cx="276" cy="34" r="3" className="schem-dot" />
    <motion.circle variants={block} cx="286" cy="34" r="3" className="schem-dot" />
    <motion.circle variants={block} cx="296" cy="34" r="3" className="schem-dot" />

    <motion.rect variants={block} x="276" y="64" width="66" height="280" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="288" y="80" width="42" height="6" rx="3" className="schem-fill-faint" />
    <motion.rect variants={block} x="288" y="100" width="42" height="6" rx="3" className="schem-fill-faint" />
    <motion.rect variants={block} x="288" y="120" width="42" height="6" rx="3" className="schem-fill-faint" />
    <motion.rect variants={block} x="288" y="140" width="42" height="6" rx="3" className="schem-fill-faint" />

    <motion.rect variants={block} x="360" y="64" width="220" height="60" rx="6" className="schem-fill-soft" />
    <motion.rect variants={block} x="360" y="136" width="66" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="434" y="136" width="66" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="508" y="136" width="66" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="360" y="194" width="66" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="434" y="194" width="66" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="508" y="194" width="66" height="50" rx="6" className="schem-fill-sunken" />
    <motion.rect variants={block} x="360" y="262" width="110" height="28" rx="14" className="schem-fill-bright" />
    <motion.rect variants={block} x="360" y="308" width="214" height="7" rx="3.5" className="schem-fill-faint" />
    <motion.rect variants={block} x="360" y="322" width="150" height="7" rx="3.5" className="schem-fill-faint" />
  </motion.svg>
);

export default ProjectSchematic;
