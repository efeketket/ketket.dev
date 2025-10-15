import React, { useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const OtherProjects = [
  {
    id: 'ecommerce-platform',
    title: 'SilverBoardAPI',
    description: 'Modern React.js ile geliştirilmiş tam özellikli e-ticaret platformu. Redux, Node.js backend ve MongoDB kullanılarak oluşturuldu.',
    coverImage: '/img/commandblock.png',
    github: 'https://github.com/username/ecommerce',
    liveDemo: 'https://ecommerce-demo.com'
  },
  {
    id: 'fitness-tracker',
    title: 'KetNet Manager',
    description: 'React Native ile geliştirilmiş fitness takip uygulaması. Kullanıcılar egzersizlerini kaydedebilir ve ilerlemelerini takip edebilir.',
    coverImage: '/img/commandblock.png',
    github: 'https://github.com/username/fitness-tracker',
    appStore: 'https://apps.apple.com/app/fitness-tracker'
  },
  {
    id: 'file-manager',
    title: 'Pixelyap.shop',
    description: 'Electron tabanlı masaüstü dosya yöneticisi. Gelişmiş arama, dosya önizleme ve çoklu seçim özellikleri.',
    coverImage: '/img/commandblock.png',
    github: 'https://github.com/username/file-manager'
  }
];

function ProjectCard({ project }) {
  return (
    <a 
      href={project.github} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.cardImage}>
        <img 
          src={project.coverImage} 
          alt={project.title}
          onError={(e) => {
            e.target.src = '/img/commandblock.png'; // Fallback image
          }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.cardFooter}>
          <div className={styles.platformIcons}>
            {project.github && (
              <div className={styles.githubIconLink} title="View on GitHub">
                <svg className={styles.githubIcon} viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoIconLink}
                title="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className={styles.demoIcon} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appStoreIconLink}
                title="App Store"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className={styles.appStoreIcon} viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function OtherProjectsCarousel() {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const CARDS_PER_PAGE = 6;
  
  // Projeleri sırala (basit sıralama)
  const getSortedProjects = () => {
    return OtherProjects;
  };
  
  const sortedProjects = getSortedProjects();
  const totalPages = Math.ceil(sortedProjects.length / CARDS_PER_PAGE);
  
  // Mevcut sayfa için kartları filtrele
  const getCurrentPageCards = () => {
    const startIndex = currentPage * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    return sortedProjects.slice(startIndex, endIndex);
  };

  // Sayfa değiştirme fonksiyonu
  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Sonraki sayfa
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Önceki sayfa
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const projectCount = OtherProjects.length;
  
  return (
    <section className={styles.carouselSection}>
      <div className="container">
        <div className={styles.carouselHeader}>
          <h2 className={styles.carouselTitle}>General Projects</h2>
          <p className={styles.carouselSubtitle}>
            Minecraft dışındaki öne çıkan projelerim - Web geliştirme, mobil uygulamalar, oyun geliştirme ve daha fazlası
          </p>
        </div>
        
        <div className={styles.carouselContainer}>
          <div 
            ref={carouselRef}
            className={styles.carousel}
          >
            {getCurrentPageCards().map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
              />
            ))}
          </div>
          
          {/* Sayfalama Navigasyonu */}
          <div className={styles.paginationContainer}>
            <div className={styles.pagination}>
              {/* Önceki sayfa butonu */}
              <button
                className={`${styles.pageButton} ${styles.prevButton} ${currentPage === 0 ? styles.disabled : ''}`}
                onClick={prevPage}
                disabled={currentPage === 0}
                aria-label="Previous page"
              >
                ‹
              </button>
              
              {/* Sayfa noktaları */}
              <div className={styles.pageDots}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`${styles.pageDot} ${currentPage === index ? styles.activeDot : ''}`}
                    onClick={() => goToPage(index)}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Sonraki sayfa butonu */}
              <button
                className={`${styles.pageButton} ${styles.nextButton} ${currentPage === totalPages - 1 ? styles.disabled : ''}`}
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                aria-label="Next page"
              >
                ›
              </button>
            </div>
            
            {/* Sayfa bilgisi */}
            <div className={styles.pageInfo}>
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
