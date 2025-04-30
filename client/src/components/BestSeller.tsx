export default function BestSeller() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#faf1e8]">
      <div className="basis-full lg:basis-1/2 p-4">
        <div className="h-full flex flex-col justify-center text-center lg:text-start">
          <h3 className="text-2xl font-bold">Try our Best-Sellers</h3>
          <h5 className="text-lg leading-relaxed">
            Discover why our signature brews are customer favorites. From
            expertly crafted espresso blends to smooth, milky classics, each cup
            is a celebration of flavor. Made with premium beans and brewed to
            perfection, our best-sellers promise satisfaction in every sip —
            whether you’re starting your day or taking a cozy break.
          </h5>
        </div>
      </div>
      <div className="flex basis-full justify-center items-center lg:basis-1/2 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[350px] rounded-md overflow-hidden shadow-lg h-fit bg-[#faf1e8]">
            <div className="w-full h-[250px] overflow-hidden">
              <img
                className="w-full object-contain"
                src="/src/assets/cappuccino.jpg"
                alt="Cappuccino"
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="font-bold text-xl mb-2">Cappuccino</h2>
              <p className="text-gray-700 text-base">
                A rich, velvety blend of espresso and steamed milk, topped with
                a delicate layer of foam — perfect for a smooth, balanced start
                to your day.
              </p>
            </div>
            <div className="px-4 py-2">
              <button className="bg-white text-black font-bold px-4 py-2 rounded-xl hover:text-stone-500 w-fit">
                KES 250
              </button>
            </div>
            <div className="px-4 py-2">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-[#393a3b] w-full">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
