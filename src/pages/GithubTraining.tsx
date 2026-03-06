// src/pages/GithubTraining.tsx
import React, { useState, useEffect } from 'react';
import { 
  LuLeaf, 
  LuUsers, 
  LuRocket,
  LuClipboard,
  LuUser,
  LuTarget,
  LuCheck,
  LuArrowRight,
  LuSparkles,
  LuCode,
  LuBookOpen,
  LuGraduationCap
} from 'react-icons/lu';
import styles from './GithubTraining.module.css';

const GithubTraining: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trainingModules = [
    {
      icon: LuLeaf,
      title: 'GitHub Fundamentals',
      level: 'Beginner',
      description: 'Perfect introduction to version control and GitHub basics for complete beginners.',
      features: [
        'What is Git and GitHub?',
        'Setting up your GitHub account',
        'Creating repositories',
        'Basic Git commands',
        'Understanding branches',
        'GitHub Desktop vs Command Line'
      ],
      price: 'R600',
      duration: '2-3 hours'
    },
    {
      icon: LuUsers,
      title: 'Collaboration & Team Workflows',
      level: 'Intermediate',
      description: 'Learn professional collaboration techniques and team-based development workflows.',
      features: [
        'Pull requests and code reviews',
        'Branching strategies (Git Flow)',
        'Resolving merge conflicts',
        'Issue tracking and project boards',
        'Team collaboration best practices',
        'GitHub Actions basics'
      ],
      price: 'R1,500',
      duration: '3-4 hours'
    },
    {
      icon: LuRocket,
      title: 'Advanced GitHub & DevOps',
      level: 'Advanced',
      description: 'Master advanced features, automation, and professional development practices.',
      features: [
        'GitHub Actions CI/CD pipelines',
        'Automated testing and deployment',
        'Advanced branching strategies',
        'GitHub Pages deployment',
        'API integration and webhooks',
        'Security and access management'
      ],
      price: 'R1,500',
      duration: '4-5 hours'
    }
  ];

  const studentSupport = [
    {
      icon: LuClipboard,
      title: 'Project Planning & Architecture',
      description: 'Help students design and plan their tech projects from concept to implementation.',
      features: [
        'Project requirements analysis',
        'System architecture design',
        'Technology stack selection',
        'Timeline and milestone planning'
      ],
      price: 'R300/hour'
    },
    {
      icon: LuUser,
      title: 'Code Review & Mentorship',
      description: 'One-on-one mentorship sessions to review code, debug issues, and improve coding practices.',
      features: [
        'Code quality review',
        'Bug fixing guidance',
        'Best practices coaching',
        'Performance optimization'
      ],
      price: 'R400/hour'
    },
    {
      icon: LuTarget,
      title: 'Project Deployment & Presentation',
      description: 'Guide students through deployment processes and help create impressive project presentations.',
      features: [
        'Deployment setup',
        'Presentation preparation',
        'Documentation assistance',
        'Demo environment setup'
      ],
      price: 'R350/hour'
    }
  ];

  const whyChooseUs = [
    { icon: LuTarget, title: 'Hands-On Learning', desc: 'Learn by doing with real projects and practical exercises.' },
    { icon: LuCode, title: 'Expert Instructors', desc: 'Learn from experienced developers with industry knowledge.' },
    { icon: LuBookOpen, title: 'Comprehensive Materials', desc: 'Access to guides, cheat sheets, and ongoing resources.' },
    { icon: LuGraduationCap, title: 'Career Ready', desc: 'Build skills that employers actually look for.' }
  ];

  return (
    <div className={styles.trainingPage}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuSparkles className={styles.badgeIcon} />
            <span>Master Version Control</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>GitHub Training</span> & Student Support
          </h1>
          
          <p className={styles.heroSubtitle}>
            Expert-led training to master Git and GitHub for seamless team collaboration. 
            Plus comprehensive support for students working on tech projects.
          </p>

          {/* Why Choose Us */}
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className={styles.whyCard}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <item.icon className={styles.whyIcon} />
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className={styles.modulesSection}>
        <h2 className={styles.sectionTitle}>Training Modules</h2>
        <div className={styles.modulesGrid}>
          {trainingModules.map((module, index) => (
            <div
              key={index}
              className={styles.moduleCard}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.moduleHeader}>
                <module.icon className={styles.moduleIcon} />
                <div className={styles.moduleInfo}>
                  <span className={styles.levelBadge}>{module.level}</span>
                  <span className={styles.durationBadge}>{module.duration}</span>
                </div>
              </div>
              
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <p className={styles.moduleDesc}>{module.description}</p>
              
              <h4 className={styles.featuresTitle}>What You'll Learn:</h4>
              <ul className={styles.featuresList}>
                {module.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <LuCheck className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.moduleFooter}>
                <span className={styles.priceBadge}>{module.price}</span>
                <a href="mailto:PrismaOps@outlook.com" className={styles.bookButton}>
                  Book Training
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Support */}
      <section className={styles.supportSection}>
        <h2 className={styles.sectionTitle}>Student Tech Project Support</h2>
        <div className={styles.supportGrid}>
          {studentSupport.map((service, index) => (
            <div
              key={index}
              className={styles.supportCard}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <service.icon className={styles.supportIcon} />
              
              <h3 className={styles.supportTitle}>{service.title}</h3>
              <p className={styles.supportDesc}>{service.description}</p>
              
              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <LuCheck className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.supportFooter}>
                <span className={styles.priceBadge}>{service.price}</span>
                <a href="mailto:PrismaOps@outlook.com" className={styles.bookButton}>
                  Get Support
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Level Up Your GitHub Skills?</h2>
          <p className={styles.ctaText}>
            Whether you're learning Git basics, mastering team workflows, or need help with your student project, 
            we're here to guide you every step of the way. Book your session today!
          </p>
          <a href="mailto:PrismaOps@outlook.com" className={styles.ctaButton}>
            <span>Book Your Training</span>
            <LuArrowRight className={styles.buttonArrow} />
          </a>
        </div>
      </section>
    </div>
  );
};

export { GithubTraining };
