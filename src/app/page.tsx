"use client";
// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Pin from "@/components/Pin";
import Svg from "@/components/Svg";
// import ScrollTriggerPage from "@/components/ScrollTriggerPage";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

export default function Home() {
  // const tl = gsap.timeline();
  // useGSAP(() => {
  //   tl.from("#logo", {
  //     opacity: 0,
  //     y: -30,
  //     delay: 1,
  //     duration: 2,
  //   });
  //   tl.from("li", {
  //     opacity: 0,
  //     y: -30,
  //     duration: 2,
  //     stagger: 1,
  //   });
  //   gsap.from("#hero", {
  //     y: 20,
  //     opcaity: 0,
  //     duration: 0.5,
  //     scale: 0.2,
  //   });
  // }, []);

  return (
    <>
      <section className="w-full  mx-auto ">
        {/* <Navbar/> */}
        {/* <Hero/> */}
        {/* <ScrollTriggerPage /> */}
        {/* <Pin /> */}
        <Svg/>
      </section>
    </>
  );
}
