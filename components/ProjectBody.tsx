"use client";
import Image from "next/image";
import AnimatedLink from "./AnimatedLink";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ProjectBody = ({
  github,
  liveDemo,
  problem,
  solution,
  broadImage,
  verticalImage,
}: ProjectBodyProps) => {
  const links = useRef<HTMLUListElement>(null);
  const description = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray(links.current!.querySelectorAll("li"));

    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: links.current,
          start: "top 92%",
        },
      });

      gsap.from(description.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: links.current,
          start: "top 92%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 max-xl:flex-col">
      <div className="flex justify-between gap-2 max-xl:flex-col-reverse max-xl:gap-6">
        <ul className="space-y-3 w-fit" ref={links}>
          <li>
            <AnimatedLink
              href={github}
              label="GitHub"
              className="bg-transparent text-foreground px-5 py-2.5 normal-case w-full justify-between text-sm"
            />
          </li>
          <li>
            <AnimatedLink
              href={liveDemo}
              label="View live demo"
              className="px-5 py-2.5 normal-case text-nowrap text-sm"
            />
          </li>
        </ul>

        <div className="max-w-205 shrink-0" ref={description}>
          <h2 className="text-[31px]">The problem</h2>
          <div className="mt-2 space-y-1">
            {problem.map((p, i) => (
              <p key={i} className="leading-[1.8]">
                {p}
              </p>
            ))}
          </div>
          <h2 className="text-[31px] mt-8">The solution</h2>
          <div className="mt-2 space-y-1">
            {solution.map((p, i) => (
              <p key={i} className="leading-[1.8]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-9 items-start max-lg:flex-col max-lg:gap-7 max-w-205 ml-auto max-xl:max-w-none max-xl:justify-normal max-xl:gap-8">
        <Image
          width={484}
          height={317}
          src={broadImage}
          alt={"Project screenshot."}
          className="rounded-xl shadow-xl ml-auo max-xl:ml-0 max-lg:w-full"
        />

        <Image
          width={305}
          height={520}
          src={verticalImage}
          alt={"Project screenshot."}
          className="rounded-xl shadow-xl max-sm:w-full"
        />
      </div>
    </section>
  );
};

export default ProjectBody;
