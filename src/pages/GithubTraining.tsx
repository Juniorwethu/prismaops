// src/pages/GithubTraining.tsx
import React, { useContext } from 'react';
import { LuLeaf, LuUsers, LuRocket, LuClipboard, LuUser, LuTarget, LuCode, LuBookOpen, LuCreditCard } from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './GithubTraining.module.css';

const trainingModules = [
  {
    icon: LuLeaf,
    title: 'GitHub Fundamentals',
    level: 'Beginner',
    levelClass: 'levelBeginner',
    desc: 'Perfect introduction to version control and GitHub basics for complete beginners.',
    learn: [
      'What is Git and GitHub?',
      'Setting up your GitHub account',
      'Creating repositories',
      'Basic Git commands (add, commit, push)',
      'Understanding branches',
      'GitHub Desktop vs Command Line',
    ],
    price: 'R600',
    duration: '2-3 hours',
  },
  {
    icon: LuUsers,
    title: 'Collaboration & Team Workflows',
    level: 'Intermediate',
    levelClass: 'levelIntermediate',
    desc: 'Learn professional collaboration techniques and team-based development workflows.',
    learn: [
      'Pull requests and code reviews',
      'Branching strategies (Git Flow)',
      'Resolving merge conflicts',
      'Issue tracking and project boards',
      'Team collaboration best practices',
      'GitHub Actions basics',
    ],
    price: 'R1,500',
    duration: '3-4 hours',
  },
  {
    icon: LuRocket,
    title: 'Advanced GitHub & DevOps',
    level: 'Advanced',
    levelClass: 'levelAdvanced',
    desc: 'Master advanced features, automation, and professional development practices.',
    learn: [
      'GitHub Actions CI/CD pipelines',
      'Automated testing and deployment',
      'Advanced branching strategies',
      'GitHub Pages deployment',
      'API integration and webhooks',
      'Security and access management',
    ],
    price: 'R1,500',
    duration: '4-5 hours',
  },
];

const studentSupport = [
  {
    icon: LuClipboard,
    title: 'Project Planning & Architecture',
    desc: 'Help students design and plan their tech projects from concept to implementation.',
    price: 'R300/hour',
  },
  {
    icon: LuUser,
    title: 'Code Review & Mentorship',
    desc: 'One-on-one mentorship sessions to review code, debug issues, and improve coding practices.',
    price: 'R400/hour',
  },
  {
    icon: LuTarget,
    title: 'Project Deployment & Presentation',
    desc: 'Guide students through deployment processes and help create impressive project presentations.',
    price: 'R350/hour',
  },
];

const whyChooseUs = [
  { icon: LuTarget, title: 'Hands-On Learning', desc: 'Learn by doing with real projects and practical exercises.' },
  { icon: LuCode, title: 'Expert Instructors', desc: 'Learn from experienced developers with industry knowledge.' },
  { icon: LuBookOpen, title: 'Comprehensive Materials', desc: 'Access to guides, cheat sheets, and ongoing resources.' },
  { icon: LuRocket, title: 'Career Ready', desc: 'Build skills that employers actually look for.' },
  { icon: LuUsers, title: 'Ongoing Support', desc: 'Get help even after your training is complete.' },
  { icon: LuCreditCard, title: 'Affordable Pricing', desc: 'Student-friendly rates with flexible payment options.' },
];

export const GithubTraining: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section className={`${styles.pageSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>GitHub Training Modules</h1>
        <p className={styles.subtitle}>Expert-led training to master Git and GitHub for seamless team collaboration.</p>
      </div>

      <div className={styles.packagesCard}>
        <h3 className={styles.packagesTitle}>
          <LuClipboard /> Training Packages
        </h3>
        <ul className={styles.packagesList}>
          <li className={styles.packageItem}>
            <span className={styles.packageName}>Starter (1 session)</span>
            <span className={styles.packagePrice}>R600</span>
          </li>
          <li className={styles.packageItem}>
            <span className={styles.packageName}>Pro (3 sessions)</span>
            <span className={styles.packagePrice}>R1,500</span>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.moduleGrid}>
          {trainingModules.map((mod, idx) => (
            <div key={idx} className={styles.moduleCard}>
              <div className={styles.moduleHeader}>
                <mod.icon className={styles.moduleIcon} />
                <div>
                  <h3 className={styles.moduleTitle}>{mod.title}</h3>
                  <span className={`${styles.moduleLevel} ${styles[mod.levelClass]}`}>{mod.level}</span>
                </div>
              </div>
              <p className={styles.moduleDesc}>{mod.desc}</p>
              <h4 className={styles.learnTitle}>What You'll Learn:</h4>
              <ul className={styles.learnList}>
                {mod.learn.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className={styles.moduleFooter}>
                <span className={styles.modulePrice}>{mod.price}</span>
                <span className={styles.moduleDuration}>{mod.duration}</span>
              </div>
              <a href="mailto:PrismaOps@outlook.com?subject=Booking GitHub Training" className={styles.bookButton} style={{marginTop: '1rem'}}>Book Training</a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>🎓 Student Tech Project Support</h2>
        <div className={styles.supportGrid}>
          {studentSupport.map((item, idx) => (
            <div key={idx} className={styles.supportCard}>
              <item.icon className={styles.supportIcon} />
              <h3 className={styles.supportTitle}>{item.title}</h3>
              <p className={styles.supportDesc}>{item.desc}</p>
              <div className={styles.supportPrice}>{item.price}</div>
               <a href="mailto:PrismaOps@outlook.com?subject=Student Project Support" className={styles.bookButton} style={{marginTop: '1rem'}}>Get Support</a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Choose PrismaOps for GitHub Training?</h2>
        <div className={styles.whyGrid}>
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className={styles.whyItem}>
              <item.icon className={styles.whyIcon} />
              <h3 className={styles.whyTitle}>{item.title}</h3>
              <p className={styles.whyDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
