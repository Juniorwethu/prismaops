// src/pages/WebUIDesign.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './WebUIDesign.module.css';

export const WebUIDesign: React.FC = () => {
  const webUiServices = [
    {
      title: 'Per Page Pricing',
      desc: 'Transparent pricing for each additional page. Perfect for growing sites and custom needs.',
      price: 'R400 per page (after first 3 pages)',
      icon: '📄',
    },
    {
      title: 'Landing Page Design',
      desc: 'High-converting, visually stunning landing pages for campaigns, products, and events.',
      price: 'R1,200 - R2,500',
      icon: '🚀',
    },
    {
      title: 'Full Website Design',
      desc: 'Modern, responsive websites tailored for businesses, creators, and freelancers.',
      price: 'R2,500 - R6,000',
      icon: '🌐',
    },
    {
      title: 'UI/UX Audit & Redesign',
      desc: 'Professional review and redesign of your existing site for better usability and aesthetics.',
      price: 'R1,000 - R2,500',
      icon: '🧐',
    },
    {
      title: 'E-commerce UI',
      desc: 'Custom online store interfaces with seamless shopping experiences.',
      price: 'R3,000 - R7,000',
      icon: '🛒',
    },
    {
      title: 'Portfolio & Blog UI',
      desc: 'Personal portfolios and blog layouts with interactive features and animations.',
      price: 'R1,500 - R3,500',
      icon: '📁',
    },
    {
      title: 'Custom Web App UI',
      desc: 'Unique interfaces for dashboards, SaaS, and custom web applications.',
      price: 'Contact for quote',
      icon: '🖥️',
    },
  ];
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  return (
    <section className={`${styles.webUiSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Web & UI Design
        </h1>
        <p className={styles.subtitle}>
          Modern, responsive websites and stunning interfaces for your brand, business, or portfolio.<br />
          <span>Beautiful. Fast. User-focused.</span>
        </p>
        <div className={styles.tagline}>
          Get a modern site that stands out.
        </div>
      </div>

      <div className={styles.servicesGrid}>
        {webUiServices.map((service, idx) => (
          <div key={idx} className={styles.serviceCard}>
            <span className={styles.serviceIcon}>{service.icon}</span>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDesc}>{service.desc}</p>
            <div className={styles.servicePrice}>
              {service.price}
            </div>
            <div className={styles.cardAccent} />
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>
          Ready to build your dream website?
        </h3>
        <p className={styles.ctaText}>
          Get a free quote or consultation. We’ll help you create a site that’s beautiful, fast, and user-focused.
        </p>
        <a
          href="mailto:Admin@Prisma.Ops.com?subject=Web & UI Design Quote Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI'd like a quote for web & UI design services.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!"
          className={styles.ctaButton}
        >
          Contact Us for a Quote
        </a>
      </div>
    </section>
  );
};
