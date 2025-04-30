export interface ProductType {
  name: string;
  image: string;
  description: string;
  price: string;
}

export const products: ProductType[] = [
  {
    name: "Cappuccino",
    image: "/src/assets/cappuccino.jpg",
    description:
      "A rich, velvety blend of espresso and steamed milk, topped with a delicate layer of foam.Perfect for a smooth, balanced start to your day.",
    price: "KSh 350",
  },
  {
    name: "Cortado",
    image: "/src/assets/cortado.jpg",
    description:
      "Equal parts espresso and warm milk, the Cortado delivers a bold yet mellow flavor.Ideal for those who like their coffee smooth but strong.",
    price: "KSh 320",
  },
  {
    name: "Espresso",
    image: "/src/assets/espresso.jpg",
    description:
      "Pure and powerful, our single-shot espresso offers deep flavor and intense aroma.The true essence of coffee in its simplest form.",
    price: "KSh 280",
  },
];

