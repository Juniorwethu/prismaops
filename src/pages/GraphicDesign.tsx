// src/pages/GraphicDesign.tsx
import React, { useState, useEffect } from 'react';
import { 
  LuPaintbrush, 
  LuSmartphone, 
  LuContact, 
  LuPresentation, 
  LuFileText, 
  LuLightbulb,
  LuCheck,
  LuArrowRight,
  LuSparkles
} from 'react-icons/lu';
import styles from './GraphicDesign.module.css';

const GraphicDesign: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const graphicServices = [
    {
      icon: LuPaintbrush,
      title: 'Logo & Branding',
      description: 'Custom logo design, brand color palette, and typography for a unique identity.',
      features: [
        'Custom logo concepts',
        'Brand color palette',
        'Typography guidelines',
        'Brand style guide',
        'Multiple file formats',
        'Unlimited revisions'
      ],
      price: 'From R800'
    },
    {
      icon: LuSmartphone,
      title: 'Social Media Content',
      description: 'Eye-catching posts, banners, and stories for Instagram, Facebook, LinkedIn, and more.',
      features: [
        'Custom post designs',
        'Story templates',
        'Cover photos & banners',
        'Platform optimization',
        'Consistent branding',
        'Content calendar support'
      ],
      price: 'From R150/post'
    },
    {
      icon: LuContact,
      title: 'Business Cards & Stationery',
      description: 'Professional business cards, letterheads, and email signatures.',
      features: [
        'Business card design',
        'Letterhead templates',
        'Email signatures',
        'Print-ready files',
        'Digital versions',
        'Professional layouts'
      ],
      price: 'From R500'
    },
    {
      icon: LuPresentation,
      title: 'Presentations & Pitch Decks',
      description: 'Custom PowerPoint/Google Slides design for business, academic, or investor presentations.',
      features: [
        'Custom slide designs',
        'Data visualization',
        'Infographics',
        'Animation effects',
        'Master templates',
        'Brand consistency'
      ],
      price: 'From R800'
    },
    {
      icon: LuFileText,
      title: 'Flyers & Posters',
      description: 'Promotional flyers, event posters, and print-ready designs.',
      features: [
        'Event promotion materials',
        'Marketing flyers',
        'Product posters',
        'Print specifications',
        'Digital formats',
        'Eye-catching layouts'
      ],
      price: 'From R400'
    },
    {
      icon: LuLightbulb,
      title: 'Custom Design Projects',
      description: 'Any other graphic design needs? Get a custom quote for your unique project.',
      features: [
        'Packaging design',
        'Menu designs',
        'Infographics',
        'eBook covers',
        'Certificate designs',
        'Custom illustrations'
      ],
      price: 'Custom Quote'
    }
  ];

  return (
    <div className={styles.graphicPage}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuSparkles className={styles.badgeIcon} />
            <span>Creative Design Studio</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Graphic Design</span> Services
          </h1>
          
          <p className={styles.heroSubtitle}>
            Transform your brand with stunning visual designs. From logos to marketing materials, 
            we create graphics that capture attention and communicate your message effectively.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {graphicServices.map((service, index) => (
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
          <h2 className={styles.ctaTitle}>Ready to Elevate Your Brand?</h2>
          <p className={styles.ctaText}>
            Let's create visuals that make your brand unforgettable. Get in touch for a free consultation 
            and discover how our graphic design services can help you stand out.
          </p>
          <a href="mailto:PrismaOps@outlook.com" className={styles.ctaButton}>
            <span>Get Started Today</span>
            <LuArrowRight className={styles.buttonArrow} />
          </a>
        </div>
      </section>
    </div>
  );
};

export { GraphicDesign };
