import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const colors = { cardBackground: '#111', text: '#fff', accent: '#2764b4ff', shadow: 'rgba(0,0,0,0.5)' };

const navItems = [
  { path: '/', icon: '🏠', label: 'Home' },
  { path: '/web-ui-design', icon: '🖥️', label: 'Web & UI Design' },
  { path: '/graphic-design', icon: '🖌️', label: 'Graphic Design' },
  { path: '/portfolio', icon: '💼', label: 'Portfolio & Services' },
  { path: '/github-training', icon: '📚', label: 'GitHub Training' },
  { path: '/contact', icon: '📞', label: 'Contact Us' },
  { path: '/sample', icon: '🎨', label: 'Portfolio Samples' },
];

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile && !isCollapsed) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1001,
        }}
        onClick={() => setIsCollapsed(true)}
      >
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '200px',
            height: '100vh',
            backgroundColor: colors.cardBackground,
            color: colors.text,
            borderRight: `1px solid ${colors.shadow}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingTop: '1rem',
            zIndex: 1002,
            boxShadow: `2px 0 10px ${colors.shadow}`,
            transition: 'width 0.3s ease',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toggle Button */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '0 1rem',
              marginBottom: '1rem',
            }}
          >
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              style={{
                background: 'none',
                border: 'none',
                color: colors.text,
                fontSize: '1.2rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '5px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.accent + '20';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}
              title={'Collapse sidebar'}
            >
              {'✕'}
            </button>
          </div>
          {/* Logo */}
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: colors.cardBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              alignSelf: 'center',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
            }}
            onClick={() => {
              navigate('/');
              setIsCollapsed(true);
            }}
          >
            <img
              src="/logoo.jpg"
              alt="PrismaOps Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                imageRendering: 'auto',
                filter: 'none',
                transition: 'filter 0.3s ease',
                transform: 'rotate(0.1deg)',
              }}
            />
          </div>
          {/* Navigation Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start',
              width: '100%',
              padding: '0 1rem',
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div
                  key={item.path}
                  style={{
                    width: 'calc(100% - 2rem)',
                    minWidth: '100px',
                    maxWidth: '100%',
                    height: '45px',
                    borderRadius: '8px',
                    backgroundColor: isActive 
                      ? colors.accent + '40' 
                      : colors.accent + '20',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    transition: 'all 0.2s ease',
                    padding: '0 0.75rem',
                    gap: '0.75rem',
                    border: isActive ? `2px solid ${colors.accent}` : 'none',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.border = '2px solid #2764b4ff';
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.border = isActive ? `2px solid ${colors.accent}` : 'none';
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                  }}
                  onClick={() => {
                    navigate(item.path);
                    setIsCollapsed(true);
                  }}
                  title={item.label}
                >
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  <span 
                    style={{ 
                      color: colors.text,
                      fontSize: '0.9rem',
                      fontWeight: isActive ? '600' : '400',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isCollapsed ? '60px' : '200px',
        height: '100vh',
        backgroundColor: colors.cardBackground,
        color: colors.text,
        borderRight: `1px solid ${colors.shadow}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCollapsed ? 'center' : 'flex-start',
        paddingTop: '1rem',
        zIndex: 1000,
        boxShadow: `2px 0 10px ${colors.shadow}`,
        transition: 'width 0.3s ease',
        transform: isMobile && isCollapsed ? 'translateX(-100%)' : 'translateX(0)',
      }}
    >
      {/* Toggle Button */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: isCollapsed ? 'center' : 'flex-end',
          padding: isCollapsed ? '0' : '0 1rem',
          marginBottom: '1rem',
        }}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            background: 'none',
            border: 'none',
            color: colors.text,
            fontSize: '1.2rem',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '5px',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.accent + '20';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
          }}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '☰' : '✕'}
        </button>
      </div>
      {/* Logo */}
      <div
        style={{
          width: isCollapsed ? '50px' : '60px',
          height: isCollapsed ? '50px' : '60px',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: colors.cardBackground,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          alignSelf: 'center',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
        }}
        onClick={() => navigate('/')}
      >
        <img
          src="/logoo.jpg"
          alt="PrismaOps Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            imageRendering: 'auto',
            filter: 'none',
            transition: 'filter 0.3s ease',
            transform: 'rotate(0.1deg)',
          }}
        />
      </div>
      {/* Navigation Buttons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: isCollapsed ? 'center' : 'flex-start',
          width: '100%',
          padding: isCollapsed ? '0' : '0 1rem',
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.path}
              style={{
                width: isCollapsed ? '48px' : 'calc(100% - 2rem)',
                minWidth: isCollapsed ? '48px' : '100px',
                maxWidth: isCollapsed ? '48px' : '100%',
                height: '45px',
                borderRadius: '8px',
                backgroundColor: isActive 
                  ? colors.accent + '40' 
                  : colors.accent + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.2s ease',
                padding: isCollapsed ? '0' : '0 0.75rem',
                gap: isCollapsed ? '0' : '0.75rem',
                border: isActive ? `2px solid ${colors.accent}` : 'none',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.border = '2px solid #2764b4ff';
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.border = isActive ? `2px solid ${colors.accent}` : 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              }}
              onClick={() => navigate(item.path)}
              title={item.label}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              {!isCollapsed && (
                <span 
                  style={{ 
                    color: colors.text,
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '600' : '400',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Sidebar };
