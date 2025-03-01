"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/basic_smiling_2.png"
            alt="BeAIr Bear Logo"
            width={40}
            height={40}
            className="w-10 h-10"
            onError={(e: any) => {
              // Silently handle the error and show placeholder
              e.currentTarget.src = "/placeholder.svg?height=40&width=40"
            }}
          />
          <span className="font-fredoka text-xl">BeAIr</span>
        </Link>
        <div className="ml-auto flex gap-4">
          <Link
            href="/"
            className={cn(
              "px-4 py-2 rounded-md transition-colors",
              pathname === "/" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100",
            )}
          >
            Home
          </Link>
          <Link
            href="/how-to-use"
            className={cn(
              "px-4 py-2 rounded-md transition-colors",
              pathname === "/how-to-use" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100",
            )}
          >
            How to Use
          </Link>
          <Link
            href="/contact"
            className={cn(
              "px-4 py-2 rounded-md transition-colors",
              pathname === "/contact" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100",
            )}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className={cn(
              "px-4 py-2 rounded-md transition-colors",
              pathname === "/login" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100",
            )}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

