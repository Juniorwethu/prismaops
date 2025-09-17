// src/pages/ContactUs.tsx
import React, { useState, useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you for contacting PrismaOps, ${form.name}! We'll get back to you soon.`);
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h3 className={styles.infoTitle}>Email</h3>
                <a href="mailto:Admin@Prisma.Ops.com" className={styles.infoLink}>
                  Admin@Prisma.Ops.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📱</span>
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
              <span className={styles.infoIcon}>⏰</span>
              <div>
                <h3 className={styles.infoTitle}>Response Time</h3>
                <p className={styles.infoText}>
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactFormContainer}>
          <h2 className={styles.sectionTitle}>
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Name *</label>
              <input
                required
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email *</label>
              <input
                required
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Message *</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={styles.formTextarea}
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Additional CTA */}
      <div className={styles.additionalCta}>
        <h3 className={styles.ctaTitle}>
          🚀 Ready to Get Started?
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
