import NewProductForm from "../components/NewProductForm";
import OrderBanner from "../components/OrderBanner";
import MainLayout from "../layouts/MainLayout";

export default function NewProductFormPage() {
  return (
    <MainLayout>
      <OrderBanner />
      <NewProductForm />
    </MainLayout>
  );
}
