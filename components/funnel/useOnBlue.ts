"use client";

import { useEffect, useState } from "react";

export function useOnBlue() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const sync = () => {
      const join = document.getElementById("join");
      const work = document.getElementById("work");
      const joinTop = join?.getBoundingClientRect().top ?? 9999;
      const workBox = work?.getBoundingClientRect();
      const workVisible = workBox
        ? workBox.top < window.innerHeight * 0.78 && workBox.bottom > 72
        : false;
      const rail = document.body.dataset.rail === "1";
      setOn((rail || workVisible) && joinTop > 96);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return on;
}
