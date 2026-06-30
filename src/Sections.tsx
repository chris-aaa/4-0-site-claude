import { useState } from "react";
import { AAALogo, ArrowRight, Check } from "./Icons";

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <AAALogo height={44} />
          <h1>
            AAA membership goes beyond Roadside
          </h1>
          <p>It's peace of mind on the road, at home, and everywhere in between.</p>
          <div className="hero-actions">
            <button className="btn btn-primary">Join now for $59</button>
            <button className="btn btn-outline">Learn more</button>
          </div>
        </div>
        <div className="hero-image" aria-hidden>
          <img src="/figma/hero-family.png" alt="" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Members get more ---------------- */
const MEMBER_CARDS = [
  {
    tag: "LEGOLAND® Resorts",
    img: "/figma/legoland.jpg",
    title: "Legoland Resorts",
    body: "Save up to 55% on select tickets and get one day of free parking. Eligible at LEGOLAND California, Florida, and New York Resorts.",
    foot: "Offer valid for park visits through December 31, 2025.",
    cta: "Buy tickets",
  },
  {
    tag: "Travel",
    img: "/figma/travel-save.jpg",
    title: "Travel savings & resources",
    body: "AAA helps you find your perfect trip and save.",
    list: ["Travel deals and special offers", "Maps and TourBooks", "Road trip resources", "Expedited passport renewal"],
    cta: "Plan your next trip",
  },
  {
    tag: "Automotive",
    img: "/figma/automotive.jpg",
    title: "Automotive services",
    body: "AAA is your trusted automotive resource.",
    list: ["Approved Auto Repair", "AAA Car Buying Service", "AAA Mobile Battery Service", "AAA driving school"],
    cta: "Explore auto services",
  },
];

export function MembersGetMore() {
  return (
    <section className="section members">
      <div className="container">
        <div className="section-head center">
          <span className="kicker">AAA members get more</span>
          <h2>AAA members get more.</h2>
          <p>
            With 24/7 roadside assistance, discounts, travel planning, and more, your membership never
            stops working for you.
          </p>
        </div>

        <div className="member-grid">
          {MEMBER_CARDS.map((c) => (
            <article className="member-card" key={c.title}>
              <div className="member-img">
                <img src={c.img} alt="" />
                <span className="member-tag">{c.tag}</span>
              </div>
              <div className="member-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                {c.list && (
                  <ul className="ticks">
                    {c.list.map((l) => (
                      <li key={l}>
                        <Check size={16} /> {l}
                      </li>
                    ))}
                  </ul>
                )}
                {c.foot && <p className="member-foot">{c.foot}</p>}
                <button className="btn btn-outline member-cta">{c.cta}</button>
              </div>
            </article>
          ))}
        </div>

        <div className="banner-row">
          <div className="promo-banner green">
            <strong>Safeguard your identity with ProtectMyID®</strong>
            <span>Credit monitoring, dark web surveillance, and real-time alerts.</span>
            <a href="#" className="promo-link">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
          <div className="promo-banner blue">
            <strong>Cash back on every purchase, everywhere</strong>
            <span>With the AAA Travel Advantage Visa Signature® Card.</span>
            <a href="#" className="promo-link">
              Apply today <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Insurance ---------------- */
const INSURANCE = [
  {
    img: "/figma/ins-auto.jpg",
    title: "Auto insurance",
    body: "You could save hundreds by switching to AAA car insurance. Enjoy savings, service, and security.",
    cta: "Get an auto insurance quote",
  },
  {
    img: "/figma/ins-home.jpg",
    title: "Homeowners insurance",
    body: "With homeowners insurance by AAA you'll get great coverage with competitive rates.",
    cta: "Get a home insurance quote",
  },
  {
    img: "/figma/ins-life.jpg",
    title: "Life insurance",
    body: "AAA offers an array of life insurance products to meet your needs in every stage of life.",
    cta: "Get a life insurance quote",
  },
];

