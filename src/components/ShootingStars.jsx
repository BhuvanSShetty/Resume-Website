import React, { useEffect, useState, useRef } from 'react';
import { shootingStarsStyles as styles } from '../styles';


const ShootingStars = () => {
  const [stars, setStars] = useState([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const createStar = () => {
      const id = idCounter.current++;
      
      const top = Math.random() * 50 - 20; 
      const right = Math.random() * 80 - 20; 
      
      const length = Math.random() * 150 + 100; 
      const duration = Math.random() * 1.5 + 1.5; // 1.5s to 3.0s (Very visible)
      const angle = -45 + (Math.random() * 4 - 2);
      
      const newStar = { id, top, right, length, duration, angle };
      
      setStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== id));
      }, duration * 1000 + 100);
    };

    let timeoutId;
    const scheduleNextStar = () => {
      const nextDelay = Math.random() * 2000 + 500; // Very frequent
      
      timeoutId = setTimeout(() => {
        createStar();
        
        if (Math.random() > 0.6) {
          setTimeout(createStar, Math.random() * 200 + 50);
        }
        
        scheduleNextStar();
      }, nextDelay);
    };

    scheduleNextStar();
    setTimeout(createStar, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.container}>
      {stars.map(star => (
        <div
          key={star.id}
          className={styles.starAbsolute}
          style={{
            top: `${star.top}%`,
            right: `${star.right}%`,
            width: `${star.length}px`,
            transform: `rotate(${star.angle}deg)`,
          }}
        >
          <div
            className={styles.streak}
            style={{
              animation: `meteor-streak ${star.duration}s ease-in forwards`,
            }}
          >
            <div className={styles.starHead}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShootingStars;
