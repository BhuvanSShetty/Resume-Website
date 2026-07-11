import React, { useState, useEffect } from 'react';
import { enterScreenStyles as styles } from '../styles';


const EnterScreen = ({ onEnter, hasEntered }) => {
  const [step, setStep] = useState('loading'); // 'loading' -> 'greeting' -> 'ready'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hasEntered]);

  useEffect(() => {
    // 1. Loading sequence
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 10;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setStep('greeting'), 400); // Slight pause at 100%
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 2. Greeting to Ready sequence
    if (step === 'greeting') {
      const timer = setTimeout(() => setStep('ready'), 2200); // Hold greeting for 2.2s
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div
      className={`${styles.containerBase} ${hasEntered ? styles.containerEntered : styles.containerVisible}`}
    >

      {/* 1. Loading Step */}
      <div className={`${styles.loadingBase} ${step === 'loading' ? styles.loadingVisible : styles.loadingHidden}`}>
        <div className={styles.loadingText}>
          {progress}%
        </div>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBarFill} style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* 2. Greeting Step */}
      <div className={styles.greetingContainerBase}>
        <h2 className={`${styles.greetingTextBase} ${step === 'greeting' ? styles.greetingTextGreeting : (step === 'ready' ? styles.greetingTextReady : styles.greetingTextDefault)}`}>
          <span className={`${styles.greetingSpanBase} ${step === 'greeting' ? styles.greetingSpanVisible : styles.greetingSpanHidden}`} style={{ transitionDelay: '100ms' }}>Hi,</span>
          <span className={`${styles.greetingSpanBase} ${step === 'greeting' ? styles.greetingSpanVisible : styles.greetingSpanHidden}`} style={{ transitionDelay: '300ms' }}>I am</span>
          <span className={`${styles.greetingSpanHighlight} ${step === 'greeting' ? styles.greetingSpanVisible : styles.greetingSpanHidden}`} style={{ transitionDelay: '500ms' }}>Bhuvan S Shetty.</span>
        </h2>
      </div>

      {/* 3. Ready Step (Main Content) */}
      <div className={`${styles.readyContainerBase} ${step === 'ready' ? styles.readyContainerVisible : styles.readyContainerHidden}`}>
        <div className={styles.readyContentWrapper}>

          {/* Portfolio Tag */}
          <div
            className={`${styles.readyTagBase} ${step === 'ready' ? styles.readyTagVisible : styles.readyTagHidden}`}
            style={{ transitionDelay: '100ms' }}
          >
            Bhuvan Sreenivasa Shetty
          </div>

          {/* Massive Role Typography */}
          <h1
            className={`${styles.readyTitleBase} ${step === 'ready' ? styles.readyTitleVisible : styles.readyTitleHidden}`}
            style={{ transitionDelay: '300ms' }}
          >
            Software<br className="md:hidden" /> Engineer.
          </h1>

          {/* Subheadline Pill */}
          <div
            className={`${styles.readyDescBase} ${step === 'ready' ? styles.readyDescVisible : styles.readyDescHidden}`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className={styles.readyDescText}>
              Specializing in scalable systems, clean architecture, and high-performance digital experiences and Turning ideas into digital experiences that inspire and solve real problems..
            </p>
          </div>

          {/* Action Area */}
          <div
            className={`${styles.readyActionBase} ${step === 'ready' ? styles.readyActionVisible : styles.readyActionHidden}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className={styles.readyActionNotice}>
              <span className={styles.readyActionIcon}>Laptop</span>
              <span>Best Experience On PC</span>
            </div>

            <button
              onClick={onEnter}
              className={styles.readyButton}
            >
              Show Portfolio
              <span className={styles.readyButtonIcon}>arrow_forward</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default EnterScreen;
