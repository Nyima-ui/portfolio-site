"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ArrowUp01 } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
  const heading = useRef<HTMLHeadingElement>(null);
  const paraContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heading.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: el,
          start: "top 98%",
        },
      });
      const items = gsap.utils.toArray<HTMLParagraphElement>(
        paraContainer.current!.querySelectorAll("p"),
      );

      gsap.from(items, {
        y: 30,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: paraContainer.current,
          start: "top 88%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-12" id="about">
      <h2 className="text-[31px] text-center" ref={heading}>
        About me
      </h2>

      <div className="flex gap-25 mt-12 items-start max-lg:flex-col max-lg:gap-10">
        <div
          className="max-w-147.25 space-y-3 leading-relaxed max-lg:max-w-none"
          ref={paraContainer}
        >
          <p>Hey, I'm Tenzin Nyima. Everyone calls me Nyima.</p>
          <p>
            I'm a self-taught full stack developer with a year and a half of
            focused, hands-on practice. I work on the full thing, from designing
            components in Figma, to building out the frontend and backend, to
            deploying the final product.
          </p>
          <p>
            Along the way, I've worked across the stack: frontend interfaces,
            backend systems, and integrating AI features into web applications.
          </p>
          <p>
            What keeps me going is a drive for mastery. Software development
            suits me perfectly because the learning never runs out.
          </p>
          <p>
            If your project is something I can learn from and grow with, I'm in.
            I work best when I'm slightly outside my comfort zone.
          </p>
        </div>

        <div className="rounded-3xl grow border border-white/80 backdrop-blur-[2px] bg-linear-to-b from-primary-100/10 to-primary-100 min-w-81.5 max-lg:w-full">
          <Image
            width={291}
            height={291}
            src={"/sun.svg"}
            alt="Sun icon"
            className="ml-auto"
          />

          <Link
            href={"#"}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-full bg-[#E2E2C8] py-2 px-4 flex gap-1 ml-auto text-foreground items-center w-fit"
          >
            <ArrowUp01 size={16} strokeWidth={1.7} />
            <span>Top</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
