import React from 'react';
import { CheckCircle2, Smartphone, BarChart, Shield, ArrowRight } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';

const BestPracticesPage = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="Best Practices"
      subtitle="Proven Strategies for High-Impact Surveys"
      backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Backed by insights from thousands of real-world campaigns, these practices help you create surveys that are not only effective—but insightful, accessible, and built for performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<Smartphone className="w-10 h-10 text-red-500" />}
            title="Mobile-Optimized Design"
            description="Craft surveys that load fast and flow smoothly on any screen—because most users respond on mobile."
            number="01"
          />
          <GlassmorphicCard
            icon={<Shield className="w-10 h-10 text-red-500" />}
            title="Accessibility"
            description="Ensure your surveys are inclusive, readable, and user-friendly across demographics and devices."
            number="02"
          />
          <GlassmorphicCard
            icon={<BarChart className="w-10 h-10 text-red-500" />}
            title="Analytics-First Structure"
            description="Design with data in mind. Build forms that generate clean, usable insights for faster decision-making."
            number="03"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Industry-Specific Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white"> HR & Teams</h4>
              </div>
              <p className="text-gray-300">
                Best approaches for collecting employee feedback, engagement insights, and conducting internal reviews.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <p className="text-gray-300">
                Effective survey formats for student evaluations, course feedback, and academic research.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white">Events</h4>
              </div>
              <p className="text-gray-300">
               Capture better data from event registrations, real-time polls, and post-event feedback loops.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white">Monetized Campaigns</h4>
              </div>
              <p className="text-gray-300">
                Tips for structuring surveys that drive higher conversions and revenue in affiliate or ad-based environments.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-2xl blur"></div>
          <div className="relative bg-black/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get the Complete Guide
                </h3>
                <p className="text-gray-300 mb-6">
                  Download our comprehensive playbook featuring templates, real examples, and custom strategies for every industry.
                </p>
                <button 
                  onClick={() => navigate('/login')}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium 
                  transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2">
                  Download Guide
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Best Practices Guide" 
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default BestPracticesPage;
