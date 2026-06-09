"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ProjectHero = ({ id, title, description, image }: ProjectHeroProps) => {
  const heroImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroImage.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      className="px-36 max-xl:px-22 max-lg:px-14 max-md:px-8 max-sm:px-5 py-12"
      aria-labelledby="project-title"
    >
      <h1
        className="font-medium text-[clamp(32px,7vw,48px)]"
        id="project-title"
        style={{ viewTransitionName: `project-title-${id}` }}
      >
        {title}
      </h1>
      <p className="mt-3">{description}</p>
      <div
        ref={heroImage}
        style={{ viewTransitionName: `project-image-${id}` }}
        className="bg-linear-to-b from-primary-200 to-primary-100 rounded-xl relative mt-9 translate-y-5 opacity-0
             after:content-[''] after:absolute after:inset-0 
             after:z-10 after:opacity-0 after:bg-linear-to-b after:from-primary-100/0 after:to-primary-100/30
             group-hover:after:opacity-100 after:transition-opacity after:duration-400 after:ease-out"
      >
        <Image
          width={1123}
          height={501}
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="eager"
          priority
        />
      </div>
    </section>
  );
};

export default ProjectHero;
