import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DarkMart - Your Sleek E-commerce Destination',
  description: 'Experience shopping in style with our dark-themed e-commerce platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
