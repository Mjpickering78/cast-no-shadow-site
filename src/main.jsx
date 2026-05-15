import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  // EDIT THESE LINKS WHEN YOUR LIVE SALES PAGES ARE READY
  const amazonLink = 'https://www.amazon.co.uk/';
  const bookByAppLink = 'https://bookbyapp.com/';

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="grain" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Growing up free meant growing up fast.</p>

            <div className="title-box">
              <h1>Cast No<br />Shadow</h1>
            </div>

            <p className="subtitle">A Memoir</p>

            <p className="lead">
              A raw, funny and brutal coming-of-age story between 1989 and 1996 — the last truly free decade. Before phones. A time when kids disappeared all day, lived by reputation, and learnt who they were through music, sex, fights, drugs and brotherhood.
            </p>

            <p className="supporting">
              When a group of Travellers move into the village, tensions erupt. One reckless act of violence triggers a chain of retaliation that drags Martin into a far darker world.
            </p>

            <div className="button-row">
              <a href={amazonLink} target="_blank" rel="noreferrer" className="button button-primary">Buy on Amazon</a>
              <a href={bookByAppLink} target="_blank" rel="noreferrer" className="button button-secondary">BookByApp</a>
            </div>
          </div>

          <div className="cover-stage" aria-label="Book cover image">
            <div className="cover-glow" />
            <div className="book-card">
              <img src="/cast-no-shadow-cover.png" alt="Cast No Shadow full book cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="panel">
          <h2>About the book</h2>
          <p>
            This is a violent ride through the chaos of 90s rave culture and the rise of the Oasis Generation. Gritty, wild and unfiltered, <strong>Cast No Shadow</strong> is a story of brotherhood, fear, music and the moment everything changes.
          </p>
          <blockquote>“We never expected to make it out. We never expected to regret it.”</blockquote>
        </div>

        <div className="panel">
          <h2>Links</h2>
          <p>
            These buttons are editable in <code>src/main.jsx</code>. Change the two link variables at the top of the file when your final Amazon and BookByApp pages are live.
          </p>
          <div className="link-list">
            <a href={amazonLink} target="_blank" rel="noreferrer">Amazon book sales <span>Edit link</span></a>
            <a href={bookByAppLink} target="_blank" rel="noreferrer">BookByApp <span>Edit link</span></a>
          </div>
        </div>
      </section>

      <footer>
        <p className="footer-tagline">Gritty. Wild. Unfiltered.</p>
        <p>Perfect for fans of Trainspotting and This Is England</p>
        <p className="copyright">© Martin J Pickering</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
