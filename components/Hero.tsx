"use client";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import AnimatedLink from "./AnimatedLink";

const Hero = () => {
  const headingRef = useRef<HTMLInputElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.9 },
    });

    tl.from(headingRef.current, { y: "100%", duration: 1 })
      .from(paraRef.current, { y: "100%", duration: 0.8 }, "-=0.6")
      .from(buttonRef.current, { opacity: 0, y: 10, duration: 0.6 }, "-=0.6")
      .from(
        imageRef.current,
        { clipPath: "inset(0 0 100% 0)", duration: 1.1 },
        "-=1.2",
      );
  }, []);

  return (
    <section className="relative z-10 px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5">
      <div className="mx-auto flex justify-between items-center py-31.5 max-sm:py-12 gap-12 max-sm:flex-col-reverse">
        <div>
          <div className="overflow-hidden">
            <h1
              className="font-cormorant font-semibold leading-tight text-[clamp(2.4rem,7vw,6.75rem)] whitespace-nowrap max-sm:text-[52px] max-sm:text-center"
              ref={headingRef}
            >
              Tenzin Nyima
            </h1>
          </div>
          <div className="overflow-hidden ml-4 mt-4 max-md:ml-2.5">
            <p className="max-sm:text-center" ref={paraRef}>
              From idea to deployment. <br />
              I'm a full-stack developer who takes products end-to-end.
            </p>
          </div>

          <AnimatedLink
            ref={buttonRef}
            href="#"
            label="contact"
            className="mt-5 ml-4 max-sm:mx-auto"
          />
        </div>

        <div className="overflow-hidden" ref={imageRef}>
          <div>
            <Image
              height={380}
              width={354}
              src={"/Me.png"}
              alt="Portrait of Tenzin Nyima"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
