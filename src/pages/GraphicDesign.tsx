// src/pages/GraphicDesign.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';

export const GraphicDesign: React.FC = () => {
  const [showContact, setShowContact] = React.useState(false);
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const designServices = [
    {
      title: 'Logo & Branding',
      desc: 'Custom logo design, brand color palette, and typography for a unique identity.',
      price: 'R800 - R2,000',
      icon: '🎨',
    },
    {
      title: 'Social Media Content',
      desc: 'Eye-catching posts, banners, and stories for Instagram, Facebook, LinkedIn, and more.',
      price: 'R150 per post / R1,000 for 10-pack',
      icon: '📱',
    },
    {
      title: 'Business Cards & Stationery',
      desc: 'Professional business cards, letterheads, and email signatures.',
      price: 'R500 - R1,200',
      icon: '💼',
    },
    {
      title: 'Presentation & Pitch Decks',
      desc: 'Custom PowerPoint/Google Slides design for business, academic, or investor presentations.',
      price: 'R800 - R2,500',
      icon: '📊',
    },
    {
      title: 'Flyers & Posters',
      desc: 'Promotional flyers, event posters, and print-ready designs.',
      price: 'R400 - R1,000',
      icon: '📰',
    },
    {
      title: 'Custom Requests',
      desc: 'Any other graphic design needs? Get a custom quote for your project.',
      price: 'Contact for quote',
      icon: '✨',
    },
  ];
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#111',
        color: '#fff',
        fontFamily: 'Segoe UI, sans-serif',
        padding: isSidebarCollapsed ? '2rem 10vw' : '2rem 5vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 900 }}>
        <h1 style={{ fontSize: '3rem', color: '#2764b4ff', marginBottom: '1rem' }}>
          Graphic Design
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.5 }}>
          Creative branding, social media content, and visual assets to elevate your presence.
        </p>
      </div>
      {/* Contact Us for a Quote Section */}
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '2rem',
        borderRadius: 16,
        maxWidth: 600,
        width: '100%',
        textAlign: 'center',
        marginTop: '2rem',
        boxShadow: '0 4px 15px #2764b4aa',
      }}>
        <h3 style={{ color: '#59c2ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Need a custom design or want to discuss your project?
        </h3>
        <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Contact us for a free quote and consultation!
        </p>
        <button
          style={{
            backgroundColor: '#2764b4ff',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background-color 0.2s ease',
            marginBottom: '1.2rem',
          }}
          onClick={() => setShowContact(!showContact)}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e4d87';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2764b4ff';
          }}
        >
          {showContact ? 'Hide Contact Details' : 'Contact Us for a Quote'}
        </button>
        {showContact && (
          <div style={{
            marginTop: '1.2rem',
            backgroundColor: '#222',
            borderRadius: 12,
            padding: '1.2rem',
            color: '#fff',
            boxShadow: '0 2px 8px #2764b440',
            textAlign: 'left',
            fontSize: '1rem',
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>📧</span>
              <strong>Email:</strong> <a href="mailto:Admin@Prisma.Ops.com" style={{ color: '#59c2ffff', textDecoration: 'none' }}>Admin@Prisma.Ops.com</a>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>📱</span>
              <strong>Phone:</strong> <a href="tel:0787983991" style={{ color: '#59c2ffff', textDecoration: 'none' }}>0787983991</a> | <a href="tel:0628576852" style={{ color: '#59c2ffff', textDecoration: 'none' }}>062 857 6852</a>
            </div>
            <div>
              <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>⏰</span>
              <strong>Response Time:</strong> Within 24 hours
            </div>
          </div>
        )}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: 1100,
      }}>
        {designServices.map((service, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#1e1e1e',
              borderRadius: 16,
              boxShadow: '0 4px 15px rgba(39, 100, 180, 0.18), 0 0 12px 2px #2764b420',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.2rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default',
              minHeight: 220,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 25px #2764b4aa, 0 0 24px 8px #2764b4aa';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 15px rgba(39, 100, 180, 0.18), 0 0 12px 2px #2764b420';
            }}
          >
            <span style={{ fontSize: '2.2rem' }}>{service.icon}</span>
            <h2 style={{ color: '#59c2ffff', fontSize: '1.25rem', margin: 0 }}>{service.title}</h2>
            <p style={{ color: '#ccc', fontSize: '1rem', textAlign: 'center', margin: 0 }}>{service.desc}</p>
            <div style={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem', marginTop: '0.5rem' }}>
              {service.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
};
