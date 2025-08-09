import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 100,
      duration: 1,
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl text-center text-gray-300">
        I'm a frontend developer with a passion for building modern, animated user experiences.
      </p>
    </section>
  );
}
