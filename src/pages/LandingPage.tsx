// src/pages/LandingPage.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';

export const LandingPage: React.FC = () => {
  const colors = { background: '#111', text: '#fff', textSecondary: '#ccc', primary: '#2764b4ff', accent: '#2764b4ff', cardBackground: '#1e1e1e', shadow: 'rgba(0,0,0,0.5)', blueGlow: '0 0 24px 8px #2764b4aa' };

  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          backgroundColor: colors.background,
          color: colors.text,
          fontFamily: 'Segoe UI, sans-serif',
          padding: '0 5vw',
          boxSizing: 'border-box',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
      {/* Logo and Intro */}
      <div
        style={{
          flex: isSidebarCollapsed ? '2 1 600px' : '1 1 300px',
          maxWidth: isSidebarCollapsed ? 700 : 450,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isSidebarCollapsed ? 'center' : 'flex-start',
          gap: '1rem',
          minWidth: 280,
          transition: 'all 0.3s ease',
        }}
      >

        <img
        src="/logo.jpg"
        alt="PrismaOps Logo"
        style={{ 
          width: isSidebarCollapsed ? 400 : 260, 
          height: 'auto', 
          objectFit: 'contain', 
          marginBottom: '1rem',
          filter: 'none',
          transform: 'rotate(-0.5deg)',

          transition: 'width 0.3s ease',
        }}
        />
  <h1 style={{ fontSize: isSidebarCollapsed ? '3.5rem' : '2.8rem', color: colors.primary, lineHeight: 1.1, margin: 0, transition: 'font-size 0.3s ease' }}>
          Welcome to PrismaOps
        </h1>
  <p style={{ fontSize: '1.1rem', lineHeight: 1.5, color: colors.textSecondary, marginBottom: '2rem' }}>
          Empowering <strong>creators, students, and freelancers</strong> with exceptional tech
          services.
        </p>
      </div>

      {/* Feature Cards */}
      <div
        style={{
          flex: '2 1 600px',
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          minWidth: 320,
          maxWidth: 900,
        }}
      >
        {[
          {
            title: '🌐 Web & UI Design',
            desc: 'Modern, responsive websites and stunning interfaces.',
          },
          {
            title: '🎓 Student Projects',
            desc: 'Guidance and tools for your tech assignments and portfolios.',
          },
          {
            title: '📦 GitHub Training',
            desc: 'Master version control and code collaboration.',
          },
          {
            title: '🎨 Graphic Design',
            desc: 'Creative branding and social media content design.',
          },
          {
            title: '📄 Proposal Writing',
            desc: 'Professional proposals and documentation tailored to your needs.',
          },
        ].map((card, idx) => (
          <div
            key={idx}
              style={{
                backgroundColor: colors.cardBackground,
                boxShadow: `0 4px 15px ${colors.shadow}, 0 0 12px 2px #2764b420`,
                padding: '1.5rem 2rem',
                borderRadius: 16,
                flex: '1 1 280px',
                boxSizing: 'border-box',
                color: colors.textSecondary,
                minWidth: 280,
                maxWidth: 320,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default',
              }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 25px ${colors.shadow}, ${colors.blueGlow}`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 15px ${colors.shadow}, 0 0 12px 2px #2764b420`;
            }}
          >
            <h3 style={{ marginBottom: '0.7rem', fontSize: '1.25rem', color: colors.accent }}>
              {card.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: colors.textSecondary, margin: 0 }}>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA at bottom center if needed */}
        <div
        style={{
          position: 'fixed',
          bottom: 30,
          left: 0,
          width: '100%',
          textAlign: 'center',
          color: '#bbb',
          fontWeight: '600',
          fontSize: '1.1rem',
          userSelect: 'none',
        }}
      >
        🚀 Let’s build your digital future today.
      </div>
    </section>
  );
};
