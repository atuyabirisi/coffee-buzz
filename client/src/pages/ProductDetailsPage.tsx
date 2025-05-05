import OrderBanner from "../components/OrderBanner";
import ProductDetails from "../components/ProductDetails";
import MainLayout from "../layouts/MainLayout";

export default function ProductDetailsPage() {
  return (
    <MainLayout>
      <OrderBanner />
      <ProductDetails />
    </MainLayout>
  );
}
