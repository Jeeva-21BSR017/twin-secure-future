import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      // Transition colors as user scrolls
      const root = document.documentElement;
      
      if (scrollPercent > 0.1) {
        // Transition to cyber blue theme
        root.style.setProperty('--background', '210 20% 8%'); // Dark background
        root.style.setProperty('--foreground', '0 0% 100%'); // White text
        root.style.setProperty('--primary', '195 100% 50%'); // Deep Sky Blue
        root.style.setProperty('--card', '210 15% 12%'); // Dark cards
        root.style.setProperty('--muted', '210 8% 20%'); // Dark muted
        root.style.setProperty('--border', '210 8% 25%'); // Dark borders
      } else {
        // Original light theme
        root.style.setProperty('--background', '0 0% 100%');
        root.style.setProperty('--foreground', '210 11% 15%');
        root.style.setProperty('--primary', '195 100% 50%');
        root.style.setProperty('--card', '0 0% 100%');
        root.style.setProperty('--muted', '210 8% 95%');
        root.style.setProperty('--border', '210 8% 90%');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
