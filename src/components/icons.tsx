import React from 'react';

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const UploadIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

export const BrainIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3.75 3.75 0 003.75-3.75H8.25A3.75 3.75 0 0012 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.62 16.14A9 9 0 0012 21a9 9 0 007.38-4.86" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.38 7.86A9 9 0 0012 3a9 9 0 00-7.38 4.86" />
    </svg>
);


export const ChartBarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

export const LightningBoltIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.21,0,6.32,11.53h5.9L8.13,24,19.68,8.47H13.79Z" />
  </svg>
);

export const WaveformIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" d="M6 14v-4" />
        <path strokeLinecap="round" d="M9 17v-10" />
        <path strokeLinecap="round" d="M12 15v-6" />
        <path strokeLinecap="round" d="M15 17v-10" />
        <path strokeLinecap="round" d="M18 14v-4" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

export const ArrowPathIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M16 5l4 4-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 15H4M8 19l-4-4 4-4" />
    </svg>
);

export const PlayButtonIcon: React.FC<IconProps> = (props) => (
  <a href="#" className="inline-block group" {...props}>
    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-105 duration-300">
        <circle cx="56" cy="56" r="56" fill="#D4F33D"/>
        <circle cx="56" cy="56" r="45" fill="#E4F64A"/>
        <path d="M72 56L48 69.8564L48 42.1436L72 56Z" fill="#111827" className="transition-transform group-hover:scale-110 origin-center duration-300"/>
    </svg>
  </a>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="10" cy="10" r="10" fill="#E4F64A"/>
        <path d="M14.6668 6.5L8.25016 12.9167L5.3335 10" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const XCircleIcon: React.FC<IconProps> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="10" cy="10" r="9.5" stroke="#4B5563" strokeOpacity="0.7"/>
        <path d="M13.5355 6.46448L6.46448 13.5355M6.46448 6.46448L13.5355 13.5355" stroke="#4B5563" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.681 3.462a1 1 0 00.951.692h3.632c.742 0 1.044.973.498 1.416l-2.934 2.14a1 1 0 00-.364 1.118l1.11 3.633c.224.73-.585 1.34-1.22.926l-3.1-1.921a1 1 0 00-1.176 0l-3.1 1.921c-.635.414-1.443-.196-1.22-.926l1.11-3.633a1 1 0 00-.364-1.118L2.24 8.454c-.546-.443-.244-1.416.498-1.416h3.632a1 1 0 00.951-.692l1.681-3.462z" clipRule="evenodd" />
    </svg>
);

export const BulletIcon: React.FC<IconProps> = (props) => (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="4" fill="#111827"/>
    </svg>
);

export const EmailIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
        <path d="M3 5h18v14H3z" />
        <path d="M3 5l9 7 9-7" />
    </svg>
);

export const TikTokIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.46-2.95-1.63-2-2.42-4.5-2.2-7.01.21-2.46 1.3-4.79 3.17-6.27 1.15-.92 2.5-1.47 3.9-1.72.01 2.9.01 5.79-.01 8.68-.21 1.05-.63 2.05-1.25 2.91-.93 1.28-2.48 1.96-4.01 1.82-1.55-.14-2.94-1.06-3.83-2.24-.88-1.18-1.25-2.6-1.1-4.04.14-1.44.83-2.83 1.92-3.88 1.06-1.02 2.36-1.67 3.79-1.81.03-3.09.02-6.18.02-9.28z"></path>
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);