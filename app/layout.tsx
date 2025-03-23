import type React from "react"
import type { Metadata } from "next"
import { Inter, Fredoka } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/ui/nav-bar"
import Footer from "@/components/ui/footer"
import { Providers } from "@/components/ui/providers"
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" })

export const metadata: Metadata = {
  title: "Qubit - Your AI Teaching Assistant",
  description: "Personal AI teaching assistant for programming",
  icons: {
    icon: [
      {
        url: "/assets/basic_smiling_2.png",
        href: "/assets/basic_smiling_2.png",
      },
    ],
    shortcut: [
      {
        url: "/assets/basic_smiling_2.png",
        href: "/assets/basic_smiling_2.png",
      },
    ],
    apple: [
      {
        url: "/assets/basic_smiling_2.png",
        href: "/assets/basic_smiling_2.png",
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={`${inter.variable} ${fredoka.variable} font-sans min-h-screen flex flex-col`}>
          <Providers>
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}

