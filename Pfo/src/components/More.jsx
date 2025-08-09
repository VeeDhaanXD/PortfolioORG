// src/components/More.jsx
import React, { useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    key: "email",
    label: "Email",
    href: "mailto:veedhaanxd07@gmail.com",
    icon: <FaEnvelope size={20} />,
    // Gmail red
    bg: "#D14836",
    shadowColor: "rgba(209,72,54,0.45)",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/VeeDhaanXD",
    icon: <FaGithub size={20} />,
    // GitHub dark
    bg: "#111111",
    shadowColor: "rgba(17,17,17,0.45)",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/Veedhaan", // replace
    icon: <FaLinkedin size={20} />,
    // LinkedIn blue
    bg: "#0A66C2",
    shadowColor: "rgba(10,102,194,0.45)",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/veedhaan_60fps", // replace
    icon: <FaInstagram size={20} />,
    // Instagram gradient (handled via style)
    bg: "gradient",
    shadowColor: "rgba(225,29,86,0.35)",
    grad: "linear-gradient(135deg,#E1306C 0%,#F77737 50%,#FCAF45 100%)",
  },
  {
    key: "discord",
    label: "Discord",
    href: "https://discord.com/users/796664624636362792", // replace
    icon: <FaDiscord size={20} />,
    // Discord blurple
    bg: "#5865F2",
    shadowColor: "rgba(88,101,242,0.45)",
  },
];

export default function More() {
  const containerRef = useRef(null);
  const boxRefs = useRef([]);

  // Clear refs on each render to avoid stale elements
  boxRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation with start-slow, speed-up feel
      gsap.fromTo(
        boxRefs.current,
        { opacity: 0, y: 70, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: "power2.in", // starts slow, speeds up
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            // markers: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = (el, shadow) => {
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      scale: 1.12,
      boxShadow: `0 10px 30px ${shadow}`,
      duration: 0.16,
      ease: "power2.out",
    });
  };

  const handleLeave = (el) => {
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      scale: 1,
      boxShadow: "0 6px 18px rgba(0,0,0,0.28)",
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      ref={containerRef}
      className="py-14 px-4 bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#0f1720] text-white"
      id="more"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          Connect With Me
        </h2>
        <p className="text-gray-400 mt-2">Hit me up — pick a platform below.</p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
        {socials.map((s, i) => (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            ref={(el) => (boxRefs.current[i] = el)}
            onMouseEnter={() =>
              handleEnter(boxRefs.current[i], s.shadowColor || "rgba(0,255,255,0.35)")
            }
            onMouseLeave={() => handleLeave(boxRefs.current[i])}
            onFocus={() =>
              handleEnter(boxRefs.current[i], s.shadowColor || "rgba(0,255,255,0.35)")
            }
            onBlur={() => handleLeave(boxRefs.current[i])}
            className="w-28 h-28 md:w-32 md:h-32 rounded-xl flex flex-col items-center justify-center text-white font-semibold transform transition-transform outline-none"
            style={{
              background:
                s.bg === "gradient"
                  ? s.grad
                  : s.bg,
              boxShadow: "0 6px 18px rgba(0,0,0,0.28)",
            }}
            title={s.label}
          >
            <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/10 mb-2">
              <span className="text-white">{s.icon}</span>
            </div>
            <span className="text-sm md:text-base">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
