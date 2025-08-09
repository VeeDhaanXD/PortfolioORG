import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import proj1Img from "../assets/Razer.png";
import proj2Img from "../assets/tnm.png";
import proj3Img from "../assets/thumbnail.png";
import proj4Img from "../assets/tbb.png";
import proj5Img from "../assets/inv.png";
import proj6Img from "../assets/shoes.png";

const projects = [
  {
    id: 1,
    name: "Razer Gaming Mouse Landing Page",
    description:
      "🎮 Just completed a Razer-themed Gaming Mouse website, crafted to reflect the bold and high-performance aesthetics of gaming gear.",
    tech: ["HTML", "CSS", "GSAP"],
    codeLink: "https://veedhaanxd.github.io/WEB-10-Razer-Gaming-Mouse-Landing-Page/",
    imageSrc: proj1Img,
  },
  {
    id: 2,
    name: "Cosmic Byte Equinox Landing Page",
    description:
      " A smooth, interactive animation Landing Page for Cosmicbyte Headphones, built entirely with HTML, CSS, and GSAP (GreenSock Animation Platform).",
    tech: ["HTML","Tailwind CSS " ,"GSAP"],
    codeLink: "https://veedhaanxd.github.io/WEB-011-Cosmic-Byte-Headphones-Landing-Page/",
    imageSrc: proj2Img,
  },
  {
    id: 3,
    name: "Gaming Controller Parallax Website",
    description:
      "🚀 Just wrapped up a Parallax Website Project for a Gaming Controller! 🎮Built using HTML, CSS, GSAP for smooth animations, and Locomotive Scroll for that buttery scrolling effect.The controller glides seamlessly across the sections with immersive parallax motion—making the whole browsing experience feel dynamic and interactive.",
    tech: ["Scroll-Trigger", "Parallax", "GSAP"],
    codeLink: "https://veedhaanxd.github.io/WEB-012-Gaming-Controller/",
    imageSrc: proj3Img,
  },
  {
    id: 3,
    name: "NIKE Sneakers Website",
    description:
      "Just wrapped up a sleek Nike sneakers landing page! Built using HTML, CSS, and JavaScript 🛠️🖥️, this responsive website highlights clean UI/UX design with interactive elements and a modern aesthetic.",
    tech: ["HTML", "Flexbox", "Vanilla Js"],
    codeLink: "https://veedhaanxd.github.io/WEB-09-Nike-Sneakers/",
    imageSrc: proj6Img,
  },
  {
    id: 3,
    name: "Dynamic Invoice Generator",
    description:
      "🚀 Just built a dynamic invoice generator with Puppeteer in the MERN stack! I created a simple web app where users can fill in invoice details through a form. The app then generates a professional-looking PDF invoice including predefined company name, address, and other details — all dynamically filled with user input.",
    tech: ["React" ,"Tailwind", "Axios" ,"Puppeteer" ,"Node.js" ],
    codeLink: "https://veedhaanxd.github.io/",
    imageSrc: proj5Img,
  },
  {
    id: 3,
    name: "Login/Signup System ",
    description:
      "🚀 MERN Stack Project: Responsive Login & Signup Authentication System 🔐Just built a modern authentication system using React.js, React Router, and Axios!",
    tech: ["React" , "Tailwind" ,"Axios" ,"REST API" ,"MongoDB" , "Vite"],
    codeLink: "https://veedhaanxd.github.io",
    imageSrc: proj4Img,
  },
  
  
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
  // Fade-in animation
  gsap.fromTo(
    cardsRef.current,
    { opacity: 0, scale: 0.8, y: 40 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        onEnter: () => {
          // Floating animation AFTER fade-in
          gsap.to(cardsRef.current, {
            y: "+=10",
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.2,
          });
        },
      },
    }
  );
}, []);



  return (
    <section
      className="projects-section bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-32 px-6"
      style={{ minHeight: "700px" }}
    >
      <h2 className="text-4xl font-bold text-center mb-20 text-cyan-400 drop-shadow-[0_0_30px_rgba(0,246,255,1)]">
        PROJECTS
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="backdrop-blur-xl bg-white/10 border border-cyan-400/40 shadow-[0_0_40px_rgba(0,246,255,0.4)] hover:shadow-[0_0_70px_rgba(0,246,255,0.9)] transition-all duration-300 rounded-3xl p-6 flex flex-col cursor-pointer max-w-sm w-full hover:scale-[1.05] hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="h-52 mb-6 overflow-hidden rounded-lg border border-cyan-500/50">
              <img
                src={proj.imageSrc}
                alt={`${proj.name} screenshot`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-3 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,246,255,0.9)]">
              {proj.name}
            </h3>

            {/* Project Description */}
            <p className="text-gray-200 flex-grow leading-relaxed">
              {proj.description}
            </p>

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-3">
              {proj.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-600/80 text-white shadow-[0_0_10px_rgba(0,246,255,0.8)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Code Button */}
            <div className="mt-6">
              <a
                href={proj.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-2 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors duration-300 font-medium shadow-[0_0_10px_rgba(0,246,255,0.7)]"
              >
                View Live !
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
