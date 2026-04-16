import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Services } from './Services';
import { Projects } from './Projects';
import { GraphicDesign } from './GraphicDesign';
import { PhoneSales } from './PhoneSales';
import { LaptopSales } from './LaptopSales';
import { Accessories } from './Accessories';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <GraphicDesign />
      <PhoneSales />
      <LaptopSales />
      <Accessories />
      <Contact />
      <Footer />
    </div>
  );
}
