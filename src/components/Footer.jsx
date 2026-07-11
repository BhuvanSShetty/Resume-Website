import React from 'react';
import { footerStyles as styles } from '../styles';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.mainRow}>
          
          <div className={styles.brandCol}>
            <span className={styles.brandName}>Bhuvan S Shetty</span>
            <span className={styles.brandRole}>Software Engineer</span>
          </div>

          <div className={styles.linksCol}>
            <a href="https://github.com/BhuvanSShetty" target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhuvansshetty/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              LinkedIn
            </a>
            <a href="mailto:bhuvansshetty90@gmail.com" className={styles.link}>
              Email
            </a>
          </div>
          
        </div>
        
        <div className={styles.copyright}>
          <p>© 2026 Bhuvan S Shetty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
