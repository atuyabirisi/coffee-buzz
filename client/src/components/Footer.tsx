export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
            <img
              className="w-full h-full rounded-full"
              src="\src\assets\logo.jpg"
              alt="logo"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Coffee Place
            </h2>
            <p className="text-sm text-center">
              Crafting coffee moments that warm your heart. Visit us for the
              finest brews and cozy vibes.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About", "Shop", "Blog"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:underline hover:text-amber-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Coffee Street, Nairobi</li>
            <li>+254 700 123456</li>
            <li>info@thecoffeplace.com</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-stone-400 border-t-1 p-1">
        &copy; {new Date().getFullYear()} The Coffee Place. All rights reserved.
      </div>
    </footer>
  );
}
