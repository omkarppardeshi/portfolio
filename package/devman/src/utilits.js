import { useEffect, useRef } from "react";

// Custom Hook for Custom Cursor
export const useCustomCursor = () => {
  const cursorInnerRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const e = cursorInnerRef.current;
    const t = cursorOuterRef.current;

    const mouseEvent = (element) => {
      element.addEventListener("mouseenter", () => {
        e.classList.add("cursor-hover");
        t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", () => {
        e.classList.remove("cursor-hover");
        t.classList.remove("cursor-hover");
      });
    };

    const myCursor = document.querySelectorAll(".mouse-cursor");
    if (myCursor.length) {
      let n, i = 0, o = false;
      window.onmousemove = (s) => {
        if (!o) {
          t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
          e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        }
        n = s.clientY;
        i = s.clientX;
      };

      document.body.addEventListener("mouseenter", () => {
        const a = document.querySelectorAll("a");
        e.classList.add("cursor-inner");
        t.classList.add("cursor-outer");

        a.forEach((element) => mouseEvent(element));

        const hamburger = document.querySelector(".hamburger");
        const kura_tm_topbar = document.querySelector(".kura_tm_topbar");
        const pointer = document.querySelector(".cursor-pointer");

        if (hamburger) mouseEvent(hamburger);
        if (kura_tm_topbar) mouseEvent(kura_tm_topbar);
        if (pointer) mouseEvent(pointer);
      });

      e.style.visibility = "visible";
      t.style.visibility = "visible";
    }
  }, []);
  
  return { cursorInnerRef, cursorOuterRef };
};

// Custom Hook for Handling <a> Tag Clicks
export const useATagClick = () => {
  useEffect(() => {
    const aTags = document.querySelectorAll("[href='#']");
    aTags.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  }, []);
};
