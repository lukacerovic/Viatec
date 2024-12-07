import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import MainConcepts from './components/MainConcepts';
import Team from './components/Team';
import Partners from './components/Partners';
import Contact from './components/Contact';
import { useRef } from 'react';

function App() {
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header 
        servicesRef={servicesRef} 
        teamRef={teamRef} 
        contactRef={contactRef}
      />
      <Hero contactRef={contactRef} />
      <div ref={servicesRef}>
        <Services />
      </div>
      <MainConcepts />
      <div ref={teamRef}>
        <Team />
      </div>
      <Partners />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;


