import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="theme-preference">
      <div className="min-h-screen bg-background">
        <Navbar activeSection={activeSection} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;