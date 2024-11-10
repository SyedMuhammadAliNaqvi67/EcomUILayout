'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 pb-12 flex flex-col justify-center sm:px-6 lg:px-8"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="https://source.unsplash.com/random/400x400?shopping"
          alt="Shopping"
          width={400}
          height={400}
          className="mx-auto rounded-lg shadow-lg"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Welcome to DarkMart
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Your one-stop shop for all things dark and stylish
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <p className="text-center">
            Explore our wide range of products and enjoy a seamless shopping experience.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
