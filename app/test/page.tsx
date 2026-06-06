"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { projects } from "@/constant";
import Image from "next/image";
import { ArrowRight } from "lucide-react";



const TestPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {projects.slice(0, 1).map((p) => (
        <li key={p.id} className="list-none group">
          <Link
            href={p.link}
            className="flex justify-between mt-11.5 gap-10 max-lg:flex-col"
          >
            <div className="bg-linear-to-b from-primary-200 to-primary-100 rounded-xl relative
             after:content-[''] after:absolute after:inset-0 
              after:z-10 after:opacity-0 after:bg-linear-to-b after:from-primary-100/0 after:to-primary-100/90
             group-hover:after:opacity-100 after:transition-opacity after:duration-400 after:ease-out
             
            ">
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
                  className="flex mt-8 text-sm text-[#5577CB] items-center gap-1 cursor-pointer"
                  aria-label={`View details for ${p.heading}`}
                >
                  <span>View details</span>
                  <ArrowRight className="opacity-80 pt-0.5" size={16} />
                </button>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default TestPage;
