import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Scroll reveal: waits for React to finish rendering, then observes all .reveal elements.
// MutationObserver catches elements as they appear; IntersectionObserver fades them in on scroll.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

const mutationObserver = new MutationObserver(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    revealObserver.observe(el);
  });
});

mutationObserver.observe(document.getElementById('root')!, {
  childList: true,
  subtree: true,
});
