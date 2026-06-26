// src/pages/Services.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LuFolderGit2,
  LuCode,
  LuDatabase,
  LuArrowRight,
  LuCheck,
} from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: LuDatabase,
    title: 'Automation Sprint',
    description: 'Fix one workflow fast and remove repeated manual steps.',
    features: [
      'Manual follow-up cleanup',
      'Spreadsheet and email automation',
      'Simple approval flows',
      'Quick handoff notes'
    ],
    highlight: 'R5k-R15k'
  },
  {
    icon: LuCode,
    title: 'Internal Tool Build',
    description: 'Dashboards, trackers, and admin tools for daily operations.',
    features: [
      'Live status dashboards',
      'Client and job trackers',
      'Admin tools for teams',
      'Clear data layout'
    ],
    highlight: 'R10k-R25k'
  },
  {
    icon: LuFolderGit2,
    title: 'Systems Audit',
    description: 'Find wasted time, broken steps, and simple fixes to ship first.',
    features: [
      'Workflow review',
      'Inefficiency checklist',
      'Practical recommendations',
      'Short action plan'
    ],
    highlight: 'R2k-R7k'
  },
];

export const Services: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.servicesPage} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      {/* Hero Section */}
      <header className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuCheck className={styles.badgeIcon} />
            <span>Productized services</span>
          </div>
          <h1 className={styles.heroTitle}>
            Three <span className={styles.gradientText}>small-business</span> offers that remove manual work.
          </h1>
          <p className={styles.heroSubtitle}>
            Clear scope, clear price range, and a result you can use right away.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <main className={styles.mainContent}>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className={styles.serviceCard}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <Icon className={styles.serviceIcon} />
                  <div className={styles.highlightBadge}>{service.highlight}</div>
                </div>
                
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>

                <ul className={styles.featuresList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <LuCheck className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Need help automating one part of your business?</h2>
            <p className={styles.ctaText}>
                Tell us which task wastes the most time and we'll point you to the fastest fix.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
                Book a 15-min automation audit <LuArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
