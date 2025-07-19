import { Shield, Zap, Cloud, ArrowRight, Cpu, Network } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative cybersecurity solutions designed to protect and empower your digital infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* TwinAV */}
          <div className="card-cyber group animate-slide-in-left">
            <div className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-mono px-3 py-1 rounded-bl-lg">
                IN PROGRESS
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                  <Shield className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-mono text-primary mb-2">TwinAV</h3>
                  <p className="text-muted-foreground">Smart Antivirus Engine</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                A next-generation, lightweight antivirus engine built with advanced threat detection capabilities. 
                TwinAV combines machine learning algorithms with real-time monitoring to provide comprehensive 
                protection against modern cyber threats while maintaining minimal system impact.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Zap className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm">Lightweight & Fast Performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm">AI-Powered Threat Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm">Real-time Protection</span>
                </div>
              </div>

              <div className="data-flow h-1 w-full rounded-full mb-6"></div>

              <button className="btn-outline-cyber group w-full">
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* TwinShield */}
          <div className="card-cyber group animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-mono px-3 py-1 rounded-bl-lg">
                IN PROGRESS
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                  <Network className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-mono text-primary mb-2">TwinShield</h3>
                  <p className="text-muted-foreground">Firewall-as-a-Service</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                A cloud-based firewall solution designed specifically for small organizations. TwinShield provides 
                enterprise-grade network security through an easy-to-deploy service that scales with your business 
                needs, offering complete protection without the complexity.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Cloud className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm">Cloud-Native Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm">Easy Deployment & Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Network className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm">Scalable Network Protection</span>
                </div>
              </div>

              <div className="data-flow h-1 w-full rounded-full mb-6"></div>

              <button className="btn-outline-cyber group w-full">
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Note */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-cyber max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Cpu className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-3">Continuous Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our product development follows an agile, security-first approach. Both TwinAV and TwinShield 
                  are actively being developed with regular updates and feature enhancements based on the latest 
                  cybersecurity research and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;