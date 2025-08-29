import React from 'react';

export const SidebarCollapseContext = React.createContext({
  isSidebarCollapsed: false,
  setIsSidebarCollapsed: (_: boolean) => {},
});