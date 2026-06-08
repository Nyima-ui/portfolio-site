import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div
          className="absolute h-207 w-207 bg-accent -top-46 -left-55 max-sm:-left-127.5 max-sm:top-62.5 rounded-full blur-[60px] z-0"
          aria-hidden="true"
        />
        <Image
          src={"/Nyima.svg"}
          alt="Nyima"
          height={653}
          width={694}
          className="absolute -left-3.5 max-sm:hidden -top-11 max-sm:top-105"
          aria-hidden="true"
          loading="eager"
          priority
        />
        <Image
          src={"/NyimaM.svg"}
          alt="Nyima"
          height={399}
          width={423}
          className="absolute hidden max-sm:block -top-11 max-sm:top-90"
          aria-hidden="true"
          loading="eager"
          priority
        />
        <Navbar />
        <Hero />
      </div>

      <div className="px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5 relative z-10">
        <Projects />
        <Skill />
        <AboutMe />
      </div>
    </main>
  );
}
