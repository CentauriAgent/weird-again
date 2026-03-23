import { Navbar } from './components/Navbar';
import { Floaters } from './components/Floaters';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { WhatIsNostr } from './components/WhatIsNostr';
import { Fun } from './components/Fun';
import { Apps } from './components/Apps';
import { GetStarted } from './components/GetStarted';
import { Zaps } from './components/Zaps';
import { FAQ } from './components/FAQ';
import { Movement } from './components/Movement';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Navbar />
      <Floaters />
      <Hero />
      <Problem />
      <WhatIsNostr />
      <Fun />
      <Apps />
      <GetStarted />
      <Zaps />
      <FAQ />
      <Movement />
      <CTA />
      <Footer />
    </>
  );
}
