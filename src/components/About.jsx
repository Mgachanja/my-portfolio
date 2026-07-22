import React from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { profile, quickFacts } from '../data';
import profileJpg from '../assets/profile.jpg';
import profileWebp from '../assets/profile.webp';

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { x: -18 },
  show: { x: 0, transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } },
};

const About = () => {
  const reduceMotion = useReducedMotion();
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawRotateY.set(px * 12);
    rawRotateX.set(py * -12);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <section className="section about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <div className="about__photo-wrap">
          <motion.div
            className="about__photo"
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ scale: 0.96, y: 24 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            <picture>
              <source srcSet={profileWebp} type="image/webp" />
              <img
                src={profileJpg}
                alt="Portrait of Mark Gachanja Ngari"
                width="760"
                height="1013"
                loading="lazy"
              />
            </picture>
          </motion.div>
        </div>

        <div className="about__content">
          <h2 id="about-heading">About</h2>
          <p className="about__note">{profile.aboutNote}</p>

          <motion.dl
            className="fact-list"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
          >
            {quickFacts.map((f) => (
              <motion.div className="fact-list__row" key={f.label} variants={rowVariants}>
                <dt className="mono">{f.label}</dt>
                <dd>{f.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default About;
