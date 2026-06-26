// src/pages/Portfolio.tsx
import React, { useState, useEffect } from 'react';
import {
  LuFileText,
  LuRocket,
  LuSearch,
  LuCheck,
  LuArrowRight,
  LuSparkles,
  LuZap,
  LuGem,
} from 'react-icons/lu';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioExamples = [
    {
      icon: LuFileText,
      title: 'Dashboard Build Example',
      description: 'A small internal dashboard for tracking work without spreadsheet chaos.',
      features: [
        'Live status views',
        'Cleaner reporting',
        'Simple team handoff',
        'Fast daily use'
      ],
      price: 'Example'
    },
    {
      icon: LuRocket,
      title: 'Client Tracking Example',
      description: 'A lightweight tracker for requests, follow-ups, and next actions.',
      features: [
        'Request intake',
        'Follow-up reminders',
        'Status visibility',
        'Less admin work'
      ],
      price: 'Example'
    },
    {
      icon: LuSearch,
      title: 'Systems Audit Example',
      description: 'A short review that turns messy operations into a simple action plan.',
      features: [
        'Workflow review',
        'Bottleneck scan',
        'Quick wins',
        'Implementation notes'
      ],
      price: 'Example'
    }
  ];

  const benefits = [
    {
      icon: LuZap,
      title: 'Fast Delivery',
      description: 'Get your portfolio live within days, not weeks'
    },
    {
      icon: LuGem,
      title: 'Professional Quality',
      description: 'Industry-standard designs that impress employers'
    },
    {
      icon: LuRocket,
      title: 'Career Ready',
      description: 'Portfolios designed to convert visitors into opportunities'
    }
  ];

  return (
    <div className={styles.portfolioPage}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuSparkles className={styles.badgeIcon} />
            <span>Proof of work</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Small builds</span> that solve real tasks.
          </h1>
          
          <p className={styles.heroSubtitle}>
            See examples of dashboards, trackers, and workflow fixes built for business use.
          </p>

          {/* Benefits Grid */}
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={styles.benefitCard}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <benefit.icon className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {portfolioExamples.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <service.icon className={styles.serviceIcon} />
                <span className={styles.priceBadge}>{service.price}</span>
              </div>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
              
              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <LuCheck className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Want to see what could be built for your workflow?</h2>
          <p className={styles.ctaText}>
            Browse the examples, then book an audit if you want a faster, simpler process.
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:PrismaOps@outlook.com" className={styles.ctaButton}>
              <span>Get Started</span>
              <LuArrowRight className={styles.buttonArrow} />
            </a>
            <a href="/sample" className={styles.ctaButtonSecondary}>
              <span>View Samples</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Portfolio };