export function Insurance() {
  return (
    <section className="section insurance">
      <div className="container">
        <div className="section-head">
          <span className="kicker">🛡️ Insurance</span>
          <div className="head-row">
            <h2>Auto, home &amp; life insurance</h2>
            <button className="btn btn-outline">Explore AAA insurance</button>
          </div>
        </div>
        <div className="insurance-grid">
          {INSURANCE.map((c) => (
            <article className="insurance-card" key={c.title}>
              <img src={c.img} alt="" />
              <div className="insurance-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <a href="#" className="promo-link">
                  {c.cta} <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Insider ---------------- */
const INSIDER = [
  {
    img: "/figma/insider-intl.jpg",
    title: "AAA's top international travel destinations for 2026",
    body: "From the canals of Venice to the beaches of Bali — our most-booked destinations this year.",
  },
  {
    img: "/figma/insider-max.jpg",
    title: "How to maximize your AAA membership",
    body: "Lesser-known perks and discounts that pay for your membership many times over.",
  },
  {
    img: "/figma/insider-us.jpg",
    title: "AAA's top U.S. travel destinations for 2026",
    body: "Plan the perfect road trip with our list of must-visit American getaways.",
  },
];

export function Insider() {
  return (
    <section className="section insider">
      <div className="container">
        <div className="section-head">
          <span className="kicker">💡 AAA Insider</span>
          <div className="head-row">
            <h2>Get informed &amp; inspired with AAA Insider</h2>
            <button className="btn btn-outline">Browse all articles</button>
          </div>
        </div>
        <div className="insider-grid">
          {INSIDER.map((c) => (
            <article className="insider-card" key={c.title}>
              <img src={c.img} alt="" />
              <div className="insider-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <a href="#" className="promo-link">
                  Read article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Join CTA ---------------- */
export function JoinCTA() {
  return (
    <section className="join">
      <div className="container join-inner">
        <div className="join-copy">
          <h2>Join the 17+ million members who use AAA everyday</h2>
          <p>The peace of mind all our members enjoy is for everyone, everywhere in between.</p>
          <div className="hero-actions">
            <button className="btn btn-primary">Learn more</button>
            <button className="btn btn-outline">Become a member today</button>
          </div>
        </div>
        <div className="join-collage" aria-hidden>
          <img src="/figma/join-1.jpg" alt="" />
          <img src="/figma/join-2.jpg" alt="" />
          <img src="/figma/join-3.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services (interactive selects) ---------------- */
export function Services() {
  const [branch, setBranch] = useState("California");
  const [city, setCity] = useState("Alhambra");
  return (
    <section className="section services">
      <div className="container">
        <div className="section-head">
          <span className="kicker">📍 Locations & account</span>
          <h2>Our services in-branch, online &amp; on the app</h2>
        </div>
        <div className="services-grid">
          <div className="service-panel">
            <h3>Find a AAA branch near you</h3>
            <label className="select">
              <span>State</span>
              <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                {["California", "Nevada", "Arizona", "Texas"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="select">
              <span>City</span>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                {["Alhambra", "Los Angeles", "San Diego", "Sacramento"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <button className="btn btn-primary">Search locations</button>
          </div>
          <div className="service-panel">
            <h3>Manage your account online</h3>
            <ul className="ticks">
              <li><Check size={16} /> View &amp; pay your bill</li>
              <li><Check size={16} /> Manage membership renewal</li>
              <li><Check size={16} /> File &amp; track insurance claims</li>
              <li><Check size={16} /> Add or remove family members</li>
            </ul>
            <button className="btn btn-outline">Manage account</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
const FOOTER_COLS = [
  {
    title: "Legal",
    links: ["Privacy", "Do not sell or share my personal information", "Accessibility", "Ad Choices", "Terms of Use", "Best Price Guarantee"],
  },
  {
    title: "Discover AAA",
    links: ["Our history", "AAA in the community", "Careers", "Auto Club App", "Member guide", "Sponsorship requests"],
  },
  {
    title: "Partner with us",
    links: ["Become a participating business", "Become an Approved Auto Repair facility", "Become a roadside provider", "Membership forms"],
  },
  {
    title: "Keep in touch",
    links: ["Contact us", "AAA magazines", "Newsroom", "Online customer service", "Find a different AAA club"],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-cols">
          {FOOTER_COLS.map((c) => (
            <div key={c.title} className="footer-col">
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-col">
            <h4>Follow us:</h4>
            <div className="socials">
              {["f", "X", "in", "▶", "◎", "✉"].map((s, i) => (
                <a key={i} href="#" aria-label="social">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <AAALogo height={36} light />
          <p>
            CST 1016202-80 Copyright © 2025 Automobile Club of Southern California. All Rights Reserved.
            The Automobile Club of Southern California is a member club affiliated with the American
            Automobile Association (AAA) national federation and serves members in Inyo, Imperial, Kern,
            Los Angeles, Mono, Orange, Riverside, San Bernardino, San Diego, San Luis Obispo, Santa
            Barbara, Tulare, and Ventura counties.
          </p>
        </div>
      </div>
    </footer>
  );
}
