// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        backgroundColor: colors.cardBackground,
        border: `2px solid ${colors.border}`,
        borderRadius: '50%',
        width: '3.5rem',
        height: '3.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        transition: 'all 0.3s ease',
        boxShadow: `0 4px 15px ${colors.shadow}`,
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 20px ${colors.shadow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 4px 15px ${colors.shadow}`;
      }}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};
