import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import html from "../assets/html.svg";
import tailwind from "../assets/tailwind.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import mongodb from "../assets/mongodb.svg";
import github from "../assets/github.svg";
import git from "../assets/git.svg";
import node from "../assets/node.svg";
import mongoose from "../assets/mongoose.svg";
import npm from "../assets/npm.svg";
import python from "../assets/python.svg";
import vite from "../assets/vite.svg";

gsap.registerPlugin(ScrollTrigger);

const categories = {
  Languages: [
    { src: html, name: "HTML" },
    { src: js, name: "JavaScript" },
    { src: python, name: "Python" },
  ],
  Libraries: [
    { src: react, name: "React" },
    { src: tailwind, name: "Tailwind CSS" },
    { src: mongoose, name: "Mongoose" },
  ],
  FrameworksAndTools: [
    { src: node, name: "Node.js" },
    { src: mongodb, name: "MongoDB" },
    { src: git, name: "Git" },
    { src: github, name: "GitHub" },
    { src: npm, name: "NPM" },
    { src: vite, name: "Vite" },
  ],
};

const Skills = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    const entranceTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 70%",
      },
    });

    entranceTimeline.fromTo(
      iconsRef.current,
      {
        opacity: 0,
        scale: 0.3,
        rotation: -15,
        x: -30,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      }
    );

    // After entrance anim finishes, add floating effect
    entranceTimeline.to(
      iconsRef.current,
      {
        y: "-=10",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
      },
      ">"
    );
  }, []);

  let iconIndex = 0; // To assign refs sequentially

  return (
    <section
      className="skills-section relative bg-black text-white py-32 overflow-visible"
      style={{ minHeight: "700px" }}
      id="skills"
    >
      {/* VHS Scanline Overlay */}
      <div className="absolute inset-0 z-9 pointer-events-none scanline-overlay" />

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-20 relative z-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,246,255,0.8)]">
        MY TECH STACK
      </h2>

      {/* Glowing Circle */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-cyan-400 rounded-full animate-spin-slow -translate-x-1/2 -translate-y-1/2 blur-sm opacity-20 z-0"></div>

      <div className="max-w-[700px] mx-auto z-10 space-y-16 px-6">
        {/* Languages Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,246,255,0.7)]">
            Languages
          </h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {categories.Languages.map((icon, i) => (
              <div
                key={i}
                ref={(el) => (iconsRef.current[iconIndex++] = el)}
                className="group flex flex-col items-center"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-125 invert drop-shadow-[0_0_8px_#00f6ff]"
                />
                <span className="mt-2 text-sm text-cyan-300">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Libraries Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,246,255,0.7)]">
            Libraries
          </h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {categories.Libraries.map((icon, i) => (
              <div
                key={i}
                ref={(el) => (iconsRef.current[iconIndex++] = el)}
                className="group flex flex-col items-center"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-125 invert drop-shadow-[0_0_8px_#00f6ff]"
                />
                <span className="mt-2 text-sm text-cyan-300">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,246,255,0.7)]">
            Frameworks & Tools
          </h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {categories.FrameworksAndTools.map((icon, i) => (
              <div
                key={i}
                ref={(el) => (iconsRef.current[iconIndex++] = el)}
                className="group flex flex-col items-center"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-125 invert drop-shadow-[0_0_8px_#00f6ff]"
                />
                <span className="mt-2 text-sm text-cyan-300">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
