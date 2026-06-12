import { cn } from "@/lib/utils";
import ProjectHero from "@/components/ProjectHero";
import ProjectBody from "@/components/ProjectBody";
import TechStack from "@/components/TechStack";
import ProjectFooter from "@/components/ProjectFooter";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const DeepLock = () => {
  return (
    <>
      <main
        className={cn(
          "px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5",
        )}
      >
        <ProjectHero
          id="3"
          title="DeepLock"
          description="Lock yourself out of your phone. Get back in only when you're ready."
          image="/projects/deeplock-hero3.png"
        />
        <ProjectBody
          github="https://github.com/Nyima-ui/DeepLock"
          liveDemo="https://deep-lock.vercel.app/"
          problem={[
            "After Covid, my screen time hit 6–7 hours a day. I tried every app blocker I could find. None of them worked. You could just uninstall the app or wait five seconds. Too easy to cheat, especially when the person cheating was you.",
          ]}
          solution={[
            "I needed something to hold my password until I was ready for it back. Not a person. Something with no exceptions and no way out.",
            "After some research, I found it. Timelock encryption. It encrypts your password and returns a key that cannot be decrypted until a time you choose. No backdoor. No override.",
            "DeepLock is the web app I built on top of it. Pick a date, generate a random password, and lock yourself out. The Drand network handles the rest behind the scenes.",
          ]}
          broadImage="/projects/deeplock-broad.png"
          verticalImage="/projects/deeplock-vertical.png"
        />
        <TechStack stack={["Next.js", "Timelock Encryption", "shadcn/ui"]} />
        <ProjectFooter />
      </main>

      <Cta />
      <Footer />
    </>
  );
};

export default DeepLock;
