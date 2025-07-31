import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all';
import Nav from "./sessions/Nav";
import Hero from "./sessions/Hero";

gsap.registerPlugin(ScrollTrigger);

const App = ()=> {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  )
}

export default App
