// Single source of truth for resume facts — see /src/assets/Mark Gachanja Ngari CV.pdf
export const profile = {
  name: 'Mark Gachanja Ngari',
  role: 'Full Stack Developer',
  location: 'Nairobi, Kenya',
  availability: 'Open to full-time roles, contracts & freelance projects',
  email: 'gachanjangarimark@gmail.com',
  phoneDisplay: '+254 768 212 567',
  phoneDial: '+254768212567',
  whatsappNumber: '254768212567',
  whatsappMessage: "Hi Mark, I found your portfolio and I'd like to talk about an opportunity.",
  github: 'https://github.com/Mgachanja',
  githubHandle: 'github.com/Mgachanja',
  linkedin: 'https://www.linkedin.com/in/ngari-mark-gachanja/',
  cvUrl: '/mark-gachanja-ngari-cv.pdf',
  siteUrl: 'https://gachanja.vercel.app',
  summary:
    "Full stack developer working across React, Next.js, and React Native on the frontend, and Node.js, Spring Boot, and Laravel on the backend. Experience includes migrating production systems from React 16 to React 18 and independently delivering full web and mobile e-commerce solutions.",
  aboutNote:
    'Strong collaborator in Agile environments, with a bias toward maintainable, real-world software over clever abstractions. Open to full-time roles, contract work, and freelance projects.',
};

export const quickFacts = [
  { label: 'Location', value: 'Nairobi, Kenya · remote, contract & freelance' },
  { label: 'Focus', value: 'React/Next.js frontends, Node.js & Spring Boot backends' },
  { label: 'Currently', value: 'Software Developer at Cenco Consultoria' },
  { label: 'Education', value: 'BSc Business IT, Dedan Kimathi University — final year, 2026' },
];

export const stack = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'PHP', 'HTML5', 'CSS3'],
  frameworks: ['React', 'Next.js', 'React Native (Expo)', 'Node.js (Express)', 'Spring Boot', 'Laravel'],
  tools: ['Git', 'GitHub', 'Figma'],
};

export const experience = {
  role: 'Software Developer',
  company: 'Cenco Consultoria',
  location: 'Remote',
  start: 'March 2024',
  end: 'Present',
  bullets: [
    'Collaborate with cross-functional teams to design, deliver, and maintain frontend features across multiple projects.',
    'Led and owned multiple React 16 → React 18 migrations for the organization, defining upgrade strategy and execution plans.',
    'Initiated and implemented proof-of-concepts to validate migration feasibility, resolve breaking changes, and confirm performance gains before full rollout.',
    'Actively participate in sprint planning, stand-ups, and Agile delivery cycles.',
  ],
};

export const project = {
  name: 'Arpella Stores',
  type: 'Freelance — Full Stack Developer',
  platforms: ['Web', 'iOS', 'Android'],
  description:
    'A mobile-first e-commerce platform spanning web, Android, and iOS, built with React and React Native so the same product catalog and checkout logic could ship to every surface from one codebase.',
  features: [
    'Product listings and search',
    'User authentication',
    'Checkout flow',
    'Push notifications',
  ],
  inProgress: ['Admin dashboard', 'Real-time order tracking'],
  screenshots: [
    'Product catalog',
    'M-Pesa checkout',
    'Location permission',
    'Order tracking',
    'Order details',
  ],
};

export const exploring = {
  name: 'Multi-Window Orchestration',
  status: 'Proof of concept',
  description:
    'An R&D proof-of-concept exploring resilient multi-window management in Chrome: process isolation across window instances, spatial distribution across multiple monitors, and a WebSocket heartbeat for fault detection between windows.',
  technologies: ['Vue.js 2', 'Window Management API', 'BroadcastChannel API', 'WebSocket'],
  challenges: [
    'Process independence across window instances',
    'Cross-monitor spatial distribution algorithm',
    'Heartbeat monitoring for fault detection',
    'Browser process management limitations',
  ],
  findings: [
    "Chrome's process allocation varies based on client hardware (RAM/CPU)",
    'Web applications cannot directly control Chrome process management',
    'Subdomain-based architecture provides guaranteed process isolation',
    'WebSocket communication enables reliable cross-window messaging',
  ],
  solution:
    'A multi-subdomain architecture with WebSocket-based communication, so each child window operates independently while staying in sync through a ping-pong heartbeat.',
};

export const education = {
  degree: 'BSc. Business Information Technology (BBIT)',
  school: 'Dedan Kimathi University of Technology',
  period: '2022 – 2026',
  note: 'Final semester',
};

export const faqs = [
  {
    question: 'Is Mark Gachanja Ngari available for freelance or contract work?',
    answer:
      'Yes. Mark is currently employed full-time at Cenco Consultoria and takes on freelance and contract projects alongside that role, in addition to being open to new full-time roles.',
  },
  {
    question: "What's Mark's tech stack?",
    answer:
      'React, Next.js, and React Native on the frontend; Node.js, Spring Boot, and Laravel on the backend. Also works with TypeScript, Java, and PHP.',
  },
  {
    question: 'Where is Mark based, and does he work remotely?',
    answer:
      'Nairobi, Kenya. He works remotely and is open to remote-first roles, international clients, and cross-timezone teams.',
  },
  {
    question: "What's Mark's experience with React version migrations?",
    answer:
      'He led multiple production React 16 to React 18 migrations at Cenco Consultoria — defining the upgrade strategy, validating breaking changes, and confirming performance gains before full rollout.',
  },
  {
    question: 'How do I contact Mark about a project?',
    answer:
      "WhatsApp is fastest: +254 768 212 567. Email works too: gachanjangarimark@gmail.com. There's no contact form — every contact link on this site opens a real conversation directly.",
  },
];
