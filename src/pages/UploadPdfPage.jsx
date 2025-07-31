import React from 'react';
import { FileUp, CheckCircle, Download, Edit3 } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';

const UploadPdfPage = () => {
  const navigate = useNavigate();

  return (
    <FeatureLayout
      title="Upload PDFs"
      subtitle="Transform static PDFs into dynamic surveys"
      backgroundImage="https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Already have a PDF survey or form? Simply upload and convert it into an editable, 
            shareable format. You can modify fields, brand the design, or turn static files 
            into smart forms.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<FileUp className="w-10 h-10 text-red-500" />}
            title="Upload"
            description="Drag & drop or browse to upload your existing PDF forms and surveys"
          />
          <GlassmorphicCard
            icon={<Edit3 className="w-10 h-10 text-red-500" />}
            title="Customize"
            description="Edit fields, add branding, and enhance with interactive elements"
          />
          <GlassmorphicCard
            icon={<Download className="w-10 h-10 text-red-500" />}
            title="Export"
            description="Export filled forms back to PDF with all responses intact"
          />
        </div>
      </AnimatedSection>

      {/* Use Cases */}
      <AnimatedSection className="mb-16">
        <h3 className="text-3xl font-bold text-white text-center mb-8">Perfect For</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
            <div className="mb-4">
              <CheckCircle className="w-8 h-8 text-red-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">HR Teams</h4>
            <p className="text-gray-400">Standardize onboarding documents and employee surveys</p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
            <div className="mb-4">
              <CheckCircle className="w-8 h-8 text-red-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Educational Institutions</h4>
            <p className="text-gray-400">Convert assessment forms and feedback sheets into digital format</p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
            <div className="mb-4">
              <CheckCircle className="w-8 h-8 text-red-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Affiliate Managers</h4>
            <p className="text-gray-400">Transform campaign feedback forms into revenue-generating assets</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Demonstration */}
      <AnimatedSection>
        <div className="relative bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-2xl blur-sm"></div>
          <div className="relative p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Monetize Your Forms</h3>
                <p className="text-gray-300 mb-6">
                  Many of our advanced users monetize surveys by repurposing existing 
                  assets into revenue-generating formats. Convert one-time PDF forms 
                  into recurring engagement tools.
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
                >
                  Start Converting PDFs
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 opacity-70 rounded-xl blur-md"></div>
                  <img 
                    src="https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg" 
                    alt="PDF Conversion" 
                    className="relative rounded-xl w-full object-cover h-64 md:h-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default UploadPdfPage;
