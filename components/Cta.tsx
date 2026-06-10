"use client";
import { gsap } from "gsap";
import AnimatedLink from "./AnimatedLink";
import { useEffect, useRef } from "react";

const Cta = () => {
  const heading = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heading.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading.current,
          start: "top 95%",
        },
      });
      gsap.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: heading.current,
          start: "top 95%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#C5C5C3]/30 px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5 py-12 relative z-10 space-y-7">
      <h3 className="text-center text-[25px] leading-tight" ref={heading}>
        Got a project in mind? I'd love to hear it.
      </h3>
      <AnimatedLink
        href={"mailto:ntenzin492@gmail.com"}
        label="Let's Talk"
        className="mx-auto normal-case px-5 py-2.5"
        ref={buttonRef}
      />
    </section>
  );
};

export default Cta;
