import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export const customCursor = () => {
  const cursorInnerRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const e = cursorInnerRef.current;
    const t = cursorOuterRef.current;

    function mouseEvent(element) {
      element.addEventListener("mouseenter", () => {
        e.classList.add("cursor-hover");
        t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", () => {
        e.classList.remove("cursor-hover");
        t.classList.remove("cursor-hover");
      });
    }

    const myCursor = document.querySelectorAll(".mouse-cursor");
    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = false;
        window.onmousemove = function (s) {
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

          a.forEach(element => mouseEvent(element));

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
    }
  }, []);

  return (
    <>
      <div ref={cursorInnerRef} className="cursor-inner" />
      <div ref={cursorOuterRef} className="cursor-outer" />
    </>
  );
};

export const aTagClick = () => {
  useEffect(() => {
    const aTags = document.querySelectorAll("[href='#']");
    aTags.forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  }, []);
};
