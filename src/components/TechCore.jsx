import React from 'react';
import { techCoreStyles as styles } from '../styles';


const TechCore = () => {
  const skills = {
    languages: ['C++', 'C', 'Python (Basic)', 'Java (Basic)', 'Javascript'],
    tools: ['Git/GitHub', 'VS Code', 'Postman', 'GCC', 'Browser DevTools'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    storage: ['MongoDB', 'MySQL', 'SQL', 'PostgreSQL', 'Redis'],
    devops: ['Docker', 'Docker Compose', 'Vercel', 'AWS']
  };

  return (
    <section id="skills" className={styles.section}>
      
      <div className={styles.headerRow}>
        <div>
          <div className={styles.badge}>
            Stack & Expertise
          </div>
          <h2 className={styles.title}>The Technical Core</h2>
        </div>
        <div className={styles.descContainer}>
          <p className={styles.desc}>
            Equipped with a diverse stack for building reliable, distributed, and high-performance systems.
          </p>
        </div>
      </div>

      <div className={styles.gridContainer}>
        {/* Languages */}
        <div className={styles.cardWide}>
          <div>
            <div className={styles.cardHeaderFlex}>
              <span className={styles.iconLarge}>terminal</span>
              <span className={styles.masteryBadge}>Mastery</span>
            </div>
            <h3 className={styles.cardTitleLarge}>Languages</h3>
            <p className={styles.cardDesc}>Foundational logic and systems programming across various paradigms.</p>
          </div>
          <div className={styles.pillList}>
            {skills.languages.map((lang) => (
              <span key={lang} className={styles.pillLang}>
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Infrastructure & DevOps */}
        <div className={styles.cardSmall}>
          <div className={styles.iconContainerSmall}>
            <span className={styles.iconMedium}>cloud_done</span>
          </div>
          <h3 className={styles.cardTitleSmall}>Infra & DevOps</h3>
          <div className={styles.itemListContainer}>
            {skills.devops.map((item) => (
              <div key={item} className={styles.itemRow}>
                <div className={styles.itemDot}></div>
                <span className={styles.itemText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases / Storage */}
        <div className={styles.cardSmall}>
          <div className={styles.iconContainerSmall}>
            <span className={styles.iconMedium}>database</span>
          </div>
          <h3 className={styles.cardTitleSmall}>Storage</h3>
          <div className={styles.itemListContainer}>
            {skills.storage.map((item) => (
              <div key={item} className={styles.itemRow}>
                <div className={styles.itemDot}></div>
                <span className={styles.itemText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className={styles.cardWide}>
          <div className={styles.iconContainerWide}>
            <span className={styles.iconMedium}>build_circle</span>
          </div>
          <h3 className={styles.cardTitleLargeNoDesc}>Developer Tools</h3>
          <div className={styles.pillListSpaced}>
            {skills.tools.map((tool) => (
              <div key={tool} className={styles.pillTool}>
                <div className={styles.itemDot}></div>
                <span className={styles.pillToolText}>{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className={styles.cardWide}>
          <div className={styles.iconContainerWide}>
            <span className={styles.iconMedium}>layers</span>
          </div>
          <h3 className={styles.cardTitleLargeNoDesc}>Frameworks</h3>
          <div className={styles.pillList}>
            {skills.frameworks.map((framework) => (
              <span key={framework} className={styles.pillFramework}>
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCore;
