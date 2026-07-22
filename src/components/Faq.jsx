import React from 'react';
import { motion } from 'framer-motion';
import { faqs } from '../data';

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { y: 20 },
  show: { y: 0, transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } },
};

const Faq = () => (
  <section className="section faq" aria-labelledby="faq-heading">
    <div className="container">
      <h2 id="faq-heading">Quick answers</h2>

      <motion.div
        className="faq-list"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
      >
        {faqs.map((f) => (
          <motion.div className="faq-list__row" key={f.question} variants={rowVariants}>
            <h3 className="faq-list__question">{f.question}</h3>
            <p className="faq-list__answer">{f.answer}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Faq;
