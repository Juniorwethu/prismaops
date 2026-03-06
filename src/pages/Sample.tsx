// src/pages/Sample.tsx
import React, { useContext } from 'react';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './Sample.module.css';

export const Sample: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section className={`${styles.sampleSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.loaderContainer}>
          <div className={styles.cube}>
            <div className={`${styles.face} ${styles.front}`}></div>
            <div className={`${styles.face} ${styles.back}`}></div>
            <div className={`${styles.face} ${styles.right}`}></div>
            <div className={`${styles.face} ${styles.left}`}></div>
            <div className={`${styles.face} ${styles.top}`}></div>
            <div className={`${styles.face} ${styles.bottom}`}></div>
          </div>
          <h1 className={styles.comingSoonTitle}>Coming Soon</h1>
          <p className={styles.comingSoonText}>We are working hard to bring you our portfolio samples. Stay tuned!</p>
        </div>
      </div>
    </section>
  );
};
