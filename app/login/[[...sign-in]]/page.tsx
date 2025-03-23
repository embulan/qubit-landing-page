"use client"
import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[12%] left-[15%] w-20 h-20 bg-pink-200 rounded-full" />
        <div className="absolute top-[30%] right-[18%] w-16 h-16 bg-yellow-200 rotate-45" />
        <div className="absolute top-[50%] left-[12%] w-24 h-24 bg-blue-200 rounded-lg -rotate-12" />
        <div className="absolute bottom-[25%] right-[22%] w-28 h-14 bg-green-200 rounded-xl rotate-12" />
        <div className="absolute bottom-[18%] left-[25%] w-16 h-16 bg-purple-200 rounded-full" />
        <div className="absolute top-[65%] right-[8%] w-20 h-20 bg-orange-200 rotate-45" />
        <div className="absolute top-[40%] left-[35%] w-12 h-12 bg-teal-200 rounded-lg -rotate-6" />
        <div className="absolute bottom-[35%] left-[40%] w-24 h-24 bg-red-200 rounded-xl rotate-12" />
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h1
          className="text-4xl font-fredoka text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          Welcome to Qubit
        </h1>

        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white/80 backdrop-blur-sm",
              headerTitle: "text-purple-500",
              headerSubtitle: "text-gray-600",
              formButtonPrimary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
              footerActionLink: "text-purple-500 hover:text-purple-600"
            },
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton"
            }
          }}
        />
      </div>
    </div>
  )
}

