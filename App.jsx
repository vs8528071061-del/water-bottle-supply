import React from 'react';
import './App.css';

export default function App() {
  const cardsData = [
    {
      number: '01 / BOLD',
      title: 'Big attitude.',
      description: 'A confident identity that refuses to blend into the background.'
    },
    {
      number: '02 / FRESH',
      title: 'Made for now.',
      description: 'Bright, energetic and easy to remember.'
    },
    {
      number: '03 / LOCAL',
      title: 'From Bhopal.',
      description: 'Proudly rooted in Madhya Pradesh, with bigger ambitions.'
    }
  ];

  const factsData = [
    { title: '9T9 EMPIRE', subtitle: 'Brand identity' },
    { title: 'BHOPAL', subtitle: 'Home base' },
    { title: '24/7', subtitle: 'Keep the energy going' },
    { title: '★', subtitle: 'Built to stand out' }
  ];

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <a className="logo" href="#">
          <img src="logo-dark.png" alt="9T9 EMPIRE" />
          <span>9T9 EMPIRE</span>
        </a>
        <div className="links">
          <a href="#story">STORY</a>
          <a href="#why">WHY US</a>
          <a href="#manufacturing">MANUFACTURING</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="tag">BHOPAL • MADHYA PRADESH</div>
          <h1 className="hero-title">
            Drink <span>Bold.</span><br />
            Live<br />
            9T9 EMPIRE.
          </h1>
          <p className="hero-desc">
            9T9 EMPIRE brings a fresh, energetic drink experience with a bold
            attitude. Born in Bhopal, made for moments that deserve more flavour.
          </p>
          <div className="buttons">
            <a className="btn primary" href="#contact">GET IN TOUCH</a>
            <a
              className="btn white"
              href="https://www.instagram.com/drink9t9?igsi=MXFwazJmbzd6dGozcg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
            <a
              className="btn whatsapp"
              href="https://wa.me/919232795322?text=Hello%209T9%20EMPIRE%2C%20I%20want%20to%20shop."
              target="_blank"
              rel="noopener noreferrer"
            >
              SHOP NOW ON WHATSAPP ↗
            </a>
          </div>
        </div>

        {/* Visual Can Art */}
        <div className="visual">
          <div className="circle">
            <div className="can">
              <img src="logo-white.png" alt="9T9 EMPIRE" className="can-logo" />
            </div>
          </div>
          <div className="badge b1">
            REFRESH<br />REPEAT.
          </div>
          <div className="badge b2">
            BORN IN<br />BHOPAL ★
          </div>
        </div>
      </header>

      {/* Story / Energy Section */}
      <section id="story" className="section-story">
        <div className="head">
          <h2>OUR<br />ENERGY.</h2>
          <p>
            9T9 EMPIRE is a modern local brand with a big personality — designed to
            stand out, connect and keep the energy moving.
          </p>
        </div>
        <div className="cards">
          {cardsData.map((card, index) => (
            <article key={index} className="card">
              <b>{card.number}</b>
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About / Why Us Section */}
      <section className="about" id="why">
        <div>
          <h2>MORE THAN<br />A <span>DRINK.</span></h2>
          <p>
            9T9 EMPIRE is a statement: stay curious, stay energetic, and make every
            moment count.
          </p>
        </div>
        <div className="facts">
          {factsData.map((fact, index) => (
            <div key={index} className="fact">
              <strong>{fact.title}</strong>
              <small>{fact.subtitle}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Details Section */}
      <section className="mfg-section" id="manufacturing">
        <div className="head">
          <h2>MANUFACTURING<br />DETAILS.</h2>
          <p>
            Official compliance, production unit, and registered business information for 9T9 EMPIRE.
          </p>
        </div>
        <div className="mfg-card">
          <div className="mfg-header">
            <img src="logo-brand.png" alt="9T9 EMPIRE Logo" style={{ height: '54px', width: 'auto', marginBottom: '12px' }} />
            <div className="tag" style={{ marginBottom: '12px' }}>OFFICIAL UNIT &amp; LICENSE</div>
            <h3 className="mfg-title">9T9 EMPIRE</h3>
            <div className="mfg-lic">
              <span className="lic-label">LIC NO :</span>
              <span className="lic-num">11425010000456</span>
            </div>
          </div>
          <div className="mfg-info-grid">
            <div className="mfg-info-item">
              <span className="mfg-info-label">MANUFACTURING ADDRESS</span>
              <p className="mfg-info-text">
                H.NO.03, GALI.NO.01 Navbahar Colony,<br />
                Chhola Road, Bhopal, Madhya Pradesh - 462001
              </p>
            </div>
            <div className="mfg-info-item">
              <span className="mfg-info-label">OFFICIAL EMAIL</span>
              <p className="mfg-info-text">
                <a href="mailto:9T9empire2762@gmail.com" className="mfg-email-link">
                  9T9empire2762@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>
          LET'S MAKE<br />IT <span>9T9 EMPIRE.</span>
        </h2>
        <p>
          For enquiries, collaborations and business opportunities, contact the 9T9
          EMPIRE team.
        </p>
        <div className="buttons center-buttons">
          <a className="btn primary" href="mailto:9t9empire2762@gmail.com">
            9t9empire2762@gmail.com
          </a>
          <a
            className="btn white"
            href="https://www.instagram.com/drink9t9?igsi=MXFwazJmbzd6dGozcg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            @drink9t9 ON INSTAGRAM
          </a>
          <a
            className="btn whatsapp"
            href="https://wa.me/919232795322?text=Hello%209T9%20EMPIRE%2C%20I%20want%20to%20shop."
            target="_blank"
            rel="noopener noreferrer"
          >
            SHOP NOW ON WHATSAPP ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <img src="logo-white.png" alt="9T9 EMPIRE Logo" style={{ height: '36px', width: 'auto' }} />
          <span>© {new Date().getFullYear()} 9T9 EMPIRE. ALL RIGHTS RESERVED.</span>
        </div>
        <div>
          H.NO 03, GALI NO 01, NAVBAHAR COLONY, CHHOLA ROAD, BHOPAL, MADHYA PRADESH
          462001
        </div>
      </footer>
    </div>
  );
}
