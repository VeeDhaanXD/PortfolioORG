import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import More from './components/More'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certifications/>
      <More/>
      <Footer />
    </div>
  )
}
