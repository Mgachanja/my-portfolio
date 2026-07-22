import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import DiffPanel from './DiffPanel';
import Magnetic from './Magnetic';
import { WhatsAppIcon, MailIcon } from './icons';

const waHref = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } },
};

const Hero = () => (
  <section id="top" className="hero">
    <div className="container hero__grid">
      <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="hero__role mono">
          {profile.role}
        </motion.p>
        <motion.h1 variants={item} className="hero__name">
          {profile.name}
        </motion.h1>
        <motion.p variants={item} className="hero__pitch">
          {profile.summary}
        </motion.p>
        <motion.div variants={item} className="hero__ctas">
          <Magnetic
            className="btn btn--primary"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Message on WhatsApp
          </Magnetic>
          <Magnetic className="btn btn--ghost" href={`mailto:${profile.email}`}>
            <MailIcon /> Email me
          </Magnetic>
        </motion.div>
        <motion.p variants={item} className="hero__location mono">
          <span className="hero__dot" aria-hidden="true" />
          {profile.location} · {profile.availability}
        </motion.p>
      </motion.div>

      <motion.div
        className="hero__panel"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
      >
        <DiffPanel variant="full" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
