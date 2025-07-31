import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Rocket, Target, BarChart3 } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const PublisherSuitePage = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="Publisher Suite"
      subtitle="Monetize your audience with powerful engagement tools"
      backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            This suite is designed specifically for traffic partners and digital publishers who want 
            to monetize form submissions, app installs, and survey completions. With simple integrations, 
            offer automation, and performance dashboards, it's the easiest way to start earning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<DollarSign className="w-10 h-10 text-red-500" />}
            title="Monetization"
            description="Convert form submissions and survey completions into revenue"
          />
          <GlassmorphicCard
            icon={<Target className="w-10 h-10 text-red-500" />}
            title="Targeted Campaigns"
            description="Access curated campaigns designed for your audience"
          />
          <GlassmorphicCard
            icon={<BarChart3 className="w-10 h-10 text-red-500" />}
            title="Performance Tracking"
            description="Monitor conversions and optimize your campaigns in real-time"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk="
                alt="Analytics Dashboard" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Our Early Access Program
              </h3>
              <p className="text-gray-300 mb-6">
                Publishers in our early program are already seeing results by pairing their audience 
                with high-performing engagement paths. Join waiting list to access exclusive features and 
                boost your ROI with real-time tools.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium 
                  transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Join wait list
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default PublisherSuitePage;
