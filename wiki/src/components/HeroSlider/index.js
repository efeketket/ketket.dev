import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '@site/src/data/heroSlides';
import styles from './styles.module.css';

const INTERVAL_MS = 5000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slider}>
      {HERO_SLIDES.map((src, index) => (
        <div
          key={src}
          className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}
