const apps = [
  {
    name: 'Ditto',
    icon: '/favicons/ditto.png',
    badge: 'Start Here',
    badgeClass: 'badge-start',
    desc: "A carnival, not a platform. Profile theming with custom colors, fonts & wallpapers. In-feed multiplayer games. Geocaching, book clubs, music playlists, polls, short videos, live streams \u2014 40+ content types. Bridges to Bluesky & Mastodon. No email needed.",
    bestFor: '\u{1FA90} Best for: Everyone who thinks the internet should be weird again',
    url: 'https://ditto.pub',
    linkText: 'ditto.pub \u2192',
  },
  {
    name: 'diVine',
    icon: '/favicons/divine.png',
    badge: 'Short Video',
    badgeClass: 'badge-video',
    desc: "Remember Vine? It\u2019s back \u2014 and you own it. Six-second loops, wild creativity, zero corporate overlords. The same swipe-up feed you\u2019re used to, but you keep your content and get tipped in real money for being fun.",
    bestFor: '\u2728 Best for: Creators, comedians & anyone who misses Vine',
    url: 'https://divine.video',
    linkText: 'divine.video \u2192',
  },
  {
    name: 'Tunestr',
    icon: '/favicons/tunestr.png',
    badge: 'Live Music',
    badgeClass: 'badge-video',
    desc: "Live music streaming from independent artists, bands, and venues \u2014 direct to you, zero middleman. Tip artists with zaps in real time. It\u2019s like being at the show without the $18 beer.",
    bestFor: '\u{1F3B5} Best for: Music lovers, indie fans, cancel-Spotify energy',
    url: 'https://tunestr.io',
    linkText: 'tunestr.io \u2192',
  },
  {
    name: 'Zap.cooking',
    icon: '/favicons/zapcooking.svg',
    badge: 'Recipes',
    badgeClass: 'badge-social',
    desc: "Recipes on Nostr \u2014 and people tip the chef. Share your best dishes, discover new meals, and send sats to the cooks who feed your soul. Food is universal and so is this.",
    bestFor: '\u{1F373} Best for: Foodies, home cooks, and anyone who eats',
    url: 'https://zap.cooking',
    linkText: 'zap.cooking \u2192',
  },
  {
    name: 'Nests',
    icon: '/favicons/nests.png',
    badge: 'Live Audio',
    badgeClass: 'badge-social',
    desc: "Live audio rooms where strangers become friends. Drop in, start talking, tip the speakers. It\u2019s the hangout energy the internet forgot it could have.",
    bestFor: '\u{1F399}\uFE0F Best for: Talkers, listeners, and anyone who misses real conversation',
    url: 'https://nostrnests.com',
    linkText: 'nostrnests.com \u2192',
  },
  {
    name: 'Treasures',
    icon: '/favicons/treasures.png',
    badge: 'Geocaching',
    badgeClass: 'badge-social',
    desc: "Real-world treasure hunts powered by Nostr. Hide a chest, post a clue, let the world find it \u2014 and zap the winner. It\u2019s the internet getting off the couch.",
    bestFor: '\u{1F5FA}\uFE0F Best for: Adventurers, explorers, and anyone who wants IRL fun',
    url: 'https://treasures.to',
    linkText: 'treasures.to \u2192',
  },
];

export function Apps() {
  return (
    <section id="apps">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Choose Your Vibe</span>
          <h2 className="section-title">
            One Account.<br />
            <span className="grad-text-alt">A Whole World of Apps.</span>
          </h2>
          <p className="section-sub">Pick the one that speaks to you. Switch anytime — your stuff comes with you.</p>
        </div>
        <div className="apps-grid reveal">
          {apps.map((app) => (
            <div className="app-card" key={app.name}>
              <div className="app-header">
                <div className="app-icon" style={{ background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
                  <img src={app.icon} width={48} height={48} style={{ borderRadius: '10px', objectFit: 'contain' }} alt={`${app.name} icon`} />
                </div>
                <h3>{app.name}</h3>
                <span className={`app-tag ${app.badgeClass}`}>{app.badge}</span>
              </div>
              <p>{app.desc}</p>
              <div className="best-for">{app.bestFor}</div>
              <a href={app.url} target="_blank" rel="noopener noreferrer" className="app-link">{app.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
