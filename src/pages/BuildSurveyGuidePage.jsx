import React from 'react';
import { MousePointer2, FileDown, Share2, PenTool } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';

const BuildSurveyGuidePage = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="How to Build a Survey"
      subtitle="Launch Engaging Surveys in Minutes"
      backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Start here if you're new to online forms. This guide walks you through creating 
            your first survey — from choosing the right questions to designing a flow that 
            gets results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<MousePointer2 className="w-10 h-10 text-red-500" />}
            title="Visual Builder"
            description="Effortlessly create forms with our drag-and-drop interface—no coding, just clicks."
            number="01"
          />
          <GlassmorphicCard
            icon={<PenTool className="w-10 h-10 text-red-500" />}
            title="Live Preview"
            description="See every change in real time, so you know exactly how your survey looks before sharing."
            number="02"
          />
          <GlassmorphicCard
            icon={<Share2 className="w-10 h-10 text-red-500" />}
            title="Flexible Sharing"
            description="Distribute your survey instantly via link, QR code, or export as a downloadable PDF."
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
                  <h4 className="text-lg font-semibold text-white mb-4">Start with a Template</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-800/50 rounded-lg">
                      <p className="text-gray-300">1. Customer Experience</p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg">
                      <p className="text-gray-300">2. Product Insights</p>
                    </div>
                    <div className="p-3 bg-red-900/30 rounded-lg border border-red-500/30">
                      <p className="text-red-300">3. Market Research</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Start with Templates
                </h3>
                <p className="text-gray-300 mb-6">
                  Choose from our library of pre-built templates or start from scratch. 
                  Each template is customizable and designed for specific use cases.
                </p>
                <a 
                  href="/guide.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium 
                    transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2"
                >
                  <FileDown className="w-5 h-5" />
                  Download Guide
                </a>
                  
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Survey Building" 
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

export default BuildSurveyGuidePage;
