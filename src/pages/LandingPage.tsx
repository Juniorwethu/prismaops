// src/pages/LandingPage.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './LandingPage.module.css';

export const LandingPage: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section className={styles.landingSection}>
      {/* Logo and Intro */}
      <div className={`${styles.introContainer} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <img
          src="/logo.jpg"
          alt="PrismaOps Logo"
          className={`${styles.logo} ${isSidebarCollapsed ? styles.collapsed : ''}`}
        />
        <h1 className={`${styles.title} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Welcome to PrismaOps
        </h1>
        <p className={styles.subtitle}>
          Empowering <strong>creators, students, and freelancers</strong> with exceptional tech
          services.
        </p>
      </div>

      {/* Feature Cards */}
      <div className={styles.featureCardsContainer}>
        {[
          {
            title: '🌐 Web & UI Design',
            desc: 'Modern, responsive websites and stunning interfaces.',
          },
          {
            title: '🎓 Student Projects',
            desc: 'Guidance and tools for your tech assignments and portfolios.',
          },
          {
            title: '📦 GitHub Training',
            desc: 'Master version control and code collaboration.',
          },
          {
            title: '🎨 Graphic Design',
            desc: 'Creative branding and social media content design.',
          },
          {
            title: '📄 Proposal Writing',
            desc: 'Professional proposals and documentation tailored to your needs.',
          },
        ].map((card, idx) => (
          <div key={idx} className={styles.featureCard}>
            <h3 className={styles.cardTitle}>
              {card.title}
            </h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA at bottom center if needed */}
      <div className={styles.footerCta}>
        🚀 Let’s build your digital future today.
      </div>
    </section>
  );
};
