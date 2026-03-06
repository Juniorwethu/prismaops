// src/pages/WebUIDesign.tsx
import React, { useContext, useEffect, useState } from 'react';
import { 
  LuFileText, LuRocket, LuGlobe, LuSearch, 
  LuShoppingCart, LuFolderOpen, LuMonitor, 
  LuCheck, LuArrowRight 
} from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './WebUIDesign.module.css';

const webUiServices = [
  {
    icon: LuRocket,
    title: 'Landing Page Design',
    desc: 'High-converting, visually stunning landing pages for campaigns, products, and events.',
    features: [
      'Conversion-Optimized Design',
      'Mobile Responsive',
      'Fast Loading Speed',
      'Lead Capture Forms'
    ],
    price: 'R1,200 - R2,500',
    variant: 'dark'
  },
  {
    icon: LuGlobe,
    title: 'Full Website Design',
    desc: 'Modern, responsive websites tailored for businesses, creators, and freelancers.',
    features: [
      'Custom Design',
      'Up to 15 Pages',
      'SEO Optimized',
      'Content Management'
    ],
    price: 'R2,500 - R6,000',
    variant: 'light'
  },
  {
    icon: LuSearch,
    title: 'UI/UX Audit & Redesign',
    desc: 'Professional review and redesign of your existing site for better usability and aesthetics.',
    features: [
      'Comprehensive Audit',
      'User Experience Analysis',
      'Modern Redesign',
      'Performance Optimization'
    ],
    price: 'R1,000 - R2,500',
    variant: 'dark'
  },
  {
    icon: LuShoppingCart,
    title: 'E-commerce UI',
    desc: 'Custom online store interfaces with seamless shopping experiences.',
    features: [
      'Product Catalog Design',
      'Shopping Cart System',
      'Payment Integration',
      'Order Management'
    ],
    price: 'R3,000 - R7,000',
    variant: 'light'
  },
  {
    icon: LuFolderOpen,
    title: 'Portfolio & Blog UI',
    desc: 'Personal portfolios and blog layouts with interactive features and animations.',
    features: [
      'Project Showcase',
      'Blog Layout',
      'Interactive Galleries',
      'Contact Forms'
    ],
    price: 'R1,500 - R3,500',
    variant: 'dark'
  },
  {
    icon: LuMonitor,
    title: 'Custom Web App UI',
    desc: 'Unique interfaces for dashboards, SaaS, and custom web applications.',
    features: [
      'Dashboard Design',
      'Data Visualization',
      'Admin Interfaces',
      'Custom Components'
    ],
    price: 'Contact for quote',
    variant: 'light'
  }
];

export const WebUIDesign: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.webUiPage} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      {/* Hero Section */}
      <header className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuCheck className={styles.badgeIcon} />
            <span>Professional Web Design</span>
          </div>
          <h1 className={styles.heroTitle}>
            Web & <span className={styles.gradientText}>UI Design</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Modern, responsive websites and stunning interfaces crafted to elevate your brand, 
            engage your audience, and drive results.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <main className={styles.mainContent}>
        <div className={styles.servicesGrid}>
          {webUiServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className={`${styles.serviceCard} ${styles[service.variant]}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <Icon className={styles.serviceIcon} />
                  <div className={styles.priceBadge}>{service.price}</div>
                </div>
                
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.desc}</p>

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

        {/* Additional Info */}
        <div className={styles.infoCard}>
          <LuFileText className={styles.infoIcon} />
          <h3 className={styles.infoTitle}>Per Page Pricing</h3>
          <p className={styles.infoText}>
            Need additional pages? We offer transparent per-page pricing at <strong>R400 per page</strong> after 
            the first 3 pages. Perfect for growing sites and custom needs.
          </p>
        </div>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Dream Website?</h2>
            <p className={styles.ctaText}>
              Get a free quote or consultation. We'll help you create a site that's beautiful, 
              fast, and user-focused.
            </p>
            <a
              href="mailto:PrismaOps@outlook.com?subject=Web & UI Design Quote Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI'd like a quote for web & UI design services.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!"
              className={styles.ctaButton}
            >
              Get a Free Quote <LuArrowRight className={styles.buttonIcon} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
