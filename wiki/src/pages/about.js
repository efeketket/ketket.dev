import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';
import AboutContent from './about.md';
import AboutEngContent from './abouteng.md';

export default function About() {
  const {siteConfig} = useDocusaurusContext();
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('tr'); // 'tr' veya 'en'

  const turkishContent = {
    title: "Geliştirici • Matematik ve Bilgisayar Bilimleri Öğrencisi",
    tags: ["Yazılım Geliştirme", "Veri Odaklı Sistemler", "Oyun Mekanikleri", "AI ve Otomasyon", "Spor Analitiği","Kullanıcı Deneyimi"],
    cvButton: "CV'm",
    aboutTitle: "Hakkımda"
  };

  const englishContent = {
    title: "Developer • Mathematics & Computer Science Student",
    tags: ["Software Development", "Data-Driven Systems", "Game Mechanics", "AI and Automation", "Sports Analytics", "User Experience"],
    cvButton: "My CV",
    aboutTitle: "About Me"
  };

  const currentContent = selectedLanguage === 'tr' ? turkishContent : englishContent;
  const currentAboutContent = selectedLanguage === 'tr' ? <AboutContent /> : <AboutEngContent />;

  return (
    <Layout
      title={`About Me - ${siteConfig.title}`}
      description="Learn more about Efe Ketenci - Mathematics and Computer Science student, developer, and athlete">
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.heroSection}>
            <div className={styles.maxWidth}>
              {/* Language Selection Buttons */}
              <div className={styles.languageSelector}>
                <button
                  className={`${styles.langButton} ${selectedLanguage === 'tr' ? styles.activeLang : ''}`}
                  onClick={() => setSelectedLanguage('tr')}
                >
                  🇹🇷 Türkçe
                </button>
                <button
                  className={`${styles.langButton} ${selectedLanguage === 'en' ? styles.activeLang : ''}`}
                  onClick={() => setSelectedLanguage('en')}
                >
                  🇺🇸 English
                </button>
              </div>

              {/* Main Card */}
              <div className={styles.mainCard}>
                <div className={styles.cardContent}>
                  {/* Profile Image */}
                  <div className={styles.profileImageContainer}>
                    <div className={styles.profileImageGlow} />
                    <img
                      src="/img/aboutme/avatar1.png"
                      alt="Efe Ketenci"
                      className={styles.profileImage}
                    />
                  </div>

                  {/* Profile Info */}
                  <div className={styles.profileInfo}>
                    <h1 className={styles.name}>
                      Efe Ketenci
                    </h1>
                    <div className={styles.titleContainer}>
                      <p className={styles.title}>
                        {currentContent.title}
                      </p>
                    </div>

                    <div className={styles.tagsContainer}>
                      {currentContent.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    
                    {/* Contact Buttons */}
                    <div className={styles.buttonContainer}>
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primaryButton}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"/>
                        </svg>
                        {currentContent.cvButton}
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/efe-ketancı-193902248/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Card with Markdown Content */}
              <div className={styles.aboutCard}>
                <div className={styles.aboutContent}>
                  {currentAboutContent}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
} 