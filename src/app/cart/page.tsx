'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cartItems = [
  { id: 1, name: 'Dark Hoodie', price: 59.99, quantity: 1, image: 'https://source.unsplash.com/random/400x400?hoodie' },
  { id: 2, name: 'Sleek Watch', price: 129.99, quantity: 1, image: 'https://source.unsplash.com/random/400x400?watch' },
]

export default function Cart() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between p-4 border-b border-gray-700"
          >
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-400">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-white">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button className="text-gray-400 hover:text-white">+</button>
            </div>
          </motion.div>
        ))}
        <div className="p-4 flex justify-between items-center">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl font-semibold">${total.toFixed(2)}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4"
        >
          Proceed to Checkout
        </motion.button>
      </div>
    </motion.div>
  )
}