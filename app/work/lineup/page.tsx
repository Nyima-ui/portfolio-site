import { cn } from "@/lib/utils";
import ProjectHero from "@/components/ProjectHero";
import ProjectBody from "@/components/ProjectBody";
import TechStack from "@/components/TechStack";
import ProjectFooter from "@/components/ProjectFooter";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const LineUpPage = () => {
  return (
    <>
      <main
        className={cn(
          "px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5",
        )}
      >
        <ProjectHero
          id="4"
          title="Lineup"
          description="Notes and tasks, at the speed of thought."
          image="/projects/lineup-hero.png"
        />
        <ProjectBody
          github="https://github.com/Nyima-ui/LineUp"
          liveDemo="https://line-up-peach.vercel.app/"
          problem={[
            "I've tried a lot of productivity apps. None of them stuck. Google Keep felt cluttered. Notion, as much as everyone loves it, felt too heavy to keep running in the background all day.",
            "During coding sessions I ended up using a plain .md file. The monospace font, the editor suggestions,  something about the VS Code experience just worked. But I didn't want to open a full desktop app every time I needed to jot something down.",
          ]}
          solution={[
            "So I built my own. My first instinct was to build a code editor from scratch. After hours of coding I had something that worked, but it was nowhere near the feel of VS Code. Too many edge cases, too many problems to chase.",
            "After some digging I found out that the text editor VS Code runs on is open source. I integrated Monaco Editor, built CRUD on top of it, and kept everything in the browser's localStorage. No accounts, no backend, just fast.",
            "I use Lineup every day. It lives as a pinned tab.",
          ]}
          broadImage="/projects/lineup-broad.png"
          verticalImage="/projects/lineup-vertical.png"
        />
        <TechStack stack={["Next.js", "Local Storage", "Monaco Editor"]} />
        <ProjectFooter />
      </main>

      <Cta />
      <Footer />
    </>
  );
};

export default LineUpPage;
