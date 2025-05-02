import { filters } from "../assets/data";

export default function FilterButtons() {
  return (
    <div className="bg-[#fdf9f6] px-4 pt-3 border-b-1  border-stone-200">
      <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide py-4">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-4 py-2 border shadow-lg text-sm font-medium hover:bg-black hover:text-white transition rounded-full"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
