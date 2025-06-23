import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: null,
    description: (
      <>
        All projects are built entirely on Minecraft datapacks.
        You can use any of them with your preferred modpack and they work seamlessly across compatible versions.
      </>
    ),
    img: '/img/commandblock.png',
    imgStyle: {height: 100, width: 100, marginTop: '55px'}
  },
  {
    title: 'Easy Installation',
    Svg: null,
    description: (
      <>
        Simply place the downloaded datapack file into your world's `datapacks` folder — that's all it takes. 
        Each datapack also comes with multiple mod loader versions, so you can easily add them to your modpack as well.

      </>
    ),
    img: '/img/enderchest.gif',
    imgStyle: {height: 150, width: 150, marginTop: '0px'}
  },
  {
    title: 'Actively Maintained',
    Svg: null,
    description: (
      <>
        All datapacks are regularly updated to ensure compatibility with the latest Minecraft versions and mod loaders. 
        Bugs are fixed quickly and new features are added based on community feedback.

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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Minecraft Projects</h2>
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
