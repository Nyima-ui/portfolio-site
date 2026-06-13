"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Sun } from "lucide-react";

const IntroOverlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        window.dispatchEvent(new Event("introComplete"));
        setShow(false);
      },
    });

    tl.to(lineRef.current, {
      width: "100%",
      duration: 1,
      ease: "power3.in",
    }).to(overlayRef.current, {
      opacity: 0,

      duration: 0.6,
      ease: "power3.inOut",
    });
  }, []);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-100 bg-primary-100" ref={overlayRef}>
      <div className="w-0 h-1 bg-foreground" ref={lineRef}></div>
      <div className="flex items-center gap-2 tracking-wide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span>Tenzin</span>
        <Sun className="animate-spin" strokeWidth={1} size={20} />
        <span>Nyima</span>
      </div>
    </div>
  );
};

export default IntroOverlay;
