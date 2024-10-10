import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTriggerPage = () => {
  gsap.registerPlugin(ScrollTrigger);
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
      rotate: 720,

      scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "bottom 30%",
        scrub: 2,
        pin: true,
      },
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
        className="h-screen w-full bg-blue-400 flex flex-col gap-5 items-center justify-center"
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
