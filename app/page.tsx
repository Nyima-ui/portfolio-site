import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="border h-[680px] relative">
        <div
          className="absolute h-[828px] w-[828px] bg-accent -top-[184px] -left-[220px] rounded-full blur-[60px] z-0"
          aria-hidden="true"
        />
        <Image
          src={"/Nyima.svg"}
          alt="Nyima"
          height={653}
          width={694}
          className="absolute top-0 -left-[14px] -top-[44px]"
          aria-hidden="true"
          loading="eager"
          priority
        />
        <Navbar />
        <Hero />
      </div>

      <div className="max-w-[115px] mx-auto"></div>
    </main>
  );
}
