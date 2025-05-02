import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { RiAccountCircleFill, RiMenuFill } from "react-icons/ri";
import { HiX } from "react-icons/hi";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#f5e9df]">
      <div className="flex flex-col items-center justify-center  basis-full md:basis-3/12 p-2">
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
          <a href="/">
            <img
              className="w-full h-full object-cover"
              src="\src\assets\logo.jpg"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center text-2xl font-bold italic px-4">
          <h1>Coffee place</h1>
        </div>
      </div>
      <div className="hidden md:flex md:basis-6/12 p-2 items-center justify-center">
        <ul className="flex gap-6">
          {["Home", "About", "Order", "Contact Us"].map((item) => (
            <a href={item == "Home" ? "/" : `/${item.toLowerCase()}`}>
              <li
                key={item}
                className="text-black text-lg font-semibold hover:text-stone-500 cursor-pointer"
              >
                {item}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex md:basis-3/12 p-2 items-center justify-center">
        <div className="flex gap-6 text-2xl">
          <a href="#" className="text-black hover:text-stone-500">
            <BsCart4 />
          </a>
          <a href="#" className="text-black hover:text-stone-500">
            <RiAccountCircleFill />
          </a>
        </div>
      </div>
      <div className="flex md:hidden justify-end w-full">
        <button onClick={toggleMenu} className="text-3xl text-black">
          {isMenuOpen ? <HiX /> : <RiMenuFill />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#f0dece] border-t-2 border-[#f5e9df]">
          <ul className="flex flex-col items-center gap-4 p-4">
            {["Home", "About", "Order", "Contact Us"].map((item) => (
              <a href={item == "Home" ? "/" : `/${item.toLowerCase()}`}>
                <li
                  key={item}
                  className="text-black text-lg font-semibold hover:text-stone-500 cursor-pointer"
                >
                  {item}
                </li>
              </a>
            ))}
            <div className="flex gap-6 text-2xl mt-4">
              <a href="#" className="text-black hover:text-stone-500">
                <BsCart4 />
              </a>
              <a href="#" className="text-black hover:text-stone-500">
                <RiAccountCircleFill />
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
