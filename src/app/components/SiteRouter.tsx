import { useEffect, useRef, useState } from "react";
import AaaHomepage from "../../imports/AaaHomepage40/index";
import AutoInsurance from "../../imports/AutoInsurance40/index";
import Discounts from "../../imports/Discounts40/index";
import Membership from "../../imports/Membership40/index";
import Financial from "../../imports/Financial40/index";
import Travel from "../../imports/Desktop1/index";
import { GlobalNav } from "../../imports/AaaHomepage40/index";
import heroSlide3 from "../../imports/AaaHomepage40/hero-slide-3.png";

type Page =
  | "home"
  | "insurance"
  | "discounts"
  | "membership"
  | "financial"
  | "travel";

const PAGES: Record<Page, () => JSX.Element> = {
  home: AaaHomepage,
  insurance: AutoInsurance,
  discounts: Discounts,
  membership: Membership,
  financial: Financial,
  travel: Travel,
};

// Map the header nav labels (rendered as plain text inside the imported
// designs) to the pages we have, so the global nav is linkable from every
// page. Most pages use the plain category labels; the Travel page's nav uses
// action-phrase labels ("Get insurance", "Go travel", ...) so those are
// mapped too. Labels without a clear single destination (Automotive,
// All Products, Manage account) are intentionally left out; the AAA logo
// still returns home on every page via the /logo/i check in handleClick.
const LABEL_TO_PAGE: Record<string, Page> = {
  // Category labels used by the home / insurance / discounts / membership /
  // financial pages.
  Insurance: "insurance",
  Discounts: "discounts",
  Membership: "membership",
  Financial: "financial",
  Travel: "travel",
  // Action-phrase labels used by the Travel page's global nav.
  "Get insurance": "insurance",
  "Find discounts": "discounts",
  "Become a member": "membership",
  "Find more": "financial",
  "Go travel": "travel",
};

