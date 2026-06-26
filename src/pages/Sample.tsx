// src/pages/Sample.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowRight, LuBadgeCheck, LuTimer } from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import { sampleBuilds } from '../data/sampleBuilds';
import styles from './Sample.module.css';

export const Sample: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);

  return (
    <section className={`${styles.sampleSection} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <div className={styles.heroBadge}>
            <LuBadgeCheck className={styles.badgeIcon} />
            <span>Example systems we build</span>
          </div>
          <h1 className={styles.title}>Sample builds for small systems that remove manual work.</h1>
          <p className={styles.subtitle}>
            These examples show the kind of internal tools, collaboration apps, booking systems, and workflow systems PrismaOps builds.
          </p>
        </header>

        <div className={styles.sampleGrid}>
          {sampleBuilds.map((build, index) => (
            <article
              key={build.title}
              className={styles.sampleCard}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className={styles.cardTop}>
                <div>
                  <p className={styles.cardTitle}>{build.title}</p>
                  <p className={styles.cardType}>{build.type}</p>
                </div>
                <span className={styles.typeBadge}>System</span>
              </div>

              <div className={styles.block}>
                <span className={styles.label}>Problem</span>
                <p className={styles.text}>{build.problem}</p>
              </div>

              <div className={styles.block}>
                <span className={styles.label}>Result</span>
                <p className={styles.text}>{build.solution}</p>
              </div>

              <div className={styles.tagsRow}>
                {build.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <Link to={`/sample/${build.slug}`} className={styles.cardButton}>
                View Case Study <LuArrowRight className={styles.buttonIcon} />
              </Link>
            </article>
          ))}
        </div>

        <section className={styles.ctaSection}>
          <div className={styles.ctaIcon}><LuTimer /></div>
          <h2 className={styles.ctaTitle}>Need one of these built for your team?</h2>
          <p className={styles.ctaText}>
            Send the process, problem, or tool idea you want to improve and we will help you decide the fastest starting point.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Book a 15-min automation audit
              <LuArrowRight className={styles.buttonIcon} />
            </Link>
            <a href="mailto:PrismaOps@outlook.com" className={styles.secondaryButton}>
              Show me what I can automate
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};