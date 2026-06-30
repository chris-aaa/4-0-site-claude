import Dropdown from "./Dropdown";
import {
  AAALogo,
  Search,
  Chat,
  Shop,
  Truck,
  User,
  ArrowRight,
} from "./Icons";

const NAV: { label: string; groups: { title: string; items: string[] }[] }[] = [
  {
    label: "All Products",
    groups: [
      { title: "Membership", items: ["Classic", "Plus", "Premier", "Compare plans"] },
      { title: "Insurance", items: ["Auto", "Home", "Life", "Renters"] },
      { title: "Travel", items: ["Flights", "Hotels", "Cruises", "Vacation packages"] },
    ],
  },
  {
    label: "Become a member",
    groups: [
      { title: "Join AAA", items: ["See plans & pricing", "Gift a membership", "Add a family member"] },
      { title: "Member benefits", items: ["Roadside assistance", "Discounts", "Travel perks"] },
    ],
  },
  {
    label: "Get insurance",
    groups: [
      { title: "Quote & buy", items: ["Auto insurance", "Home insurance", "Life insurance", "Bundle & save"] },
      { title: "Manage policy", items: ["Pay my bill", "File a claim", "Find an agent"] },
    ],
  },
  {
    label: "Go travel",
    groups: [
      { title: "Plan a trip", items: ["Flights", "Hotels", "Car rentals", "Cruises", "Tours"] },
      { title: "Resources", items: ["Maps & TourBooks", "Travel guides", "Passport photos"] },
    ],
  },
  {
    label: "Find discounts",
    groups: [
      { title: "Everyday savings", items: ["Shopping", "Dining", "Entertainment", "Movie tickets"] },
      { title: "Travel deals", items: ["Hotels", "Theme parks", "Car rentals"] },
    ],
  },
  {
    label: "Find more",
    groups: [
      { title: "AAA services", items: ["Approved Auto Repair", "Car Buying Service", "Driving school"] },
      { title: "Financial", items: ["AAA Visa", "Banking", "Identity protection"] },
    ],
  },
];

function MegaMenu({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div className="mega">
      {groups.map((g) => (
        <div key={g.title} className="mega-col">
          <p className="mega-title">{g.title}</p>
          <ul>
            {g.items.map((it) => (
              <li key={it}>
                <a href="#" role="menuitem">
                  {it}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <a href="#" className="brand" aria-label="AAA home">
            <AAALogo height={40} />
          </a>

          <button className="header-search" type="button">
            <Search size={20} />
            <span>How can we help you today?</span>
          </button>

          <nav className="topbar-links" aria-label="Utility">
            <a href="#" className="topbar-link">
              <Chat size={22} />
              <span>Contact us</span>
            </a>
            <span className="divider" />
            <a href="#" className="topbar-link">
              <Shop size={22} />
              <span>Find a branch</span>
            </a>
            <button className="btn btn-primary roadside">
              <Truck size={22} /> Get Roadside
            </button>
          </nav>
        </div>
      </div>

      {/* Secondary nav with caret dropdowns */}
      <div className="subnav">
        <div className="container subnav-inner">
          <nav className="subnav-links" aria-label="Primary">
            {NAV.map((n) => (
              <Dropdown key={n.label} label={n.label} variant="nav">
                <MegaMenu groups={n.groups} />
              </Dropdown>
            ))}
          </nav>

          <Dropdown
            label="Manage account"
            variant="nav"
            align="right"
            icon={<User size={22} />}
            className="account"
          >
            <div className="account-menu">
              <a href="#" role="menuitem">My membership</a>
              <a href="#" role="menuitem">Billing & payments</a>
              <a href="#" role="menuitem">My reservations</a>
              <a href="#" role="menuitem">Insurance policies</a>
              <a href="#" role="menuitem">Profile & settings</a>
              <hr />
              <a href="#" role="menuitem" className="account-cta">
                Sign in <ArrowRight size={18} />
              </a>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
