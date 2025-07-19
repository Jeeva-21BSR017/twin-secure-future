import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyber-dark via-secondary to-cyber-dark backdrop-blur-md border-b border-primary/30 cyber-grid">
      {/* Gradient overlay for enhanced visual effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10"></div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover-glow relative z-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/lovable-uploads/aa8e088c-5cad-433b-a9fd-140d46ad555e.png" 
              alt="Twincord Technologies" 
              className="h-10 w-auto drop-shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative z-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-sm font-medium text-white/90 hover:text-primary-glow transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-primary-glow transition-colors relative z-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-primary/30 pt-4 animate-fade-in relative z-10">
            <div className="absolute inset-0 bg-cyber-dark/90 backdrop-blur-sm rounded-lg"></div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-left text-sm font-medium text-white/90 hover:text-primary-glow transition-colors px-4 py-2"
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