export default function HowToUse() {
    const cards = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      title: `Title ${i + 1}`,
      description: "Description text will go here. This explains how to use this specific feature of Qubit.",
    }))
  
    return (
      <div className="min-h-screen pt-16 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[15%] left-[8%] w-24 h-24 bg-pink-200 rounded-lg rotate-45" />
          <div className="absolute top-[25%] right-[12%] w-20 h-20 bg-yellow-200 rounded-full" />
          <div className="absolute top-[45%] left-[25%] w-28 h-28 bg-blue-200 rotate-12" />
          <div className="absolute bottom-[35%] right-[20%] w-32 h-16 bg-green-200 rounded-xl -rotate-6" />
          <div className="absolute bottom-[15%] left-[18%] w-16 h-16 bg-purple-200 rounded-lg rotate-45" />
          <div className="absolute top-[55%] right-[15%] w-20 h-20 bg-orange-200 rounded-full" />
          <div className="absolute top-[35%] left-[45%] w-12 h-12 bg-teal-200 -rotate-12" />
          <div className="absolute bottom-[45%] left-[35%] w-24 h-24 bg-red-200 rounded-lg rotate-12" />
        </div>
  
        <div className="container mx-auto px-4 py-12">
          <h1
            className="text-4xl font-fredoka text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              animation: "float 3s ease-in-out infinite",
            }}
          >
            How to Use Qubit
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-purple-100 transition-transform hover:scale-105"
              >
                <div className="p-4 border-b border-purple-100">
                  <h3 className="text-xl font-semibold font-fredoka">{card.title}</h3>
                </div>
                <div className="aspect-video bg-gray-100/50 flex items-center justify-center text-gray-400">
                  Video will go here
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  