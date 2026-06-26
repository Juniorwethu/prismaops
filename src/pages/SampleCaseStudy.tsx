// src/pages/SampleCaseStudy.tsx
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LuArrowLeft, LuArrowRight, LuBadgeCheck, LuClock3, LuLayers3, LuTarget } from 'react-icons/lu';
import { SidebarCollapseContext } from '../contexts/SidebarCollapseContext';
import { getSampleBuildBySlug, sampleBuilds } from '../data/sampleBuilds';
import styles from './SampleCaseStudy.module.css';

type ProofStat = {
  label: string;
  value: string;
  detail: string;
};

type WorkflowNode = {
  title: string;
  detail: string;
};

const caseStudyProofMap: Record<string, ProofStat[]> = {
  virtuecase: [
    { label: 'Case Visibility', value: '95%', detail: 'of active cases visible in one board' },
    { label: 'Admin Time', value: '-38%', detail: 'less manual follow-up each week' },
    { label: 'Handover Speed', value: '2.1x', detail: 'faster transitions across legal teams' },
  ],
  annotate: [
    { label: 'Review Cycle', value: '-41%', detail: 'faster feedback loops on docs' },
    { label: 'Comment Clarity', value: '+64%', detail: 'more actionable review comments' },
    { label: 'Email Noise', value: '-52%', detail: 'fewer review threads in inboxes' },
  ],
  'decision-tracker': [
    { label: 'Decision Capture', value: '100%', detail: 'meeting decisions logged by default' },
    { label: 'Findability', value: '3.4x', detail: 'faster retrieval of prior decisions' },
    { label: 'Project Drift', value: '-29%', detail: 'fewer scope misalignments downstream' },
  ],
  'court-booking-system': [
    { label: 'Double Bookings', value: '-87%', detail: 'fewer conflicts after launch' },
    { label: 'Booking Time', value: '-46%', detail: 'faster reservation completion' },
    { label: 'Utilization', value: '+22%', detail: 'better visibility of free slots' },
  ],
  'mix-to-haven': [
    { label: 'Booking Enquiries', value: '+43%', detail: 'increase in quote requests from event pages' },
    { label: 'Lead Response Fit', value: '+36%', detail: 'more qualified enquiries with clear event details' },
    { label: 'Brand Confidence', value: '92%', detail: 'of visitors rated the brand as premium and trustworthy' },
  ],
};

const caseStudyWorkflowMap: Record<string, WorkflowNode[]> = {
  virtuecase: [
    { title: 'Capture Intake', detail: 'Centralize new case intake from teams.' },
    { title: 'Route & Assign', detail: 'Auto-route to the right legal owner.' },
    { title: 'Track Milestones', detail: 'Monitor deadlines, status, and blockers.' },
    { title: 'Close & Audit', detail: 'Publish closure notes and audit trail.' },
  ],
  annotate: [
    { title: 'Upload Docs', detail: 'Bring files into a single review space.' },
    { title: 'Comment In Context', detail: 'Pin structured notes to exact sections.' },
    { title: 'Resolve Feedback', detail: 'Track open and completed review points.' },
    { title: 'Publish Final', detail: 'Ship approved docs with clear history.' },
  ],
  'decision-tracker': [
    { title: 'Log Decision', detail: 'Record decision in the meeting moment.' },
    { title: 'Assign Owner', detail: 'Attach ownership and due dates.' },
    { title: 'Sync Channel', detail: 'Push summary into team communication.' },
    { title: 'Review Outcomes', detail: 'Revisit decisions and update status.' },
  ],
  'court-booking-system': [
    { title: 'Show Availability', detail: 'Expose open courts in real time.' },
    { title: 'Reserve Slot', detail: 'Simple flow for customer reservations.' },
    { title: 'Confirm & Notify', detail: 'Send booking confirmation instantly.' },
    { title: 'Manage Changes', detail: 'Handle edits and cancellations cleanly.' },
  ],
  'mix-to-haven': [
    { title: 'Show Service Story', detail: 'Lead with premium mobile bar positioning and event credibility.' },
    { title: 'Present Packages', detail: 'Make bar packages, inclusions, and setup options easy to compare.' },
    { title: 'Capture Event Brief', detail: 'Collect date, venue, guest count, and service preferences.' },
    { title: 'Confirm Booking Path', detail: 'Route qualified leads into a fast quote-and-confirm process.' },
  ],
};

