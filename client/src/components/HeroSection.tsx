export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-[#f0dece] basis-full md:basis-1/2 p-4">
        <div className="rounded-sm overflow-hidden">
          <img
            src="\src\assets\herosec.jpg"
            className="object-cover"
            alt="logo"
          />
        </div>
      </div>
      <div className="bg-[#faf1e8] basis-full md:basis-1/2 p-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
        <h2 className="text-2xl font-bold mb-4">Welcome to our coffee shop!</h2>
        <p className="text-lg mb-6 leading-relaxed">
          At Brewed Bliss, we believe in the art of coffee. From our freshly
          brewed beans to our cozy atmosphere, we aim to create a space where
          you can relax, recharge, and enjoy the finest coffee around. Whether
          you're a regular or a first-time visitor, you're always welcome.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 focus:outline-none">
          Shop Now
        </button>
      </div>
    </div>
  );
}
