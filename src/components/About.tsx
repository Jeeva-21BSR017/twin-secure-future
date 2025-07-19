import { MapPin, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cyber-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Twincord</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Twincord Technologies Private Limited</strong> is a 
                cybersecurity-focused software startup incubated at <span className="text-primary font-semibold">Kongu TBI, Tamil Nadu</span>. 
                We specialize in building secure, modern, and scalable web, mobile, and cloud-based solutions for 
                startups, academic institutions, and growing businesses.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our in-house innovation includes the development of <span className="font-mono text-primary">TwinAV</span> – 
                A smart, lightweight antivirus engine and <span className="font-mono text-primary">TwinShield</span> – 
                A Firewall-as-a-Service platform for small organizations.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With a team that values <span className="text-primary font-semibold">trust</span>, 
                <span className="text-primary font-semibold"> skill</span>, and 
                <span className="text-primary font-semibold"> growth</span>, we are committed to 
                delivering quality-first digital solutions that stay ahead of evolving security threats.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div className="card-cyber">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">Headquarters in Erode, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="card-cyber">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Incubated</h3>
                    <p className="text-muted-foreground">Kongu Technology Business Incubator</p>
                  </div>
                </div>
              </div>

              <div className="card-cyber">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Training Programs</h3>
                    <p className="text-muted-foreground">Student training and internship programs</p>
                  </div>
                </div>
              </div>

              <div className="card-cyber">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mission</h3>
                    <p className="text-muted-foreground">Securing digital futures through innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-cyber text-center group">
                <div className="text-3xl font-bold text-gradient mb-4 group-hover:animate-pulse-glow">Trust</div>
                <p className="text-muted-foreground">Building lasting relationships through transparency and reliability</p>
              </div>
              <div className="card-cyber text-center group">
                <div className="text-3xl font-bold text-gradient mb-4 group-hover:animate-pulse-glow">Skill</div>
                <p className="text-muted-foreground">Continuous learning and excellence in cybersecurity expertise</p>
              </div>
              <div className="card-cyber text-center group">
                <div className="text-3xl font-bold text-gradient mb-4 group-hover:animate-pulse-glow">Growth</div>
                <p className="text-muted-foreground">Evolving with technology to meet tomorrow's security challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;