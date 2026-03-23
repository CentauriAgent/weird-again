export function Zaps() {
  return (
    <section id="zaps">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Get Paid</span>
          <h2 className="section-title">
            Zaps ⚡ <span className="grad-text">Get Tipped For Being You</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            No middleman taking 30-50%. No "creator fund." Real tips from real humans who like your stuff.
          </p>
        </div>
        <div className="zap-flow reveal">
          <div className="zap-step">
            <span className="z-icon">📝</span>
            <p>You post something cool</p>
          </div>
          <span className="zap-arrow">→</span>
          <div className="zap-step">
            <span className="z-icon">😍</span>
            <p>Someone loves it</p>
          </div>
          <span className="zap-arrow">→</span>
          <div className="zap-step">
            <span className="z-icon">⚡</span>
            <p>They zap you a tip</p>
          </div>
          <span className="zap-arrow">→</span>
          <div className="zap-step">
            <span className="z-icon">💰</span>
            <p>You get real money. Instantly.</p>
          </div>
        </div>
        <p className="zap-highlight reveal">
          That's it. Someone likes your post, they send you a tip. No platform taking a cut. No minimum followers. Just value flowing directly between people. ⚡
        </p>
        <p className="zap-highlight reveal" style={{ marginTop: '1.5rem', color: 'var(--text-dim)', fontSize: '1.05rem' }}>
          And if Bitcoin isn't your thing yet, no worries — most apps make it easy to cash out your tips straight to your bank account or local currency. Pay rent. Buy groceries. Your call.
        </p>
      </div>
    </section>
  );
}
