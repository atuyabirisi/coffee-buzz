export default function Navigation() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap">
      <div className="basis-full md:basis-3/12 bg-blue-500 text-center p-4">
        LOGO
      </div>
      <div className="basis-full md:basis-6/12 bg-cyan-500 text-center p-4">
        MENUITEMS
      </div>
      <div className="basis-full md:basis-3/12 bg-pink-500 text-center p-4">
        CART/ACCOUNT ICONS
      </div>
    </div>
  );
}
