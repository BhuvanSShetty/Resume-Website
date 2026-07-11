import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCore from './components/TechCore';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import ShootingStars from './components/ShootingStars';
import EnterScreen from './components/EnterScreen';
import { appStyles as styles } from './styles';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className={styles.appContainer}>
      
      {/* Global Cinematic Noise Overlay */}
      <div className={styles.noiseOverlay} style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Unpredictable Ambient Deep Space Effect */}
      <div className={styles.spaceEffectContainer}>
        
        {/* Realistic Deep Space Nebula / Aurora Clouds (Monochromatic) */}
        <div className={styles.nebulaContainer}>
           {/* Dark Gray/Silver Upper Gas Cloud */}
           <div className={styles.upperGasCloud} style={{ transform: 'rotate(-15deg)' }}></div>
           
           {/* Bright White/Silver Core Cloud */}
           <div className={styles.coreCloud} style={{ transform: 'rotate(25deg)' }}></div>
           
           {/* Deep Charcoal/Gray Underglow Cloud */}
           <div className={styles.underglowCloud}></div>
        </div>
      </div>
      
      <ShootingStars />

      <div className={`${styles.navbarWrapperBase} ${hasEntered ? styles.navbarWrapperVisible : styles.navbarWrapperHidden}`}>
        <Navbar />
      </div>
      <EnterScreen onEnter={() => setHasEntered(true)} hasEntered={hasEntered} />
      <AudioPlayer isVisible={hasEntered} />
      
      <div className={`${styles.mainWrapperBase} ${hasEntered ? styles.mainWrapperVisible : styles.mainWrapperHidden}`}>
        <main>
          <Hero isVisible={hasEntered} />
          <TechCore />
          <ExperienceSection />
          <Projects />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;