import React from 'react';
import { Code, Palette, Megaphone, Smartphone, Globe, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      subsections: [
        'Frontend Development',
        'Backend Development',
        'Full-Stack Solutions',
        'E-commerce Platforms'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience',
      subsections: [
        'User Interface Design',
        'User Experience Research',
        'Prototyping & Wireframing',
        'Brand Identity Design'
      ]
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence',
      subsections: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'PPC Advertising'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      subsections: [
        'iOS Development',
        'Android Development',
        'React Native Apps',
        'Flutter Applications'
      ]
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      subsections: [
        'AWS Solutions',
        'Azure Services',
        'Google Cloud Platform',
        'DevOps & CI/CD'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven insights to optimize your digital strategy',
      subsections: [
        'Google Analytics Setup',
        'Conversion Tracking',
        'Performance Monitoring',
        'Custom Dashboards'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Areas:</h4>
                {service.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">{subsection}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-8">
            We also offer bespoke services tailored to your unique requirements
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;