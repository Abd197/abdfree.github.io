import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Building2, 
  GraduationCap, 
  Heart,
  Monitor,
  Tablet,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  CreditCard,
  Truck
} from 'lucide-react';

const Applications = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const applicationCategories = {
    web: {
      title: 'Web Applications',
      icon: Globe,
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      applications: [
        {
          icon: ShoppingCart,
          title: 'E-Commerce Platforms',
          description: 'Full-featured online stores with payment integration',
          features: ['Product Management', 'Payment Gateway', 'Inventory Tracking', 'Order Management'],
          tech: ['React', 'Node.js', 'Stripe', 'MongoDB']
        },
        {
          icon: Building2,
          title: 'Business Dashboards',
          description: 'Comprehensive admin panels and analytics dashboards',
          features: ['Real-time Analytics', 'User Management', 'Data Visualization', 'Report Generation'],
          tech: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL']
        },
        {
          icon: Users,
          title: 'Social Platforms',
          description: 'Community-driven platforms and social networks',
          features: ['User Profiles', 'Real-time Chat', 'Content Sharing', 'Social Features'],
          tech: ['React', 'Socket.io', 'Redis', 'AWS']
        },
        {
          icon: GraduationCap,
          title: 'Learning Management',
          description: 'Educational platforms and course management systems',
          features: ['Course Creation', 'Progress Tracking', 'Assessments', 'Certificates'],
          tech: ['Angular', 'Firebase', 'Video Streaming', 'AI Integration']
        }
      ]
    },
    mobile: {
      title: 'Mobile Applications',
      icon: Smartphone,
      description: 'Native and cross-platform mobile apps for iOS and Android',
      applications: [
        {
          icon: Heart,
          title: 'Healthcare Apps',
          description: 'Medical and wellness applications with secure data handling',
          features: ['Patient Records', 'Appointment Booking', 'Telemedicine', 'Health Tracking'],
          tech: ['React Native', 'HIPAA Compliance', 'Secure APIs', 'Biometric Auth']
        },
        {
          icon: CreditCard,
          title: 'FinTech Solutions',
          description: 'Financial applications with advanced security features',
          features: ['Digital Payments', 'Budget Tracking', 'Investment Tools', 'Fraud Detection'],
          tech: ['Flutter', 'Blockchain', 'Encryption', 'Bank APIs']
        },
        {
          icon: Truck,
          title: 'Logistics & Delivery',
          description: 'Supply chain and delivery management applications',
          features: ['Route Optimization', 'Real-time Tracking', 'Driver Management', 'Customer Updates'],
          tech: ['Native iOS/Android', 'GPS Integration', 'Push Notifications', 'Maps API']
        },
        {
          icon: Calendar,
          title: 'Productivity Apps',
          description: 'Task management and productivity enhancement tools',
          features: ['Task Scheduling', 'Team Collaboration', 'Time Tracking', 'Goal Setting'],
          tech: ['React Native', 'Offline Sync', 'Cloud Storage', 'Notifications']
        }
      ]
    },
    enterprise: {
      title: 'Enterprise Solutions',
      icon: Building2,
      description: 'Scalable enterprise applications for large organizations',
      applications: [
        {
          icon: Database,
          title: 'ERP Systems',
          description: 'Comprehensive enterprise resource planning solutions',
          features: ['Resource Management', 'Financial Planning', 'Supply Chain', 'HR Management'],
          tech: ['Microservices', 'Docker', 'Kubernetes', 'Enterprise DB']
        },
        {
          icon: Shield,
          title: 'Security Platforms',
          description: 'Cybersecurity and compliance management systems',
          features: ['Threat Detection', 'Compliance Monitoring', 'Access Control', 'Audit Trails'],
          tech: ['AI/ML', 'Blockchain', 'Zero Trust', 'SIEM Integration']
        },
        {
          icon: BarChart3,
          title: 'Analytics Platforms',
          description: 'Big data analytics and business intelligence tools',
          features: ['Data Processing', 'Predictive Analytics', 'Custom Reports', 'API Integration'],
          tech: ['Python', 'Apache Spark', 'Tableau', 'Machine Learning']
        },
        {
          icon: Cloud,
          title: 'Cloud Infrastructure',
          description: 'Scalable cloud-native applications and services',
          features: ['Auto Scaling', 'Load Balancing', 'Disaster Recovery', 'Multi-region Deploy'],
          tech: ['AWS/Azure', 'Terraform', 'CI/CD', 'Monitoring']
        }
      ]
    }
  };

  const categoryTabs = [
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'enterprise', label: 'Enterprise', icon: Building2 }
  ];

  return (
    <section id="applications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the diverse range of applications we build across different platforms and industries
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
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
              {React.createElement(applicationCategories[activeCategory].icon, {
                className: "w-12 h-12 text-blue-600"
              })}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {applicationCategories[activeCategory].title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {applicationCategories[activeCategory].description}
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationCategories[activeCategory].applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{app.title}</h4>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Application?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you need a simple web app or a complex enterprise solution, we have the expertise to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;