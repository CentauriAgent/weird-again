export function CTA() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="cta">
      <div className="container reveal">
        <h2>
          <span className="grad-text">Ready?</span>
          <br />
          It Takes 46 seconds.
        </h2>
        <p>No email. No phone number. Just you and the open web.</p>
        <div className="cta-buttons">
          <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Join on Ditto →
          </a>
          <a href="#apps" className="btn btn-secondary" onClick={(e) => handleAnchorClick(e, '#apps')}>
            Browse All Apps
          </a>
        </div>
        <div className="cta-links">
          <a href="https://zap.cooking" target="_blank" rel="noopener noreferrer">Zap.cooking</a>
          <a href="https://tunestr.io" target="_blank" rel="noopener noreferrer">Tunestr</a>
          <a href="https://nostrnests.com" target="_blank" rel="noopener noreferrer">Nests</a>
          <a href="https://treasures.to" target="_blank" rel="noopener noreferrer">Treasures</a>
          <a href="https://grownostr.org" target="_blank" rel="noopener noreferrer">Grow Nostr</a>
        </div>
      </div>
    </section>
  );
}
