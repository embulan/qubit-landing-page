export default function HowToUse() {
    const howToUseCards = [
      {
        id: 1,
        title: "Getting Started",
        description: "Learn how to set up your account and get Qubit in your programming environment.",
        videoPlaceholder: "Getting Started Video"
      },
      {
        id: 2,
        title: "Make Your First Prompt",
        description: "Feeling stuck on a problem? Make a prompt to Qubit and let it guide you towards a solution.",
        videoPlaceholder: "Make Your First Prompt Video"
      },
      {
        id: 3,
        title: "Interacting with Qubit",
        description: "Qubit is a special AI assistant - it knows the answer, but wants you to do the problem solving. Learn tips to prompting Qubit here.",
        videoPlaceholder: "Interacting with Qubit Video"
      },
      {
        id: 4,
        title: "Visualizations with Qubit",
        description: "Learn how to set up your account and take your first steps with Qubit.",
        videoPlaceholder: "Visualizations with Qubit Video"
      },
      {                  //TODO: add videos here
        id: 5,
        title: "Instructor Dashboard",
        description: "Qubit is a teaching assistant for both students and instructors. See how Qubit's instructor dashboard manages student interaction with Qubit.",
        videoPlaceholder: "Instructor Dashboard Video"
      },
      {
        id: 6,
        title: "The CREATE Lab",
        description: "CREATE is Duke's hub for the intersection of AI and pedagogy. Learn more about our mission.",
        videoPlaceholder: "The CREATE Lab Video"
      }
    ];
  
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
            {howToUseCards.map((card) => (
              <div
                key={card.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-purple-100 transition-transform hover:scale-105"
              >
                <div className="p-4 border-b border-purple-100">
                  <h3 className="text-xl font-semibold font-fredoka">{card.title}</h3>
                </div>
                <div className="aspect-video bg-gray-100/50 flex items-center justify-center text-gray-400">
                  {card.videoPlaceholder}
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
  
  
