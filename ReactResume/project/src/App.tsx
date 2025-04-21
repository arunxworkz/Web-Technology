import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import TechnicalSummary from './components/TechnicalSummary';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[rgb(45,45,82)]">
      <Header 
        name="Arun Belavadi"
        profileImage="images/icon.jpg"
      />
      <main>
        <Hero />
        <Skills />
        <TechnicalSummary />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;