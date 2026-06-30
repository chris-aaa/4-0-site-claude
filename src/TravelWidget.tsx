import { useState } from "react";
import Dropdown from "./Dropdown";
import {
  Plane,
  Car,
  Umbrella,
  Ship,
  Hiker,
  Plus,
  Search,
  Calendar,
  MapPin,
  Sliders,
  Globe,
  ArrowRight,
} from "./Icons";

const TABS = [
  { id: "flights", label: "Flights", icon: <Plane size={18} /> },
  { id: "hotels", label: "Hotels", icon: <Plus size={18} /> },
  { id: "cars", label: "Cars", icon: <Car size={18} /> },
  { id: "packages", label: "Packages", icon: <Umbrella size={18} /> },
  { id: "cruises", label: "Cruises", icon: <Ship size={18} /> },
  { id: "activities", label: "Activities", icon: <Hiker size={18} /> },
];

const DEALS = [
  { city: "San Francisco", dates: "Fri 11/22 - Sun 12/6", route: "CLT - SFO", note: "1 Stop", price: "$104" },
  { city: "Miami", dates: "Fri 11/22 - Sun 12/6", route: "CLT - MIA", note: "Round Trip", price: "$67" },
  { city: "Newark", dates: "Fri 11/22 - Sun 12/6", route: "CLT - EWR", note: "Round Trip", price: "$85" },
  { city: "Portland", dates: "Fri 11/22 - Sun 12/6", route: "CLT - PDX", note: "Round Trip", price: "$65" },
  { city: "Chicago", dates: "Fri 11/22 - Sun 12/6", route: "CLT - ORD", note: "1 Stop", price: "$78" },
];

function RadioPanel({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="opt-list">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="menuitemradio"
          aria-checked={value === o}
          className={`opt ${value === o ? "is-active" : ""}`}
          onClick={() => onChange(o)}
        >
          <span className="opt-radio" />
          {o}
        </button>
      ))}
    </div>
  );
}

export default function TravelWidget() {
  const [tab, setTab] = useState("flights");
  const [cabin, setCabin] = useState("Coach");
  const [trip, setTrip] = useState("Round Trip");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(3);

  const travelers = `${adults} adult${adults !== 1 ? "s" : ""}, ${children} child${
    children !== 1 ? "ren" : ""
  }`;

  return (
    <section className="travel" aria-label="Travel with AAA & save">
      <div className="travel-overlay" />
      <div className="container travel-inner">
        <p className="travel-eyebrow">Powered by the nation's largest network of travel advisors.</p>

        <div className="travel-head">
          <h2>
            Travel with <strong>AAA &amp; save</strong>
          </h2>
          <button className="btn btn-primary explore">
            <Globe size={20} /> Explore AAA Travel
          </button>
        </div>

        {/* Interactive tabs */}
        <div className="travel-tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`travel-tab ${tab === t.id ? "is-active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label} {t.icon}
            </button>
          ))}
        </div>

        {/* Search card */}
        <div className="travel-card">
          <div className="travel-card-top">
            <div className="travel-selectors">
              <Dropdown variant="circle" label={cabin}>
                <RadioPanel
                  options={["Coach", "Premium Economy", "Business", "First"]}
                  value={cabin}
                  onChange={setCabin}
                />
              </Dropdown>

              <Dropdown variant="circle" label={travelers}>
                <div className="stepper-panel">
                  <Stepper label="Adults" value={adults} setValue={setAdults} min={1} />
                  <Stepper label="Children" value={children} setValue={setChildren} min={0} />
                </div>
              </Dropdown>

              <Dropdown variant="circle" label={trip}>
                <RadioPanel
                  options={["Round Trip", "One-way", "Multi-city"]}
                  value={trip}
                  onChange={setTrip}
                />
              </Dropdown>
            </div>

            <div className="travel-selectors travel-selectors-right">
              <Dropdown variant="circle" label="Advanced options" align="right">
                <div className="opt-list">
                  <label className="check"><input type="checkbox" /> Non-stop only</label>
                  <label className="check"><input type="checkbox" /> Refundable fares</label>
                  <label className="check"><input type="checkbox" /> Include nearby airports</label>
                </div>
              </Dropdown>
              <Dropdown variant="circle" label="My reservations" align="right">
                <div className="account-menu">
                  <a href="#" role="menuitem">Upcoming trips</a>
                  <a href="#" role="menuitem">Past trips</a>
                  <a href="#" role="menuitem">Find a reservation</a>
                </div>
              </Dropdown>
              <button className="icon-btn" aria-label="More filters">
                <Sliders size={20} />
              </button>
            </div>
          </div>

          <div className="travel-fields">
            <Field icon={<Plane size={18} />} placeholder="Flying from" />
            <Field icon={<MapPin size={18} />} placeholder="Going to" />
            <Field icon={<Calendar size={18} />} placeholder="Departing" />
            <Field icon={<Calendar size={18} />} placeholder="Returning" />
            <button className="btn btn-primary travel-search" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Deal cards */}
        <div className="deals">
          {DEALS.map((d) => (
            <article className="deal-card" key={d.city}>
              <span className="deal-icon">
                <Plane size={18} />
              </span>
              <h3>{d.city}</h3>
              <p className="deal-dates">{d.dates}</p>
              <p className="deal-route">
                {d.route} <span className="deal-sep">|</span> {d.note}
              </p>
              <p className="deal-price">From {d.price}</p>
            </article>
          ))}
          <button className="deals-next" aria-label="Next deals">
            <ArrowRight size={20} />
          </button>
        </div>

        <p className="travel-footnote">Save on hotels, car rentals, vacation packages, and more.</p>
      </div>
    </section>
  );
}

function Field({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) {
  return (
    <label className="field">
      <input placeholder={placeholder} />
      <span className="field-icon">{icon}</span>
    </label>
  );
}

function Stepper({
  label,
  value,
  setValue,
  min,
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
}) {
  return (
    <div className="stepper">
      <span>{label}</span>
      <div className="stepper-ctrl">
        <button onClick={() => setValue(Math.max(min, value - 1))} aria-label={`Fewer ${label}`}>
          −
        </button>
        <span className="stepper-val">{value}</span>
        <button onClick={() => setValue(value + 1)} aria-label={`More ${label}`}>
          +
        </button>
      </div>
    </div>
  );
}
