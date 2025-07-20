import { Shield, Lock, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 security-wrap">
            About <span className="text-gradient">Twincord</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 security-shake">
            Pioneering cybersecurity solutions for the digital age
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 security-pulse">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Twincord Technologies Private Limited is a cybersecurity-focused software startup 
                  incubated at <span className="security-shake inline-block">Kongu TBI, Tamil Nadu</span>. 
                  We specialize in building secure, modern, and scalable web, mobile, and cloud-based 
                  solutions for startups, academic institutions, and growing businesses.
                </p>
                <p className="mb-4">
                  Our mission is simple yet profound: <span className="text-gradient font-semibold security-wrap">
                  Secure Digital Futures</span>. In an era where cyber threats evolve daily, 
                  we stand as guardians of digital integrity.
                </p>
                <p>
                  With a team that values <span className="security-shake inline-block">trust</span>, 
                  <span className="security-shake inline-block">skill</span>, and 
                  <span className="security-shake inline-block">growth</span>, we are committed 
                  to delivering quality-first digital solutions that stay ahead of evolving security threats.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-cyber text-center security-pulse">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Security First</h3>
                <p className="text-sm text-muted-foreground">Every solution built with security at its core</p>
              </div>
              <div className="card-cyber text-center security-pulse">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Team Excellence</h3>
                <p className="text-sm text-muted-foreground">Skilled professionals dedicated to innovation</p>
              </div>
              <div className="card-cyber text-center security-pulse">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Trust & Integrity</h3>
                <p className="text-sm text-muted-foreground">Building lasting relationships through reliability</p>
              </div>
              <div className="card-cyber text-center security-pulse">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">Delivering excellence in every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Hub */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 security-wrap">
            Innovation <span className="text-gradient">Hub</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-cyber">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-primary security-shake" />
                </div>
                <h3 className="text-xl font-semibold">TwinAV</h3>
                <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full security-pulse">
                  In Progress
                </span>
              </div>
              <p className="text-muted-foreground">
                A smart, lightweight antivirus engine designed for modern threats. 
                TwinAV combines <span className="security-shake inline-block">machine learning</span> 
                with traditional signature-based detection for comprehensive protection.
              </p>
            </div>
            <div className="card-cyber">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-primary security-shake" />
                </div>
                <h3 className="text-xl font-semibold">TwinShield</h3>
                <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full security-pulse">
                  In Progress
                </span>
              </div>
              <p className="text-muted-foreground">
                A Firewall-as-a-Service platform specifically designed for small organizations. 
                TwinShield provides <span className="security-shake inline-block">enterprise-grade</span> 
                firewall protection without the complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 security-wrap">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Secure Website & App Development',
              'UI/UX Design & Prototyping',
              'Graphic Design & Motion Content',
              'Data Science Automation Tools'
            ].map((service, index) => (
              <div key={index} className="card-cyber text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded security-pulse"></div>
                </div>
                <h3 className="font-semibold security-shake">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Programs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 security-wrap">
            Student Training & <span className="text-gradient">Internships</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Twincord is also known for its <span className="security-shake inline-block">student training</span> 
            and internship programs, bridging industry needs with talent from students. 
            We believe in nurturing the next generation of cybersecurity professionals.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-cyber text-center">
              <h3 className="font-semibold mb-2 security-pulse">Hands-on Learning</h3>
              <p className="text-sm text-muted-foreground">Real-world projects and practical experience</p>
            </div>
            <div className="card-cyber text-center">
              <h3 className="font-semibold mb-2 security-pulse">Industry Mentorship</h3>
              <p className="text-sm text-muted-foreground">Guidance from experienced professionals</p>
            </div>
            <div className="card-cyber text-center">
              <h3 className="font-semibold mb-2 security-pulse">Career Pathways</h3>
              <p className="text-sm text-muted-foreground">Clear progression from intern to professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 security-wrap">
            Ready to Secure Your <span className="text-gradient">Digital Future</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Twincord can protect and enhance your digital presence.
          </p>
          <button 
            onClick={() => window.location.href = '/#contact'}
            className="btn-cyber security-pulse"
          >
            <span>Get In Touch</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;