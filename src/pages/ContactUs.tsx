// src/pages/ContactUs.tsx
import React, { useState, useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';


const ContactUs: React.FC = () => {
  const colors = { background: '#111', text: '#fff', textSecondary: '#ccc', accent: '#2764b4ff', cardBackground: '#1e1e1e', border: '#444', shadow: 'rgba(0,0,0,0.5)' };
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you for contacting PrismaOps, ${form.name}! We'll get back to you soon.`);
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: colors.background,
        color: colors.text,
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
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: isSidebarCollapsed ? 1200 : 800, transition: 'max-width 0.3s ease' }}>
        <h1 style={{ 
          fontSize: isSidebarCollapsed ? '4rem' : '3rem', 
          color: colors.accent, 
          marginBottom: '1rem',
          lineHeight: 1.2,
          transition: 'font-size 0.3s ease',
        }}>
          Get In Touch
        </h1>
        <p style={{ 
          fontSize: isSidebarCollapsed ? '1.5rem' : '1.2rem', 
          color: colors.textSecondary, 
          lineHeight: 1.5,
          marginBottom: 0,
          transition: 'font-size 0.3s ease',
        }}>
          Ready to start your next project? Let's discuss how PrismaOps can help bring your ideas to life.
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '3rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: 1200,
      }}>
        {/* Contact Information */}
        <div style={{
          flex: '1 1 300px',
          minWidth: 300,
          maxWidth: 400,
          backgroundColor: colors.cardBackground,
          padding: '2rem',
          borderRadius: 16,
          boxShadow: `0 4px 15px ${colors.shadow}`,
        }}>
          <h2 style={{ 
            color: colors.accent, 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem' 
          }}>
            Contact Information
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📧</span>
              <div>
                <h3 style={{ color: colors.text, fontSize: '1rem', margin: 0 }}>Email</h3>
                <a 
                  href="mailto:Admin@Prisma.Ops.com"
                  style={{ 
                    color: colors.accent, 
                    textDecoration: 'none',
                    fontSize: '0.95rem' 
                  }}
                >
                  Admin@Prisma.Ops.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📱</span>
              <div>
                <h3 style={{ color: colors.text, fontSize: '1rem', margin: 0 }}>Phone</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <a 
                    href="tel:0877983991"
                    style={{ 
                      color: colors.accent, 
                      textDecoration: 'none',
                      fontSize: '0.95rem' 
                    }}
                  >
                    0787983991
                  </a>
                  <a 
                    href="tel:0628576852"
                    style={{ 
                      color: colors.accent, 
                      textDecoration: 'none',
                      fontSize: '0.95rem' 
                    }}
                  >
                    062 857 6852
                  </a>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>⏰</span>
              <div>
                <h3 style={{ color: colors.text, fontSize: '1rem', margin: 0 }}>Response Time</h3>
                <p style={{ color: colors.textSecondary, fontSize: '0.95rem', margin: 0 }}>
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          flex: '1 1 400px',
          minWidth: 400,
          maxWidth: 600,
          backgroundColor: colors.cardBackground,
          padding: '2rem',
          borderRadius: 16,
          boxShadow: `0 4px 15px ${colors.shadow}`,
        }}>
          <h2 style={{ 
            color: colors.accent, 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem' 
          }}>
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ 
                display: 'block', 
                color: colors.textSecondary, 
                fontSize: '0.95rem', 
                marginBottom: '0.5rem',
                fontWeight: '500' 
              }}>
                Name *
              </label>
              <input
                required
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                style={{ 
                  padding: '0.75rem', 
                  fontSize: '1rem', 
                  width: '100%',
                  border: `2px solid ${colors.border}`,
                  borderRadius: 8,
                  backgroundColor: '#f8f9fa',
                  color: colors.text,
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.accent}
                onBlur={(e) => e.target.style.borderColor = colors.border}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                color: colors.textSecondary, 
                fontSize: '0.95rem', 
                marginBottom: '0.5rem',
                fontWeight: '500' 
              }}>
                Email *
              </label>
              <input
                required
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                style={{ 
                  padding: '0.75rem', 
                  fontSize: '1rem', 
                  width: '100%',
                  border: `2px solid ${colors.border}`,
                  borderRadius: 8,
                  backgroundColor: '#f8f9fa',
                  color: colors.text,
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.accent}
                onBlur={(e) => e.target.style.borderColor = colors.border}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                color: colors.textSecondary, 
                fontSize: '0.95rem', 
                marginBottom: '0.5rem',
                fontWeight: '500' 
              }}>
                Message *
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                style={{ 
                  padding: '0.75rem', 
                  fontSize: '1rem', 
                  width: '100%',
                  border: `2px solid ${colors.border}`,
                  borderRadius: 8,
                  backgroundColor: '#f8f9fa',
                  color: colors.text,
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  resize: 'vertical',
                  minHeight: 120,
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.accent}
                onBlur={(e) => e.target.style.borderColor = colors.border}
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: isSubmitting ? colors.border : colors.accent,
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                borderRadius: 8,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                transform: isSubmitting ? 'none' : 'scale(1)',
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0056d3';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.accent;
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Additional CTA */}
      <div style={{
        textAlign: 'center',
        backgroundColor: colors.cardBackground,
        padding: '2rem',
        borderRadius: 16,
        maxWidth: 800,
        boxShadow: `0 4px 15px ${colors.shadow}`,
      }}>
        <h3 style={{ color: colors.accent, fontSize: '1.3rem', marginBottom: '1rem' }}>
          🚀 Ready to Get Started?
        </h3>
        <p style={{ color: colors.textSecondary, fontSize: '1rem', lineHeight: 1.5, margin: 0 }}>
          Whether you need web development, UI design, GitHub training, or any other tech service, 
          we're here to help you succeed. Let's turn your ideas into reality!
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
