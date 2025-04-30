import { products } from "../assets/data";
import ProductCard from "./ProductCard";

export default function JustIn() {
  return (
    <div className="bg-[#f0dece] p-2">
      <div className="py-2 text-center md:p-4 border-b border-[#faf1e8]">
        <h1 className="text-2xl font-bold">Just in!</h1>
        <h4 className="text-xl">Browse our newest products</h4>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
