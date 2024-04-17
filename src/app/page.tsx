import InformationSection from "./components/informationSection/index"
import AboutSection from "./components/AboutSection/index"
import ProjectsSection from "./components/ProjectSection/index"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <InformationSection />
      <AboutSection />
      <ProjectsSection/>
   </main>
  );
}
