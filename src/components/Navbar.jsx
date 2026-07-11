import React from 'react';
import { navbarStyles as styles } from '../styles';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Academics', href: '#academics' },
  { name: 'Achievements', href: '#achievements' }
];

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>

      {/* Logo Pill */}
      <div className={styles.logoContainer}>
        <a href="#home" className={styles.logoLink}>
          <span className={styles.logoText}>
            Bhuvan S Shetty
          </span>
        </a>
      </div>

      {/* Center Nav Pill */}
      <div className={styles.navPill}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className={styles.navItem}>
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Resume Pill */}
      <div className={styles.resumeContainer}>
        <a href="https://drive.google.com/file/d/1a0NutcE-vfQQA8pacj0hI3O4YNDUkZgg/view?usp=sharing" target="_blank" rel="noreferrer" className={styles.resumeLink}>
          Resume <span className={styles.resumeIcon}>download</span>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
