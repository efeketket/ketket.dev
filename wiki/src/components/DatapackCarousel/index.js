import React, { useRef, useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const DatapackProjects = [
  {
    id: 'furnicraft',
    title: 'FurniCraft',
    description: 'Furnish your Minecraft world with beautiful vanilla-style furniture. Add chairs, tables, cabinets, and more without any resource packs required.',
    coverImage: '/img/furnicraft/furnicraftmain2.png',
    link: '/docs/category/-furnicraft',
    icon: '/img/furnicraft/newicon.png',
    modrinth: 'https://modrinth.com/datapack/ketkets-furnicraft',
    modrinthId: 'ketkets-furnicraft',
    planetmc: 'https://www.planetminecraft.com/data-pack/ketket-s-furnicraft-no-texture-pack-1-20/',
    planetmcDownloads: 17720,
    curseforge: '#'
  },
  {
    id: 'playershops',
    title: 'Player Shops',
    description: 'Earn in style with this user-friendly player shop datapack! Villagers will be your only competitors.',
    coverImage: '/img/playershops/playershopmaincenter.png',
    link: '/docs/category/player-shops',
    icon: '/img/playershops/shopicon.png',
    modrinth: 'https://modrinth.com/datapack/ketkets-player-shops',
    modrinthId: 'ketkets-player-shops',
    planetmc: 'https://www.planetminecraft.com/data-pack/ketket-s-player-shops-make-money-in-style-1-20-1-19-4/',
    planetmcDownloads: 4200,
    curseforge: '#'
  },
  {
    id: 'graves',
    title: 'Graves',
    description: 'This datapack creates a grave when a player dies, safely storing their items. Retrieve your belongings without worrying about losing them!',
    coverImage: '/img/graves/mainheader.png',
    link: '/docs/category/-graves',
    icon: '/img/graves/gravesicon.png',
    modrinth: 'https://modrinth.com/datapack/ketket-graves',
    modrinthId: 'ketket-graves',
    planetmc: 'https://www.planetminecraft.com/data-pack/ketket-s-graves-secure-your-items/',
    planetmcDownloads: 5500,
    curseforge: '#'
  },
  {
    id: 'easy-coordinates',
    title: 'Easy Coordinates',
    description: 'Access a vast collection of custom player heads for decoration, building, and creative projects throughout your Minecraft world.',
    coverImage: '/img/easycoords/banner.png',
    link: '/docs/category/-easy-coordinates',
    icon: '/img/easycoords/icon1.png',
    modrinth: 'https://modrinth.com/datapack/easycoords',
    modrinthId: 'easycoords',
    planetmc: 'https://www.planetminecraft.com/data-pack/easycoords-find-your-way/',
    planetmcDownloads: 700,
    curseforge: '#'
  },
  {
    id: 'quick-shulker-boxes',
    title: 'Quick Shulker Boxes',
    description: 'Access a vast collection of custom player heads for decoration, building, and creative projects throughout your Minecraft world.',
    coverImage: '/img/quickshulker/header1.png',
    link: '/docs/datapack5/intro',
    icon: '/img/quickshulker/pack.png',
    modrinth: 'https://modrinth.com/datapack/quick-shulker-boxes',
    modrinthId: 'quick-shulker-boxes',
    planetmc: 'https://www.planetminecraft.com/data-pack/quick-shulker-boxes-hold-and-open/',
    planetmcDownloads: 516,
    curseforge: '#'
  },
  {
    id: 'better-hanging-signs',
    title: 'Better Hanging Signs',
    description: 'Access a vast collection of custom player heads for decoration, building, and creative projects throughout your Minecraft world.',
    coverImage: '/img/betterhanging/signmain.png',
    link: '/docs/datapack6/intro',
    icon: '/img/betterhanging/icon1.png',
    modrinth: 'https://modrinth.com/datapack/better-hanging-signs',
    modrinthId: 'better-hanging-signs',
    planetmc: 'https://www.planetminecraft.com/data-pack/ketket-s-better-hanging-signs-place-items-on-a-signs-1-20/',
    planetmcDownloads: 7000,
    curseforge: '#'
  },
  {
    id: 'stackcraft',
    title: 'Stackcraft',
    description: 'Access a vast collection of custom player heads for decoration, building, and creative projects throughout your Minecraft world.',
    coverImage: '/img/stackraft/header1.png',
    link: '/docs/datapack7/intro',
    icon: '/img/stackraft/icon1.png',
    modrinth: 'https://modrinth.com/datapack/stackraft',
    modrinthId: 'stackraft',
    planetmc: 'https://www.planetminecraft.com/data-pack/ketket-s-stackraft-less-stack-more-store/',
    planetmcDownloads: 500,
    curseforge: '#'
  }
];

// Download sayısını formatla
function formatDownloads(downloads) {
  if (downloads >= 1000000) {
    return (downloads / 1000000).toFixed(1) + 'M';
  } else if (downloads >= 1000) {
    return (downloads / 1000).toFixed(1) + 'K';
  }
  return downloads.toString();
}

// Tarihi formatla
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return 'Today';
  } else if (diffDays === 2) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
}

