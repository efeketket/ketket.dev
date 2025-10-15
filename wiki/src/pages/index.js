import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DatapackCarousel from '@site/src/components/DatapackCarousel';
import OtherProjectsSection from '@site/src/components/OtherProjects';
import OtherProjectsCarousel from '@site/src/components/OtherProjectsCarousel';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            📂 Explore Projects
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <OtherProjectsSection /> */}
        {/* <OtherProjectsCarousel /> */}
        <div id="minecraft-projects">
          <HomepageFeatures />
          <DatapackCarousel />
        </div>
      </main>
    </Layout>
  );
}
