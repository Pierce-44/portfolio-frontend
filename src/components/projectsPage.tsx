import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

interface Props {
  projectsRef: React.RefObject<HTMLDivElement>;
}

export default function ProjectsPage({ projectsRef }: Props) {
  return (
    <div ref={projectsRef} className="h-full pt-20">
      <div className="space-y-4 mb-10">
        <p className="text-center font-semibold text-lg max-sm:hidden text-gray-500 dark:text-gray-400">
          Explore My
        </p>
        <p className="text-center text-5xl font-bold max-sm:text-3xl dark:text-white">
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
            <p className="text-center text-3xl font-bold pb-4 max-sm:text-lg dark:text-white">
              F1 Fast Facts - Website
            </p>
            <div className="relative  w-[80vw] h-[35vh] max-w-[800px] flex items-center justify-center">
              <video
                className=" w-[80vw] h-[35vh]"
                autoPlay
                loop
                muted
                src="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/demo-f1-fast-facts.webm?alt=media&token=09e48878-9b58-46b6-875e-0ad9d60c3b28"
              ></video>
            </div>
            <div className="font-semibold text-[#424242] flex items-center justify-center gap-10 pt-10">
              <Link
                href="https://github.com/Pierce-44/f1-fast-facts"
                target="_blank"
                className="bg-[#ffd167] w-32 text-center rounded-full border-2 border-[#ffd167] hover:border-[#ffd981] px-4 py-2 hover:bg-[#ffe19c] transition-all duration-300"
              >
                Github
              </Link>
              <Link
                href="https://f1-fast-facts.vercel.app"
                target="_blank"
                className="border-2 w-32 border-[#ffd167] dark:text-gray-100 dark:hover:text-gray-800 text-center rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300"
              >
                Live App
              </Link>
            </div>
          </div>
        </SwiperSlide>
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
                src="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/eEdition.gif?alt=media&token=764ba91e-e611-4e0c-ba79-83c686be3748"
                unoptimized
              />
            </div>
            <div className="font-semibold text-[#424242] flex items-center justify-center gap-10 pt-10">
              <p className="dark:text-gray-100 dark:hover:text-gray-800 ">
                *Private Repo*
              </p>
              <Link
                href="https://eedition.bnd.com/shortcode/LMCBLV"
                target="_blank"
                className="border-2 w-32 border-[#ffd167] dark:text-gray-100 dark:hover:text-gray-800 text-center rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300"
              >
                Live App
              </Link>
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
                src="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/instagram.gif?alt=media&token=00f33d32-9ad0-41bf-a70d-a826b1a5818b"
                unoptimized
              />
            </div>
            <div className="font-semibold text-[#424242] flex items-center justify-center gap-10 pt-10">
              <Link
                href="https://github.com/Pierce-44/instagram-clone"
                target="_blank"
                className="bg-[#ffd167] w-32 text-center rounded-full border-2 border-[#ffd167] hover:border-[#ffd981] px-4 py-2 hover:bg-[#ffe19c] transition-all duration-300"
              >
                Github
              </Link>
              <Link
                href="https://instagram-clone-mu-two.vercel.app/"
                target="_blank"
                className="border-2 w-32 border-[#ffd167] dark:text-gray-100 dark:hover:text-gray-800 text-center rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300"
              >
                Live App
              </Link>
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
                src="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/netflix.gif?alt=media&token=79e663b7-1c05-4e36-83f9-31f29f1fa3d3"
                unoptimized
              />
            </div>
            <div className="font-semibold text-[#424242] flex items-center justify-center gap-10 pt-10">
              <Link
                href="https://github.com/Pierce-44/netflix-clone"
                target="_blank"
                className="bg-[#ffd167] w-32 text-center rounded-full border-2 border-[#ffd167] hover:border-[#ffd981] px-4 py-2 hover:bg-[#ffe19c] transition-all duration-300"
              >
                Github
              </Link>
              <Link
                href="https://project-net.vercel.app/"
                target="_blank"
                className="border-2 w-32 text-center border-[#ffd167] dark:text-gray-100 dark:hover:text-gray-800  rounded-full px-4 py-2 hover:bg-[#ffd167] transition-all duration-300"
              >
                Live App
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
