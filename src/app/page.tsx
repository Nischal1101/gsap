"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const tl = gsap.timeline();
  useGSAP(() => {
    /*
    gsap. from("#old", {
      opacity: 0,
      y: 30,
      color: "red",
      duration: 2,
      stagger: 1,
    });
    gsap.to("#ball", {
      x: 1300,
      repeat: -1,
      delay: 1,
      duration: 20,
      rotate: 360,
      yoyo: true,
    });
    */
    tl.to("#old", {
      x: 500,
      delay: 2,
      duration: 2,
    });
    tl.to("#old2", {
      x: 500,
      delay: 2,
      duration: 2,
    });
    tl.to("#old3", {
      x: 500,
      delay: 2,
      duration: 2,
    });
  }, []);
  return (
    <div className="mt-40">
      <div id="ball" className="h-8 w-8 rounded-[50%] bg-white mb-5"></div>
      <h1 id="old" className="text-3xl text-center ]">
        hello old
      </h1>
      <h1 id="old2" className="text-3xl text-center ]">
        hello old2
      </h1>
      <h1 id="old3" className="text-3xl text-center ]">
        hello old3
      </h1>
    </div>
  );
}
