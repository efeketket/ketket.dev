import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DatapackCarousel from '@site/src/components/DatapackCarousel';
import HeroSlider from '@site/src/components/HeroSlider';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function MinecraftHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <HeroSlider />
      <div className={clsx('container', styles.heroContent)}>
        <Heading as="h1" className="hero__title">
          Ketket's Minecraft Creations
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/minecraft/wiki/intro">
            📂 Explore Wiki
          </Link>
          <Link
            className="button button--outline button--lg"
            to="#minecraft-projects">
            ⛏️ Minecraft Projects
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Minecraft() {
  const {siteConfig} = useDocusaurusContext();
  const [stats, setStats] = useState(null);

  return (
    <Layout
      title={`Minecraft - ${siteConfig.title}`}
      description="Minecraft datapacks, mods and creations by Ketket">
      <MinecraftHeader />
      <main>
        <div id="minecraft-projects">
          <HomepageFeatures stats={stats} />
          <DatapackCarousel onStatsLoaded={setStats} />
        </div>
      </main>
    </Layout>
  );
}
