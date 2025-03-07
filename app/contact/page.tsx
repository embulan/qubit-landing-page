"use client"

import Image from "next/image"
import { Linkedin, Mail, Link } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    toast.success("Email copied to clipboard!")
  }

  const teamMembers = [
    {
      id: 1,
      name: "Dylan Nguyen",
      description: "Description Description Description Description Description Description Description Description",
      imageUrl: "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/dylan-d-nguyen/",
      email: "123@gmail.com"
    },
    {
      id: 2,
      name: "Xiaoquan Kong",
      description: "Description Description Description Description Description Description Description Description",
      imageUrl: "/assets/Xiaoquan_Kong.png",  //double check image size
      linkedin: "https://www.linkedin.com/in/xiaoquankong/",
      email: "123@gmail.com"
    },
    {
      id: 3,
      name: "Evan Bulan",
      description: `Evan is a sophomore at Duke studying Mechanical Engineering and Computer Science. His primary interests are in
      startups and entrepreneurship, robotics, operations/management, AI/ML, and web dev. He has experience working for numerous startups doing GTM and PM work. 
      Outside of work, he sings for the Duke Pitchforks and is a member of The Cube LLC and Scale & Coin.`,
      imageUrl: "/assets/Evan_Bulan.png",  //double check image size
      linkedin: "https://www.linkedin.com/in/evan-bulan/",
      email: "123@gmail.com"
    }
  ]

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
                alt="Qubit Logo"
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
              Duke's Center for Research & Engineering of AI Technology in Education (CREATE) develops and researches AI-based tools to improve 
              teaching and learning, using the Duke University community as a living lab. While there is a lot of criticism and wariness of AI in 
              the classroom, we believe there are implementations where AI can enable to welfare of students and teachers. We strive to build workflows and 
              systems where AI serves as a mediator towards education, using pedagogical research to have AI adapt around and not impede the learning process. 
              We are a diverse group of students, researchers, and educators who are passionate about using AI to improve education and we hope to keep building and iterating 
              for the Duke community and beyond.
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
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6 flex flex-col items-center"
            >
              <Image
                src={member.imageUrl}
                alt={`${member.name}`}
                width={200}
                height={200}
                className="rounded-full w-40 h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-fredoka mb-2">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">
                {member.description}
              </p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <button
                  onClick={() => copyEmail(member.email)}
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

