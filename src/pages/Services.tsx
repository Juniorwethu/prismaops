// src/pages/Services.tsx
import React, { useContext } from 'react';
import {
  LuGlobe, LuFolderGit2, LuGraduationCap, LuFileText, LuPresentation,
  LuLayoutTemplate, LuPalette, LuWrench, LuLinkedin, LuCode, LuDatabase, LuFolderKanban
} from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './Services.module.css';

const servicesData: {
  icon: React.ElementType;
  title: string;
  features: string[];
  pricing: { label: string; price: string }[];
}[] = [
  {
    icon: LuGlobe,
    title: 'Web Designing & Development',
    features: [
      'Responsive, modern websites tailored for startups and freelancers.',
      'Portfolio websites with blogs or project showcases.',
      'Landing pages for campaigns and product launches.',
    ],
    pricing: [
      { label: 'Starter (up to 5 pages)', price: 'R2,500' },
      { label: 'Pro (6-15 pages)', price: 'R4,500' },
      { label: 'Custom (15+ pages)', price: 'Contact us' },
    ],
  },
  {
    icon: LuFolderGit2,
    title: 'Portfolio Management & GitHub Training',
    features: [
      'Organize GitHub repos and projects effectively.',
      'One-on-one training sessions to master version control.',
      'Improve visibility with README styling and project deployment.',
    ],
    pricing: [
      { label: 'Starter (1 session)', price: 'R600' },
      { label: 'Pro (3 sessions)', price: 'R1,500' },
    ],
  },
  {
    icon: LuGraduationCap,
    title: 'Student Tech Project Assistance',
    features: [
      'Guidance on final year and capstone projects.',
      'Report and documentation writing support.',
      'Help with presentations and proposal preparation.',
    ],
    pricing: [
      { label: 'Basic Support (up to 3 sessions)', price: 'R800' },
      { label: 'Extended Support (5+ sessions)', price: 'R2,000' },
    ],
  },
  {
    icon: LuFileText,
    title: 'Proposal Writing & Document Automation',
    features: [
      'Professional proposals for freelancers and businesses.',
      'Custom templates for client onboarding and reporting.',
    ],
    pricing: [
      { label: 'Basic Proposal (1-2 pages)', price: 'R800' },
      { label: 'Advanced Proposal (with visuals)', price: 'R1,500' },
    ],
  },
  {
    icon: LuPresentation,
    title: 'Presentation Design & Pitch Decks',
    features: [
      'Custom Google Slides or PowerPoint design.',
      'Storytelling for investors, classrooms, and events.',
    ],
    pricing: [
      { label: 'Starter (5-10 slides)', price: 'R800' },
      { label: 'Pro (10-20 slides)', price: 'R2,500' },
    ],
  },
  {
    icon: LuLayoutTemplate,
    title: 'Landing Page Creation',
    features: [
      'Conversion-ready, simple landing pages.',
      'Lead capture and thank-you flows included.',
    ],
    pricing: [
      { label: 'Basic (1 page)', price: 'R1,200' },
      { label: 'Pro (up to 3 pages)', price: 'R2,500' },
    ],
  },
  {
    icon: LuPalette,
    title: 'Branding Kits',
    features: [
      'Logos, color schemes, and typography.',
      'Includes social media banners, icons, and templates.',
    ],
    pricing: [
      { label: 'Basic Kit', price: 'R1,000' },
      { label: 'Full Kit', price: 'R3,000' },
    ],
  },
  {
    icon: LuWrench,
    title: 'Maintenance & Tech Support',
    features: [
      'One-time fixes or monthly support plans.',
      'Website updates and portfolio refreshes.',
    ],
    pricing: [
      { label: 'Single Fix', price: 'R400' },
      { label: 'Monthly Support', price: 'R1,200' },
    ],
  },
  {
    icon: LuLinkedin,
    title: 'CV & LinkedIn Optimization',
    features: [
      'Tech-focused resume upgrades.',
      'LinkedIn profile writing and optimization.',
    ],
    pricing: [
      { label: 'Basic CV', price: 'R250' },
      { label: 'CV + LinkedIn Profile', price: 'R500' },
    ],
  },
  {
    icon: LuCode,
    title: 'C# Programming Classes',
    features: [
      'Learn fundamentals and advanced C# programming.',
      'Hands-on exercises and project work.',
      'Preparation for .NET development.',
    ],
    pricing: [
      { label: 'Starter (4 sessions)', price: 'R1,200' },
      { label: 'Pro (8 sessions)', price: 'R2,500' },
    ],
  },
  {
    icon: LuCode,
    title: 'JavaScript Classes',
    features: [
      'Basics to advanced JavaScript concepts.',
      'DOM manipulation, async programming, and ES6+ features.',
      'Project-based learning.',
    ],
    pricing: [
      { label: 'Starter (4 sessions)', price: 'R1,000' },
      { label: 'Pro (8 sessions)', price: 'R2,200' },
    ],
  },
  {
    icon: LuDatabase,
    title: 'SQL & Database Classes',
    features: [
      'Learn SQL queries, database design, and optimization.',
      'Work with MySQL, Firebases, and SQL Server.',
      'Real-world database projects.',
    ],
    pricing: [
      { label: 'Starter (4 sessions)', price: 'R1,200' },
      { label: 'Pro (8 sessions)', price: 'R2,400' },
    ],
  },
  {
    icon: LuFolderKanban,
    title: 'Google Drive / Notion Setup',
    features: [
      'Organize files and workflows for teams or individuals.',
      'Dashboard creation, templates, and folder structuring.',
    ],
    pricing: [
      { label: 'Basic Setup', price: 'R500' },
      { label: 'Full System Setup', price: 'R1,200' },
    ],
  },
];

export const Services: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  return (
    <section className={`${styles.servicesSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <h1 className={`${styles.title} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        Our Services
      </h1>

      <div className={styles.servicesGrid}>
        {servicesData.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className={styles.serviceCard}>
              <h2 className={styles.serviceTitle}>
                <Icon className={styles.serviceIcon} />
                {service.title}
              </h2>

              <ul className={styles.featuresList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={styles.pricing}>
                {service.pricing.map((priceItem, i) => (
                  <p key={i} className={styles.priceItem}>
                    <strong>{priceItem.label}:</strong> {priceItem.price}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
