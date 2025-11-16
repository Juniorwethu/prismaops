// src/pages/LandingPage.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './LandingPage.module.css';

const services = [
  {
    icon: '💻',
    title: 'Web & UI Design',
    description: 'Stunning, modern websites and UI/UX designs that are responsive and user-friendly.',
    link: '/web-ui-design',
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    description: 'Creative graphic design for branding, marketing materials, and digital content.',
    link: '/graphic-design',
  },
  {
    icon: '💡',
    title: 'GitHub Training',
    description: 'Expert-led training to master Git and GitHub for seamless team collaboration.',
    link: '/github-training',
  },
];

export const LandingPage: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <div className={`${styles.landingPage} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Build, Design, and Collaborate with PrismaOps</h1>
        <p className={styles.heroSubtitle}>
          Your one-stop solution for web development, stunning design, and expert GitHub training.
        </p>
        <Link to="/services" className={styles.ctaButton}>
          Explore Our Services
        </Link>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <div className={styles.cardsContainer}>
            {services.map((service) => (
              <div key={service.title} className={styles.serviceCard}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <Link to={service.link} className={styles.cardLink}>
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <h2 className={styles.ctaTitle}>Ready to bring your ideas to life?</h2>
          <p className={styles.ctaText}>Let's build something amazing together.</p>
          <Link to="/contact" className={styles.ctaButton}>
            Get In Touch
          </Link>
        </section>
      </main>
    </div>
  );
};
