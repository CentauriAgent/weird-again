export function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <div className="reveal">
          <span className="section-label">The Problem</span>
          <h2 className="section-title">
            You Already Know<br />
            <span className="grad-text">Something Is Wrong</span>
          </h2>
          <p className="section-sub">The internet used to be weird and wonderful. Now it's just... ads and algorithms.</p>
        </div>
        <div className="problem-grid reveal">
          <div className="problem-card">
            <div className="icon">👁️</div>
            <h3>Your algorithm is lying to you</h3>
            <p>Your followers don't even see your posts unless you pay to boost them. You have 2,000 followers and get 20 likes. Sound familiar?</p>
          </div>
          <div className="problem-card">
            <div className="icon">🔒</div>
            <h3>You're trapped</h3>
            <p>Your Instagram followers can't see your tweets. Your TikTok audience doesn't exist on YouTube. Every app is a walled garden.</p>
          </div>
          <div className="problem-card">
            <div className="icon">🎯</div>
            <h3>You are the product</h3>
            <p>Your data. Your attention. Your behavior. All sold to the highest bidder. You're not the customer — you're the inventory.</p>
          </div>
          <div className="problem-card">
            <div className="icon">💀</div>
            <h3>They can delete you</h3>
            <p>One rule change. One algorithm update. One "community guidelines violation." Years of your content — gone. Just like that.</p>
          </div>
        </div>
        <div className="stat-row reveal">
          <div className="stat">
            <div className="num">50%</div>
            <div className="label">of Americans cut back on social media in 2025</div>
          </div>
          <div className="stat">
            <div className="num">38%</div>
            <div className="label">made mental health their 2026 New Year's resolution</div>
          </div>
          <div className="stat">
            <div className="num">Gen-Z</div>
            <div className="label">wants to create more and scroll less</div>
          </div>
        </div>
        <div className="quote-block reveal">
          "The juice is no longer worth the squeeze. People are performing labor for an algorithm that gives them nothing in return."
          <cite>— Joel Blackstock, Licensed Clinical Social Worker</cite>
        </div>
      </div>
    </section>
  );
}
