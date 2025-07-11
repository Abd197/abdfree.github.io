import React from 'react';
import { Award, Target, Clock, Lightbulb, Users2, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable outcomes for your business'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Meeting deadlines while maintaining the highest quality standards'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions'
    },
    {
      icon: Users2,
      title: 'Collaboration',
      description: 'Working closely with our clients as trusted partners'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely caring about your success and growth'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      specialty: 'UI/UX Design & Strategy'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      specialty: 'Full-Stack Development'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Marketing Specialist',
      specialty: 'Digital Marketing & SEO'
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      specialty: 'Client Relations & Delivery'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About AbdFree
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital craftspeople dedicated to creating exceptional online experiences 
            that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Founded in 2020, AbdFree began as a small team of developers and designers who shared a common vision: 
                to help businesses thrive in the digital age through innovative, user-centered solutions.
              </p>
              <p className="leading-relaxed">
                Today, we've grown into a full-service digital agency that has helped over 500 businesses transform 
                their online presence and achieve their goals. Our commitment to excellence and client satisfaction 
                remains at the heart of everything we do.
              </p>
              <p className="leading-relaxed">
                We believe that great digital experiences are born from the perfect blend of creativity, technology, 
                and strategic thinking. Every project we take on is an opportunity to push boundaries and create 
                something truly remarkable.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower businesses with cutting-edge digital solutions that not only look stunning but also 
                deliver measurable results. We're committed to being more than just a service provider – we're 
                your strategic partner in digital success.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;