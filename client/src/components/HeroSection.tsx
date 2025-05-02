export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src="/src/assets/herosec.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#faf1e8]/60 flex flex-col justify-center items-center px-6 text-center lg:text-left">
        <div className="max-w-2xl text-black">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Welcome to The Coffee Place
          </h2>
          <p className="text-xl mb-6 font-bold leading-relaxed">
            At The Coffee Place, we believe in the art of coffee. From our
            freshly brewed beans to our cozy atmosphere, we aim to create a
            space where you can relax, recharge, and enjoy the finest coffee
            around. Whether you're a regular or a first-time visitor, you're
            always welcome.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 focus:outline-none">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
