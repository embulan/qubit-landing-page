"use client"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* Decorative Shapes */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-20 h-20 bg-pink-200 rounded-lg rotate-12" />
          <div className="absolute top-[20%] right-[15%] w-16 h-16 bg-yellow-200 rotate-45" />
          <div className="absolute top-[40%] left-[20%] w-24 h-24 bg-blue-200 rounded-full" />
          <div className="absolute bottom-[30%] right-[25%] w-32 h-16 bg-green-200 rounded-xl -rotate-12" />
          <div className="absolute bottom-[20%] left-[15%] w-16 h-16 bg-purple-200 rounded-lg rotate-45" />
          <div className="absolute top-[60%] right-[10%] w-20 h-20 bg-orange-200 rounded-full" />
          <div className="absolute top-[30%] left-[40%] w-12 h-12 bg-teal-200 rotate-12" />
          <div className="absolute bottom-[40%] left-[30%] w-24 h-24 bg-red-200 rounded-lg -rotate-12" />
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <Image
            src="/assets/basic_smiling_2.png"
            alt="Qubit Logo"
            width={300}
            height={300}
            className="z-10 mb-4"
            priority
            onError={(e: any) => {
              // Silently handle the error and show placeholder
              e.currentTarget.src = "/placeholder.svg?height=300&width=300"
            }}
          />

          {/* Curved Text Container */}
          <div className="relative mt-4 text-center">
            <h1
              className="font-fredoka text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
              style={{
                transform: "perspective(400px) rotateX(-8deg)",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Qubit
            </h1>
            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-lg mx-auto"
              style={{
                transform: "perspective(400px) rotateX(-8deg)",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              your personal AI teaching assistant for programming
            </p>
          </div>
        </div>

        <div className="mt-32">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100">
            <h2 className="text-2xl text-center font-fredoka pt-6">About Qubit</h2>
            <div className="p-6 grid md:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="prose">
                  <p className="text-gray-600">
                    Description content will go here. This space can be used to describe Qubit's features, mission, and
                    benefits. The content will be displayed alongside the demo video for a comprehensive introduction to
                    the platform.
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Demo video will go here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

