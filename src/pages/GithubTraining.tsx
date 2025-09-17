// src/pages/GithubTraining.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './GithubTraining.module.css';

export const GithubTraining: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const trainingModules = [
    {
      title: "GitHub Fundamentals",
      level: "Beginner",
      duration: "2-3 hours",
      price: "R600",
      description: "Perfect introduction to version control and GitHub basics for complete beginners.",
      topics: [
        "What is Git and GitHub?",
        "Setting up your GitHub account",
        "Creating repositories",
        "Basic Git commands (add, commit, push)",
        "Understanding branches",
        "GitHub Desktop vs Command Line"
      ],
      icon: "🌱"
    },
    {
      title: "Collaboration & Team Workflows",
      level: "Intermediate",
      duration: "3-4 hours",
      price: "R1,500",
      description: "Learn professional collaboration techniques and team-based development workflows.",
      topics: [
        "Pull requests and code reviews",
        "Branching strategies (Git Flow)",
        "Resolving merge conflicts",
        "Issue tracking and project boards",
        "Team collaboration best practices",
        "GitHub Actions basics"
      ],
      icon: "🤝"
    },
    {
      title: "Advanced GitHub & DevOps",
      level: "Advanced",
      duration: "4-5 hours",
      price: "R1,500",
      description: "Master advanced features, automation, and professional development practices.",
      topics: [
        "GitHub Actions CI/CD pipelines",
        "Automated testing and deployment",
        "Advanced branching strategies",
        "GitHub Pages deployment",
        "API integration and webhooks",
        "Security and access management"
      ],
      icon: "🚀"
    }
  ];

  const studentServices = [
    {
      title: "Project Planning & Architecture",
      description: "Help students design and plan their tech projects from concept to implementation.",
      services: [
        "Project scope definition",
        "Technology stack recommendations",
        "Database design guidance",
        "Architecture planning",
        "Timeline and milestone setting"
      ],
      price: "R300/hour",
      icon: "📋"
    },
    {
      title: "Code Review & Mentorship",
      description: "One-on-one mentorship sessions to review code, debug issues, and improve coding practices.",
      services: [
        "Code review and optimization",
        "Debugging assistance",
        "Best practices guidance",
        "Performance optimization",
        "Security considerations"
      ],
      price: "R400/hour",
      icon: "👨‍🏫"
    },
    {
      title: "Project Deployment & Presentation",
      description: "Guide students through deployment processes and help create impressive project presentations.",
      services: [
        "Cloud deployment (Heroku, Vercel, AWS)",
        "Domain setup and configuration",
        "Project documentation",
        "Portfolio integration",
        "Presentation preparation"
      ],
      price: "R350/hour",
      icon: "🎯"
    }
  ];

  const getLevelClass = (level: string) => {
    if (level === 'Beginner') return styles.levelBeginner;
    if (level === 'Intermediate') return styles.levelIntermediate;
    if (level === 'Advanced') return styles.levelAdvanced;
    return '';
  };

  return (
    <section className={`${styles.githubTrainingSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      {/* Header */}
      <div className={`${styles.header} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <h1 className={`${styles.title} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          GitHub Training & Student Support
        </h1>
        <p className={`${styles.subtitle} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
          Master <strong>version control</strong> with comprehensive GitHub training and get expert guidance 
          for your <strong>student tech projects</strong>. From beginner basics to advanced workflows, 
          we'll help you become a confident developer.
        </p>
        <div className={styles.packagesInfo}>
          <h3 className={styles.packagesTitle}>
            📋 Training Packages:
          </h3>
          <div className={styles.packagesContainer}>
            <div className={styles.package}>
              <span className={styles.starterPackage}>
                Starter (1 session): R600
              </span>
            </div>
            <div className={styles.package}>
              <span className={styles.proPackage}>
                Pro (3 sessions): R1,500
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Training Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          📦 GitHub Training Modules
        </h2>
        
        <div className={styles.grid}>
          {trainingModules.map((module, idx) => (
            <div key={idx} className={styles.card}>
              {/* Module Header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardHeaderContent}>
                  <span className={styles.cardIcon}>{module.icon}</span>
                  <div>
                    <h3 className={styles.cardTitle}>
                      {module.title}
                    </h3>
                    <span className={`${styles.levelBadge} ${getLevelClass(module.level)}`}>
                      {module.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={styles.cardDescription}>
                {module.description}
              </p>

              {/* Topics */}
              <div>
                <h4 className={styles.listTitle}>
                  What You'll Learn:
                </h4>
                <ul className={styles.list}>
                  {module.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className={styles.listItem}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Duration */}
              <div className={styles.cardFooter}>
                <div>
                  <div className={styles.price}>
                    {module.price}
                  </div>
                  <div className={styles.duration}>
                    {module.duration}
                  </div>
                </div>
                <button
                  onClick={() => {
                    window.location.href = "mailto:Admin@Prisma.Ops.com?subject=GitHub Training Booking Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI'd like to book a GitHub training session.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!";
                  }}
                  className={styles.actionButton}
                >
                  Book Training
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Support Section */}
      <div className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.studentSupportTitle}`}>
          🎓 Student Tech Project Support
        </h2>
        
        <div className={styles.grid}>
          {studentServices.map((service, idx) => (
            <div key={idx} className={`${styles.card} ${styles.studentCard}`}>
              {/* Service Header */}
              <div className={styles.cardHeaderContent}>
                <span className={styles.cardIcon}>{service.icon}</span>
                <h3 className={`${styles.cardTitle} ${styles.studentCardTitle}`}>
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className={styles.cardDescription}>
                {service.description}
              </p>

              {/* Services */}
              <div>
                <h4 className={styles.listTitle}>
                  Services Included:
                </h4>
                <ul className={styles.list}>
                  {service.services.map((item, itemIdx) => (
                    <li key={itemIdx} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className={styles.cardFooter}>
                <div className={`${styles.price} ${styles.studentPrice}`}>
                  {service.price}
                </div>
                <button
                  onClick={() => {
                    window.location.href = "mailto:Admin@Prisma.Ops.com?subject=GitHub Training Support Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI need support for the GitHub training session.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!";
                  }}
                  className={styles.actionButton}
                >
                  Get Support
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className={styles.benefitsSection}>
        <h2 className={styles.benefitsTitle}>
          Why Choose PrismaOps for GitHub Training?
        </h2>
        
        <div className={styles.benefitsGrid}>
          {[
            { icon: "🎯", title: "Hands-On Learning", desc: "Learn by doing with real projects and practical exercises" },
            { icon: "👨‍💻", title: "Expert Instructors", desc: "Learn from experienced developers with industry knowledge" },
            { icon: "📚", title: "Comprehensive Materials", desc: "Access to guides, cheat sheets, and ongoing resources" },
            { icon: "🚀", title: "Career Ready", desc: "Build skills that employers actually look for" },
            { icon: "🤝", title: "Ongoing Support", desc: "Get help even after your training is complete" },
            { icon: "💰", title: "Affordable Pricing", desc: "Student-friendly rates with flexible payment options" }
          ].map((benefit, idx) => (
            <div key={idx} className={styles.benefit}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA Section */}
      <div className={styles.whatsappCta}>
        <h3 className={styles.whatsappTitle}>
          💬 Ready to Start Learning?
        </h3>
        <p className={styles.whatsappText}>
          Have questions about our training programs or need help with your project? 
          Let's chat on WhatsApp! We're here to help you succeed.
        </p>
        
        <div className={styles.whatsappButtons}>
          <a
            href="https://wa.me/27787983991?text=Hi%20PrismaOps!%20I'm%20interested%20in%20GitHub%20training%20and%20would%20like%20to%20know%20more%20about%20your%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <span>📱</span>
            Chat on WhatsApp
          </a>
          
          <a
            href="https://wa.me/27787983991?text=Hi%20PrismaOps!%20I'm%20a%20student%20and%20need%20help%20with%20my%20tech%20project.%20Can%20we%20discuss%20how%20you%20can%20assist%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.whatsappButton} ${styles.whatsappSecondaryButton}`}
          >
            <span>🎓</span>
            Student Support Chat
          </a>
        </div>

        <div className={styles.contactInfo}>
          <p>
            📞 <strong>Primary:</strong> 0787983991
          </p>
        </div>
      </div>
  </section>
  );
};
