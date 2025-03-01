"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Login() {
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
        <div className="max-w-md mx-auto">
          <h1
            className="text-4xl font-fredoka text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              animation: "float 3s ease-in-out infinite",
            }}
          >
            Login to Qubit
          </h1>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student">Student Login</TabsTrigger>
              <TabsTrigger value="instructor">Instructor Login</TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <form className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="space-y-2">
                  <Label htmlFor="studentFirstName" className="font-medium">
                    First Name
                  </Label>
                  <Input
                    id="studentFirstName"
                    placeholder="Enter your first name"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentLastName" className="font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="studentLastName"
                    placeholder="Enter your last name"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentEmail" className="font-medium">
                    Qubit Email
                  </Label>
                  <Input
                    id="studentEmail"
                    type="email"
                    placeholder="Enter your Qubit email"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentPassword" className="font-medium">
                    Password
                  </Label>
                  <Input
                    id="studentPassword"
                    type="password"
                    placeholder="Enter your password"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="instructor">
              <form className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="space-y-2">
                  <Label htmlFor="instructorFirstName" className="font-medium">
                    First Name
                  </Label>
                  <Input
                    id="instructorFirstName"
                    placeholder="Enter your first name"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructorLastName" className="font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="instructorLastName"
                    placeholder="Enter your last name"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructorEmail" className="font-medium">
                    Qubit Email
                  </Label>
                  <Input
                    id="instructorEmail"
                    type="email"
                    placeholder="Enter your Qubit email"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructorPassword" className="font-medium">
                    Password
                  </Label>
                  <Input
                    id="instructorPassword"
                    type="password"
                    placeholder="Enter your password"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="classCode" className="font-medium">
                    Class Code
                  </Label>
                  <Input
                    id="classCode"
                    placeholder="Enter your class code"
                    className="border-purple-100 focus:border-purple-200 transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Instructor Login
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

