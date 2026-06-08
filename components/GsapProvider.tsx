"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default GsapProvider;
