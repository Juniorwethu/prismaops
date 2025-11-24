// src/pages/WebUIDesign.tsx
import React, { useContext } from 'react';
import { LuFileText, LuRocket, LuGlobe, LuSearch, LuShoppingCart, LuFolderOpen, LuMonitor } from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './WebUIDesign.module.css';

const webUiServices: {
  icon: React.ElementType;
  title: string;
  desc: string;
  price: string;
  colorClass: string;
}[] = [
  {
    icon: LuFileText,
    title: 'Per Page Pricing',
    desc: 'Transparent pricing for each additional page. Perfect for growing sites and custom needs.',
    price: 'R400 per page (after first 3 pages)',
    colorClass: 'iconColor1'
  },
  {
    icon: LuRocket,
    title: 'Landing Page Design',
    desc: 'High-converting, visually stunning landing pages for campaigns, products, and events.',
    price: 'R1,200 - R2,500',
    colorClass: 'iconColor2'
  },
  {
    icon: LuGlobe,
    title: 'Full Website Design',
    desc: 'Modern, responsive websites tailored for businesses, creators, and freelancers.',
    price: 'R2,500 - R6,000',
    colorClass: 'iconColor3'
  },
  {
    icon: LuSearch,
    title: 'UI/UX Audit & Redesign',
    desc: 'Professional review and redesign of your existing site for better usability and aesthetics.',
    price: 'R1,000 - R2,500',
    colorClass: 'iconColor4'
  },
  {
    icon: LuShoppingCart,
    title: 'E-commerce UI',
    desc: 'Custom online store interfaces with seamless shopping experiences.',
    price: 'R3,000 - R7,000',
    colorClass: 'iconColor5'
  },
  {
    icon: LuFolderOpen,
    title: 'Portfolio & Blog UI',
    desc: 'Personal portfolios and blog layouts with interactive features and animations.',
    price: 'R1,500 - R3,500',
    colorClass: 'iconColor6'
  },
  {
    icon: LuMonitor,
    title: 'Custom Web App UI',
    desc: 'Unique interfaces for dashboards, SaaS, and custom web applications.',
    price: 'Contact for quote',
    colorClass: 'iconColor7'
  }
];

export const WebUIDesign: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section className={`${styles.pageSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={`${styles.header} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <h1 className={`${styles.title} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Web & UI Design
        </h1>
        <p className={`${styles.subtitle} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Modern, responsive websites and stunning interfaces for your brand, business, or portfolio.
        </p>
      </div>
      <div className={styles.servicesGrid}>
        {webUiServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className={styles.serviceCard}>
              <Icon className={`${styles.serviceIcon} ${styles[service.colorClass]}`} />
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <div className={styles.servicePrice}>
                {service.price}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>
          Ready to build your dream website?
        </h3>
        <p className={styles.ctaText}>
          Get a free quote or consultation. We’ll help you create a site that’s beautiful, fast, and user-focused.
        </p>
        <a
          href="mailto:PrismaOps@outlook.com?subject=Web & UI Design Quote Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI'd like a quote for web & UI design services.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!"
          className={styles.ctaButton}
        >
          Contact Us for a Quote
        </a>
      </div>
    </section>
  );
};
