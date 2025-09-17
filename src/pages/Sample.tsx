// src/pages/Sample.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './Sample.module.css';

export const Sample: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const portfolioSamples = [
    {
      title: "Creative Designer Portfolio",
      category: "Graphic Design",
      description: "Modern portfolio showcasing creative work with interactive galleries and smooth animations.",
      features: ["Interactive Gallery", "Animation Effects", "Mobile Responsive", "SEO Optimized"],
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
      image: "/placeholder-portfolio-1.jpg",
      liveUrl: "#",
      type: "Design & Development"
    },
    {
      title: "Developer Portfolio",
      category: "Web Development",
      description: "Clean, professional portfolio for a full-stack developer with project showcase and skills matrix.",
      features: ["Project Showcase", "Skills Matrix", "Contact Integration", "Dark/Light Mode"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "/placeholder-portfolio-2.jpg",
      liveUrl: "#",
      type: "Development"
    },
    {
      title: "Photography Portfolio",
      category: "Photography",
      description: "Stunning visual portfolio with high-quality image optimization and gallery features.",
      features: ["Image Optimization", "Lightbox Gallery", "Client Galleries", "Booking System"],
      technologies: ["React", "Cloudinary", "Stripe", "Firebase"],
      image: "/placeholder-portfolio-3.jpg",
      liveUrl: "#",
      type: "Design & Development"
    },
    {
      title: "Business Consultant Portfolio",
      category: "Business",
      description: "Professional corporate portfolio with case studies, testimonials, and service listings.",
      features: ["Case Studies", "Client Testimonials", "Service Pages", "Blog Integration"],
      technologies: ["WordPress", "Custom Theme", "WooCommerce", "Analytics"],
      image: "/placeholder-portfolio-4.jpg",
      liveUrl: "#",
      type: "Content Management"
    },
    {
      title: "Student Project Portfolio",
      category: "Academic",
      description: "Academic portfolio showcasing student projects, research, and achievements.",
      features: ["Project Documentation", "Research Papers", "Achievement Gallery", "PDF Downloads"],
      technologies: ["React", "GitHub Pages", "PDF.js", "Bootstrap"],
      image: "/placeholder-portfolio-5.jpg",
      liveUrl: "#",
      type: "Design & Development"
    },
    {
      title: "Freelancer Portfolio",
      category: "Freelance",
      description: "Comprehensive freelancer portfolio with service packages, pricing, and client portal.",
      features: ["Service Packages", "Pricing Calculator", "Client Portal", "Invoice System"],
      technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder-portfolio-6.jpg",
      liveUrl: "#",
      type: "Full Service"
    }
  ];

  const categories = ["All", "Graphic Design", "Web Development", "Photography", "Business", "Academic", "Freelance"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredSamples = selectedCategory === "All" 
    ? portfolioSamples 
    : portfolioSamples.filter(sample => sample.category === selectedCategory);

  return (
    <section className={`${styles.sampleSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      {/* Header */}
      <div className={`${styles.header} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <h1 className={`${styles.title} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Portfolio Samples
        </h1>
        <p className={`${styles.subtitle} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Explore our <strong>portfolio examples</strong> across different industries and styles. 
          Each project demonstrates our commitment to quality, creativity, and professional excellence.
        </p>
      </div>

      {/* Category Filter */}
      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.selected : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className={styles.portfolioGrid}>
        {filteredSamples.map((sample, idx) => (
          <div key={idx} className={styles.sampleCard}>
            {/* Image Placeholder */}
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageContent}>
                <span className={styles.imageIcon}>🖼️</span>
                <span className={styles.imageTitle}>
                  {sample.title}
                </span>
              </div>
              <div className={styles.typeBadge}>
                {sample.type}
              </div>
            </div>

            {/* Content */}
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardCategory}>
                  {sample.category}
                </div>
                <h3 className={styles.cardTitle}>
                  {sample.title}
                </h3>
                <p className={styles.cardDescription}>
                  {sample.description}
                </p>
              </div>

              {/* Features */}
              <div className={styles.features}>
                <h4 className={styles.listTitle}>
                  Key Features:
                </h4>
                <div className={styles.tags}>
                  {sample.features.map((feature, featureIdx) => (
                    <span key={featureIdx} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className={styles.technologies}>
                <h4 className={styles.listTitle}>
                  Technologies:
                </h4>
                <div className={styles.tags}>
                  {sample.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className={styles.actionButton}>
                View Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>
          🎯 Inspired by What You See?
        </h3>
        <p className={styles.ctaText}>
          These are just a few examples of what we can create for you. Every portfolio is custom-designed 
          to match your unique style, goals, and industry requirements.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryButton}>
            Start Your Portfolio
          </button>
          <button className={styles.secondaryButton}>
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};
