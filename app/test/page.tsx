"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";

const TestPage = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const bottomText = useRef<HTMLSpanElement>(null);
  const topText = useRef<HTMLSpanElement>(null);

  const topArrow = useRef<SVGSVGElement>(null);
  const bottomArrow = useRef<SVGSVGElement>(null);

  const handleMouseEnter = () => {
    gsap.to(bottomText.current, {
      y: "-100%",
      duration: 0.2,
      ease: "power2.inOut",
    });
    gsap.to(topText.current, {
      y: "-100%",
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(topArrow.current, {
      y: "-100%",
      x: "100%",
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(bottomArrow.current, {
      y: "-100%",
      x: "100%",
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bottomText.current, {
      y: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });
    gsap.to(topText.current, {
      y: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(topArrow.current, {
      y: 0,
      x: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(bottomArrow.current, {
      y: 0,
      x: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="h-screen flex justify-center items-center border w-full">
      <Link
        href={"#"}
        className="border px-6 py-3 rounded-3xl bg-primary-500 text-primary-100 flex gap-1 items-center"
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative uppercase font-semibold overflow-hidden tracking-wide">
          <span className="block" ref={topText}>
            contact
          </span>
          <span className="block absolute top-full" ref={bottomText}>
            contact
          </span>
        </div>

        <div className="relative overflow-hidden">
          <ArrowUpRight strokeWidth={2.4} size={20} ref={topArrow} />
          <ArrowUpRight
            strokeWidth={2.4}
            size={20}
            className="absolute top-full -left-full"
            ref={bottomArrow}
          />
        </div>
      </Link>
    </div>
  );
};

export default TestPage;
