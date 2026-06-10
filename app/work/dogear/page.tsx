import ProjectBody from "@/components/ProjectBody";
import ProjectHero from "@/components/ProjectHero";
import TechStack from "@/components/TechStack";
import React from "react";

const DogearPage = () => {
  return (
    <main className="px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5">
      <ProjectHero
        id="1"
        title="Dogear"
        description="Simple book tracking with an AI that actually knows your taste."
        image="/projects/dogear-hero.png"
      />
      <ProjectBody
        github="https://github.com/Nyima-ui/Dogear"
        liveDemo="https://dogear-beta.vercel.app/dashboard/log"
        problem={[
          "Five years of reading. When it came time to track it, nothing felt right. Google Sheets was cold. Goodreads and Hardcover had too much going on. I just wanted something simple.",
        ]}
        solution={[
          "Built my own. It's called Dogear, after the folded corners on old books.",
          "It logs what you read, suggests your next book based on your history, and can answer questions about whatever you're currently reading.",
          "The hardest part was the AI. I needed an embedding model that could handle a 300-page PDF without costing money. After some digging I landed on nomic-embed-text-v1.5. It has generous free tier, batching support, and it worked exactly as needed.",
          "I also added a voice feature using Vapi and ElevenLabs. Ask the AI out loud instead of typing. Useful when you don't want to put the book down.",
        ]}
        broadImage="/projects/dogear-broad.png"
        verticalImage="/projects/dogear-vertical.png"
      />
      <TechStack
        stack={[
          "Next.js",
          "Tailwind CSS",
          "MongoDB",
          "Vapi AI",
          "Vercel Storage",
          "Nomic Embed",
          "ElevenLabs",
        ]}
      />
    </main>
  );
};

export default DogearPage;
