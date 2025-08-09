import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css";

const Hero = () => {
  const greetingRefs = useRef([]);
  const nameRefs = useRef([]);
  const subtitleRefs = useRef([]);

  const greeting = "Hlo I'm";
  const name = "VEEDHAAN DERE";
  const subtitle = "MERN Stack | Full Stack Dev | 2D Game Dev";

  useEffect(() => {
    greetingRefs.current = greetingRefs.current.slice(0, greeting.length);
    nameRefs.current = nameRefs.current.slice(0, name.length);
    subtitleRefs.current = subtitleRefs.current.slice(0, subtitle.length);

    const shuffledName = gsap.utils.shuffle([...nameRefs.current]);
    const nameTL = gsap.timeline();

    // Animate name characters (unchanged)
    nameTL.fromTo(
      shuffledName,
      {
        y: 80,
        opacity: 0,
        rotateX: 90,
        filter: "blur(5px)",
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        filter: "blur(0px)",
        stagger: 0.06,
        duration: 1.2,
        ease: "expo.out",
      }
    );

    // Flash glitch effect on name
    shuffledName.forEach((el, i) => {
      const tl = gsap.timeline({ delay: 1.2 + i * 0.02 });
      tl.to(el, {
        opacity: 0.6,
        scale: 1.05,
        duration: 0.08,
        ease: "power2.inOut",
      })
        .to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.08,
          ease: "power2.inOut",
        })
        .to(el, {
          opacity: 0.7,
          scale: 1.03,
          duration: 0.05,
          ease: "power2.inOut",
        })
        .to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.05,
          ease: "power2.inOut",
        });
    });

    // Animate subtitle after name finishes
    gsap.delayedCall(1.8, () => {
      subtitleRefs.current.forEach((el, i) => {
        const tl = gsap.timeline({ delay: i * 0.02 });
        tl.set(el, { opacity: 0, scale: 1.1, filter: "blur(4px)" })
          .to(el, {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.25,
            ease: "power2.out",
          })
          .to(
            el,
            {
              opacity: 0.8,
              duration: 0.08,
              scale: 1.02,
            },
            "+=0.05"
          )
          .to(
            el,
            {
              opacity: 1,
              duration: 0.08,
              scale: 1,
            },
            "+=0.05"
          );
      });

      // Animate greeting after subtitle animation (with slightly shorter delay)
      gsap.delayedCall(1, () => {
        greetingRefs.current.forEach((el, i) => {
          const tl = gsap.timeline({ delay: i * 0.02 });
          tl.set(el, { opacity: 0, scale: 1.1, filter: "blur(4px)" })
            .to(el, {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.25,
              ease: "power2.out",
            })
            .to(
              el,
              {
                opacity: 0.8,
                duration: 0.08,
                scale: 1.02,
              },
              "+=0.05"
            )
            .to(
              el,
              {
                opacity: 1,
                duration: 0.08,
                scale: 1,
              },
              "+=0.05"
            );
        });
      });
    });
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none dotted-grid"></div>

      {/* Greeting */}
      <p className="text-cyan-300 text-lg md:text-xl mb-3 flex flex-wrap justify-center max-w-xl tracking-widest">
        {greeting.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (greetingRefs.current[i] = el)}
            className="inline-block opacity-0"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-extrabold flex flex-wrap gap-1 justify-center">
        {name.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (nameRefs.current[i] = el)}
            className="inline-block text-white drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl mt-6 max-w-xl text-cyan-300 tracking-widest flex flex-wrap justify-center">
        {subtitle.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (subtitleRefs.current[i] = el)}
            className="inline-block opacity-0"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>

      {/* Dotted Line */}
      <div className="absolute bottom-16 left-1/2 w-24 border-t-2 border-dotted border-cyan-400 rounded-full -translate-x-1/2 opacity-50"></div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-6 text-sm animate-pulse text-gray-400">
        Scroll to explore ↓
      </div>
    </div>
  );
};

export default Hero;
