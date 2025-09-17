// src/pages/GraphicDesign.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './GraphicDesign.module.css';

export const GraphicDesign: React.FC = () => {
  const [showContact, setShowContact] = React.useState(false);
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const designServices = [
    {
      title: 'Logo & Branding',
      desc: 'Custom logo design, brand color palette, and typography for a unique identity.',
      price: 'R800 - R2,000',
      icon: '🎨',
    },
    {
      title: 'Social Media Content',
      desc: 'Eye-catching posts, banners, and stories for Instagram, Facebook, LinkedIn, and more.',
      price: 'R150 per post / R1,000 for 10-pack',
      icon: '📱',
    },
    {
      title: 'Business Cards & Stationery',
      desc: 'Professional business cards, letterheads, and email signatures.',
      price: 'R500 - R1,200',
      icon: '💼',
    },
    {
      title: 'Presentation & Pitch Decks',
      desc: 'Custom PowerPoint/Google Slides design for business, academic, or investor presentations.',
      price: 'R800 - R2,500',
      icon: '📊',
    },
    {
      title: 'Flyers & Posters',
      desc: 'Promotional flyers, event posters, and print-ready designs.',
      price: 'R400 - R1,000',
      icon: '📰',
    },
    {
      title: 'Custom Requests',
      desc: 'Any other graphic design needs? Get a custom quote for your project.',
      price: 'Contact for quote',
      icon: '✨',
    },
  ];
  return (
    <section className={`${styles.graphicDesignSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Graphic Design
        </h1>
        <p className={styles.subtitle}>
          Creative branding, social media content, and visual assets to elevate your presence.
        </p>
      </div>
      {/* Contact Us for a Quote Section */}
      <div className={styles.contactSection}>
        <h3 className={styles.contactTitle}>
          Need a custom design or want to discuss your project?
        </h3>
        <p className={styles.contactText}>
          Contact us for a free quote and consultation!
        </p>
        <button
          className={styles.contactButton}
          onClick={() => setShowContact(!showContact)}
        >
          {showContact ? 'Hide Contact Details' : 'Contact Us for a Quote'}
        </button>
        {showContact && (
          <div className={styles.contactDetails}>
            <div className={styles.contactDetail}>
              <span>📧</span>
              <strong>Email:</strong> <a href="mailto:Admin@Prisma.Ops.com">Admin@Prisma.Ops.com</a>
            </div>
            <div className={styles.contactDetail}>
              <span>📱</span>
              <strong>Phone:</strong> <a href="tel:0787983991">0787983991</a>
            </div>
            <div className={styles.contactDetail}>
              <span>⏰</span>
              <strong>Response Time:</strong> Within 24 hours
            </div>
          </div>
        )}
      </div>
      <div className={styles.servicesGrid}>
        {designServices.map((service, idx) => (
          <div key={idx} className={styles.serviceCard}>
            <span className={styles.serviceIcon}>{service.icon}</span>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDesc}>{service.desc}</p>
            <div className={styles.servicePrice}>
              {service.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
