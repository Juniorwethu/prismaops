// src/pages/Portfolio.tsx
import React, { useContext, useEffect, useState } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import { LuPaintbrush, LuFileText, LuRocket, LuSearch, LuZap, LuGem, LuTarget, LuWrench } from 'react-icons/lu';
import styles from './Portfolio.module.css';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const Portfolio: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // For optimal performance and to avoid redundancy, this useEffect hook 
    // should be moved to a single top-level component in your application, 
    // such as App.tsx or a main layout component. This ensures the viewport 
    // meta tag is set once for the entire application.
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');

    return () => {
      // Optional: cleanup if component unmounts, though usually you want this to persist.
    };
  }, []);

  const portfolioServices: {
    title: string;
    description: string;
    features: string[];
    price: string;
    duration: string;
    icon: React.ElementType;
  }[] = [
    {
      title: "Portfolio Design & Development",
      description: "Custom-built professional portfolio websites that showcase your work beautifully. Includes responsive design, modern UI/UX, and performance optimization.",
      features: [
        "Responsive web design",
        "Custom domain setup",
        "SEO optimization",
        "Performance optimization",
        "Contact form integration",
        "Social media integration"
      ],
      price: "R2,500 - R3,000",
      duration: "5-10 business days",
      icon: LuPaintbrush
    },
    {
      title: "Portfolio Content Management",
      description: "Professional organization and presentation of your projects. We help structure your work to tell compelling stories that attract clients and employers.",
      features: [
        "Project case study writing",
        "Content organization",
        "Professional copywriting",
        "Image optimization",
        "Skills presentation",
        "Achievement highlighting"
      ],
      price: "R800 - R1,500",
      duration: "3-5 business days",
      icon: LuFileText
    },
    {
      title: "Portfolio Hosting & Maintenance",
      description: "Complete hosting solution with ongoing maintenance and updates. Keep your portfolio running smoothly and up-to-date with the latest technologies.",
      features: [
        "Domain registration",
        "Web hosting setup",
        "SSL certificate",
        "Regular backups",
        "Security monitoring",
        "Monthly updates"
      ],
      price: "R300 - R500/month",
      duration: "Ongoing",
      icon: LuRocket
    },
    {
      title: "Portfolio Audit & Optimization",
      description: "Comprehensive review of your existing portfolio with actionable recommendations for improvement. Boost your portfolio's effectiveness and conversion rate.",
      features: [
        "UX/UI audit",
        "Content review",
        "Performance analysis",
        "SEO assessment",
        "Conversion optimization",
        "Detailed report with recommendations"
      ],
      price: "R600 - R1,200",
      duration: "2-3 business days",
      icon: LuSearch
    }
  ];

  const benefits: {
    icon: React.ElementType;
    title: string;
    desc: string;
  }[] = [
    {
      icon: LuZap,
      title: "Fast Delivery",
      desc: "Get your portfolio live within days, not weeks"
    },
    {
      icon: LuGem,
      title: "Professional Quality",
      desc: "Industry-standard designs that impress employers"
    },
    {
      icon: LuTarget,
      title: "Results-Focused",
      desc: "Portfolios designed to convert visitors into opportunities"
    },
    {
      icon: LuWrench,
      title: "Ongoing Support",
      desc: "We're here to help even after your portfolio goes live"
    }
  ];

  const sectionClasses = `${styles.pageSection} ${isSidebarCollapsed ? styles.collapsed : ''}`;

  return (
    <section className={sectionClasses}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Portfolio Services
        </h1>
        <p className={styles.subtitle}>
          Stand out from the crowd with a <strong>professional portfolio</strong> that showcases your talents and attracts opportunities. 
          From design to deployment, we handle everything so you can focus on what you do best.
        </p>
      </div>

      {/* Services Grid */}
      <div className={styles.servicesGrid}>
          {portfolioServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className={styles.serviceCard}>
                {/* Service Header */}
                <div className={styles.serviceHeader}>
                  <Icon className={styles.serviceIcon} />
                  <h2 className={styles.serviceTitle}>
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                {/* Features */}
                <div>
                  <h3 className={styles.featuresTitle}>
                    What's Included:
                  </h3>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Duration */}
                <div className={styles.pricingDuration}>
                  <div>
                    <div className={styles.price}>
                      {service.price}
                    </div>
                    <div className={styles.duration}>
                      {service.duration}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      window.location.href = "mailto:prismaops@outlook.com?subject=Portfolio Quote Request - " + encodeURIComponent(service.title) + "&body=Hi PrismaOps Team,%0D%0A%0D%0AI'm interested in getting a quote for " + encodeURIComponent(service.title) + ".%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!";
                    }}
                    className={styles.quoteButton}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUs}>
        <h2 className={styles.whyChooseUsTitle}>
          Why Choose PrismaOps for Your Portfolio?
        </h2>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <Icon className={styles.benefitIconSvg} />
                </div>
                <h3 className={styles.benefitTitle}>
                  {benefit.title}
                </h3>
                <p className={styles.benefitDesc}>
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>
          🚀 Ready to Build Your Dream Portfolio?
        </h3>
        <p className={styles.ctaText}>
          Let's create a portfolio that opens doors to your future opportunities. 
          Contact us today for a free consultation!
        </p>
        <div className={styles.ctaButtons}>
          <div className={styles.consultationWrapper}>
            <button
              onClick={() => setShowContactOptions(!showContactOptions)}
              className={styles.primaryButton}
            >
              Free Consultation
            </button>
            {showContactOptions && (
              <div className={styles.contactOptions}>
                <a href="https://wa.me/27787983991" target="_blank" rel="noopener noreferrer" className={styles.contactOptionButton}>
                  WhatsApp 1
                </a>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              // Navigate to Sample page
              window.location.href = '/sample';
            }}
            className={styles.secondaryButton}
          >
            View Samples
          </button>
        </div>
      </div>
    </section>
  );
};
