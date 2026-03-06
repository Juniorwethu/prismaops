// src/pages/ContactUs.tsx
import React, { useState, useEffect } from 'react';
import { 
  LuMail, 
  LuPhone, 
  LuClock, 
  LuMapPin,
  LuSend,
  LuCheck,
  LuArrowRight,
  LuSparkles
} from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: LuMail,
      title: 'Email Us',
      subtitle: 'Drop us a line',
      value: 'PrismaOps@outlook.com',
      link: 'mailto:PrismaOps@outlook.com',
      color: 'blue',
      ledColor: '#60a5fa'
    },
    {
      icon: LuPhone,
      title: 'Call Us',
      subtitle: 'Mon-Fri 9am-6pm',
      value: '078 798 3991',
      link: 'tel:0787983991',
      color: 'purple',
      ledColor: '#a855f7'
    },
    {
      icon: FaInstagram,
      title: 'Follow Us',
      subtitle: 'Connect on Instagram',
      value: '@prismaops',
      link: 'https://www.instagram.com/prismaops/',
      color: 'pink',
      ledColor: '#ec4899',
      external: true
    },
    {
      icon: LuClock,
      title: 'Response Time',
      subtitle: 'Quick turnaround',
      value: 'Within 24 hours',
      link: null,
      color: 'green',
      ledColor: '#34d399'
    }
  ];

  const whyChooseUs = [
    { icon: LuCheck, text: '100+ Successful Projects' },
    { icon: LuCheck, text: '24/7 Support Available' },
    { icon: LuCheck, text: 'Expert Development Team' },
    { icon: LuCheck, text: 'Affordable Pricing' }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuSparkles className={styles.badgeIcon} />
            <span>Let's Connect</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Get In <span className={styles.gradientText}>Touch</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Ready to transform your ideas into reality? Our team is here to help you build something amazing. 
            Reach out and let's start your next project together.
          </p>

          {/* Quick Stats */}
          <div className={styles.quickStats}>
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className={styles.statItem}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <item.icon className={styles.statIcon} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className={styles.contactGrid}>
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className={`${styles.contactCard} ${styles[method.color]}`}
            style={{ animationDelay: `${0.8 + index * 0.15}s` }}
          >
            {/* LED Indicator */}
            <div className={styles.ledIndicator}>
              <div 
                className={styles.ledDot} 
                style={{ 
                  backgroundColor: method.ledColor,
                  boxShadow: `0 0 10px ${method.ledColor}, 0 0 20px ${method.ledColor}` 
                }}
              />
              <span className={styles.ledLabel}>ACTIVE</span>
            </div>

            {/* Card Icon */}
            <div className={styles.cardIconWrapper}>
              <div 
                className={styles.cardIconBg}
                style={{ 
                  background: `linear-gradient(135deg, ${method.ledColor}33 0%, ${method.ledColor}11 100%)` 
                }}
              />
              <method.icon className={styles.cardIcon} style={{ color: method.ledColor }} />
            </div>

            {/* Card Content */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{method.title}</h3>
              <p className={styles.cardSubtitle}>{method.subtitle}</p>
              
              {method.link ? (
                <a
                  href={method.link}
                  className={styles.cardValue}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                >
                  {method.value}
                  <LuArrowRight className={styles.cardArrow} />
                </a>
              ) : (
                <p className={styles.cardValueStatic}>{method.value}</p>
              )}
            </div>

            {/* Decorative Elements */}
            <div className={styles.cardGlow} style={{ background: method.ledColor }} />
          </div>
        ))}
      </section>

      {/* Location Section */}
      <section className={styles.locationSection}>
        <div className={styles.locationCard}>
          <div className={styles.locationIcon}>
            <LuMapPin />
          </div>
          <h3 className={styles.locationTitle}>
            Based in <span className={styles.gradientText}>South Africa</span>
          </h3>
          <p className={styles.locationText}>
            Serving clients worldwide with cutting-edge web solutions, UI/UX design, 
            and professional development training. No matter where you are, we're ready to help.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p className={styles.ctaText}>
            Let's discuss your ideas and create something extraordinary together. 
            We're excited to hear from you!
          </p>
          <a href="mailto:PrismaOps@outlook.com" className={styles.ctaButton}>
            <LuSend className={styles.buttonIcon} />
            <span>Send us a message</span>
            <LuArrowRight className={styles.buttonArrow} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
