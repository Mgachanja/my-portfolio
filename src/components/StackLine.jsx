import React from 'react';
import { motion } from 'framer-motion';
import { stack } from '../data';

const Row = ({ keyName, values, isLast }) => (
  <div className="stack-row">
    <span className="stack-row__key">"{keyName}"</span>
    <span className="stack-row__punct">: [</span>
    <span className="stack-row__values">
      {values.map((v, i) => (
        <span key={v}>
          <span className="stack-row__value">"{v}"</span>
          {i < values.length - 1 && <span className="stack-row__punct">, </span>}
        </span>
      ))}
    </span>
    <span className="stack-row__punct">]{isLast ? '' : ','}</span>
  </div>
);

const StackLine = () => {
  const rows = [
    { key: 'languages', values: stack.languages },
    { key: 'frameworks', values: stack.frameworks },
    { key: 'tools', values: stack.tools },
  ];

  return (
    <section className="section section--sunken stack-section" aria-labelledby="stack-heading">
      <div className="container">
        <h2 id="stack-heading" className="visually-hidden">
          Technical stack
        </h2>
        <motion.div
          className="code-panel stack-panel"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="code-panel__bar">
            <span className="code-panel__dot" aria-hidden="true" />
            <span className="code-panel__label">stack.json</span>
          </div>
          <div className="code-panel__body stack-panel__body">
            <span className="stack-row__punct">{'{'}</span>
            {rows.map((r, i) => (
              <Row key={r.key} keyName={r.key} values={r.values} isLast={i === rows.length - 1} />
            ))}
            <span className="stack-row__punct">{'}'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StackLine;
