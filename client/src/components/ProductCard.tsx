import { ProductType } from "../assets/data";

export default function ProductCard({
  name,
  image,
  description,
  price,
}: ProductType) {
  return (
    <div className="w-full md:w-[300px] h-full flex flex-col rounded-md overflow-hidden bg-[#faf1e8]">
      <div className="w-full h-[250px] overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-1">{name}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
      <div className="px-4 py-2">
        <button className="bg-white text-black font-bold px-4 py-2 rounded-xl hover:text-stone-500 w-fit">
          {price}
        </button>
      </div>
      <div className="px-4 py-3">
        <button className="bg-black text-white px-4 py-2 w-full rounded hover:bg-[#393a3b]">
          Buy now
        </button>
      </div>
    </div>
  );
}
