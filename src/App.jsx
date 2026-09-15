import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <div className="dot-grid pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
