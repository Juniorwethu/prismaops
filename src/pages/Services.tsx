// src/pages/Services.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';

const servicesData = [
  {
    title: '🌐 Web Designing & Development',
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
    title: '📂 Portfolio Management & GitHub Training',
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
    title: '🎓 Student Tech Project Assistance',
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
    title: '📄 Proposal Writing & Document Automation',
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
    title: '🎤 Presentation Design & Pitch Decks',
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
    title: '🖥️ Landing Page Creation',
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
    title: '🎨 Branding Kits',
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
    title: '🛠️ Maintenance & Tech Support',
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
    title: '📄 CV & LinkedIn Optimization',
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
    title: '💻 C# Programming Classes',
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
    title: '📟 JavaScript Classes',
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
    title: '🗄️ SQL & Database Classes',
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
    title: '📂 Google Drive / Notion Setup',
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
    <section
      style={{
        padding: isSidebarCollapsed ? '4rem 12vw' : '4rem 6vw',
        backgroundColor: '#111',
        color: '#fff',
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <h1
        style={{
          color: '#000000ff',
          fontSize: isSidebarCollapsed ? '4rem' : '3rem',
          marginBottom: '2.5rem',
          textAlign: 'center',
          fontWeight: '700',
          transition: 'font-size 0.3s ease',
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#1e1e1e',
              borderRadius: 16,
              padding: '2rem',
              maxWidth: 'calc(50% - 1rem)',
              flex: '1 1 calc(50% - 1rem)',
              boxShadow: '0 4px 15px rgba(218, 17, 17, 0.18), 0 0 12px 2px #da111120',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 25px #da1111aa, 0 0 24px 8px #da1111aa';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 15px rgba(218, 17, 17, 0.18), 0 0 12px 2px #da111120';
            }}
          >
            <h2
              style={{
                color: '#25a1e9ff',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: '600',
              }}
            >
              {service.title}
            </h2>

            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '1.25rem',
                marginBottom: '1.5rem',
                color: '#aaa',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                flexGrow: 1,
              }}
            >
              {service.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  {feature}
                </li>
              ))}
            </ul>

            <div
              style={{
                borderTop: '1px solid #444',
                paddingTop: '1rem',
                fontSize: '0.95rem',
                color: '#ddd',
              }}
            >
              {service.pricing.map((priceItem, i) => (
                <p key={i} style={{ margin: '0.2rem 0' }}>
                  <strong>{priceItem.label}:</strong> {priceItem.price}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
