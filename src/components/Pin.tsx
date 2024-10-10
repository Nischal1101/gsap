"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Pin = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#page2 h2", {
      transform: "translateX(-100%)",
      duration: 4,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "bottom -150% ",
        scrub: 2,
        pin: true,
      },
    });
  }, []);
  return (
    <>
      <div id="page1" className="h-screen w-full bg-black "></div>
      <div id="page2" className="h-screen w-full bg-blue-200 ">
        <h2 className="text-[40vw] uppercase ">Experiences</h2>
      </div>
      <div id="page3" className="h-screen w-full bg-green-300 "></div>
    </>
  );
};

export default Pin;
