import { useState, useEffect } from 'react';

const tabs = [
  { label: 'Why', href: '#problem', icon: '💡' },
  { label: 'What', href: '#what', icon: '🔑' },
  { label: 'Apps', href: '#apps', icon: '📱' },
  { label: 'Start', href: '#start', icon: '🚀' },
  { label: 'Join', href: 'https://ditto.pub', icon: '⚡', external: true },
];

export function MobileNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['problem', 'what', 'apps', 'start'];
    const handleScroll = () => {
      // Track active section
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mobile-nav">
      {tabs.map((tab) =>
        tab.external ? (
          <a
            key={tab.label}
            href={tab.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-tab mobile-nav-tab--cta"
          >
            <span className="mobile-nav-icon">{tab.icon}</span>
            <span className="mobile-nav-label">{tab.label}</span>
          </a>
        ) : (
          <a
            key={tab.label}
            href={tab.href}
            onClick={(e) => handleClick(e, tab.href)}
            className={`mobile-nav-tab ${activeSection === tab.href.slice(1) ? 'mobile-nav-tab--active' : ''}`}
          >
            <span className="mobile-nav-icon">{tab.icon}</span>
            <span className="mobile-nav-label">{tab.label}</span>
          </a>
        )
      )}
    </div>
  );
}
