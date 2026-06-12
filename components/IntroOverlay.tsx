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
      <Sun
        className="text-foreground absolute bottom-5 right-5 animate-spin"
        strokeWidth={1}
        size={20}
      />
    </div>
  );
};

export default IntroOverlay;
