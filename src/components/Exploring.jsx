import React from 'react';
import { motion } from 'framer-motion';
import { exploring } from '../data';

const Exploring = () => (
  <section className="section section--sunken exploring" aria-labelledby="exploring-heading">
    <div className="container">
      <h2 id="exploring-heading">Exploring</h2>

      <motion.article
        className="exploring-card"
        initial={{ y: 24 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="exploring-card__head">
          <h3 className="exploring-card__name">{exploring.name}</h3>
          <span className="badge mono">{exploring.status}</span>
        </div>

        <p className="exploring-card__description">{exploring.description}</p>

        <div className="exploring-card__badges">
          {exploring.technologies.map((t) => (
            <span key={t} className="badge mono">
              {t}
            </span>
          ))}
        </div>

        <div className="exploring-card__lists">
          <div>
            <p className="exploring-card__list-label mono">Working through</p>
            <ul>
              {exploring.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="exploring-card__list-label mono">Findings so far</p>
            <ul>
              {exploring.findings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="exploring-card__solution">
          <span className="exploring-card__solution-label mono">Approach — </span>
          {exploring.solution}
        </p>
      </motion.article>
    </div>
  </section>
);

export default Exploring;
