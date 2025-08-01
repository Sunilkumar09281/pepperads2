import React from 'react';
import { Shield, FileText, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyTerms = () => {
   const navigate = useNavigate();
  return (
   

    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">
            Privacy & <span className="text-red-600">Terms</span>
          </h1>
          <h2 className="text-3xl font-semibold text-red-500 mb-6">
            Trust & Transparency
          </h2>
          <p className="text-xl max-w-3xl text-white">
            <span className="text-red-600 font-semibold">We’re committed</span> to protecting your data and ensuring full compliance with global privacy standards.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We take privacy and transparency seriously. Our terms of service, data policy, and compliance practices are clearly outlined so you can trust how your forms and responses are handled.
          </p>
        </div>

        {/* Privacy Policy Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-white mb-4">Privacy Matters</h3>
            <p className="text-gray-400 text-lg mb-6">
              Whether you're gathering insights through forms or monetizing survey traffic, your data security is our top priority. Our platform is built on principles of privacy, integrity, and user control.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="bg-red-600 p-1 rounded-full mr-3 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span>End-to-end data encryption (in transit and at rest)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-600 p-1 rounded-full mr-3 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span>No third-party data sharing without explicit consent</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-600 p-1 rounded-full mr-3 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span>Ongoing compliance checks and security audits</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gradient-to-br from-red-900 to-red-600 p-12 rounded-xl w-full max-w-sm flex items-center justify-center">
              <Lock className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>

        {/* Terms of Service Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-xl w-full max-w-sm flex items-center justify-center">
              <FileText className="w-24 h-24 text-red-600" />
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-4xl font-bold text-white mb-4">Terms of Service</h3>
            <p className="text-gray-400 text-lg mb-6">
              We believe in fair use, clear expectations, and accountability—for both users and providers. Our terms are structured to ensure a transparent and respectful partnership.
            </p>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-red-600 font-bold mb-2">Key Terms</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Reliable platform access and uptime</li>
                <li>• Ownership of your content and data</li>
                <li>• Clear billing and cancellation policies</li>
                <li>• Guidelines for acceptable usage</li>
                <li>• Guidelines for acceptable usage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance & Integration */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white mb-6 text-center">Compliance & Integration</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h4 className="text-red-600 font-bold text-xl mb-3">GDPR Compliance</h4>
              <p className="text-gray-400">
                Full compliance with European data protection regulations, including data access, portability, and the right to be forgotten.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h4 className="text-red-600 font-bold text-xl mb-3">Secure API Access</h4>
              <p className="text-gray-400">
                We support secure API-based integrations for advanced users and enterprise-level traffic funnels.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h4 className="text-red-600 font-bold text-xl mb-3">Data Retention</h4>
              <p className="text-gray-400">
                Transparent policies on how long we store your data and clear processes for data deletion upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Privacy & Terms?</h3>
          <p className="text-gray-400 mb-6">
            Our dedicated compliance team is available to answer any questions you may have about our privacy policies or terms of service.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Contact Support
          </button>

         
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-400">Transparent Data Policies</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">GDPR</div>
            <div className="text-gray-400">Compliant Platform</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-400">Security Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTerms;
