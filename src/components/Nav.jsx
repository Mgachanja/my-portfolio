import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data';
import { DownloadIcon, MenuIcon, CloseIcon } from './icons';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="mg — back to top">
          mg<span className="nav__cursor" aria-hidden="true" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <button key={l.id} className="nav__link" onClick={() => handleLinkClick(l.id)}>
              {l.label}
            </button>
          ))}
          <a
            className="nav__cv btn btn--ghost btn--sm"
            href={profile.cvUrl}
            download
          >
            <DownloadIcon /> CV
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            {links.map((l) => (
              <button key={l.id} className="nav__sheet-link" onClick={() => handleLinkClick(l.id)}>
                {l.label}
              </button>
            ))}
            <a className="nav__sheet-link" href={profile.cvUrl} download onClick={() => setMenuOpen(false)}>
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
