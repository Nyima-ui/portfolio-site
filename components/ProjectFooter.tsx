"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const PROJECT_ORDER = ["dogear", "rentlocals", "deeplock", "lineup"];

const ProjectFooter = () => {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop() ?? "";

  const currentIndex = PROJECT_ORDER.indexOf(currentSlug);
  const nextIndex = (currentIndex + 1) % PROJECT_ORDER.length;
  const nextSlug = PROJECT_ORDER[nextIndex];

  return (
    <section className="pt-16 pb-12 text-sm flex justify-between">
      <Link
        href={"/?scrollTo=projects"}
        className="flex gap-1 px-3 py-1.5 rounded-full border border-primary-200 w-fit hover:bg-primary-200 text-primary-900 transition-colors duration-500 ease-out"
      >
        <Image width={16} height={16} alt="Sun icon" src={"/small-sun.svg"} />
        <span>All projects</span>
      </Link>

      <Link
        href={`/work/${nextSlug}`}
        className="flex gap-1 px-3 py-1.5 rounded-full w-fit items-center group hover:items-end"
      >
        <span>Next project</span>
        <ArrowRight
          size={16}
          strokeWidth={1.5}
          className="group-hover:-rotate-45 transition-transform duration-300 ease-out"
        />
      </Link>
    </section>
  );
};

export default ProjectFooter;
