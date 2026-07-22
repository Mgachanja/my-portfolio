import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import DiffPanel from './DiffPanel';

const MIGRATION_BULLET_INDEX = 1;

const Experience = () => (
  <section id="work" className="section experience" aria-labelledby="experience-heading">
    <div className="container experience__inner">
      <h2 id="experience-heading">Experience</h2>

      <motion.div
        className="experience__card"
        initial={{ y: 32 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="experience__head">
          <div>
            <h3 className="experience__role">{experience.role}</h3>
            <p className="experience__company">
              {experience.company} <span className="experience__location">· {experience.location}</span>
            </p>
          </div>
          <p className="experience__dates mono">
            {experience.start} → {experience.end}
          </p>
        </div>

        <ul className="experience__bullets">
          {experience.bullets.map((b, i) => (
            <li key={b}>
              <span>{b}</span>
              {i === MIGRATION_BULLET_INDEX && <DiffPanel variant="mini" className="experience__diff" />}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Experience;
