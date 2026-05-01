import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Services } from './Services';
import { Projects } from './Projects';
import { GraphicDesign } from './GraphicDesign';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { useEffect } from 'react';

export function MainLayout() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] selection:bg-[#3b82f6]/30 selection:text-white">
      <Navbar />
      <Hero />
      <div className="reveal"><About /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><GraphicDesign /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </div>
  );
}
