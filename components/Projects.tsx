"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/constant";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ProjectCard = ({ p }: { p: ProjectInterface }) => {
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <li ref={cardRef} className="group">
      <Link
        href={p.link}
        className="flex justify-between mt-11.5 gap-10 max-lg:flex-col max-lg:gap-3"
      >
        <div
          className="bg-linear-to-b from-primary-200 to-primary-100 rounded-xl relative
             after:content-[''] after:absolute after:inset-0 
             after:z-10 after:opacity-0 after:bg-linear-to-b after:from-primary-100/0 after:to-primary-100/30
             group-hover:after:opacity-100 after:transition-opacity after:duration-400 after:ease-out"
        >
          <Image
            width={697}
            height={375}
            src={p.image}
            alt={p.heading}
            className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-600 ease-out"
          />
        </div>

        <div className="flex flex-col justify-between max-w-70 max-h-92.5 pt-5 max-lg:max-w-none">
          <div>
            <h3 className="text-[25px]">{p.heading}</h3>
            <p className="mt-3">{p.paragraph}</p>
          </div>

          <div className="mt-auto max-lg:mt-10">
            <div className="font-medium text-sm flex flex-wrap gap-x-3 gap-y-2">
              {p.stack.map((s, i) => (
                <span
                  key={i}
                  className="border border-primary-200 rounded-md text-primary-400 px-2.5 py-1.25"
                >
                  {s}
                </span>
              ))}
            </div>

            <button
              className="flex mt-8 text-sm text-[#5577CB] group-hover:text-[#445fa2] items-center gap-1 cursor-pointer  transition-all duration-500 ease-out"
              aria-label={`View details for ${p.heading}`}
            >
              <span>View details</span>
              <ArrowRight
                className="opacity-80 pt-0.5 group-hover:translate-x-3 transition-transform duration-300 ease-out"
                size={16}
              />
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

const Projects = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    if (sessionStorage.getItem("projectsHeadingAnimated")) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        duration: 0.5,
        ease: "power3.out",
        delay: 1.4,
        onComplete: () =>
          sessionStorage.setItem("projectsHeadingAnimated", "true"),
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-12" id="projects">
      <div className="overflow-hidden">
        <h2 className="text-[31px] text-center" ref={headingRef}>
          Things I've Built
        </h2>
      </div>
      <ul>
        {projects.map((p) => (
          <ProjectCard p={p} key={p.id} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
