import Cart from "../components/Cart";
import OrderBanner from "../components/OrderBanner";
import MainLayout from "../layouts/MainLayout";

export default function CheckoutPage() {
  const cartItems = [
    {
      id: "2BHJVF",
      name: "Cortado",
      image: "/src/assets/cortado.jpg",
      price: 320,
      quantity: 2,
    },
    {
      id: "2vHJVF",
      name: "Espresso",
      image: "/src/assets/espresso.jpg",
      price: 250,
      quantity: 1,
    },
  ];
  return (
    <MainLayout>
      <OrderBanner />
      <Cart items={cartItems} />
    </MainLayout>
  );
}
