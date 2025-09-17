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

  React.useEffect(() => {
    setIsSidebarCollapsed(isMobile);
  }, [isMobile]);

  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  const mainContentClasses = [
    styles.mainContent,
    isMobile ? styles.mobile : styles.desktop,
    isSidebarCollapsed && !isMobile ? styles.collapsed : ''
  ].join(' ');

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
