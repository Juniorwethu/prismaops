// src/pages/Portfolio.tsx
import React, { useState, useEffect } from 'react';
import { 
  LuPaintbrush, 
  LuFileText, 
  LuRocket, 
  LuSearch,
  LuCheck,
  LuArrowRight,
  LuSparkles,
  LuZap,
  LuGem
} from 'react-icons/lu';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioServices = [
    {
      icon: LuPaintbrush,
      title: 'Portfolio Design & Development',
      description: 'Custom-built professional portfolio websites that showcase your work beautifully.',
      features: [
        'Responsive web design',
        'Custom domain setup',
        'SEO optimization',
        'Performance optimization',
        'Contact form integration',
        'Social media integration'
      ],
      price: 'From R2,500'
    },
    {
      icon: LuFileText,
      title: 'Portfolio Content Management',
      description: 'Professional organization and presentation of your projects to tell compelling stories.',
      features: [
        'Project case study writing',
        'Content organization',
        'Professional copywriting',
        'Image optimization',
        'Skills presentation',
        'Achievement highlighting'
      ],
      price: 'From R800'
    },
    {
      icon: LuRocket,
      title: 'Portfolio Hosting & Maintenance',
      description: 'Complete hosting solution with ongoing maintenance and updates.',
      features: [
        'Domain registration',
        'Web hosting setup',
        'SSL certificate',
        'Regular backups',
        'Security monitoring',
        'Monthly updates'
      ],
      price: 'From R300/month'
    },
    {
      icon: LuSearch,
      title: 'Portfolio Audit & Optimization',
      description: 'Comprehensive review of your existing portfolio with actionable recommendations.',
      features: [
        'UX/UI audit',
        'Content review',
        'Performance analysis',
        'SEO assessment',
        'Conversion optimization',
        'Detailed report'
      ],
      price: 'From R600'
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
            <span>Professional Portfolios</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Portfolio</span> Services
          </h1>
          
          <p className={styles.heroSubtitle}>
            Stand out from the crowd with a professional portfolio that showcases your talents 
            and attracts opportunities. From design to deployment, we handle everything.
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
          {portfolioServices.map((service, index) => (
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
          <h2 className={styles.ctaTitle}>Ready to Build Your Dream Portfolio?</h2>
          <p className={styles.ctaText}>
            Let's create a portfolio that opens doors to your future opportunities. 
            Contact us today for a free consultation and take the first step toward success.
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
