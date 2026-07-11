import React from 'react';
import projectImage from '../assets/image.png';
import splitbillImage from '../assets/Splitbill.png';
import { projectsStyles as styles } from '../styles';

const Projects = () => {
  const projects = [
    {
      title: 'SplitReceipt',
      category: 'MERN / AI',
      period: 'May 2026',
      description: 'AI-powered receipt splitting web app that turns restaurant bill images into structured line items, taxes, and totals, then calculates what each person owes with editable item assignment.',
      bullets: [
        'Integrated OCR.space with Groq LLM parsing to convert messy receipt text into structured JSON.',
        'Implemented proportional tax and tip splitting with per-person item edits.',
        'Built a scalable REST API with JWT auth, refresh token rotation, and HttpOnly cookies.'
      ],
      image: splitbillImage,
      link: 'https://github.com/BhuvanSShetty',
      deploymentlink: 'https://split.bhuvans.in',
      delay: ''
    },
    {
      title: 'AXIOS Ledger',
      category: 'Distributed Systems / Backend',
      period: 'Jan 2026 – Feb 2026',
      description: 'A tamper-proof Land Record Management System using blockchain principles. Engineered with Merkle trees for integrity and an RSA-2048 Witness consensus service for decentralized validation.',
      bullets: [
        'Merkle tree engine (SHA-256) for field-level tampering detection.',
        '3-node RSA-2048 Witness consensus service (majority quorum).',
        'Built a public portal with multi-language support (EN, HI, KN).',
        'Full containerization with Docker and Docker Compose.'
      ],
      image: projectImage,
      link: 'https://github.com/BhuvanSShetty',
      deploymentlink: 'https://axios.bhuvans.in/',
      delay: 'md:mt-32'
    }
  ];

  const getDomain = (url) => {
    try {
      return new URL(url).hostname;
    } catch {
      return 'Deployment';
    }
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.badge}>
        Case Studies
      </div>
      <h2 className={styles.title}>Selected Works</h2>

      <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${project.delay}`}>
            <div className={styles.projectCardBase}>

              {/* Image Container */}
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={project.image}
                  alt={project.title}
                />
                <div className={styles.imageOverlay}></div>

                <div className={styles.categoryBadgeContainer}>
                  <span className={styles.categoryBadge}>
                    {project.category}
                  </span>
                </div>
                <div className={styles.periodBadgeContainer}>
                  <span className={styles.periodBadge}>
                    <span className={styles.periodDot}></span>
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className={styles.contentContainer}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>
                  {project.description}
                </p>

                {/* Indented Bullets */}
                <div className={styles.bulletsContainer}>
                  {project.bullets.map((bullet, i) => (
                    <div key={i} className={styles.bulletRow}>
                      <span className={styles.bulletIcon}>
                        ✦
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className={styles.actionsContainer}>
                  {project.deploymentlink && (
                    <a
                      href={project.deploymentlink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.deployButton}
                    >
                      {getDomain(project.deploymentlink)} <span className={styles.deployIcon}>arrow_forward</span>
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.codeButton}
                  >
                    View Code <span className={styles.codeIcon}>north_east</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
