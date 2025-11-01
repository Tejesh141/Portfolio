import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Achievements } from '@/components/Achievements';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Scene3D } from '@/components/Scene3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Scene3D />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
