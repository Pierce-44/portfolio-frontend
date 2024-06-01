import Image from "next/image";

export default function AboutMePage() {
  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <div className="space-y-4">
        <p className="text-center font-semibold text-lg">Get To Know More</p>
        <p className="text-center text-5xl font-bold">About Me</p>
      </div>
      <div className="flex items-center justify-center gap-32 mb-48">
        <Image
          alt="profile picture"
          width={350}
          height={350}
          src="/myPicture.webp"
          className="bg-[#ff8080] rounded-full"
        />
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center  border-2 border-[#ff8080] rounded-lg py-7 px-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                className="fill-[#ff8080]"
              >
                <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
              </svg>
              <p className="font-bold text-2xl">Experience</p>
              <p className="font-semibold">Working at PageSuite</p>
              <p>2 Years + </p>
              <p>Full-Stack Software Engineer</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-[#ff8080] rounded-lg p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                className="fill-[#ff8080]"
              >
                <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
              </svg>
              <p className="font-bold text-2xl">Education</p>
              <p>Masters Degree (MSc) - First-Class Honours</p>
              <p>Bachelor of Engineering (BEng) - First-Class Honours</p>
            </div>
          </div>
          <p className="max-w-[900px] text-center font-semibold text-lg">
            I am a passionate Full-Stack software engineer with core experiences
            in TypeScript- based programming, specialising in React/Next.js
            projects. I thrive in both solo and collaborative environments, I
            have successfully helped lead the development of a new interactive
            E-edition web version at Pagesuite, utilising Next.js and a
            TypeScript-based reader SDK. This project, recently released to a
            major client, highlighting my ability to blend creativity with
            analytical thinking. I am eager to obtain a challenging position
            where I can further expand my skills and contribute to high-quality,
            innovative projects.
          </p>
        </div>
      </div>
    </div>
  );
}
