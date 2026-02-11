import React, { useRef, useState, useEffect } from 'react';
import styles from './styles.module.css';

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
  // Featured (öne çıkan) galeri görselini bul
  let featuredGalleryImage = null;
  if (project.gallery && project.gallery.length > 0) {
    // Önce featured olan görseli ara
    const featuredItem = project.gallery.find(item => item.featured === true);
    if (featuredItem) {
      featuredGalleryImage = featuredItem.url || featuredItem.URL || featuredItem.raw_url || null;
    } else {
      // Featured yoksa ilk görseli al
      const firstItem = project.gallery[0];
      featuredGalleryImage = firstItem.url || firstItem.URL || firstItem.raw_url || null;
    }
  }
  
  // Banner görseli: featured gallery > ilk gallery > icon > fallback
  const coverImage = featuredGalleryImage || project.icon_url || '/img/commandblock.png';
  const iconImage = project.icon_url || '/img/commandblock.png';
  
  // Sadece Modrinth download sayısı
  const downloadCount = modrinthDownloads[project.id] || project.downloads || 0;
  const lastUpdate = lastUpdated[project.id] || (project.updated ? formatDate(project.updated) : null);
  
  // Modrinth linki
  const modrinthUrl = project.slug ? `https://modrinth.com/${project.project_type || 'datapack'}/${project.slug}` : null;
  
  // PlanetMC linkini issue_tracker_url'den al (eğer varsa)
  const planetmcUrl = project.issue_tracker_url || null;

  const cardContent = (
    <>
      <div className={styles.cardImage}>
        <img 
          src={coverImage} 
          alt={project.title}
          onError={(e) => {
            e.target.src = '/img/commandblock.png'; // Fallback image
          }}
        />
      </div>
      <span className={styles.iconBox}>
        <img src={iconImage} alt="icon" className={styles.iconImg} onError={(e) => {
          e.target.src = '/img/commandblock.png';
        }} />
      </span>
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
              {modrinthUrl && (
                <a
                  href={modrinthUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modrinthIconLink}
                  title="View on Modrinth"
                  onClick={(e) => e.stopPropagation()} // Kartın tıklanmasını engelle
                >
                  <img src="/img/mediaicons/modrinthicon.png" alt="Modrinth" className={styles.modrinthIcon} />
                </a>
              )}
              {planetmcUrl && (
                <a
                  href={planetmcUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.planetmcIconLink}
                  title="View on PlanetMC"
                  onClick={(e) => e.stopPropagation()} // Kartın tıklanmasını engelle
                >
                  <img src="/img/mediaicons/planetmc.png" alt="PlanetMC" className={styles.planetmcIcon} />
                </a>
              )}
            </div>
            {lastUpdate && (
              <span className={styles.lastUpdate}>
                Updated {lastUpdate}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );

  // Card her zaman Modrinth linkine yönlendiriyor
  return (
    <a 
      href={modrinthUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {cardContent}
    </a>
  );
}

export default function DatapackCarousel() {
  const carouselRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [modrinthDownloads, setModrinthDownloads] = useState({});
  const [lastUpdated, setLastUpdated] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const CARDS_PER_PAGE = 6;
  
  // Projeleri indirme sayısına göre sırala (sadece Modrinth downloads)
  const getSortedProjects = () => {
    return projects.map(project => {
      const downloadCount = project.downloads || 0;
      return {
        ...project,
        totalDownloads: downloadCount
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
    console.log('🔥 useEffect triggered - DatapackCarousel mounted');
    
    // Modrinth API'den kullanıcının tüm projelerini çek
    const fetchUserProjects = async () => {
      console.log('=== Fetching projects from Modrinth API ===');
      try {
        setLoading(true);
        console.log('1. Starting to fetch user data...');
        
        // Önce kullanıcı bilgisini al
        const userResponse = await fetch('https://api.modrinth.com/v2/user/efeketket');
        console.log('2. User API Response Status:', userResponse.status, userResponse.ok);
        
        if (!userResponse.ok) {
          const errorText = await userResponse.text();
          console.error('User API Error:', userResponse.status, errorText);
          throw new Error(`Failed to fetch user: ${userResponse.status}`);
        }
        
        const userData = await userResponse.json();
        console.log('User data:', userData);
        
        // Kullanıcının projelerini ID ile al
        const projectsResponse = await fetch(`https://api.modrinth.com/v2/user/${userData.id}/projects`);
        console.log('Projects API Response Status:', projectsResponse.status);
        
        if (!projectsResponse.ok) {
          const errorText = await projectsResponse.text();
          console.error('Projects API Error:', projectsResponse.status, errorText);
          throw new Error(`Failed to fetch projects: ${projectsResponse.status}`);
        }
        
        const projectIdsResponse = await projectsResponse.json();
        console.log('Project IDs response:', projectIdsResponse);
        
        // Eğer response bir array ise ve içinde nesneler varsa, sadece ID'leri çıkar
        // Eğer zaten string array ise, olduğu gibi kullan
        let projectIds = [];
        if (Array.isArray(projectIdsResponse)) {
          projectIds = projectIdsResponse.map(item => {
            // Eğer item bir string ise (ID), direkt kullan
            if (typeof item === 'string') {
              return item;
            }
            // Eğer item bir nesne ise, id alanını al
            return item.id || item;
          }).filter(id => id); // Boş değerleri filtrele
        } else if (projectIdsResponse && typeof projectIdsResponse === 'object') {
          // Eğer response bir nesne ise, içindeki ID'leri çıkar
          console.warn('Unexpected response format, extracting IDs manually');
          projectIds = Object.values(projectIdsResponse).map(item => 
            typeof item === 'string' ? item : (item?.id || item)
          ).filter(id => id);
        }
        
        console.log('Extracted Project IDs:', projectIds);
        
        if (!projectIds || projectIds.length === 0) {
          console.warn('No project IDs found');
          setProjects([]);
          setModrinthDownloads({});
          setLastUpdated({});
          setLoading(false);
          return;
        }
        
        // Toplu proje bilgilerini çek - Modrinth API formatına göre
        // Modrinth API ids parametresini JSON array string formatında bekler
        const idsParam = JSON.stringify(projectIds);
        const detailsUrl = `https://api.modrinth.com/v2/projects?ids=${encodeURIComponent(idsParam)}`;
        console.log('Details URL length:', detailsUrl.length);
        
        // URL çok uzunsa POST kullan
        let detailsResponse;
        if (detailsUrl.length > 2000) {
          console.log('Using POST method due to long URL');
          detailsResponse = await fetch('https://api.modrinth.com/v2/projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: idsParam
          });
        } else {
          console.log('Using GET method');
          detailsResponse = await fetch(detailsUrl);
        }
        console.log('Details API Response Status:', detailsResponse.status);
        
        if (!detailsResponse.ok) {
          const errorText = await detailsResponse.text();
          console.error('Details API Error:', detailsResponse.status, errorText);
          throw new Error(`Failed to fetch project details: ${detailsResponse.status}`);
        }
        
        const projectsData = await detailsResponse.json();
        console.log('Projects data:', projectsData);
        
        if (!projectsData || projectsData.length === 0) {
          console.warn('No projects data returned');
          setProjects([]);
          setModrinthDownloads({});
          setLastUpdated({});
          setLoading(false);
          return;
        }
        
        // Proje verilerini işle ve state'e set et
        const formattedProjects = projectsData.map(projectData => ({
          id: projectData.id,
          modrinthId: projectData.id,
          title: projectData.title,
          description: projectData.description,
          downloads: projectData.downloads || 0,
          followers: projectData.followers || 0,
          updated: projectData.updated,
          icon_url: projectData.icon_url,
          gallery: projectData.gallery || [],
          project_type: projectData.project_type,
          slug: projectData.slug,
          issue_tracker_url: projectData.issue_tracker_url || null
        }));
        
        // Downloads ve updates state'lerini güncelle
        const downloads = {};
        const updates = {};
        formattedProjects.forEach(project => {
          downloads[project.id] = project.downloads || 0;
          if (project.updated) {
            updates[project.id] = formatDate(project.updated);
          }
        });
        
        console.log('Processed projects:', formattedProjects.length, formattedProjects);
        setProjects(formattedProjects);
        setModrinthDownloads(downloads);
        setLastUpdated(updates);
        setLoading(false);
        
      } catch (error) {
        console.error('Failed to fetch projects from Modrinth:', error);
        setProjects([]);
        setModrinthDownloads({});
        setLastUpdated({});
        setLoading(false);
      }
    };

    fetchUserProjects();
  }, []);

  // Toplam download sayısını hesapla (sadece Modrinth)
  const totalDownloads = Object.values(modrinthDownloads).reduce((total, d) => total + d, 0);
  const projectCount = sortedProjects.length;
  
  return (
    <section className={styles.carouselSection}>
      <div className="container">
        <div className={styles.carouselHeader}>
          <h2 className={styles.carouselTitle}>Featured Datapacks & Mods</h2>
          <p className={styles.carouselSubtitle}>
            {loading ? (
              'Loading projects...'
            ) : (
              `Discover our collection of ${projectCount} high-quality Minecraft datapacks with over ${formatDownloads(totalDownloads)} total downloads`
            )}
          </p>
        </div>
        
        <div className={styles.carouselContainer}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#CCCCCC' }}>
              Loading projects from Modrinth...
            </div>
          ) : sortedProjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#CCCCCC' }}>
              No projects found. Please check the browser console for errors.
            </div>
          ) : (
            <>
              <div 
                ref={carouselRef}
                className={styles.carousel}
              >
                {getCurrentPageCards().map((project) => (
                  <DatapackCard 
                    key={project.id || project.modrinthId} 
                    project={project} 
                    modrinthDownloads={modrinthDownloads}
                    lastUpdated={lastUpdated}
                  />
                ))}
              </div>
              
              {/* Sayfalama Navigasyonu */}
              {totalPages > 1 && (
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
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
} 