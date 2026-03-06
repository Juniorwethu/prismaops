// src/components/Sidebar.tsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LuRocket, 
  LuWrench, 
  LuComputer, 
  LuPalette, 
  LuGem, 
  LuGithub, 
  LuMail, 
  LuFileText 
} from 'react-icons/lu';
import { useMediaQuery } from '../hooks/useMediaQuery';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const navItems = [
  { path: '/', icon: LuRocket, label: 'Home' },
  { path: '/services', icon: LuWrench, label: 'Services' },
  { path: '/web-ui-design', icon: LuComputer, label: 'Web & UI Design' },
  { path: '/graphic-design', icon: LuPalette, label: 'Graphic Design' },
  { path: '/portfolio', icon: LuGem, label: 'Portfolio' },
  { path: '/github-training', icon: LuGithub, label: 'GitHub Training' },
  { path: '/contact', icon: LuMail, label: 'Contact Us' },
  { path: '/sample', icon: LuFileText, label: 'Portfolio Samples' },
];

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  
  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && !isCollapsed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isCollapsed]);

  const handleNavigation = (path: string) => {
    navigate(path);
    // Auto-close sidebar on mobile/tablet after navigation
    if (isMobile || isTablet) {
      setIsCollapsed(true);
    }
  };

  // Determine device type for styling
  const getDeviceClass = () => {
    if (isMobile) return styles.mobile;
    if (isTablet) return styles.tablet;
    return styles.desktop;
  };

  const deviceClass = getDeviceClass();
  const isSmallDevice = isMobile || isTablet;

  const sidebarClasses = [
    styles.sidebar,
    deviceClass,
    isSmallMobile && styles.smallMobile,
    isSmallDevice && !isCollapsed ? styles.open : '',
    !isSmallDevice && isCollapsed ? styles.collapsed : ''
  ].filter(Boolean).join(' ');

  const toggleButtonContainerClasses = [
    styles.toggleButtonContainer,
    deviceClass,
    !isSmallDevice && isCollapsed ? styles.collapsed : ''
  ].filter(Boolean).join(' ');

  const logoContainerClasses = [
    styles.logoContainer,
    deviceClass,
    !isSmallDevice && isCollapsed ? styles.collapsed : ''
  ].filter(Boolean).join(' ');

  const navContainerClasses = [
    styles.navContainer,
    deviceClass,
    !isSmallDevice && isCollapsed ? styles.collapsed : ''
  ].filter(Boolean).join(' ');

  const navItemClasses = (path: string) => [
    styles.navItem,
    deviceClass,
    !isSmallDevice && isCollapsed ? styles.collapsed : '',
    location.pathname === path ? styles.active : ''
  ].filter(Boolean).join(' ');

  const navLabelClasses = (path: string) => [
    styles.navLabel,
    location.pathname === path ? styles.active : ''
  ].filter(Boolean).join(' ');

  const sidebarContent = (
    <>
      <div className={toggleButtonContainerClasses}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={styles.toggleButton}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed && !isSmallDevice ? '☰' : '✕'}
        </button>
      </div>
      
      <div className={logoContainerClasses} onClick={() => handleNavigation('/')} role="button" tabIndex={0}>
        <img src="/logoo.jpg" alt="PrismaOps Logo" className={styles.logoImage} />
      </div>

      <nav className={navContainerClasses} aria-label="Main navigation">
        {navItems.map((item) => (
          <div
            key={item.path}
            className={navItemClasses(item.path)}
            onClick={() => handleNavigation(item.path)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleNavigation(item.path);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={item.label}
            aria-current={location.pathname === item.path ? 'page' : undefined}
          >
            <item.icon className={styles.navIcon} strokeWidth={1.5} aria-hidden="true" />
            {(!isCollapsed || isSmallDevice) && (
              <span className={navLabelClasses(item.path)}>
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );

  // Render mobile/tablet version with overlay
  if (isSmallDevice) {
    return (
      <>
        {isCollapsed && (
          <button
            onClick={() => setIsCollapsed(false)}
            className={styles.mobileToggleButton}
            aria-label="Open menu"
            title="Open menu"
          >
            ☰
          </button>
        )}
        {!isCollapsed && (
          <div 
            className={styles.mobileOverlay} 
            onClick={() => setIsCollapsed(true)}
            role="button"
            aria-label="Close menu"
            tabIndex={0}
          />
        )}
        <aside 
          className={sidebarClasses} 
          onClick={(e) => e.stopPropagation()}
          aria-label="Sidebar navigation"
        >
          {sidebarContent}
        </aside>
      </>
    );
  }

  // Render desktop version
  return (
    <aside className={sidebarClasses} aria-label="Sidebar navigation">
      {sidebarContent}
    </aside>
  );
};

export { Sidebar };
