export type SampleBuild = {
  slug: string;
  title: string;
  type: string;
  problem: string;
  solution: string;
  outcome: string[];
  tags: string[];
  scope: string;
  timeline: string;
  whoItHelps: string;
};

export const sampleBuilds: SampleBuild[] = [
  {
    slug: 'virtuecase',
    title: 'VirtueCase',
    type: 'Internal Operations System',
    problem: 'Legal and compliance cases are difficult to track manually across teams and departments.',
    solution: 'A structured case management system for organizing, tracking, and managing NBCRFLI-related workflows.',
    outcome: [
      'Centralized case tracking',
      'Improved visibility across legal processes',
      'Reduced manual admin work',
    ],
    tags: ['Case tracking', 'Workflow visibility', 'Admin reduction'],
    scope: 'Internal operations system',
    timeline: '10-14 days',
    whoItHelps: 'Legal and compliance teams that need clean case visibility.',
  },
  {
    slug: 'annotate',
    title: 'Annotate',
    type: 'Collaboration Tool',
    problem: 'Teams struggle to collaborate on documents and give structured feedback in real time.',
    solution: 'A web-based annotation tool for viewing documents and adding collaborative comments.',
    outcome: [
      'Faster team feedback cycles',
      'Clear document collaboration',
      'Reduced email-based review chaos',
    ],
    tags: ['Document review', 'Team comments', 'Real-time feedback'],
    scope: 'Collaboration tool',
    timeline: '5-8 days',
    whoItHelps: 'Teams that review documents and need structured feedback.',
  },
  {
    slug: 'decision-tracker',
    title: 'Decision Tracker',
    type: 'Productivity / Workflow System',
    problem: 'Important meeting decisions get lost in chat apps and are not documented properly.',
    solution: 'A decision tracking system integrated with team communication workflows.',
    outcome: [
      'Every decision recorded and searchable',
      'Clear accountability in projects',
      'Better project follow-through',
    ],
    tags: ['Decision log', 'Searchable records', 'Project follow-through'],
    scope: 'Productivity system',
    timeline: '7-10 days',
    whoItHelps: 'Project teams that need a better record of decisions.',
  },
  {
    slug: 'court-booking-system',
    title: 'Court Booking System',
    type: 'Booking System',
    problem: 'Sports facilities need a simple way to manage bookings and availability.',
    solution: 'A court booking system for scheduling and managing sports facility reservations.',
    outcome: [
      'Reduced double bookings',
      'Automated scheduling system',
      'Easy user booking experience',
    ],
    tags: ['Scheduling', 'Availability', 'Booking management'],
    scope: 'Booking system',
    timeline: '2-3 weeks',
    whoItHelps: 'Facility managers who need simple booking control.',
  },
  {
    slug: 'mix-to-haven',
    title: 'Mix-To-Haven',
    type: 'Premium Mobile Bar Service Website',
    problem: 'Event clients need a premium, trustworthy way to explore packages and book mobile bar services without back-and-forth friction.',
    solution: 'A premium brand website for Mix to Haven, positioned around luxury service messaging and a smooth booking journey that elevates every celebration.',
    outcome: [
      'Clear package and event-service positioning',
      'Stronger quote and booking intent flow',
      'Premium digital presence for Gauteng events',
    ],
    tags: ['Mobile bar service', 'Event bookings', 'Premium brand positioning'],
    scope: 'Service brand website',
    timeline: '7-12 days',
    whoItHelps: 'Hosts, planners, and event teams looking for premium cocktail experiences across Gauteng.',
  },
];

export const getSampleBuildBySlug = (slug: string | undefined) =>
  sampleBuilds.find((build) => build.slug === slug);