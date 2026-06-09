import Image from "next/image";
import AnimatedLink from "./AnimatedLink";

interface ProjectBodyProps {
  github: string;
  liveDemo: string;
  problem: string[];
  solution: string[];
  broadImage: string;
  verticalImage: string;
}

const ProjectBody = ({
  github,
  liveDemo,
  problem,
  solution,
  broadImage,
  verticalImage,
}: ProjectBodyProps) => {
  return (
    <section className="py-12 max-xl:flex-col">
      <div className="flex justify-between gap-3 max-xl:flex-col-reverse max-xl:gap-6">
        <ul className="space-y-3 w-fit">
          <li>
            <AnimatedLink
              href={github}
              label="GitHub"
              className="bg-transparent text-foreground px-5 py-2.5 normal-case w-full justify-between"
            />
          </li>
          <li>
            <AnimatedLink
              href={liveDemo}
              label="View live demo"
              className="px-5 py-2.5 normal-case text-nowrap"
            />
          </li>
        </ul>

        <div className="max-w-205">
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

      <div className="flex gap-7 mt-9 items-start max-lg:flex-col">
        <Image
          width={484}
          height={317}
          src={broadImage}
          alt={"Project screenshot."}
          className="rounded-xl shadow-xl ml-auto max-xl:ml-0 max-lg:w-full"
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
