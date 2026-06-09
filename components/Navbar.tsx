"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const topText = useRef<HTMLSpanElement>(null);
  const bottomText = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    gsap.to(topText.current, {
      y: "-100%",
      duration: 0.25,
      ease: "power2.inOut",
    });

    gsap.to(bottomText.current, {
      y: "-100%",
      duration: 0.25,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(topText.current, { y: "0%", duration: 0.25, ease: "power2.inOut" });
    gsap.to(bottomText.current, {
      y: "0%",
      duration: 0.25,
      ease: "power2.inOut",
    });
  };

  return (
    <Link
      href={href}
      className="relative h-5.5 flex flex-col overflow-hidden tracking-wide"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={topText}>{label}</span>
      <span ref={bottomText}>{label}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="relative z-10 text-primary-900">
      <nav className="flex justify-between px-10 pt-2 py-4 max-sm:px-5 items-center">
        <Link href={"/"} className="select-none font-cormorant text-xl">
          Ten Nyima
        </Link>

        <div className="flex gap-7 tracking-wide max-sm:gap-5 text-sm pt-1">
          <NavLink href="#" label="Projects" />
          <NavLink href="#" label="About" />
        </div>

        <NavLink href="#" label="Contact" />
      </nav>
    </header>
  );
};

export default Navbar;
