"use client";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import AnimatedLink from "./AnimatedLink";

let hasAnimated = false;
const Hero = () => {
  const headingRef = useRef<HTMLInputElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) {
      gsap.set(headingRef.current, { y: 0, opacity: 1 });
      gsap.set(paraRef.current, { y: 0 });
      gsap.set(buttonRef.current, { y: 0, opacity: 1 });
      gsap.set(imageRef.current, { clipPath: "inset(0 0 0% 0" });
      return;
    }

    const runAnimation = () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
          onComplete: () => {
            hasAnimated = true;
          },
        });

        tl.to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 })
          .to(paraRef.current, { y: 0, duration: 0.5 }, "-=0.4")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.35")
          .to(
            imageRef.current,
            { clipPath: "inset(0 0 0% 0)", duration: 0.5 },
            "-=0.8",
          );
      });

      return ctx;
    };

    window.addEventListener("introComplete", runAnimation);
    return () => window.removeEventListener("introComplete", runAnimation);
  }, []);

  return (
    <section
      className="relative z-10 px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5"
      id="hero"
    >
      <div className="mx-auto flex justify-between items-center py-31.5 max-sm:py-12 gap-12 max-sm:flex-col-reverse">
        <div>
          <div className="overflow-hiden">
            <h1
              className="font-cormorant font-semibold leading-tight text-[clamp(2.4rem,7vw,6.75rem)] whitespace-nowrap max-sm:text-[52px] max-sm:text-center translate-y-full opacity-0"
              ref={headingRef}
            >
              Tenzin Nyima
            </h1>
          </div>
          <div className="overflow-hidden ml-4 mt-4 max-md:ml-2.5">
            <p className="max-sm:text-center translate-y-full" ref={paraRef}>
              From idea to deployment. <br />
              I'm a full-stack developer who takes products end-to-end.
            </p>
          </div>

          <AnimatedLink
            ref={buttonRef}
            href="mailto:ntenzin492@gmail.com"
            label="contact"
            className="mt-5 ml-4 max-sm:mx-auto opacity-0 translate-y-2.5"
          />
        </div>

        <div
          className="overflow-hidden [clip-path:inset(0_0_100%_0)]"
          ref={imageRef}
        >
          <div>
            <Image
              height={380}
              width={354}
              src={"/Me.png"}
              alt="Portrait of Tenzin Nyima"
              loading="eager"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
