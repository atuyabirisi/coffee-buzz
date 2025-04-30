import HeaderBanner from "./components/HeaderBanner";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import JustIn from "./components/JustIn";

export default function App() {
  return (
    <>
      <div className="lg:m-3 rounded-xl md:shadow-xl overflow-hidden">
        <HeaderBanner />
        <Navigation />
        <HeroSection />
        <JustIn />
        <BestSeller />
        <Footer />
      </div>
    </>
  );
}
