import Header from "./Header";
import TravelWidget from "./TravelWidget";
import {
  Hero,
  MembersGetMore,
  Insurance,
  Insider,
  JoinCTA,
  Services,
  Footer,
} from "./Sections";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <TravelWidget />
        <MembersGetMore />
        <Insurance />
        <Insider />
        <JoinCTA />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
