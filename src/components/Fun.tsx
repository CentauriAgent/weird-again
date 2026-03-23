import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  { emoji: '\u{1FA90}', title: 'Profile Planets', desc: "Your profile is YOUR planet. Custom colors, fonts, wallpapers \u2014 even use any emoji as your avatar shape. \u{1F537}\u{1F338}\u2B50 Share themes with friends. MySpace energy on steroids." },
  { emoji: '\u{1F3AE}', title: 'In-Feed Games', desc: 'Play online multiplayer games directly in your feed. Someone shares a game, you click and play. No downloads, no app store, no leaving the app.' },
  { emoji: '\u{1F5FA}\uFE0F', title: 'Real-World Geocaching', desc: 'Treasure hunting built into your social feed. Create geocache listings, log your finds, explore IRL. Touch grass, but make it social.' },
  { emoji: '\u{1F3AC}', title: 'Short Videos (Vines)', desc: "TikTok-style short videos built for whimsical creativity. Weird skits, art process clips, chaotic little moments \u2014 post them anywhere, they show up everywhere. Your content, not the algorithm\u2019s." },
  { emoji: '\u{1F3B5}', title: 'Music, Pods & Voice', desc: 'Music playlists, podcast episodes, voice messages, live streams. Not just text \u2014 a whole multimedia world without a gatekeeper in sight.' },
  { emoji: '\u{1F4DA}', title: 'Niche Hobby Paradise', desc: 'Track your reading list, share MTG deck lists, post color mood palettes, create polls. Your weirdest hobby gets first-class treatment.' },
  { emoji: '\u{1F399}\uFE0F', title: 'Live Audio Rooms', desc: 'Drop into live audio spaces with your community \u2014 like Twitter Spaces but nobody owns the room. Be goofy. Be weird. Ramble about your niche obsession with strangers who get it. Chaotic. Beautiful.' },
  { emoji: '\u26A1', title: 'Instant Zap Tips', desc: 'Someone loves your post? They zap you real money. Instantly. No creator fund, no minimum followers, no platform taking 30%. Just humans tipping humans.' },
];

export function Fun() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const featRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="fun">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <span className="section-label">The Vibe</span>
          <h2 className="section-title">
            Remember When the Internet<br />
            <span className="grad-text">Was Weird and Wonderful?</span>
          </h2>
          <p className="section-sub">Before every platform became the same doom-scroll of ads and influencer content? That energy is back.</p>
        </div>
        <div className="fun-features reveal" ref={featRef}>
          {features.map((f) => (
            <div className="fun-feat" key={f.title}>
              <span className="emoji">{f.emoji}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="phone-mosaic reveal" ref={gridRef}>
          {/* Row 1 */}
          <div className="phone phone-1">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/divine-explore.png" alt="diVine short videos" loading="lazy" />
            </div>
            <span className="phone-label">diVine</span>
          </div>
          <div className="phone phone-2">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/ditto-mkfain.png" alt="Ditto custom profile" loading="lazy" />
            </div>
            <span className="phone-label">Ditto</span>
          </div>
          <div className="phone phone-3">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/treasures-geocache.png" alt="Treasures geocaching" loading="lazy" />
            </div>
            <span className="phone-label">Treasures</span>
          </div>
          {/* Row 2 */}
          <div className="phone phone-4">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/zapcooking-recipe.png" alt="Zap.cooking recipes" loading="lazy" />
            </div>
            <span className="phone-label">Zap.cooking</span>
          </div>
          <div className="phone phone-5">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/ditto-morgan.png" alt="Ditto themed profile" loading="lazy" />
            </div>
            <span className="phone-label">Ditto</span>
          </div>
          <div className="phone phone-6">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/tunestr-live.png" alt="Tunestr live music" loading="lazy" />
            </div>
            <span className="phone-label">Tunestr</span>
          </div>
          {/* Row 3 */}
          <div className="phone phone-7">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/ditto-profile.png" alt="Ditto profile view" loading="lazy" />
            </div>
            <span className="phone-label">Ditto</span>
          </div>
          <div className="phone phone-8">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/nests-rooms.png" alt="Nests live audio rooms" loading="lazy" />
            </div>
            <span className="phone-label">Nests</span>
          </div>
          <div className="phone phone-9">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img src="/screenshots/ditto-alex.png" alt="Ditto developer profile" loading="lazy" />
            </div>
            <span className="phone-label">Ditto</span>
          </div>
        </div>
        <p className="vibe-caption reveal">weird. wonderful. completely yours. 💜</p>
      </div>
    </section>
  );
}
