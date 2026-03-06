// src/components/Layout.tsx
import React from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import { Sidebar } from './Sidebar';
import { useMediaQuery } from '../hooks/useMediaQuery';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  // Auto-collapse sidebar on mobile/tablet devices
  React.useEffect(() => {
    if (isMobile || isTablet) {
      setIsSidebarCollapsed(true);
    } else if (isDesktop) {
      setIsSidebarCollapsed(false);
    }
  }, [isMobile, isTablet, isDesktop]);

  // Prevent horizontal scroll
  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  // Determine device type for styling
  const getDeviceClass = () => {
    if (isMobile) return styles.mobile;
    if (isTablet) return styles.tablet;
    return styles.desktop;
  };

  const isSmallDevice = isMobile || isTablet;

  const mainContentClasses = [
    styles.mainContent,
    getDeviceClass(),
    isSidebarCollapsed && !isSmallDevice ? styles.collapsed : ''
  ].filter(Boolean).join(' ');

  return (
    <SidebarCollapseContext.Provider value={{ isSidebarCollapsed, setIsSidebarCollapsed }}>
      <div className={styles.layoutContainer}>
        <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
        <main className={mainContentClasses}>
          {children}
        </main>
      </div>
    </SidebarCollapseContext.Provider>
  );
};
