import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
} from './icons';

const waHref = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const row = {
  hidden: { y: 28 },
  show: { y: 0, transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } },
};

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — mailto link is still a working fallback
    }
  };

  return (
    <button
      type="button"
      className="contact-row__copy"
      onClick={handleCopy}
      aria-label="Copy email address"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

const Contact = () => (
  <section id="contact" className="section contact" aria-labelledby="contact-heading">
    <div className="container">
      <h2 id="contact-heading">Let's talk</h2>
      <p className="contact__intro">
        Open to full-time roles, contract work, and freelance projects. The fastest way to reach
        me is WhatsApp — no contact form, just tap through.
      </p>

      <motion.div
        className="contact-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
      >
        <motion.a
          variants={row}
          className="contact-row"
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-row__icon">
            <WhatsAppIcon />
          </span>
          <span className="contact-row__text">
            <span className="contact-row__label">WhatsApp</span>
            <span className="contact-row__value">{profile.phoneDisplay}</span>
          </span>
        </motion.a>

        <motion.a variants={row} className="contact-row" href={`tel:${profile.phoneDial}`}>
          <span className="contact-row__icon">
            <PhoneIcon />
          </span>
          <span className="contact-row__text">
            <span className="contact-row__label">Call</span>
            <span className="contact-row__value">{profile.phoneDisplay}</span>
          </span>
        </motion.a>

        <motion.div variants={row} className="contact-row contact-row--email">
          <a className="contact-row__main" href={`mailto:${profile.email}`}>
            <span className="contact-row__icon">
              <MailIcon />
            </span>
            <span className="contact-row__text">
              <span className="contact-row__label">Email</span>
              <span className="contact-row__value">{profile.email}</span>
            </span>
          </a>
          <CopyEmailButton />
        </motion.div>
      </motion.div>

      <div className="contact-secondary">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-secondary__link">
          <LinkedInIcon /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-secondary__link">
          <GitHubIcon /> {profile.githubHandle}
        </a>
        <a href={profile.cvUrl} download className="contact-secondary__link">
          <DownloadIcon /> Download CV
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
