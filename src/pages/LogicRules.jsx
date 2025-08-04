import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GitBranch, ArrowRight, GitFork, BarChart3 } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const LogicRules = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="Logic Rules"
      subtitle="Create dynamic, adaptive surveys"
      backgroundImage="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
      badge="Coming Soon"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Skip logic, branching, conditional scoring — all with a few clicks. Soon, you'll be able 
            to build dynamic surveys that adapt based on answers. This is a game-changer for product 
            recommendation funnels, assessments, and interactive experiences.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<GitBranch className="w-10 h-10 text-red-500" />}
            title="Skip Logic"
            description="Skip irrelevant questions based on previous answers to create streamlined experiences"
          />
          <GlassmorphicCard
            icon={<GitFork className="w-10 h-10 text-red-500" />}
            title="Branching Paths"
            description="Create multiple survey paths that adapt to each respondent's unique journey"
          />
          <GlassmorphicCard
            icon={<BarChart3 className="w-10 h-10 text-red-500" />}
            title="Conditional Scoring"
            description="Automatically score responses and provide personalized results and recommendations"
          />
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="mb-16">
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Benefits</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Personalized Experiences</h4>
              <p className="text-gray-400">
                Create tailored journeys for each user based on their responses, increasing engagement and completion rates.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Higher Conversion Rates</h4>
              <p className="text-gray-400">
                For partners building data funnels, logic paths can significantly improve conversion rates and time-on-form.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Advanced Filtering</h4>
              <p className="text-gray-400">
                Pre-qualify leads and customers with conditional logic that routes users to the right outcome.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Time Efficiency</h4>
              <p className="text-gray-400">
                Reduce survey abandonment by only showing relevant questions to each respondent.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Visual Demo */}
      <AnimatedSection>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-2xl blur"></div>
          <div className="relative bg-black/60 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Visualize Your Logic Flow
                </h3>
                <p className="text-gray-300 mb-6">
                  You'll be able to combine logic rules with AI prompts and branding settings 
                  to launch advanced flows that feel personalized. Perfect for product 
                  recommendation funnels, assessments, and interactive experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium 
                      transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2"
                  >
                    <GitBranch className="w-5 h-5" />
                    Join Waitlist
                  </button>
                  <button 
                    onClick={() => navigate('/ContactUs')}
                    className="bg-transparent hover:bg-gray-800 text-white border border-gray-700 
                    px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-900/80 p-6 md:p-8 rounded-xl border border-gray-800">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-20 h-20 rounded-lg bg-red-600/20 border border-red-600/30 flex items-center justify-center mb-2">
                      <span className="text-white font-bold">Q1</span>
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <ArrowRight className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex items-center justify-center gap-10 mb-2">
                    <div className="w-20 h-20 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <span className="text-white font-bold">Q2A</span>
                    </div>
                    <div className="w-20 h-20 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <span className="text-white font-bold">Q2B</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-10 mb-2">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex items-center justify-center gap-10">
                    <div className="w-20 h-20 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center opacity-50">
                      <span className="text-white font-bold">Q3A</span>
                    </div>
                    <div className="w-20 h-20 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center opacity-50">
                      <span className="text-white font-bold">Q3B</span>
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

export default LogicRules;
