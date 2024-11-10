"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Dark Hoodie",
    price: 59.99,
    image: "https://source.unsplash.com/400x400?hoodie",
  },
  {
    id: 2,
    name: "Sleek Watch",
    price: 129.99,
    image: "https://source.unsplash.com/400x400?watch",
  },
  {
    id: 3,
    name: "Stylish Sunglasses",
    price: 79.99,
    image: "https://source.unsplash.com/random/400x400?sunglasses",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 89.99,
    image: "https://source.unsplash.com/400x400?backpack",
  },
];

export default function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-400">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
