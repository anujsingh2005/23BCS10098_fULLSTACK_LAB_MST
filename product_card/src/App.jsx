import React from "react";

const ProductCard = ({ name, price, description, inStock }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md max-w-sm">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-900 font-semibold mb-4">${price}</p>
      {inStock ? (
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Buy Now
        </button>
      ) : (
        <p className="text-red-500 font-bold">Out of Stock</p>
      )}
    </div>
  );
};

const App = () => {
  const products = [
    {
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation.",
      inStock: true,
    },
    {
      name: "Smart Watch",
      price: 199.99,
      description: "Track your health and notifications on the go.",
      inStock: false,
    },
    {
      name: "Gaming Mouse",
      price: 49.99,
      description: "Ergonomic gaming mouse with RGB lighting.",
      inStock: true,
    },
  ];

  return (
    <div className="flex  flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="flex flex-wrap gap-6">

      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
      </div>
    </div>
  );
};

export default App;
