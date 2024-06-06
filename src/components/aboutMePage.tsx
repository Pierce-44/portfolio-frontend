import Image from "next/image";

interface Props {
  aboutMeRef: React.RefObject<HTMLDivElement>;
}

export default function AboutMePage({ aboutMeRef }: Props) {
  return (
    <div
      ref={aboutMeRef}
      className="h-full flex flex-col justify-evenly items-center px-10 max-md:px-4 overflow-hidden max-sm:justify-center"
    >
      <div className="space-y-4 max-sm:space-y-0">
        <p className="text-center font-semibold text-lg max-sm:hidden">
          Get To Know More
        </p>
        <p className="text-center text-5xl font-bold max-sm:text-3xl max-lg:pb-4 max-[400px]:pb-4">
          About Me
        </p>
      </div>
      <div className="flex items-center justify-evenly w-full mb-48 max-md:mb-0">
        <div className="relative h-[250px] w-[250px] max-xl:h-[200px] max-xl:w-[200px] shrink-0 max-lg:hidden mr-4">
          <Image
            fill
            alt="profile picture"
            src="/myPicture.webp"
            className="bg-[#ff8080] rounded-full mr-4"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-20 max-sm:gap-10">
          <div className="flex flex-row-reverse justify-center items-center gap-10 max-sm:pt-10 max-sm:flex-col-reverse max-sm:items-start max-sm:self-start ">
            <div className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="fill-[#ff8080] h-6 w-6 shrink-0 max-[450px]:hidden"
              >
                <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
              </svg>
              <div className="border-l-2 border-[#ff8080] pl-4 max-sm:text-sm max-[400px]:text-[10px]">
                <p className="font-semibold">Education</p>
                <p className="">
                  Automotive Engineering (MSc) - First-Class Honours
                </p>
                <p> Mechanical Engineering (BEng) - First-Class Honours</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="fill-[#ff8080] h-6 w-6 shrink-0 max-[450px]:hidden"
              >
                <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
              </svg>
              <div className="border-l-2 border-[#ff8080] pl-4 max-sm:text-sm max-[400px]:text-[10px]">
                <p className="font-semibold">Experience</p>
                <p>
                  Currently Working at
                  <b className="font-semibold"> PageSuite</b>
                </p>
                <p>Full-Stack Software Engineer, 2 Years +</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="fill-[#ff8080] h-6 w-6 shrink-0 max-[450px]:hidden"
            >
              <path d="M320-160q-33 0-56.5-23.5T240-240v-120h120v-90q-35-2-66.5-15.5T236-506v-44h-46L60-680q36-46 89-65t107-19q27 0 52.5 4t51.5 15v-55h480v520q0 50-35 85t-85 35H320Zm120-200h240v80q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l240 240v56h-56L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h92v86q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z" />
            </svg>
            <p className="max-w-[810px] border-l-2 border-[#ff8080] pl-4 max-sm:text-sm max-[400px]:text-[10px]">
              I am a passionate Full-Stack software engineer with core
              experiences in TypeScript- based programming, specialising in
              React/Next.js projects. I thrive in both solo and collaborative
              environments, I have successfully helped lead the development of a
              new interactive E-edition web version at Pagesuite, utilising
              Next.js and a TypeScript-based reader SDK. This project, recently
              released to a major client, highlighting my ability to blend
              creativity with analytical thinking. I am eager to obtain a
              challenging position where I can further expand my skills and
              contribute to high-quality, innovative projects.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-10 max-sm:gap-4">
          <div className="flex justify-between items-center gap-10 w-full max-xl:gap-4 max-xl:flex-col">
            <div className="flex flex-col justify-center items-center  border-2 border-[#ff8080] rounded-lg w-full max-xl:w-max max-xl:px-20 py-4 max-md:p-4 max-[400px]:py-1">
              <div className="flex items-center justify-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="fill-[#ff8080] h-9 w-9 "
                >
                  <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
                <p className="font-bold text-2xl max-lg:text-lg max-sm:text-base">
                  Experience
                </p>
              </div>
              <p className="font-semibold max-sm:text-base">
                Currently Working at PageSuite
              </p>
              <p className="max-md:text-sm max-sm:text-[10px]">
                Full-Stack Software Engineer, 3 Years +
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-[#ff8080] rounded-lg w-full py-4 max-xl:w-max max-xl:px-20 max-md:p-4 max-[400px]:py-1">
              <div className="flex items-center justify-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="fill-[#ff8080] h-9 w-9 "
                >
                  <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                </svg>
                <p className="font-bold text-2xl max-lg:text-lg ">Education</p>
              </div>
              <p className="max-md:text-sm text-center max-sm:text-[10px]">
                Automotive Engineering (MSc) - First-Class Honours
              </p>
              <p className="max-md:text-sm text-center max-sm:text-[10px]">
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
        </div> */}
      </div>
    </div>
  );
}
