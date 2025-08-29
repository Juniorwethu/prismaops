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
  background: '#ffffff',
  cardBackground: '#f8f9fa',
  text: '#212529',
  textSecondary: '#6c757d',
  primary: '#2764b4ff',
  accent: '#0a27ff',
  border: '#dee2e6',
  shadow: 'rgba(0, 0, 0, 0.1)'
};

const darkTheme: ThemeColors = {
  background: '#0e0e0e',
  cardBackground: '#1e1e1e',
  text: '#ffffff',
  textSecondary: '#ddd',
  primary: '#2764b4ff',
  accent: '#59c2ffff',
  border: '#333',
  shadow: 'rgba(39, 100, 180, 0.3)'
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
    return savedTheme || 'dark';
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
