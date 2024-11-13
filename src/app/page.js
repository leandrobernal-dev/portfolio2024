import About from "@/app/components/About";
import BlogSection from "@/app/components/Blog";
import CustomCursor from "@/app/components/Cursor";
import ExperienceCards from "@/app/components/ExperienceCards";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProjectGrid from "@/app/components/ProjectsGrid";
import TechStack from "@/app/components/TechStack";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center py-12 font-sans text-white md:py-20 lg:py-0">
      <CustomCursor />
      <div className="w-full max-w-screen-xl px-6 lg:flex lg:justify-between lg:gap-6">
        <Header />

        <main className="space-y-10 pt-16 md:space-y-24 lg:w-3/4 lg:py-24">
          <About />
          <TechStack />
          <ProjectGrid />
          <ExperienceCards />
          <BlogSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
