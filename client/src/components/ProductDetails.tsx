import { useState } from "react";

type Product = {
  name: string;
  type: string;
  tagline: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  image: string;
  options: string[];
};

const product: Product = {
  name: "Cortado",
  type: "Loose coffee",
  tagline: "Strong & Energizing",
  rating: 4.8,
  reviews: 428,
  description:
    "This coffee is known for its strong, robust flavor and its refreshing, invigorating aroma. It's a popular choice for those who enjoy a bold, full-bodied tea experience. Green tea is also believed to have a number of health benefits, including aiding in digestion and boosting the immune system. Try it hot or iced for a tasty and healthy beverage choice.",
  price: 31,
  image: "/src/assets/cortado.jpg",
  options: ["Loose leaf tea", "Tea bags"],
};

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(product.options[0]);

  return (
    <div className="max-w-6xl mx-auto p-4 md:flex gap-8">
      <div className="w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[500px] object-cover rounded"
        />
      </div>

      <div className="flex-1 mt-6 md:mt-0">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.type}</p>
        <p className="text-md font-medium text-gray-700 mt-2">
          {product.tagline}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-500">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-sm text-gray-600">
            {product.reviews} reviews
          </span>
        </div>

        <p className="text-gray-700 mt-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex gap-4 mt-6">
          {product.options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`px-4 py-2 border rounded-full ${
                selectedOption === option
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="border px-3 py-1 rounded-l"
            >
              -
            </button>
            <span className="border px-4 py-1">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="border px-3 py-1 rounded-r"
            >
              +
            </button>
          </div>
          <span className="text-lg font-semibold">
            KSh {product.price * quantity}
          </span>
        </div>

        <button className="bg-black text-white w-full py-3 rounded-lg mt-4 hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