export const SampleCaseStudy: React.FC = () => {
  const { slug } = useParams();
  const { isSidebarCollapsed } = useContext(SidebarCollapseContext);
  const build = getSampleBuildBySlug(slug);
  const currentIndex = build ? sampleBuilds.findIndex((item) => item.slug === build.slug) : -1;
  const previousBuild = currentIndex > 0 ? sampleBuilds[currentIndex - 1] : null;
  const nextBuild = currentIndex >= 0 && currentIndex < sampleBuilds.length - 1 ? sampleBuilds[currentIndex + 1] : null;

  const proofStats = build ? caseStudyProofMap[build.slug] ?? [] : [];
  const workflowNodes = build ? caseStudyWorkflowMap[build.slug] ?? [] : [];

  if (!build) {
    return (
      <section className={`${styles.caseStudyPage} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.topBar}>
            <Link to="/sample" className={styles.backButton}>
              <LuArrowLeft className={styles.buttonIcon} />
              Back to sample builds
            </Link>
          </div>
          <div className={styles.notFoundCard}>
            <p className={styles.eyebrow}>Case study not found</p>
            <h1 className={styles.title}>That sample build does not exist.</h1>
            <p className={styles.copy}>Go back to the sample builds page and open one of the available case studies.</p>
            <Link to="/sample" className={styles.primaryButton}>
              Back to sample builds <LuArrowRight />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.caseStudyPage} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.topBar}>
          <Link to="/sample" className={styles.backButton}>
            <LuArrowLeft className={styles.buttonIcon} />
            Back to sample builds
          </Link>
        </div>

        <header className={styles.hero}>
          <div className={styles.heroBadge}>
            <LuBadgeCheck />
            <span>{build.type}</span>
          </div>
          <h1 className={styles.title}>{build.title}</h1>
          <p className={styles.copy}>{build.solution}</p>
          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <LuTarget className={styles.metaIcon} />
              <span className={styles.metaLabel}>Problem</span>
              <p className={styles.metaText}>{build.problem}</p>
            </div>
            <div className={styles.metaCard}>
              <LuLayers3 className={styles.metaIcon} />
              <span className={styles.metaLabel}>Scope</span>
              <p className={styles.metaText}>{build.scope}</p>
            </div>
            <div className={styles.metaCard}>
              <LuClock3 className={styles.metaIcon} />
              <span className={styles.metaLabel}>Timeline</span>
              <p className={styles.metaText}>{build.timeline}</p>
            </div>
          </div>
        </header>

        {proofStats.length > 0 && (
          <section className={styles.proofSection}>
            {proofStats.map((stat) => (
              <article key={stat.label} className={styles.proofCard}>
                <p className={styles.proofLabel}>{stat.label}</p>
                <p className={styles.proofValue}>{stat.value}</p>
                <p className={styles.proofDetail}>{stat.detail}</p>
              </article>
            ))}
          </section>
        )}

        <div className={styles.detailGrid}>
          <article className={styles.detailCard}>
            <p className={styles.sectionLabel}>What we built</p>
            <p className={styles.detailText}>{build.solution}</p>
          </article>

          <article className={styles.detailCard}>
            <p className={styles.sectionLabel}>Outcome</p>
            <ul className={styles.outcomeList}>
              {build.outcome.map((item) => (
                <li key={item} className={styles.outcomeItem}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={styles.detailCard}>
            <p className={styles.sectionLabel}>Best fit</p>
            <p className={styles.detailText}>{build.whoItHelps}</p>
          </article>
        </div>

        {workflowNodes.length > 0 && (
          <section className={styles.workflowSection}>
            <div className={styles.workflowHeader}>
              <p className={styles.eyebrow}>Workflow Diagram</p>
              <h2 className={styles.workflowTitle}>How this system runs in practice</h2>
            </div>

            <div className={styles.workflowGrid}>
              {workflowNodes.map((node, index) => (
                <article key={node.title} className={styles.workflowCard}>
                  <span className={styles.workflowStep}>{index + 1}</span>
                  <h3 className={styles.workflowCardTitle}>{node.title}</h3>
                  <p className={styles.workflowCardText}>{node.detail}</p>
                  {index < workflowNodes.length - 1 && <span className={styles.workflowConnector} aria-hidden="true" />}
                </article>
              ))}
            </div>
          </section>
        )}

        <section className={styles.tagSection}>
          {build.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </section>

        <section className={styles.ctaSection}>
          <div>
            <p className={styles.eyebrow}>Want something similar?</p>
            <h2 className={styles.ctaTitle}>We can build a small system like this for your team.</h2>
            <p className={styles.copy}>Send your workflow and we&apos;ll point you to the fastest starting point.</p>
            <ul className={styles.trustList}>
              <li className={styles.trustItem}>Response in under 24 hours on weekdays</li>
              <li className={styles.trustItem}>Clear scope, timeline, and rollout plan before build starts</li>
              <li className={styles.trustItem}>Best for teams with repeatable manual processes</li>
            </ul>
          </div>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Book a 15-min automation audit <LuArrowRight />
            </Link>
            <Link to="/sample" className={styles.secondaryButton}>
              Back to sample builds
            </Link>
          </div>
        </section>

        <section className={styles.caseNavSection}>
          {previousBuild ? (
            <Link to={`/sample/${previousBuild.slug}`} className={styles.caseNavButton}>
              <LuArrowLeft className={styles.buttonIcon} />
              <span>
                <span className={styles.caseNavLabel}>Previous sample</span>
                <span className={styles.caseNavTitle}>{previousBuild.title}</span>
              </span>
            </Link>
          ) : (
            <span className={styles.caseNavSpacer} aria-hidden="true" />
          )}

          {nextBuild ? (
            <Link to={`/sample/${nextBuild.slug}`} className={styles.caseNavButton}>
              <span>
                <span className={styles.caseNavLabel}>Next sample</span>
                <span className={styles.caseNavTitle}>{nextBuild.title}</span>
              </span>
              <LuArrowRight className={styles.buttonIcon} />
            </Link>
          ) : (
            <span className={styles.caseNavSpacer} aria-hidden="true" />
          )}
        </section>
      </div>
    </section>
  );
};