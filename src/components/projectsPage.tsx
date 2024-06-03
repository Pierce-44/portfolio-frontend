import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  projectsRef: React.RefObject<HTMLDivElement>;
}

export default function ProjectsPage({ projectsRef }: Props) {
  return (
    <div ref={projectsRef} className="h-full pt-20">
      <div className="space-y-4 mb-10">
        <p className="text-center font-semibold text-lg">Explore My</p>
        <p className="text-center text-5xl font-bold max-sm:text-3xl">
          Projects
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
      >
        <SwiperSlide className="">
          <div className="pb-20 flex flex-col justify-center items-center">
            <p className="text-center text-3xl font-bold pb-4 max-sm:text-lg">
              PageSuite - SaaS eEdition Website
            </p>
            <div className="relative  w-[80vw] h-[35vh] max-w-[800px] flex items-center justify-center">
              <Image
                className="rounded-md "
                alt="profile picture"
                layout="fill"
                objectFit="contain"
                src="/eEdition.gif"
                unoptimized
              />
            </div>
            <div className="font-semibold text-[#424242] flex items-center justify-center gap-10 pt-10">
              <p>*Private Repo*</p>
              <button className="border-4 w-32 border-[#ffd167] rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300">
                Live App
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col justify-center items-center ">
            <p className="text-center text-3xl font-bold pb-4 max-sm:text-lg">
              Instagram Clone
            </p>
            <div className="relative w-[80vw] h-[35vh] max-w-[800px] flex items-center justify-center">
              <Image
                className="rounded-md "
                alt="profile picture"
                layout="fill"
                objectFit="contain"
                src="/instagram.gif"
                unoptimized
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
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col justify-center items-center  ">
            <p className="text-center text-3xl font-bold pb-4 max-sm:text-lg">
              Netflix Clone
            </p>
            <div className="relative w-[80vw] h-[35vh] max-w-[800px] flex items-center justify-center">
              <Image
                className="rounded-md "
                alt="profile picture"
                layout="fill"
                objectFit="contain"
                src="/netflix.gif"
                unoptimized
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
