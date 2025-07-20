import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // GSAP ScrollTrigger for header transformation
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "100px top",
      end: "bottom bottom",
      onToggle: (self) => {
        if (self.isActive) {
          header.classList.remove('header-hero');
          header.classList.add('header-compact');
        } else {
          header.classList.remove('header-compact');
          header.classList.add('header-hero');
        }
      }
    });

    // Initial state
    header.classList.add('header-hero');

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-600"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover-glow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/lovable-uploads/aa8e088c-5cad-433b-a9fd-140d46ad555e.png" 
              alt="Twincord Technologies" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;