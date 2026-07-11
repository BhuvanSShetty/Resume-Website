import React from 'react';
import pegaImage from '../assets/pega.jpg';
import aikyamRunnerUp from '../assets/aikyam_runner_up.JPG';
import rvLogo from '../assets/rv_logo.png';
import jsLogo from '../assets/js.png';
import scaceLogo from '../assets/Scace.png';
import puImage from '../assets/pu.jpg';
import { aboutStyles as styles } from '../styles';


const AboutSection = () => {
  return (
    <section className={styles.section}>
      {/* Engineering Philosophy */}
      <div className={styles.philosophyGrid}>
        <div className={styles.philosophyTextCol}>
          <p className={styles.philosophyTag}>Engineering Philosophy</p>
          <h2 className={styles.philosophyTitle}>
            Reliability and <span className={styles.philosophyHighlight}>Performance </span> in Every Line of Code.
          </h2>
          <p className={styles.philosophyDesc}>
            I approach software engineering with a focus on system reliability, scalability, and performance, ensuring that applications handle increasing load while maintaining low latency and clean architecture.
          </p>
        </div>
        <div className={styles.philosophyImgCol}>
          <div className={styles.philosophyImgContainer}>
            <img
              className={styles.philosophyImg}
              src={pegaImage}
              alt="Structural Engineering Core"
            />
            <div className={styles.philosophyOverlay}></div>
            <div className={styles.philosophyBadgeContainer}>
              <div className={styles.philosophyBadge}>
                <p className={styles.philosophyBadgeTag}>Current Membership</p>
                <p className={styles.philosophyBadgeText}>Pegasus Club (Web Development)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Foundation Stats */}
      <div id="academics" className={styles.academicsContainer}>
        <h2 className={styles.sectionTitle}>Academic Foundation</h2>
        <div className={styles.academicsGrid}>
          <div className={styles.academicCard}>
            <div>
              <img src={rvLogo} alt="RV Institutions Logo" className={styles.academicLogo} />
              <h3 className={styles.academicTitle}>RV Institute of Technology (RVITM)</h3>
              <p className={styles.academicSubtitle}>B.E. in Computer Science & Engineering (2027)</p>
            </div>
            <div className={styles.scoreContainer}>
              <p className={styles.scoreText}>8.62 <span className={styles.scoreLabel}>CGPA</span></p>
            </div>
          </div>

          <div className={styles.academicCard}>
            <div>
              <img src={jsLogo} alt="Jnanasudha Logo" className={styles.academicLogoAlt} />
              <h3 className={styles.academicTitle}>Karkala Jnanasudha PU</h3>
              <p className={styles.academicSubtitle}>Class of 2023</p>
              <p className={styles.academicSubtitle}>PCMC</p>
            </div>
            <div className={styles.scoreContainer}>
              <p className={styles.scoreText}>94.14% <span className={styles.scoreLabel}>Aggregate</span></p>
            </div>
          </div>

          <div className={styles.academicCardAlt}>
            <div>
              <div className={styles.academicLogoBox}>
                <img src={scaceLogo} alt="Silicon City Academy Logo" className={styles.academicLogoBoxImg} />
              </div>
              <h3 className={styles.academicTitle}>Silicon City Academy</h3>
              <p className={styles.academicSubtitle}>Secondary Education (2021)</p>
            </div>
            <div className={styles.scoreContainer}>
              <p className={styles.scoreText}>83.2% <span className={styles.scoreLabel}>Aggregate</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Bento Section */}
      <div id="achievements" className={styles.achievementsContainer}>
        <h2 className={styles.sectionTitle}>Key Achievements</h2>

        {/* Top Section: Text-Only Achievements */}
        <div className={styles.textAchievementsGrid}>
          {[
            { tag: 'ACADEMIC', title: '100/100 in ADA Lab & Web Developement (RVITM)', icon: 'code' },
            { tag: 'COMPETITION', title: '1st Place Winner - Science Fest 2019', icon: 'emoji_events' },
            { tag: 'GAT HACKATHON', title: '7th Place in GAT Hackathon 2026', icon: 'military_tech' },
            { tag: 'KSSEM HACKATHON', title: 'Placed within top 10 in KSSEM Hackathon 2025', icon: 'military_tech' }
          ].map((item, idx) => (
            <div key={idx} className={styles.textAchievementCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <div>
                <p className={styles.achievementTag}>{item.tag}</p>
                <p className={styles.achievementTitle}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Featured Image Achievements */}
        <div className={styles.imageAchievementsGrid}>

          {/* Aikyam 2026 Featured Achievement (Bigger, Left) */}
          <div className={styles.featAchievementLg}>
            <div className={styles.featHeader}>
              <div className={styles.featIconContainer}>
                <span className={styles.featIcon}>military_tech</span>
              </div>
              <div>
                <p className={styles.achievementTag}>AIKYAM 2026</p>
                <p className={styles.featTitle}>Runner up in AIKYAM 2026 RVITM</p>
              </div>
            </div>
            <div className={styles.featImgContainerLg}>
              <img src={aikyamRunnerUp} alt="Runner up at AIKYAM 2026 RVITM" className={styles.featImg} />
            </div>
          </div>

          {/* PU 100/100 Featured Achievement (Smaller, Right) */}
          <div className={styles.featAchievementSm}>
            <div className={styles.featHeader}>
              <div className={styles.featIconContainer}>
                <span className={styles.featIcon}>terminal</span>
              </div>
              <div>
                <p className={styles.achievementTag}>ACADEMIC</p>
                <p className={styles.featTitle}>100/100 in Computer Science (PUC 1st Year and 2nd Year)</p>
              </div>
            </div>
            <div className={styles.featImgContainerSm}>
              <img src={puImage} alt="100/100 in Computer Science (PUC)" className={styles.featImg} />
            </div>
          </div>

        </div>
      </div>

      {/* Volunteer Work */}
      <div className={styles.volunteerSection}>

        {/* Subtle Background Glow */}
        <div className={styles.volunteerGlow}></div>

        <div className={styles.volunteerContent}>
          <div className={styles.volunteerLeft}>
            <div className={styles.volunteerTagContainer}>
              <span className={styles.volunteerTag}>
                Social Impact
              </span>
              <div className={styles.volunteerTagLine}></div>
            </div>

            <h2 className={styles.volunteerTitle}>
              Empowering via <span className={styles.volunteerTitleHighlight}>U&I</span>
            </h2>

            <p className={styles.volunteerDesc}>
              Applying principles of structure and growth to community impact as a Teaching Volunteer, mentoring students to reach their full potential.
            </p>
          </div>

          <div className={styles.volunteerRight}>
            <div className={styles.volunteerStatsText}>
              <p className={styles.volunteerStatsNumber}>Volunteer</p>
              <p className={styles.volunteerStatsLabel}>Teaching & Mentorship</p>
            </div>

            <div className={styles.volunteerIconBox}>
              <span className={styles.volunteerIcon} style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
