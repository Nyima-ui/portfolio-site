export const projects: ProjectInterface[] = [
  {
    id: 1,
    image: "/dogoear-cover.png",
    heading: "Dogear",
    paragraph:
      "Simple book tracking with an AI that actually knows your taste.",
    stack: ["Next.js", "MongoDB", "Vapi AI", "Nomic Embed"],
    link: "/work/dogear",
  },
  {
    id: 2,
    image: "/rentlocals-cover.png",
    heading: "RentLocals",
    paragraph: "Rent what you need. From someone down the street.",
    stack: ["Next.js", "Supabase", "shadcn/ui", "Tailwind CSS"],
    link: "/work/rentlocals",
  },
  {
    id: 3,
    image: "/deeplock-cover.png",
    heading: "DeepLock",
    paragraph:
      "Lock yourself out of your phone. Get back in only when you're ready.",
    stack: ["Next.js", "Timelock Encryption", "shadcn/ui"],
    link: "/work/deeplock",
  },
  {
    id: 4,
    image: "/lineup-cover.png",
    heading: "Lineup",
    paragraph: "Jot down notes and tasks, at the speed of thought.",
    stack: ["Next.js", "Local Storage", "Monaco Editor"],
    link: "/work/lineup",
  },
];

export const skills: { src: string; label: string }[] = [
  { src: "/skills/html.svg", label: "HTML" },
  { src: "/skills/css.svg", label: "CSS" },
  { src: "/skills/javascript.svg", label: "Javascript" },
  { src: "/skills/typescript.svg", label: "Typescript" },
  { src: "/skills/mongo.svg", label: "Mongo DB" },
  { src: "/skills/react.svg", label: "React.js" },
  { src: "/skills/next.svg", label: "Next.js" },
  { src: "/skills/supabase.svg", label: "Supabase" },
  { src: "/skills/github.svg", label: "GitHub" },
  { src: "/skills/tailwind.svg", label: "Tailwind CSS" },
];

export const socials: { icon: string; label: string; href: string }[] = [
  {
    icon: "/socials/github.svg",
    label: "GitHub",
    href: "https://github.com/Nyima-ui",
  },
  {
    icon: "/socials/linkedIn.svg",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tenzin-nyima-897761365/",
  },
  {
    icon: "/socials/instagram.svg",
    label: "Instagram",
    href: "https://www.instagram.com/nyima_kun/",
  },
  {
    icon: "/socials/x.svg",
    label: "X (Twitter)",
    href: "https://x.com/T10b15",
  },
  {
    icon: "/socials/gmail.svg",
    label: "Email",
    href: "mailto:ntenzin492@gmail.com",
  },
];
