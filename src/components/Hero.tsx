import { Shield, ArrowRight, Lock, Network, Server, Database, Cpu, Wifi, Eye, Fingerprint, Key, Globe, Monitor, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-cyber-light/20"></div>
      
      {/* Rich Blue Transparent Icon Pattern Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Row 1 */}
        <div className="absolute top-16 left-16 text-[#00BFFF]/8 animate-float">
          <Server size={45} />
        </div>
        <div className="absolute top-24 left-1/4 text-[#00BFFF]/6 animate-float" style={{ animationDelay: '0.5s' }}>
          <Database size={35} />
        </div>
        <div className="absolute top-12 right-1/3 text-[#00BFFF]/10 animate-float" style={{ animationDelay: '1.2s' }}>
          <Cpu size={40} />
        </div>
        <div className="absolute top-28 right-16 text-[#00BFFF]/7 animate-float" style={{ animationDelay: '0.8s' }}>
          <Wifi size={38} />
        </div>
        <div className="absolute top-20 left-1/2 text-[#00BFFF]/5 animate-float" style={{ animationDelay: '2.2s' }}>
          <Shield size={42} />
        </div>
        
        {/* Row 2 */}
        <div className="absolute top-1/3 left-8 text-[#00BFFF]/9 animate-float" style={{ animationDelay: '1.5s' }}>
          <Eye size={42} />
        </div>
        <div className="absolute top-80 left-1/3 text-[#00BFFF]/6 animate-float" style={{ animationDelay: '2.1s' }}>
          <Fingerprint size={48} />
        </div>
        <div className="absolute top-72 right-1/4 text-[#00BFFF]/8 animate-float" style={{ animationDelay: '0.3s' }}>
          <Key size={36} />
        </div>
        <div className="absolute top-1/3 right-12 text-[#00BFFF]/7 animate-float" style={{ animationDelay: '1.8s' }}>
          <Globe size={44} />
        </div>
        <div className="absolute top-1/3 left-1/2 text-[#00BFFF]/5 animate-float" style={{ animationDelay: '0.9s' }}>
          <Lock size={40} />
        </div>
        
        {/* Row 3 */}
        <div className="absolute bottom-1/3 left-20 text-[#00BFFF]/8 animate-float" style={{ animationDelay: '0.7s' }}>
          <Monitor size={46} />
        </div>
        <div className="absolute bottom-1/4 left-1/2 text-[#00BFFF]/6 animate-float" style={{ animationDelay: '2.3s' }}>
          <Smartphone size={34} />
        </div>
        <div className="absolute bottom-1/3 right-20 text-[#00BFFF]/9 animate-float" style={{ animationDelay: '1.1s' }}>
          <Shield size={50} />
        </div>
        <div className="absolute bottom-1/2 left-1/4 text-[#00BFFF]/7 animate-float" style={{ animationDelay: '1.9s' }}>
          <Network size={52} />
        </div>
        
        {/* Row 4 */}
        <div className="absolute bottom-20 left-1/4 text-[#00BFFF]/6 animate-float" style={{ animationDelay: '1.7s' }}>
          <Lock size={40} />
        </div>
        <div className="absolute bottom-16 right-1/3 text-[#00BFFF]/8 animate-float" style={{ animationDelay: '0.9s' }}>
          <Network size={52} />
        </div>
        <div className="absolute bottom-24 left-1/2 text-[#00BFFF]/5 animate-float" style={{ animationDelay: '2.5s' }}>
          <Database size={38} />
        </div>
        
        {/* Additional scattered icons for richer pattern */}
        <div className="absolute top-1/4 left-1/5 text-[#00BFFF]/4 animate-float" style={{ animationDelay: '3s' }}>
          <Cpu size={32} />
        </div>
        <div className="absolute top-2/3 right-1/5 text-[#00BFFF]/6 animate-float" style={{ animationDelay: '2.7s' }}>
          <Eye size={36} />
        </div>
        <div className="absolute bottom-1/4 right-1/2 text-[#00BFFF]/5 animate-float" style={{ animationDelay: '1.3s' }}>
          <Fingerprint size={40} />
        </div>
        <div className="absolute top-3/4 left-1/6 text-[#00BFFF]/7 animate-float" style={{ animationDelay: '0.4s' }}>
          <Globe size={42} />
        </div>
        <div className="absolute top-1/2 right-1/6 text-[#00BFFF]/4 animate-float" style={{ animationDelay: '2.8s' }}>
          <Server size={48} />
        </div>
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
              onClick={() => navigate('/company')}
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