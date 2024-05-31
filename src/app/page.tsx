import CoverPage from "@/components/coverPage";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="h-full w-full bg-white text-[#252525]">
      <Header />
      <CoverPage />
      <div className="h-screen"></div>
    </main>
  );
}
