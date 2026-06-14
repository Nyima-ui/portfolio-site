"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";

const NavLink = ({
  href,
  label,
  target,
  onClick,
}: {
  href: string;
  label: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
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
      target={target}
      className="relative h-5.5 flex flex-col overflow-hidden tracking-wide"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span ref={topText}>{label}</span>
      <span ref={bottomText}>{label}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="z-100 text-primary-900 sticky top-0 bg-linear-to-b from-primary-100 to-primary-100/40 backdrop-blur-xs" id="top-navbar">
      <nav className="flex justify-between px-10 pt-2 py-4 max-sm:px-5 items-center">
        <Link href={"/"} className="select-none font-cormorant text-xl">
          Ten Nyima
        </Link>

        <div className="flex gap-7 tracking-wide max-sm:gap-5 text-sm pt-1">
          <NavLink
            href="#projects"
            label="Projects"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("projects");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#projects";
              }
            }}
          />
          <NavLink
            href="#"
            label="About"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("about");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#about";
              }
            }}
          />
        </div>

        <NavLink
          href="mailto:ntenzin492@gmail.com"
          label="Contact"
          target="_blank"
        />
      </nav>
    </header>
  );
};

export default Navbar;
