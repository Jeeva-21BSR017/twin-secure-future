import { Users, TrendingUp, Heart, Code, Lightbulb, Target } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement in cutting-edge cybersecurity technologies'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements that support both professional and personal growth'
    },
    {
      icon: Code,
      title: 'Innovation Focus',
      description: 'Work on groundbreaking projects that shape the future of cybersecurity'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a team that values trust, skill, and mutual support'
    }
  ];

  const openPositions = [
    {
      title: 'Cybersecurity Engineer',
      type: 'Full-time',
      location: 'Erode, Tamil Nadu',
      description: 'Join our team to develop and implement advanced security solutions for our enterprise clients.'
    },
    {
      title: 'Software Developer',
      type: 'Full-time',
      location: 'Erode, Tamil Nadu',
      description: 'Build secure, scalable web and mobile applications using modern development frameworks.'
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Erode, Tamil Nadu',
      description: 'Create intuitive and secure user experiences for our cybersecurity products and services.'
    },
    {
      title: 'Cybersecurity Intern',
      type: 'Internship',
      location: 'Erode, Tamil Nadu',
      description: 'Learn hands-on cybersecurity skills while contributing to real-world security projects.'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-cyber-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-gradient">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a mission-driven team that's shaping the future of cybersecurity. 
            Grow your career while making a meaningful impact on digital security.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Twincord?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our culture is built on trust, continuous learning, and innovation. 
              We believe in empowering our team members to reach their full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-cyber text-center group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h4 className="font-semibold text-lg mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="card-cyber max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Values in Action</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold text-lg text-gradient">Trust</h4>
                <p className="text-muted-foreground text-sm">
                  We build lasting relationships through transparency, reliability, and ethical practices.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold text-lg text-gradient">Skill</h4>
                <p className="text-muted-foreground text-sm">
                  Continuous learning and excellence in cybersecurity expertise drives our success.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold text-lg text-gradient">Growth</h4>
                <p className="text-muted-foreground text-sm">
                  We evolve with technology to meet tomorrow's security challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Open Positions</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore current opportunities to join our growing team and contribute 
              to the future of cybersecurity innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={position.title}
                className="card-cyber group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-xl mb-2">{position.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {position.type}
                      </span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="flex justify-between items-center">
                  <button className="btn-outline-cyber">
                    Apply Now
                  </button>
                  <span className="text-sm text-muted-foreground">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-cyber max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't See the Right Position?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always looking for talented individuals who share our passion for cybersecurity 
              and innovation. Send us your resume and let's explore how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber">
                Send Your Resume
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-cyber"
              >
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;