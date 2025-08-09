import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import devLogo from "../assets/dev.svg";

export default function Navbar() {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50, scale: 0.7, rotateZ: -30 },
      { opacity: 1, x: 0, scale: 1, rotateZ: 0, duration: 1.2, ease: "power3.out", delay: 3 }
    );

    gsap.fromTo(
      ".navbar",
      { autoAlpha: 0, y: -20 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", delay: 3 }
    );
  }, []);

const handleScroll = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  console.log("Scrolling to:", id, section);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`No section found with id: ${id}`);
  }
};


  return (
    <nav className="navbar fixed top-0 w-full bg-transparent text-white py-4 px-8 z-50 flex justify-between items-center">
      <div
        className="cursor-pointer rounded-full bg-cyan-600/20 p-2"
        ref={logoRef}
      >
        <img
          src={devLogo}
          alt="Dev Logo"
          className="w-16 h-16 object-contain drop-shadow-[0_0_12px_cyan] brightness-110"
        />
      </div>
      <div className="flex gap-6">
        <a
          href="#skills"
          onClick={(e) => handleScroll(e, "skills")}
          className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#certifications"
          onClick={(e) => handleScroll(e, "certifications")}
          className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
        >
          Certifications
        </a>
        <a
          href="#more"
          onClick={(e) => handleScroll(e, "more")}
          className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
        >
          Contact Me!
        </a>
      </div>
    </nav>
  );
}