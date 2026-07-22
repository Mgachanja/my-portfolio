import React from 'react';
import { motion } from 'framer-motion';
import { faqs, profile } from '../data';

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const pairVariants = {
  hidden: { y: 26 },
  show: { y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

const Faq = () => (
  <section className="section faq" aria-labelledby="faq-heading">
    <div className="container">
      <h2 id="faq-heading">Quick answers</h2>

      <div className="chat">
        <div className="chat__header">
          <span className="chat__avatar mono" aria-hidden="true">
            MG
          </span>
          <div>
            <p className="chat__name">{profile.name}</p>
            <p className="chat__status mono">
              <span className="chat__status-dot" aria-hidden="true" />
              Usually replies same day
            </p>
          </div>
        </div>

        <motion.div
          className="chat__thread"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
        >
          {faqs.map((f) => (
            <motion.div className="chat__pair" key={f.question} variants={pairVariants}>
              <p className="chat__bubble chat__bubble--in">{f.question}</p>
              <p className="chat__bubble chat__bubble--out">{f.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Faq;
