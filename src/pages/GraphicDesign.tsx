// src/pages/GraphicDesign.tsx
import React, { useContext } from 'react';
import { FaPaintBrush, FaMobileAlt, FaAddressCard, FaChalkboardTeacher, FaFileAlt, FaLightbulb } from 'react-icons/fa';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './GraphicDesign.module.css';

const graphicDesignServices = [
  {
    icon: FaPaintBrush,
    title: 'Logo & Branding',
    desc: 'Custom logo design, brand color palette, and typography for a unique identity.',
    price: 'R800 - R2,000',
    colorClass: 'iconColor1'
  },
  {
    icon: FaMobileAlt,
    title: 'Social Media Content',
    desc: 'Eye-catching posts, banners, and stories for Instagram, Facebook, LinkedIn, and more.',
    price: 'R150 per post / R1,000 for 10-pack',
    colorClass: 'iconColor2'
  },
  {
    icon: FaAddressCard,
    title: 'Business Cards & Stationery',
    desc: 'Professional business cards, letterheads, and email signatures.',
    price: 'R500 - R1,200',
    colorClass: 'iconColor3'
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Presentation & Pitch Decks',
    desc: 'Custom PowerPoint/Google Slides design for business, academic, or investor presentations.',
    price: 'R800 - R2,500',
    colorClass: 'iconColor4'
  },
  {
    icon: FaFileAlt,
    title: 'Flyers & Posters',
    desc: 'Promotional flyers, event posters, and print-ready designs.',
    price: 'R400 - R1,000',
    colorClass: 'iconColor5'
  },
  {
    icon: FaLightbulb,
    title: 'Custom Requests',
    desc: 'Any other graphic design needs? Get a custom quote for your project.',
    price: 'Contact for quote',
    colorClass: 'iconColor6'
  }
];

export const GraphicDesign: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section className={`${styles.pageSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={`${styles.header} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <h1 className={`${styles.title} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Graphic Design
        </h1>
        <p className={`${styles.subtitle} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Creative graphic design for branding, marketing materials, and digital content.
        </p>
      </div>
      <div className={styles.servicesGrid}>
        {graphicDesignServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className={styles.serviceCard}>
              <Icon className={`${styles.serviceIcon} ${styles[service.colorClass]}`} />
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <div className={styles.servicePrice}>{service.price}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>
          Need a design that stands out?
        </h3>
        <p className={styles.ctaText}>
          Let's create visuals that capture your brand's essence and connect with your audience.
        </p>
        <a
          href="mailto:PrismaOps@outlook.com?subject=Graphic Design Quote Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI'd like a quote for graphic design services.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!"
          className={styles.ctaButton}
        >
          Get a Design Quote
        </a>
      </div>
    </section>
  );
};
