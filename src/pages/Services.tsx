// src/pages/Services.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LuGlobe, LuFolderGit2, LuGraduationCap, LuPalette, 
  LuCode, LuDatabase, LuArrowRight, LuCheck
} from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: LuGlobe,
    title: 'Web Design & Development',
    description: 'Modern, responsive websites tailored to your brand.',
    features: [
      'Portfolio & Landing Pages',
      'Business Websites',
      'E-commerce Solutions',
      'Custom Web Applications'
    ],
    highlight: 'From R2,500'
  },
  {
    icon: LuPalette,
    title: 'Graphic Design & Branding',
    description: 'Creative designs that make your brand stand out.',
    features: [
      'Logo & Brand Identity',
      'Marketing Materials',
      'Social Media Graphics',
      'Presentation Design'
    ],
    highlight: 'From R800'
  },
  {
    icon: LuFolderGit2,
    title: 'GitHub & Portfolio Management',
    description: 'Master version control and showcase your work professionally.',
    features: [
      'GitHub Training Sessions',
      'Portfolio Organization',
      'README Optimization',
      'Project Deployment'
    ],
    highlight: 'From R600'
  },
  {
    icon: LuCode,
    title: 'Programming Training',
    description: 'Learn to code with hands-on, project-based instruction.',
    features: [
      'C# & .NET Development',
      'JavaScript & Web Tech',
      'Database Management',
      'Best Practices & Patterns'
    ],
    highlight: 'From R1,000'
  },
  {
    icon: LuGraduationCap,
    title: 'Student Project Support',
    description: 'Expert guidance for academic and capstone projects.',
    features: [
      'Project Planning & Design',
      'Technical Implementation',
      'Documentation & Reports',
      'Presentation Preparation'
    ],
    highlight: 'From R800'
  },
  {
    icon: LuDatabase,
    title: 'Business Solutions',
    description: 'Professional services to streamline your operations.',
    features: [
      'Document Automation',
      'Proposal Writing',
      'System Setup & Organization',
      'Ongoing Tech Support'
    ],
    highlight: 'From R400'
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
            <span>Professional Services</span>
          </div>
          <h1 className={styles.heroTitle}>
            Comprehensive <span className={styles.gradientText}>Digital Solutions</span>
          </h1>
          <p className={styles.heroSubtitle}>
            From web development to training and branding, we offer everything you need to succeed in the digital world.
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
            <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
            <p className={styles.ctaText}>
              Every project is unique. Let's discuss your specific requirements and create a tailored plan that fits your goals and budget.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Get a Free Consultation <LuArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
