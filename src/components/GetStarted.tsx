export function GetStarted() {
  return (
    <section id="start">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">
            You're <span className="grad-text">46 seconds</span> Away
          </h2>
          <p className="section-sub">Seriously. That's it. Three steps. No forms. No verification selfie. No waiting.</p>
        </div>
        <div className="steps reveal">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Pick an App</h3>
            <p>Go to <strong>ditto.pub</strong> (recommended) or explore any app below that fits your vibe.</p>
            <div className="step-detail">We recommend Ditto for beginners — it has everything ↑</div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Create Your Account</h3>
            <p>Tap "Sign Up." Choose a display name. That's literally it. No email. No phone number. You're done.</p>
            <div className="step-detail">The app creates your key automatically 🔑</div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Find Your People</h3>
            <p>Follow interesting accounts, explore communities, start posting. Your account works across every Nostr app.</p>
            <div className="step-detail">Welcome to the open web ✨</div>
          </div>
        </div>
        <div className="after-steps reveal">
          <p>⬆️ Back up your key when the app reminds you. It's your master password — save it somewhere safe.</p>
          <span className="time-badge">⏱ Average signup time: 46 seconds</span>
        </div>
      </div>
    </section>
  );
}
