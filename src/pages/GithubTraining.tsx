// src/pages/GithubTraining.tsx
import React, { useState, useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';

export const GithubTraining: React.FC = () => {
  const colors = { background: '#252222ff', text: '#fff', textSecondary: '#ccc', primary: '#2764b4ff', accent: '#2764b4ff', cardBackground: '#181212ff', shadow: 'rgba(225, 73, 73, 0.5)' };
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
      <div style={{ textAlign: 'center', maxWidth: isSidebarCollapsed ? 1400 : 1000, transition: 'max-width 0.3s ease' }}>
        <h1 style={{ 
          fontSize: isSidebarCollapsed ? '4rem' : '3rem', 
          color: colors.primary, 
          marginBottom: '1rem',
          lineHeight: 1.2,
          transition: 'font-size 0.3s ease',
        }}>
          GitHub Training & Student Support
        </h1>
        <p style={{ 
          fontSize: isSidebarCollapsed ? '1.5rem' : '1.2rem', 
          color: colors.textSecondary, 
          lineHeight: 1.5,
          marginBottom: '1rem',
          transition: 'font-size 0.3s ease',
        }}>
          Master <strong>version control</strong> with comprehensive GitHub training and get expert guidance 
          for your <strong>student tech projects</strong>. From beginner basics to advanced workflows, 
          we'll help you become a confident developer.
        </p>
        <div style={{
          backgroundColor: colors.cardBackground,
          padding: '1.5rem',
          borderRadius: 12,
          marginTop: '1rem',
          border: `2px solid ${colors.primary}`
        }}>
          <h3 style={{ color: colors.accent, fontSize: '1.1rem', margin: 0, marginBottom: '0.8rem' }}>
            📋 Training Packages:
          </h3>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ 
                backgroundColor: '#28a745', 
                color: 'white', 
                padding: '0.3rem 1rem', 
                borderRadius: 15, 
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                Starter (1 session): R600
              </span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ 
                backgroundColor: '#2764b4ff', 
                color: 'white', 
                padding: '0.3rem 1rem', 
                borderRadius: 15, 
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                Pro (3 sessions): R1,500
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Training Section */}
      <div style={{ width: '100%', maxWidth: 1400 }}>
        <h2 style={{ 
          fontSize: '2.2rem', 
          color: colors.accent, 
          textAlign: 'center',
          marginBottom: '2rem' 
        }}>
          📦 GitHub Training Modules
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {trainingModules.map((module, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: colors.cardBackground,
                padding: '2rem',
                borderRadius: 16,
                boxShadow: `0 4px 15px rgba(218, 17, 17, 0.18), 0 0 12px 2px #da111120`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
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
              {/* Module Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{module.icon}</span>
                  <div>
                    <h3 style={{ 
                      color: colors.accent, 
                      fontSize: '1.3rem', 
                      margin: 0,
                      marginBottom: '0.3rem'
                    }}>
                      {module.title}
                    </h3>
                    <span style={{
                      backgroundColor: module.level === 'Beginner' ? '#28a745' : 
                                     module.level === 'Intermediate' ? '#ffc107' : '#dc3545',
                      color: module.level === 'Intermediate' ? '#000' : 'white',
                      padding: '0.2rem 0.8rem',
                      borderRadius: 12,
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {module.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ 
                color: colors.textSecondary, 
                fontSize: '1rem', 
                lineHeight: 1.6,
                margin: 0 
              }}>
                {module.description}
              </p>

              {/* Topics */}
              <div>
                <h4 style={{ 
                  color: colors.text, 
                  fontSize: '1rem', 
                  marginBottom: '0.8rem',
                  margin: 0 
                }}>
                  What You'll Learn:
                </h4>
                <ul style={{ 
                  color: '#ccc', 
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  paddingLeft: '1.2rem',
                  margin: 0
                }}>
                  {module.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} style={{ marginBottom: '0.3rem' }}>
                      {topic}
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
                    color: colors.accent, 
                    fontSize: '1.4rem', 
                    fontWeight: '600',
                    marginBottom: '0.2rem'
                  }}>
                    {module.price}
                  </div>
                  <div style={{ 
                    color: colors.textSecondary, 
                    fontSize: '0.9rem' 
                  }}>
                    {module.duration}
                  </div>
                </div>
                <button
                  onClick={() => {
                    window.location.href = "mailto:Admin@Prisma.Ops.com?subject=GitHub Training Booking Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI'd like to book a GitHub training session.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!";
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
                  Book Training
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Support Section */}
      <div style={{ width: '100%', maxWidth: 1400 }}>
        <h2 style={{ 
          fontSize: '2.2rem', 
          color: '#59c2ffff', 
          textAlign: 'center',
          marginBottom: '2rem' 
        }}>
          🎓 Student Tech Project Support
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {studentServices.map((service, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#1e1e1e',
                padding: '2rem',
                borderRadius: 16,
                boxShadow: '0 4px 15px rgba(218, 17, 17, 0.18), 0 0 12px 2px #da111120',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
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
              {/* Service Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{service.icon}</span>
                <h3 style={{ 
                  color: '#59c2ffff', 
                  fontSize: '1.3rem', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>
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

              {/* Services */}
              <div>
                <h4 style={{ 
                  color: '#fff', 
                  fontSize: '1rem', 
                  marginBottom: '0.8rem',
                  margin: 0 
                }}>
                  Services Included:
                </h4>
                <ul style={{ 
                  color: '#ccc', 
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  paddingLeft: '1.2rem',
                  margin: 0
                }}>
                  {service.services.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ marginBottom: '0.3rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid #333'
              }}>
                <div style={{ 
                  color: '#59c2ffff', 
                  fontSize: '1.3rem', 
                  fontWeight: '600'
                }}>
                  {service.price}
                </div>
                <button
                  onClick={() => {
                    window.location.href = "mailto:Admin@Prisma.Ops.com?subject=GitHub Training Support Request&body=Hi PrismaOps Team,%0D%0A%0D%0AI need support for the GitHub training session.%0D%0A%0D%0APlease contact me with more details.%0D%0A%0D%0AThank you!";
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
                  Get Support
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '2.5rem',
        borderRadius: 16,
        maxWidth: 1000,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0, 238, 182, 0.2)',
      }}>
        <h2 style={{ 
          color: '#59c2ffff', 
          fontSize: '2rem', 
          marginBottom: '2rem' 
        }}>
          Why Choose PrismaOps for GitHub Training?
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {[
            {
              icon: "🎯",
              title: "Hands-On Learning",
              desc: "Learn by doing with real projects and practical exercises"
            },
            {
              icon: "👨‍💻",
              title: "Expert Instructors",
              desc: "Learn from experienced developers with industry knowledge"
            },
            {
              icon: "📚",
              title: "Comprehensive Materials",
              desc: "Access to guides, cheat sheets, and ongoing resources"
            },
            {
              icon: "🚀",
              title: "Career Ready",
              desc: "Build skills that employers actually look for"
            },
            {
              icon: "🤝",
              title: "Ongoing Support",
              desc: "Get help even after your training is complete"
            },
            {
              icon: "💰",
              title: "Affordable Pricing",
              desc: "Student-friendly rates with flexible payment options"
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

      {/* WhatsApp CTA Section */}
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '2.5rem',
        borderRadius: 16,
        maxWidth: 800,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(39, 100, 180, 0.2)',
      }}>
        <h3 style={{ 
          color: '#59c2ffff', 
          fontSize: '1.8rem', 
          marginBottom: '1rem' 
        }}>
          💬 Ready to Start Learning?
        </h3>
        <p style={{ 
          color: '#ddd', 
          fontSize: '1.1rem', 
          lineHeight: 1.5,
          marginBottom: '2rem'
        }}>
          Have questions about our training programs or need help with your project? 
          Let's chat on WhatsApp! We're here to help you succeed.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/27877983991?text=Hi%20PrismaOps!%20I'm%20interested%20in%20GitHub%20training%20and%20would%20like%20to%20know%20more%20about%20your%20programs."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#20b358';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25D366';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>📱</span>
            Chat on WhatsApp
          </a>
          
          <a
            href="https://wa.me/27628576852?text=Hi%20PrismaOps!%20I'm%20a%20student%20and%20need%20help%20with%20my%20tech%20project.%20Can%20we%20discuss%20how%20you%20can%20assist%20me?"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: '#25D366',
              border: '2px solid #25D366',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25D366';
              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#25D366';
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>🎓</span>
            Student Support Chat
          </a>
        </div>

        <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#aaa' }}>
          <p style={{ margin: 0 }}>
            📞 <strong>Primary:</strong> 0787983991 | <strong>Alternative:</strong> 062 857 6852
          </p>
        </div>
      </div>
  </section>
  );
};
