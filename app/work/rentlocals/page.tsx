import { cn } from "@/lib/utils";
import ProjectHero from "@/components/ProjectHero";
import ProjectBody from "@/components/ProjectBody";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ProjectFooter from "@/components/ProjectFooter";

const RentLocalsPage = () => {
  return (
    <>
      <main
        className={cn(
          "px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5",
        )}
      >
        <ProjectHero
          id="2"
          title="RentLocals"
          description="Rent what you need. From someone down the street."
          image="/projects/rentlocals-hero.png"
        />
        <ProjectBody
          github="https://github.com/Nyima-ui/rentLocals3"
          liveDemo="https://rent-locals3.vercel.app/"
          problem={[
            "Found this brief on Upwork. Someone in Toronto asked: what if instead of buying expensive gear, you could just borrow it? High-end cameras, party equipment, heavy machinery. Pay for the time you need, return it when done.",
            "I liked the idea. So I built it.",
          ]}
          solution={[
            "RentLocals is a marketplace where owners list what they're willing to rent out. Renters browse, check availability, pick a date, and send a booking request.",
            "The hardest part was the booking system. How does the owner get notified? How do both sides see updates in real time? How does the meetup location update as the booking moves through different stages?",
            "Supabase handles the real-time UI updates and runs on a Postgres relational database with row-level security. So users can only ever access what they're supposed to. Next.js takes care of the frontend and server-side logic.",
          ]}
          broadImage="/projects/rentlocals-broad.png"
          verticalImage="/projects/rentlocals-vertical.png"
        />
        <TechStack
          stack={["Next.js", "Tailwind CSS", "shadcn/ui", "supabase"]}
        />
        <ProjectFooter />
      </main>

      <Cta />
      <Footer />
    </>
  );
};

export default RentLocalsPage;
