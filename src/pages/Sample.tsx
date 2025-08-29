// src/pages/Sample.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';

export const Sample: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const portfolioSamples = [
    {
      title: "Creative Designer Portfolio",
      category: "Graphic Design",
      description: "Modern portfolio showcasing creative work with interactive galleries and smooth animations.",
      features: ["Interactive Gallery", "Animation Effects", "Mobile Responsive", "SEO Optimized"],
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
      image: "/placeholder-portfolio-1.jpg",
      liveUrl: "#",
      type: "Design & Development"
    },
    {
      title: "Developer Portfolio",
      category: "Web Development",
      description: "Clean, professional portfolio for a full-stack developer with project showcase and skills matrix.",
      features: ["Project Showcase", "Skills Matrix", "Contact Integration", "Dark/Light Mode"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "/placeholder-portfolio-2.jpg",
      liveUrl: "#",
      type: "Development"
    },
    {
      title: "Photography Portfolio",
      category: "Photography",
      description: "Stunning visual portfolio with high-quality image optimization and gallery features.",
      features: ["Image Optimization", "Lightbox Gallery", "Client Galleries", "Booking System"],
      technologies: ["React", "Cloudinary", "Stripe", "Firebase"],
      image: "/placeholder-portfolio-3.jpg",
      liveUrl: "#",
      type: "Design & Development"
    },
    {
      title: "Business Consultant Portfolio",
      category: "Business",
      description: "Professional corporate portfolio with case studies, testimonials, and service listings.",
      features: ["Case Studies", "Client Testimonials", "Service Pages", "Blog Integration"],
      technologies: ["WordPress", "Custom Theme", "WooCommerce", "Analytics"],
      image: "/placeholder-portfolio-4.jpg",
      liveUrl: "#",
      type: "Content Management"
    },
    {
      title: "Student Project Portfolio",
      category: "Academic",
      description: "Academic portfolio showcasing student projects, research, and achievements.",
      features: ["Project Documentation", "Research Papers", "Achievement Gallery", "PDF Downloads"],
      technologies: ["React", "GitHub Pages", "PDF.js", "Bootstrap"],
      image: "/placeholder-portfolio-5.jpg",
      liveUrl: "#",
      type: "Design & Development"
    },
    {
      title: "Freelancer Portfolio",
      category: "Freelance",
      description: "Comprehensive freelancer portfolio with service packages, pricing, and client portal.",
      features: ["Service Packages", "Pricing Calculator", "Client Portal", "Invoice System"],
      technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder-portfolio-6.jpg",
      liveUrl: "#",
      type: "Full Service"
    }
  ];

  const categories = ["All", "Graphic Design", "Web Development", "Photography", "Business", "Academic", "Freelance"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredSamples = selectedCategory === "All" 
    ? portfolioSamples 
    : portfolioSamples.filter(sample => sample.category === selectedCategory);

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
          Portfolio Samples
        </h1>
        <p style={{ 
          fontSize: isSidebarCollapsed ? '1.5rem' : '1.2rem', 
          color: '#ddd', 
          lineHeight: 1.5,
          marginBottom: 0,
          transition: 'font-size 0.3s ease',
        }}>
          Explore our <strong>portfolio examples</strong> across different industries and styles. 
          Each project demonstrates our commitment to quality, creativity, and professional excellence.
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        justifyContent: 'center',
        marginBottom: '1rem'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor: selectedCategory === category ? '#2764b4ff' : 'transparent',
              color: selectedCategory === category ? 'white' : '#59c2ffff',
              border: `2px solid ${selectedCategory === category ? '#2764b4ff' : '#59c2ffff'}`,
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              borderRadius: 25,
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#59c2ffff';
                (e.currentTarget as HTMLButtonElement).style.color = '#0e0e0e';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.color = '#59c2ffff';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        maxWidth: 1400,
      }}>
        {filteredSamples.map((sample, idx) => (
          <div
            key={idx}
              style={{
                backgroundColor: '#1e1e1e',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 238, 182, 0.18), 0 0 12px 2px #00eeb420',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 30px #00eeb4aa, 0 0 24px 8px #00eeb4aa';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 15px rgba(0, 238, 182, 0.18), 0 0 12px 2px #00eeb420';
              }}
          >
            {/* Image Placeholder */}
            <div style={{
              height: 250,
              backgroundColor: '#2a2a2a',
              backgroundImage: 'linear-gradient(45deg, #2a2a2a 25%, #333 25%, #333 50%, #2a2a2a 50%, #2a2a2a 75%, #333 75%)',
              backgroundSize: '20px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                backgroundColor: 'rgba(39, 100, 180, 0.1)',
                padding: '1rem',
                borderRadius: 8,
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>🖼️</span>
                <span style={{ color: '#59c2ffff', fontSize: '0.9rem', fontWeight: '500' }}>
                  {sample.title}
                </span>
              </div>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#2764b4ff',
                color: 'white',
                padding: '0.3rem 0.8rem',
                borderRadius: 15,
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                {sample.type}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  color: '#59c2ffff', 
                  fontSize: '0.85rem', 
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>
                  {sample.category}
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.3rem', 
                  margin: 0,
                  marginBottom: '0.8rem',
                  lineHeight: 1.3
                }}>
                  {sample.title}
                </h3>
                <p style={{ 
                  color: '#ccc', 
                  fontSize: '0.95rem', 
                  lineHeight: 1.5,
                  margin: 0,
                  marginBottom: '1rem'
                }}>
                  {sample.description}
                </p>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  color: '#fff', 
                  fontSize: '0.9rem', 
                  marginBottom: '0.5rem',
                  margin: 0
                }}>
                  Key Features:
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {sample.features.map((feature, featureIdx) => (
                    <span
                      key={featureIdx}
                      style={{
                        backgroundColor: '#333',
                        color: '#ddd',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 12,
                        fontSize: '0.8rem'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ 
                  color: '#fff', 
                  fontSize: '0.9rem', 
                  marginBottom: '0.5rem',
                  margin: 0
                }}>
                  Technologies:
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {sample.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      style={{
                        backgroundColor: '#2764b4ff',
                        color: 'white',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 12,
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                style={{
                  backgroundColor: '#59c2ffff',
                  color: '#0e0e0e',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.95rem',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#4aa3d9';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#59c2ffff';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                }}
              >
                View Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '2.5rem',
        borderRadius: 16,
        maxWidth: 900,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(39, 100, 180, 0.2)',
        marginTop: '2rem'
      }}>
        <h3 style={{ 
          color: '#59c2ffff', 
          fontSize: '1.8rem', 
          marginBottom: '1rem' 
        }}>
          🎯 Inspired by What You See?
        </h3>
        <p style={{ 
          color: '#ddd', 
          fontSize: '1.1rem', 
          lineHeight: 1.5,
          marginBottom: '2rem'
        }}>
          These are just a few examples of what we can create for you. Every portfolio is custom-designed 
          to match your unique style, goals, and industry requirements.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            Start Your Portfolio
          </button>
          <button
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
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};
