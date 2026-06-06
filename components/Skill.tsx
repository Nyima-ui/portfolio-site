import { skills } from "@/constant";
import Image from "next/image";

const Skill = () => {
  return (
    <section className="py-12">
      <h2 className="text-[31px] text-center">What I build with</h2>
      <ul className="grid grid-cols-5 mt-12 gap-x-4 gap-y-5 max-md:grid-cols-4 max-sm:grid-cols-2" aria-label="Skills list">
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