export function SiteRouter() {
  const [page, setPage] = useState<Page>("home");
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Scroll to the top whenever the page changes, like a real navigation.
  useEffect(() => {
    outerRef.current?.scrollTo({ top: 0 });
  }, [page]);

  // Homepage hero slider: cross-fade between the imported (family) slide and
  // the senior-couple slide every 5 seconds. The extra slide is injected
  // from the wrapper so the read-only import stays untouched.
  useEffect(() => {
    if (page !== "home") return;
    const root = innerRef.current;
    if (!root) return;
    const slider = root.querySelector<HTMLElement>(
      '[data-name="Hero image slider"]',
    );
    const baseImg = slider?.querySelector<HTMLImageElement>("img");
    if (!slider || !baseImg) return;

    // Frame each slide like the design: fill the slider box (cover) with the
    // people anchored so the crop happens at the hero's bottom edge. Photos
    // sit bottom; the tall senior-couple cutout is top-anchored so their
    // heads stay in view and the crop falls on the lower body instead.
    const extras = [
      { src: heroSlide3, position: "center top" }, // senior couple cutout
    ].map(({ src, position }) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.className = baseImg.className;
      img.style.objectFit = "cover";
      img.style.objectPosition = position;
      img.style.transition = "opacity 1s ease";
      img.style.opacity = "0";
      slider.appendChild(img);
      return img;
    });
    baseImg.style.transition = "opacity 1s ease";
    baseImg.style.objectFit = "cover";
    baseImg.style.objectPosition = "center bottom";

    const layers = [baseImg, ...extras];
    let idx = 0;
    const id = window.setInterval(() => {
      idx = (idx + 1) % layers.length;
      layers.forEach((l, i) => {
        l.style.opacity = i === idx ? "1" : "0";
      });
    }, 5000);

    return () => {
      window.clearInterval(id);
      extras.forEach((img) => img.remove());
      baseImg.style.opacity = "";
      baseImg.style.transition = "";
      baseImg.style.objectFit = "";
      baseImg.style.objectPosition = "";
    };
  }, [page]);

  // Turn the "Flight Deal" card row into a carousel on the pages that have
  // one (homepage and Travel): clicking the caret slides the cards one at a
  // time and loops back to the start, and a matching "previous" caret is
  // added on the left. The cards live in a read-only import, so we drive
  // them via the DOM here.
  useEffect(() => {
    if (page !== "home" && page !== "travel") return;
    const root = innerRef.current;
    if (!root) return;
    const track = root.querySelector<HTMLElement>(
      '[data-name="Flight Deal Slider animated hover"]',
    );
    const btn = root.querySelector<HTMLElement>('[data-name="Button - Next cards"]');
    if (!track || !btn) return;
    const cards = Array.from(
      track.querySelectorAll<HTMLElement>('[data-name="Flight Deal - Mini"]'),
    );
    if (!cards.length) return;

    const GAP = 16;
    let index = 0;

    const metrics = () => {
      const step = cards[0].offsetWidth + GAP;
      const contentWidth = cards.length * step - GAP;
      const maxOffset = Math.max(0, contentWidth - track.clientWidth);
      const maxIndex = Math.ceil(maxOffset / step);
      return { step, maxOffset, maxIndex };
    };

    const apply = () => {
      const { step, maxOffset } = metrics();
      const offset = Math.min(index * step, maxOffset);
      cards.forEach((c) => {
        c.style.transition = "transform 0.45s ease";
        c.style.transform = `translateX(${-offset}px)`;
      });
    };

    const onNext = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const { maxIndex } = metrics();
      index = index >= maxIndex ? 0 : index + 1;
      apply();
    };

    const onPrev = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const { maxIndex } = metrics();
      index = index <= 0 ? maxIndex : index - 1;
      apply();
    };

    // Build a "previous" caret by cloning the existing next caret so it
    // matches its styling/SVG exactly, then flip it to point left and
    // anchor it on the left edge of the slider.
    const prevBtn = btn.cloneNode(true) as HTMLElement;
    prevBtn.setAttribute("data-name", "Button - Prev cards");
    prevBtn.style.right = "auto";
    prevBtn.style.left = "1px";
    prevBtn
      .querySelector(".rotate-180")
      ?.classList.remove("rotate-180");
    track.appendChild(prevBtn);

    btn.addEventListener("click", onNext);
    prevBtn.addEventListener("click", onPrev);
    return () => {
      btn.removeEventListener("click", onNext);
      prevBtn.removeEventListener("click", onPrev);
      prevBtn.remove();
      cards.forEach((c) => {
        c.style.transform = "";
        c.style.transition = "";
      });
    };
  }, [page]);

  // The "Explore AAA" separators in the import size their length off the
  // container width (100cqw), which renders them as stretched boxes rather
  // than lines. Tag each one so our CSS draws a clean full-height divider.
  useEffect(() => {
    if (page !== "home") return;
    const root = innerRef.current;
    if (!root) return;
    const wrappers = Array.from(
      root.querySelectorAll<HTMLElement>('[style*="container-type"]'),
    ).filter(
      (el) => el.querySelector('svg')?.getAttribute("viewBox") === "0 0 97 1",
    );
    wrappers.forEach((el) => el.classList.add("aaa-sep-fix"));
    return () => wrappers.forEach((el) => el.classList.remove("aaa-sep-fix"));
  }, [page]);

  // Stack the "Journeys" cards flat, squared and aligned, and shuffle a
  // different card to the top every 5 seconds. Position is driven by stack
  // order, not card identity: whichever card is on top sits aligned/flush,
  // and each card below peeks out a little further to the left so you only
  // ever see a sneak-peek sliver of the back cards. Cards live in the
  // read-only import, so we drive it from here.
  useEffect(() => {
    if (page !== "home") return;
    const root = innerRef.current;
    if (!root) return;
    const front = root.querySelector<HTMLElement>(
      '[data-name="Journeys Slider/recently married"]',
    );
    const deck = front?.parentElement;
    if (!deck) return;
    const cards = Array.from(deck.children) as HTMLElement[];
    if (cards.length < 2) return;

    const N = cards.length;
    const PEEK = 28; // px each back card pokes out to the left
    let tick = 0;

    // Position every card from its stack order: z = N-1 is the top card
    // (aligned, no offset); lower z shifts further left. `pop` briefly
    // scales the top card as it arrives.
    const layout = (pop?: HTMLElement) => {
      cards.forEach((c, i) => {
        const z = ((i - tick) % N + N) % N;
        c.style.zIndex = String(z);
        const offset = (N - 1 - z) * PEEK;
        c.style.transform = `translateX(${-offset}px)${c === pop ? " scale(1.03)" : ""}`;
      });
    };

    cards.forEach((c) => {
      c.style.transition = "transform 0.6s ease";
    });
    layout();

    const cycle = () => {
      tick = (tick + 1) % N;
      const top = cards.find(
        (_, i) => ((i - tick) % N + N) % N === N - 1,
      );
      layout(top);
      if (top) window.setTimeout(() => layout(), 600);
    };

    const id = window.setInterval(cycle, 5000);
    return () => {
      window.clearInterval(id);
      cards.forEach((c) => {
        c.style.zIndex = "";
        c.style.transform = "";
        c.style.transformOrigin = "";
        c.style.transition = "";
      });
    };
  }, [page]);

  // Set up the plane icon to fly in/out of its circle pill on the flight-deal
  // cards (Travel page and the homepage carousel). We clip the pill so the
  // exit/entrance stays inside it and tag the icon; the animation itself is
  // triggered purely by CSS on card :hover (see .aaa-plane-anim in index.css).
  useEffect(() => {
    if (page !== "travel" && page !== "home") return;
    const root = innerRef.current;
    if (!root) return;
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('[data-name="Flight Deal - Mini"]'),
    );
    const cleanup: (() => void)[] = [];
    cards.forEach((card) => {
      // The icon pill is the first element child of the card's inner Container.
      // It's a rounded gray circle wrapping the plane SVG — find it by looking
      // for the element whose class includes "rounded" that wraps an Icons/40.
      const icon = card.querySelector<HTMLElement>('[data-name="Icons/40"]');
      const pill = icon?.parentElement ?? null;
      if (!pill || !icon) return;
      const prevOverflow = pill.style.overflow;
      pill.style.overflow = "hidden";
      icon.classList.add("aaa-plane-anim");
      cleanup.push(() => {
        icon.classList.remove("aaa-plane-anim");
        pill.style.overflow = prevOverflow;
      });
    });
    return () => cleanup.forEach((fn) => fn());
  }, [page]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let el = e.target as HTMLElement | null;
    // Walk up a few levels from the click target looking for either the
    // AAA logo (returns home) or a nav label that maps to a page. This also
    // covers the hero "Explore AAA" widget buttons (e.g. explore-travel-btn),
    // whose label text matches the same map.
    for (let i = 0; el && i < 8; i++) {
      const dataName = el.getAttribute?.("data-name") ?? "";
      if (/logo/i.test(dataName)) {
        setPage("home");
        return;
      }
      const text = el.textContent?.trim() ?? "";
      if (text && LABEL_TO_PAGE[text]) {
        setPage(LABEL_TO_PAGE[text]);
        return;
      }
      el = el.parentElement;
    }
  };

  const Active = PAGES[page];

  return (
    <div
      ref={outerRef}
      onClick={handleClick}
      className="size-full overflow-auto bg-white site-router-root"
    >
      <div ref={innerRef} className={`page-${page}`}>
        {/* The Travel design ships a different header; render the homepage's
            global nav bar on top and hide Travel's own navs (see index.css).
            Its category links route via the shared handleClick above. */}
        {page === "travel" && (
          <div className="global-nav-host">
            <GlobalNav />
          </div>
        )}
        <div className="page-body">
          <Active />
        </div>
      </div>
    </div>
  );
}
