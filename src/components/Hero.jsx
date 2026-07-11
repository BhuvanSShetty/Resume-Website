import React from 'react';
import portrait from '../assets/bhuvan.png';
import { heroStyles as styles } from '../styles';

const Hero = ({ isVisible }) => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.gridContainer}>

        {/* Text Content */}
        <div className={styles.textCol}>

          {/* Main Headline */}
          <h1
            className={`${styles.titleBase} ${isVisible ? styles.titleVisible : styles.titleHidden}`}
            style={{ transitionDelay: '700ms' }}
          >
            Architecting <br /> the Core.
          </h1>

          {/* Paragraph */}
          <p
            className={`${styles.descBase} ${isVisible ? styles.descVisible : styles.descHidden}`}
            style={{ transitionDelay: '900ms' }}
          >
            Building scalable systems and high-performance APIs. Focusing on reliability, clean architecture, and efficient data handling. Currently pursuing a Bachelor’s degree in Computer Science at RV Institute of Technology and Management , Bengaluru.
          </p>

          {/* Buttons */}
          <div
            className={`${styles.buttonsContainerBase} ${isVisible ? styles.buttonsVisible : styles.buttonsHidden}`}
            style={{ transitionDelay: '1100ms' }}
          >
            <a href="#projects" className={styles.exploreButton}>
              Explore Projects
              <span className={styles.exploreButtonIcon}>arrow_forward</span>
            </a>

            <a href="#academics" className={styles.academicsButton}>
              Academics
            </a>
          </div>

          {/* Social Links */}
          <div
            className={`${styles.socialContainerBase} ${isVisible ? styles.socialVisible : styles.socialHidden}`}
            style={{ transitionDelay: '1300ms' }}
          >
            <a href="https://github.com/BhuvanSShetty" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/bhuvansshetty" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:bhuvansshetty90@gmail.com" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* Decorative Portrait Column */}
        <div
          className={`${styles.imageColBase} ${isVisible ? styles.imageColVisible : styles.imageColHidden}`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className={styles.imageGlow}></div>

          {/* Glass Image Container */}
          <div className={styles.imageGlass}>
            <div className={styles.imageInner}>
              {/* Vignette Overlay */}
              <div className={styles.imageOverlay}></div>

              <img
                src={portrait}
                alt="Bhuvan S Shetty"
                className={styles.imageContent}
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
