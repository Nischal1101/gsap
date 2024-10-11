"use client";
import gsap from "gsap";
import Card from "./Card";

const AnimatedCard = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to("#ball", {
      x: e.clientX,
      y: e.clientY,
    });
  };
  function handleMouseEnter() {
    console.log("mouse entered");
    gsap.to("#ball", {
      scale: "4",
      // duration: 1,
      display: "block",
    });
  }
  function handleMouseLeave() {
    console.log("mouse left");
    gsap.to("#ball", {
      scale: "1",
      display: "none",
    });
  }
  return (
    <div id="main" onMouseMove={handleMouseMove}>
      <div
        id="ball"
        className="z-[9] h-[30px] w-[30px] rounded-full fixed bg-black text-center hidden "
      >
        <span className="text-white">&rarr;</span>
      </div>
      <div className="p-5 ">
        <div
          className="card w-1/3 relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="z-10 bg-transparent h-full w-full absolute"></div>
          <Card />
        </div>
        {/* <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div> */}
      </div>
    </div>
  );
};

export default AnimatedCard;