function DatapackCard({ project, modrinthDownloads, lastUpdated }) {
  const downloadCount = (modrinthDownloads[project.modrinthId] || 0) + project.planetmcDownloads;
  const lastUpdate = lastUpdated[project.modrinthId];

  return (
    <Link 
      to={project.link}
      className={styles.card}
    >
      <div className={styles.cardImage}>
        <span className={styles.iconBox}>
          <img src={project.icon} alt="icon" className={styles.iconImg} />
        </span>
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
          <div className={styles.cardFooterTop}>
            <span className={styles.downloadIconBox}>
              <img src="/img/mediaicons/download.png" alt="Downloads" className={styles.downloadIcon} />
              <span className={styles.downloadNumber}>{formatDownloads(downloadCount)}</span>
            </span>
          </div>
          <div className={styles.cardFooterBottom}>
            <div className={styles.platformIcons}>
              {project.modrinth && (
                <a
                  href={project.modrinth}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modrinthIconLink}
                  title="View on Modrinth"
                  onClick={(e) => e.stopPropagation()} // Kartın tıklanmasını engelle
                >
                  <img src="/img/mediaicons/modrinthicon.png" alt="Modrinth" className={styles.modrinthIcon} />
                </a>
              )}
              <a
                href={project.planetmc}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.planetmcIconLink}
                title="View on PlanetMC"
                onClick={(e) => e.stopPropagation()} // Kartın tıklanmasını engelle
              >
                <img src="/img/mediaicons/planetmc.png" alt="PlanetMC" className={styles.planetmcIcon} />
              </a>
              <a
                href={project.curseforge}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.curseforgeIconLink}
                title="View on CurseForge"
                onClick={(e) => e.stopPropagation()} // Kartın tıklanmasını engelle
              >
                <img src="/img/mediaicons/curseforge.png" alt="CurseForge" className={styles.curseforgeIcon} />
              </a>
            </div>
            {lastUpdate && (
              <span className={styles.lastUpdate}>
                Updated {lastUpdate}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DatapackCarousel() {
  const carouselRef = useRef(null);
  const [modrinthDownloads, setModrinthDownloads] = useState({});
  const [lastUpdated, setLastUpdated] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const CARDS_PER_PAGE = 6;
  
  // Projeleri indirme sayısına göre sırala
  const getSortedProjects = () => {
    return DatapackProjects.map(project => {
      const modrinthCount = modrinthDownloads[project.modrinthId] || 0;
      const totalDownloads = modrinthCount + project.planetmcDownloads;
      return {
        ...project,
        totalDownloads
      };
    }).sort((a, b) => b.totalDownloads - a.totalDownloads);
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

  useEffect(() => {
    // Modrinth API'den download sayılarını çek
    const fetchProjectData = async () => {
      const downloads = {};
      const updates = {};
      
      for (const project of DatapackProjects) {
        if (project.modrinthId) {
          try {
            const response = await fetch(`https://api.modrinth.com/v2/project/${project.modrinthId}`);
            if (response.ok) {
              const data = await response.json();
              downloads[project.modrinthId] = data.downloads;
              
              if (data.updated) {
                updates[project.modrinthId] = formatDate(data.updated);
              }
            }
          } catch (error) {
            console.warn(`Failed to fetch data for ${project.modrinthId}:`, error);
            downloads[project.modrinthId] = 0;
          }
        }
      }
      
      setModrinthDownloads(downloads);
      setLastUpdated(updates);
    };

    fetchProjectData();
  }, []);

  // Toplam download sayısını hesapla
  const totalModrinthDownloads = Object.values(modrinthDownloads).reduce((total, d) => total + d, 0);
  const totalPlanetMCDownloads = DatapackProjects.reduce((total, p) => total + p.planetmcDownloads, 0);
  const totalDownloads = totalModrinthDownloads + totalPlanetMCDownloads;
  const projectCount = DatapackProjects.length;
  
  return (
    <section className={styles.carouselSection}>
      <div className="container">
        <div className={styles.carouselHeader}>
          <h2 className={styles.carouselTitle}>Featured Datapacks & Mods</h2>
          <p className={styles.carouselSubtitle}>
            Discover our collection of {projectCount} high-quality Minecraft datapacks with over {formatDownloads(totalDownloads)} total downloads
          </p>
        </div>
        
        <div className={styles.carouselContainer}>
          <div 
            ref={carouselRef}
            className={styles.carousel}
          >
            {getCurrentPageCards().map((project) => (
              <DatapackCard 
                key={project.id} 
                project={project} 
                modrinthDownloads={modrinthDownloads}
                lastUpdated={lastUpdated}
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