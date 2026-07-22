import React from 'react';
import { motion } from 'framer-motion';
import { project } from '../data';
import ProjectGallery from './ProjectGallery';

const Projects = () => (
  <section className="section projects" aria-labelledby="projects-heading">
    <div className="container">
      <h2 id="projects-heading">Projects</h2>

      <motion.article
        className="project-card"
        initial={{ y: 32 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="project-card__visual">
          <ProjectGallery />
        </div>

        <div className="project-card__body">
          <p className="project-card__type mono">{project.type}</p>
          <h3 className="project-card__name">{project.name}</h3>

          <div className="project-card__badges">
            {project.platforms.map((p) => (
              <span key={p} className="badge mono">
                {p}
              </span>
            ))}
          </div>

          <p className="project-card__description">{project.description}</p>

          <div className="project-card__lists">
            <div>
              <p className="project-card__list-label mono">Shipped</p>
              <ul>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="project-card__list-label mono">In progress</p>
              <ul>
                {project.inProgress.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  </section>
);

export default Projects;
