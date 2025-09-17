// src/components/Sidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

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

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  const sidebarClasses = [
    styles.sidebar,
    isMobile ? styles.mobile : styles.desktop,
    isMobile && !isCollapsed ? styles.open : '',
    !isMobile && isCollapsed ? styles.collapsed : ''
  ].join(' ');

  const toggleButtonContainerClasses = [
    styles.toggleButtonContainer,
    isMobile ? styles.mobile : styles.desktop,
    !isMobile && isCollapsed ? styles.collapsed : ''
  ].join(' ');

  const logoContainerClasses = [
    styles.logoContainer,
    isMobile ? styles.mobile : styles.desktop,
    !isMobile && isCollapsed ? styles.collapsed : ''
  ].join(' ');

  const navContainerClasses = [
    styles.navContainer,
    isMobile ? styles.mobile : styles.desktop,
    !isMobile && isCollapsed ? styles.collapsed : ''
  ].join(' ');

  const navItemClasses = (path: string) => [
    styles.navItem,
    isMobile ? styles.mobile : styles.desktop,
    !isMobile && isCollapsed ? styles.collapsed : '',
    location.pathname === path ? styles.active : ''
  ].join(' ');

  const navLabelClasses = (path: string) => [
    styles.navLabel,
    location.pathname === path ? styles.active : ''
  ].join(' ');

  const sidebarContent = (
    <>
      <div className={toggleButtonContainerClasses}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={styles.toggleButton}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed && !isMobile ? '☰' : '✕'}
        </button>
      </div>
      
      <div className={logoContainerClasses} onClick={() => handleNavigation('/')}>
        <img src="/logoo.jpg" alt="PrismaOps Logo" className={styles.logoImage} />
      </div>

      <div className={navContainerClasses}>
        {navItems.map((item) => (
          <div
            key={item.path}
            className={navItemClasses(item.path)}
            onClick={() => handleNavigation(item.path)}
            title={item.label}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {(!isCollapsed || isMobile) && (
              <span className={navLabelClasses(item.path)}>
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );

  if (isMobile) {
    return (
      <>
        {isCollapsed && (
          <button
            onClick={() => setIsCollapsed(false)}
            className={styles.mobileToggleButton}
            title="Open menu"
          >
            ☰
          </button>
        )}
        {!isCollapsed && <div className={styles.mobileOverlay} onClick={() => setIsCollapsed(true)}></div>}
        <div className={sidebarClasses} onClick={(e) => e.stopPropagation()}>
          {sidebarContent}
        </div>
      </>
    );
  }

  return (
    <div className={sidebarClasses}>
      {sidebarContent}
    </div>
  );
};

export { Sidebar };
