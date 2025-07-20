import { Shield, ArrowRight, Lock, Network } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-cyber-light/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Shield size={60} />
      </div>
      <div className="absolute top-40 right-20 text-primary/20 animate-float" style={{ animationDelay: '1s' }}>
        <Lock size={40} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/20 animate-float" style={{ animationDelay: '2s' }}>
        <Network size={50} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Securing</span>{' '}
            <span className="text-foreground">Digital</span>{' '}
            <span className="text-gradient">Futures</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cybersecurity-focused software solutions for startups, academic institutions, and growing businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cyber group"
            >
              <span className="flex items-center gap-2">
                Discover Our Solutions
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-cyber"
            >
              Get In Touch
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure by Design</h3>
              <p className="text-muted-foreground text-sm">Built with security at the core of every solution</p>
            </div>
            
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Lock className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Enterprise Grade</h3>
              <p className="text-muted-foreground text-sm">Professional solutions trusted by growing businesses</p>
            </div>
            
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Network className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Scalable Architecture</h3>
              <p className="text-muted-foreground text-sm">Modern, cloud-ready solutions that grow with you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;