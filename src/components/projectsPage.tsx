import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <div className="space-y-4">
        <p className="text-center font-semibold text-lg">Explore My</p>
        <p className="text-center text-5xl font-bold">Projects</p>
      </div>
      <div className="mb-48 flex items-center justify-evenly w-full">
        <div className=" shadow-[#cecece] shadow p-4 rounded-xl space-y-4 border border-gray-300">
          <p className="text-center text-3xl font-bold">
            PageSuite - SaaS eEdition Website
          </p>
          <div className="w-[550px] h-[300px] flex items-center justify-center">
            <Image
              className="shadow-[#7e7e7e] shadow rounded-md"
              alt="profile picture"
              width={500}
              height={350}
              src="/eEdition.gif"
            />
          </div>
          <div className="font-semibold text-[#424242] flex items-center justify-center gap-10">
            <p>*Private Repo*</p>
            <button className="border-4 w-32 border-[#ffd167] rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300">
              Live App
            </button>
          </div>
        </div>
        <div className="shadow-[#cecece] shadow p-4 rounded-xl space-y-4 border border-gray-300">
          <p className="text-center text-3xl font-bold">Instagram Clone</p>
          <div className="w-[550px] h-[300px] flex items-center justify-center">
            <Image
              className="shadow-[#7e7e7e] shadow rounded-md"
              alt="profile picture"
              width={500}
              height={350}
              src="/instagram.gif"
            />
          </div>
          <div className="font-semibold text-[#424242] flex items-center justify-center gap-10">
            <button className="bg-[#ffd167] w-32  rounded-full border-4 border-[#ffd167] hover:border-[#ffd981] px-4 py-2 hover:bg-[#ffe19c] transition-all duration-300">
              Github
            </button>
            <button className="border-4 w-32 border-[#ffd167] rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300">
              Live App
            </button>
          </div>
        </div>
        <div className="shadow-[#cecece] shadow p-4 rounded-xl space-y-4 border border-gray-300">
          <p className="text-center text-3xl font-bold">Netflix Clone</p>
          <div className="w-[550px] h-[300px] flex items-center justify-center">
            <Image
              className="shadow-[#7e7e7e] shadow rounded-md"
              alt="profile picture"
              width={500}
              height={350}
              src="/netflix.gif"
            />
          </div>
          <div className="font-semibold text-[#424242] flex items-center justify-center gap-10">
            <button className="bg-[#ffd167] w-32  rounded-full border-4 border-[#ffd167] hover:border-[#ffd981] px-4 py-2 hover:bg-[#ffe19c] transition-all duration-300">
              Github
            </button>
            <button className="border-4 w-32 border-[#ffd167]rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300">
              Live App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
