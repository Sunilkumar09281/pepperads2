import React from 'react';
import { Sparkles, Zap, Rocket, BrainCircuit } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';

const AIFormCreatorGuidePage = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="How to Use AI Form Creator"
      subtitle="Build Smart Surveys in Seconds"
      backgroundImage="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            No more starting from scratch. Just type what you need, and let AI generate tailored surveys—fast, effective, and ready to launch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<BrainCircuit className="w-10 h-10 text-red-500" />}
            title="AI Survey Builder"
            description="Turn a simple prompt into a complete, structured survey—no manual setup required."
            number="01"
          />
          <GlassmorphicCard
            icon={<Sparkles className="w-10 h-10 text-red-500" />}
            title="Optimized Templates"
            description="Access industry-specific survey formats designed for engagement and actionable insights."
            number="02"
          />
          <GlassmorphicCard
            icon={<Rocket className="w-10 h-10 text-red-500" />}
            title="Scale with Ease"
            description="Save and reuse your best-performing forms across campaigns with just a few clicks."
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
                  <p className="text-gray-400 font-mono text-sm mb-4">AI Prompt:</p>
                  <p className="text-white font-medium">Create a customer satisfaction survey for an online store</p>
                  <div className="mt-4 flex">
                    <button 
                      onClick={() => navigate('/login')}
                      className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium 
                      transition-all duration-300">
                      Generate
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  AI-Powered Creation
                </h3>
                <p className="text-gray-300 mb-6">
                  Skip the blank page. Just describe your goal, and our AI will instantly craft a survey aligned with your audience and intent—designed for high response and clean data.
                </p>
                <button 
                  onClick={() => navigate('/contactus')}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium 
                  transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Try AI Creator
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="AI Survey Creation" 
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

export default AIFormCreatorGuidePage;
