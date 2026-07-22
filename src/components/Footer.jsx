import React from 'react';
import { profile } from '../data';
import { ArrowUpIcon } from './icons';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <a href="#top" className="footer__logo mono">
        mg<span className="nav__cursor" aria-hidden="true" />
      </a>
      <p className="footer__note">
        {profile.name} · {new Date().getFullYear()}
      </p>
      <a href="#top" className="footer__top" aria-label="Back to top">
        <ArrowUpIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
