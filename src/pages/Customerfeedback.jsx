import React from 'react';
import { GitBranch, Target, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const SmartRoutingPage = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="Smart Response Routing"
      subtitle="Create dynamic, personalized user journeys"
      backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Dynamically redirect users based on their answers. Perfect for quiz funnels, 
            lead scoring, or tiered onboarding flows. Great for increasing form completion 
            and relevance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<GitBranch className="w-10 h-10 text-red-500" />}
            title="Dynamic Paths"
            description="Create branching logic based on user responses"
            number="01"
          />
          <GlassmorphicCard
            icon={<Target className="w-10 h-10 text-red-500" />}
            title="Lead Scoring"
            description="Automatically score and route leads to the right destination"
            number="02"
          />
          <GlassmorphicCard
            icon={<Zap className="w-10 h-10 text-red-500" />}
            title="Smart Funnels"
            description="Build intelligent funnels that adapt to user behavior"
            number="03"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-2xl blur"></div>
          <div className="relative bg-black/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Active Route</span>
                    </div>
                    <span className="text-sm text-gray-400">Response Time: 2.3s</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                        <span className="text-red-500 font-bold">Q1</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">Q2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Intelligent Response Handling
                </h3>
                <p className="text-gray-300 mb-6">
                  Create sophisticated routing rules that direct users to personalized experiences 
                  based on their responses. Perfect for lead qualification, product recommendations, 
                  and customer support flows.
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition flex items-center gap-2"
                >
                  <GitBranch className="w-5 h-5" />
                  Start Routing
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Smart Routing" 
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

export default SmartRoutingPage;
