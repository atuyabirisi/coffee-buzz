import FilterButtons from "../components/FilterButtons";
import OrderBanner from "../components/OrderBanner";
import CoffeeCardContainer from "../components/ProductCardsContainer";
import MainLayout from "../layouts/MainLayout";

export default function OrdePage() {
  return (
    <MainLayout>
      <OrderBanner />
      <FilterButtons />
      <CoffeeCardContainer />
    </MainLayout>
  );
}
