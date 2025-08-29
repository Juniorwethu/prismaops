// src/pages/WebUIDesign.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';

export const WebUIDesign: React.FC = () => {
  const webUiServices = [
    {
      title: 'Per Page Pricing',
      desc: 'Transparent pricing for each additional page. Perfect for growing sites and custom needs.',
      price: 'R400 per page (after first 3 pages)',
      icon: '📄',
    },
    {
      title: 'Landing Page Design',
      desc: 'High-converting, visually stunning landing pages for campaigns, products, and events.',
      price: 'R1,200 - R2,500',
      icon: '🚀',
    },
    {
      title: 'Full Website Design',
      desc: 'Modern, responsive websites tailored for businesses, creators, and freelancers.',
      price: 'R2,500 - R6,000',
      icon: '🌐',
    },
    {
      title: 'UI/UX Audit & Redesign',
      desc: 'Professional review and redesign of your existing site for better usability and aesthetics.',
      price: 'R1,000 - R2,500',
      icon: '🧐',
    },
    {
      title: 'E-commerce UI',
      desc: 'Custom online store interfaces with seamless shopping experiences.',
      price: 'R3,000 - R7,000',
      icon: '🛒',
    },
    {
      title: 'Portfolio & Blog UI',
      desc: 'Personal portfolios and blog layouts with interactive features and animations.',
      price: 'R1,500 - R3,500',
      icon: '📁',
    },
    {
      title: 'Custom Web App UI',
      desc: 'Unique interfaces for dashboards, SaaS, and custom web applications.',
      price: 'Contact for quote',
      icon: '🖥️',
    },
  ];
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #232526 0%, #111 100%)',
        color: '#fff',
        fontFamily: 'Segoe UI, Inter, sans-serif',
        padding: isSidebarCollapsed ? '2rem 10vw' : '2rem 5vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3.5rem',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <div style={{
        textAlign: 'center',
        maxWidth: 900,
        marginBottom: '1.5rem',
        padding: '2.5rem 0 1.5rem 0',
        borderRadius: 24,
        background: 'linear-gradient(90deg, #89CFF022 0%, #89CFF011 100%)',
        boxShadow: '0 2px 24px #89CFF022',
      }}>
        <h1 style={{ fontSize: '3.2rem', color: '#3af0f3ff', marginBottom: '0.7rem', letterSpacing: '0.03em', fontWeight: 800, textShadow: '0 2px 24px #89CFF044' }}>
          Web & UI Design
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#eee', lineHeight: 1.6, marginBottom: '1.2rem', fontWeight: 500 }}>
          Modern, responsive websites and stunning interfaces for your brand, business, or portfolio.<br />
          <span style={{ color: '#8cbfd5ff', fontWeight: 600, fontSize: '1.1rem', textShadow: '0 2px 12px #89CFF044' }}>Beautiful. Fast. User-focused.</span>
        </p>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #06a0ffff 0%, #3ec2e3ff 100%)',
          color: '#111',
          fontWeight: 700,
          fontSize: '1.05rem',
          borderRadius: 12,
          padding: '0.5rem 1.5rem',
          boxShadow: '0 2px 12px #89CFF044',
          letterSpacing: '0.02em',
        }}>
          Get a modern site that stands out.
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        maxWidth: 1200,
        marginBottom: '2.5rem',
      }}>
        {webUiServices.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: 'linear-gradient(135deg, #232526 60%, #333 100%)',
              borderRadius: 22,
              boxShadow: '0 4px 24px rgba(137, 207, 240, 0.18), 0 0 16px 2px #89CFF040',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.3rem',
              transition: 'transform 0.22s cubic-bezier(.4,2,.3,1), box-shadow 0.22s cubic-bezier(.4,2,.3,1)',
              cursor: 'pointer',
              minHeight: 260,
              border: '1.5px solid #89CFF060',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.045)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px #585029cc, 0 0 40px 8px #89CFF0cc';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(255, 255, 255, 0.18), 0 0 16px 2px #89CFF040';
            }}
          >
            <span style={{ fontSize: '2.5rem', color: '#4a9ecbff', filter: 'drop-shadow(0 0 12px #00a6ff88)' }}>{service.icon}</span>
            <h2 style={{ color: '#89CFF0', fontSize: '1.35rem', margin: 0, fontWeight: 700, letterSpacing: '0.01em', textShadow: '0 2px 12px #89CFF044' }}>{service.title}</h2>
            <p style={{ color: '#eee', fontSize: '1.08rem', textAlign: 'center', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{service.desc}</p>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '1.18rem', marginTop: '0.5rem', background: '#89CFF022', borderRadius: 10, padding: '0.5rem 1.5rem', boxShadow: '0 2px 12px #89CFF044', letterSpacing: '0.01em' }}>
              {service.price}
            </div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '7px', background: 'linear-gradient(90deg, #89CFF0 0%, #fff700 100%)', opacity: 0.18 }} />
          </div>
        ))}
      </div>

      <div style={{
        background: 'linear-gradient(90deg, #89CFF022 0%, #89CFF011 100%)',
        padding: '2.5rem',
        borderRadius: 24,
        maxWidth: 700,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 2px 24px #89CFF022',
        margin: '0 auto',
      }}>
        <h3 style={{ color: '#00e5ffff', fontSize: '1.7rem', marginBottom: '1rem', fontWeight: 700, textShadow: '0 2px 12px #89CFF044' }}>
          Ready to build your dream website?
        </h3>
        <p style={{ color: '#eee', fontSize: '1.15rem', marginBottom: '1.5rem', fontWeight: 500 }}>
          Get a free quote or consultation. We’ll help you create a site that’s beautiful, fast, and user-focused.
        </p>
        <a
          href="mailto:Admin@Prisma.Ops.com?subject=Web & UI Design Quote Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI'd like a quote for web & UI design services.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!"
          style={{
            background: 'linear-gradient(90deg, #034881ff 0%, #0099ffff 100%)',
            color: '#111',
            border: 'none',
            padding: '1rem 2.2rem',
            fontSize: '1.13rem',
            borderRadius: 12,
            cursor: 'pointer',
            fontWeight: '700',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 2px 12px #89CFF044',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(90deg, #0051ffff 0%, #89CFF0 100%)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(90deg, #00aaffff 0%, #89CFF0 100%)';
          }}
        >
          Contact Us for a Quote
        </a>
      </div>
    </section>
  );
};
