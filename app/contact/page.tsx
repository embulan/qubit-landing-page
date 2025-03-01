"use client"

import Image from "next/image"
import { Linkedin, Mail, Link } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    toast.success("Email copied to clipboard!")
  }

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

      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl font-fredoka text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          Contact Us
        </h1>

        {/* About CREATE Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 mb-12">
          <div className="p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/assets/basic_smiling_2.png"
                alt="BeAIr Bear Logo"
                width={400}
                height={300}
                className="rounded-lg w-full h-auto object-cover"
                onError={(e: any) => {
                  e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                }}
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-fredoka mb-4">About CREATE</h2>
              <p className="text-gray-600 mb-4">
                Description Description Description Description Description Description Description Description
                Description Description Description Description Description Description Description
              </p>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-purple-100 flex justify-end gap-4">
            <button
              onClick={() => copyEmail("123@gmail.com")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </button>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Link className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6 flex flex-col items-center"
            >
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={`Team Member ${i}`}
                width={200}
                height={200}
                className="rounded-full w-40 h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-fredoka mb-2">Example Name</h3>
              <p className="text-gray-600 text-center mb-4">
                Description Description Description Description Description Description Description Description
              </p>
              <div className="flex gap-4 mt-auto">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <button
                  onClick={() => copyEmail("123@gmail.com")}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

