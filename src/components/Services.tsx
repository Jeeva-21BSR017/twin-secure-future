import { Code, Palette, Database, Smartphone, Globe, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Secure Web Development',
      description: 'Custom websites and web applications built with security at the core, using modern frameworks and best practices.',
      features: ['Security-first architecture', 'Modern frameworks', 'Scalable solutions', 'Performance optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with robust security features for iOS and Android platforms.',
      features: ['Cross-platform development', 'Secure authentication', 'Data encryption', 'User-friendly design']
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Prototyping',
      description: 'User-centered design solutions that balance aesthetics with security and functionality.',
      features: ['User research', 'Interactive prototypes', 'Design systems', 'Accessibility focused']
    },
    {
      icon: Globe,
      title: 'Graphic Design & Motion',
      description: 'Creative visual solutions including branding, marketing materials, and motion graphics.',
      features: ['Brand identity', 'Marketing materials', 'Motion graphics', 'Digital assets']
    },
    {
      icon: BarChart3,
      title: 'Data Science Automation',
      description: 'Intelligent automation tools and data analysis solutions to drive business insights.',
      features: ['Automated workflows', 'Data visualization', 'Predictive analytics', 'Custom dashboards']
    },
    {
      icon: Database,
      title: 'Cloud Solutions',
      description: 'Secure cloud infrastructure and migration services with enterprise-grade security.',
      features: ['Cloud migration', 'Infrastructure setup', 'Security configuration', 'Monitoring & support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-cyber-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity-focused software services to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-cyber group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="data-flow h-1 w-full rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Section */}
        <div className="mt-20 text-center">
          <div className="card-cyber max-w-4xl mx-auto animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">
                  Student Training & <span className="text-gradient">Internships</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Twincord is committed to bridging industry needs with academic talent. Our comprehensive 
                  training and internship programs provide students with hands-on experience in cybersecurity, 
                  software development, and emerging technologies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Hands-on cybersecurity training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Industry-relevant skill development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Mentorship and career guidance</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Students Trained</div>
                  <div className="mt-6">
                    <button className="btn-outline-cyber">
                      Join Our Program
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;