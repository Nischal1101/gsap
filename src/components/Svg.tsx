"use client";

import gsap from "gsap";
// import { useState } from "react";

const Svg = () => {
  const initialPath = "M 10 100 Q 500 100 990 100";
  // const [path, setPath] = useState("M 10 100 Q 500 100 990 100");

  function handleMouseMove(dets: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const newPath = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`;
    // setPath(newPath);
    gsap.to("svg path", {
      attr: { d: newPath },
      duration: 0.2,
      ease: "power3.out",
    });
  }
  function handleMouseLeave() {
    // setPath(initialPath);
    gsap.to("svg path", {
      attr: { d: initialPath },
      duration: 0.8,
      ease: "elastic.out(1.0.2)",
    });
  }
  return (
    <>
      <div
        id="string"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg height={200} width={1000}>
          <path d={initialPath} stroke="white" fill="transparent" />
        </svg>
      </div>
    </>
  );
};

export default Svg;
