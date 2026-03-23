import { useState } from 'react';

const faqData = [
  {
    question: 'Is it just for Bitcoin people?',
    answer:
      "Nope. Nostr is for everyone — artists, musicians, writers, memers, photographers, anyone who wants to be online without being a product. Bitcoin tips are optional. You can use Nostr forever without touching Bitcoin.",
  },
  {
    question: 'Is it hard to use?',
    answer:
      'If you can sign up for Instagram, you can sign up for Nostr. Most apps take under a minute. No technical knowledge needed. It just... works.',
  },
  {
    question: 'Will my friends be there?',
    answer:
      "Honest answer: probably not yet. But the people who ARE there? They're the ones who get it. Bring a friend along — that's how it grows. And Ditto bridges to Bluesky and Mastodon, so you can still talk to everyone.",
  },
  {
    question: 'Is it another Web3/crypto thing?',
    answer:
      'Absolutely not. No tokens, no NFTs, no gas fees, no speculation. Nostr is free to use. No one is trying to sell you anything. It\'s just good software built in the open.',
  },
  {
    question: 'What if an app I use shuts down?',
    answer:
      "You switch to another one. Your account, your posts, your followers — they all come with you. It's like switching email apps. Your messages don't disappear because you went from Gmail to Outlook.",
  },
  {
    question: 'What makes it different from Bluesky?',
    answer:
      "Bluesky is a company. Nostr is a system — like email. Nobody owns it. When Bluesky gets bought or goes public, the incentives will change. Nostr can't be bought because nobody controls it.",
  },
  {
    question: 'What makes Nostr different from Mastodon?',
    answer:
      "Great question. Mastodon is federated — your account lives on a server someone else runs. If that server shuts down, you lose your followers and have to start over. On Nostr, your identity is YOUR keypair. No server owns you. You can switch apps, switch relays, go anywhere — and your followers, your posts, your identity come with you. Mastodon also requires a server admin to approve your account. Nostr has no admins. No one can delete your account. It's not even possible.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Real Talk</span>
          <h2 className="section-title">
            But Wait, <span className="grad-text">Is It...</span>
          </h2>
        </div>
        <div className="faq-grid reveal">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item${openIndex === index ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => handleToggle(index)}>
                {item.question}
              </div>
              <div className="faq-a">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
