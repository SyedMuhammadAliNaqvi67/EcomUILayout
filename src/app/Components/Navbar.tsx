'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, ShoppingBag, ShoppingCart } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/products', icon: ShoppingBag, label: 'Products' },
  { href: '/cart', icon: ShoppingCart, label: 'Cart' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold">DarkMart</span>
            </Link>
          </div>
          <div className="flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="ml-4 px-3 py-2 rounded-md text-sm font-medium relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-6 h-6" />
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}