import React from 'react';
import { Sparkles, Zap, PenTool, BrainCircuit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const AiSurveyTool = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="AI Survey Tool"
      subtitle="Create powerful surveys in seconds with AI"
      backgroundImage="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Just type what you need — and let AI generate a complete survey for you in seconds. 
            Our AI is trained on hundreds of real-world templates and optimized for industries 
            like ecommerce, education, HR, and market research.
          </p>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-gray-800 
            hover:border-red-900 transition-all duration-300 group">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Instant Generation</h3>
            </div>
            <p className="text-gray-300">
              Generate complete, professional surveys in seconds with just a few keywords. 
              Our AI handles everything from question structure to response options.
            </p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-gray-800 
            hover:border-red-900 transition-all duration-300 group">
            <div className="mb-6 flex items-center gap-3">
              <BrainCircuit className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Industry Optimized</h3>
            </div>
            <p className="text-gray-300">
              Our AI is trained on industry-specific templates for ecommerce, education, 
              HR, and market research, ensuring relevant and effective surveys.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="mb-16">
        <h3 className="text-3xl font-bold text-white text-center mb-10">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <GlassmorphicCard
            icon={<PenTool className="w-10 h-10 text-red-500" />}
            title="Describe"
            description="Tell our AI what kind of survey you need in plain language"
            number="01"
          />
          <GlassmorphicCard
            icon={<Zap className="w-10 h-10 text-red-500" />}
            title="Generate"
            description="AI creates your complete survey with optimized questions and flow"
            number="02"
          />
          <GlassmorphicCard
            icon={<Sparkles className="w-10 h-10 text-red-500" />}
            title="Customize"
            description="Fine-tune your survey design, questions, and branding as needed"
            number="03"
          />
        </div>
      </AnimatedSection>

      {/* Demo Section */}
      <AnimatedSection>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-2xl blur"></div>
          <div className="relative bg-black/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <div className="bg-gray-900/80 p-6 rounded-xl mb-8 border border-gray-800">
                  <p className="text-gray-400 font-mono text-sm mb-4">AI Prompt:</p>
                  <p className="text-white font-medium">
                    Create a customer satisfaction survey for an ecommerce store selling electronics
                  </p>
                  <div className="mt-4 flex">
                    <button className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium 
                      transition-all duration-300">
                      Generate
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Perfect for Marketers & Publishers</h3>
                <p className="text-gray-300 mb-6">
                  Digital marketers and publishers love this tool for quickly testing new lead 
                  gen angles or building survey journeys that connect with monetized offers 
                  in the backend.
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
                >
                  Try AI Survey Creation
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-white">Customer Satisfaction Survey</h4>
                    <span className="text-xs font-medium px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                      AI Generated
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-white font-medium">1. How satisfied are you with your recent purchase?</p>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5].map(num => (
                          <button key={num} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors">
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-white font-medium">2. What aspects of our service could be improved?</p>
                      <div className="space-y-2">
                        {['Product quality', 'Shipping time', 'Customer support', 'Website experience'].map(option => (
                          <div key={option} className="flex items-center">
                            <div className="w-5 h-5 rounded border border-gray-600 mr-3"></div>
                            <span className="text-gray-300">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default AiSurveyTool;
