import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/dogoear-cover.png",
    heading: "Dogear",
    paragraph:
      "Simple book tracking with an AI that actually knows your taste.",
    stack: ["Next.js", "MongoDB", "Vapi AI", "Nomic Embed"],
    link: "#",
  },
  {
    id: 2,
    image: "/rentlocals-cover.png",
    heading: "RentLocals",
    paragraph: "Rent what you need. From someone down the street.",
    stack: ["Next.js", "Supabase", "shadcn/ui", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 3,
    image: "/deeplock-cover.png",
    heading: "DeepLock",
    paragraph:
      "Lock yourself out of your phone. Get back in only when you're ready.",
    stack: ["Next.js", "Timelock Encryption", "shadcn/ui"],
    link: "#",
  },
  {
    id: 4,
    image: "/lineup-cover.png",
    heading: "Lineup",
    paragraph: "Jot down notes and tasks, at the speed of thought.",
    stack: ["Next.js", "Local Storage", "Monaco Editor"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-12">
      <h2 className="text-[31px] text-center">Things I've Built</h2>

      <ul>
        {projects.map((p) => (
          <li
            key={p.id}
            className="flex justify-between mt-11.5 gap-10 max-lg:flex-col"
          >
            <div className="bg-linear-to-b from-primary-200 to-primary-100 rounded-xl">
              <Image
                width={697}
                height={375}
                src={p.image}
                alt={p.heading}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between max-w-65.75 max-h-92.5 pt-5 max-lg:max-w-none">
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

                <Link
                  href={p.link}
                  className="flex mt-8 text-sm text-[#5577CB] items-center gap-1"
                  aria-label={`View details for ${p.heading}`}
                >
                  <span>View details</span>
                  <ArrowRight className="opacity-80 pt-0.5" size={16} />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
