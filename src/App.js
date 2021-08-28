import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
