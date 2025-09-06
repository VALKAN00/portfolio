import React, { useRef, useEffect } from "react";
export default function Cursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Check if the refs are connected to an element
      if (cursorDotRef.current && cursorOutlineRef.current) {
        // Move the dot immediately
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;

        // Move the outline with a slight delay using a web animation
        // This creates the smooth "trailing" effect.
        cursorOutlineRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("mousemove", moveCursor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []); // The empty dependency array means this effect runs only once

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
      ></div>
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
      ></div>
    </>
  );
}
