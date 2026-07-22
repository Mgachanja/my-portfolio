// Hand-rolled icon set — consistent 1.75px stroke, 24px grid, no external icon library.
const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const WhatsAppIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 21l1.65-4.95A8.5 8.5 0 1 1 8.9 19.4L3 21z" />
    <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .5 0 1-.4.9-.9l-.3-1.4a.9.9 0 0 0-1-.7l-1.2.2a4.8 4.8 0 0 1-2.6-2.6l.2-1.2a.9.9 0 0 0-.7-1l-1.4-.3c-.5-.1-.9.4-.9.9z" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.5-.4c1 .3 2.1.5 3.2.5a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5C10.9 21.5 2.5 13.1 2.5 3.5A1.5 1.5 0 0 1 4 2h3.2a1.5 1.5 0 0 1 1.5 1.5c0 1.1.2 2.2.5 3.2a1.5 1.5 0 0 1-.4 1.5L6.6 10.8z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
    <path d="M3.5 6.5l8 6.2 8-6.2" />
  </svg>
);

export const GitHubIcon = (props) => (
  <svg {...base} {...props} strokeWidth={1.5}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.9 5.4 3.2 5.4 3.2a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const LinkedInIcon = (props) => (
  <svg {...base} {...props} fill="currentColor" stroke="none">
    <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="7.2" cy="7.6" r="1.15" />
    <rect x="6.2" y="10.3" width="2" height="7.2" />
    <path d="M10.7 10.3h2v1.1c.5-.7 1.3-1.3 2.6-1.3 2 0 3 1.3 3 3.7v4.7h-2v-4.2c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8v4.3h-2v-7.2z" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

export const ArrowUpIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
  </svg>
);

export const CopyIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
    <path d="M15.5 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12.5l5 5L20 7" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
