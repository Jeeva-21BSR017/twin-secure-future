import { Shield, ArrowRight, Lock, Network } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particle glitter effect
    const createParticles = () => {
      const container = particleContainerRef.current;
      if (!container) return;

      const particles = [];
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(particle);
        particles.push(particle);
      }

      return particles;
    };

    // GSAP animations for hero content
    const animateHeroContent = () => {
      const content = heroContentRef.current;
      if (!content) return;

      const tl = gsap.timeline();
      
      tl.fromTo(content.querySelector('h1'), 
        { y: 100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(content.querySelector('p'), 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.6"
      )
      .fromTo(content.querySelector('.cta-buttons'), 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.4"
      )
      .fromTo(content.querySelectorAll('.trust-indicator'), 
        { y: 40, opacity: 0, stagger: 0.2 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }, 
        "-=0.6"
      );
    };

    const particles = createParticles();
    animateHeroContent();

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyber-dark via-cyber-dark to-cyber-gray">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 cyber-grid-enhanced"></div>
      
      {/* Particle Glitter Container */}
      <div ref={particleContainerRef} className="particle-container"></div>
      
      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark/80 via-cyber-dark/60 to-cyber-gray/70"></div>
      
      {/* Floating Security Icons */}
      <div className="absolute top-20 left-10 text-primary/30 animate-pulse">
        <Shield size={80} />
      </div>
      <div className="absolute top-40 right-20 text-primary-glow/25 animate-pulse" style={{ animationDelay: '1s' }}>
        <Lock size={60} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/20 animate-pulse" style={{ animationDelay: '2s' }}>
        <Network size={70} />
      </div>

      <div ref={heroContentRef} className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="hero-headline text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Defend Your Digital Frontier
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
            Unbreakable Security Solutions for the Modern Enterprise. 
            Protecting your digital assets with cutting-edge cybersecurity technology.
          </p>
          
          <div className="cta-buttons flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cyber group text-lg px-8 py-4"
            >
              <span className="flex items-center gap-3">
                Get a Free Consultation
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-cyber text-lg px-8 py-4"
            >
              Explore Solutions
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="trust-indicator text-center bg-cyber-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6 border border-primary/30">
                <Shield className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-white">Secure by Design</h3>
              <p className="text-gray-400">Built with security at the core of every solution, ensuring maximum protection</p>
            </div>
            
            <div className="trust-indicator text-center bg-cyber-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6 border border-primary/30">
                <Lock className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-white">Enterprise Grade</h3>
              <p className="text-gray-400">Professional solutions trusted by growing businesses worldwide</p>
            </div>
            
            <div className="trust-indicator text-center bg-cyber-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6 border border-primary/30">
                <Network className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-white">Scalable Architecture</h3>
              <p className="text-gray-400">Modern, cloud-ready solutions that grow with your business needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;