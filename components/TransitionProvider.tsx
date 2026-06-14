"use client";
import { createContext, useContext, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    gsap.set(overlayRef.current, { y: "0%" });
    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(overlayRef.current, { y: "100%" });
        if (overlayRef.current) overlayRef.current.style.pointerEvents = "none";
      },
    });
  }, [pathname]);

  const navigate = (href: string) => {
    const overlay = overlayRef.current;
    if (!overlay) {
      router.push(href);
      return;
    }

    overlay.style.pointerEvents = "all";

    gsap.fromTo(
      overlay,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => router.push(href),
      },
    );
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-90 bg-primary-100 pointer-events-none translate-y-full"
        aria-hidden="true"
      />
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx)
    throw new Error("usePageTransition must be used within TransitionProvider");
  return ctx;
}
