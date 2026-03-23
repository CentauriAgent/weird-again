export function WhatIsNostr() {
  return (
    <section id="what">
      <div className="container">
        <div className="reveal">
          <span className="section-label">The Fix</span>
          <h2 className="section-title">
            A New Way to Be Online<br />
            <span className="grad-text-alt">Where You're in Control</span>
          </h2>
          <p className="section-sub">Nostr is social media that actually respects you. And it works like something you already know.</p>
        </div>
        <div className="email-analogy reveal">
          <p>
            Think about <strong>email</strong>. You can use Gmail, Yahoo, Outlook — they all work together. Someone on Gmail can email someone on Yahoo. You can switch apps and keep talking to the same people.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Now imagine if social media worked the same way.</strong> That's Nostr. One account. Every app. Your stuff goes with you.
          </p>
        </div>
        <div className="value-cards reveal">
          <div className="value-card">
            <div className="v-icon">🎨</div>
            <h3>Own Your Content</h3>
            <p>Your posts, photos, music, videos — they belong to YOU. If an app shuts down, your stuff doesn't disappear. You take it with you.</p>
          </div>
          <div className="value-card">
            <div className="v-icon">🪪</div>
            <h3>Own Your Identity</h3>
            <p>One login works everywhere. No email required. No phone number. No one can suspend you, shadowban you, or delete you. Ever.</p>
          </div>
          <div className="value-card">
            <div className="v-icon">👁️</div>
            <h3>Own Your Attention</h3>
            <p>No addictive algorithm force-feeding you rage bait. No ads disguised as content. YOU decide what you see. What a concept.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
