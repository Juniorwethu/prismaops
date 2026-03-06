// src/pages/LandingPage.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuComputer, LuPalette, LuGithub, LuCode, LuUsers, LuZap, LuCheck, LuArrowRight } from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './LandingPage.module.css';

const services = [
  {
    icon: <LuComputer />,
    title: 'Web & UI Design',
    description: 'Stunning, modern websites and UI/UX designs that are responsive and user-friendly.',
    link: '/web-ui-design',
  },
  {
    icon: <LuPalette />,
    title: 'Graphic Design',
    description: 'Creative graphic design for branding, marketing materials, and digital content.',
    link: '/graphic-design',
  },
  {
    icon: <LuGithub />,
    title: 'GitHub Training',
    description: 'Expert-led training to master Git and GitHub for seamless team collaboration.',
    link: '/github-training',
  },
];

const features = [
  {
    icon: <LuCode />,
    title: 'Modern Technology',
    description: 'Built with cutting-edge tools and frameworks',
  },
  {
    icon: <LuUsers />,
    title: 'Client-Focused',
    description: 'Your success is our top priority',
  },
  {
    icon: <LuZap />,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality',
  },
];

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
];

export const LandingPage: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.landingPage} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      {/* Hero Section */}
      <header className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuCheck className={styles.badgeIcon} />
            <span>Professional Digital Solutions</span>
          </div>
          <h1 className={styles.heroTitle}>
            Transform Your Vision Into 
            <span className={styles.gradientText}> Digital Reality</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering businesses with cutting-edge web development, stunning design, 
            and expert GitHub training that drives results.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/services" className={styles.ctaButton}>
              Explore Our Services
              <LuArrowRight className={styles.buttonIcon} />
            </Link>
            <Link to="/portfolio" className={styles.secondaryButton}>
              View Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className={styles.mainContent}>
        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions tailored to your unique needs
            </p>
          </div>
          <div className={styles.cardsContainer}>
            {services.map((service, index) => (
              <div key={service.title} className={styles.serviceCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <Link to={service.link} className={styles.cardLink}>
                  Learn More <LuArrowRight className={styles.linkIcon} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Elevate Your Business?</h2>
            <p className={styles.ctaText}>
              Let's collaborate to create something extraordinary. Get in touch today 
              and let's discuss how we can bring your vision to life.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Start Your Project
              <LuArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
