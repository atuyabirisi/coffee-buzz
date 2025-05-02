export interface ProductType {
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface coffeeType {
  name: string;
  image: string;
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
  {
    name: "Latte",
    image: "/src/assets/latte.jpg",
    description:
      "Smooth and creamy with a gentle espresso base, our Latte is the perfect harmony of flavor and froth.A comforting classic for any time of day.",
    price: "KSh 370",
  },
];

export const coffeeItems: coffeeType[] = [
  {
    name: "Cappuccino",
    image: "/src/assets/cappuccino.jpg",
    price: "KSh 350",
  },
  {
    name: "Cortado",
    image: "/src/assets/cortado.jpg",
    price: "KSh 320",
  },
  {
    name: "Espresso",
    image: "/src/assets/espresso.jpg",
    price: "KSh 280",
  },
  {
    name: "Latte",
    image: "/src/assets/latte.jpg",
    price: "KSh 370",
  },
];


export const filters = [
  "All",
  "Espresso",
  "Cappuccino",
  "Cortado",
  "Latte",
  "Mocha",
];


