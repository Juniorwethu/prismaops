import React from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import { Sidebar } from './Sidebar';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const colors = { background: '#111', text: '#fff' };
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  React.useEffect(() => {
    if (isMobile) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
  }, [isMobile]);

  // Prevent horizontal scroll on all pages
  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <SidebarCollapseContext.Provider value={{ isSidebarCollapsed, setIsSidebarCollapsed }}>
      <div style={{ display: 'flex', width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
        <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
        <main
          style={{
            marginLeft: isSidebarCollapsed && !isMobile ? '60px' : isMobile ? '0' : '200px',
            minHeight: '100vh',
            flexGrow: 1,
            backgroundColor: colors.background,
            color: colors.text,
            transition: 'margin-left 0.3s ease, background-color 0.3s ease, color 0.3s ease',
            overflowY: 'auto',
            overflowX: 'hidden',
            width: `calc(100vw - ${isSidebarCollapsed && !isMobile ? '60px' : isMobile ? '0' : '200px'})`,
            padding: isMobile ? '1rem' : '0',
          }}
        >
          {children}
        </main>
      </div>
    </SidebarCollapseContext.Provider>
  );
};
