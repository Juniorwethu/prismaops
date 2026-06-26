import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeColors {
  background: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
  primary: string;
  accent: string;
  border: string;
  shadow: string;
}

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const lightTheme: ThemeColors = {
  background: '#f3f4f6',
  cardBackground: '#ffffff',
  text: '#111827',
  textSecondary: '#6b7280',
  primary: '#6366f1',
  accent: '#2563eb',
  border: '#dbe3f0',
  shadow: 'rgba(99, 102, 241, 0.12)'
};

const darkTheme: ThemeColors = {
  background: '#0e0e0e',
  cardBackground: '#1e1e1e',
  text: '#ffffff',
  textSecondary: '#ddd',
  primary: '#6366f1',
  accent: '#60a5fa',
  border: '#333',
  shadow: 'rgba(99, 102, 241, 0.3)'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const colors = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
