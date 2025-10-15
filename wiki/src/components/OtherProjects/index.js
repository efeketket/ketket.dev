import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Digital Applications',
    Svg: null,
    description: (
      <>
        Modern web uygulamaları geliştiriyorum. React, Node.js, ve diğer modern teknolojiler kullanarak 
        kullanıcı dostu ve performanslı web siteleri oluşturuyorum.
      </>
    ),
    img: '/img/commandblock.png',
    imgStyle: {height: 100, width: 100, marginTop: '55px'}
  },
  {
    title: 'Technical Tools & Systems',
    Svg: null,
    description: (
      <>
        React Native ve Flutter ile mobil uygulamalar geliştiriyorum. 
        Cross-platform çözümler ile hem iOS hem de Android için tek kod tabanından uygulamalar.
      </>
    ),
    img: '/img/enderchest.gif',
    imgStyle: {height: 150, width: 150, marginTop: '0px'}
  },
  {
    title: 'Venture Projects',
    Svg: null,
    description: (
      <>
        Unity ve Godot ile oyun geliştirme projeleri. 2D ve 3D oyunlar, 
        oyun mekanikleri ve kullanıcı deneyimi odaklı tasarımlar.
      </>
    ),
    img: '/img/aripng.png',
    imgStyle: {height: 80, width: 100, marginTop: '70px'}
  },
];

function Feature({Svg, title, description, img, imgStyle}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img ? (
          <img src={img} alt={title} style={imgStyle || {height: 80, width: 100}} />
        ) : Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function OtherProjectsSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>General Projects</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 
