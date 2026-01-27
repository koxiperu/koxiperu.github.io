import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import StarryBackground from './components/StarryBackground';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <StarryBackground />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="pt-16 fade-in">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;