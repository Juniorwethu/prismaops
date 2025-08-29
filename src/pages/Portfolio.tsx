// src/pages/Portfolio.tsx
import React, { useState, useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';

export const Portfolio: React.FC = () => {
  const [showContactOptions, setShowContactOptions] = useState<number | null>(null);
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  const portfolioServices = [
    {
      title: "Portfolio Design & Development",
      description: "Custom-built professional portfolio websites that showcase your work beautifully. Includes responsive design, modern UI/UX, and performance optimization.",
      features: [
        "Responsive web design",
        "Custom domain setup",
        "SEO optimization",
        "Performance optimization",
        "Contact form integration",
        "Social media integration"
      ],
      price: "R2,500 - R5,000",
      duration: "5-10 business days",
      icon: "🎨"
    },
    {
      title: "Portfolio Content Management",
      description: "Professional organization and presentation of your projects. We help structure your work to tell compelling stories that attract clients and employers.",
      features: [
        "Project case study writing",
        "Content organization",
        "Professional copywriting",
        "Image optimization",
        "Skills presentation",
        "Achievement highlighting"
      ],
      price: "R800 - R1,500",
      duration: "3-5 business days",
      icon: "📝"
    },
    {
      title: "Portfolio Hosting & Maintenance",
      description: "Complete hosting solution with ongoing maintenance and updates. Keep your portfolio running smoothly and up-to-date with the latest technologies.",
      features: [
        "Domain registration",
        "Web hosting setup",
        "SSL certificate",
        "Regular backups",
        "Security monitoring",
        "Monthly updates"
      ],
      price: "R300 - R500/month",
      duration: "Ongoing",
      icon: "🚀"
    },
    {
      title: "Portfolio Audit & Optimization",
      description: "Comprehensive review of your existing portfolio with actionable recommendations for improvement. Boost your portfolio's effectiveness and conversion rate.",
      features: [
        "UX/UI audit",
        "Content review",
        "Performance analysis",
        "SEO assessment",
        "Conversion optimization",
        "Detailed report with recommendations"
      ],
      price: "R600 - R1,200",
      duration: "2-3 business days",
      icon: "🔍"
    }
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
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: isSidebarCollapsed ? 1200 : 900, transition: 'max-width 0.3s ease' }}>
        <h1 style={{ 
          fontSize: isSidebarCollapsed ? '4rem' : '3rem', 
          color: '#2764b4ff', 
          marginBottom: '1rem',
          lineHeight: 1.2,
          transition: 'font-size 0.3s ease',
        }}>
          Portfolio Services
        </h1>
        <p style={{ 
          fontSize: isSidebarCollapsed ? '1.5rem' : '1.2rem', 
          color: '#ddd', 
          lineHeight: 1.5,
          marginBottom: 0,
          transition: 'font-size 0.3s ease',
        }}>
          Stand out from the crowd with a <strong>professional portfolio</strong> that showcases your talents and attracts opportunities. 
          From design to deployment, we handle everything so you can focus on what you do best.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: 1200,
      }}>
        {portfolioServices.map((service, idx) => (
          <div
            key={idx}
              style={{
                backgroundColor: '#1e1e1e',
                padding: '2rem',
                borderRadius: 16,
                boxShadow: '0 4px 15px rgba(39, 100, 180, 0.2), 0 0 12px 2px #2764b420',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default',
              }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 25px rgba(39, 100, 180, 0.3), 0 0 24px 8px #2764b4aa';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 15px rgba(39, 100, 180, 0.2), 0 0 12px 2px #2764b420';
            }}
          >
            {/* Service Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>{service.icon}</span>
              <h2 style={{ 
                color: '#59c2ffff', 
                fontSize: '1.4rem', 
                margin: 0,
                lineHeight: 1.3
              }}>
                {service.title}
              </h2>
            </div>

            {/* Description */}
            <p style={{ 
              color: '#ddd', 
              fontSize: '1rem', 
              lineHeight: 1.6,
              margin: 0 
            }}>
              {service.description}
            </p>

            {/* Features */}
            <div>
              <h3 style={{ 
                color: '#fff', 
                fontSize: '1.1rem', 
                marginBottom: '0.8rem',
                margin: 0 
              }}>
                What's Included:
              </h3>
              <ul style={{ 
                color: '#ccc', 
                fontSize: '0.95rem',
                lineHeight: 1.5,
                paddingLeft: '1.2rem',
                margin: 0
              }}>
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} style={{ marginBottom: '0.3rem' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & Duration */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 'auto',
              paddingTop: '1rem',
              borderTop: '1px solid #333'
            }}>
              <div>
                <div style={{ 
                  color: '#59c2ffff', 
                  fontSize: '1.3rem', 
                  fontWeight: '600',
                  marginBottom: '0.2rem'
                }}>
                  {service.price}
                </div>
                <div style={{ 
                  color: '#aaa', 
                  fontSize: '0.9rem' 
                }}>
                  {service.duration}
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => {
                    window.location.href = "mailto:Admin@Prisma.Ops.com?subject=Portfolio Quote Request - " + encodeURIComponent(service.title) + "&body=Hi PrismaOps Team,%0D%0A%0D%0AI'm interested in getting a quote for " + encodeURIComponent(service.title) + ".%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!";
                  }}
                  style={{
                    backgroundColor: '#2764b4ff',
                    color: 'white',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    fontSize: '0.95rem',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e4d87';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2764b4ff';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                  }}
                >
                  Get Quote
                </button>

                {/* Contact Options Dropdown */}
                {showContactOptions === idx && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    backgroundColor: '#2a2a2a',
                    borderRadius: 8,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                    padding: '1rem',
                    minWidth: 200,
                    zIndex: 10,
                    border: '1px solid #444'
                  }}>
                    <h4 style={{ 
                      color: '#59c2ffff', 
                      fontSize: '0.9rem', 
                      margin: 0, 
                      marginBottom: '0.8rem',
                      textAlign: 'center'
                    }}>
                      Contact Us For Quote
                    </h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <a
                        href="mailto:Admin@Prisma.Ops.com?subject=Portfolio Quote Request - {service.title}&body=Hi PrismaOps Team,%0D%0A%0D%0AI'm interested in getting a quote for {service.title}.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.8rem',
                          color: '#ddd',
                          textDecoration: 'none',
                          padding: '0.6rem',
                          borderRadius: 6,
                          backgroundColor: '#333',
                          transition: 'background-color 0.2s ease',
                          fontSize: '0.9rem'
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#59c2ffff';
                          (e.currentTarget as HTMLAnchorElement).style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#333';
                          (e.currentTarget as HTMLAnchorElement).style.color = '#ddd';
                        }}
                      >
                        <span style={{ fontSize: '1.1rem' }}>📧</span>
                        <div>
                          <div style={{ fontWeight: '500' }}>Email</div>
                          <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Admin@Prisma.Ops.com</div>
                        </div>
                      </a>

                      <div style={{ 
                        borderTop: '1px solid #444', 
                        paddingTop: '0.8rem',
                        marginTop: '0.4rem'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.8rem',
                          color: '#ddd',
                          fontSize: '0.9rem',
                          marginBottom: '0.5rem'
                        }}>
                          <span style={{ fontSize: '1.1rem' }}>📱</span>
                          <div>
                            <div style={{ fontWeight: '500' }}>Call/WhatsApp</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Choose your preferred number</div>
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          <a
                            href="tel:0877983991"
                            style={{
                              color: '#59c2ffff',
                              textDecoration: 'none',
                              fontSize: '0.85rem',
                              padding: '0.3rem 0.5rem',
                              backgroundColor: '#1e1e1e',
                              borderRadius: 4,
                              textAlign: 'center',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2764b4ff';
                              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1e1e1e';
                              (e.currentTarget as HTMLAnchorElement).style.color = '#59c2ffff';
                            }}
                          >
                            0787983991
                          </a>
                          <a
                            href="tel:0628576852"
                            style={{
                              color: '#59c2ffff',
                              textDecoration: 'none',
                              fontSize: '0.85rem',
                              padding: '0.3rem 0.5rem',
                              backgroundColor: '#1e1e1e',
                              borderRadius: 4,
                              textAlign: 'center',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2764b4ff';
                              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1e1e1e';
                              (e.currentTarget as HTMLAnchorElement).style.color = '#59c2ffff';
                            }}
                          >
                            062 857 6852
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '2.5rem',
        borderRadius: 16,
        maxWidth: 900,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(39, 100, 180, 0.2)',
      }}>
        <h2 style={{ 
          color: '#59c2ffff', 
          fontSize: '2rem', 
          marginBottom: '1.5rem' 
        }}>
          Why Choose PrismaOps for Your Portfolio?
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {[
            {
              icon: "⚡",
              title: "Fast Delivery",
              desc: "Get your portfolio live within days, not weeks"
            },
            {
              icon: "💎",
              title: "Professional Quality",
              desc: "Industry-standard designs that impress employers"
            },
            {
              icon: "🎯",
              title: "Results-Focused",
              desc: "Portfolios designed to convert visitors into opportunities"
            },
            {
              icon: "🛠️",
              title: "Ongoing Support",
              desc: "We're here to help even after your portfolio goes live"
            }
          ].map((benefit, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
                {benefit.icon}
              </div>
              <h3 style={{ 
                color: '#fff', 
                fontSize: '1.1rem', 
                marginBottom: '0.5rem',
                margin: 0 
              }}>
                {benefit.title}
              </h3>
              <p style={{ 
                color: '#ccc', 
                fontSize: '0.95rem',
                margin: 0,
                lineHeight: 1.4
              }}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '2rem',
        borderRadius: 16,
        maxWidth: 800,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(39, 100, 180, 0.2)',
      }}>
        <h3 style={{ 
          color: '#59c2ffff', 
          fontSize: '1.5rem', 
          marginBottom: '1rem' 
        }}>
          🚀 Ready to Build Your Dream Portfolio?
        </h3>
        <p style={{ 
          color: '#ddd', 
          fontSize: '1.1rem', 
          lineHeight: 1.5,
          marginBottom: '1.5rem'
        }}>
          Let's create a portfolio that opens doors to your future opportunities. 
          Contact us today for a free consultation!
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              const phoneNumbers = [
                { number: '0787983991', label: 'WhatsApp 1' },
                { number: '0628576852', label: 'WhatsApp 2' },
              ];
              const userChoice = prompt(
                `Choose a number to contact on WhatsApp:\n1. ${phoneNumbers[0].label}: ${phoneNumbers[0].number}\n2. ${phoneNumbers[1].label}: ${phoneNumbers[1].number}`
              );
              if (userChoice === '1' || userChoice === '2') {
                const selectedNumber = phoneNumbers[parseInt(userChoice) - 1].number;
                window.location.href = `https://wa.me/${selectedNumber}`;
              } else {
                alert('Invalid choice. Please try again.');
              }
            }}
            style={{
              backgroundColor: '#2764b4ff',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e4d87';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2764b4ff';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            Free Consultation
          </button>
          <button
            onClick={() => {
              // Navigate to Sample page
              window.location.href = '/sample';
            }}
            style={{
              backgroundColor: 'transparent',
              color: '#59c2ffff',
              border: '2px solid #59c2ffff',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#59c2ffff';
              (e.currentTarget as HTMLButtonElement).style.color = '#0e0e0e';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = '#59c2ffff';
            }}
          >
            View Samples
          </button>
        </div>
      </div>
    </section>
  );
};
