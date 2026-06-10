"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TechStack = ({ stack }: { stack: string[] }) => {
  const technologies = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray(
      technologies.current!.querySelectorAll("li"),
    );

    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.03,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        scrollTrigger: {
          trigger: technologies.current,
          start: "top 95%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-205 ml-auto max-xl:max-w-none">
        <h2 className="text-[31px]">Tech stack:</h2>
        <ul
          className="flex flex-wrap gap-x-3 gap-y-2.5 mt-4"
          ref={technologies}
        >
          {stack.map((s, i) => (
            <li
              key={i}
              className="px-3 py-1.5 text-sm text-primary-100 bg-primary-400 rounded-full font-medium"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
