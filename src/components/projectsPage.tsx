export default function ProjectsPage() {
  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <div className="space-y-4">
        <p className="text-center font-semibold text-lg">Explore My</p>
        <p className="text-center text-5xl font-bold">Projects</p>
      </div>
      <div className="mb-48 flex items-center justify-evenly w-full">
        <div className="border-2 border-[#ffe8b3] p-4 rounded-xl space-y-4">
          <div className="w-[400px] h-[300px]"></div>
          <p className="text-center text-3xl font-bold">Project One</p>
          <div className="font-semibold text-[#424242] flex items-center justify-center gap-10">
            <button className="bg-[#ffd167] w-32 text-white rounded-full border-4 border-[#ffd167] p-4 hover:bg-[#e6b952] transition-all duration-300">
              Github
            </button>
            <button className="border-4 w-32 border-[#ffd167] rounded-full p-4 hover:bg-[#e6b952] transition-all duration-300">
              Live App
            </button>
          </div>
        </div>
        <div className="border-2 border-[#ffe8b3] p-4 rounded-xl space-y-4">
          <div className="w-[400px] h-[300px]"></div>
          <p className="text-center text-3xl font-bold">Project One</p>
          <div className="font-semibold text-[#424242] flex items-center justify-center gap-10">
            <button className="bg-[#ffd167] w-32 text-white rounded-full border-4 border-[#ffd167] p-4 hover:bg-[#e6b952] transition-all duration-300">
              Github
            </button>
            <button className="border-4 w-32 border-[#ffd167] rounded-full p-4 hover:bg-[#e6b952] transition-all duration-300">
              Live App
            </button>
          </div>
        </div>
        <div className="border-2 border-[#ffe8b3] p-4 rounded-xl space-y-4">
          <div className="w-[400px] h-[300px]"></div>
          <p className="text-center text-3xl font-bold">Project One</p>
          <div className="font-semibold text-[#424242] flex items-center justify-center gap-10">
            <button className="bg-[#ffd167] w-32 text-white rounded-full border-4 border-[#ffd167] p-4 hover:bg-[#e6b952] transition-all duration-300">
              Github
            </button>
            <button className="border-4 w-32 border-[#ffd167] rounded-full p-4 hover:bg-[#e6b952] transition-all duration-300">
              Live App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
