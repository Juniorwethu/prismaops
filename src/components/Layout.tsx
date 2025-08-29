import React from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const colors = { background: '#111', text: '#fff' };
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

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
            marginLeft: isSidebarCollapsed ? '60px' : '200px',
            minHeight: '100vh',
            flexGrow: 1,
            backgroundColor: colors.background,
            color: colors.text,
            transition: 'margin-left 0.3s ease, background-color 0.3s ease, color 0.3s ease',
            overflowY: 'auto',
            overflowX: 'hidden',
            width: 'calc(100vw - ' + (isSidebarCollapsed ? '60px' : '200px') + ')',
          }}
        >
          {children}
        </main>
      </div>
    </SidebarCollapseContext.Provider>
  );
};
