import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ScrollTriggerPage = () => {
  useGSAP(() => {
    gsap.from("#page1 #box", {
      scale: 0,
      duration: 2,
      delay: 1,
      rotate: 360,
    });
    gsap.from("#page2 #box", {
      scale: 0,
      duration: 2,
      delay: 1,
      rotate: 360,
    });
  }, []);
  return (
    <>
      <div
        id="page1"
        className="h-screen w-full bg-blue-200 flex items-center justify-center "
      >
        <div id="box" className="h-[300px] w-[300px] bg-red-400"></div>
      </div>
      <div
        id="page2"
        className="h-screen w-full bg-blue-400 flex items-center justify-center"
      >
        <div id="box" className="h-[300px] w-[300px] bg-red-400"></div>
      </div>
      <div
        id="page3"
        className="h-screen w-full bg-blue-600 flex items-center justify-center"
      >
        <div id="box" className="h-[300px] w-[300px] bg-red-400"></div>
      </div>
    </>
  );
};

export default ScrollTriggerPage;
