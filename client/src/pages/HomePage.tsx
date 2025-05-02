import BestSeller from "../components/BestSeller";
import HeroSection from "../components/HeroSection";
import JustIn from "../components/JustIn";
import MainLayout from "../layouts/MainLayout";

export default function HomePage() {
  return (
    <>
      <div className="lg:m-3 rounded-xl md:shadow-xl overflow-hidden">
        <MainLayout>
          <HeroSection />
          <JustIn />
          <BestSeller />
        </MainLayout>
      </div>
    </>
  );
}
