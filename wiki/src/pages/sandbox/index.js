import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const PROJECTS = [
  {
    title: 'Ket-Net Manager',
    description: 'An Internet Cafe Management System developed with C# for my Object-Oriented Programming (OOP) course, focusing on software architecture and system logic.',
    coverImage: '/img/ketnetlogo.png',
    href: 'https://github.com/efeketket/KetNet_Manager',
  },
  {
    title: 'Distribution Goodness of Fit Checker',
    description: 'A specialized module for testing Poisson Distribution fit, utilizing Chi-Square metrics to analyze the frequency of independent events occurring within fixed intervals.',
    coverImage: '/img/sandbox.png',
    href: 'https://github.com/efeketket',
  },
  {
    title: 'School Archive',
    description: ' A collection of code from various academic projects, assignments and experiments across mathematics, computer science and data systems courses.',
    coverImage: '/img/sandbox.png',
    href: 'https://drive.google.com/drive/folders/1fh8HOaF2hkXeHEtjTsKOAAlodK_rjyD5?usp=sharing',
  },
];

function ProjectCard({ project }) {
  const inner = (
    <>
      <div className={styles.cardImage}>
        <img
          src={project.coverImage || '/img/commandblock.png'}
          alt={project.title}
          onError={(e) => { e.target.src = '/img/commandblock.png'; }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
        {inner}
      </a>
    );
  }
  return <div className={styles.card}>{inner}</div>;
}

export default function Sandbox() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Academic Sandbox — ${siteConfig.title}`}
      description="Academic projects, experiments and coursework by Efe Ketenci">
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.header}>
              <h2 className={styles.title}>Academic Sandbox</h2>
              <p className={styles.subtitle}>
                Projects, experiments and coursework spanning mathematics, computer science and data systems.
              </p>
            </div>

            {PROJECTS.length === 0 ? (
              <p className={styles.empty}>Projects coming soon.</p>
            ) : (
              <div className={styles.grid}>
                {PROJECTS.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
