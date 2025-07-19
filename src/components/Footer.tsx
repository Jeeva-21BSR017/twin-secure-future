import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Secure Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Data Science Automation',
    'Cloud Solutions',
    'Training Programs'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/aa8e088c-5cad-433b-a9fd-140d46ad555e.png" 
                alt="Twincord Technologies" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6 max-w-md">
              Cybersecurity-focused software startup committed to securing digital futures 
              through innovative solutions and trusted partnerships.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Erode, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+91 6383436383</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>hello@twincord.tech</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/60">
              © {currentYear} Twincord Technologies Private Limited. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-secondary-foreground/60">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">Cookie Policy</button>
            <button className="hover:text-primary transition-colors">Security</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;