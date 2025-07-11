import React from 'react';
import { Rocket, Shield, Zap, Heart, Users, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security for your peace of mind',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Cutting Edge',
      description: 'Latest technologies and modern development practices',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Designed with your users in mind for maximum engagement',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Seamless teamwork and communication throughout',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Trophy,
      title: 'Award Winning',
      description: 'Recognized excellence in design and development',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AbdFree?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-6">Join thousands of satisfied clients who trust AbdFree</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;