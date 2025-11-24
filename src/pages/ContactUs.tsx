// src/pages/ContactUs.tsx
import React, { useContext } from 'react';
import { LuMail, LuPhone, LuClock } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section className={`${styles.contactUsSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      {/* Header */}
      <div className={`${styles.header} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <h1 className={`${styles.title} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Get In Touch
        </h1>
        <p className={`${styles.subtitle} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Ready to start your next project? Let's discuss how PrismaOps can help bring your ideas to life.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>
            Contact Information
          </h2>
          
          <div className={styles.infoGroup}>
            <div className={styles.infoItem}>
              <LuMail className={`${styles.infoIcon} ${styles.emailIcon}`} />
              <div>
                <h3 className={styles.infoTitle}>Email</h3>
                <a href="mailto:PrismaOps@outlook.com" className={styles.infoLink}>
                  PrismaOps@outlook.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaInstagram className={styles.infoIcon} style={{ color: '#111', background: 'white', borderRadius: '4px' }} />
              <div>
                <h3 className={styles.infoTitle}>Instagram</h3>
                <a href="https://www.instagram.com/prismaops/" className={styles.infoLink} target="_blank" rel="noopener noreferrer">
                  @prismaops
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <LuPhone className={`${styles.infoIcon} ${styles.phoneIcon}`} />
              <div>
                <h3 className={styles.infoTitle}>Phone</h3>
                <div className={styles.infoLinks}>
                  <a href="tel:0787983991" className={styles.infoLink}>
                    0787983991
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <LuClock className={`${styles.infoIcon} ${styles.clockIcon}`} />
              <div>
                <h3 className={styles.infoTitle}>Response Time</h3>
                <p className={styles.infoText}>
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CTA */}
      <div className={styles.additionalCta}>
        <h3 className={styles.ctaTitle}>
          Ready to Get Started?
        </h3>
        <p className={styles.ctaText}>
          Whether you need web development, UI design, GitHub training, or any other tech service, 
          we're here to help you succeed. Let's turn your ideas into reality!
        </p>
      </div>
    </section>
  );
};

export default ContactUs;