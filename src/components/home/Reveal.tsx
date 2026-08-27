"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  /** Stagger delay in ms, applied once the element enters the viewport. */
  delay?: number;
  /** Entrance animation classes from tw-animate-css, applied once visible. */
  animation?: string;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-in slide-in-from-bottom-8 duration-700 ease-out",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? `animate-in fill-mode-both ${animation}` : "opacity-0"} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
