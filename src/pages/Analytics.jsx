import React from 'react';
import { BarChart, PieChart, LineChart, Activity } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const AnalyticsPage = () => {
  return (
    <FeatureLayout
      title="Analytics"
      subtitle="Turn survey data into actionable insights"
      backgroundImage="https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg"
      badge="Coming Soon"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Data without insights is just noise. Our upcoming analytics dashboard will help you 
            track views, drop-off rates, completion percentages, and more — all in one place. 
            You'll get visual reports, exportable summaries, and real-time trends so you can 
            gain insights and performance quickly.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<BarChart className="w-10 h-10 text-red-500" />}
            title="Visual Reports"
            description="Comprehensive visual analytics to understand user behavior and identify patterns"
          />
          <GlassmorphicCard
            icon={<LineChart className="w-10 h-10 text-red-500" />}
            title="Real-Time Trends"
            description="Track performance as it happens with live data updates and indicators"
          />
          <GlassmorphicCard
            icon={<PieChart className="w-10 h-10 text-red-500" />}
            title="Exportable Insights"
            description="Download and share detailed reports in various formats for team collaboration"
          />
        </div>
      </AnimatedSection>

      {/* Chart Demo */}
      <AnimatedSection className="mb-16">
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <Activity className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Powerful Insights at a Glance</h3>
            <p className="text-gray-300 mb-6">
              Our chart visualizations will help you quickly interpret your survey data.
              Stay tuned for bar graphs, pie charts, and trend lines that make sense of the noise.
            </p>
            <p className="text-sm text-gray-500 italic">*Demo charts coming soon</p>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default AnalyticsPage;
