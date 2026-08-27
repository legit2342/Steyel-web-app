"use client";

import { useEffect } from "react";

/** Forces the shared <body> background dark for this route only, so overscroll doesn't flash the site's light-mode default. */
export default function BodyBackground({ color }: { color: string }) {
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, [color]);

  return null;
}
