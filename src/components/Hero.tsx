import { useEffect, useRef } from 'react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    let animationId: number;

    function resize() {
      w = c!.width = window.innerWidth;
      h = c!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const orbs = [
      { x: 0.3, y: 0.4, r: 300, c1: 'rgba(124,58,237,.3)', c2: 'rgba(124,58,237,0)', vx: 0.0003, vy: 0.0004 },
      { x: 0.7, y: 0.3, r: 250, c1: 'rgba(236,72,153,.25)', c2: 'rgba(236,72,153,0)', vx: -0.0004, vy: 0.0003 },
      { x: 0.5, y: 0.7, r: 350, c1: 'rgba(6,182,212,.2)', c2: 'rgba(6,182,212,0)', vx: 0.0002, vy: -0.0003 },
      { x: 0.2, y: 0.8, r: 200, c1: 'rgba(251,191,36,.15)', c2: 'rgba(251,191,36,0)', vx: 0.0005, vy: 0.0002 },
    ];

    let t = 0;
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      t++;
      orbs.forEach((o) => {
        const cx = w * (o.x + Math.sin(t * o.vx * 10) * 0.15);
        const cy = h * (o.y + Math.cos(t * o.vy * 10) * 0.15);
        const g = ctx!.createRadialGradient(cx, cy, 0, cx, cy, o.r * (w / 1200));
        g.addColorStop(0, o.c1);
        g.addColorStop(1, o.c2);
        ctx!.fillStyle = g;
        ctx!.fillRect(0, 0, w, h);
      });
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector('#start');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero">
      <div className="hero-bg">
        <canvas ref={canvasRef} id="hero-canvas"></canvas>
      </div>
      <div className="hero-content">
        <div className="hero-badges">
          <span className="hero-badge">✨ No ads</span>
          <span className="hero-badge">🔒 No tracking</span>
          <span className="hero-badge">💜 No corporate overlords</span>
        </div>
        <h1><span className="grad-text">The Internet Remembered How to Be Fun</span></h1>
        <p>Social media where you actually own your account. One login, every app. And people can tip you for being <s>cool</s> weird.</p>
        <a href="#start" className="btn btn-primary" onClick={handleClick}>Find Your People →</a>
      </div>
      <div className="scroll-hint">↓</div>
    </section>
  );
}
