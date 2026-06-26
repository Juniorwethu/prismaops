// src/pages/LandingPage.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LuArrowRight,
  LuCheck,
  LuGithub,
  LuSearch,
  LuSettings2,
  LuTable2,
  LuTimer,
  LuWrench,
} from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import styles from './LandingPage.module.css';

const services = [
  {
    icon: <LuWrench />,
    title: 'Automation Sprint',
    price: 'R5k-R15k',
    summary: 'Fix one workflow fast.',
    details: 'Replace manual steps with a small workflow that saves time immediately.',
    link: '/contact',
  },
  {
    icon: <LuTable2 />,
    title: 'Internal Tool Build',
    price: 'R10k-R25k',
    summary: 'Dashboards, trackers, and admin tools.',
    details: 'Build a simple tool your team can use without spreadsheet chaos.',
    link: '/contact',
  },
  {
    icon: <LuSearch />,
    title: 'Systems Audit',
    price: 'R2k-R7k',
    summary: 'Find inefficiencies and fix the worst ones first.',
    details: 'Review the current process, identify bottlenecks, and leave with a clear plan.',
    link: '/contact',
  },
];

const beforeAfter = [
  {
    before: 'Manual Excel tracking',
    after: 'Automated dashboard with live updates',
  },
  {
    before: 'Copying form data into email threads',
    after: 'Auto-routed requests with clear ownership',
  },
  {
    before: 'Chasing updates in chat',
    after: 'One simple board everyone can check',
  },
];

const proofItems = [
  {
    title: 'GitHub projects',
    text: 'See the code, structure, and delivery style behind the work.',
  },
  {
    title: 'Demo screenshots',
    text: 'Quick visual proof of dashboards, tools, and workflows.',
  },
  {
    title: 'Built for real tasks',
    text: 'Examples for admin work, client tracking, and reporting.',
  },
];

const processSteps = [
  'You explain the problem.',
  'We build the solution in 7-14 days.',
  'You save time immediately.',
];

export const LandingPage: React.FC = () => {
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.landingPage} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <header className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <LuTimer className={styles.badgeIcon} />
            <span>Small automation studio for busy businesses</span>
          </div>
          <h1 className={styles.heroTitle}>
            We build small software tools that save businesses time and manual work in under 14 days.
          </h1>
          <p className={styles.heroSubtitle}>
            PrismaOps is a small automation studio for businesses that want fewer manual processes and faster operations.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/contact" className={styles.ctaButton}>
              Book a 15-min automation audit
              <LuArrowRight className={styles.buttonIcon} />
            </Link>
            <a href="#services" className={styles.secondaryButton}>
              See the 3 services
            </a>
          </div>

          <div className={styles.proofStrip}>
            {proofItems.map((item) => (
              <div key={item.title} className={styles.proofCard}>
                <div className={styles.proofIcon}>
                  <LuGithub />
                </div>
                <h3 className={styles.proofTitle}>{item.title}</h3>
                <p className={styles.proofText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.problemSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>The problem</p>
            <h2 className={styles.sectionTitle}>Most small businesses waste hours on manual work every week.</h2>
            <p className={styles.sectionCopy}>
              The fix is usually not a big rebuild. It is one small tool, one automation, or one better process.
            </p>
          </div>

          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <LuSettings2 className={styles.problemIcon} />
              <h3>Tasks get scattered</h3>
              <p>Work ends up split across spreadsheets, inboxes, and chat threads.</p>
            </div>
            <div className={styles.problemCard}>
              <LuSearch className={styles.problemIcon} />
              <h3>No clear process</h3>
              <p>People repeat the same steps because there is no simple system to follow.</p>
            </div>
            <div className={styles.problemCard}>
              <LuTimer className={styles.problemIcon} />
              <h3>Time gets lost</h3>
              <p>Small manual jobs add up and eat into the work that grows the business.</p>
            </div>
          </div>
        </section>

        <section id="services" className={styles.servicesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Services</p>
            <h2 className={styles.sectionTitle}>Only 3 productized offers.</h2>
            <p className={styles.sectionCopy}>Clear scope, clear price range, and a result you can use right away.</p>
          </div>

          <div className={styles.cardsContainer}>
            {services.map((service, index) => (
              <Link key={service.title} to={service.link} className={styles.serviceCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.serviceHeader}>
                  <div className={styles.cardIcon}>{service.icon}</div>
                  <span className={styles.priceTag}>{service.price}</span>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardOutcome}>{service.summary}</p>
                <p className={styles.cardDescription}>{service.details}</p>
                <span className={styles.cardLink}>
                  Show me what I can automate <LuArrowRight className={styles.linkIcon} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.examplesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Before / after</p>
            <h2 className={styles.sectionTitle}>Simple examples that show the outcome.</h2>
          </div>
          <div className={styles.examplesGrid}>
            {beforeAfter.map((item) => (
              <div key={item.before} className={styles.exampleCard}>
                <div className={styles.exampleLabel}>Before</div>
                <p className={styles.exampleText}>{item.before}</p>
                <div className={styles.exampleArrow}>
                  <LuArrowRight />
                </div>
                <div className={styles.exampleLabel}>After</div>
                <p className={styles.exampleText}>{item.after}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Proof</p>
            <h2 className={styles.sectionTitle}>Show the work, even if we are early.</h2>
            <p className={styles.sectionCopy}>GitHub repos, screenshots, and small case studies are enough to build trust.</p>
          </div>
          <div className={styles.proofGrid}>
            {proofItems.map((item) => (
              <div key={item.title} className={styles.proofCard}>
                <div className={styles.proofIcon}>
                  <LuGithub />
                </div>
                <h3 className={styles.proofTitle}>{item.title}</h3>
                <p className={styles.proofText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>How it works</p>
            <h2 className={styles.sectionTitle}>Fast, clear, and easy to start.</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={step} className={styles.processCard}>
                <div className={styles.processNumber}>0{index + 1}</div>
                <p className={styles.processText}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.ctaContent}>
            <p className={styles.sectionEyebrow}>Ready to start</p>
            <h2 className={styles.ctaTitle}>Let's automate one part of your business this week.</h2>
            <p className={styles.ctaText}>
              Send one workflow, tracker, or admin task. We will tell you what can be simplified and how fast we can build it.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Book a 15-min automation audit
              <LuArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
