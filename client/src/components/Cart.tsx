type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartProps = {
  items: CartItem[];
};

export default function Cart({ items }: CartProps) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white border-1  border-[#faf1e8] shadow-lg rounded-md max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">KSh {item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 border rounded-l disabled:opacity-30"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 border-t border-b">
                    {item.quantity}
                  </span>
                  <button className="px-2 py-1 border rounded-r">+</button>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-lg font-semibold">
                  KES {item.price * item.quantity}
                </p>
                <button className="text-red-500 mt-2 text-sm hover:underline">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-bold">Total: KSh {total}</div>
        </div>
      )}
    </div>
  );
}
