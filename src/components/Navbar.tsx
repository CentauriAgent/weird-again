import { useNavScroll } from '../hooks/useNavScroll';

export function Navbar() {
  useNavScroll();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav id="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="dot"></span> Weird Again
        </div>
        <div className="nav-links">
          <a href="#problem" onClick={(e) => handleAnchorClick(e, '#problem')}>Why?</a>
          <a href="#what" onClick={(e) => handleAnchorClick(e, '#what')}>What</a>
          <a href="#apps" onClick={(e) => handleAnchorClick(e, '#apps')}>Apps</a>
          <a href="#start" onClick={(e) => handleAnchorClick(e, '#start')}>Start</a>
          <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="nav-cta">Join Free →</a>
        </div>
      </div>
    </nav>
  );
}
