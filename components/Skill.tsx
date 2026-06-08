"use client";
import { skills } from "@/constant";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Skill = () => {
  const heading = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heading.current, {
        y: 30,
        duration: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: heading.current,
          start: "top 94%",
        },
      });
    });

    const items = gsap.utils.toArray<HTMLLIElement>(
      listRef.current!.querySelectorAll("li"),
    );

    gsap.from(items, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 88%",
        markers: true,
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12">
      <div className="overflow-hidden">
        <h2 className="text-[31px] text-center" ref={heading}>
          What I build with
        </h2>
      </div>
      <ul
        className="grid grid-cols-5 mt-12 gap-x-4 gap-y-5 max-md:grid-cols-4 max-sm:grid-cols-2"
        aria-label="Skills list"
        ref={listRef}
      >
        {skills.map((s, i) => (
          <li
            className="flex items-center justify-center flex-col py-5 rounded-[20px] bg-[#C8C7C1]"
            key={i}
          >
            <Image width={52} height={52} src={s.src} alt={s.label} />
            <span className="mt-3">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
