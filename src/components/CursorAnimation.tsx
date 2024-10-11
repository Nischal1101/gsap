"use client";

import gsap from "gsap";

const CursorAnimation = () => {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY,
      // ease: "bounce.in",
    });
  }
  return (
    <>
      <div
        id="main"
        className="min-h-screen bg-black"
        onMouseMove={handleMouseMove}
      >
        <div
          id="cursor"
          className="h-[20px] w-[20px] bg-white rounded-[50%] fixed"
        ></div>
      </div>
      <div className="min-h-screen bg-green-200"></div>
    </>
  );
};

export default CursorAnimation;
