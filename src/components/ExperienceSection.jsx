import React from 'react';
import rvLogo from '../assets/rv_logo.png';
import progressLogo from '../assets/progress-software-vector-logo.png';
import { experienceStyles as styles } from '../styles';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Progress ShareFile',
    period: 'July 2026 - Present',
    description: '',
    logo: progressLogo,
    bullets: [
      'Working on the eSign and DocGen team, contributing to the development of secure electronic signature solutions and automated document generation platforms.',
      'Collaborating with cross-functional teams to design, implement, and optimize software features.'
    ]
  },
  {
    role: 'Student Placement Coordinator',
    company: 'RV Institute of Technology and Management, Bengaluru',
    period: '2025 - Present',
    description: '',
    logo: rvLogo,
    bullets: [
      'Coordinating campus recruitment activities between students, recruiters, and the Training & Placement Cell.',
      'Managing placement communications, interview schedules, student registrations, and recruitment operations for multiple hiring drives.',
      'Assisting in organizing pre-placement talks, aptitude sessions, mock interviews, and student engagement initiatives.',
      'Supporting students with resume building, LinkedIn optimization, and placement preparation activities.',
      'Collaborating with teams to streamline placement workflows and improve coordination efficiency.'
    ]
  }
];

const ExperienceSection = () => {

  return (
    <section id="experience" className={styles.section}>
      
      <div className={styles.headerContainer}>
        <div>
          <div className={styles.badge}>
            Career Journey
          </div>
          <h2 className={styles.title}>Experience</h2>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            Professional roles and hands-on experience building software solutions.
          </p>
        </div>
      </div>

      <div className={styles.listContainer}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            
            <div className={styles.cardHeader}>
              {exp.logo && (
                <div className={styles.logoContainer}>
                  <img src={exp.logo} alt={`${exp.company} logo`} className={styles.logo} />
                </div>
              )}
              
              <div className={styles.infoContainer}>
                <div className={styles.infoRow}>
                  <div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <div className={styles.companyName}>{exp.company}</div>
                  </div>
                  
                  <div className={styles.periodBadge}>
                    <span className={styles.periodDot}></span>
                    {exp.period}
                  </div>
                </div>
              </div>
            </div>
            
            {exp.description && (
              <p className={styles.expDescription}>
                {exp.description}
              </p>
            )}

            <div className={styles.bulletsContainer}>
              {exp.bullets.map((bullet, i) => (
                <div key={i} className={styles.bulletRow}>
                  <span className={styles.bulletIcon}>
                    ✦
                  </span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
