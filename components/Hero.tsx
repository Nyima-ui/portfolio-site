import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative z-10 px-36 max-lg:px-16.5 max-md:px-8 max-sm:px-5">
      <div className="mx-auto flex justify-between items-center py-31.5 max-sm:py-12 gap-12 max-sm:flex-col-reverse">
        <div>
          <h1 className="font-cormorant font-semibold leading-tight text-[clamp(2.4rem,7vw,6.75rem)] whitespace-nowrap max-sm:text-[52px] max-sm:text-center">
            Tenzin Nyima
          </h1>
          <p className="ml-4 mt-4 max-md:ml-2.5 max-sm:text-center">
            From idea to deployment. <br />
            I'm a full-stack developer who takes products end-to-end.
          </p>
          <Link href={"#"} className="ml-4 mt-5 bg-primary-500 rounded-[25px] flex pl-6 pr-5.5 py-3 justify-between gap-1 text-primary-100 items-center uppercase font-semibold max-md:ml-2.5 max-sm:mx-auto w-fit">
            <span>Contact</span>
            <span>
              <ArrowUpRight strokeWidth={2} size={19} />
            </span>
          </Link>
        </div>

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
    </section>
  );
};

export default Hero;
