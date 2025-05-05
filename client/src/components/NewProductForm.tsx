import { useState } from "react";

type ProductFormData = {
  name: string;
  image: File | null;
  description: string;
  price: string;
};

export default function NewProductForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    image: null,
    description: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form validation here if needed
    console.log("Submitting product:", formData);
    // You can send formData to your API or database here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white border-1  border-[#faf1e8] shadow-lg rounded-md max-w-3xl mx-auto my-8"
    >
      <h2 className="text-2xl font-bold mb-4">Add Coffee Product</h2>

      <div className="mb-3">
        <label className="block text-sm font-medium">Coffee Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="e.g. KSh 350"
          required
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Upload Product
      </button>
    </form>
  );
}
