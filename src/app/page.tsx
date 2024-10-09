"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    gsap.from("#old", {
      opacity: 0,
      y: 30,
      color: "red",
      duration: 2,
      stagger: 1,
    });
  }, []);
  return (
    <div className="mt-40">
      <h1 id="old" className="text-3xl text-center ]">
        hello old
      </h1>
      <h1 id="old" className="text-3xl text-center ]">
        hello old2
      </h1>
      <h1 id="old" className="text-3xl text-center ]">
        hello old3
      </h1>
    </div>
  );
}
