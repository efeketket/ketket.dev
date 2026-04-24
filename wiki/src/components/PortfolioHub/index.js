import React from 'react';
import Link from '@docusaurus/Link';
import { PORTFOLIO_CATEGORIES } from '@site/src/data/portfolioCategories';
import styles from './styles.module.css';

function CategoryCard({ category }) {
  const isExternal = Boolean(category.href);
  const cardProps = isExternal
    ? { href: category.href, target: '_blank', rel: 'noopener noreferrer' }
    : { href: category.to };

  const inner = (
    <>
      <div className={styles.cardImage}>
        <img
          src={category.coverImage}
          alt={category.title}
          onError={(e) => { e.target.src = '/img/commandblock.png'; }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{category.title}</h3>
        <p className={styles.cardDescription}>{category.description}</p>
        <span className={styles.cardCta}>
          Explore
          <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </span>
      </div>
    </>
  );

  if (isExternal) {
    return <a {...cardProps} className={styles.card}>{inner}</a>;
  }
  return <Link to={category.to} className={styles.card}>{inner}</Link>;
}

export default function PortfolioHub() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.subtitle}>Discover my projects by category.</p>
      </div>
      <div className={styles.list}>
        {PORTFOLIO_CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
