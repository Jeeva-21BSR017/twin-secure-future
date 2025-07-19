import { Shield, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Company = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About Twincord</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering cybersecurity solutions and secure software development for the digital age
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-cyber mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Twincord Technologies Private Limited is a cybersecurity-focused software startup incubated at Kongu TBI, Tamil Nadu. We specialize in building secure, modern, and scalable web, mobile, and cloud-based solutions for startups, academic institutions, and growing businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our in-house innovation includes the development of TwinAV – A smart, lightweight antivirus engine (in progress) and TwinShield – A Firewall-as-a-Service platform for small organizations (in progress). With a team that values trust, skill, and growth, we are committed to delivering quality-first digital solutions that stay ahead of evolving security threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-cyber text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="text-muted-foreground">Building reliable partnerships through transparency, integrity, and consistent delivery of exceptional results.</p>
            </div>
            
            <div className="card-cyber text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Skill</h3>
              <p className="text-muted-foreground">Continuous learning and mastery of cutting-edge technologies to deliver superior cybersecurity solutions.</p>
            </div>
            
            <div className="card-cyber text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <p className="text-muted-foreground">Fostering innovation and personal development while scaling solutions that secure digital futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          
          {/* Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Innovative Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-cyber">
                <h4 className="text-xl font-semibold mb-4 text-gradient">TwinAV</h4>
                <p className="text-muted-foreground mb-4">A smart, lightweight antivirus engine designed for modern threat detection and prevention.</p>
                <div className="flex items-center text-sm text-primary">
                  <CheckCircle size={16} className="mr-2" />
                  In Development
                </div>
              </div>
              
              <div className="card-cyber">
                <h4 className="text-xl font-semibold mb-4 text-gradient">TwinShield</h4>
                <p className="text-muted-foreground mb-4">A Firewall-as-a-Service platform specifically designed for small organizations and startups.</p>
                <div className="flex items-center text-sm text-primary">
                  <CheckCircle size={16} className="mr-2" />
                  In Development
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Professional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="card-cyber text-center">
                <h4 className="font-semibold mb-2">Secure Development</h4>
                <p className="text-sm text-muted-foreground">Website and app development with security at the core</p>
              </div>
              
              <div className="card-cyber text-center">
                <h4 className="font-semibold mb-2">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">Design and prototyping for exceptional user experiences</p>
              </div>
              
              <div className="card-cyber text-center">
                <h4 className="font-semibold mb-2">Graphic Design</h4>
                <p className="text-sm text-muted-foreground">Visual identity and motion content creation</p>
              </div>
              
              <div className="card-cyber text-center">
                <h4 className="font-semibold mb-2">Data Science</h4>
                <p className="text-sm text-muted-foreground">Automation tools and data-driven insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto card-cyber">
            <div className="flex items-center justify-center mb-6">
              <Users className="text-primary mr-4" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Student Training & Internships</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Twincord is committed to bridging industry needs with talent from students. Our comprehensive training and internship programs provide hands-on experience in cybersecurity, software development, and emerging technologies, preparing the next generation of digital security professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in building a more secure digital world. Explore our solutions and discover how we can help protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/#contact')}
              className="btn-cyber group"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => navigate('/careers')}
              className="btn-outline-cyber"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;