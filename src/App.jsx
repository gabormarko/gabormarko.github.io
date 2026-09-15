import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ParticleField } from './components/ParticleField';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <div className="dot-grid pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
