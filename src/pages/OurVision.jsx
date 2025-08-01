import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurVision = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Vision Hero" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">
            Our <span className="text-red-600">Vision</span>
          </h1>
          <h2 className="text-3xl font-semibold text-red-500 mb-6">
            Empowering
          </h2>
          <p className="text-xl max-w-3xl text-white animate-pulse">
            <span className="text-[#E31B23] font-semibold">We believe</span> to transform digital experiences with a powerful blend of creativity and innovation, turning ideas into immersive designs and effective monetization.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">

        {/* Speed & Simplicity + Image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-white mb-4">Speed Meets Simplicity</h3>
            <p className="text-gray-400 text-lg">
              From drag-and-drop builders to AI-powered form tools, our platform is designed for fast, intuitive experiences—so anyone can go from idea to live form in minutes.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Transparent PNG image */}
            <img 
              src="https://i.postimg.cc/52WYRpXQ/spedddddd.jpg" 
              alt="Speed and Simplicity" 
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Image + Result Driven */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="md:w-1/2 flex justify-center">
            {/* Transparent PNG image */}
            <img 
              src="https://i.postimg.cc/L5hCG20D/result.jpg" 
              alt="Result Driven" 
              className="w-full max-w-sm object-contain"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-white mb-4">Built for Results</h3>
            <p className="text-gray-400 text-lg">
              We're not just a survey platform—we're a launchpad for insight, engagement, and income generation.
            </p>
          </div>
        </div>

        {/* Centered Line */}
        <p className="text-xl text-center text-gray-300 mb-12">
          As the digital world becomes more interactive, we're empowering every user to create forms that do more.
        </p>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate('/ContactUs')}
            className="group flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
            Start Building Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
            <div className="text-gray-400">Form Templates</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">50k+</div>
            <div className="text-gray-400">Active Users globally</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">1M+</div>
            <div className="text-gray-400">Forms Created globally</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurVision;
