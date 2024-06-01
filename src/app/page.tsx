import AboutMePage from "@/components/aboutMePage";
import BottomBannerClientWrapper from "@/components/bottomBannerClientWrapper";
import CoverPage from "@/components/coverPage";
import HeaderClientWrapper from "@/components/headerClientWrapper";
import MySkillsPage from "@/components/mySkillsPage";
import ProjectsPage from "@/components/projectsPage";

export default function Home() {
  return (
    <main className="h-full w-full text-[#252525] ">
      <HeaderClientWrapper />
      <CoverPage />
      <AboutMePage />
      <MySkillsPage />
      <ProjectsPage />
      <BottomBannerClientWrapper />
    </main>
  );
}
