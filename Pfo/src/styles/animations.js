// src/styles/animations.js
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const fadeInUp = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
      },
    }
  )
}

export const slideFromLeft = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
      },
    }
  )
}

export const staggerChildren = (targets) => {
  gsap.fromTo(
    targets,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "expo.out",
      scrollTrigger: {
        trigger: targets[0],
        start: "top 90%",
      },
    }
  )
}
