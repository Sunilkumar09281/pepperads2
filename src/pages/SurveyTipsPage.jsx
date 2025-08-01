import React from 'react';
import { Target, LineChart, Clock, Lightbulb } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const SurveyTipsPage = () => {
  return (
    <FeatureLayout
      title="Survey Tips"
      subtitle="Create more effective surveys that convert"
      backgroundImage="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Small tweaks can lead to big gains. Use these expert-backed tips to create shorter, smarter, and more engaging surveys that drive higher response rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<Clock className="w-10 h-10 text-red-500" />}
            title="Ideal Length"
            description="Discover the sweet spot for survey duration to reduce drop-offs and boost completions."
          />
          <GlassmorphicCard
            icon={<Target className="w-10 h-10 text-red-500" />}
            title="Smart Question Types"
            description="Use the right mix of open, closed, and scaled questions to improve response quality."
          />
          <GlassmorphicCard
            icon={<LineChart className="w-10 h-10 text-red-500" />}
            title="Boosting Conversions"
            description="Apply proven strategies to increase participation and drive more valuable insights."
          />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                 Pro Tips for Higher Completion
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Lightbulb className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Keep it Short</h4>
                    <p className="text-gray-300">
                      Surveys with 5–7 minute completion times consistently perform best. Less friction = more responses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Lightbulb className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Start Simple</h4>
                    <p className="text-gray-300">
                      Begin with easy, non-intimidating questions to ease users into the flow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Lightbulb className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Design for Mobile First</h4>
                    <p className="text-gray-300">
                      Most users respond on phones—ensure your layout, buttons, and logic work seamlessly on small screens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg"
                alt="Survey Tips" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default SurveyTipsPage;
