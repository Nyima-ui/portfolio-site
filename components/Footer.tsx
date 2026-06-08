"use client";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/constant";

const Footer = () => {
  return (
    <footer className="px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5 relative z-10 pt-28 pb-6 space-y-14">
      <nav aria-label="Socials links">
        <ul className="flex justify-between flex-wrap gap-x-10 gap-y-5 max-sm:justify-normal">
          {socials.map((s, i) => (
            <li key={i}>
              <Link href={s.href} className="flex gap-2 relative group">
                <Image width={20} height={20} src={s.icon} alt={s.label} />
                <span className="text-sm 
                 after:content-[''] after:absolute after:h-px after:w-full after:-bottom-1.5 after:bg-foreground/70 after:left-0
                 after:scale-0 group-hover:after:scale-100 after:origin-left after:duration-300
                ">{s.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-sm justify-between flex text-foreground/60 flex-wrap gap-y-1.5 max-sm:flex-col">
        <span>© 2026 Tenzin Nyima</span>
        <span>Built by me, fueled with black coffee</span>
        <span>Based in Ladakh, India</span>
      </div>
    </footer>
  );
};

export default Footer;
