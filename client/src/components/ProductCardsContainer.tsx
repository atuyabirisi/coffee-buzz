import { coffeeItems } from "../assets/data";
import CoffeeCard from "./CoffeCard";

export default function CoffeeCardContainer() {
  return (
    <div className="bg-[#faf1e8] p-2 md:px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {coffeeItems.map((product, index) => (
          <CoffeeCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
