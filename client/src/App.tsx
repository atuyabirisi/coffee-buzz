import HeaderBanner from "./components/HeaderBanner";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import JustInSection from "./components/JustInSection";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="m-3 rounded-xl md:shadow-lg overflow-hidden">
        <HeaderBanner />
        <Navigation />
        <HeroSection />
        <JustInSection />
        <BestSeller />
        <Footer />
      </div>
    </>
  );
}
