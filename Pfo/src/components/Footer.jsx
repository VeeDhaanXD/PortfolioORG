// Footer.jsx
// At the top of these components:
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center p-4 text-sm text-gray-400">
      © {new Date().getFullYear()} Veedhaan • All rights reserved.
    </footer>
  )
}
