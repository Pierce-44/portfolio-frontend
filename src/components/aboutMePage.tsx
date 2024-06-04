import Image from "next/image";

interface Props {
  aboutMeRef: React.RefObject<HTMLDivElement>;
}

export default function AboutMePage({ aboutMeRef }: Props) {
  return (
    <div
      ref={aboutMeRef}
      className="h-full flex flex-col justify-evenly items-center px-10 max-md:px-2 overflow-hidden "
    >
      <div className="space-y-4">
        <p className="text-center font-semibold text-lg max-sm:text-small">
          Get To Know More
        </p>
        <p className="text-center text-5xl font-bold max-sm:text-3xl max-lg:pb-3">
          About Me
        </p>
      </div>
      <div className="flex items-center justify-evenly w-full mb-48 max-md:mb-0">
        <div className="relative h-[350px] w-[350px] max-xl:h-[200px] max-xl:w-[200px] shrink-0 max-md:hidden mr-4">
          <Image
            fill
            alt="profile picture"
            src="/myPicture.webp"
            className="bg-[#ff8080] rounded-full mr-4"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex justify-between items-center gap-10 w-full max-xl:gap-4 max-xl:flex-col">
            <div className="flex flex-col justify-center items-center  border-2 border-[#ff8080] rounded-lg w-full max-xl:w-max max-xl:px-20 py-4 max-md:p-1 max-md:w-full">
              <div className="flex items-center justify-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35px"
                  viewBox="0 -960 960 960"
                  width="35px"
                  className="fill-[#ff8080] "
                >
                  <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
                <p className="font-bold text-2xl max-lg:text-lg ">Experience</p>
              </div>
              <p className="font-semibold">Currently Working at PageSuite</p>
              <p className="max-md:text-sm">
                Full-Stack Software Engineer, 3 Years +
              </p>
            </div>
            <div className="max-md:p-1 flex flex-col justify-center items-center border-2 border-[#ff8080] rounded-lg w-full py-4 max-xl:w-max max-xl:px-20 max-md:w-full">
              <div className="flex items-center justify-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35px"
                  viewBox="0 -960 960 960"
                  width="35px"
                  className="fill-[#ff8080] "
                >
                  <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                </svg>
                <p className="font-bold text-2xl max-lg:text-lg ">Education</p>
              </div>
              <p className="max-md:text-sm text-center">
                Automotive Engineering (MSc) - First-Class Honours
              </p>
              <p className="max-md:text-sm text-center">
                Mechanical Engineering (BEng) - First-Class Honours
              </p>
            </div>
          </div>
          <p className="max-w-[900px] text-center font-semibold text-lg max-xl:text-base max-lg:text-sm max-sm:text-[10px]">
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
