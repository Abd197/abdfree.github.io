import React, { useState } from 'react';
import { 
  Tv, 
  Play, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Globe,
  Server,
  Shield,
  Zap,
  Users,
  Settings,
  Cloud,
  Radio,
  Film,
  Gamepad2,
  Music,
  Camera,
  Headphones,
  Wifi,
  Database,
  Lock
} from 'lucide-react';

const IPTV = () => {
  const [activeCategory, setActiveCategory] = useState('streaming');

  const iptvCategories = {
    streaming: {
      title: 'Live TV Streaming',
      icon: Tv,
      description: 'High-quality live television streaming solutions with global reach',
      services: [
        {
          icon: Radio,
          title: 'Live Broadcast Streaming',
          description: 'Real-time television broadcasting with minimal latency',
          features: ['4K/8K Quality', 'Low Latency', 'Multi-Bitrate', 'Global CDN'],
          pricing: 'Starting at $299/month',
          popular: true
        },
        {
          icon: Globe,
          title: 'Multi-Region Distribution',
          description: 'Worldwide content delivery with regional optimization',
          features: ['Global Servers', 'Regional Content', 'Local CDN', 'Geo-blocking'],
          pricing: 'Starting at $199/month',
          popular: false
        },
        {
          icon: Users,
          title: 'Multi-User Management',
          description: 'Comprehensive user management and access control',
          features: ['User Profiles', 'Parental Controls', 'Access Levels', 'Usage Analytics'],
          pricing: 'Starting at $149/month',
          popular: false
        },
        {
          icon: Shield,
          title: 'Secure Streaming',
          description: 'windows-grade security for content protection',
          features: ['DRM Protection', 'Encrypted Streams', 'Anti-Piracy', 'Secure APIs'],
          pricing: 'Starting at $399/month',
          popular: false
        }
      ]
    },
    vod: {
      title: 'Video on Demand',
      icon: Play,
      description: 'Comprehensive VOD platforms with extensive content libraries',
      services: [
        {
          icon: Film,
          title: 'Movie & Series Platform',
          description: 'Complete VOD solution for movies and TV series',
          features: ['Content Library', 'Recommendation Engine', 'Watchlists', 'Offline Download'],
          pricing: 'Starting at $249/month',
          popular: true
        },
        {
          icon: Music,
          title: 'Music & Audio Streaming',
          description: 'High-fidelity audio streaming with playlist management',
          features: ['Lossless Audio', 'Playlist Creation', 'Social Sharing', 'Podcast Support'],
          pricing: 'Starting at $179/month',
          popular: false
        },
        {
          icon: Gamepad2,
          title: 'Gaming Content Hub',
          description: 'Gaming videos, tutorials, and live gameplay streaming',
          features: ['Game Library', 'Live Streaming', 'Tournament Coverage', 'Interactive Chat'],
          pricing: 'Starting at $329/month',
          popular: false
        },
        {
          icon: Camera,
          title: 'Educational Content',
          description: 'Learning platforms with interactive video content',
          features: ['Course Management', 'Progress Tracking', 'Interactive Videos', 'Certificates'],
          pricing: 'Starting at $199/month',
          popular: false
        }
      ]
    },
    infrastructure: {
      title: 'Infrastructure & Technology',
      icon: Server,
      description: 'Robust backend infrastructure and cutting-edge technology solutions',
      services: [
        {
          icon: Cloud,
          title: 'Cloud Infrastructure',
          description: 'Scalable cloud-based IPTV infrastructure solutions',
          features: ['Auto Scaling', 'Load Balancing', 'Disaster Recovery', 'Global Deployment'],
          pricing: 'Starting at $499/month',
          popular: true
        },
        {
          icon: Database,
          title: 'Content Management System',
          description: 'Advanced CMS for content organization and delivery',
          features: ['Content Ingestion', 'Metadata Management', 'Automated Workflows', 'API Integration'],
          pricing: 'Starting at $299/month',
          popular: false
        },
        {
          icon: Wifi,
          title: 'CDN & Delivery Network',
          description: 'High-performance content delivery network optimization',
          features: ['Edge Caching', 'Bandwidth Optimization', 'Real-time Analytics', 'Traffic Management'],
          pricing: 'Starting at $399/month',
          popular: false
        },
        {
          icon: Lock,
          title: 'Security & Compliance',
          description: 'Comprehensive security solutions for IPTV platforms',
          features: ['End-to-End Encryption', 'Compliance Monitoring', 'Fraud Detection', 'Access Control'],
          pricing: 'Starting at $349/month',
          popular: false
        }
      ]
    },
    devices: {
      title: 'Multi-Device Support',
      icon: Monitor,
      description: 'Seamless streaming experience across all devices and platforms',
      services: [
        {
          icon: Tv,
          title: 'Smart TV Applications',
          description: 'Native apps for all major smart TV platforms',
          features: ['Samsung Tizen', 'LG webOS', 'Android TV', 'Apple TV'],
          pricing: 'Starting at $199/month',
          popular: true
        },
        {
          icon: Smartphone,
          title: 'Mobile Applications',
          description: 'iOS and Android apps with offline capabilities',
          features: ['Native iOS/Android', 'Offline Viewing', 'Push Notifications', 'Chromecast Support'],
          pricing: 'Starting at $149/month',
          popular: false
        },
        {
          icon: Monitor,
          title: 'Web Applications',
          description: 'Browser-based streaming with HTML5 player',
          features: ['Cross-browser Support', 'Responsive Design', 'Progressive Web App', 'Keyboard Shortcuts'],
          pricing: 'Starting at $129/month',
          popular: false
        },
        {
          icon: Headphones,
          title: 'Set-Top Box Solutions',
          description: 'Custom firmware and applications for STB devices',
          features: ['Custom UI/UX', 'Remote Control', 'Voice Commands', 'Hardware Integration'],
          pricing: 'Starting at $299/month',
          popular: false
        }
      ]
    }
  };

  const categoryTabs = [
    { key: 'streaming', label: 'Live Streaming', icon: Tv },
    { key: 'vod', label: 'Video on Demand', icon: Play },
    { key: 'infrastructure', label: 'Infrastructure', icon: Server },
    { key: 'devices', label: 'Multi-Device', icon: Monitor }
  ];

  return (
    <section id="iptv" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            IPTV Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IPTV and streaming solutions for broadcasters, content providers, and enterprises
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="bg-gray-50 rounded-full p-2 shadow-lg min-w-max">
            <div className="flex space-x-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                    activeCategory === tab.key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Category Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              {React.createElement(iptvCategories[activeCategory].icon, {
                className: "w-12 h-12 text-blue-600"
              })}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {iptvCategories[activeCategory].title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {iptvCategories[activeCategory].description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iptvCategories[activeCategory].services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative ${
                  service.popular ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our IPTV Solutions?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Industry-leading technology with proven scalability and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Ultra-Low Latency</h4>
              <p className="text-gray-300 text-sm">Sub-second latency for live streaming with advanced optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Enterprise Security</h4>
              <p className="text-gray-300 text-sm">Military-grade encryption and DRM protection for your content</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Full Customization</h4>
              <p className="text-gray-300 text-sm">Tailored solutions to match your brand and requirements</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Launch Your IPTV Platform?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get started with our comprehensive IPTV solutions and reach millions of viewers worldwide with professional-grade streaming technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPTV;