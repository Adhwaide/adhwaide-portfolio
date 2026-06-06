import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // 1) Small delay to ensure the DOM is fully mounted
    const initTimer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]');

      // 3) Log the length to confirm it's finding them
      console.log(`[Observer Init] Found ${elements.length} [data-animate] elements to observe.`);

      // 2) Set rootMargin: '0px 0px -50px 0px' and threshold: 0.1
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Element entered view:', entry.target);
              entry.target.classList.add('in-view');
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
      );

      elements.forEach((el) => {
        observer.observe(el);
      });

      // Cleanup reference
      window.fadeObserver = observer;
    }, 150);

    return () => {
      clearTimeout(initTimer);
      if (window.fadeObserver) {
        window.fadeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <Skills />
        <About />
        <Blog />
      </main>

      <Contact />
    </div>
  );
}

export default App;
